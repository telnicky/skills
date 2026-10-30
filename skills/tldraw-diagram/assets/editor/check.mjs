import assert from 'node:assert/strict'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { chromium } from 'playwright'

const root = path.dirname(fileURLToPath(import.meta.url))
const input = path.resolve(process.argv[2] ?? path.join(root, 'example.json'))
const output = path.resolve(process.argv[3] ?? path.join(process.cwd(), 'validation-output'))
const spec = JSON.parse(await readFile(input, 'utf8'))
await mkdir(output, { recursive: true })
const server = await createServer({ root, server: { host: '127.0.0.1', port: 0 } })
let browser
try {
  await server.listen()
  browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } })
  const errors = []
  page.on('console', (message) => { if (message.type() === 'error') console.error(message.text()) })
  page.on('pageerror', (error) => errors.push(error.message))
  const url = server.resolvedUrls.local[0]
  async function open(file) {
    await page.getByLabel('Open diagram', { exact: true }).setInputFiles(file)
    await page.waitForFunction(() => /^(Opened|Error:)/.test(document.querySelector('[role=status]').textContent))
    assert.match(await page.getByRole('status').innerText(), /^Opened/, 'Import must succeed')
    await page.evaluate(async () => { await document.fonts.ready })
  }
  async function save(name, button = 'Save .tldr') {
    const download = page.waitForEvent('download')
    await page.getByRole('button', { name: button, exact: true }).click()
    const file = path.join(output, name)
    await (await download).saveAs(file)
    return file
  }
  const records = async (file) => JSON.parse(await readFile(file, 'utf8')).records
  function verify(items) {
    const shapes = items.filter((record) => record.typeName === 'shape')
    const bindings = items.filter((record) => record.typeName === 'binding')
    assert.equal(shapes.length, spec.nodes.length + spec.edges.length)
    assert.equal(bindings.length, spec.edges.length * 2)
    for (const [i, edge] of spec.edges.entries()) {
      const connected = bindings.filter((b) => b.fromId === `shape:edge-${i}`)
      assert.equal(connected.find((b) => b.props.terminal === 'start')?.toId, `shape:node-${edge.from}`)
      assert.equal(connected.find((b) => b.props.terminal === 'end')?.toId, `shape:node-${edge.to}`)
    }
  }
  console.log('Opening editor', url)
  await page.goto(url)
  console.log('Importing spec')
  await open(input)
  console.log('Saving native file')
  const originalFile = await save('diagram.tldr')
  const original = await records(originalFile)
  verify(original)
  const invalidFile = path.join(output, 'invalid-spec.json')
  await writeFile(invalidFile, JSON.stringify({ ...spec, edges: [{ from: spec.nodes[0].id, to: '__missing__' }] }))
  await page.getByLabel('Open diagram', { exact: true }).setInputFiles(invalidFile)
  await page.waitForFunction(() => document.querySelector('[role=status]').textContent.startsWith('Error:'))
  const afterInvalid = await records(await save('after-invalid.tldr'))
  assert.deepEqual(afterInvalid.filter((r) => r.typeName === 'shape'), original.filter((r) => r.typeName === 'shape'), 'Invalid import must preserve existing diagram')
  await save('diagram.svg', 'Export SVG')
  const preview = await browser.newPage({ viewport: { width: 1800, height: 1200 } })
  const svg = await readFile(path.join(output, 'diagram.svg'))
  await preview.setContent(`<style>body{margin:0}img{display:block}</style><img alt="Diagram preview" src="data:image/svg+xml;base64,${svg.toString('base64')}">`)
  await preview.locator('img').evaluate((img) => img.decode())
  await preview.locator('img').screenshot({ path: path.join(output, 'diagram.png') })
  await preview.close()
  // A new page has a fresh store; import exercises the native parser and migrations.
  await page.reload()
  await open(originalFile)
  const reopened = await records(await save('reopened.tldr'))
  verify(reopened)
  assert.deepEqual(reopened.filter((r) => r.typeName === 'shape'), original.filter((r) => r.typeName === 'shape'))
  const nodeId = `shape:node-${spec.nodes[0].id}`
  const attached = original.filter((r) => r.typeName === 'binding' && r.toId === nodeId).map((r) => r.fromId)
  assert.ok(attached.length, 'Use an example with a connected first node')
  const arrowPaths = () => page.locator(attached.map((id) => `.tl-shape[data-shape-id="${id}"] path`).join(',')).evaluateAll((paths) => paths.map((p) => p.getAttribute('d')))
  const pathsBefore = await arrowPaths()
  const node = page.locator(`.tl-shape[data-shape-id="${nodeId}"]`)
  const box = await node.boundingBox()
  assert.ok(box, 'Node must be visible in the editor')
  const x = box.x + box.width / 2, y = box.y + box.height / 2
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x, y + 70, { steps: 12 })
  await page.mouse.up()
  const moved = await records(await save('moved.tldr'))
  verify(moved)
  assert.notEqual(moved.find((r) => r.id === nodeId).y, original.find((r) => r.id === nodeId).y, 'Dragging must change saved position')
  assert.notDeepEqual(await arrowPaths(), pathsBefore, 'Rendered bound arrow must follow the moved node')
  await node.dblclick()
  await page.locator('[contenteditable=true]').fill('Edited label')
  await page.keyboard.press('Escape')
  const edited = await records(await save('edited.tldr'))
  assert.match(JSON.stringify(edited.find((r) => r.id === nodeId).props.richText), /Edited label/)
  assert.deepEqual(errors, [], 'No browser runtime errors')
  console.log(JSON.stringify({ passed: true, shapes: spec.nodes.length + spec.edges.length, bindings: spec.edges.length * 2, checked: ['native save and fresh reopen', 'invalid import preserves content', 'node drag updates bound arrow', 'editable label persists', 'SVG export', 'PNG rendered from SVG'], output }, null, 2))
} finally {
  await browser?.close()
  await server.close()
}

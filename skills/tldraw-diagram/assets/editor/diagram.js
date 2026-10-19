import { createShapeId, toRichText } from 'tldraw'

const roles = { actor: 'blue', service: 'black', store: 'violet', decision: 'orange', outcome: 'green' }
const nodeId = (id) => createShapeId(`node-${id}`)

export function validateSpec(spec) {
  if (!spec || !Array.isArray(spec.nodes) || !Array.isArray(spec.edges) || !spec.nodes.length) {
    throw new Error('Expected nonempty nodes and an edges array.')
  }
  const ids = new Set(), cells = new Set()
  for (const node of spec.nodes) {
    if (!node || typeof node.id !== 'string' || !/^[a-zA-Z0-9_-]+$/.test(node.id) || ids.has(node.id)) throw new Error('Node IDs must be unique letters, digits, hyphens or underscores.')
    if (typeof node.label !== 'string' || !node.label.trim() || node.label.length > 80) throw new Error(`Node ${node.id}: use a label of 1–80 characters.`)
    if (!Object.hasOwn(roles, node.role)) throw new Error(`Node ${node.id}: unknown role.`)
    if (![node.row, node.col].every((n) => Number.isInteger(n) && n >= 0 && n <= 20)) throw new Error(`Node ${node.id}: row and col must be integers from 0 to 20.`)
    const cell = `${node.row}:${node.col}`
    if (cells.has(cell)) throw new Error(`Two nodes occupy ${cell}.`)
    cells.add(cell); ids.add(node.id)
  }
  for (const edge of spec.edges) {
    if (!edge || !ids.has(edge.from) || !ids.has(edge.to) || edge.from === edge.to) throw new Error('Edges must connect two different existing nodes.')
    if (edge.label !== undefined && (typeof edge.label !== 'string' || edge.label.length > 24)) throw new Error('Edge labels must be at most 24 characters.')
    if (edge.bend !== undefined && (!Number.isFinite(edge.bend) || Math.abs(edge.bend) > 1000)) throw new Error('Edge bend must be a number between -1000 and 1000.')
  }
  return spec
}

// Explicit grid placement keeps code-derived topology separate from layout decisions.
export function drawDiagram(editor, spec) {
  validateSpec(spec)
  const nodes = new Map(spec.nodes.map((node) => [node.id, node]))
  editor.run(() => {
    editor.deleteShapes([...editor.getCurrentPageShapeIds()])
    editor.createShapes(spec.nodes.map((node) => ({
      id: nodeId(node.id), type: 'geo', x: node.col * 460, y: node.row * 260,
      props: { geo: node.role === 'decision' ? 'diamond' : 'rectangle', w: 280, h: 150,
        color: roles[node.role], fill: 'semi', dash: 'solid', size: 'm', font: 'sans',
        richText: toRichText(node.label) },
    })))
    for (const [index, edge] of spec.edges.entries()) {
      const from = nodes.get(edge.from), to = nodes.get(edge.to)
      const dx = (to.col - from.col) * 460, dy = (to.row - from.row) * 260
      const horizontal = Math.abs(dx) >= Math.abs(dy)
      const start = horizontal ? { x: dx > 0 ? 1 : 0, y: 0.5 } : { x: 0.5, y: dy > 0 ? 1 : 0 }
      const end = { x: 1 - start.x, y: 1 - start.y }
      const id = createShapeId(`edge-${index}`)
      editor.createShape({ id, type: 'arrow', x: from.col * 460 + 140, y: from.row * 260 + 75,
        props: { start: { x: 0, y: 0 }, end: { x: dx, y: dy }, bend: edge.bend ?? 0,
          color: 'grey', dash: 'solid', size: 's', font: 'sans',
          arrowheadEnd: 'arrow', richText: toRichText(edge.label ?? '') } })
      editor.createBindings([
        { type: 'arrow', fromId: id, toId: nodeId(edge.from), props: { terminal: 'start', normalizedAnchor: start, isExact: false, isPrecise: true } },
        { type: 'arrow', fromId: id, toId: nodeId(edge.to), props: { terminal: 'end', normalizedAnchor: end, isExact: false, isPrecise: true } },
      ])
    }
  })
  editor.zoomToFit({ animation: { duration: 0 } })
}

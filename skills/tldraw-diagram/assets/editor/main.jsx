import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Tldraw, parseTldrawJsonFile, serializeTldrawJson } from 'tldraw'
import { getAssetUrlsByImport } from '@tldraw/assets/imports.vite'
import { drawDiagram, validateSpec } from './diagram.js'
import 'tldraw/tldraw.css'
import './style.css'

const assetUrls = getAssetUrlsByImport()

function save(blob, name) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url; link.download = name; link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function App() {
  const [editor, setEditor] = useState(null)
  const [status, setStatus] = useState('Open a diagram spec (.json) or native document (.tldr).')
  const [name, setName] = useState('diagram')
  const run = async (action) => {
    try { await action() } catch (error) { setStatus(`Error: ${error.message}`) }
  }
  async function open(file) {
    if (!file) return
    const json = await file.text()
    if (file.name.endsWith('.tldr')) {
      const parsed = parseTldrawJsonFile({ json, schema: editor.store.schema })
      if (!parsed.ok) throw new Error(`Cannot open native document: ${parsed.error.type}`)
      editor.loadSnapshot(parsed.value.getStoreSnapshot())
      editor.zoomToFit({ animation: { duration: 0 } })
    } else {
      const spec = validateSpec(JSON.parse(json))
      drawDiagram(editor, spec)
    }
    setName(file.name.replace(/\.(json|tldr)$/i, ''))
    setStatus(`Opened ${file.name}. Edit shapes and labels on the canvas, then save.`)
  }
  return <>
    <header>
      <strong>Diagram workspace</strong>
      <label className="button">Open JSON / .tldr<input aria-label="Open diagram" type="file" accept=".json,.tldr" disabled={!editor} onChange={(event) => { const file = event.target.files[0]; event.target.value = ''; run(() => open(file)) }} /></label>
      <button disabled={!editor} onClick={() => run(async () => { save(new Blob([await serializeTldrawJson(editor)], { type: 'application/json' }), `${name}.tldr`); setStatus('Saved editable .tldr document.') })}>Save .tldr</button>
      <button disabled={!editor} onClick={() => run(async () => {
        await document.fonts.ready
        const { blob } = await editor.toImage([...editor.getCurrentPageShapeIds()], { format: 'svg', background: true, padding: 32 })
        save(blob, `${name}.svg`); setStatus('Saved SVG preview.')
      })}>Export SVG</button>
      <span role="status">{status}</span>
    </header>
    <main><Tldraw assetUrls={assetUrls} onMount={setEditor} /></main>
  </>
}
createRoot(document.getElementById('root')).render(<App />)

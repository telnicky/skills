# Native format and SDK maintenance

Tested against `tldraw` and `@tldraw/assets` 5.5.2. The package lock pins the complete local runtime. Upgrade them together and rerun the real browser check before changing the supported version.

Official references:

- [Create an arrow](https://tldraw.dev/examples/create-arrow): create an arrow shape, then two `editor.createBindings` records with `terminal: 'start' | 'end'`, target shape IDs and normalized anchors. Drawn endpoints alone do not establish a connection.
- [Rich text](https://tldraw.dev/reference/tlschema/toRichText): standard geo and arrow labels use `richText: toRichText(label)` in this version.
- [Native serialization](https://tldraw.dev/reference/tldraw/serializeTldrawJson): `await serializeTldrawJson(editor)` produces the `.tldr` payload, including `tldrawFileFormatVersion`, schema and records.
- [Native parser](https://tldraw.dev/reference/tldraw/parseTldrawJsonFile): call `parseTldrawJsonFile({json, schema: editor.store.schema})`, check `result.ok`, then load `result.value.getStoreSnapshot()` into a fresh editor with `editor.loadSnapshot(...)`.
- [Persistence](https://tldraw.dev/docs/persistence): a `getSnapshot` result with document/session state is a different API. Do not rename arbitrary snapshot JSON to `.tldr`.
- [Editor](https://tldraw.dev/reference/editor/Editor): `editor.toImage(shapeIds, {format: 'svg'})` returns a blob. Wait for `document.fonts.ready` before export. The template uses `getAssetUrlsByImport` from `@tldraw/assets/imports.vite` to serve the matching assets locally.
- [SDK license](https://tldraw.dev/community/license): local development is the intended use here. Review current license terms before a production deployment; this skill does not supply a license.

Compatibility is verified in the bundled SDK editor. A newer tldraw.com release or a third-party app with custom shapes can have different migrations. Test the user's target app if they require compatibility with it. SVG is a preview, not a substitute for the editable `.tldr` document.

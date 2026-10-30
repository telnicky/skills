---
name: tldraw-diagram
description: Create editable tldraw architecture and user-journey diagrams from descriptions, process notes, or code flows, with bound arrows and an SVG preview.
---

# Editable tldraw diagrams

Produce a native `.tldr` document plus a preview. Use standard editable shapes and real arrow bindings. This skill is independently authored; it does not depend on an external diagram agent.

## From evidence to a diagram

Read the supplied description or relevant code entry points. Identify the audience, main path, decisions, and failure branches. Use labels from the source. Mark inferred relationships in the handoff; do not invent services or claim a code path was verified without reading it.

Choose one view per page: component ownership and data flow for architecture, or actor actions and decision outcomes for journeys. Start with the main path left to right. Put alternatives below it. Split a dense view before labels become unreadable. Read [references/layout.md](references/layout.md) when choosing positions and labels.

## Create and edit

1. Copy `assets/editor/` to a new task output directory, excluding `node_modules` and `dist` if present. Work in the copy so the installed skill and its synthetic example remain unchanged.
2. Use Node 22.12+ (tested with Node 26). Run `npm ci` in the copy. Dependencies and local font assets are pinned in the lockfile. Run `npx playwright install chromium` if browser validation is needed and Chromium is absent.
3. Write a JSON spec based on `example.json`. Read [references/spec.md](references/spec.md) for the small input schema. Keep source notes outside the JSON. The JSON is a generation input, not the editable deliverable.
4. Run `npm run dev` and open the printed localhost URL. Use **Open JSON / .tldr** to load the spec. Adjust positions and labels on the canvas. **Save .tldr** preserves those edits; **Export SVG** produces a static preview. Opening a JSON spec replaces the current page, so save edits first. Reopening the spec regenerates the diagram; reopen the `.tldr` to continue manual edits.
5. For repeatable generation and browser validation, run `npm run check -- /absolute/path/diagram.json /absolute/path/output`. This saves `diagram.tldr`, `diagram.svg`, and `diagram.png`, reopens the native file in a fresh editor, drags a connected node, edits its label, and checks the saved records. Files named `moved`, `edited`, and `reopened` are test evidence; deliver the original `diagram.tldr` unless the user wants those edits. The first spec node must have a connection for this check. Output files are overwritten, so use a fresh output folder.

Inspect the actual preview at normal reading size. Confirm that labels fit, paths do not cross boxes, and branch labels are unambiguous. Reposition and re-export when needed. The automated checks prove file and editing behavior, not layout quality.

For an existing `.tldr`, open it directly, make the requested edits, and save to a new output folder. Preserve other pages and content. This generator targets standard shapes; do not promise compatibility with custom shapes from another app.

## Deliver

Link the `.tldr`, SVG preview, and optional source spec. State the view, any inferred relationships, and the checks actually run. Include the localhost reopen command or the instruction to open the file in tldraw. Keep the workspace local: production SDK deployment needs separate license review. Read [references/api.md](references/api.md) when changing SDK code or upgrading versions.

Example request: “Use $tldraw-diagram to map customer checkout from these handlers. Show validation, inventory approval, and the unavailable-stock branch. Give me an editable file and a preview.”

# Diagram input

The bundled `assets/editor/example.json` models a synthetic order flow, including a database write and an unavailable-stock branch. Copy and adapt it.

- `nodes`: nonempty array of `{id, label, role, row, col}`.
- `id`: unique letters, digits, `_` or `-`.
- `label`: nonempty string, up to 80 characters. Prefer a short name and one short subtitle separated by `\n`. Use shorter text for diamonds.
- `role`: `actor` (blue), `service` (black), `store` (violet), `decision` (orange diamond), or `outcome` (green). Labels carry meaning as well as color.
- `row`, `col`: integers 0–20. One node per grid cell. Cells are 460 × 260 canvas units and boxes start at 280 × 150.
- `edges`: array of `{from, to, label?, bend?}`. Endpoints reference two different node IDs. Labels have at most 24 characters. `bend` is a signed curve offset in canvas units, from -1000 to 1000; default 0. Use a modest bend for return paths or parallel connections and inspect the result.

Example minimal input:

```json
{"nodes":[
  {"id":"user","label":"User","role":"actor","row":0,"col":0},
  {"id":"api","label":"API","role":"service","row":0,"col":1}
],"edges":[{"from":"user","to":"api","label":"Request"}]}
```

Grid placement is intentional. The helper is not a graph-routing engine. It does not avoid obstacles on long edges or route self-loops. Use adjacent nodes for the main path, then adjust complex connectors in the editor. For lanes, groups, extra pages, and custom annotations, use native editor controls after generation. Preserve the final `.tldr`; rerunning JSON generation discards manual layout changes on the current page.

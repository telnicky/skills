# Layout and readability

- Read left to right for the main path; put rejection or recovery below the decision. Use top-to-bottom when time or lanes make that clearer.
- Keep one abstraction level per view. An architecture view shows components and directed interactions. A journey shows actions, decisions, and visible outcomes. Add a second page for detail instead of mixing every function into an overview.
- Keep roughly 4–12 nodes in an overview. This is a readability target, not an input limit. Split a large diagram into useful sections or pages.
- Put actions on arrows (“Publish event”, “Read order”) and names on components. Use explicit branch labels (“Available”, “Unavailable”), not unlabeled forks. Keep diamond labels especially short.
- Avoid edges through nodes and labels. Leave an empty row or column for return paths, then bend the connector in the editor. Separate opposing or parallel edges. The generator does not perform obstacle avoidance.
- Use the role palette consistently. Do not rely on color alone: retain role-specific wording and diamond decisions. Prefer solid fills, sans-serif type, and short labels for technical diagrams.
- Review at the intended display size. Check the actual SVG and editor screenshot for clipping, tiny text, overlapping labels, and excess whitespace. A file can be valid while the diagram is unclear.
- Drag a connected node and confirm the connector remains attached. Double-click a label and confirm it can be changed. Reopen the saved native file before calling it editable.

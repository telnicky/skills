# Skills

Custom agent skills maintained by telnicky. Each skill has its own folder under `skills/` so the collection can grow independently of any one project.

| Skill | Purpose |
| --- | --- |
| [night-shift](skills/night-shift/SKILL.md) | Ticket updates and review-readiness evidence for night-shift coding tasks. |
| [tldraw-diagram](skills/tldraw-diagram/SKILL.md) | Create editable architecture and user-journey diagrams with bound arrows and SVG previews. |
| [railscast](skills/railscast/SKILL.md) | Teach a topic through short lessons that build on one concrete example. |
| [visual-guide](skills/visual-guide/SKILL.md) | Create brief visual references and teaching guides with a clear main answer and optional detail. |

## Use in Codex

Ask Codex to install the skill from this repository:

```text
Install visual-guide from telnicky/skills at skills/visual-guide.
Install railscast from telnicky/skills at skills/railscast.
```

Private repositories require an account with access. After installation, the skill is available on the next turn. Invoke it with a request such as:

```text
Use $visual-guide to show who owns each area, with role lists available on demand.
Use $railscast to teach me how database indexes work.
```

## Night-shift use

For a night-shift launch or continuation, include `Use $night-shift for ticket updates and review readiness.` in the task prompt. Claude Code can invoke the same installed skill as `/night-shift`. This applies only to night shifts.

## Add a skill

Create `skills/<skill-name>/SKILL.md` with YAML `name` and `description` fields. Keep the instructions focused on decisions that improve the task. Add references, assets, or scripts only when the skill needs them. Keep supporting paths relative to the skill folder.

Add an entry to the table above. Validate the skill with the skill-creator tools available in Codex, then try it on a representative request. Keep generated test artifacts outside the repository.

The optional `agents/openai.yaml` file contains Codex display metadata. The skill's instructions and references remain usable without that metadata.

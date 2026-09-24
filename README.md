# Skills

Custom agent skills maintained by telnicky. Each skill has its own folder under `skills/` so the collection can grow independently of any one project.

| Skill | Purpose |
| --- | --- |
| [visual-guide](skills/visual-guide/SKILL.md) | Create brief visual references and teaching guides with a clear main answer and optional detail. |

## Use in Codex

Ask Codex to install the skill from this repository:

```text
Install visual-guide from telnicky/skills at skills/visual-guide.
```

Private repositories require an account with access. After installation, the skill is available on the next turn. Invoke it with a request such as:

```text
Use $visual-guide to show who owns each area, with role lists available on demand.
```

## Add a skill

Create `skills/<skill-name>/SKILL.md` with YAML `name` and `description` fields. Keep the instructions focused on decisions that improve the task. Add references, assets, or scripts only when the skill needs them. Keep supporting paths relative to the skill folder.

Add an entry to the table above. Validate the skill with the skill-creator tools available in Codex, then try it on a representative request. Keep generated test artifacts outside the repository.

The optional `agents/openai.yaml` file contains Codex display metadata. The skill's instructions and references remain usable without that metadata.

# Skills

Custom agent skills maintained by telnicky. Each skill has its own folder under `skills/` so the collection can grow independently of any one project.

| Skill | Purpose |
| --- | --- |
| [create-training-artifact](skills/create-training-artifact/SKILL.md) | Create concise visual training guides with concrete examples and optional supporting detail. |

## Use in Codex

Ask Codex to install the skill from this repository:

```text
Install create-training-artifact from telnicky/skills at skills/create-training-artifact.
```

Private repositories require an account with access. After installation, the skill is available on the next turn. Invoke it with a request such as:

```text
Use $create-training-artifact to turn these process notes into a concise visual training guide for new staff.
```

## Add a skill

Create `skills/<skill-name>/SKILL.md` with YAML `name` and `description` fields. Keep the instructions focused on decisions that improve the task. Add references, assets, or scripts only when the skill needs them. Keep supporting paths relative to the skill folder.

Add an entry to the table above. Validate the skill with the skill-creator tools available in Codex, then try it on a representative request. Keep generated test artifacts outside the repository.

The optional `agents/openai.yaml` file contains Codex display metadata. The skill's instructions and references remain usable without that metadata.

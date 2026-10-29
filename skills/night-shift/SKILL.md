---
name: night-shift
description: Keep ticket updates and human-review evidence complete during night-shift coding tasks. Use when starting or continuing a night shift, or preparing its handoff; not for ordinary coding requests.
---

# Night shift

## Ticket updates

For the task's authorized ticket, post a concise update when work starts, when a blocker changes the next action, and at handoff. Include the branch and PR links when available, completed work, the exact blocker or remaining checks, and the next action. At start, state the intended work if nothing is completed yet. Avoid constant progress narration on the ticket.

Use only the ticket reporting authorized for this night shift. Do not add recipients or channels. If access or permission prevents an update, report what remains unpublished and why; do not bypass a denial.

## Ready for human review

- Prefer the simplest implementation that completes the agreed scope. Preserve behavior, user changes and unrelated work.
- Run the repository's actual formatting, lint, test and CI commands, including the owning package's runner. Record failures and fixes; a substitute command is not proof the real gate passes.
- For shared helper or setup changes, inventory affected consumers and their test configurations, then reconcile that inventory with the suites actually run. Include unchanged consumers and distinguish helper-only files. State coverage gaps and typecheck exclusions.
- Check current main before final evidence. Safely resolve authorized conflicts while preserving upstream changes and scenarios, then verify the resulting head. Escalate a conflict that needs a scope or product decision.
- Use the existing Show Me skill for the PR description: give a clear review map and appropriate before/after or directory-tree diff. Pin evidence to the final head and distinguish passed, failed, skipped and unrun checks. Draft-skipped CI is unrun, not passing. Keep the requested draft state and CI gates; report any verification restriction.
- Group coherent, low-risk test refactors without unnecessary PR proliferation. Keep meaningful production rollout stages separate.
- At handoff, link the PR and state its actual review/CI state, remaining limitations and next action. Do not label incomplete verification as ready.

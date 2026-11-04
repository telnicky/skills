---
name: night-shift
description: Keep ticket updates and human-review evidence complete during night-shift coding tasks. Use when starting or continuing a night shift, or preparing its handoff; not for ordinary coding requests.
---

# Night shift

## Ticket updates

At kickoff, list the exact Tonight ticket IDs selected for this shift. Treat dependencies as context; ask before adding tickets or expanding scope.

Before starting a selected ticket, reconcile its existing task, checkout, branch and PR. Resume the current owner's task rather than duplicating work. Classify selected tickets as active, executable now, or waiting on a named prerequisite. A Ready board status alone does not prove work is unclaimed.

For the task's authorized ticket, post a concise update when work starts, when a blocker changes the next action, and at handoff. Include the branch and PR links when available, completed work, the exact blocker or remaining checks, and the next action. At start, state the intended work if nothing is completed yet. Avoid constant progress narration on the ticket.

Use only the ticket reporting authorized for this night shift. Do not add recipients or channels. If access or permission prevents an update, report what remains unpublished and why; do not bypass a denial.

## Commits

For night-shift work, always create unsigned commits with `git -c commit.gpgsign=false commit ...`. Keep global and repository signing settings unchanged. This permission does not waive required signatures, branch protections, review, or authorization to publish, merge or deploy. If the repository requires signed commits, report the blocker instead of bypassing it.

Keep `AUTOQA.md` and local QA scratch artifacts untracked. Inspect the staged diff before publishing. Put user-requested evidence in the PR report or video rather than committing local test plans. Preserve legitimate committed regression tests.

## AutoQA for every PR

Run AutoQA twice for every Night Shift PR, alongside the existing testing, review and CI gates. Use existing tools with the [pinned Parcha AutoQA guidance](https://github.com/Parcha-ai/parcha-skills/blob/c82883b15e5e8f02483bee513b3c8dcac48e3c9e/autoqa/skills/autoqa/SKILL.md). This is a guidance-based workflow; it does not imply Parcha software was installed or executed. Obtain per-action approval before installing or running newly acquired, unrecognized software.

1. Before the findings run, map the selected PR's diff to a planned behavior coverage inventory. For each row, name the user entry point, check, pass criterion and evidence to capture. Include changed flows and directly affected paths, health, and auth when affected. State coverage totals and time/resource limits before execution.

   For changed stateful UI, include relevant boundary and interaction sequences: empty and long inputs, focused versus selected items, stale or repeated actions, reload or navigation, and permission or failure recovery. Derive cases from the diff and likely failure modes, beyond the happy path.

2. Run the planned checks for findings through their actual entry points. Keep checks synthetic, isolated and bounded to the selected PR. Use no production or real patient data.
3. After fixes, run fresh confirmation on the exact final head. Recheck every finding and all changed or fix-affected flows; prior evidence is context only. Verify the tested instance matches that head. If no fixes were needed, independently confirm the final head in the second run. Later material changes invalidate affected evidence and require those checks again.

For both runs, record tested base/head commit IDs, planned and completed coverage, row results and evidence paths. Distinguish `PASS`, `PRODUCT FAILURE`, `BLOCKED` and `NOT RUN`. Evidence must show the asserted behavior. UI changes require real browser/device evidence; unit/component checks do not count as live UI. When the app, tools, fixtures or other prerequisites are absent, report the exact blocker and untested coverage. Never declare a pass for blocked or unrun checks.

## Ready for human review

- Prefer the simplest implementation that completes the agreed scope. Preserve behavior, user changes and unrelated work.
- Run the repository's actual formatting, lint, test and CI commands, including the owning package's runner. Record failures and fixes; a substitute command is not proof the real gate passes.
- Add focused tests for provider behavior the implementation depends on. Check the provider's actual semantics rather than relying only on local mocks.
- For shared helper or setup changes, inventory affected consumers and their test configurations, then reconcile that inventory with the suites actually run. Include unchanged consumers and distinguish helper-only files. State coverage gaps and typecheck exclusions.
- Check current main before final evidence. Safely resolve authorized conflicts while preserving upstream changes and scenarios, then verify the resulting head. Escalate a conflict that needs a scope or product decision.
- Use the existing Show Me skill for the PR description: give a clear review map and appropriate before/after or directory-tree diff. Pin evidence to the final head and report observed CI results as passed, failed, skipped or unrun. Draft-skipped CI is unrun, not passing. Keep the requested draft state and CI gates; report any verification restriction.
- Group coherent, low-risk test refactors without unnecessary PR proliferation. Keep meaningful production rollout stages separate.
- At handoff, link the PR and state its actual review/CI state, remaining limitations and next action. Do not label incomplete verification as ready.
- Move genuinely review-ready tickets to the board's actual review column, then read back their state to confirm the move.

For each production PR, include these four lines in the handoff:

- Immediate merge effect: what changes as soon as it merges.
- Before merge: prerequisites that must be complete.
- After merge: what to observe and who owns that observation.
- Next PR gate: the evidence or condition required before the next PR proceeds.

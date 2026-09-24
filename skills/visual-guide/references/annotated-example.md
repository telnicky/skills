# Two examples of a brief visual guide

These examples use fictional teams, people, and policies. They show editing choices, not production ownership or access rules. Choose a format that fits the reader's task; neither example is a required layout.

## Find an owner in ten seconds

**Reader's task:** Find the team responsible for a change and identify an unresolved boundary.

A compact ownership guide could put these three cards in one row on a wide screen and stack them on a phone:

| Team | Owns | Supporting detail |
| --- | --- | --- |
| Commerce | Catalog, checkout, and order changes | Expand the domain inventory |
| Fulfillment | Packing, dispatch, and delivery exceptions | Expand the domain inventory |
| Foundations | Identity, permissions, and shared task mechanics | Expand the service inventory |

The headings and ownership lines carry the answer. Do not repeat them in a separate map, responsibility table, and summary. Put each inventory inside its team's card so the reader has one place to look.

Keep an essential boundary visible: **Foundations owns task mechanics; each workflow team owns the rules that create and complete its tasks.** A collapsed inventory can supply APIs and implementation notes, but must not reverse that statement.

Also show the unresolved decision: **Carrier connector ownership is unassigned.** Do not assign it to Fulfillment merely because that team consumes the data.

The overview should take about a minute to read. A reader should find an owner in about ten seconds. These are editing checks, not timers or hard limits. Preserve a necessary exception even when it adds words. A dense subject may need more space; repeated explanation does not.

## Teach the rule when lookup is insufficient

**Reader's task:** Apply a permission rule to a new case.

In this fictional policy, a single role assignment must supply both permission for an action and scope covering the patient. Maya has:

| Assignment | Permission | Scope |
| --- | --- | --- |
| Intake | Read patient details | North Branch |
| Clinician | Update notes | River Team |

Dan belongs to North Branch, but not River Team. Maya has no other access path to Dan.

Show Dan's membership beside the assignments. A small action control can reveal **Read details: allowed through Intake** or **Update note: denied; neither assignment supplies both permission and matching scope**. Keep the assignments visible while the result changes. This single contrast teaches why combining permission from one assignment with scope from another would be wrong under this policy.

Explain storage only if the reader needs it. A null Company-membership reference on an Organization-level assignment does not prove the person lacks Company membership elsewhere. Label the card **Assigned at: Organization**, then put nullable fields in optional schema detail.

## Ideas to borrow

- [Impeccable: distill](https://github.com/pbakaus/impeccable/blob/main/skill/reference/distill.md): remove repeated content and unnecessary structure.
- [Impeccable: clarify](https://github.com/pbakaus/impeccable/blob/main/skill/reference/clarify.md): make the next needed fact easy to find.
- [Writing Clearly and Concisely](https://github.com/obra/the-elements-of-style/blob/main/skills/writing-clearly-and-concisely/SKILL.md): use concrete words and edit out excess prose.

These are inspirations, not required dependencies. Apply their principles without copying their text or imposing their visual style.

---
name: visual-guide
description: Create or revise concise visual training guides for onboarding, guided walkthroughs, and teaching a system, process, or policy. Use when the user wants a training artifact with concrete examples and optional supporting detail. Ordinary explanatory answers do not need this skill.
---

# Visual guide

Produce a guide that lets a reader explain the main rule and apply it to a new example without reading the implementation details. Support independent reading and a live walkthrough.

When the format is unspecified, use a scrolling presentation with a short sequence of visual lessons. Follow a requested format such as a slide deck or document. Use available format-specific tools and skills for implementation and delivery. Keep their publishing and authorization rules; this skill does not grant separate permission to publish.

## Establish the lesson

Infer the audience, prior knowledge, learning outcome, source material, essential rules, and delivery context from the request. Ask only for missing information that would materially change the artifact. Do not require an intake questionnaire.

Write one sentence stating what the reader should understand or do after the guide. Use it to decide which sections belong.

Distinguish current behavior, proposed changes, assumptions, and open decisions. Check unexplained differences in the model before teaching it as settled. Ground technical claims in the supplied material or inspected sources. Clearly label fictional examples.

## Build the teaching sequence

Introduce concepts before examples that depend on them. For a system explanation, a useful order is objects, relationships, behavior, then implementation when needed. Adapt the sequence to the subject.

Give each section one main teaching point. Use a heading that states the lesson, a short introduction, a primary visual, and a takeaway when useful. Read the headings in order to check that the explanation develops coherently. Do not force a fixed section count or duplicate the same point in every element.

Choose the smallest example set that shows the rule and its important boundary. Reuse people, objects, IDs, and relationships across sections. Label a separate hypothetical case when its facts differ. Include an outcome that does not qualify, or an exception, when that distinction matters to the lesson.

For an annotated example of these decisions, read [the reference artifact](references/annotated-example.md). Use it when choosing the sequence or reviewing clarity. It explains the method without requiring access to the original site.

## Make the explanation visible

Select a visual for the relationship being taught:

- Give distinct objects their own boxes. Use grouping and labeled connections to show ownership or hierarchy.
- Show inclusion and exclusion with visible groups and text labels.
- Compare similar cases side by side or in a short table.
- Use timelines for order and duration. Use record diagrams only when storage relationships help this audience.
- Add a small interaction when changing a condition teaches the rule. Update the result and explanation together.

Keep the visual vocabulary and terminology consistent. Explain what a relationship means in the example. Technical field labels should not imply a false fact about a person or object.

Use readable type, generous space around labels, and text or symbols alongside color. Keep ordinary content readable on a phone. Let a large diagram scroll within its own region. Do not shrink the whole lesson or force scroll snapping to fit a fixed slide height.

## Disclose detail progressively

Make the main sequence understandable with all supporting sections closed. Put record examples, code, queries, evidence, and detailed rules in clearly named expandable sections. Use appendices, notes, or reference pages for formats without expansion.

Explain the concrete example before its implementation. Prefer peer detail sections to nested drawers. Use short steps, readable record cards, or small tables inside them. A detail section must answer a specific question.

Add a full reference diagram or evidence appendix only when it supports the task. Keep proposed architecture distinct from existing implementation. Do not add quizzes, dashboards, decorative illustrations, or extra pages merely to fill out the artifact.

## Review and deliver

Check the lesson before polishing its appearance:

- Can the reader state the rule and explain two meaningfully different outcomes from the main sequence?
- Can the reader predict what changes when one relevant condition changes?
- Do text, diagrams, examples, and interactive results agree? Details should add depth without correcting a misleading simplification.
- Does every section help the learning outcome? Remove repetition and unnecessary examples.

When a model changes, update its text, visuals, interactions, examples, and appendices together. When a section is removed, update navigation, counts, links, and affected build checks.

Verify the actual output, including links, controls, keyboard use, and responsive layout where relevant. Use meaningful checks rather than tests of exact prose. For a complex subject, a short independent reader review can check understanding and application.

Deliver the completed artifact in the requested form. Report what was checked and any material limitation. Preserve the user's scope and sharing requirements.

---
name: railscast
description: Teach technical or nontechnical topics through short, cumulative Railscasts-style lessons built around one concrete example. Use when the user asks to explain something like Railscasts, use a railscast format, break a topic into simple teachable episodes, or teach through small demonstrations that build on each other. Also use when explicitly invoked to simplify an existing explanation. Produce written lessons by default; honor explicit requests for interactive pacing or another medium.
---

# Railscast

Teach through one example that becomes more capable or better understood with each episode. Follow the rhythm: encounter a problem, change one thing, observe the result, then name the concept.

## 1. Choose a small learning journey

- Infer the topic, audience, prior knowledge, and desired outcome from the request and visible conversation. Preserve the user's source material and requested scope when simplifying an existing explanation.
- Ask only when a missing detail would materially change the lesson. Otherwise state a reasonable assumption briefly and begin.
- State one concrete outcome: what the learner will be able to explain, predict, calculate, decide, or build.
- Choose one small running example. Keep its people, names, numbers, and evolving state consistent throughout.
- Match the example to the domain: a tiny app for software, one recipe or purchase for math, one dataset for statistics, one scene for photography, or one scenario or source for a conceptual topic. Do not force noncoding topics into software metaphors.
- Default to four to seven episodes for a broad breakdown; use fewer for a narrow topic. Treat the count as a guide, not a quota. Honor the user's time and length constraints.
- Order episodes by dependency. Let each episode address a question or limitation exposed by the previous one. Avoid encyclopedia sections such as history, features, advantages, and competitors unless they serve the requested learning outcome.
- Introduce terminology after the learner encounters the behavior it describes. Include only prerequisites needed for the next demonstration.

Read [lesson-patterns.md](references/lesson-patterns.md) when choosing a running example or calibrating episode size. Adapt its patterns rather than copying a fixed curriculum.

## 2. Deliver the lessons

Open with one or two sentences naming the running example and the end goal. Start teaching immediately. Add a roadmap only when it helps orientation; do not repeat every episode in both a roadmap and a recap.

Use an action-oriented heading such as `Episode 3: Make the counter remember`. Give each episode these five beats, combining labels where that reads naturally:

1. **Goal:** State one small improvement or question in one sentence.
2. **Problem:** Show what the example currently cannot do or explain. A genuine question is enough; do not manufacture a broken implementation just to create drama.
3. **Small change:** Add one rule, calculation, behavior, observation, or decision. Show the smallest meaningful code change, worked calculation, annotated source, or concrete action.
4. **What you observe:** Show a specific result with values, before/after behavior, an output, or a check the learner can perform. Use `Expected result` for an unexecuted demonstration. Label hypothetical scenarios and distinguish them from evidence about actual events.
5. **What you learned:** Name the one concept and explain why it helped in plain language. Add a local caveat only when omitting it would teach a false rule.

Keep most episodes around 100-180 words excluding necessary code. Prefer roughly 600-1,200 words for an initial broad lesson, adapting to scope rather than padding. Use short paragraphs and compact snippets. Keep the learner's attention on the change and its consequence.

For code, show where a snippet belongs and whether it replaces or adds to earlier code. Label a sketch or partial snippet clearly. Keep essential setup visible when the user expects to run it; move repetitive scaffolding out of the teaching flow. Never present disconnected snippets as a complete runnable project.

For noncoding topics, let the small change be a calculation, a new piece of evidence, a constraint, or an alternative decision. Keep observed outcomes separate from predictions, especially for human behavior and uncertain systems. Do not imply that changing one variable guarantees a real-world result.

Use a compact table or diagram when it makes the change easier to see. Add interaction only when it improves the lesson. Avoid decorative dashboards and visuals that repeat the surrounding prose.

## 3. Respect the requested pace and medium

- Deliver the complete requested sequence in the current response by default. Do not stop at an outline or require the user to reply `next` to receive already requested content.
- If the user explicitly asks for one episode at a time, show a short roadmap and teach only the current episode. Offer at most one brief prediction or practice question before pausing.
- On continuation, keep the established example and resume from the last completed step. Incorporate corrections without restarting the course or changing the example unnecessarily.
- Treat Railscasts as a request for concise, demonstration-led teaching. Produce text by default. Create a video, app, repository, or downloadable tutorial only when the requested deliverable calls for it, using the appropriate available skill and workflow.
- End with a small transfer exercise or up to three natural follow-on lessons if useful. Do not turn the ending into another survey of the topic or an unnecessary approval request.

## 4. Preserve accuracy while simplifying

- Verify changeable or specialized facts against current authoritative sources, especially API behavior and product limits. Reuse verified sources from the visible conversation when sufficient. Put concise citations near the claims they support.
- Distinguish code actually run and observations actually measured from illustrative code and predicted outputs. Never claim a demonstration passed merely because the snippet looks plausible.
- Choose demonstrations that establish the claimed property. For example, a browser refresh demonstrates state beyond the browser; a runtime restart with retained storage demonstrates persistence beyond process memory.
- Check that numbers, units, identifiers, and state transitions remain consistent across episodes. State the starting state needed for an expected output.
- Label a deliberately limited or incorrect prototype before showing it and explain its limitation. Do not teach unsafe actions as a beginner exercise.
- Keep critical correctness boundaries even when deferring advanced details. For example, single-threaded execution does not make arbitrary asynchronous external operations one atomic transaction.
- Reuse the teaching structure, not copied Railscasts scripts, branding, or claims of affiliation.

## 5. Check the final lesson

Before responding, confirm:

- One running example carries the explanation.
- Each episode introduces one main concept and advances the example.
- Every episode contains an action or reasoning step and a concrete result.
- The result actually illustrates the concept being taught.
- A learner can explain what changed and why it mattered without consulting a glossary.
- The requested scope is complete, or the stopping point matches explicitly requested pacing.
- The answer remains a compact learning sequence rather than a reference manual with episode labels.

# Annotated example

This reference captures decisions from a company hierarchy and access-training guide. The people and scenarios below are fictional. The design is illustrative, not a rule for future artifacts or a statement about a production system.

## What the finished guide did

The main guide taught the account hierarchy and demonstrated who could see which patient records. An architecture companion connected that behavior to records and queries. Each page read as a presentation from top to bottom.

The architecture companion ended with seven lessons:

| Lesson | Why it appeared there |
| --- | --- |
| The Organization owns the chart. | Establish the ownership boundary before discussing access. |
| Membership says where Maya works. | Explain affiliation before introducing permissions. |
| One model for role assignments. | Distinguish the role a person holds from where it applies. |
| On-call coverage gives temporary patient access. | Introduce the time-limited relationship. |
| Three relationships. Three access paths. | Compare Team scope, direct care, and coverage after introducing them. |
| Keep permission and scope together. | Let the reader apply the rule to a concrete access decision. |
| Scope becomes a patient filter. | Connect the model to implementation once its behavior is clear. |

Seven was the result of editing this lesson. Other subjects may need a different number, order, or page structure.

## A small example makes the rule usable

Maya has an Intake role that can read patient details in North Branch. Her Clinician role can update notes for River Team patients. Dan is in North but is not in River, and Maya has no other access path to him.

Two controls ask whether Maya can read Dan's details or update his note. Reading succeeds through Intake. Updating fails because neither role supplies both the action and a matching patient group.

The visual keeps both role assignments visible and changes the result and explanation with the selected action. A reader can then predict what would change if Dan joined River. The interaction teaches the relationship between permission and scope.

Other subjects can use the same method with a shipping choice, support escalation, approval rule, or scheduling constraint. The example data and controls should come from that subject.

## Give each object a place in the picture

The hierarchy used one box per object. Nested groups showed which patients belonged to each Organization, Branch, and Team. Text labels identified access and its reason. The reader could see both included and excluded patients.

The initial hierarchy had too many patients. Reducing the example set made the relationship easier to follow without removing the boundary cases.

Technical diagrams used selected fields, a distinct header per record, arrows from foreign keys to their referenced records, and dashed lines for optional references. That convention suits database training. Use a simpler relationship diagram or a timeline when it better explains the new subject.

## Put detail after understanding

The guide initially introduced implementation details before roles and scope were clear. Reordering the material fixed the dependency. The main view taught the model. Two peer expandable sections then showed concrete assignment examples and code defaults with database overrides.

The details used numbered steps and short record cards. This made them easier to follow than nested expansions and repeated code blocks. A reader could finish the main lesson with both sections closed.

## Label the fact the reader needs

A record card originally said "Company membership: None" because an Organization-level role assignment had a null Company-membership foreign key. The person still had a Company membership through another relationship.

The clearer card showed the Company and "Assigned at: Organization · Home Health." The schema diagram still documented the nullable foreign keys.

The reusable lesson is to explain the scope of a field. A null reference in one record does not necessarily mean that the broader relationship is absent.

## Simplify the model and the teaching together

Discussion showed that a direct patient assignment already supplied the direct access path. A second direct-care scope switch was unnecessary for the intended behavior. The guide updated the diagrams, record examples, query explanation, and access demonstration together.

A later request removed the server request-flow lesson. The remaining presentation still met its learning goal. Navigation, section numbers, and build checks changed with the content.

Treat reader confusion as evidence to examine both the explanation and the underlying model. Do not add prose to defend a redundant concept.

## Transfer the method

Preserve the ordered lessons, stable examples, visible relationships, meaningful comparisons, optional detail, and checks for understanding.

Choose the subject's own terminology, visual style, example size, and delivery tools. The healthcare hierarchy, role schema, fictional names, green palette, seven lessons, two pages, and hosting service are specific to this example.

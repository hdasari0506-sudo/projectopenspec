# Spec-Driven Development

This project follows a spec-first workflow for meaningful work.

## Required process

1. Understand the problem and constraints.
2. Draft or update a specification in `specs/`.
3. Write or update a phased plan in `plans/` if the work is non-trivial.
4. Clarify open questions before implementation begins.
5. Implement the smallest correct change.
6. Validate with the relevant checks and tests.

## When this applies

Use this process for:

- new features,
- major bug fixes,
- new interfaces or APIs,
- schema or data model changes,
- changes with user-visible behavior.

## What to include in specs

- problem statement,
- user or stakeholder goal,
- constraints,
- functional requirements,
- edge cases,
- acceptance criteria,
- risks and tradeoffs,
- open questions.

## What to include in plans

- phased steps,
- dependencies,
- checklists or validation gates,
- rollback or contingency considerations.

## What not to do

- Do not implement without a spec when a feature is substantial.
- Do not skip validation even if the change feels small.
- Do not broaden scope without clear reason.

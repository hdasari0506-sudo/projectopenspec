# Architecture Rules

## Core principles

- Keep the project structure understandable and consistent.
- Prefer small, focused modules over large coupled ones.
- Preserve a clear separation between specification, planning, implementation, and validation.
- Keep interfaces explicit and documentation aligned with real behavior.

## Repository expectations

- Place product requirements in `specs/`.
- Place implementation phases in `plans/`.
- Keep application code under `src/`.
- Keep automated validation under `tests/`.
- Use documentation only when it clarifies intent, onboarding, or decisions.

## Design guidance

- Prefer minimal dependencies and simple abstractions.
- Reuse patterns already established in the codebase before creating new ones.
- Avoid hidden state where explicit state is clearer.
- Make failure modes visible and recoverable.

## Change management

- Any material change should be traceable to a spec or requirement.
- When architecture changes, record the rationale and consequences.
- When scope expands, document the reason and update the plan.

# Quality Gates

Every meaningful change must pass relevant validation before it is considered complete.

## Minimum expectations

- The implementation matches the spec and acceptance criteria.
- The change is covered by the smallest relevant validation.
- Failure or negative scenarios are checked when risk is non-trivial.
- The code remains readable, maintainable, and scoped to the request.

## Validation choices

- Run unit tests for logic changes.
- Run integration tests when behavior crosses boundaries.
- Run focused end-to-end checks when workflow-level behavior is changed.
- Use lint, type checks, or build checks only when they are part of the project standard.

## Completion standard

A task is done only when:

- the desired behavior is demonstrably correct,
- the relevant validation passes,
- the scope is justified,
- the result is consistent with project conventions.

## Red flags

- vague or untested fixes,
- changes that silently expand scope,
- code that works locally but violates project constraints,
- spec drift between implementation and requirement.

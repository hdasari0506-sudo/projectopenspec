# CLAUDE.md

This repository is for projectopenspec: a spec-driven product and software engineering project.

## Core workflow

- Prefer a spec before implementation.
- Keep product intent, constraints, and acceptance criteria visible in `specs/`.
- Keep implementation steps and verification gates in `plans/`.
- Validate with the smallest relevant automation before considering work complete.
- Fix the actual root cause, not the symptom.

## Required project conventions

1. Start with the user goal and the real constraints.
2. Break work into a clear spec and a phased plan when the task is non-trivial.
3. Prefer existing patterns and conventions before introducing new abstractions.
4. Touch only the scope required for the task.
5. Validate behavior with targeted tests, lint, or build checks.
6. Document decisions that affect architecture, interfaces, or rollout.

## Repository expectations

- `specs/`: requirement and acceptance docs for features or changes.
- `plans/`: delivery phases, checkpoints, and verification gates.
- `src/`: implementation code.
- `tests/`: automated validation.
- `docs/` or `README.md`: user-facing project guidance when relevant.

## Guardrails

- Do not invent requirements that are not stated or implied by the task.
- Do not broaden scope without an explicit user request.
- Do not add new dependencies unless they are necessary and justified.
- Avoid writing code or docs that contradict the project’s stated constraints.
- Keep changes surgical and readable.

## Important references

Use the files in `.claude/rules/` for project-specific guidance:

- `architecture.md`: system structure and design principles.
- `spec-driven-development.md`: required process for features and major changes.
- `quality-gates.md`: validation and verification expectations.

## Working style

- Be concise, precise, and direct.
- Offer rationale when a tradeoff is meaningful.
- Ask clarifying questions only when required to avoid wrong assumptions.
- When implementation is ambiguous, prefer minimal and reversible decisions.

## Workflow

- `/opsx:*explore` — map the problem and understand the codebase.
- `/opsx:*propose` — draft `proposal.md`, `specs/`, and `design.md`, `tasks.md`.
- `/opsx:*apply` — implement tasks from the specification.
- `/opsx:*verify` — check the implementation matches the spec.
- `/opsx:*archive` — archive completed changes.

This file is the primary entry point for Claude Code and should stay aligned with the actual project structure and team expectations.

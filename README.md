# projectopenspec

A starter project for spec-driven product and software engineering work.

## Repository workflow

1. Explore the problem and codebase.
2. Propose a change with `proposal.md`, a specification in `specs/`, `design.md`, and `tasks.md`.
3. Apply the approved tasks.
4. Verify the implementation against the specification.
5. Archive completed changes in `archive/`.

Claude Code project guidance and the `/opsx:*` workflow are in `.claude/`.

## Checks

The GitHub Actions workflow runs Vitest unit and integration tests and Playwright browser tests on pushes and pull requests. The default branch is also published to GitHub Pages after the checks pass.

To run the test suite locally:

```bash
cd tests
npm ci
npm test
```

## Website

The static GitHub Pages landing page is in `site/`. The Playwright smoke test starts a local static server for this page automatically.

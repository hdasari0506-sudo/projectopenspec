# dogday.com

A friendly dog-care website with breed discovery, body-language guidance, and everyday wellness tools. The static app is served from `site/` and deployed to GitHub Pages.

## Project workflow

1. Explore the problem and codebase.
2. Propose a change with `proposal.md`, a specification in `specs/`, `design.md`, and `tasks.md`.
3. Apply the approved tasks.
4. Verify the implementation against the specification.
5. Archive completed changes in `archive/`.

Claude Code project guidance and the `/opsx:*` workflow are in `.claude/`.

## Website features

- Searchable dog breed directory with combined size and temperament filters.
- Interactive dog body-language guide with context and practical tips.
- Daily care checklist saved locally by date.
- Educational symptom guide with prominent veterinary disclaimers and conservative emergency direction.
- Responsive navigation and layouts for mobile and desktop.

## Checks

The GitHub Actions workflow runs Vitest unit and integration tests and Playwright browser tests on pushes and pull requests. The default branch is also published to GitHub Pages after the checks pass.

To run the test suite locally:

```bash
cd tests
npm ci
npm test
```

The Playwright config starts a local static server for `site/index.html` automatically.

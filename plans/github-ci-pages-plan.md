# GitHub CI and Pages Plan

## Phase 1: Add a deployable static entry page

- Add a minimal `site/index.html`.
- Add a small local server so Playwright exercises that same page in CI.
- Gate: Playwright smoke test passes locally.

## Phase 2: Automate checks

- Add a GitHub Actions workflow for Vitest and Chromium Playwright checks on pushes and pull requests.
- Gate: all test commands pass locally and the workflow YAML is structurally valid.

## Phase 3: Publish from the default branch

- Create the private GitHub repository and push `main`.
- Enable GitHub Pages with Actions as the publishing source.
- Deploy the `site/` artifact only after successful checks on `main`.
- Gate: the workflow completes and publishes the landing page.

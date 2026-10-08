# GitHub CI and Pages

## Problem and goals

The project needs a GitHub repository with automated checks and a repeatable deployment path. The project currently contains workflow guidance and test scaffolding, but no application to deploy.

Goals:

- Publish the project as a private GitHub repository.
- Run the existing Vitest and Playwright tests on pushes and pull requests.
- Publish a small static landing page to GitHub Pages after checks pass on `main`.

## Current state and constraints

- The project has tests under `tests/`, using Vitest and Playwright.
- Playwright needs a locally served target; its smoke test will run against the new static landing page.
- The repository should remain private; the Pages site is allowed to be public.
- Deployment is limited to static content under `site/`.

## Functional specification

- CI runs unit, integration, and Chromium E2E tests for every pull request and push to `main`.
- Failed E2E checks retain a Playwright report artifact for seven days when one is available.
- Pages deployment runs only after all tests pass on a push to `main`.
- Pull requests do not deploy.
- The static landing page links to the GitHub repository.

## Data and schema changes

No application data or schema changes.

## API and integration spec

- GitHub Actions runs the test and Pages deployment workflows.
- GitHub Pages deploys the contents of `site/`.
- Playwright launches a local Node.js server for E2E tests.

## Testing and validation plan

- Run Vitest unit and integration tests.
- Install Chromium and execute the Playwright E2E test against the local static server.
- Validate the workflow YAML and confirm the GitHub repository remote and push.
- Confirm the Actions run deploys the Pages artifact after the test job succeeds.

## Implementation plan

1. Add the static landing page and local test server.
2. Add the CI and Pages deployment workflow.
3. Add repository documentation and ignore generated artifacts.
4. Create a private GitHub repository, push the default branch, and enable Pages via Actions.

## Release checklist

- [ ] Tests pass locally and in GitHub Actions.
- [ ] Repository is private and contains the project source.
- [ ] GitHub Pages is configured to deploy with GitHub Actions.
- [ ] Successful default-branch CI deploys the static landing page.

## Open questions

- Hosting was selected as GitHub Pages; the site is permitted to be public while the repository remains private.

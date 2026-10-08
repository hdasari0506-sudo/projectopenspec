# Test Suite

This folder contains the project's automated testing setup.

## Structure

- `unit/` — small, isolated unit tests.
- `integration/` — tests for module and service boundaries.
- `e2e/` — browser automation tests with Playwright.
- `fixtures/` — reusable test data, mocks, and helpers.

## Commands

From this folder:

```bash
npm install
npm run test:unit
npm run test:integration
npm run test:e2e
```

## Playwright

The Playwright config points to `tests/e2e` and starts a local server for `site/index.html` automatically. Chromium is the CI smoke-test browser. Set `BASE_URL` to test a different running site.

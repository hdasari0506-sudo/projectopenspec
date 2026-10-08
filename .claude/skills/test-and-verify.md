# Test and Verify

Use this skill whenever a change affects behavior, interfaces, or reliability.

## Validation mindset

- Aim for the smallest relevant automated check.
- Prefer the direct test for changed behavior.
- Include negative or failure-path checks when the change is risky.
- Validate the actual outcome, not just whether code executes.

## Standard flow

1. Identify what behavior changed.
2. Choose the smallest relevant test target.
3. Run those tests or checks.
4. If issues arise, fix the root cause and re-run.
5. Only mark done after validation shows the intended effect.

## Avoid

- Running broad suites for a trivial local change.
- Shipping untested behavior.
- Treating documentation edits as exempt from validation if code or scripts changed nearby.

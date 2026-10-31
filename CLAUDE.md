# Instructions for AI assistants (Claude Code and others)

Copy this file into the root of every Rascend project. It tells AI coding assistants how work is done here. Follow it unless the human owner explicitly overrides a rule for a specific task, and say so when you deviate.

## Before you write code
1. Read `docs/solution-design.md`. If it does not exist, stop and draft it from `templates/solution-design.md` first. Ask the owner to confirm.
2. State your plan in a few lines and list the files you will create or change.
3. Read `docs/02-engineering-standards.md` (in the playbook) if you have not in this session.

## Structure rules (non-negotiable)
- **No monolith files.** Never put HTML, CSS and JavaScript into one file for anything beyond a throwaway demo. Markup, styles and scripts live in separate files. No file over ~300 lines without a good reason stated in a comment or the PR.
- Source lives in `src/`. Tests live in `tests/` or beside the module as `*.test.js`. Docs live in `docs/`.
- One module, one responsibility. Separate UI, state, data access and configuration.
- No secrets, keys, tokens or personal data in source control. Configuration comes from environment variables; commit only `.env.example`.
- No inline event handlers (`onclick=`) and no inline `<script>` or `<style>` blocks in deployed pages, so that a strict Content Security Policy works.
- No new dependency without a one-line justification in the PR. Prefer the platform and small, well-maintained libraries.
- Pin dependency versions through the lockfile and commit the lockfile.

## Privacy rules
- Collect only data the feature needs. Do not add analytics, ads, crash reporters or third-party SDKs unless the solution design lists them and the privacy policy is updated first.
- Never log personal data. Never send personal data to a third party that the privacy policy does not name.

## Quality rules
- Every change keeps these passing locally: `npm run lint`, `npm test`, `npm run build`.
- Add or update tests for behaviour you change. Bug fixes get a regression test.
- Handle errors explicitly; show the user a clear message and never swallow exceptions silently.
- Validate and escape all external input. Use safe DOM APIs (`textContent`), not `innerHTML`, for dynamic text.
- Meet basic accessibility: labels, alt text, keyboard use, colour contrast, respects reduced motion.

## Git rules
- Small commits with imperative messages (`Add reminder list`, not `stuff`).
- Work on a branch, open a pull request, fill in the PR template. Do not push straight to `main`.

## When you finish a task
Report: what changed, how you tested it, anything you were unsure about, and any security or privacy concern you noticed, even if unrelated to the task.

## Never
- Invent facts, store listings, URLs, credentials or test results.
- Disable security checks, linters or tests to make a build pass.
- Commit generated secrets or paste them into chat output.

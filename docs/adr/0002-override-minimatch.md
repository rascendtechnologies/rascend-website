# ADR 0002: Override minimatch to a patched version

- **Status:** Accepted
- **Date:** 31 October 2026
- **Decider:** Rascend Technologies

## Context
`npm audit` reported a moderate denial-of-service advisory in `minimatch`, used by ESLint at build time. It is not shipped to visitors, but the playbook aims for a clean audit.

## Decision
Add an npm `overrides` entry forcing `minimatch` to `^11.0.1`. Lint and tests pass with it.

## Consequences
The override should be removed once ESLint depends on a patched `minimatch` itself. Review this at each monthly dependency update.

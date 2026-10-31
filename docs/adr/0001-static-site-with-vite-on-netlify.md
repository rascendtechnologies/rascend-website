# ADR 0001: Static site built with Vite and hosted on Netlify

- **Status:** Accepted
- **Date:** 31 October 2026
- **Decider:** Rascend Technologies

## Context
The website needs to be fast, secure and easy to update. It has no dynamic features. Earlier versions were uploaded by hand as a zip file, which was slow and error-prone, and put page code in single files.

## Decision
Keep the site static. Use Vite to build three pages. Host on Netlify with automatic deploys from `main`, preview deployments for pull requests, and security headers defined in `netlify.toml`.

## Alternatives considered
- Manual uploads: error-prone, no history, no review.
- A framework such as Next.js: more complexity than a static site needs.
- Hosting on GitHub Pages: no custom response headers, so no Content Security Policy.

## Consequences
A small build step and CI to maintain. In return, every change is reviewed and tested, deploys are automatic, and security headers are enforced.

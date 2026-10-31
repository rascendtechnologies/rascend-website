# Rascend Website

Source for [rascend.com](https://rascend.com), the website of Rascend Technologies: a portfolio of the studio's apps and client projects, with support and privacy pages.

It follows the [Rascend Playbook](https://github.com/rascendtechnologies/rascend-playbook).

## Pages

| Page | File |
|---|---|
| Home (work, about, contact) | `index.html` |
| Support | `support.html` |
| Privacy policy | `privacy.html` |

## Structure

```
index.html, support.html, privacy.html   page structure and content
src/styles/main.css                      styles
src/js/                                  small scripts (footer year)
public/img/                              project screenshots, copied as-is
tests/                                   guards for security and link rules
netlify.toml                             build settings and security headers
docs/                                    design, privacy, security, runbook
```

## Run locally

```bash
npm install
npm run dev
```

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build into `dist/` |
| `npm test` | Run tests |
| `npm run lint` | Lint and format check |

## Deploy

Merging to `main` deploys automatically to Netlify. Pull requests get a preview deployment. See [docs/runbook.md](docs/runbook.md).

## Add or change a project card

Follow the [portfolio checklist](https://github.com/rascendtechnologies/rascend-playbook/blob/main/checklists/portfolio-publish.md): confirm the project is live and permitted to be listed, write an accurate short description, add a compressed screenshot to `public/img/`, and check every link.

## Security and privacy

The site has no forms, accounts, analytics, ads or cookies. See [docs/privacy/data-inventory.md](docs/privacy/data-inventory.md). Report vulnerabilities as described in [SECURITY.md](SECURITY.md).

## Licence

All rights reserved, except where noted.

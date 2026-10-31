# Threat model: Rascend Website

## Assets
| Asset | Why it matters |
|---|---|
| The site's integrity and domain | Store listings and clients rely on it; a defaced site harms trust |
| Netlify, GitHub, VentraIP accounts | Control of the site and domain |
| Visitors' browsers | Must not be exposed to malicious scripts |

## Trust boundaries
Visitor browser to Netlify; GitHub to Netlify (deploy); the studio's accounts to each provider.

## Threats
| Threat | Example | Likelihood | Impact | Mitigation | Status |
|---|---|---|---|---|---|
| Spoofing | Takeover of GitHub, Netlify or domain accounts | Medium | High | Two-factor authentication on all three; recovery codes stored safely; domain registrar lock | To confirm |
| Tampering | Malicious change merged to `main` | Low | High | Protected `main`, pull requests, CI, review of diffs | Planned |
| Tampering | Compromised dependency at build time | Low | Medium | Few dev dependencies, lockfile, Dependabot, audit in CI | Done |
| Information disclosure | Secret committed | Low | Medium | No secrets used; Gitleaks and push protection | Done |
| Denial of service | Free-tier limits or DNS misconfiguration | Low | Medium | Uptime monitor; renewal calendar | Planned |
| Domain expiry | rascend.com lapses | Low | High | Auto-renew on; renewal date in the project register | To confirm |
| Elevation of privilege | Script injection into pages | Low | Medium | Strict CSP; tests ban inline code | Done |

## Accepted risks
Standard Netlify server logs record visitors' IP addresses for a limited time.

## Review log
| Date | Reviewer | Notes |
|---|---|---|
| 31 October 2026 | Author | Initial |

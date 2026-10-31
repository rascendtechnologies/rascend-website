# Runbook: Rascend Website

## Where things live
| Thing | Location / account | Owner |
|---|---|---|
| Source | GitHub: rascendtechnologies/rascend-website | Rascend |
| Hosting | Netlify site connected to the repository | Rascend |
| Domain and DNS | rascend.com at VentraIP: ALIAS (apex) to Netlify load balancer, CNAME www to the Netlify site address | Rascend |
| Database | None | n/a |
| Secrets | None used | n/a |
| Monitoring | Uptime monitor (to set up) | Rascend |

## Deploy
Automatic on merge to `main`. Pull requests get a preview deployment. No manual steps.

## Roll back
In Netlify, open Deploys, choose the last good deploy and click "Publish deploy". Then revert the bad commit in GitHub.

## Rotate a secret
No secrets are used by this site. If one is ever added, record where it lives and how to rotate it here.

## Restore from backup
Nothing to restore: the repository is the source of truth.

## Common problems
| Symptom | Likely cause | Fix |
|---|---|---|
| Site shows an old version | Browser cache, or the deploy failed | Check Netlify Deploys; hard refresh; try a private window |
| Certificate or SSL error | DNS not pointing to Netlify yet, or certificate still being issued | Check the DNS records at VentraIP; wait, then re-provision in Netlify domain settings |
| Build fails | Lint or test failure | Open the failing check in the pull request and fix it |

## Contacts and renewals
| Item | Renewal date | Notes |
|---|---|---|
| rascend.com | 13 October 2027 | Registered at VentraIP; turn on auto-renew |
| TLS certificate | Automatic | Issued and renewed by Netlify |

# Project Copperhead Guidelines

Standalone expert-contributor guidelines site for **Project Copperhead**.

This repository is intentionally separate from:
- `EnterpriseEnv-EC-Training` (Project Eagle / multi-environment training app)
- the `enterprise-environments` monorepo

## Allowlist (Copperhead only)

Only emails on the **Project Copperhead** allowlist can sign in. An empty list means **nobody** gets in (except optional local draft mode below). This list is not shared with Eagle.

| Where | How |
|---|---|
| Local | Set `VITE_COPPERHEAD_WHITELIST` in `.env.local` |
| GitHub Pages | Repo → **Settings → Secrets and variables → Actions → Variables** → `VITE_COPPERHEAD_WHITELIST` |

Format: comma-, semicolon-, or newline-separated emails (case-insensitive).

```bash
VITE_COPPERHEAD_WHITELIST=you@company.com,teammate@company.com
```

Deploy fails if that GitHub variable is missing or empty. `VITE_DISABLE_AUTH` is forced off in CI so the published site always requires allowlisted sign-in.

Optional local drafting only: uncomment `VITE_DISABLE_AUTH=true` in `.env.local` to skip the gate while writing content. Do not use that for production.

## Local development

```bash
cp env.example .env.local
# edit VITE_COPPERHEAD_WHITELIST with your email
npm install
npm run dev
```

Restart the dev server after changing allowlist env vars.

## Structure

- `src/App.jsx` — shell, tabs, Copperhead email gate
- `src/content/` — EC-facing page content
- `public/images/` — static assets
- `internal-sources/` — maintainer-only source PDFs (not served by the site)

## EC-facing content rules

Do **not** expose in the published guidelines:
- External research papers, project sites, or arXiv links
- Researcher names, academic affiliations, or partner / client names
- Internal code names beyond **Project Copperhead**

Educational context for computer-use agents is fine; attribution and outbound links are not.

## Deploy (GitHub Pages)

1. Create an empty GitHub repo (e.g. `project-copperhead-guidelines`).
2. Add Actions variable `VITE_COPPERHEAD_WHITELIST` with the Copperhead email list.
3. Push this folder as `main`.
4. In repo Settings → Pages, set source to **GitHub Actions**.
5. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

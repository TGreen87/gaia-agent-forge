## GAIA Agent Forge — Next.js site

Production-ready marketing site for Green AI & Automation (GAIA), built with Next.js 15 (App Router), React 19, TypeScript, Tailwind, and shadcn UI.

### Tech
- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **UI**: Tailwind CSS, shadcn UI, Radix
- **Analytics**: Plausible (client event helpers wired)
- **Testing/QA**: Playwright smoke + a11y, Lighthouse CI

### Quick start
```bash
nvm use 20 # or use your Node 20 runtime
npm i
npm run dev   # http://localhost:3000
```

### Build and preview
```bash
npm run build     # next build && next export -o out
npm start         # serves ./out on port 3000
```

### Test and lint
```bash
npm test          # Playwright smoke + a11y
npm run lint      # ESLint
```

### Project structure
- `app/` — App Router pages (`/`, `/services`, `/why-gaia`, `/projects`, `/learning-hub`, `/about`, `/contact`)
- `components/` — UI primitives (Button, Card), layout (Header, Footer)
- `lib/` — utilities (`cn`, Plausible event helper)
- `tests/` — Playwright tests and config

Notes:
- Root Next.js app is the canonical app. `apps/web-next/` is legacy/sandbox and not part of build/deploy.

### Deployment — GitHub Pages + custom domain
This site is exported to static HTML and deployed to GitHub Pages.

Pipeline:
- On push to `main`, GitHub Actions builds and exports to `out/`, then deploys to Pages.
- `public/CNAME` is included to set the custom domain.

Domain setup for `greenaiautomation.ai`:
- Point DNS to GitHub Pages.
  - If using apex: set A records to GitHub Pages IPs or use ALIAS/ANAME to `USERNAME.github.io`.
  - If using Cloudflare: set CNAME for root via flattening to `USERNAME.github.io`.
- In the repo Settings → Pages, set the custom domain `greenaiautomation.ai` and enforce HTTPS.

### Environment and analytics
- Plausible script is loaded site-wide. To customize domain or add props, edit `app/layout.tsx` and `lib/analytics.ts`.

### Accessibility & SEO
- A11y tested in light and dark themes via axe.
- `app/sitemap.ts` and JSON-LD are included; consider adding a dedicated OG image.

### Maintenance notes
- Keep `tailwind.config.ts` content globs aligned with `app/` and `components/`.
- When generating new shadcn components, ensure `components.json` points to `app/globals.css`.


## CI & GitHub Actions Secrets

This repo includes CI (build, Playwright smoke, Axe a11y, Lighthouse CI, and an @apply rule check). To enable full PR previews and comments, add these repository secrets:

- Vercel (recommended for preview URLs):
  - VERCEL_TOKEN
  - VERCEL_ORG_ID
  - VERCEL_PROJECT_ID
- Netlify (alternative):
  - NETLIFY_AUTH_TOKEN
  - NETLIFY_SITE_ID
- Lighthouse CI GitHub App (optional PR annotations):
  - LHCI_GITHUB_APP_TOKEN

Notes:
- Node version is pinned via .nvmrc (20).
- Preview server uses `vite preview` on http://localhost:3000 in CI.
- Browserslist DB is updated in CI via `npx update-browserslist-db@latest` (non-blocking).


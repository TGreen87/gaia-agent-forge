# Changelog

## Unreleased (dev)
- feat(demos): Add Think vs Fast MVP
  - API `POST /api/demos/compare` runs gpt-5 and gpt-5-thinking stubs in parallel with timeouts
  - UI `/demos` page with textarea, Run both CTA, side-by-side outputs, timing badges, citations/confidence strip (stub)
  - Home “Proof” card now links to `/demos` and logs analytics with source
- chore(analytics): `logEvent` used with props for demo source
- chore(netlify): ensure serverful Next config via `@netlify/plugin-nextjs`

Preview: https://greenaiautomation.netlify.app


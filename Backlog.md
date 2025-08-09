# Backlog (Prioritized by Milestones)

Time key: S = ≤30m, M = 30–90m, L = 2–4h, XL = 0.5–1d
Acceptance: include a measurable test per item

Milestone M1 — Hygiene & polish (goal: 90 minutes max)
1) Silence router warnings (S)
   - Do: Enable v7_startTransition and v7_relativeSplatPath future flags.
   - Accept: No React Router deprecation warnings in console.
2) Hero legibility + LCP assist (M)
   - Do: Add gradient overlay using tokens; add fetchpriority="high" or preload for hero; expose AVIF/WebP if available.
   - Accept: Lighthouse Mobile LCP ≤ 2.5s (lab), Contrast ≥ 4.5:1 on hero text (AA).
3) Per‑route SEO scaffolding (M)
   - Do: Add react-helmet-async; unique title/description + canonical for Home, Services, Why, Learning Hub, Projects, About, Contact.
   - Accept: Lighthouse SEO ≥ 95; each route has unique head tags.
4) Accessibility basics (S)
   - Do: Add skip-to-content link; ensure nav active state uses aria-current.
   - Accept: Axe: 0 serious/critical on Home + Services.
5) Booking CTA specificity (S)
   - Do: Update header CTA to “Book a 20‑min discovery”; point to brand Cal.com URL placeholder.
   - Accept: Link opens correct target; copy updated.

Milestone M2 — Trust & clarity (L)
1) Services outcomes & micro‑proof (S)
   - Do: Add one quantified outcome per pillar and 1-line proof/method.
   - Accept: Readability at ≤ grade 9 (Hemingway/Flesch), Lighthouse SEO unchanged ≥ 95.
2) Why GAIA diagram refinement (M)
   - Do: Add <title>/<desc> on SVG; improve layout and color tokens; aria roles.
   - Accept: Axe: 0 issues in section; users can tab to diagram info.
3) Projects & Demos scaffolding (M)
   - Do: Add R&D demo cards with placeholders; lazy‑load any videos.
   - Accept: LCP unchanged; no layout shifts; images have alt.

Milestone M3 — Demo stubs (XL)
1) Demo A: Think vs Fast (L)
   - Do: UI with model toggle, timer, mocked outputs and citation list.
   - Accept: Runs end‑to‑end locally; timing visible; no console errors.
2) Demo B: Agentic Planner (L)
   - Do: Upload 1 PDF + 1 CSV; generate mocked flow JSON + checklist.
   - Accept: Files processed client‑side; downloadable JSON; Axe clean.
3) Demo C: Coding Collab (L)
   - Do: NL brief → mocked API route diff; copy files UI.
   - Accept: Diff renders; copy buttons work; tests pass locally.

Milestone M4 — Contact/Booking & data (XL)
1) Contact form → Supabase (M)
   - Do: Leads table; form validation; spam honeypot.
   - Accept: Entry stored; success screen informs next steps.
2) Cal.com embed + lazy load (S)
   - Do: Embed on Contact; loading=lazy + intersection observer.
   - Accept: No layout shift; form and embed both usable.
3) Automations (Notion/Slack) (L)
   - Do: Edge function/webhook to forward lead; Slack notification.
   - Accept: Test event visible in Notion/Slack.

Milestone M5 — Performance & accessibility (XL)
1) Asset optimization pass (M)
   - Do: Convert hero + large images to AVIF/WebP; size appropriately.
   - Accept: Lighthouse Perf ≥ 90 Mobile; CLS ≤ 0.1, TBT ≤ 200ms.
2) prefers-reduced-motion (S)
   - Do: Gate CursorGradient and heavy animations.
   - Accept: Motion minimized when prefers-reduced-motion is set.
3) Axe & keyboard audit (M)
   - Do: Ensure focus order, visible focus, and roles across pages.
   - Accept: Axe 0 serious/critical across all routes.

Milestone M6 — Analytics, sitemap, CI (L)
1) Plausible analytics (S)
   - Do: Add script with defer; respect DNT.
   - Accept: Events visible in dashboard; no console errors.
2) Sitemap.xml + robots.txt review (S)
   - Do: Generate sitemap; ensure canonical consistency.
   - Accept: /sitemap.xml present; Search Console accepts.
3) Lighthouse CI + Playwright smoke (M)
   - Do: CI config, single smoke test for nav/hero/CTAs.
   - Accept: CI run ≥ 90 all cats; test green.

Plan Mode — Proposed M1 (≤ 90 minutes)
- Enable React Router v7 future flags (S)
- Add gradient overlay + fetchpriority for hero (M)
- Introduce react-helmet-async and wire unique SEO for 2–3 key routes (Home, Services, Why) (M)
- Add skip-to-content link + aria-current on NavLinks (S)
- Update booking CTA copy/link (S)

Exit criteria for M1
- No router warnings; Lighthouse SEO ≥ 95; Mobile LCP ≤ 2.5s (lab) on Home; Axe 0 serious/critical on Home/Services.

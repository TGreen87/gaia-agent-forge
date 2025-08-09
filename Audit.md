# GAIA Site Audit (v0)

Date: 2025-08-09

1) Visual critique
- Header/nav still feels “template”: standard layout, generic Cal.com link, no active CTA contrast. Suggest subtle gradient keyline, active state pill, and branded booking link.
- Hero is strong but text sits directly on photo; contrast may vary by theme. Add a top-to-bottom gradient overlay and ensure AA in both themes. Consider subtle parallax only if respects reduced motion.
- Services cards look default shadcn; add iconography sizing consistency and micro-outcomes beneath each to feel bespoke.
- Mini SVG diagram is pedagogical but visually sparse; add titles/descriptions for a11y and a modest color system matching tokens.

2) Content critique
- Voice is clear and non-hypey. Improve specificity: one-liner outcome per pillar (e.g., “Cut onboarding time by 40%”), and one trust signal (mini stat or method note).
- CTA copy: “Download the free Playbook (PDF)” and “Book a 20‑min discovery” tends to convert better than generic.
- Add “What happens next” on Contact to set expectations.

3) Code critique
- Console warnings: React Router v7 future-flag warnings present; enable v7_startTransition and v7_relativeSplatPath to silence and prep upgrade.
- Head management: SEO is only in index.html + inline JSON‑LD in Index.tsx; other routes lack unique titles/meta. Introduce per‑route head (react-helmet-async) and canonical tags.
- Motion: CursorGradient likely animated; add prefers-reduced-motion gate.
- Assets: Hero JPG may be heavy; add <link rel="preload" as="image"> or fetchpriority="high" and provide WebP/AVIF sources.
- Tailwind: No invalid @apply usage found; tokens are HSL and consistent. Good.
- Theming: next-themes used correctly for class strategy.

4) SEO & accessibility gaps
- Per-route SEO missing (titles, meta descriptions, canonical). Add WebSite + SearchAction JSON-LD; keep Organization. Blog/FAQ schemas later.
- Single H1 enforced on home; verify on all routes (looks OK). Add breadcrumb schema once Learning Hub is live.
- Add skip-to-content link, landmark structure on pages (header/main/footer already used, but add nav aria-current where relevant).
- Images: ensure width/height or aspect-ratio to reduce CLS; hero can use explicit dimensions or CSS aspect container.
- Performance/LCP risk: large hero without preload and potential blocking styles; target LCP ≤ 2.5s p75.

5) Quick measurements checklist (targets)
- Lighthouse (Mobile): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- Axe: 0 serious/critical violations on key routes.
- LCP ≤ 2.5s p75 (lab), CLS ≤ 0.1.

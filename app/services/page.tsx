export const metadata = { title: 'Services' }
export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">Services</h1>
        <p className="lede text-muted-foreground">Advanced AI doesn’t need to be complicated. We design systems that make business sense, integrate cleanly, and can be explained to your team in plain English.</p>
      </header>

      <section id="ops" className="mb-12 rounded-md border bg-card p-6 shadow-soft">
        <h2 className="mb-2 text-2xl font-semibold">Agentic Systems & Apps</h2>
        <p className="text-muted-foreground">Outcome: Hands-off workflows that complete real tasks end-to-end—coordinating tools, checking policies, and reporting back with sources.</p>
        <p className="mt-2 text-muted-foreground">How it works: We define the task graph, integrate tools (calendar, email, docs, CRM), and train the system on your procedures. You approve guardrails before go-live.</p>
        <p className="mt-2 text-muted-foreground">Good first projects: inbox triage, proposal drafting, policy-aware approvals.</p>
      </section>

      <section className="mb-12 rounded-md border bg-card p-6 shadow-soft">
        <h2 className="mb-2 text-2xl font-semibold">AI Consulting & Strategy</h2>
        <p className="text-muted-foreground">Outcome: A clear plan: where to start, where to avoid, and how to measure value.</p>
        <p className="mt-2 text-muted-foreground">How it works: Short workshops, a written roadmap, and an adoption checklist tailored to your risk appetite and sector.</p>
        <p className="mt-2 text-muted-foreground">Deliverables: opportunity map, ROI hypotheses, rollout plan.</p>
      </section>

      <section className="mb-12 rounded-md border bg-card p-6 shadow-soft">
        <h2 className="mb-2 text-2xl font-semibold">Automation & Web Engineering</h2>
        <p className="text-muted-foreground">Outcome: Reliable web experiences and automations that connect your tools and your data.</p>
        <p className="mt-2 text-muted-foreground">How it works: Modern web stack, clean APIs, and automations that explain themselves (logs, metrics, safeguards).</p>
        <p className="mt-2 text-muted-foreground">Examples: customer portals, internal dashboards, event-driven workflows.</p>
      </section>

      <section className="rounded-md border bg-card p-6 shadow-soft">
        <h2 className="mb-2 text-2xl font-semibold">Executive Coaching & Training</h2>
        <p className="text-muted-foreground">Outcome: Leaders who can ask better questions of AI—and spot when not to use it.</p>
        <p className="mt-2 text-muted-foreground">Format: private sessions, playbooks, and on-call guidance for real work, not lab tasks.</p>
      </section>
    </main>
  )
}



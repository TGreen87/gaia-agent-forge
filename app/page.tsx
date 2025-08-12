"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { logEvent } from '@/lib/analytics'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="home-hero">
        <div className="absolute inset-0 -z-10 bg-abstract" />
        <div className="mx-auto max-w-[1440px] px-4 md:px-6">
          <div className="grid min-h-[72vh] grid-cols-1 items-center gap-10 py-20 md:grid-cols-12">
            <div className="md:col-span-7 lg:col-span-7">
              <h1 id="home-hero" className="mb-6 font-serif font-semibold tracking-tight">
                Empower your business with AI you can trust.
              </h1>
              <p className="lede measure text-muted-foreground">
                Agentic systems, automations, and executive-grade guidance—explained clearly and delivered fast.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row" role="group" aria-label="Primary actions">
               <Button asChild size="lg" className="focus-ring shadow-med">
                  <a href="/resources" aria-label="Get the AI Adoption Playbook">
                    Get the AI Adoption Playbook
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="focus-ring">
                  <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" onClick={() => logEvent('discovery_booked')}>
                    Book a Discovery Session
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:col-span-5 lg:col-span-5">
              <div className="rounded-md border bg-card p-6 shadow-soft">
                <h2 className="mb-4 text-xl font-semibold">What we refuse to do</h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>No hype. We ship working systems.</li>
                  <li>Accuracy before cleverness.</li>
                  <li>Privacy and safety by design.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where we help */}
      <section className="mx-auto max-w-[1280px] px-4 py-24 md:px-6" aria-labelledby="where-we-help">
        <header className="mb-10">
          <h2 id="where-we-help" className="text-4xl font-semibold tracking-tight">Where we help</h2>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <article className="md:col-span-4 rounded-md border bg-card p-6 shadow-soft">
            <h3 className="mb-2 text-2xl font-semibold">Faster ops, fewer errors</h3>
            <p className="measure-compact text-muted-foreground">
              We automate the busywork across your existing tools—tickets, scheduling, document handling—so teams focus on the work only humans should do.
            </p>
            <div className="mt-4 text-sm">
              <Link className="underline underline-offset-4" href="/services#ops">Learn how</Link>
            </div>
          </article>
          <article className="md:col-span-4 rounded-md border bg-card p-6 shadow-soft">
            <h3 className="mb-2 text-2xl font-semibold">Demos that persuade</h3>
            <p className="measure-compact text-muted-foreground">
              We turn your idea into a working prototype in days. Seeing a system run with your data dissolves doubts and speeds up decisions.
            </p>
            <div className="mt-4 text-sm">
              <Link className="underline underline-offset-4" href="/services#prototypes">Learn how</Link>
            </div>
          </article>
          <article className="md:col-span-4 rounded-md border bg-card p-6 shadow-soft">
            <h3 className="mb-2 text-2xl font-semibold">Search that knows your business</h3>
            <p className="measure-compact text-muted-foreground">
              Private retrieval with citations beats guess-and-hope chat. Your staff ask questions; the system answers with sources, not vibes.
            </p>
            <div className="mt-4 text-sm">
              <Link className="underline underline-offset-4" href="/services#retrieval">Learn how</Link>
            </div>
          </article>
        </div>
        <div className="mt-8">
          <Link className="text-sm underline underline-offset-4" href="/services">See how our services map to these outcomes →</Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1280px] px-4 py-24 md:px-6" aria-labelledby="how-it-works">
        <h2 id="how-it-works" className="mb-8 text-4xl font-semibold tracking-tight">How it works</h2>
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <li className="md:col-span-3 rounded-md border bg-card p-6 shadow-soft">
            <h3 className="mb-2 text-2xl font-semibold">Discover</h3>
            <p className="text-muted-foreground">We meet you where you are, shortlist 2–3 high-ROI opportunities, and agree on what “good” looks like.</p>
            <p className="mt-2 text-sm text-muted-foreground">What you get: a clear shortlist and success criteria.</p>
          </li>
          <li className="md:col-span-3 rounded-md border bg-card p-6 shadow-soft">
            <h3 className="mb-2 text-2xl font-semibold">Prototype</h3>
            <p className="text-muted-foreground">A focused build that proves the idea with your tools and data. No long detours.</p>
            <p className="mt-2 text-sm text-muted-foreground">What you get: a working demo with notes.</p>
          </li>
          <li className="md:col-span-3 rounded-md border bg-card p-6 shadow-soft">
            <h3 className="mb-2 text-2xl font-semibold">Pilot</h3>
            <p className="text-muted-foreground">Roll out to a small group, measure accuracy and time saved, and set guardrails.</p>
            <p className="mt-2 text-sm text-muted-foreground">What you get: metrics and guardrails.</p>
          </li>
          <li className="md:col-span-3 rounded-md border bg-card p-6 shadow-soft">
            <h3 className="mb-2 text-2xl font-semibold">Scale</h3>
            <p className="text-muted-foreground">Harden, document, and train. Your team owns it; we stay on call.</p>
            <p className="mt-2 text-sm text-muted-foreground">What you get: documentation and handover.</p>
          </li>
        </ol>
        <p className="mt-6 text-sm text-muted-foreground">Note: Every step includes a de-risk checklist and a clear handover.</p>
      </section>

      {/* Proof */}
      <section className="mx-auto max-w-[1280px] px-4 py-24 md:px-6" aria-labelledby="proof">
        <h2 id="proof" className="mb-8 text-4xl font-semibold tracking-tight">Think vs Fast — the GPT-5 demo</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <article className="md:col-span-7 rounded-md border bg-card p-6 shadow-soft">
            <p className="measure text-muted-foreground">
              The same task runs in two modes. Fast answers in seconds; Thinking reasons deeper for tougher requests. You’ll see timing and sources for both.
            </p>
            <div className="mt-4">
              <Button asChild className="focus-ring" onClick={() => logEvent('demo_run', { source: 'home-proof-card' })}>
                <Link href="/demos">Try the demo</Link>
              </Button>
            </div>
          </article>
          <aside className="md:col-span-5 rounded-md border bg-card p-6 text-sm text-muted-foreground shadow-soft">
            <p>Past runs: Fast 1.8s · Thinking 5.2s</p>
            <p className="mt-2">Two micro-cases:</p>
            <ul className="mt-1 list-disc pl-5">
              <li>Reduced “proposal prep” from 2 hours to 12 minutes by turning notes into drafts with citations.</li>
              <li>Cut data-entry errors by 63% by validating forms against live policy checks.</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Safety & limits */}
      <section className="mx-auto max-w-[1280px] px-4 py-24 md:px-6" aria-labelledby="safety">
        <h2 id="safety" className="mb-8 text-4xl font-semibold tracking-tight">Safety & limits</h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <li className="md:col-span-3">We put correctness before cleverness.</li>
          <li className="md:col-span-3">Privacy: your data stays where it belongs; access is least-privilege.</li>
          <li className="md:col-span-3">Guardrails: sensitive tasks require human sign-off.</li>
          <li className="md:col-span-3">Honesty: if AI isn’t the right tool, we’ll say so and propose an alternative.</li>
        </ul>
        <div className="mt-6">
          <Link className="underline underline-offset-4" href="/why-gaia">How our systems differ from chatbots →</Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-[1280px] px-4 py-24 md:px-6" aria-labelledby="cta">
        <div className="grid grid-cols-1 items-center gap-8 rounded-md border bg-card p-8 shadow-soft md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 id="cta" className="mb-2 text-3xl font-semibold tracking-tight">Ready to see it with your data?</h2>
            <p className="measure text-muted-foreground">Book a 30-minute discovery session or grab the playbook to plan your first win.</p>
          </div>
          <div className="md:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row" role="group" aria-label="CTA actions">
              <Button asChild size="lg" className="focus-ring">
                <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" onClick={() => window.dispatchEvent(new CustomEvent('gaia:discovery_booked'))}>Book Discovery</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="focus-ring">
                <a href="/playbook.pdf" download onClick={() => window.dispatchEvent(new CustomEvent('gaia:playbook_downloaded'))}>Get the Playbook</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Green AI & Automation (GAIA)',
            url: 'https://greenaiautomation.ai',
            sameAs: ['https://cal.com/'],
            description: 'Agentic systems, automations, and executive-grade guidance—explained clearly and delivered fast.',
          }),
        }}
      />
    </main>
  )
}



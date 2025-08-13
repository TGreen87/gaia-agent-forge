"use client"
import casesData from '@/data/cases.json'
import { logEvent } from '@/lib/analytics'
import { useEffect } from 'react'

type Case = {
  id: string
  title: string
  description: string
  metrics: Record<string, string>
  tags: string[]
}

type Cases = { cases: Case[] }

export default function ProofPage() {
  const cases = (casesData as Cases).cases

  useEffect(() => {
    logEvent('view_proof')
  }, [])

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">Proof</h1>
        <p className="lede text-muted-foreground">Real results from real projects. No fluff.</p>
      </header>

      <div className="grid gap-8">
        {cases.map((caseItem) => (
          <article key={caseItem.id} className="rounded-md border bg-card p-6 shadow-soft">
            <h2 className="mb-3 text-2xl font-semibold">{caseItem.title}</h2>
            <p className="mb-4 text-muted-foreground">{caseItem.description}</p>
            
            <div className="mb-4 flex flex-wrap gap-2">
              {caseItem.tags.map((tag) => (
                <span key={tag} className="rounded bg-muted px-2 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {Object.entries(caseItem.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-semibold text-primary">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {key.replace('_', ' ')}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-md border bg-card p-6 text-center">
        <h2 className="mb-2 text-xl font-semibold">Ready to see results like these?</h2>
        <p className="mb-4 text-muted-foreground">Book a discovery call to discuss your specific needs.</p>
        <a 
          href="https://cal.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
          onClick={() => logEvent('discovery_booked', { source: 'proof' })}
        >
          Book Discovery Call
        </a>
      </section>
    </main>
  )
}

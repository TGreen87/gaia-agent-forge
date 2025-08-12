"use client"
import { logEvent } from '@/lib/analytics'
export default function ResourcesPage() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    if (!name || !email) return
    logEvent('playbook_downloaded')
    window.location.href = '/playbook.pdf'
  }
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <h1 className="mb-4 text-4xl font-semibold tracking-tight">The AI Adoption Playbook</h1>
      <p className="lede text-muted-foreground">A practical guide to pick a first project, measure it, and scale.</p>
      <ul className="mt-4 list-disc pl-5 text-muted-foreground">
        <li>Use-case finder</li>
        <li>Pilot checklist</li>
        <li>Guardrails</li>
        <li>Rollout plan template</li>
      </ul>
      <form className="mt-8 grid max-w-md gap-3" aria-label="Playbook download gate" onSubmit={onSubmit} data-analytics="playbook-gate">
        <label className="flex flex-col gap-1">
          <span>Name</span>
          <input className="rounded-md border bg-background p-2 focus-ring" name="name" required aria-required="true" />
        </label>
        <label className="flex flex-col gap-1">
          <span>Email</span>
          <input className="rounded-md border bg-background p-2 focus-ring" type="email" name="email" required aria-required="true" />
        </label>
        <button className="rounded-md border bg-card px-4 py-2 focus-ring" type="submit">Get the Playbook</button>
      </form>
    </main>
  )
}


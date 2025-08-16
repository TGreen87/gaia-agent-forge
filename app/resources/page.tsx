"use client"
import { useState } from 'react'
import Link from 'next/link'
import { logEvent } from '@/lib/analytics'
export default function ResourcesPage() {
  const [ok, setOk] = useState(false)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const email = String(data.get('email') || '').trim()
    if (!email) return
    setOk(true)
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, kind: 'playbook' })
    }).catch(() => {})
    logEvent('playbook_downloaded', { section: 'resources' })
  }
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <h1 className="mb-4 text-4xl font-semibold tracking-tight">Resources</h1>
      <p className="lede text-muted-foreground">Download the AI Adoption Playbook and start a safe two week pilot.</p>
      {!ok ? (
        <form className="mt-8 grid max-w-md gap-3" aria-label="Playbook download gate" onSubmit={onSubmit} data-analytics="playbook-gate">
          <label className="flex flex-col gap-1">
            <span>Email</span>
            <input className="rounded-md border bg-background p-2 focus-ring" type="email" name="email" required aria-required="true" placeholder="you@company.com" />
          </label>
          <button className="rounded-md border bg-card px-4 py-2 focus-ring" type="submit">Get the Playbook</button>
          <p className="text-xs text-muted-foreground">We only use this to send the file and a short follow up.</p>
        </form>
      ) : (
        <div className="mt-8 rounded-md border bg-card p-6">
          <h2 className="text-xl font-medium">Your download is ready</h2>
          <p className="mt-2">
            <Link href="/downloads/GAIA_Ai_Adoption_Playbook.html" target="_blank" className="underline">Open the Playbook</Link>
          </p>
        </div>
      )}
    </main>
  )
}


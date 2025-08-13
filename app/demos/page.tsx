"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { logEvent } from '@/lib/analytics'

type Result = {
  model: 'gpt-5' | 'gpt-5-thinking'
  durationMs: number
  answer: string
  citations?: string[]
  confidence: 'low' | 'medium' | 'high'
  error?: string
}

export default function DemosPage() {
  const [prompt, setPrompt] = useState('Summarize how agentic systems differ from chatbots for an exec audience.')
  const [busy, setBusy] = useState(false)
  const [fast, setFast] = useState<Result | null>(null)
  const [thinking, setThinking] = useState<Result | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function runBoth() {
    setBusy(true)
    setError(null)
    setFast(null)
    setThinking(null)
    try {
      logEvent('demo_run', { source: 'demos-page' })
      const res = await fetch('/api/demos/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json() as { fast: Result; thinking: Result }
      setFast(data.fast)
      setThinking(data.thinking)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight">Think vs Fast — the GPT-5 demo</h1>
        <p className="lede text-muted-foreground">Run both modes side by side. Timing badges update live. Citations & confidence shown when available.</p>
      </header>

      <section className="mb-6 rounded-md border bg-card p-4">
        <label className="block text-sm font-medium">Prompt</label>
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="mt-2 w-full min-h-28 rounded-md border bg-background p-2 focus-ring" />
        <div className="mt-4 flex items-center gap-3">
          <Button onClick={runBoth} disabled={busy}>{busy ? 'Running…' : 'Run both'}</Button>
          <span className="text-sm text-muted-foreground">Optional: PDF upload coming soon</span>
        </div>
      </section>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-md border bg-card p-4">
          <header className="mb-3 flex items-center justify-between">
            <h2 className="font-semibold">Fast (gpt-5)</h2>
            <span className="rounded bg-muted px-2 py-1 text-xs">{fast ? `${(fast.durationMs/1000).toFixed(1)}s` : '—'}</span>
          </header>
          <pre className="whitespace-pre-wrap text-sm text-muted-foreground">{fast?.error ? `Error: ${fast.error}` : (fast?.answer || '—')}</pre>
          <footer className="mt-3 text-xs text-muted-foreground">Citations & confidence: {fast?.citations?.join(', ') || '—'} {fast ? `· ${fast.confidence}` : ''}</footer>
        </article>
        <article className="rounded-md border bg-card p-4">
          <header className="mb-3 flex items-center justify-between">
            <h2 className="font-semibold">Thinking (gpt-5-thinking)</h2>
            <span className="rounded bg-muted px-2 py-1 text-xs">{thinking ? `${(thinking.durationMs/1000).toFixed(1)}s` : '—'}</span>
          </header>
          <pre className="whitespace-pre-wrap text-sm text-muted-foreground">{thinking?.error ? `Error: ${thinking.error}` : (thinking?.answer || '—')}</pre>
          <footer className="mt-3 text-xs text-muted-foreground">Citations & confidence: {thinking?.citations?.join(', ') || '—'} {thinking ? `· ${thinking.confidence}` : ''}</footer>
        </article>
      </section>
    </main>
  )
}



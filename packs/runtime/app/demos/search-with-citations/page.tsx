"use client";
import { useState } from 'react';
import { track } from '@/lib/analytics';
type Out = { answer: string, sources: string[] };
export default function SearchWithCitations(){
  const [q,setQ]=useState('');
  const [out,setOut]=useState<Out|null>(null);
  const [busy,setBusy]=useState(false);
  async function run(){ setBusy(true); setTimeout(()=>{ setOut({answer:'A short answer with a source link.', sources:['https://example.com/source']}); setBusy(false); track('demo_run',{variant:'search_with_citations'}); }, 250); }
  return (<main className="mx-auto max-w-3xl px-6 py-16">
    <h1 className="text-3xl font-semibold">Search with citations</h1>
    <p className="mt-2 text-muted-foreground">Ask a question. Get a short answer with sources.</p>
    <div className="mt-6 grid gap-3"><input className="rounded-md border bg-background px-3 py-2" value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Your question" /><button onClick={run} disabled={busy} className="btn btn-primary w-fit">Run</button></div>
    {out && (<section className="mt-6 rounded-md border p-4"><p>{out.answer}</p><ul className="mt-2 list-disc pl-5 text-sm">{out.sources.map(s=><li key={s}><a className="underline" href={s} target="_blank">{s}</a></li>)}</ul></section>)}
  </main>);
}
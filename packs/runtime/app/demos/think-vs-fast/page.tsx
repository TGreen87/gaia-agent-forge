"use client";
import { useState } from 'react';
import { track } from '@/lib/analytics';
type Log = { step: string, detail: string };
export default function ThinkVsFast(){
  const [prompt,setPrompt]=useState('');
  const [busy,setBusy]=useState(false);
  const [fast,setFast]=useState('');
  const [think,setThink]=useState('');
  const [log,setLog]=useState<Log[]>([]);
  function add(step:string, detail:string){ setLog(l=>[...l,{step,detail}]); }
  async function run(){
    setBusy(true); setFast(''); setThink(''); setLog([]);
    add('Plan','Prepare inputs and safety checks'); await new Promise(r=>setTimeout(r,200));
    add('Retrieve','Look up sources for the query'); await new Promise(r=>setTimeout(r,200));
    add('Tools','Call tool to format the draft'); await new Promise(r=>setTimeout(r,200));
    setFast('Fast path result with one citation.');
    setThink('Think path result with two citations and a short check list.');
    add('Verify','Apply simple rules before showing the answer'); add('Respond','Render both outputs'); add('Log','Store run summary for review');
    setBusy(false); track('demo_run',{variant:'think_vs_fast'});
  }
  return (<main className="mx-auto max-w-4xl px-6 py-16">
    <h1 className="text-3xl font-semibold">Think vs Fast</h1>
    <p className="mt-2 text-muted-foreground">Run the same task in two modes. See timing and sources.</p>
    <div className="mt-6 grid gap-3">
      <textarea className="min-h-[120px] rounded-md border bg-background p-3" placeholder="Enter a prompt you care about" value={prompt} onChange={(e)=>setPrompt(e.target.value)} />
      <button onClick={run} disabled={busy} className="btn btn-primary w-fit">Run</button>
    </div>
    {(fast||think) && (<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <section className="rounded-md border p-4"><h2 className="text-lg font-medium">Fast</h2><pre className="mt-2 whitespace-pre-wrap text-sm">{fast}</pre></section>
      <section className="rounded-md border p-4"><h2 className="text-lg font-medium">Think</h2><pre className="mt-2 whitespace-pre-wrap text-sm">{think}</pre></section>
    </div>)}
    {log.length>0 && (<section className="mt-8 rounded-md border p-4"><h2 className="text-lg font-medium">Run log</h2><ol className="mt-2 list-decimal pl-5 text-sm">{log.map((l,i)=><li key={i}><strong>{l.step}:</strong> {l.detail}</li>)}</ol></section>)}
  </main>);
}
export default function Downloads(){
  return (<main className="mx-auto max-w-3xl px-6 py-16">
    <h1 className="text-3xl font-semibold">Downloads</h1>
    <p className="mt-2 text-muted-foreground">These packs include templates and guides. We keep them simple on purpose.</p>
    <ul className="mt-6 list-disc pl-5">
      <li><a className="underline" href="/packs/phase-1.zip">Phase 1 pack</a></li>
      <li className="mt-1"><a className="underline" href="/packs/phase-2.zip">Phase 2 pack</a></li>
      <li className="mt-1"><a className="underline" href="/downloads/GAIA_Ai_Adoption_Playbook.html">AI Adoption Playbook</a></li>
    </ul>
    <p className="mt-6 text-sm text-muted-foreground">If a link fails it will be fixed on the next deploy. Contact tom@greenaiautomation.ai for help.</p>
  </main>);
}
export const metadata = { title: 'Projects & Demos' }
export default function ProjectsAndDemosPage() {
  const demos = [
    { title: 'Think vs Fast', desc: 'Run a task in two modes. See timing and sources.', href: '/demos/think-vs-fast', status: 'Live' },
    { title: 'Search with citations', desc: 'Ask a question. Get a short answer with sources.', href: '#', status: 'Preview' },
    { title: 'Proposal draft with rules', desc: 'Provide a short brief. See a draft and a check list.', href: '#', status: 'Preview' },
    { title: 'Inbox triage', desc: 'Route mail based on rules. See the log.', href: '#', status: 'Preview' },
  ]
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">Projects and Demos</h1>
        <p className="lede text-muted-foreground">Working demos beat slides. Try a safe example today.</p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {demos.map((d) => (
          <a key={d.title} href={d.href} className="md:col-span-4 rounded-md border bg-card p-6 shadow-soft hover:bg-muted/10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">{d.title}</h2>
              <span className="text-xs rounded bg-secondary px-2 py-1">{d.status}</span>
            </div>
            <p className="mt-2 text-muted-foreground">{d.desc}</p>
          </a>
        ))}
      </div>
    </main>
  )
}


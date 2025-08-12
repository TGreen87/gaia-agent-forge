export const metadata = { title: 'Learning Hub' }
export default function LearningHubPage() {
  const posts = [
    { title: 'What Are Agentic Systems?', lede: 'A plain-English guide with a simple task graph.', read: '5 min' },
    { title: 'AI Adoption: Myths vs Reality', lede: 'Common traps and what to measure instead.', read: '5 min' },
    { title: 'Getting Started with Automation (SMB Checklist)', lede: 'A pragmatic starting list.', read: '5 min' },
  ]
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">Learning Hub</h1>
        <p className="lede text-muted-foreground">Clear guides and examples you can share with your team.</p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {posts.map((p) => (
          <article key={p.title} className="md:col-span-4 rounded-md border bg-card p-6 shadow-soft">
            <h2 className="text-2xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-muted-foreground">{p.lede}</p>
            <span className="mt-4 inline-block text-xs text-muted-foreground">{p.read} read</span>
          </article>
        ))}
      </div>
    </main>
  )
}



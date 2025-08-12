export const metadata = { title: 'Projects & Demos' }
export default function ProjectsPage() {
  const demos = [
    { title: 'Think vs Fast (GPT-5)', desc: 'Same task, two modes—see timing and sources.', id: 'think-vs-fast' },
    { title: 'Agentic Planner', desc: 'Upload an SOP and a CSV to get a draft automation outline.', id: 'agentic-planner' },
    { title: 'Coding Collab', desc: 'From a brief to a real API route and test.', id: 'coding-collab' },
  ]
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">Projects & Demos</h1>
        <p className="lede text-muted-foreground">Internal R&D and public demos that show our approach.</p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {demos.map((d) => (
          <article key={d.id} id={d.id} className="md:col-span-4 rounded-md border bg-card p-6 shadow-soft">
            <h2 className="text-2xl font-semibold">{d.title}</h2>
            <p className="mt-2 text-muted-foreground">{d.desc}</p>
          </article>
        ))}
      </div>
    </main>
  )
}



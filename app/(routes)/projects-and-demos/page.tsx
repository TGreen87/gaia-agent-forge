import demosData from '@/data/demos.json'

export const metadata = { title: 'Projects and Demos' }

type Demo = {
  id: string
  title: string
  description: string
  href: string
  status: string
}

type Demos = { demos: Demo[] }

export default function ProjectsAndDemosPage() {
  const demos = (demosData as Demos).demos

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">Projects and Demos</h1>
        <p className="lede text-muted-foreground">Working demos beat slides. Try a safe example today.</p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {demos.map((demo) => (
          <a key={demo.id} href={demo.href} className="md:col-span-4 rounded-md border bg-card p-6 shadow-soft hover:bg-muted/10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">{demo.title}</h2>
              <span className="text-xs rounded bg-secondary px-2 py-1">{demo.status}</span>
            </div>
            <p className="mt-2 text-muted-foreground">{demo.description}</p>
          </a>
        ))}
      </div>
    </main>
  )
}


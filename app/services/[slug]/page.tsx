import services from '@/data/services.json'

export default function ServicePage({ params }: { params: { slug: string } }) {
  const all = (services as any).groups.flatMap((g: any) => g.items)
  const svc = all.find((s: any) => s.slug === params.slug)

  if (!svc) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Service not found</h1>
        <p className="mt-2 text-muted-foreground">Please pick another service.</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">{svc.name}</h1>
      <p className="mt-2 text-muted-foreground">{svc.summary}</p>

      <section className="mt-8">
        <h2 className="text-xl font-medium">Good first projects</h2>
        <ul className="mt-2 list-disc pl-5 text-sm">
          {svc.first_projects.map((x: string) => <li key={x}>{x}</li>)}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium">Two week output</h2>
        <ul className="mt-2 list-disc pl-5 text-sm">
          {svc.deliverables.map((x: string) => <li key={x}>{x}</li>)}
        </ul>
      </section>

      <div className="mt-10">
        <a href="/contact" className="btn btn-primary">Start a two week pilot</a>
      </div>
    </main>
  )
}



import servicesData from '@/data/services.json'

type ServiceItem = {
  slug: string
  name: string
  summary: string
  first_projects: string[]
  deliverables: string[]
}

type ServiceGroup = {
  id: string
  title: string
  items: ServiceItem[]
}

type Services = { groups: ServiceGroup[] }

export const dynamicParams = false

export function generateStaticParams() {
  const all = (servicesData as Services).groups.flatMap((g) => g.items)
  return all.map((s) => ({ slug: s.slug }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const all = (servicesData as Services).groups.flatMap((g) => g.items)
  const svc = all.find((s) => s.slug === slug)

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



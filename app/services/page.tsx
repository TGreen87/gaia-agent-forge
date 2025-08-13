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

export const metadata = { title: 'Services' }
export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">Services</h1>
        <p className="lede text-muted-foreground">Pick the outcome that fits your team. We start small. We ship what works.</p>
      </header>
      {(servicesData as Services).groups.map((group) => (
        <section key={group.id} className="mb-12 rounded-md border bg-card p-6 shadow-soft">
          <h2 className="mb-2 text-2xl font-semibold">{group.title}</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {group.items.map((item) => (
              <a key={item.slug} href={`/services/${item.slug}`} className="rounded-md border p-4 hover:bg-muted/10">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.summary}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}



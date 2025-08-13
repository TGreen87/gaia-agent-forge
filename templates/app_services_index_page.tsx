import services from "@/data/services.json";

export default function Services() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Services</h1>
      <p className="mt-2 text-muted-foreground">Pick the outcome that fits your team. We start small and we ship what works.</p>

      {services.groups.map((group: any) => (
        <section key={group.id} className="mt-10">
          <h2 className="text-xl font-medium">{group.title}</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {group.items.map((item: any) => (
              <a key={item.slug} href={`/services/${item.slug}`} className="rounded-md border p-4 hover:bg-muted/10">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.summary}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

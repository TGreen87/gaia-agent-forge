import Link from 'next/link';
import data from '@/data/services.json';
export default function ServicesIndex(){
  return (<main className="mx-auto max-w-5xl px-6 py-16">
    <h1 className="text-3xl font-semibold">Services</h1>
    {data.groups.map((g:any)=>(<section key={g.id} className="mt-8">
      <h2 className="text-xl font-medium">{g.title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {g.items.map((it:any)=>(<article key={it.slug} className="gaia-card p-4">
          <h3 className="text-lg font-medium">{it.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{it.summary}</p>
          <Link href={`/services/${it.slug}`} className="mt-3 inline-block underline">Learn more</Link>
        </article>))}
      </div>
    </section>))}
  </main>);
}
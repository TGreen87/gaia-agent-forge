import data from '@/data/services.json';
export default function ServicePage({ params }: { params: { slug: string } }){
  const item = data.groups.flatMap((g:any)=>g.items).find((i:any)=>i.slug===params.slug);
  if(!item) return <main className="p-10"><h1>Service</h1><p>Not found.</p></main>;
  return (<main className="mx-auto max-w-3xl px-6 py-16">
    <h1 className="text-3xl font-semibold">{item.name}</h1>
    <p className="mt-2 text-muted-foreground">{item.summary}</p>
    <section className="mt-6"><h2 className="text-xl font-medium">First projects</h2><ul className="mt-2 list-disc pl-5">{item.first_projects?.map((p:string)=><li key={p}>{p}</li>)}</ul></section>
    <section className="mt-6"><h2 className="text-xl font-medium">Deliverables in two weeks</h2><ul className="mt-2 list-disc pl-5">{item.deliverables?.map((d:string)=><li key={d}>{d}</li>)}</ul></section>
    <div className="mt-8"><a href="/contact" className="btn btn-primary">Start a two week pilot</a></div>
  </main>);
}
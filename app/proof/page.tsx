import cases from '@/data/cases.json';

export default function Proof() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Proof</h1>
      <p className="mt-2 text-muted-foreground">Short cases from pilots and demos. We add new notes as we learn.</p>
      <div className="mt-8 grid grid-cols-1 gap-4">
        {cases.items.map((c) => (
          <article key={c.title} className="rounded-md border p-4">
            <h2 className="text-lg font-medium">{c.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

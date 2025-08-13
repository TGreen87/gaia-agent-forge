export default function ProjectsAndDemos() {
  const items = [
    { title: "Think vs Fast", desc: "Run a task in two modes. See timing and sources.", href: "/demos/think-vs-fast", status: "Live" },
    { title: "Search with citations", desc: "Ask a question. Get a short answer with sources.", href: "#", status: "Preview" },
    { title: "Proposal draft with rules", desc: "Provide a short brief. See a draft and a check list.", href: "#", status: "Preview" },
    { title: "Inbox triage", desc: "Route mail based on rules. See the log.", href: "#", status: "Preview" }
  ];
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Projects and Demos</h1>
      <p className="mt-2 text-muted-foreground">Working demos beat slides. Try a safe example today.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((it) => (
          <a key={it.title} href={it.href} className="rounded-md border p-4 hover:bg-muted/10">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">{it.title}</h2>
              <span className="text-xs rounded bg-secondary px-2 py-1">{it.status}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
          </a>
        ))}
      </div>
    </main>
  );
}

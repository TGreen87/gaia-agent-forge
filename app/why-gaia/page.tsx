export const metadata = { title: 'Why GAIA' }
export default function WhyPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">Two patterns compared</h1>
        <p className="lede text-muted-foreground">A chatbot answers once. An agentic system plans steps, calls tools, retrieves knowledge with citations, checks rules, and logs the run.</p>
      </header>
      <figure className="rounded-md border bg-card p-6 shadow-soft" aria-label="Chatbot vs Agentic Workflow diagram">
        <svg viewBox="0 0 720 260" role="img" aria-labelledby="diagram-title diagram-desc" className="w-full">
          <title id="diagram-title">Chatbot vs Agentic Workflow</title>
          <desc id="diagram-desc">Agentic workflow orchestrates multiple tools, retrieves knowledge with citations, and follows approved rules.</desc>
          <rect x="20" y="30" width="300" height="200" rx="12" fill="hsl(var(--muted))" />
          <text x="40" y="60" fill="hsl(var(--foreground))" fontSize="14">Chatbot</text>
          <circle cx="80" cy="120" r="10" fill="hsl(var(--primary))" />
          <text x="100" y="124" fill="hsl(var(--foreground))" fontSize="12">Prompt to Answer</text>
          <rect x="380" y="30" width="320" height="200" rx="12" fill="hsl(var(--muted))" />
          <text x="400" y="60" fill="hsl(var(--foreground))" fontSize="14">Agentic workflow</text>
          <circle cx="420" cy="110" r="8" fill="hsl(var(--primary))" />
          <circle cx="470" cy="110" r="8" fill="hsl(var(--primary))" />
          <circle cx="520" cy="110" r="8" fill="hsl(var(--primary))" />
          <circle cx="570" cy="110" r="8" fill="hsl(var(--primary))" />
          <line x1="428" y1="110" x2="462" y2="110" stroke="hsl(var(--foreground))" strokeWidth="2" />
          <line x1="478" y1="110" x2="512" y2="110" stroke="hsl(var(--foreground))" strokeWidth="2" />
          <line x1="528" y1="110" x2="562" y2="110" stroke="hsl(var(--foreground))" strokeWidth="2" />
          <text x="400" y="170" fill="hsl(var(--foreground))" fontSize="12">Plan · Retrieve · Act · Verify</text>
        </svg>
        <figcaption className="mt-3 text-sm text-muted-foreground">The agentic path plans, retrieves with citations, calls tools, checks rules, and logs the run. You can add human checks at any step.</figcaption>
      </figure>
      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">FAQ</h2>
        <dl className="grid gap-6 md:grid-cols-2">
          <div>
            <dt className="font-medium">How do you ensure accuracy?</dt>
            <dd className="text-muted-foreground">Retrieval with citations, test sets, and human sign-off for sensitive tasks.</dd>
          </div>
          <div>
            <dt className="font-medium">Will my data be safe?</dt>
            <dd className="text-muted-foreground">Yes. Access is least-privilege and stays in your environment when required.</dd>
          </div>
          <div>
            <dt className="font-medium">What is the first step?</dt>
            <dd className="text-muted-foreground">A prototype that solves one problem with your data and tooling.</dd>
          </div>
        </dl>
      </section>
    </main>
  )
}



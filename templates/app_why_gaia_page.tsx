export default function WhyGAIA() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Why GAIA</h1>
      <p className="mt-2 text-muted-foreground">You want results without noise. We agree.</p>

      <section className="mt-8">
        <h2 className="text-xl font-medium">Principles</h2>
        <ul className="mt-2 list-disc pl-5 text-sm">
          <li>Clarity over jargon.</li>
          <li>Proof over promises.</li>
          <li>Safety over shortcuts.</li>
          <li>Small wins over large plans.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-medium">Two patterns compared</h2>
        <figure className="mt-3 rounded-md border p-4">
          <svg role="img" aria-labelledby="title desc" width="100%" height="180" viewBox="0 0 800 180">
            <title id="title">Two patterns compared</title>
            <desc id="desc">Left shows a single turn chatbot. Right shows an agentic plan that retrieves, calls tools, checks rules, and logs.</desc>
            <g fill="none" stroke="#9AA3AE" strokeWidth="1.5">
              <rect x="20" y="40" width="120" height="40" rx="6" />
              <text x="80" y="65" textAnchor="middle" fill="#E6E9ED" fontSize="12">Prompt</text>
              <path d="M140 60 L200 60" />
              <rect x="200" y="40" width="120" height="40" rx="6" />
              <text x="260" y="65" textAnchor="middle" fill="#E6E9ED" fontSize="12">Reply</text>

              <rect x="420" y="20" width="120" height="32" rx="6" />
              <text x="480" y="40" textAnchor="middle" fill="#E6E9ED" fontSize="12">Plan</text>
              <path d="M540 36 L580 36" />
              <rect x="580" y="20" width="120" height="32" rx="6" />
              <text x="640" y="40" textAnchor="middle" fill="#E6E9ED" fontSize="12">Retrieve</text>

              <rect x="420" y="72" width="120" height="32" rx="6" />
              <text x="480" y="92" textAnchor="middle" fill="#E6E9ED" fontSize="12">Tools</text>
              <path d="M540 88 L580 88" />
              <rect x="580" y="72" width="120" height="32" rx="6" />
              <text x="640" y="92" textAnchor="middle" fill="#E6E9ED" fontSize="12">Verify</text>

              <rect x="420" y="124" width="120" height="32" rx="6" />
              <text x="480" y="144" textAnchor="middle" fill="#E6E9ED" fontSize="12">Respond</text>
              <path d="M540 140 L580 140" />
              <rect x="580" y="124" width="120" height="32" rx="6" />
              <text x="640" y="144" textAnchor="middle" fill="#E6E9ED" fontSize="12">Log</text>
            </g>
          </svg>
          <figcaption className="mt-2 text-sm text-muted-foreground">
            The agentic path plans, retrieves with citations, calls tools, checks rules, and logs the run.
          </figcaption>
        </figure>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-medium">Guarantees</h2>
        <ul className="mt-2 list-disc pl-5 text-sm">
          <li>If we are not the right fit, we will say so.</li>
          <li>If a claim is an estimate, we will mark it that way.</li>
          <li>If a risk is present, we will show the guardrail that controls it.</li>
        </ul>
      </section>

      <div className="mt-10">
        <a href="/contact" className="btn btn-primary">Start a two week pilot</a>
      </div>
    </main>
  );
}

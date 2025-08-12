export const metadata = { title: 'About' }
export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <h1 className="mb-6 text-4xl font-semibold tracking-tight">Why GAIA</h1>
      <p className="measure text-muted-foreground">
        We’ve worked across SMBs and enterprise environments. What clients value most is clear thinking, fast prototypes, and systems that stand up to scrutiny. We’ll tell you when AI isn’t the answer—and show you when it is.
      </p>
      <section className="mt-8">
        <h2 className="mb-2 text-2xl font-semibold">Principles</h2>
        <ul className="list-disc pl-5 text-muted-foreground">
          <li>Clarity</li>
          <li>Correctness</li>
          <li>Calm design</li>
          <li>Measurable progress</li>
        </ul>
      </section>
    </main>
  )
}



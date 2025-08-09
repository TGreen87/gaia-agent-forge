import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center md:px-6">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Empower your business with AI you can trust.</h1>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
          Agentic systems, automation, and coaching—delivered with clarity. Download the Playbook or book a discovery session.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <a href="/playbook.pdf" download aria-label="Download AI Adoption Playbook">Download Playbook</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" aria-label="Book a discovery session">Book Discovery Session</a>
          </Button>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Green AI & Automation (GAIA)',
            url: 'https://greenaiautomation.ai',
            sameAs: ['https://cal.com/'],
            description: 'Agentic systems, automation, and executive coaching—delivered with clarity.',
          }),
        }}
      />
    </section>
  )
}

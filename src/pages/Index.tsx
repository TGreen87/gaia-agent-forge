import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CursorGradient from "@/components/graphics/CursorGradient";
import heroBg from "@/assets/gaia-hero.jpg";
import { Bot, Workflow, Zap, GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <img
          src={heroBg}
          alt="Abstract network of green nodes and lines"
          loading="eager"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <CursorGradient />
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center py-20 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Empower your business with AI you can trust.
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              Agentic systems, automation, and coaching—delivered with clarity.
              Download the Playbook or book a discovery session.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href="/playbook.pdf" download aria-label="Download AI Adoption Playbook">
                  Download Playbook
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" aria-label="Book a discovery session">
                  Book Discovery Session
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">What we do</h2>
          <p className="text-muted-foreground">Four pillars to move from ideas to impact.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Bot className="text-primary" /> Agentic Systems & Apps
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Build multi-step agents that plan, cite, and act across tools.
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Workflow className="text-primary" /> AI Consulting & Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Roadmaps and policies for reliable, safe AI adoption.
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Zap className="text-primary" /> Automation & Web Engineering
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Ship n8n flows and web apps that automate busywork.
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <GraduationCap className="text-primary" /> Executive Coaching & Training
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Upskill leaders and teams with practical, hands-on sessions.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why GAIA (mini diagram) */}
      <section className="container mx-auto px-4 pb-20 md:px-6">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Why GAIA</h2>
          <p className="text-muted-foreground">More than chat—agents that orchestrate tools with safeguards.</p>
        </header>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 font-medium">"Chatbot"</h3>
            <svg viewBox="0 0 300 120" className="w-full">
              <rect x="10" y="20" width="280" height="80" rx="10" className="fill-muted" />
              <circle cx="60" cy="60" r="12" className="fill-primary" />
              <text x="80" y="65" className="fill-foreground text-[12px]">Single prompt → single answer</text>
            </svg>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 font-medium">Agentic Workflow</h3>
            <svg viewBox="0 0 300 120" className="w-full">
              <rect x="10" y="20" width="280" height="80" rx="10" className="fill-muted" />
              <circle cx="50" cy="45" r="10" className="fill-primary" />
              <circle cx="120" cy="45" r="10" className="fill-primary" />
              <circle cx="190" cy="45" r="10" className="fill-primary" />
              <circle cx="260" cy="45" r="10" className="fill-primary" />
              <line x1="60" y1="45" x2="110" y2="45" className="stroke-foreground" strokeWidth="2" />
              <line x1="130" y1="45" x2="180" y2="45" className="stroke-foreground" strokeWidth="2" />
              <line x1="200" y1="45" x2="250" y2="45" className="stroke-foreground" strokeWidth="2" />
              <text x="20" y="90" className="fill-foreground text-[12px]">Plan · Retrieve · Act · Verify</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Green AI & Automation (GAIA)',
            url: 'https://greenaiautomation.ai',
            sameAs: ['https://cal.com/'],
            description:
              'Agentic systems, automation, and executive coaching—delivered with clarity.',
          }),
        }}
      />
    </main>
  );
};

export default Index;

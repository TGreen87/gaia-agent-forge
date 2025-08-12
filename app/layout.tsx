import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Inter, Newsreader } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    default: 'Green AI & Automation (GAIA) — Agentic Systems',
    template: '%s — GAIA',
  },
  description: 'Empower your business with trustworthy agentic AI systems, automation, and executive coaching.',
  metadataBase: new URL('https://greenaiautomation.ai'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Green AI & Automation (GAIA)',
    description: 'Agentic systems, automation, and coaching—delivered with clarity.',
    type: 'website',
    url: 'https://greenaiautomation.ai/',
    images: ['/gaia-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@greenaiautomation',
  },
}

// Fonts must be initialized at module scope for Next font loader
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh bg-background font-sans antialiased">
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="greenaiautomation.ai"
          src="https://plausible.io/js/script.js"
        />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Green AI & Automation (GAIA)',
                  url: 'https://greenaiautomation.ai',
                  sameAs: ['https://cal.com/'],
                },
                {
                  '@type': 'ProfessionalService',
                  name: 'GAIA — Agentic Systems & Automation',
                  url: 'https://greenaiautomation.ai',
                  areaServed: 'Global',
                  serviceType: ['Agentic Systems', 'Automation', 'AI Consulting', 'Executive Training'],
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://greenaiautomation.ai/' },
                    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://greenaiautomation.ai/services' },
                    { '@type': 'ListItem', position: 3, name: 'Why GAIA', item: 'https://greenaiautomation.ai/why-gaia' },
                  ],
                },
              ],
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



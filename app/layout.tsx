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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



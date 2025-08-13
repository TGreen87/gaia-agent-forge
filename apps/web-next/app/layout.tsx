import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Green AI & Automation (GAIA) - Agentic Systems',
    template: '%s - GAIA',
  },
  description: 'Empower your business with trustworthy agentic AI systems, automation, and executive coaching.',
  metadataBase: new URL('https://greenaiautomation.ai'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Green AI & Automation (GAIA)',
    description: 'Agentic systems, automation, and coaching delivered with clarity.',
    type: 'website',
    url: 'https://greenaiautomation.ai/',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@greenaiautomation',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

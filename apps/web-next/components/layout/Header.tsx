"use client"
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '@/components/ui/theme-toggle'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/why-gaia', label: 'Why GAIA' },
  { href: '/learning-hub', label: 'Learning Hub' },
  { href: '/projects', label: 'Projects & Demos' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact/Booking' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="GAIA home" className="flex items-center gap-2">
          <Image src="/gaia-mark-1.png" alt="GAIA abstract mark - green nodes and leaf motif" width={28} height={28} className="rounded-sm" priority />
          <span className="text-base font-semibold tracking-tight">GAIA</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button asChild size="sm" variant="outline">
              <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" aria-label="Book a discovery call">Book a Call</a>
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

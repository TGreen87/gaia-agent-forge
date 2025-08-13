"use client"
import Link from 'next/link'
import ThemeToggle from '@/components/ui/theme-toggle'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/why-gaia', label: 'Why GAIA' },
  { href: '/proof', label: 'Proof' },
  { href: '/projects-and-demos', label: 'Projects and Demos' },
  { href: '/wizard/pilot-plan', label: 'Pilot Plan' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/resources', label: 'Resources' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="GAIA home" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-gradient-primary text-[0] shadow-elegant" aria-hidden />
          <span className="text-base font-semibold tracking-tight">GAIA</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground/90">
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



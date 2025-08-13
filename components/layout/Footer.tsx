export default function Footer() {
  return (
    <footer className="mt-20 border-t py-10 text-sm text-muted-foreground" role="contentinfo">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <span>© {new Date().getFullYear()} Green AI & Automation. Melbourne, Australia.</span>
        <nav className="flex flex-wrap items-center gap-4" aria-label="Footer">
          <a className="hover:underline" href="/privacy">Privacy</a>
          <a className="hover:underline" href="/accessibility">Accessibility</a>
          <a className="hover:underline" href="/resources">Resources</a>
        </nav>
        <small className="block text-xs">We never sell your data. Cookies only for essential functionality and anonymous analytics.</small>
      </div>
    </footer>
  )
}



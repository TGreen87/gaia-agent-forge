export default function Footer() {
  return (
    <footer className="mt-20 border-t py-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <span>© {new Date().getFullYear()} Green AI & Automation (GAIA)</span>
        <nav className="flex items-center gap-4">
          <a className="hover:underline" href="/playbook.pdf" download>
            Playbook
          </a>
          <a className="hover:underline" href="https://cal.com/" target="_blank" rel="noopener noreferrer">
            Book
          </a>
        </nav>
      </div>
    </footer>
  )
}

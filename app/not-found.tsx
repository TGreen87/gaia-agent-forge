import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold">We could not find that page</h1>
      <p className="mt-3 text-muted-foreground">The link may be old or the page moved.</p>
      <Link className="btn btn-primary mt-8" href="/">Go to Home</Link>
    </main>
  )
}



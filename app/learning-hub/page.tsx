import fs from 'node:fs'
export const dynamic = 'force-static'
type Item = { title: string; slug: string; date?: string; summary?: string; tags?: string[] }
export default async function LearningHubPage() {
  let items: Item[] = []
  try {
    const raw = await fs.promises.readFile('data/blog-index.json', 'utf8')
    items = JSON.parse(raw)
  } catch {
    items = []
  }
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Learning Hub</h1>
      {items.length === 0 ? (
        <p className="mt-4 text-muted-foreground">Articles will appear here. Notion sync can populate them.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {items.map((it) => (
            <li key={it.slug} className="gaia-card p-4">
              <a className="text-lg font-medium underline" href={`/learning-hub/${it.slug}`}>
                {it.title}
              </a>
              {it.summary && <p className="mt-1 text-sm text-muted-foreground">{it.summary}</p>}
              {it.date && <p className="mt-1 text-xs text-muted-foreground">{it.date}</p>}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}



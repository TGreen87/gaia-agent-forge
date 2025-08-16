import fs from 'node:fs'
import { stripFrontMatter, mdToHtml } from '@/lib/md'
export const dynamic = 'force-static'
export async function generateStaticParams() {
  try {
    const all = await fs.promises.readdir('content/blog')
    return all.filter((n) => n.endsWith('.md')).map((n) => ({ slug: n.replace(/\.md$/, '') }))
  } catch {
    return []
  }
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const md = await fs.promises.readFile(`content/blog/${slug}.md`, 'utf8')
    const body = mdToHtml(stripFrontMatter(md))
    return (
      <main className="prose prose-invert mx-auto max-w-3xl px-6 py-16">
        <article dangerouslySetInnerHTML={{ __html: body }} />
      </main>
    )
  } catch {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1>Article</h1>
        <p>Not found.</p>
      </main>
    )
  }
}



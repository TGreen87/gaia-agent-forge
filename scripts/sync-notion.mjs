// scripts/sync-notion.mjs
// Sync Articles and Cases from Notion into local files.
// - Requires env vars: NOTION_TOKEN, NOTION_DB_ARTICLES, NOTION_DB_CASES
// - Outputs:
//   - content/blog/*.md (front matter + body)
//   - data/blog-index.json (title, slug, date, summary, tags)
//   - data/cases.json ({ cases: [...] })

import fs from 'node:fs'
import path from 'node:path'

const NOTION_TOKEN = process.env.NOTION_TOKEN
const NOTION_DB_ARTICLES = process.env.NOTION_DB_ARTICLES
const NOTION_DB_CASES = process.env.NOTION_DB_CASES

if (!NOTION_TOKEN || !NOTION_DB_ARTICLES || !NOTION_DB_CASES) {
  console.log('Notion sync: missing NOTION_TOKEN, NOTION_DB_ARTICLES, or NOTION_DB_CASES. Skipping and exiting 0.')
  process.exit(0)
}

// Lazy import to avoid requiring the package when env vars are missing
const { Client } = await import('@notionhq/client')
const notion = new Client({ auth: NOTION_TOKEN })

async function queryAll(databaseId) {
  const results = []
  let cursor = undefined
  // Paginate through all results
  while (true) {
    const res = await notion.databases.query({ database_id: databaseId, start_cursor: cursor })
    results.push(...res.results)
    if (!res.has_more) break
    cursor = res.next_cursor
  }
  return results
}

function richTextToPlain(r = []) {
  return (r || []).map(t => t.plain_text || '').join('')
}

function prop(p, key) {
  return p?.[key]
}

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function ensureDirs() {
  await fs.promises.mkdir('data', { recursive: true })
  await fs.promises.mkdir('content/blog', { recursive: true })
}

async function fetchBodyFromBlocks(pageId) {
  try {
    const blocks = await notion.blocks.children.list({ block_id: pageId })
    const parts = []
    for (const b of blocks.results) {
      const t = b?.type
      const content = b?.[t]
      if (t === 'paragraph') {
        parts.push(richTextToPlain(content?.rich_text || []))
      } else if (t === 'heading_1' || t === 'heading_2' || t === 'heading_3') {
        parts.push(`#`.repeat(Number(t.split('_')[1])) + ' ' + richTextToPlain(content?.rich_text || []))
      } else if (t === 'bulleted_list_item') {
        parts.push('- ' + richTextToPlain(content?.rich_text || []))
      } else if (t === 'numbered_list_item') {
        parts.push('- ' + richTextToPlain(content?.rich_text || []))
      } else if (t === 'quote') {
        parts.push('> ' + richTextToPlain(content?.rich_text || []))
      } else if (t === 'code') {
        parts.push('```\n' + richTextToPlain(content?.rich_text || []) + '\n```')
      }
    }
    return parts.filter(Boolean).join('\n\n')
  } catch {
    return ''
  }
}

async function syncArticles() {
  const pages = await queryAll(NOTION_DB_ARTICLES)
  const index = []

  for (const page of pages) {
    const pr = page.properties || {}

    const title = richTextToPlain(prop(pr, 'Title')?.title || [])
    const slug = richTextToPlain(prop(pr, 'Slug')?.rich_text || []) || slugify(title)
    const summary = richTextToPlain(prop(pr, 'Summary')?.rich_text || [])
    let body = richTextToPlain(prop(pr, 'Body')?.rich_text || [])
    if (!body) body = await fetchBodyFromBlocks(page.id)
    const date = prop(pr, 'Date')?.date?.start || ''
    const tags = (prop(pr, 'Tags')?.multi_select || []).map(t => t?.name).filter(Boolean)

    const fm = `---\n` +
      `title: ${title}\n` +
      `slug: ${slug}\n` +
      `date: ${date}\n` +
      `summary: ${summary}\n` +
      `tags: ${JSON.stringify(tags)}\n` +
      `---\n\n` +
      `${body}\n`

    await fs.promises.writeFile(path.join('content/blog', `${slug}.md`), fm, 'utf8')
    index.push({ title, slug, date, summary, tags })
  }

  await fs.promises.writeFile('data/blog-index.json', JSON.stringify(index, null, 2))
  return pages.length
}

async function syncCases() {
  const pages = await queryAll(NOTION_DB_CASES)
  const cases = []
  for (const pg of pages) {
    const pr = pg.properties || {}
    const title = richTextToPlain(prop(pr, 'Title')?.title || [])
    const slug = richTextToPlain(prop(pr, 'Slug')?.rich_text || []) || slugify(title)
    const summary = richTextToPlain(prop(pr, 'Summary')?.rich_text || [])
    const sectorSelect = prop(pr, 'Sector')?.select?.name || ''
    const sectorMulti = (prop(pr, 'Sector')?.multi_select || []).map(t => t?.name).filter(Boolean)
    const logoUrl = prop(pr, 'Logo URL')?.url || ''
    const link = prop(pr, 'Link')?.url || ''
    let body = richTextToPlain(prop(pr, 'Body')?.rich_text || [])
    if (!body) body = await fetchBodyFromBlocks(pg.id)
    const id = slug
    const description = summary || body.slice(0, 240)
    const tags = sectorSelect ? [sectorSelect] : sectorMulti
    const metrics = {}
    cases.push({ id, title, description, metrics, tags, logoUrl, link })
  }
  await fs.promises.writeFile('data/cases.json', JSON.stringify({ cases }, null, 2))
  return pages.length
}

await ensureDirs()
const [articleCount, caseCount] = await Promise.all([syncArticles(), syncCases()])
console.log(`Synced ${articleCount} articles and ${caseCount} cases.`)



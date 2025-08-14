import fs from 'node:fs';
import path from 'node:path';
import { Client } from '@notionhq/client';

const token = process.env.NOTION_TOKEN;
const DB_ART = process.env.NOTION_DB_ARTICLES;
const DB_CASE = process.env.NOTION_DB_CASES;
if(!token||!DB_ART||!DB_CASE){ console.error('Missing NOTION_TOKEN, NOTION_DB_ARTICLES, NOTION_DB_CASES'); process.exit(1); }
const notion = new Client({ auth: token });

async function queryAll(db){ const out=[]; let cursor=undefined; while(true){ const res=await notion.databases.query({ database_id: db, start_cursor: cursor }); out.push(...res.results); if(!res.has_more) break; cursor=res.next_cursor; } return out; }
function text(r){ return (r||[]).map(t=>t.plain_text).join(''); }
function prop(p,k){ return p[k]; }
function slugify(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }

async function syncArticles(){ const pages=await queryAll(DB_ART); const idx=[]; await fs.promises.mkdir('content/blog',{recursive:true});
  for(const pg of pages){ const pr=pg.properties; const title=text(prop(pr,'Title')?.title||[]); const slug=text(prop(pr,'Slug')?.rich_text||[])||slugify(title); const summary=text(prop(pr,'Summary')?.rich_text||[]); const body=text(prop(pr,'Body')?.rich_text||[]); const date=prop(pr,'PublishDate')?.date?.start||null; const tags=(prop(pr,'Tags')?.multi_select||[]).map(t=>t.name);
    const md=`---
title: ${title}
slug: ${slug}
date: ${date}
summary: ${summary}
tags: ${JSON.stringify(tags)}
---

${body}
`; await fs.promises.writeFile(path.join('content/blog',`${slug}.md`),md,'utf8'); idx.push({ title, slug, date, summary, tags }); }
  await fs.promises.writeFile('data/blog-index.json', JSON.stringify(idx, null, 2));
}

async function syncCases(){ const pages=await queryAll(DB_CASE); const items=pages.map(pg=>{ const pr=pg.properties; const title=text(prop(pr,'Title')?.title||[]); const summary=text(prop(pr,'Summary')?.rich_text||[]); const metric=text(prop(pr,'Metric')?.rich_text||[]); const date=prop(pr,'Date')?.date?.start||null; return { title, summary, metric, date }; }); await fs.promises.writeFile('data/cases.json', JSON.stringify({ items }, null, 2)); }
await syncArticles(); await syncCases(); console.log('Synced Notion content.');

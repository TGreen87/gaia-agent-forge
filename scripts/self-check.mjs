import fs from 'node:fs';

function has(p){ try { fs.accessSync(p); return true; } catch { return false; } }
function log(name, ok){ console.log(`${ok?'OK':'MISSING'}  - ${name}`); }

log('app/downloads/page.tsx', has('app/downloads/page.tsx'));
log('TrackVitals mount in layout.tsx', (fs.readFileSync('app/layout.tsx','utf8').includes('TrackVitals')));
log('scripts/check-emdash.js (esm)', (fs.readFileSync('scripts/check-emdash.js','utf8').includes('import fs')));
log('learning hub list', has('app/learning-hub/page.tsx'));
log('learning hub slug', has('app/learning-hub/[slug]/page.tsx'));
log('lib/md.ts', has('lib/md.ts'));
log('packs-src/phase-1', has('packs-src/phase-1'));
log('packs-src/phase-2', has('packs-src/phase-2'));
log('public/packs/phase-1.zip', has('public/packs/phase-1.zip'));
log('public/packs/phase-2.zip', has('public/packs/phase-2.zip'));
log('scripts/sync-notion.mjs', has('scripts/sync-notion.mjs'));
log('docs/notion-mapping.md', has('docs/notion-mapping.md'));



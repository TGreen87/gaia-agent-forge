#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOTS = [process.cwd()];
const TARGET_EXT = new Set(['.css']);
const DISALLOWED = /(\@apply[^;]*\b(group|peer|container)\b[^;]*;)/g;

let violations = [];

function scan(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.git')) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      scan(full);
    } else if (TARGET_EXT.has(path.extname(e.name))) {
      const rel = path.relative(process.cwd(), full);
      const src = fs.readFileSync(full, 'utf8');
      let m;
      while ((m = DISALLOWED.exec(src)) !== null) {
        const before = src.slice(0, m.index);
        const line = before.split(/\r?\n/).length;
        violations.push({ file: rel, line, snippet: m[1] });
      }
    }
  }
}

for (const r of ROOTS) scan(r);

if (violations.length) {
  console.error(`Disallowed @apply usages found (group|peer|container): ${violations.length}`);
  for (const v of violations) {
    console.error(`- ${v.file}:${v.line}\n  ${v.snippet}`);
  }
  process.exit(1);
} else {
  console.log('check-apply: 0 violations');
}

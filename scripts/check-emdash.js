import fs from 'node:fs';
import path from 'node:path';

const EM = '\u2014';
const bad = [];

function scan(dir){
  for (const e of fs.readdirSync(dir)) {
    if (e.startsWith('.git')) continue;
    const p = path.join(dir, e);
    const st = fs.statSync(p);
    if (st.isDirectory()) scan(p);
    else {
      const t = fs.readFileSync(p, 'utf8');
      if (t.includes(EM)) bad.push(p);
    }
  }
}

scan(process.cwd());
if (bad.length) {
  console.error('Found em dashes in:');
  for (const f of bad) console.error(' - ' + f);
  process.exit(1);
} else {
  console.log('No em dashes found.');
}

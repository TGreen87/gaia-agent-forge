import fs from 'node:fs'; import path from 'node:path';
const bad=[];
const ch='\u2014'; // em dash
function scan(d){ for(const e of fs.readdirSync(d)){ if(e.startsWith('.git')) continue; const p=path.join(d,e); const st=fs.statSync(p); if(st.isDirectory()) scan(p); else { const t=fs.readFileSync(p,'utf8'); if(t.includes(ch)) bad.push(p); } } }
scan(process.cwd());
if(bad.length){ console.error('Found em dashes:'); bad.forEach(f=>console.error(' - '+f)); process.exit(1);} else { console.log('No em dashes found.'); }

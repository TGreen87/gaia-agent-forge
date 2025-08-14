import fs from 'node:fs';
const SITE=process.env.SITE_URL||'https://greenaiautomation.ai';
const routes=['/','/services','/why-gaia','/proof','/projects-and-demos','/wizard/pilot-plan','/about','/contact','/resources','/downloads/GAIA_Ai_Adoption_Playbook.html'];
const xml=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r=>`  <url><loc>${SITE}${r}</loc></url>`).join('\n')}
</urlset>`;
await fs.promises.mkdir('public',{recursive:true});
await fs.promises.writeFile('public/sitemap.xml',xml);
console.log('Wrote sitemap.xml');

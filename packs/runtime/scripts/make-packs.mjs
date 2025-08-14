import fs from 'node:fs'; import path from 'node:path'; import archiver from 'archiver';
async function zipDir(src,out){ await fs.promises.mkdir(path.dirname(out),{recursive:true}); return new Promise((res,rej)=>{ const outS=fs.createWriteStream(out); const ar=archiver('zip',{zlib:{level:9}}); outS.on('close',res); ar.on('error',rej); ar.pipe(outS); if(fs.existsSync(src)) ar.directory(src,false); ar.finalize(); }); }
await fs.promises.mkdir('public/packs',{recursive:true});
await zipDir('packs-src/phase-1','public/packs/phase-1.zip');
await zipDir('packs-src/phase-2','public/packs/phase-2.zip');
console.log('Packs zipped.');

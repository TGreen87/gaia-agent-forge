import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

async function zipDir(src, out) {
  await fs.promises.mkdir(path.dirname(out), { recursive: true });
  return new Promise((resolve, reject) => {
    const outputStream = fs.createWriteStream(out);
    const archive = archiver('zip', { zlib: { level: 9 } });

    outputStream.on('close', resolve);
    archive.on('error', reject);
    archive.pipe(outputStream);

    if (fs.existsSync(src)) {
      archive.directory(src, false);
    }

    archive.finalize();
  });
}

await fs.promises.mkdir('public/packs', { recursive: true });
await zipDir('packs-src/phase-1', 'public/packs/phase-1.zip');
await zipDir('packs-src/phase-2', 'public/packs/phase-2.zip');
console.log('Packs zipped.');



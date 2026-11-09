#!/usr/bin/env node
/* Seal binary files (audio) with the same password and salt as a sealed page,
   so the page can decrypt them with the key it already holds.

       node tools/seal-files.mjs <sealed.js> <pass-file> <out-dir> <file>...

   <sealed.js>  the page's sealed content, already written by tools/seal.mjs;
                its salt and iteration count are reused, so the key is the
                same one the page derives (or remembered) at unlock.
   <pass-file>  the password on its first line (under private/).
   <out-dir>    where the sealed copies go, published beside the page.
   <file>...    the plaintext files. Each becomes <out-dir>/<name>.bin:
                12 bytes of IV, then the AES-256-GCM ciphertext.

   Without the password the .bin files are noise, like sealed.js. Keep the
   plaintext under private/ or outside the repo. Re-run it after re-sealing
   with a new password, or the page will fail to open the files (it then
   falls back to the computer voice). */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import { webcrypto as crypto } from 'node:crypto';

const [sealedPath, passFile, outDir, ...files] = process.argv.slice(2);
if (!sealedPath || !passFile || !outDir || !files.length) {
  console.error('usage: node tools/seal-files.mjs <sealed.js> <pass-file> <out-dir> <file>...');
  process.exit(1);
}

const sealed = await readFile(sealedPath, 'utf8');
const salt = new Uint8Array(Buffer.from(sealed.match(/"salt":"([^"]+)"/)[1], 'base64'));
const iter = Number(sealed.match(/"iter":(\d+)/)[1]);
const pass = (await readFile(passFile, 'utf8')).split('\n')[0].trim();

const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: iter },
  base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);

await mkdir(outDir, { recursive: true });
for (const f of files) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, await readFile(f)));
  const out = join(outDir, basename(f, extname(f)) + '.bin');
  await writeFile(out, Buffer.concat([iv, data]));
  console.log(`sealed ${f} -> ${out}`);
}

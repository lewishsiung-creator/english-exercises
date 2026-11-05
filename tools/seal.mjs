#!/usr/bin/env node
/* Seal a page's content with a password, so a password-protected page can
   live in this public repo without its words being readable in it.

       node tools/seal.mjs <content.mjs> <sealed.js> [pass-file]

   <content.mjs>  the plaintext, `export default { ... }`. Keep it under
                  private/, which git ignores — it must never be committed.
   <sealed.js>    the output, `window.SEALED = { ... }`, which IS committed
                  and published. The page's renderer asks for the password,
                  derives the key in the browser and decrypts it there.
   [pass-file]    a file holding the password on its first line. Defaults to
                  `.pass` beside the content file (also under private/).

   The scheme is WebCrypto's own: PBKDF2-SHA-256 stretches the password into
   an AES-256-GCM key, and GCM refuses to decrypt anything with a wrong key or
   a changed byte, so a wrong password is detected rather than producing junk.

   The salt is kept from the previous sealed.js when there is one. A device
   that ticked 「記住這台裝置」 stores the derived key, not the password, and a
   new salt would derive a different key and lock it out after every content
   edit. A fresh IV is drawn every time, which is what GCM needs. Change the
   password and the remembered key simply stops working: the page asks again.

   This keeps the text out of the repo and away from anyone without the
   password. It is only as strong as the password: anyone can copy sealed.js
   and guess offline, so do not use a word from a dictionary. */

import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { webcrypto as crypto } from 'node:crypto';

const ITER = 310000;
const [src, out, passArg] = process.argv.slice(2);
if (!src || !out) {
  console.error('usage: node tools/seal.mjs <content.mjs> <sealed.js> [pass-file]');
  process.exit(1);
}

const passFile = passArg || join(dirname(src), '.pass');
const pass = (await readFile(passFile, 'utf8')).split('\n')[0].trim();
if (pass.length < 6) { console.error('password too short'); process.exit(1); }

const content = (await import(pathToFileURL(resolve(src)).href + '?t=' + Date.now())).default;
const plain = new TextEncoder().encode(JSON.stringify(content));

const b64 = (u8) => Buffer.from(u8).toString('base64');
const unb64 = (s) => new Uint8Array(Buffer.from(s, 'base64'));

let salt = crypto.getRandomValues(new Uint8Array(16));
if (existsSync(out)) {
  const m = (await readFile(out, 'utf8')).match(/"salt":"([^"]+)"/);
  if (m) salt = unb64(m[1]);
}
const iv = crypto.getRandomValues(new Uint8Array(12));

const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITER },
  base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
const data = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plain));

const sealed = { v: 1, iter: ITER, salt: b64(salt), iv: b64(iv), data: b64(data) };
await writeFile(out,
  '/* Sealed page content — written by tools/seal.mjs, do not edit by hand.\n' +
  '   The plaintext lives under private/ on Lewis\'s machine and is never committed. */\n' +
  'window.SEALED = ' + JSON.stringify(sealed) + ';\n');

console.log(`sealed ${plain.length} bytes -> ${out}`);

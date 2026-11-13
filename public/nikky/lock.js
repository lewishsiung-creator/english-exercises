/* The lock on Nikky's notebook.

   The notebook's words are not in this repo. They are encrypted in sealed.js
   (see tools/seal.mjs); the plaintext lives under private/, which git ignores.
   This file asks for the passcode, decrypts the content in the browser, and
   only then loads render.js — which is unchanged, and still expects a global
   `NOTEBOOK`. That is the whole reason the lock is a separate file rather than
   a change inside the renderer: the page behind the lock is byte for byte the
   page that was there before it, so a later session is added exactly as
   before and nothing about the notebook has to know it is sealed.

   PBKDF2 → AES-GCM, both from WebCrypto, which only exists on https or
   localhost — on plain http over a LAN address the lock cannot open at all,
   and says so rather than failing silently. GCM refuses to decrypt under the
   wrong key, so a wrong passcode is detected rather than producing junk.

   「記住這台裝置」 stores the derived key, never the passcode, under
   `nikky.key`. A re-seal keeps the salt, so a remembered device survives a new
   session being added; changing the passcode derives a different key and the
   page simply asks again.

   ONE GLOBAL SCOPE
   ----------------
   This file and render.js are both classic scripts, so their top-level `const`
   declarations share one scope. Both want the names `$`, `store` and `b64`,
   and a second `const $` is a SyntaxError that kills the whole of render.js —
   the lock opens, the notebook never draws, and the only sign is one line in
   the console. Everything here is therefore inside an IIFE, and the single
   thing deliberately handed over is `window.NOTEBOOK`. Keep it that way: a
   module would also fix it, but render.js expects to be a classic script.

   This protects the live page. It does not protect anything already published
   elsewhere, and it is only as strong as the passcode: sealed.js can be copied
   and guessed against offline, which is why the passcode is four random words
   rather than anything a person would choose. */

'use strict';

(() => {

const $ = (sel, root = document) => root.querySelector(sel);

const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const unb64 = (u8) => btoa(String.fromCharCode(...u8));

const store = {
  get(k, fallback = '') {
    try { const v = localStorage.getItem(`nikky.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`nikky.${k}`, v); } catch { /* private mode */ } },
  del(k) { try { localStorage.removeItem(`nikky.${k}`); } catch { /* private mode */ } },
};

async function keyFrom(pass) {
  const base = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', hash: 'SHA-256', salt: b64(SEALED.salt), iterations: SEALED.iter },
    base, { name: 'AES-GCM', length: 256 }, true, ['decrypt']);
}

async function openSealed(key) {
  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: b64(SEALED.iv) }, key, b64(SEALED.data));
  return JSON.parse(new TextDecoder().decode(plain));
}

/* Hand the content to the renderer the way content.js used to, then load the
   renderer itself. It is appended rather than left in the page so that nothing
   runs — and nothing is in the DOM to be read — before the passcode is right. */
function start(NOTEBOOK) {
  window.NOTEBOOK = NOTEBOOK;
  $('#lock').remove();
  document.body.classList.remove('locked');
  const s = document.createElement('script');
  s.src = 'render.js';
  document.body.appendChild(s);
}

async function tryRemembered() {
  const raw = store.get('key', '');
  if (!raw) return false;
  try {
    const key = await crypto.subtle.importKey('raw', b64(raw), 'AES-GCM', true, ['decrypt']);
    start(await openSealed(key));
    return true;
  } catch {
    store.del('key');      // the passcode changed since; ask again
    return false;
  }
}

$('#lockForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = $('#lockMsg');
  const btn = $('#unlockBtn');
  if (!window.crypto || !crypto.subtle) {
    msg.innerHTML = 'This browser cannot open the page. '
      + '<span>這個瀏覽器無法開啟此頁，請改用 Safari 或 Chrome。</span>';
    return;
  }
  btn.disabled = true;
  msg.textContent = '…';
  try {
    const key = await keyFrom($('#pw').value.trim());
    const NOTEBOOK = await openSealed(key);
    if ($('#remember').checked) {
      store.set('key', unb64(new Uint8Array(await crypto.subtle.exportKey('raw', key))));
    }
    start(NOTEBOOK);
  } catch {
    msg.innerHTML = 'That passcode did not open it. '
      + '<span>密碼不對，請再試一次。</span>';
    btn.disabled = false;
    $('#pw').select();
  }
});

tryRemembered();

})();

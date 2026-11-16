/* /chloe/ — a consultation, behind a password.

   The words of the page are NOT in this repo: they are encrypted in sealed.js
   (tools/seal.mjs) and the PDF in files/chloe-consultation.bin
   (tools/seal-files.mjs), both with the same password and salt. The plaintext
   lives in private/chloe/, which git ignores. Re-seal after any edit:

     node tools/seal.mjs private/chloe/content.mjs public/chloe/sealed.js
     node tools/seal-files.mjs public/chloe/sealed.js private/chloe/.pass public/chloe/files private/chloe/chloe-consultation.pdf

   The lock is the family-law meeting page's: PBKDF2 → AES-GCM from WebCrypto
   (https or localhost only). 「記住這台裝置」 stores the derived key, never the
   password, under `chloe.key`; 這台裝置上鎖 forgets it. A re-seal keeps the
   salt, so a remembered device survives content edits; a new password locks
   every device again. */

const $ = (s) => document.querySelector(s);
const KEYNAME = 'chloe.key';
const PDF = { bin: 'files/chloe-consultation.bin', name: 'Chloe英文家教諮詢整理_修訂版.pdf' };

const store = {
  get() { try { return localStorage.getItem(KEYNAME) || ''; } catch (e) { return ''; } },
  set(v) { try { localStorage.setItem(KEYNAME, v); } catch (e) { /* private mode */ } },
  del() { try { localStorage.removeItem(KEYNAME); } catch (e) { /* private mode */ } },
};

const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const unb64 = (u8) => btoa(String.fromCharCode(...u8));

async function keyFrom(pass) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', hash: 'SHA-256', salt: b64(SEALED.salt), iterations: SEALED.iter },
    base, { name: 'AES-GCM', length: 256 }, true, ['decrypt']);
}

let KEY = null; // kept after unlock: the PDF is sealed with it too

async function open(key) {
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(SEALED.iv) }, key, b64(SEALED.data));
  KEY = key;
  return JSON.parse(new TextDecoder().decode(plain));
}

async function tryRemembered() {
  const raw = store.get();
  if (!raw) return null;
  try {
    const key = await crypto.subtle.importKey('raw', b64(raw), 'AES-GCM', true, ['decrypt']);
    return await open(key);
  } catch (e) {
    store.del(); // the password changed since; ask again
    return null;
  }
}

function start(C) {
  document.title = C.title + '｜諮詢整理';
  $('#doc').innerHTML = C.html;
  $('#lock').hidden = true;
  $('#doc').hidden = false;
  $('#toolbar').hidden = false;
  document.body.classList.remove('locked');
  window.scrollTo(0, 0);
}

$('#lockForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = $('#lockMsg');
  const btn = $('#unlockBtn');
  if (!window.crypto || !crypto.subtle) { msg.textContent = '這個瀏覽器無法開啟此頁，請換 Safari 或 Chrome。'; return; }
  btn.disabled = true;
  msg.textContent = '開啟中…';
  try {
    const key = await keyFrom($('#pw').value.trim());
    const C = await open(key);
    if ($('#remember').checked) store.set(unb64(new Uint8Array(await crypto.subtle.exportKey('raw', key))));
    $('#pw').value = '';
    msg.textContent = '';
    start(C);
  } catch (err) {
    msg.textContent = '密碼不對，請再試一次。';
    btn.disabled = false;
    $('#pw').select();
  }
});

$('#pdfBtn').addEventListener('click', async () => {
  const btn = $('#pdfBtn');
  const label = btn.textContent;
  btn.disabled = true;
  btn.textContent = '準備中…';
  try {
    const r = await fetch(PDF.bin);
    if (!r.ok) throw new Error(r.status);
    const u8 = new Uint8Array(await r.arrayBuffer());
    const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: u8.slice(0, 12) }, KEY, u8.slice(12));
    const url = URL.createObjectURL(new Blob([plain], { type: 'application/pdf' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: PDF.name });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60e3);
  } catch (e) {
    alert('PDF 沒有打開，請重新整理後再試一次。');
  }
  btn.disabled = false;
  btn.textContent = label;
});

$('#lockNow').addEventListener('click', () => {
  store.del();
  location.reload();
});

tryRemembered().then((C) => { if (C) start(C); else $('#pw').focus(); });

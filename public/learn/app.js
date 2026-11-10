/* The 英文學習 family as an app (2026-11-08): registers ../sw.js for this
   page's folder, so the six pages open offline once they have been opened
   online, and hands the worker the files this page used so even the first
   visit is kept. Loaded with defer on all six pages. The home-screen icon,
   name and manifest are <link>s in each page's <head>; the 加到主畫面 card is
   on /learn/ (learn.js). */
(function () {
  if (!('serviceWorker' in navigator) || !document.currentScript) return;
  const root = new URL('../', document.currentScript.src).href;           // the site root, on either host
  const scope = ['learn/', 'reading/'].map((s) => root + s).find((s) => location.href.startsWith(s));
  if (!scope) return;
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register(root + 'sw.js', { scope });
      const reg = await navigator.serviceWorker.ready;
      const urls = [location.href.split('#')[0]].concat(
        performance.getEntriesByType('resource').map((r) => r.name).filter((u) => u.startsWith(root)));
      if (reg.active) reg.active.postMessage({ cache: [...new Set(urls)] });
    } catch (e) { /* no worker: the pages simply need a connection, as before */ }
  });
})();

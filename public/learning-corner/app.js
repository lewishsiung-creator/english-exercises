/* Learning Corner — the one thing this page needs a script for.

   The picture-book page is private: a link-shared page of copyrighted books,
   for the family only. This repo is public, so its address must never be
   written here. Instead the family's link to this page carries it:

       …/lc/#<the id at the end of the book page's link>

   (/lc/ is a short address that forwards here and keeps the #. The first
   links handed out were …/learning-corner/#books=<id>; that form still
   works and always must.)

   Whatever follows # is never sent to the server and appears in no log. The
   id is also remembered on that device (localStorage), so the door stays
   after a reload or a visit by the plain address. Opened anywhere else, the
   page shows the other doors and nothing says a third exists.

   To make a device forget it:   …/lc/#off

   The id is checked against a strict pattern and only ever appended to one
   fixed address, so a made-up link cannot point the door somewhere else. */

(function () {
  'use strict';

  /* Opening this page at all marks the device as the family's, which is what
     lets /math/ and /museum-trip/ show their way back here (see home.js).
     Other children are handed those pages directly and never come through
     this one, so they never see that button. */
  try { localStorage.setItem('corner.home', '1'); } catch (e) { /* no storage, no button */ }

  var KEY = 'corner.books';
  var BASE = 'https://claude.ai/artifact/';
  var OK = /^[A-Za-z0-9_-]{8,64}$/;
  var door = document.getElementById('booksDoor');
  if (!door) return;

  /* Storage can be missing or refuse (private windows, blocked site data).
     The page must still work: with the link it came from, the door shows. */
  function remembered() {
    try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; }
  }
  function remember(id) {
    try {
      if (id) localStorage.setItem(KEY, id);
      else localStorage.removeItem(KEY);
    } catch (e) { /* nothing to do */ }
  }

  /* Two spellings: the bare #<id> (and #off), and the older #books=<id>. */
  function fromLink() {
    var h = location.hash;
    var m = /(?:^#|&)books=([^&]*)/.exec(h);
    if (m) return m[1];
    var bare = h.slice(1);
    return (bare === 'off' || OK.test(bare)) ? bare : null;
  }

  function show() {
    var given = fromLink();
    var id = '';

    if (given === 'off') {
      remember('');
    } else if (given !== null && OK.test(given)) {
      id = given;
      remember(id);
    } else {
      id = remembered();
      if (!OK.test(id)) id = '';
    }

    if (id) {
      door.href = BASE + id;
      door.hidden = false;
    } else {
      door.removeAttribute('href');
      door.hidden = true;
    }
  }

  show();
  window.addEventListener('hashchange', show);
})();

/* Health notes — renderer.
   ============================================================
   Reads SITE and TOPICS from content.js and builds the page. Nothing here
   knows anything about health; add content in content.js, not here.

   Three reading modes, chosen from the top bar and remembered per device:

     both   Chinese and English together   (default)
     zh     Chinese only
     en     English only

   The mode is a class on <body> — `lang-both` / `lang-zh` / `lang-en` — and
   the CSS does the hiding. Both halves of every pair are always in the DOM,
   so switching mode is instant and Ctrl-F still finds either language.

   NOTE on scrolling: the contents list is kept in view by adjusting its own
   scrollTop, never by scrollIntoView(). scrollIntoView scrolls the nearest
   scrollable ancestor — which is the document whenever the list itself is not
   overflowing — and firing that on every scroll event makes the whole page
   drift. There is deliberately no `scroll-behavior: smooth` on the root.
   ============================================================ */

(function () {
  'use strict';

  var LANG_KEY = 'health.lang';
  var MODES = ['both', 'zh', 'en'];

  /* ---------- small helpers ---------- */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* A bilingual pair. Always emits both languages; the CSS shows what the
     current mode asks for. `tag` lets a pair be a <p>, an <li>, a <td>… */
  function pair(obj, tag, cls) {
    var frag = document.createDocumentFragment();
    var base = cls ? cls + ' ' : '';
    frag.appendChild(el(tag || 'p', base + 'zh', obj.zh || ''));
    frag.appendChild(el(tag || 'p', base + 'en', obj.en || ''));
    return frag;
  }

  /* One box holding both languages — used where a pair needs a shared border
     (callouts, notes, quotes) rather than two separate blocks. */
  function pairBox(obj, boxCls, innerTag) {
    var box = el('div', boxCls);
    box.appendChild(pair(obj, innerTag || 'p'));
    return box;
  }

  /* ---------- block renderers ---------- */

  var BLOCKS = {

    p: function (b) { return pair(b, 'p', 'para'); },

    lead: function (b) { return pair(b, 'p', 'lead'); },

    list: function (b) {
      var ul = el('ul', 'list');
      (b.items || []).forEach(function (item) {
        var li = el('li');
        li.appendChild(pair(item, 'span', 'line'));
        ul.appendChild(li);
      });
      return ul;
    },

    key: function (b) { return pairBox(b, 'key'); },

    note: function (b) {
      var box = el('div', 'note');
      var head = el('p', 'note-head');
      head.appendChild(el('span', 'zh', '對精神與體力的意義'));
      head.appendChild(el('span', 'en', 'What this means for your energy'));
      box.appendChild(head);
      box.appendChild(pair(b, 'p'));
      return box;
    },

    quote: function (b) { return pairBox(b, 'quote'); },

    /* A -> B -> C, as chips. `zh` is optional; without it the same chips are
       used for both languages. */
    flow: function (b) {
      var wrap = el('div', 'flow');
      wrap.appendChild(chain(b.zh && b.zh.length ? b.zh : b.items, 'zh'));
      wrap.appendChild(chain(b.items, 'en'));
      return wrap;

      function chain(items, cls) {
        var row = el('div', 'flow-row ' + cls);
        (items || []).forEach(function (t, i) {
          if (i) {
            var arrow = el('span', 'flow-arrow', '→');
            arrow.setAttribute('aria-hidden', 'true');
            row.appendChild(arrow);
          }
          row.appendChild(el('span', 'chip', t));
        });
        return row;
      }
    },

    /* "Not this question — this one." */
    contrast: function (b) {
      var wrap = el('div', 'contrast');

      var bad = el('div', 'contrast-side is-bad');
      bad.appendChild(label('Rather than asking', '不要只問'));
      bad.appendChild(pair({ en: b.badEn, zh: b.badZh }, 'p', 'contrast-q'));

      var good = el('div', 'contrast-side is-good');
      good.appendChild(label('Ask', '而是問'));
      good.appendChild(pair({ en: b.goodEn, zh: b.goodZh }, 'p', 'contrast-q'));

      wrap.appendChild(bad);
      wrap.appendChild(good);
      return wrap;

      function label(en, zh) {
        var p = el('p', 'contrast-label');
        p.appendChild(el('span', 'zh', zh));
        p.appendChild(el('span', 'en', en));
        return p;
      }
    },

    table: function (b) {
      var scroll = el('div', 'table-scroll');
      var t = el('table', 'grid');

      var thead = el('thead');
      var hr = el('tr');
      (b.head || []).forEach(function (h) {
        var th = el('th');
        th.appendChild(pair(h, 'span', 'line'));
        hr.appendChild(th);
      });
      thead.appendChild(hr);
      t.appendChild(thead);

      var tbody = el('tbody');
      (b.rows || []).forEach(function (row) {
        var tr = el('tr');
        row.forEach(function (cell, i) {
          var td = el('td', i === 0 ? 'cell-key' : null);
          td.appendChild(pair(cell, 'span', 'line'));
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      t.appendChild(tbody);

      scroll.appendChild(t);
      return scroll;
    },

    cards: function (b) {
      var wrap = el('div', 'cards');
      (b.items || []).forEach(function (item) {
        var card = el('div', 'card');
        card.appendChild(el('p', 'card-label', item.label));
        card.appendChild(pair(item.title, 'p', 'card-title'));
        card.appendChild(pair(item.body, 'p', 'card-body'));
        card.appendChild(pair(item.foot, 'p', 'card-foot'));
        wrap.appendChild(card);
      });
      return wrap;
    },
  };

  /* ---------- page build ---------- */

  function buildDoc(doc) {
    TOPICS.forEach(function (topic) {
      var art = el('article', 'topic');
      art.id = topic.id;

      var head = el('header', 'topic-head');
      head.appendChild(pair(topic.title, 'h2', 'topic-title'));
      if (topic.lead) head.appendChild(pair(topic.lead, 'p', 'topic-lead'));
      if (topic.updated) head.appendChild(el('p', 'topic-date', topic.updated));
      art.appendChild(head);

      (topic.sections || []).forEach(function (sec) {
        art.appendChild(buildSection(topic, sec));
      });

      doc.appendChild(art);
    });
  }

  function buildSection(topic, sec) {
    var s = el('section', 'sec');
    s.id = topic.id + '-' + sec.id;

    var h = el('h3', 'sec-title');
    if (sec.num != null) h.appendChild(el('span', 'sec-num', sec.num));
    var names = el('span', 'sec-names');
    names.appendChild(el('span', 'zh', sec.title.zh));
    names.appendChild(el('span', 'en', sec.title.en));
    h.appendChild(names);
    s.appendChild(h);

    (sec.blocks || []).forEach(function (b) {
      var fn = BLOCKS[b.type];
      if (fn) s.appendChild(fn(b));
    });

    return s;
  }

  function buildToc(nav) {
    var wrap = el('nav', 'toc');
    wrap.setAttribute('aria-label', 'Contents');

    TOPICS.forEach(function (topic) {
      var h = el('p', 'toc-topic');
      h.appendChild(el('span', 'zh', topic.title.zh));
      h.appendChild(el('span', 'en', topic.title.en));
      wrap.appendChild(h);

      var ul = el('ul', 'toc-list');
      (topic.sections || []).forEach(function (sec) {
        var li = el('li');
        var a = el('a');
        a.href = '#' + topic.id + '-' + sec.id;
        if (sec.num != null) a.appendChild(el('span', 'toc-num', sec.num));
        var names = el('span', 'toc-names');
        names.appendChild(el('span', 'zh', sec.title.zh));
        names.appendChild(el('span', 'en', sec.title.en));
        a.appendChild(names);
        li.appendChild(a);
        ul.appendChild(li);
      });
      wrap.appendChild(ul);
    });

    nav.appendChild(wrap);
    return wrap;
  }

  /* ---------- language mode ---------- */

  function setMode(mode) {
    if (MODES.indexOf(mode) < 0) mode = 'both';
    MODES.forEach(function (m) {
      document.body.classList.toggle('lang-' + m, m === mode);
    });
    /* Chinese leads in both-languages mode, so the document is Chinese
       unless the reader has asked for English only. Every individual line
       carries its own lang (see tagLangs), so a screen reader still switches
       voice correctly on the other language. */
    document.documentElement.lang = (mode === 'en') ? 'en' : 'zh-Hant';
    Array.prototype.forEach.call(
      document.querySelectorAll('.lang-btn'),
      function (btn) {
        btn.setAttribute('aria-pressed', String(btn.dataset.lang === mode));
      }
    );
    try { localStorage.setItem(LANG_KEY, mode); } catch (e) { /* private mode */ }
  }

  function initLang() {
    var saved = 'both';
    try { saved = localStorage.getItem(LANG_KEY) || 'both'; } catch (e) { /* ignore */ }
    Array.prototype.forEach.call(
      document.querySelectorAll('.lang-btn'),
      function (btn) {
        btn.addEventListener('click', function () { setMode(btn.dataset.lang); });
      }
    );
    setMode(saved);
  }

  /* ---------- contents: mobile drawer + active link ---------- */

  function initNav(tocWrap) {
    var shell  = document.querySelector('.shell');
    var toggle = document.getElementById('navToggle');
    var scrim  = document.querySelector('.nav-scrim');

    function close() {
      shell.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      scrim.hidden = true;
    }
    function open() {
      shell.classList.add('nav-open');
      toggle.setAttribute('aria-expanded', 'true');
      scrim.hidden = false;
    }

    toggle.addEventListener('click', function () {
      if (shell.classList.contains('nav-open')) close(); else open();
    });
    scrim.addEventListener('click', close);
    tocWrap.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    initActiveLink(tocWrap);
  }

  function initActiveLink(tocWrap) {
    var links = Array.prototype.slice.call(tocWrap.querySelectorAll('a'));
    if (!links.length) return;

    var targets = links.map(function (a) {
      return document.getElementById(decodeURIComponent(a.hash.slice(1)));
    });
    var current = null;

    function mark() {
      var top = (parseInt(getComputedStyle(document.documentElement)
                  .getPropertyValue('--bar-h'), 10) || 52) + 24;
      var best = 0;
      for (var i = 0; i < targets.length; i++) {
        if (targets[i] && targets[i].getBoundingClientRect().top <= top) best = i;
      }
      if (best === current) return;
      if (current !== null) links[current].classList.remove('is-here');
      current = best;
      links[best].classList.add('is-here');
      keepLinkVisible(links[best]);
    }

    /* Scroll the contents column itself — never the document. Uses rect
       deltas rather than offsetTop so sticky positioning cannot skew it. */
    function keepLinkVisible(a) {
      var box = tocWrap.parentElement;
      if (!box || box.scrollHeight <= box.clientHeight + 1) return;
      var r = a.getBoundingClientRect();
      var b = box.getBoundingClientRect();
      if (r.top < b.top + 8)          box.scrollTop += r.top - b.top - 8;
      else if (r.bottom > b.bottom - 8) box.scrollTop += r.bottom - b.bottom + 8;
    }

    /* Coalesce scroll events into one frame. `raf` holds the pending id
       rather than a boolean: a frame requested just before the tab is hidden
       never runs, and a plain "ticking" flag would then stay set and kill
       highlighting for the rest of the visit. Cancelling and re-marking when
       the tab comes back keeps it honest. */
    var raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(function () { raf = 0; mark(); });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    document.addEventListener('visibilitychange', function () {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      if (!document.hidden) mark();
    });
    mark();
  }

  /* Mark each half of every pair with its own language, so assistive
     technology reads the English in an English voice and the Chinese in a
     Chinese one.

     Some pairs are the same string on both sides — a term that stays in
     English inside the Chinese line ("Light Sleep ≠ Bad Sleep", "VO₂ Max",
     the 0.94s/1.07s chips). Printing those twice in 雙語 mode just looks like
     a mistake, so the English half is flagged `is-dup` and the CSS drops it
     in that mode only. It stays in the DOM, because English-only mode still
     needs it.

     Runs once, after the document is built. */
  function tagLangs() {
    Array.prototype.forEach.call(document.querySelectorAll('.zh'), function (n) {
      n.lang = 'zh-Hant';
    });
    Array.prototype.forEach.call(document.querySelectorAll('.en'), function (n) {
      n.lang = 'en';
      var zh = n.previousElementSibling;
      if (zh && zh.classList.contains('zh') && same(zh, n)) n.classList.add('is-dup');
    });

    function same(a, b) { return norm(a) === norm(b); }
    function norm(n) { return n.textContent.replace(/\s+/g, ' ').trim(); }
  }

  /* ---------- go ---------- */

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('siteTitle').textContent = SITE.title;
    document.getElementById('siteTitleZh').textContent = SITE.titleZh;

    var hero = document.getElementById('hero');
    hero.appendChild(pair(SITE.tagline, 'p', 'hero-lead'));

    buildDoc(document.getElementById('doc'));
    var tocWrap = buildToc(document.getElementById('nav'));

    tagLangs();
    initLang();
    initNav(tocWrap);
  });

})();

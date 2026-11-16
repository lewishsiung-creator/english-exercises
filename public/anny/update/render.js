/* 一份簡報的放映器。

   這一頁上線的每一個字和每一張圖都是密文：文字在 sealed.js，圖在 v3/*.bin 和
   img/*.bin。密碼經 PBKDF2-SHA-256 伸展成 AES-256-GCM 的金鑰，在瀏覽器裡解密；
   密碼不對 GCM 直接拒絕，不會解出半套垃圾。沒有密碼的人把整個目錄抓走也只是
   一堆亂碼——這是這份材料可以放在公開 repo 的唯一理由。
   「記住這台裝置」存的是推導出來的金鑰，不是密碼。

   圖片解完之後是 blob: 網址，所以頁面上沒有任何一個可以直接抓的圖檔網址。

   這個檔案刻意不寫這份簡報是誰的、關於什麼：它是整頁唯一沒有加密的部分，
   註解裡多一個名字，就等於替猜密碼的人標好了目標。

   原本這一頁掛著兩份投影片，一顆按鈕來回切。方向定了之後對照就沒有用了，
   2026-11-16 把舊的那一份拿掉，只留這一份。 */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function text(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// ------------------------------------------------------------------- 鎖

const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem('acu.' + k);
      if (v == null) return d;
      try { return JSON.parse(v); } catch (e) { return v; }
    } catch (e) { return d; }
  },
  set(k, v) { try { localStorage.setItem('acu.' + k, JSON.stringify(v)); } catch (e) { /* 無痕模式 */ } },
  del(k) { try { localStorage.removeItem('acu.' + k); } catch (e) { /* 無痕模式 */ } },
};

const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const unb64 = (u8) => btoa(String.fromCharCode(...u8));

async function keyFrom(pass) {
  const base = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', hash: 'SHA-256', salt: b64(SEALED.salt), iterations: SEALED.iter },
    base, { name: 'AES-GCM', length: 256 }, true, ['decrypt']);
}

let KEY = null;            // 開啟之後留著：圖片是用同一把金鑰封的

async function openSealed(key) {
  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: b64(SEALED.iv) }, key, b64(SEALED.data));
  KEY = key;
  return JSON.parse(new TextDecoder().decode(plain));
}

async function tryRemembered() {
  const raw = store.get('key', '');
  if (!raw) return null;
  try {
    const key = await crypto.subtle.importKey('raw', b64(raw), 'AES-GCM', true, ['decrypt']);
    return await openSealed(key);
  } catch (e) {
    store.del('key');      // 密碼換過了，再問一次
    return null;
  }
}

$('#lockForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = $('#lockMsg');
  const btn = $('#unlockBtn');
  if (!window.crypto || !crypto.subtle) {
    msg.textContent = '這個瀏覽器無法開啟此頁，請改用 Safari 或 Chrome。';
    return;
  }
  btn.disabled = true;
  msg.textContent = '解密中…';
  try {
    const key = await keyFrom($('#pw').value.trim());
    const C = await openSealed(key);
    if ($('#remember').checked) {
      store.set('key', unb64(new Uint8Array(await crypto.subtle.exportKey('raw', key))));
    }
    await start(C, msg);
  } catch (err) {
    msg.textContent = '密碼不對，請再試一次。';
    btn.disabled = false;
    $('#pw').select();
  }
});

$('#lockBtn').addEventListener('click', () => {
  store.del('key');
  location.reload();
});

// ------------------------------------------------------------------- 圖片

/* 每一張圖都是 12 bytes 的 IV 加上密文。解完變成 blob: 網址，頁面上因此沒有
   任何一個可以直接抓走的圖檔。 */
const IMG = {};
const binOf = (p) => p.replace(/\.(jpg|jpeg|png)$/i, '.bin');

async function openImages(paths, say) {
  let done = 0;
  await Promise.all(paths.map(async (p) => {
    try {
      const r = await fetch(binOf(p));
      if (!r.ok) throw new Error(r.status);
      const u8 = new Uint8Array(await r.arrayBuffer());
      const plain = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: u8.slice(0, 12) }, KEY, u8.slice(12));
      IMG[p] = URL.createObjectURL(new Blob([plain], { type: 'image/jpeg' }));
    } catch (e) {
      console.error('could not open', p, e);
    }
    done += 1;
    if (say) say.textContent = `解密中…　${done} / ${paths.length}`;
  }));
}

const src = (p) => IMG[p] || '';

// ------------------------------------------------------------------- 畫法

/* 一個 type 一種畫法。沒有畫法的 type 會在畫面上說出來——一張默默消失的
   投影片，是上台前不會發現的那種錯。 */
/* 條列。沒有項目符號，用一條短線起頭——投影片上的小圓點是簡報軟體的習慣，
   不是閱讀的需要。 */
function bullets(items) {
  return `<ul class="z-ul">${items.map((i) => `<li>${text(i)}</li>`).join('')}</ul>`;
}

const TYPES = {

  cover: (s) => `
    <div class="z z-cover">
      ${motif()}
      <p class="z-kicker">${text(s.kicker)}</p>
      <h1 class="z-h1">${text(s.title)}</h1>
      <div class="z-meta">${s.meta.map((m) => `<p>${text(m)}</p>`).join('')}</div>
    </div>`,

  statement: (s) => `
    <div class="z z-statement t-${text(s.tone || 'light')}">
      ${s.tone === 'blue' ? motif() : ''}
      <h2>${s.lines.map((l) => `<span>${text(l)}</span>`).join('')}</h2>
      ${s.sub ? `<p class="z-sub">${text(s.sub)}</p>` : ''}
    </div>`,

  kpis: (s) => `
    <div class="z z-kpis">
      <p class="z-head">${text(s.head)}</p>
      <div class="z-row">
        ${s.items.map((i) => `
          <div class="z-kpi">
            <p class="z-kpi-v tone-${text(i.tone)}">${i.v}<i>%</i></p>
            <p class="z-kpi-k">${text(i.k)}</p>
          </div>`).join('')}
      </div>
    </div>`,

  chart: (s) => `
    <div class="z z-chart">
      <div class="z-chart-head">
        <p class="z-big">${text(s.big)}</p>
        <p class="z-sub">${text(s.sub)}</p>
        ${s.stats ? `<div class="z-stats">${s.stats.map((t) => `
          <div class="z-stat">
            <p class="z-stat-v">${text(t.v)}</p>
            <p class="z-stat-k">${text(t.k)}</p>
          </div>`).join('')}</div>` : ''}
      </div>
      ${bars(s.chart)}
    </div>`,

  trio: (s) => `
    <div class="z z-trio t-${text(s.tone || 'light')}">
      <p class="z-head">${text(s.head)}</p>
      <div class="z-row">
        ${s.items.map((i) => `
          <div class="z-cell">
            <p class="z-cell-v">${text(i.v)}</p>
            <p class="z-cell-k">${text(i.k)}</p>
            ${i.sub ? `<p class="z-cell-s">${text(i.sub)}</p>` : ''}
          </div>`).join('')}
      </div>
      ${s.foot ? `<p class="z-foot">${text(s.foot)}</p>` : ''}
    </div>`,

  duo: (s) => `
    <div class="z z-trio z-duo">
      <p class="z-head">${text(s.head)}</p>
      <div class="z-row">
        ${s.items.map((i) => `
          <div class="z-cell">
            <p class="z-cell-v tone-red">${text(i.v)}</p>
            <p class="z-cell-k">${text(i.k)}</p>
            <p class="z-cell-s">${text(i.sub)}</p>
          </div>`).join('')}
      </div>
      ${s.foot ? `<p class="z-foot">${text(s.foot)}</p>` : ''}
    </div>`,

  photo: (s) => `
    <div class="z z-photo" style="background-image:url('${src(s.img)}')">
      <div class="z-scrim"></div>
      <div class="z-over">
        <p class="z-big">${text(s.overlay.big)}</p>
        <p class="z-sub">${text(s.overlay.sub)}</p>
      </div>
    </div>`,

  full: (s) => `<div class="z z-full"><img src="${src(s.img)}" alt=""></div>`,

  photos: (s) => `
    <div class="z z-photos">
      <p class="z-head">${text(s.head)}</p>
      <div class="z-wall">
        ${s.items.map((i) => `
          <figure style="background-image:url('${src(i.img)}')">
            <figcaption>${text(i.k)}</figcaption>
          </figure>`).join('')}
      </div>
    </div>`,

  arrow: (s) => `
    <div class="z z-arrow">
      <p class="z-head">${text(s.head)}</p>
      <div class="z-row">
        <div class="z-cell">
          <p class="z-cell-v muted">${text(s.from)}</p>
          <p class="z-cell-k">${text(s.fromLabel)}</p>
        </div>
        <svg class="z-ar" viewBox="0 0 24 24" aria-hidden="true"><path
          d="M3 12h16M13 6l6 6-6 6" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <div class="z-cell">
          <p class="z-cell-v">${text(s.to)}</p>
          <p class="z-cell-k">${text(s.toLabel)}</p>
        </div>
      </div>
      ${s.foot ? `<p class="z-foot">${text(s.foot)}</p>` : ''}
    </div>`,

  /* 開場。原本是一張 AI 做的視覺，現在是一句話加一格排程表。
     這一頁的工作不是吸睛，是讓台下在三秒內知道「她管的是什麼、卡在哪」——
     被鎖住的時段是灰的，打開的是藍的，一眼就看得出哪一種比較少。
     那個道士的笑話沒有不見，它回到她嘴裡：乾淨的畫面配一句自嘲，
     比畫面自己在耍寶更顯得游刃有餘。 */
  slots: (s) => {
    const open = new Set(s.open);
    const n = s.cols * s.rows;
    const cells = Array.from({ length: n }, (_, i) =>
      `<i class="${open.has(i) ? 'on' : ''}"></i>`).join('');
    return `
      <div class="z z-slots">
        <p class="z-eyebrow">${text(s.eyebrow)}</p>
        <div class="z-slots-row">
          <h2>${s.lines.map((l) => `<span>${text(l)}</span>`).join('')}</h2>
          <div class="z-grid" style="--cols:${s.cols}" aria-hidden="true">${cells}</div>
        </div>
        ${s.foot ? `<p class="z-foot">${text(s.foot)}</p>` : ''}
      </div>`;
  },

  /* 收尾。一樣是「一起往前走」，但走的方向用一條線畫出來，不用日出。
     最後一個點是空心的，因為 2027 還沒發生——留白比箭頭有說服力。 */
  path: (s) => {
    /* pad 從 70 放寬到 115：2027 那一點原本幾乎貼在右緣，沒有呼吸。 */
    const W = 1000, H = 220, pad = 115;
    const step = (W - pad * 2) / (s.marks.length - 1);
    const y = (i) => H - 30 - i * ((H - 90) / (s.marks.length - 1));
    const pts = s.marks.map((m, i) => [pad + i * step, y(i)]);
    const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]} ${p[1]}`).join(' ');
    return `
      <div class="z z-path">
        <div class="z-path-head">
          <h2>${text(s.big)}</h2>
          <p class="z-sub">${text(s.sub)}</p>
        </div>
        <svg class="z-line" viewBox="0 0 ${W} ${H}" aria-hidden="true">
          <path d="${d}" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round" opacity=".45"/>
          ${pts.map((p, i) => {
            const last = i === s.marks.length - 1;
            const m = s.marks[i];
            return `
              <circle cx="${p[0]}" cy="${p[1]}" r="${last ? 11 : 8}"
                      fill="${last ? 'none' : 'currentColor'}"
                      stroke="currentColor" stroke-width="2.5"
                      opacity="${i === 0 ? '.45' : '1'}"/>
              <text class="pt-k" x="${p[0]}" y="${p[1] - 26}" text-anchor="middle"
                    opacity="${i === 0 ? '.55' : '1'}">${text(m.k)}</text>
              ${m.s ? `<text class="pt-s" x="${p[0]}" y="${p[1] + (i && !last ? 54 : 34)}" text-anchor="middle"
                    opacity="${i === 0 ? '.55' : '.8'}">${text(m.s)}</text>` : ''}`;
          }).join('')}
        </svg>
        ${s.foot ? `<p class="z-foot">${text(s.foot)}</p>` : ''}
      </div>
    `;
  },

  /* 四個 KPI 平行擺，看起來像「有一項搞砸了」；畫成鏈條，看到的是
     「瓶頸在第二段」。stop 標的那一節就是今天要講的地方。 */
  chain: (s) => `
    <div class="z z-chain">
      <p class="z-head">${text(s.head)}</p>
      <div class="z-links">
        ${s.links.map((l, i) => `
          ${i ? '<svg class="z-link-ar" viewBox="0 0 32 24" aria-hidden="true"><path d="M2 12h25M20 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}
          <div class="z-link${l.stop ? ' stop' : ''}">
            ${l.stop ? '<p class="z-stop">瓶頸</p>' : ''}
            <p class="z-link-v tone-${text(l.tone)}">${text(l.v)}</p>
            <p class="z-link-k">${text(l.k)}</p>
            <p class="z-link-s">${text(l.s)}</p>
          </div>`).join('')}
      </div>
      ${s.foot ? `<p class="z-foot">${text(s.foot)}</p>` : ''}
    </div>`,

  /* 醫師分層。整條是 Q3 的 456 位，每一段照人數分寬度——所以 dabbler 那一段
     會長得很誇張，那正是要說的事：池子很大，我們只要從裡面轉 15 位。 */
  pool: (s) => {
    const sum = s.tiers.reduce((a, t) => a + t.n, 0);
    const mv = s.move;
    return `
      <div class="z z-pool">
        <p class="z-head">${text(s.head)}</p>
        <div class="z-bar">
          ${s.tiers.map((t, i) => `
            <div class="z-seg seg-${text(t.tone)}" style="flex:${t.n}">
              ${i === mv.from ? `<span class="z-move" style="width:${(mv.n / t.n) * 100}%">${mv.n}</span>` : ''}
              <b>${t.n}</b>
            </div>`).join('')}
        </div>
        <div class="z-tiers">
          ${s.tiers.map((t) => `
            <div class="z-tier" style="flex:${t.n}">
              <p class="z-tier-k">${text(t.k)}</p>
              <p class="z-tier-s">${text(t.s)}</p>
            </div>`).join('')}
        </div>
        ${s.foot ? `<p class="z-foot">${text(s.foot)}</p>` : ''}
      </div>`;
  },

  /* 亞洲排名。名次自己就是訊息，所以名次最大，名字其次。 */
  rank: (s) => `
    <div class="z z-rank">
      <p class="z-head">${text(s.head)}</p>
      <ol>
        ${s.items.map((i) => `
          <li${i.star ? ' class="star"' : ''}>
            <p class="z-rank-r">${text(i.r)}</p>
            <div>
              <p class="z-rank-k">${text(i.k)}</p>
              <p class="z-rank-s">${text(i.s)}</p>
            </div>
          </li>`).join('')}
      </ol>
      ${s.foot ? `<p class="z-foot">${text(s.foot)}</p>` : ''}
    </div>`,

  /* 每一區自己的一張：缺口、要轉幾位、在哪幾家醫院做什麼。
     todo 的那一區整張打上待補，因為少一個區，台下第一個問的就是它。 */
  region: (s) => `
    <div class="z z-region${s.todo ? ' todo' : ''}">
      <div class="z-region-top">
        <div>
          <p class="z-cs">${text(s.cs)}</p>
          <p class="z-region-h">${text(s.head)}</p>
        </div>
        <div class="z-region-nums">
          <div>
            <p class="z-gap${s.gapK ? ' up' : ''}">${text(s.gap)}</p>
            <p class="z-gap-k">${text(s.gapK || 'Bubble+ 缺口')}</p>
          </div>
          <div>
            <p class="z-region-v">${text(s.now)} <i>/ ${text(s.quota)}</i></p>
            <p class="z-gap-k">現況 / 目標</p>
          </div>
          <div>
            <p class="z-region-v">${text(s.util.from)} <i>→ ${text(s.util.to)}</i></p>
            <p class="z-gap-k">使用率</p>
          </div>
        </div>
      </div>
      <p class="z-need">${text(s.need)}</p>
      <div class="z-region-cols">
        <div>
          <p class="z-col-h">卡在哪</p>
          ${bullets(s.why)}
        </div>
        <div>
          <p class="z-col-h blue">Q4 要做的</p>
          ${bullets(s.how)}
        </div>
      </div>
      ${fill(s.own)}
    </div>`,

  asks: (s) => `
    <div class="z z-asks">
      ${s.motif ? motif(9, 6, 'light') : ''}
      <p class="z-head">${text(s.head)}</p>
      <ol>
        ${s.items.map((i) => `
          <li>
            <p class="z-ask-k">${text(i.k)}</p>
            <p class="z-ask-v">${text(i.v)}</p>
          </li>`).join('')}
      </ol>
      ${s.draft ? '<p class="z-draft">草稿，待確認</p>' : ''}
    </div>`,
};

/* 季度長條圖：原版是一張 Tableau 截圖，上面有兩張表、三十幾個數字。
   這裡只留一件事——每一季都在長，而 Q4 要到哪裡。 */
/* 區域頁最底下那一行。填得出來的印上去，填不出來的留一條虛線——
   站在台上看得到空格，比看到一句「各區自己填」有用。 */
function fill(own) {
  const o = own || {};
  const cell = (k, v) => `
    <span class="z-fill-c">
      <i>${text(k)}</i>
      ${v ? `<b>${text(v)}</b>` : '<u></u>'}
    </span>`;
  return `
    <p class="z-fill">
      ${cell('負責人', o.who)}${cell('名單', o.list)}${cell('檢視日', o.when)}
    </p>`;
}

/* 整份的視覺母題：一格一格的手術排程表。暗的是被鎖住的時段，亮的是談開的。
   「Q4 的刀不會來自新系統，會來自把排程打開」——那句主張的樣子就是這個，
   所以它在封面出現一次、在講通道那一張再出現一次、最後一張收起來。
   亮起來的格子是寫死的，不是隨機：每次打開都要長得一樣。 */
const MOTIF_ON = [3, 7, 14, 19, 23, 28, 31, 40, 45, 49, 52, 58, 63, 70, 76, 81];
function motif(cols = 12, rows = 8, tone = 'dark') {
  const on = new Set(MOTIF_ON);
  const cells = Array.from({ length: cols * rows },
    (_, i) => `<i class="${on.has(i) ? 'on' : ''}"></i>`).join('');
  return `<div class="z-motif m-${tone}" style="--cols:${cols}" aria-hidden="true">${cells}</div>`;
}

function bars(c) {
  const top = c.max;
  const W = 1000, H = 300, gap = 10;
  const cols = c.years.flatMap((y) => y.vals.map((v) => ({ v, y: y.y, now: y.y === '2026' })));
  const last = c.years[c.years.length - 1];
  if (last.forecast) cols.push({ v: last.forecast, ghost: true });
  const bw = (W - gap * (cols.length - 1)) / cols.length;
  const ty = H - (c.target.v / top) * H;
  const x = (i) => i * (bw + gap);

  /* 年份標在那一年所有長條的正中間，不是第一根底下——靠左看起來像標錯了。 */
  const spans = [];
  cols.forEach((d, i) => {
    const s = spans[spans.length - 1];
    if (d.y && s && s.y === d.y) s.to = i;
    else if (d.y) spans.push({ y: d.y, from: i, to: i });
  });

  return `
    <svg class="z-bars" viewBox="0 0 ${W} ${H + 46}" role="img"
         aria-label="2024 到 2026 各季手術量">
      <line class="bar-target" x1="0" y1="${ty}" x2="${W}" y2="${ty}"/>
      <text class="bar-target-t" x="0" y="${ty - 13}">${text(c.target.label)}</text>
      ${cols.map((d, i) => {
        const h = (d.v / top) * H;
        const cls = d.ghost ? 'ghost' : d.now ? 'now' : 'past';
        /* 2024、2025 的數值不標。八個沒有人會讀的數字只會把視線分散掉，
           而這一張要說的是今年那三根和它們要去的地方。 */
        return `
          <rect class="bar ${cls}" x="${x(i)}" y="${H - h}" width="${bw}" height="${h}" rx="3"/>
          ${d.ghost ? `<line class="bar-ghost-top" x1="${x(i)}" y1="${H - h}"
                             x2="${x(i) + bw}" y2="${H - h}"/>` : ''}
          ${d.now || d.ghost ? `<text class="bar-v ${cls}" x="${x(i) + bw / 2}"
                y="${H - h - 10}" text-anchor="middle">${d.v.toLocaleString()}</text>` : ''}`;
      }).join('')}
      ${spans.map((s) => `
        <text class="bar-x" x="${(x(s.from) + x(s.to) + bw) / 2}" y="${H + 28}"
              text-anchor="middle">${text(s.y)}</text>`).join('')}
      ${last.forecast ? `<text class="bar-x ghost" x="${x(cols.length - 1) + bw / 2}"
            y="${H + 28}" text-anchor="middle">Q4 預估</text>` : ''}
    </svg>`;
}

// ------------------------------------------------------------------- 開啟之後

let ZEN, state;

async function start(C, say) {
  /* 記住金鑰的裝置會先自己開一次，之後如果表單又被送出一次（測試時容易發生），
     沒有這一道就會再建一次投影片，整份變成兩倍。 */
  if (state) return;
  ZEN = C.ZEN;

  const paths = ZEN.slides.flatMap((s) => (s.img ? [s.img] : [])
    .concat(s.items ? s.items.filter((i) => i.img).map((i) => i.img) : []));
  await openImages([...new Set(paths)], say);

  document.body.classList.remove('locked');
  $('#lock').hidden = true;
  $('#app').hidden = false;

  const deck = $('#deck');
  ZEN.slides.forEach((s, i) => {
    const draw = TYPES[s.type];
    if (!draw) console.error(`No drawing for slide type "${s.type}"`);
    const body = draw ? draw(s)
      : `<div class="z z-missing">缺少畫法：<code>${text(s.type)}</code></div>`;
    deck.appendChild(el(`<section class="slide" data-i="${i}">${body}</section>`));
  });

  state = { i: 0 };

  const dots = $('#dots');
  ZEN.slides.forEach((s, i) => {
    const b = el(`<button type="button" aria-label="第 ${i + 1} 張"></button>`);
    b.addEventListener('click', () => jump(i));
    dots.appendChild(b);
  });

  $('#prev').addEventListener('click', () => go(-1));
  $('#next').addEventListener('click', () => go(1));
  $('#notesBtn').addEventListener('click', () => toggle($('#notesBtn'), $('#notes')));
  $('#gridBtn').addEventListener('click', () => {
    toggle($('#gridBtn'), $('#grid'));
    paintGrid();
  });
  $('#fsBtn').addEventListener('click', toggleFullscreen);
  /* 列印之前先把講稿和總覽收起來，不然它們會印在第一頁上面。 */
  $('#pdfBtn').addEventListener('click', () => {
    if (!$('#notes').hidden) toggle($('#notesBtn'), $('#notes'));
    if (!$('#grid').hidden) toggle($('#gridBtn'), $('#grid'));
    print();
  });

  addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { go(1); e.preventDefault(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { go(-1); e.preventDefault(); }
    else if (e.key === 'f' || e.key === 'F') toggleFullscreen();
    else if (e.key === 'n' || e.key === 'N') toggle($('#notesBtn'), $('#notes'));
    else if (e.key === 'g' || e.key === 'G') { toggle($('#gridBtn'), $('#grid')); paintGrid(); }
    else if (e.key === 'Escape') {
      if (!$('#grid').hidden) toggle($('#gridBtn'), $('#grid'));
      if (!$('#notes').hidden) toggle($('#notesBtn'), $('#notes'));
    }
  });

  /* 手機上用滑的。50px 以內、或比垂直位移小的都不算，不然捲頁就會換頁。 */
  const stage = $('#stage');
  let x0 = 0, y0 = 0;
  stage.addEventListener('touchstart', (e) => {
    x0 = e.changedTouches[0].clientX; y0 = e.changedTouches[0].clientY;
  }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    go(dx < 0 ? 1 : -1);
  }, { passive: true });

  show();
}

function show() {
  const i = state.i;
  $$('.slide').forEach((n) => n.classList.toggle('on', +n.dataset.i === i));

  const at = `${i + 1} / ${ZEN.slides.length}`;
  $('#where').textContent = at;
  if ($('#app')) $('#app').dataset.at = at;   // 全螢幕時左下角那個小數字（本機版沒有這一層）
  $$('#dots button').forEach((b, bi) => b.classList.toggle('here', bi === i));
  $('#notesBody').textContent = ZEN.slides[i].notes || '';

  paintGrid();
}

function go(d) {
  state.i = Math.max(0, Math.min(ZEN.slides.length - 1, state.i + d));
  show();
}

function jump(i) {
  state.i = Math.max(0, Math.min(ZEN.slides.length - 1, i));
  show();
}

/* 上台用的全螢幕。進去之後上下兩條讓開，投影片吃滿整個螢幕；
   離開用 Esc（瀏覽器自己的），所以只聽 fullscreenchange，不自己記狀態。 */
function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen?.().catch(() => { /* 使用者拒絕 */ });
}

document.addEventListener('fullscreenchange', () => {
  document.body.classList.toggle('fs', !!document.fullscreenElement);
});

function toggle(btn, box) {
  const open = box.hidden;
  box.hidden = !open;
  btn.setAttribute('aria-pressed', String(open));
}

/* 總覽的縮圖就是同一份 DOM 縮小——容器查詢單位讓它不用另外畫一次。 */
function paintGrid() {
  const grid = $('#grid');
  if (grid.hidden) return;
  grid.innerHTML = '';
  ZEN.slides.forEach((s, i) => {
    const cell = el(`<button type="button" class="g-cell${i === state.i ? ' here' : ''}"></button>`);
    const shot = el('<div class="g-shot"></div>');
    const from = $(`.slide[data-i="${i}"] .z`);
    if (from) shot.appendChild(from.cloneNode(true));
    cell.appendChild(shot);
    cell.appendChild(el(`<span>${i + 1}　${text(s.type)}</span>`));
    cell.addEventListener('click', () => {
      jump(i);
      toggle($('#gridBtn'), grid);
    });
    grid.appendChild(cell);
  });
}

// 記得這台裝置的話，直接開。
(async () => {
  if (!window.crypto || !crypto.subtle) {
    $('#lockMsg').textContent = '這個瀏覽器無法開啟此頁，請改用 Safari 或 Chrome。';
    return;
  }
  const C = await tryRemembered();
  if (C) await start(C, $('#lockMsg'));
  else $('#pw').focus();
})();

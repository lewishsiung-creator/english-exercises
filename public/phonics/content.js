/* Sound Lab — phonics content, ages 9–11.

   Eight sound sets, each holding three to five sounds, each sound holding
   five words. Everything the page says or shows comes from here.

   A word is  { w: 'cake', p: 'c-a:ay-k-e:', e: '🍰' }

     w  the word
     p  the word cut into the chunks a child would sound out, hyphen
        separated. This is what the "Build the Word" tiles are cut from, and
        what gets highlighted once a sound has been named.
     e  optional emoji.

   A chunk is normally just its letters, and the sound comes from the CUES
   table below — 'sh' is spoken "shhh". Add a colon to give one chunk its own
   sound, and nothing after the colon to make it silent:

     'c-a:ay-k-e:'      cake — the a says its name, the e says nothing
     'b-oo:uu-k'        book — the short oo, not the moon one
     'c:sss-i-t-y:eee'  city — the c has gone soft

   That is the whole notation. Keeping the sound on the chunk means the child
   can tap any single letter and hear what it does in *this* word.

   A sound is
     label   the letters, as a child would write them (sh, a_e, ir)
     say     the sound on its own, spelled so a browser voice gets close.
             Leave it empty when there is no sound to play.
     note    how a teacher would say it out loud
     ear     set false when the sound cannot be heard on its own — silent
             letters — which drops it from the two listening activities
     vs      optional pairs to compare, [before, after]

   A sentence marks its target words with *asterisks*: those are the words
   worth pointing at. Chinese is a support line, never the practice. */

/* ==================== how to speak a chunk on its own ==================== */

/* Browser voices cannot say a bare phoneme, so a stop consonant gets the
   schwa a phonics teacher would add anyway ("buh"), and a continuant gets
   stretched ("sss"). Anything missing here is spoken as it is written, which
   is why 'ay' and 'oh' need no entry. Tune a line if your machine's voice
   mangles it — nothing else depends on these. */
const CUES = {
  b: 'buh', c: 'kuh', d: 'duh', f: 'fff', g: 'guh', h: 'huh', j: 'juh',
  k: 'kuh', l: 'lll', m: 'mmm', n: 'nnn', p: 'puh', qu: 'kwuh', r: 'rrr',
  s: 'sss', t: 'tuh', v: 'vvv', w: 'wuh', x: 'ks', y: 'yuh', z: 'zzz',

  a: 'aah', e: 'ehh', i: 'ih', o: 'ah', u: 'uh',

  sh: 'shhh', ch: 'chuh', tch: 'chuh', th: 'thhh', wh: 'wuh', ph: 'fff',
  ck: 'kuh', ll: 'lll', ss: 'sss', dd: 'duh', nk: 'nk', ng: 'ng',
  kn: 'nnn', wr: 'rrr', mb: 'mmm', dge: 'juh',

  ai: 'ay', ay: 'ay', ee: 'eee', ea: 'eee', oa: 'oh', igh: 'eye', ie: 'eye',
  ar: 'ar', or: 'or', er: 'er', ir: 'er', ur: 'er',
  oi: 'oy', oy: 'oy', ou: 'ow', ow: 'ow', oo: 'oo', aw: 'aw', au: 'aw',
  air: 'air', tion: 'shun',
};

/* ==================== the sets ==================== */

const SETS = [
  /* ---------------------------------------------------------------- 1 */
  {
    id: 'short',
    name: 'Short Vowels',
    zh: '短母音',
    icon: '🐱',
    colour: 'green',
    blurb: 'a e i o u — five short sounds, three letters at a time.',
    blurbZh: 'a e i o u 五個短母音，先從三個字母的字開始。',
    sounds: [
      {
        id: 'a', label: 'a', say: 'aah', note: '/a/ as in cat',
        zh: '短音 a，嘴巴張開',
        words: [
          { w: 'cat', p: 'c-a-t', e: '🐱' },
          { w: 'map', p: 'm-a-p', e: '🗺️' },
          { w: 'bag', p: 'b-a-g', e: '🎒' },
          { w: 'hat', p: 'h-a-t', e: '🎩' },
          { w: 'van', p: 'v-a-n', e: '🚐' },
        ],
      },
      {
        id: 'e', label: 'e', say: 'ehh', note: '/e/ as in bed',
        zh: '短音 e，嘴巴微開',
        words: [
          { w: 'bed', p: 'b-e-d', e: '🛏️' },
          { w: 'pen', p: 'p-e-n', e: '🖊️' },
          { w: 'ten', p: 't-e-n', e: '🔟' },
          { w: 'net', p: 'n-e-t', e: '🥅' },
          { w: 'leg', p: 'l-e-g', e: '🦵' },
        ],
      },
      {
        id: 'i', label: 'i', say: 'ih', note: '/i/ as in pig',
        zh: '短音 i，很短促',
        words: [
          { w: 'pig', p: 'p-i-g', e: '🐷' },
          { w: 'six', p: 's-i-x', e: '6️⃣' },
          { w: 'lip', p: 'l-i-p', e: '👄' },
          { w: 'kid', p: 'k-i-d', e: '🧒' },
          { w: 'win', p: 'w-i-n', e: '🏆' },
        ],
      },
      {
        id: 'o', label: 'o', say: 'ah', note: '/o/ as in dog',
        zh: '短音 o，嘴巴圓圓的',
        words: [
          { w: 'dog', p: 'd-o-g', e: '🐶' },
          { w: 'box', p: 'b-o-x', e: '📦' },
          { w: 'top', p: 't-o-p', e: '🔝' },
          { w: 'mop', p: 'm-o-p', e: '🧹' },
          { w: 'sock', p: 's-o-ck', e: '🧦' },
        ],
      },
      {
        id: 'u', label: 'u', say: 'uh', note: '/u/ as in sun',
        zh: '短音 u，像輕輕的「呃」',
        words: [
          { w: 'sun', p: 's-u-n', e: '☀️' },
          { w: 'bus', p: 'b-u-s', e: '🚌' },
          { w: 'cup', p: 'c-u-p', e: '☕' },
          { w: 'nut', p: 'n-u-t', e: '🥜' },
          { w: 'duck', p: 'd-u-ck', e: '🦆' },
        ],
      },
    ],
    sentences: [
      { t: 'The *cat* sat on my red *hat*.', zh: '那隻貓坐在我的紅帽子上。' },
      { t: 'A big *bug* is in my *cup*.', zh: '有一隻大蟲在我的杯子裡。' },
      { t: '*Ten* *pens* are in the *box*.', zh: '盒子裡有十枝筆。' },
      { t: 'The *dog* ran to the *bus*.', zh: '那隻狗跑向公車。' },
      { t: 'Six *kids* had *jam* and *eggs*.', zh: '六個小孩吃了果醬和蛋。' },
    ],
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: 'magic',
    name: 'Magic e',
    zh: '魔法 e',
    icon: '✨',
    colour: 'purple',
    blurb: 'An e on the end says nothing — and makes the vowel say its name.',
    blurbZh: '字尾的 e 不發音，卻讓前面的母音唸出自己的名字。',
    sounds: [
      {
        id: 'a_e', label: 'a_e', say: 'ay', note: '/ay/ as in cake',
        zh: 'a 唸出字母本身的名字',
        vs: [['cap', 'cape'], ['tap', 'tape'], ['mad', 'made']],
        words: [
          { w: 'cake', p: 'c-a:ay-k-e:', e: '🍰' },
          { w: 'game', p: 'g-a:ay-m-e:', e: '🎮' },
          { w: 'plane', p: 'p-l-a:ay-n-e:', e: '✈️' },
          { w: 'snake', p: 's-n-a:ay-k-e:', e: '🐍' },
          { w: 'tape', p: 't-a:ay-p-e:', e: '📼' },
        ],
      },
      {
        id: 'i_e', label: 'i_e', say: 'eye', note: '/eye/ as in bike',
        zh: 'i 唸出字母本身的名字',
        vs: [['kit', 'kite'], ['pin', 'pine'], ['rid', 'ride']],
        words: [
          { w: 'bike', p: 'b-i:eye-k-e:', e: '🚲' },
          { w: 'kite', p: 'k-i:eye-t-e:', e: '🪁' },
          { w: 'nine', p: 'n-i:eye-n-e:', e: '9️⃣' },
          { w: 'five', p: 'f-i:eye-v-e:', e: '5️⃣' },
          { w: 'smile', p: 's-m-i:eye-l-e:', e: '😀' },
        ],
      },
      {
        id: 'o_e', label: 'o_e', say: 'oh', note: '/oh/ as in rope',
        zh: 'o 唸出字母本身的名字',
        vs: [['hop', 'hope'], ['not', 'note'], ['rob', 'robe']],
        words: [
          { w: 'rope', p: 'r-o:oh-p-e:', e: '🪢' },
          { w: 'nose', p: 'n-o:oh-s:zzz-e:', e: '👃' },
          { w: 'home', p: 'h-o:oh-m-e:', e: '🏠' },
          { w: 'bone', p: 'b-o:oh-n-e:', e: '🦴' },
          { w: 'stone', p: 's-t-o:oh-n-e:', e: '🪨' },
        ],
      },
      {
        id: 'u_e', label: 'u_e', say: 'you', note: '/you/ as in cube',
        zh: 'u 唸出字母本身的名字',
        vs: [['cub', 'cube'], ['tub', 'tube'], ['us', 'use']],
        words: [
          { w: 'cube', p: 'c-u:yoo-b-e:', e: '🧊' },
          { w: 'tube', p: 't-u:yoo-b-e:', e: '🧪' },
          { w: 'cute', p: 'c-u:yoo-t-e:', e: '🥰' },
          { w: 'mule', p: 'm-u:yoo-l-e:', e: '🐴' },
          { w: 'flute', p: 'f-l-u:oo-t-e:', e: '🎶' },
        ],
      },
    ],
    sentences: [
      { t: 'I *ride* my *bike* *home*.', zh: '我騎腳踏車回家。' },
      { t: '*Nine* *mice* sat on a *stone*.', zh: '九隻老鼠坐在石頭上。' },
      { t: 'Take the *rope* and the *kite*.', zh: '拿著繩子和風箏。' },
      { t: 'Her *name* is *Kate* and she *made* a *cake*.', zh: '她叫 Kate，她做了一個蛋糕。' },
      { t: 'The *cute* *mule* ate *five* *limes*.', zh: '那隻可愛的騾子吃了五顆萊姆。' },
    ],
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: 'digraph',
    name: 'Two Letters, One Sound',
    zh: '兩個字母一個音',
    icon: '🚢',
    colour: 'blue',
    blurb: 'sh ch th wh ph — two letters that stop being themselves.',
    blurbZh: 'sh ch th wh ph：兩個字母合起來，變成一個新的音。',
    sounds: [
      {
        id: 'sh', label: 'sh', say: 'shhh', note: '/sh/ as in ship',
        zh: '像叫人安靜的「噓」',
        words: [
          { w: 'ship', p: 'sh-i-p', e: '🚢' },
          { w: 'shop', p: 'sh-o-p', e: '🏬' },
          { w: 'fish', p: 'f-i-sh', e: '🐠' },
          { w: 'shell', p: 'sh-e-ll', e: '🐚' },
          { w: 'brush', p: 'b-r-u-sh', e: '🪥' },
        ],
      },
      {
        id: 'ch', label: 'ch', say: 'chuh', note: '/ch/ as in chair',
        zh: '像火車的「切」',
        words: [
          { w: 'chair', p: 'ch-air', e: '🪑' },
          { w: 'cheese', p: 'ch-ee-s:zzz-e:', e: '🧀' },
          { w: 'chip', p: 'ch-i-p', e: '🍟' },
          { w: 'lunch', p: 'l-u-n-ch', e: '🍱' },
          { w: 'watch', p: 'w-a-tch', e: '⌚' },
        ],
      },
      {
        id: 'th', label: 'th', say: 'thhh', note: '/th/ as in three',
        zh: '舌尖輕輕咬在牙齒中間',
        words: [
          { w: 'three', p: 'th-r-ee', e: '3️⃣' },
          { w: 'think', p: 'th-i-nk', e: '🤔' },
          { w: 'bath', p: 'b-a-th', e: '🛁' },
          { w: 'teeth', p: 't-ee-th', e: '🦷' },
          { w: 'thumb', p: 'th-u-mb', e: '👍' },
        ],
      },
      {
        id: 'wh', label: 'wh', say: 'wuh', note: '/wh/ as in wheel',
        zh: '嘴唇圓起來吹一下',
        words: [
          { w: 'wheel', p: 'wh-ee-l', e: '🎡' },
          { w: 'whale', p: 'wh-a:ay-l-e:', e: '🐳' },
          { w: 'white', p: 'wh-i:eye-t-e:', e: '⬜' },
          { w: 'when', p: 'wh-e-n', e: '❓' },
          { w: 'wheat', p: 'wh-ea-t', e: '🌾' },
        ],
      },
      {
        id: 'ph', label: 'ph', say: 'fff', note: '/f/ as in phone',
        zh: 'ph 唸起來就是 f',
        words: [
          { w: 'phone', p: 'ph-o:oh-n-e:', e: '📱' },
          { w: 'photo', p: 'ph-o:oh-t-o:oh', e: '📷' },
          { w: 'graph', p: 'g-r-a-ph', e: '📈' },
          { w: 'dolphin', p: 'd-o-l-ph-i-n', e: '🐬' },
          { w: 'elephant', p: 'e-l-e-ph-a-n-t', e: '🐘' },
        ],
      },
    ],
    sentences: [
      { t: 'The *fish* and the *whale* swim by the *ship*.', zh: '魚和鯨魚在船邊游泳。' },
      { t: '*Chad* had *cheese* and *chips* for *lunch*.', zh: 'Chad 午餐吃了起司和薯條。' },
      { t: '*Brush* your *teeth* *three* times a day.', zh: '一天刷三次牙。' },
      { t: 'Take a *photo* of the *elephant* with your *phone*.', zh: '用你的手機拍那頭大象。' },
      { t: '*When* is the *white* *ship* here?', zh: '那艘白色的船什麼時候到？' },
    ],
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: 'blend',
    name: 'Two Sounds Together',
    zh: '子音連在一起',
    icon: '🚂',
    colour: 'orange',
    blurb: 'Blends keep both sounds — you can hear each one if you listen.',
    blurbZh: '這些字母沒有變成新的音，兩個音都還在，仔細聽就聽得到。',
    sounds: [
      {
        id: 's-blend', label: 'st sp sk sn sw', say: 'sss', note: 's at the front',
        zh: 's 開頭的組合',
        words: [
          { w: 'stop', p: 's-t-o-p', e: '🛑' },
          { w: 'spin', p: 's-p-i-n', e: '🌀' },
          { w: 'skip', p: 's-k-i-p', e: '🤸' },
          { w: 'snail', p: 's-n-ai-l', e: '🐌' },
          { w: 'swim', p: 's-w-i-m', e: '🏊' },
        ],
      },
      {
        id: 'l-blend', label: 'bl cl fl gl pl', say: 'lll', note: 'l as the second sound',
        zh: '第二個音是 l',
        words: [
          { w: 'black', p: 'b-l-a-ck', e: '⬛' },
          { w: 'clock', p: 'c-l-o-ck', e: '🕐' },
          { w: 'flag', p: 'f-l-a-g', e: '🚩' },
          { w: 'glass', p: 'g-l-a-ss', e: '🥛' },
          { w: 'sled', p: 's-l-e-d', e: '🛷' },
        ],
      },
      {
        id: 'r-blend', label: 'br cr dr fr gr tr', say: 'rrr', note: 'r as the second sound',
        zh: '第二個音是 r',
        words: [
          { w: 'crab', p: 'c-r-a-b', e: '🦀' },
          { w: 'drum', p: 'd-r-u-m', e: '🥁' },
          { w: 'frog', p: 'f-r-o-g', e: '🐸' },
          { w: 'green', p: 'g-r-ee-n', e: '🟢' },
          { w: 'train', p: 't-r-ai-n', e: '🚂' },
        ],
      },
      {
        /* No 'st' here, and nothing that also starts with a blend: a word
           carrying two blends has two defensible answers. */
        id: 'end-blend', label: 'nd nk mp lk nt', say: 'nnn', note: 'two sounds at the end',
        zh: '字尾的兩個音',
        words: [
          { w: 'hand', p: 'h-a-n-d', e: '✋' },
          { w: 'pink', p: 'p-i-nk', e: '💗' },
          { w: 'jump', p: 'j-u-m-p', e: '🤾' },
          { w: 'milk', p: 'm-i-l-k', e: '🥛' },
          { w: 'tent', p: 't-e-n-t', e: '⛺' },
        ],
      },
    ],
    sentences: [
      { t: 'The *frog* can *jump* and *swim*.', zh: '青蛙會跳，也會游泳。' },
      { t: 'A *black* *crab* sat on my *hand*.', zh: '一隻黑螃蟹停在我手上。' },
      { t: '*Stop* and *drink* your *milk*.', zh: '停下來，把牛奶喝完。' },
      { t: 'The *green* *train* went past the *tent*.', zh: '綠色的火車經過帳篷。' },
      { t: 'She *skips* to the *shop* and back.', zh: '她跳著去商店，再跳回來。' },
    ],
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: 'team',
    name: 'Vowel Teams',
    zh: '母音組合',
    icon: '🌈',
    colour: 'green',
    blurb: 'Two vowels go walking — the first one does the talking.',
    blurbZh: '兩個母音走在一起，通常由第一個發音。',
    sounds: [
      {
        id: 'ai', label: 'ai / ay', say: 'ay', note: '/ay/ as in rain',
        zh: 'ai 在字中間，ay 在字尾',
        words: [
          { w: 'rain', p: 'r-ai-n', e: '🌧️' },
          { w: 'train', p: 't-r-ai-n', e: '🚂' },
          { w: 'tail', p: 't-ai-l', e: '🐕' },
          { w: 'play', p: 'p-l-ay', e: '🛝' },
          { w: 'day', p: 'd-ay', e: '📆' },
        ],
      },
      {
        id: 'ee', label: 'ee / ea', say: 'eee', note: '/ee/ as in tree',
        zh: '長長的 ee 音',
        words: [
          { w: 'tree', p: 't-r-ee', e: '🌳' },
          { w: 'feet', p: 'f-ee-t', e: '🦶' },
          { w: 'sheep', p: 'sh-ee-p', e: '🐑' },
          { w: 'beach', p: 'b-ea-ch', e: '🏖️' },
          { w: 'leaf', p: 'l-ea-f', e: '🍃' },
        ],
      },
      {
        id: 'oa', label: 'oa / ow', say: 'oh', note: '/oh/ as in boat',
        zh: '像字母 o 的名字',
        words: [
          { w: 'boat', p: 'b-oa-t', e: '⛵' },
          { w: 'coat', p: 'c-oa-t', e: '🧥' },
          { w: 'road', p: 'r-oa-d', e: '🛣️' },
          { w: 'snow', p: 's-n-ow:oh', e: '❄️' },
          { w: 'yellow', p: 'y-e-ll-ow:oh', e: '🟡' },
        ],
      },
      {
        id: 'igh', label: 'igh / ie', say: 'eye', note: '/eye/ as in night',
        zh: '像字母 i 的名字',
        words: [
          { w: 'night', p: 'n-igh-t', e: '🌙' },
          { w: 'light', p: 'l-igh-t', e: '💡' },
          { w: 'right', p: 'r-igh-t', e: '✅' },
          { w: 'pie', p: 'p-ie', e: '🥧' },
          { w: 'tie', p: 't-ie', e: '👔' },
        ],
      },
    ],
    sentences: [
      { t: 'We *play* in the *rain* all *day*.', zh: '我們整天在雨中玩。' },
      { t: 'Three *sheep* *sleep* by the *green* *tree*.', zh: '三隻羊在綠樹旁睡覺。' },
      { t: 'The *yellow* *boat* goes down the *road*.', zh: '黃色的船順著路走。' },
      { t: 'The *light* is *bright* at *night*.', zh: '夜裡的燈很亮。' },
      { t: 'I ate a *pie* on the *beach*.', zh: '我在海灘上吃了一個派。' },
    ],
  },

  /* ---------------------------------------------------------------- 6 */
  {
    id: 'bossy',
    name: 'Bossy R',
    zh: '被 r 改變的母音',
    icon: '🚗',
    colour: 'purple',
    blurb: 'An r after a vowel bosses it about — it never says its own sound.',
    blurbZh: '母音後面接 r，母音就發不出原本的音了。',
    sounds: [
      {
        id: 'ar', label: 'ar', say: 'ar', note: '/ar/ as in car',
        zh: '嘴巴張開的「啊」加 r',
        words: [
          { w: 'car', p: 'c-ar', e: '🚗' },
          { w: 'star', p: 's-t-ar', e: '⭐' },
          { w: 'park', p: 'p-ar-k', e: '🏞️' },
          { w: 'farm', p: 'f-ar-m', e: '🚜' },
          { w: 'shark', p: 'sh-ar-k', e: '🦈' },
        ],
      },
      {
        id: 'or', label: 'or', say: 'or', note: '/or/ as in fork',
        zh: '嘴巴圓圓的「歐」加 r',
        words: [
          { w: 'fork', p: 'f-or-k', e: '🍴' },
          { w: 'corn', p: 'c-or-n', e: '🌽' },
          { w: 'horse', p: 'h-or-s-e:', e: '🐴' },
          { w: 'storm', p: 's-t-or-m', e: '⛈️' },
          { w: 'north', p: 'n-or-th', e: '🧭' },
        ],
      },
      {
        id: 'er', label: 'er / ir / ur', say: 'er', note: '/er/ as in bird',
        zh: '三種拼法，同一個音',
        words: [
          { w: 'bird', p: 'b-ir-d', e: '🐦' },
          { w: 'girl', p: 'g-ir-l', e: '👧' },
          { w: 'nurse', p: 'n-ur-s-e:', e: '👩‍⚕️' },
          { w: 'turtle', p: 't-ur-t-l-e:', e: '🐢' },
          { w: 'sister', p: 's-i-s-t-er', e: '👭' },
        ],
      },
    ],
    sentences: [
      { t: 'My *car* is in the *car* *park*.', zh: '我的車在停車場裡。' },
      { t: 'A *shark* and a *turtle* swim *far*.', zh: '鯊魚和烏龜游得很遠。' },
      { t: 'The *girl* fed the *bird* some *corn*.', zh: '那個女孩餵鳥吃玉米。' },
      { t: 'A *horse* ran through the *storm*.', zh: '一匹馬在暴風雨中奔跑。' },
      { t: 'My *sister* is a *nurse* in the *north*.', zh: '我姊姊在北部當護理師。' },
    ],
  },

  /* ---------------------------------------------------------------- 7 */
  {
    id: 'pairs',
    name: 'Sound Pairs',
    zh: '容易搞混的音',
    icon: '🔀',
    colour: 'blue',
    blurb: 'oi oy, ou ow, aw — and oo, which has two jobs.',
    blurbZh: 'oi oy、ou ow、aw，還有一個 oo 卻有兩種唸法。',
    sounds: [
      {
        id: 'oi', label: 'oi / oy', say: 'oy', note: '/oy/ as in coin',
        zh: 'oi 在字中間，oy 在字尾',
        words: [
          { w: 'coin', p: 'c-oi-n', e: '🪙' },
          { w: 'point', p: 'p-oi-n-t', e: '👉' },
          { w: 'join', p: 'j-oi-n', e: '🤝' },
          { w: 'boy', p: 'b-oy', e: '👦' },
          { w: 'toy', p: 't-oy', e: '🧸' },
        ],
      },
      {
        id: 'ou', label: 'ou / ow', say: 'ow', note: '/ow/ as in cloud',
        zh: '像喊痛的「哎唷」',
        words: [
          { w: 'cloud', p: 'c-l-ou-d', e: '☁️' },
          { w: 'mouse', p: 'm-ou-s-e:', e: '🐭' },
          { w: 'house', p: 'h-ou-s-e:', e: '🏠' },
          { w: 'cow', p: 'c-ow', e: '🐮' },
          { w: 'town', p: 't-ow-n', e: '🏙️' },
        ],
      },
      {
        id: 'oo-long', label: 'oo (moon)', say: 'oo', note: '/oo/ as in moon — the long one',
        zh: '長的 oo，嘴巴嘟起來',
        vs: [['book', 'moon'], ['foot', 'food'], ['look', 'pool']],
        words: [
          { w: 'moon', p: 'm-oo-n', e: '🌕' },
          { w: 'food', p: 'f-oo-d', e: '🍜' },
          { w: 'spoon', p: 's-p-oo-n', e: '🥄' },
          { w: 'zoo', p: 'z-oo', e: '🦓' },
          { w: 'boot', p: 'b-oo-t', e: '👢' },
        ],
      },
      {
        id: 'oo-short', label: 'oo (book)', say: 'uu', note: '/oo/ as in book — the short one',
        zh: '短的 oo，很快就結束',
        words: [
          { w: 'book', p: 'b-oo:uu-k', e: '📚' },
          { w: 'foot', p: 'f-oo:uu-t', e: '🦶' },
          { w: 'cook', p: 'c-oo:uu-k', e: '👨‍🍳' },
          { w: 'wood', p: 'w-oo:uu-d', e: '🪵' },
          { w: 'look', p: 'l-oo:uu-k', e: '👀' },
        ],
      },
      {
        id: 'aw', label: 'aw / au', say: 'aw', note: '/aw/ as in saw',
        zh: '拉長的「歐」',
        words: [
          { w: 'saw', p: 's-aw', e: '🪚' },
          { w: 'paw', p: 'p-aw', e: '🐾' },
          { w: 'draw', p: 'd-r-aw', e: '✏️' },
          { w: 'straw', p: 's-t-r-aw', e: '🥤' },
          { w: 'yawn', p: 'y-aw-n', e: '🥱' },
        ],
      },
    ],
    sentences: [
      { t: 'The brown *cow* is in the *town*.', zh: '那頭棕色的牛在鎮上。' },
      { t: 'A *boy* found a *coin* in the *pool*.', zh: '一個男孩在池子裡撿到一枚硬幣。' },
      { t: '*Look* at this *good* *book* about the *moon*.', zh: '看看這本關於月亮的好書。' },
      { t: 'I *saw* a *mouse* in the *house*.', zh: '我在屋子裡看到一隻老鼠。' },
      { t: 'The *cook* used a *spoon* and a *straw*.', zh: '廚師用了一根湯匙和一根吸管。' },
    ],
  },

  /* ---------------------------------------------------------------- 8 */
  {
    id: 'tricky',
    name: 'Tricky Bits',
    zh: '不聽話的字母',
    icon: '🕵️',
    colour: 'orange',
    blurb: 'Letters that go quiet, and letters that change their mind.',
    blurbZh: '有的字母不發音，有的字母會換一個音。',
    sounds: [
      {
        id: 'soft-c', label: 'c → /s/', say: 'sss', note: 'c before e, i or y says /s/',
        zh: 'c 遇到 e、i、y 就唸 s',
        vs: [['cat', 'city'], ['cup', 'ice'], ['cold', 'face']],
        words: [
          { w: 'city', p: 'c:sss-i-t-y:eee', e: '🏙️' },
          { w: 'ice', p: 'i:eye-c:sss-e:', e: '🧊' },
          { w: 'face', p: 'f-a:ay-c:sss-e:', e: '😀' },
          { w: 'dance', p: 'd-a-n-c:sss-e:', e: '💃' },
          { w: 'pencil', p: 'p-e-n-c:sss-i-l', e: '✏️' },
        ],
      },
      {
        id: 'soft-g', label: 'g → /j/', say: 'juh', note: 'g before e, i or y says /j/',
        zh: 'g 遇到 e、i、y 就唸 j',
        vs: [['goat', 'giant'], ['game', 'page'], ['gold', 'magic']],
        words: [
          { w: 'page', p: 'p-a:ay-g:juh-e:', e: '📄' },
          { w: 'cage', p: 'c-a:ay-g:juh-e:', e: '🦜' },
          { w: 'magic', p: 'm-a-g:juh-i-c:kuh', e: '✨' },
          { w: 'orange', p: 'or-a-n-g:juh-e:', e: '🍊' },
          { w: 'bridge', p: 'b-r-i-dge', e: '🌉' },
        ],
      },
      {
        id: 'silent', label: 'kn wr mb', say: '', ear: false,
        note: 'a letter that is written but never said',
        zh: '寫出來但不發音的字母',
        words: [
          { w: 'knee', p: 'kn-ee', e: '🦵' },
          { w: 'know', p: 'kn-ow:oh', e: '💡' },
          { w: 'write', p: 'wr-i:eye-t-e:', e: '✍️' },
          { w: 'wrong', p: 'wr-o-ng', e: '❌' },
          { w: 'lamb', p: 'l-a-mb', e: '🐑' },
        ],
      },
      {
        id: 'tion', label: '-tion', say: 'shun', note: '/shun/ at the end of a word',
        zh: '字尾的 -tion 唸「遜」',
        words: [
          { w: 'station', p: 's-t-a:ay-tion', e: '🚉' },
          { w: 'question', p: 'qu-e-s-tion:chun', e: '❓' },
          { w: 'action', p: 'a-c:kuh-tion', e: '🎬' },
          { w: 'nation', p: 'n-a:ay-tion', e: '🌏' },
          { w: 'addition', p: 'a:uh-dd-i-tion', e: '➕' },
        ],
      },
    ],
    sentences: [
      { t: 'I *know* the answer to the *question*.', zh: '我知道這個問題的答案。' },
      { t: 'The *giant* *wrote* on the *page*.', zh: '巨人在紙上寫字。' },
      { t: 'There is *ice* on the *bridge* in the *city*.', zh: '城裡的橋上結了冰。' },
      { t: 'The train to the *station* was late.', zh: '往車站的火車誤點了。' },
      { t: 'A *lamb* hurt its *knee* and could not *dance*.', zh: '小羊弄傷膝蓋，跳不了舞。' },
    ],
  },
];

/* ==================== the activities ==================== */

const ACTIVITIES = [
  {
    id: 'cards', name: 'Meet the Sounds', zh: '認識這些音', icon: '🔤', colour: 'blue',
    hint: 'Listen to each sound, then to its words.',
    hintZh: '先聽這個音，再聽它的例字。',
    scored: false,
  },
  {
    id: 'ear', name: 'Which Sound?', zh: '這是哪個音？', icon: '👂', colour: 'green',
    hint: 'Listen. Which sound is hiding in the word?',
    hintZh: '仔細聽，這個字裡藏著哪個音？',
  },
  {
    id: 'sort', name: 'Sort the Words', zh: '幫字分類', icon: '🗂', colour: 'orange',
    hint: 'Read the word. Which sound does it belong to?',
    hintZh: '讀讀看這個字，它屬於哪一組？',
  },
  {
    id: 'build', name: 'Build the Word', zh: '拼出這個字', icon: '🧱', colour: 'purple',
    hint: 'Tap the sounds in order to build the word.',
    hintZh: '按照順序點出每一個音，把字拼出來。',
  },
  {
    id: 'odd', name: 'Odd One Out', zh: '找出不一樣的', icon: '🔍', colour: 'green',
    hint: 'Three words share a sound. Tap the one that does not.',
    hintZh: '三個字有相同的音，點出不一樣的那一個。',
  },
  {
    id: 'read', name: 'Read It Out Loud', zh: '大聲讀出來', icon: '📖', colour: 'purple',
    hint: 'Read it aloud first. Then listen and check yourself.',
    hintZh: '先自己大聲讀，再聽聽看對不對。',
    scored: false,
  },
];

const PRAISE = ['Nice!', "That's it!", 'Got it!', 'Yes!', 'Sharp ears!', 'Good one!', 'Exactly!'];
const ENCOURAGE = ['Listen again.', 'Nearly!', 'Try another.', 'Have another go.', 'Close!'];

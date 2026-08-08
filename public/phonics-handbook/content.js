/* 自然發音學習手冊 — Phonics Handbook, 中高年級 (ages 9–12).

   The whole handbook lives here, one entry per section. Chinese is the
   instruction language on this page — the reverse of the adult pages —
   because the reader is a child being taught to decode English. Any run of
   English letters anywhere in the text is tappable and speaks itself.

   Block types, each one function in render.js:

     p        a paragraph. **bold** works, and English words become tappable.
     demo     a paragraph set larger — the worked example under a rule.
     goals    the ◆ 學習目標 list.
     h3 / h4  headings inside a section.
     note     a callout. kind: 'tip' 小叮嚀 / 'think' 想一想 / 'try' 試一試,
              with an optional title to override the default.
     list     a numbered list.
     chips    a row of word chips, with an optional row label. A chip is a
              string, or { w, say, eg, egs, note } — say is the sound spelled
              so a browser voice gets close (falls back to the CUES table),
              eg/egs the example word(s) spoken after it.
     pairs    before → after pairs, each side tappable: hop → hope.
     table    head + rows; English inside any cell is tappable.
     ex       a worked example: word → its syllables. { w, s: 'nap-kin' }.
     split    the cutting game. Words with their cuts marked: 'nap-kin'.
     parts    字首＋字根＋字尾, revealed by a tap:
              { w, parts: [[morpheme, gloss], …], zh }.
     family   a word-family card: { root, gloss, words }.
     kicker   the one big line at the end.

   Two rules when editing. A split word's hyphens must spell the word back
   exactly — they are where the correct cuts go. And keep digraphs (sh, ch,
   th, ck, ph, tch) inside one chunk, as the handbook itself teaches. */

/* ==================== how to speak a sound on its own ==================== */

/* Browser voices cannot say a bare phoneme, so each sound is an English
   pseudo-word chosen to make the engine's letter-to-sound rules land on it.

   THE ONE HARD RULE, and it beats phonics theory: a cue must look like a
   pronounceable word, or the engine reads it out as LETTER NAMES. This is
   not a guess — every entry below was synthesised with macOS `say` (the
   same system voices the browser uses) and compared against the letter-name
   reading. The results were blunt:

     'sss' produced audio byte-identical to "ess ess ess"
     'lll' → "el el el",  'mmm' → "em em em",  'rrr' → "ar ar ar",
     'vvv' → "vee vee vee",  'ng' → "en gee",  'ks' → "kay ess"
     'aah' was byte-identical to 'ah', so short a and short o were one sound
     'thhh' ran 1.22s against 0.43s — the h's become segments, not stretch

   So the teacherly stretched spelling ("sss" for /s/) is wrong here even
   though it is right on a whiteboard: the engine spells it. Continuants take
   the schwa form too. Two survived the test and are deliberately left alone —
   'fff' (0.72s, genuinely stretched) and 'shhh' (0.20s, hits the shush
   lexicon); bare 'sh' would spell out as "ess aitch".

   Re-measure with:
     say -v Samantha -o a.aiff "sss"; say -v Samantha -o b.aiff "ess ess ess"
     md5 a.aiff b.aiff       # same hash = the cue is being spelled out

   Voices differ, so a cue that is clean here can fail elsewhere. The teacher
   panel's 發音檢查 plays them all in turn for exactly that. */
const CUES = {
  b: 'buh', c: 'kuh', d: 'duh', f: 'fff', g: 'guh', h: 'huh', j: 'juh',
  k: 'kuh', l: 'luh', m: 'muh', n: 'nnn', p: 'puh', qu: 'kwuh', r: 'ruh',
  s: 'suh', t: 'tuh', v: 'vuh', w: 'wuh', x: 'uks', y: 'yuh', z: 'zuh',

  a: 'ack', e: 'eh', i: 'ih', o: 'ah', u: 'uh',

  sh: 'shhh', ch: 'chuh', tch: 'chuh', th: 'thuh', wh: 'wuh', ph: 'fff',
  ck: 'kuh', ng: 'ung', gh: 'fff',
  kn: 'nnn', wr: 'ruh', gn: 'nnn', mb: 'muh',

  bl: 'bluh', cl: 'cluh', fl: 'fluh', gl: 'gluh', pl: 'pluh', sl: 'sluh',
  br: 'bruh', cr: 'cruh', dr: 'druh', fr: 'fruh', gr: 'gruh', pr: 'pruh',
  tr: 'truh',
  sc: 'skuh', sk: 'skuh', sm: 'smuh', sn: 'snuh', sp: 'spuh', st: 'stuh',
  sw: 'swuh',
  scr: 'skruh', spl: 'spluh', spr: 'spruh', str: 'struh', squ: 'skwuh',
  shr: 'shruh', thr: 'thruh',

  ai: 'ay', ay: 'ay', ee: 'eee', ea: 'eee', ei: 'ay', ey: 'ee', ie: 'eye',
  oa: 'oh', oe: 'oh', ow: 'oh', ue: 'ooh', ui: 'ooh', igh: 'eye', eigh: 'ay',
  ar: 'ar', or: 'or', er: 'er', ir: 'er', ur: 'er', ore: 'or', air: 'air',
  oi: 'oy', oy: 'oy', ou: 'ow', oo: 'ooh', aw: 'aw', au: 'aw',
  al: 'awl', all: 'awl', ough: 'aw', augh: 'aw',
  tion: 'shun', sion: 'shun', ture: 'cher', le: 'ull',
  ed: 'ed', ing: 'ing', ment: 'ment', ness: 'ness', ful: 'full',
};

/* ==================== the pictures ==================== */

/* One emoji per word, shown as a small picture beside it — a meaning aid,
   never the practice. A word is listed here only when the picture is
   instant and unmistakable for a nine-to-twelve-year-old; an abstract word
   simply has no entry, and that is the correct state for it. Applies
   everywhere the word appears (chips, example words, pairs). To picture a
   new word, add one line; to drop a bad picture, delete its line. */
const PICS = {
  /* 第一單元的例字 */
  cat: '🐱', bed: '🛏️', hot: '🥵', cake: '🍰', bike: '🚲', chat: '💬',
  phone: '📱', laugh: '😂', write: '✍️', climb: '🧗', crab: '🦀',
  frog: '🐸', stop: '🛑', swim: '🏊', strong: '💪', hand: '✋', tent: '⛺',
  salt: '🧂', gift: '🎁', rain: '🌧️', bread: '🍞', key: '🔑', pie: '🥧',
  boat: '⛵', snow: '❄️', light: '💡', car: '🚗', bird: '🐦', chair: '🪑',
  bear: '🐻', deer: '🦌', boy: '👦', cow: '🐮', moon: '🌙', book: '📖',
  ball: '⚽', baby: '👶',

  /* 第二單元的單字 */
  blast: '💥', stand: '🧍', cactus: '🌵', strength: '💪', wrench: '🔧',
  wilt: '🥀', sob: '😭', drum: '🥁',
  weather: '🌦️', telephone: '☎️', dolphin: '🐬', elephant: '🐘',
  package: '📦', wrestle: '🤼', blossom: '🌸', snorkel: '🤿',
  kite: '🪁', explode: '💥', envelope: '✉️', telescope: '🔭',
  microphone: '🎤', circus: '🎪', squirrel: '🐿️',
  steak: '🥩', rainbow: '🌈', lightning: '⚡',
  oyster: '🦪', mountain: '⛰️', balloon: '🎈', raccoon: '🦝',
  bamboo: '🎍', neighborhood: '🏘️', applaud: '👏', astronaut: '👨‍🚀',
  magnify: '🔍', terrify: '😱', prince: '🤴', celebrate: '🎉',
  medicine: '💊',

  /* 第五、第六單元 */
  walked: '🚶', laughed: '😂', television: '📺', robot: '🤖', lion: '🦁',
};

/* ==================== 容易念錯的字 ====================

   Words whose lesson depends on the voice picking one particular reading.
   A browser voice choosing the other one does not merely sound odd — it
   teaches the opposite of the point the list is making, so these are worth
   hearing once on any machine you teach from. They are listed in the
   teacher panel's 發音檢查 for exactly that. `zh` says what to listen for. */
const WATCH = [
  { w: 'refuse', zh: '要念動詞 ri-FYOOZ（長 u）。名詞 REF-yoos 是「垃圾」，那就沒有長 u 了' },
  { w: 'produce', zh: '要念動詞 pruh-DOOS，不是名詞 PRO-doos' },
  { w: 'subtle', zh: 'b 不出聲，念 SUT-l。念成 SUB-tle 就破壞了這一課' },
  { w: 'gnaw', zh: 'g 不出聲，念 NAW。念成 guh-naw 就錯了' },
  { w: 'thorough', zh: '念 THUR-oh，不是 through' },
  { w: 'rhythm', zh: '念 RITH-um' },
  { w: 'wharf', zh: 'wh 的音' },
  { w: 'python', zh: '念 PIE-thon' },
  { w: 'portrait', zh: '念 POR-trit' },
  { w: 'brookside', zh: '短 oo，像 book' },
];

/* ==================== the handbook ==================== */

const SECTIONS = [

  /* ---------------------------------------------------------------- 前言 */
  {
    id: 'kids',
    icon: '💌',
    nav: '給小朋友的話',
    title: '給小朋友的話',
    blocks: [
      { t: 'p', text: '小朋友，你好！' },
      { t: 'p', text: '英語的字看起來好長好可怕，對不對？其實每一個長長的英文字，都是由幾個小小的聲音組合起來的。只要學會把字拆開，再一塊一塊念出來，再長的字你都念得出來。' },
      { t: 'p', text: '這本手冊不用從第一頁念到最後一頁。哪一個聲音你不太確定，就翻到那一頁練一練。**看到英文字，用手指點一下，它就會念給你聽。**' },
      { t: 'p', text: '我們一起加油！' },
    ],
  },

  {
    id: 'teachers',
    icon: '👩‍🏫',
    nav: '給老師和家長的話',
    title: '給老師和家長的話',
    blocks: [
      { t: 'p', text: '本手冊適合已有基礎、但發音規則尚有缺漏的中高年級學生使用。建議的使用方式如下：' },
      { t: 'list', items: [
        '**先檢測，再教學。** 請學生直接朗讀第二單元的單字表，不必事先教學。念錯的地方才是需要加強的地方。檢測時請先在 👩‍🏫 面板打開「檢測模式」——點單字不會發出聲音，只會做記號。',
        '**只練不足之處。** 已經熟練的部分請直接跳過。中高年級學生對於重複練習已會的內容，容易失去學習動機。',
        '**每次八到十個字。** 每組單字的前幾個可作為快速檢測之用，出現錯誤時再往下練習該組其餘單字。',
        '**優先教學第三單元。** 對本階段學生而言，「音節切分」是進步最快的關鍵能力。',
        '**最後務必完整朗讀。** 拆解只是過程，把整個字流暢念出來才是目標。',
      ] },
      { t: 'p', text: '本手冊所選用的單字，皆為中高年級學生在課本及讀物中會實際遇到的字彙，未使用 cat、mat、sat 一類低年級字彙。' },
    ],
  },

  /* ---------------------------------------------------------------- 1 */
  {
    id: 'unit1',
    icon: '🔤',
    num: '第一單元',
    nav: '認識英語的聲音',
    title: '認識英語的聲音',
    blocks: [
      { t: 'goals', items: [
        '知道英語大約有哪些聲音。',
        '認識子音、母音，以及它們的各種拼法。',
      ] },
      { t: 'p', text: '英語大約有四十四個聲音，卻可以用一百八十種左右的拼法寫出來。這就是英文拼字不容易的原因。' },
      { t: 'note', kind: 'tip', lines: [
        '這一個單元是查閱用的，像字典一樣。不必按照順序背下來，需要的時候再翻開來看就好。',
        '每一張小卡都可以點：先聽聲音，再聽例字。',
      ] },

      { t: 'h3', text: '一、單子音' },
      { t: 'chips', words: [
        'b', { w: 'c', note: '念 /k/' }, 'd', 'f', { w: 'g', note: '念 /g/' },
        'h', 'j', 'k', 'l', 'm', 'n', 'p', { w: 'qu', note: '念 /kw/' },
        'r', 's', 't', 'v', 'w', { w: 'x', note: '念 /ks/' }, 'y', 'z',
      ] },

      { t: 'h3', text: '二、短母音' },
      { t: 'chips', words: [
        { w: 'a', eg: 'cat' }, { w: 'e', eg: 'bed' }, { w: 'i', eg: 'sit' },
        { w: 'o', eg: 'hot' }, { w: 'u', eg: 'cup' },
      ] },
      { t: 'p', text: '短母音的聲音很短，一下子就結束了。' },

      { t: 'h3', text: '三、長母音' },
      { t: 'chips', words: [
        { w: 'a', say: 'ay', eg: 'cake' }, { w: 'e', say: 'ee', eg: 'me' },
        { w: 'i', say: 'eye', eg: 'bike' }, { w: 'o', say: 'oh', eg: 'note' },
        { w: 'u', say: 'you', egs: ['mule', 'flute'] },
      ] },
      { t: 'note', kind: 'think', lines: [
        '長母音有一個好記的特點：它念起來就是**字母自己的名字**。',
        'cake 裡面的 a，念起來就是我們念字母表時的那個「A」。',
      ] },

      { t: 'h3', text: '四、子音組合（兩個字母，只發一個音）' },
      { t: 'chips', words: [
        { w: 'sh', eg: 'shop' }, { w: 'ch', eg: 'chat' },
        { w: 'th', say: 'thuh', egs: ['this', 'thin'], note: 'this 有震動／thin 沒有震動' },
        { w: 'wh', eg: 'when' }, { w: 'ph', eg: 'phone' },
        { w: 'ck', eg: 'rock' }, { w: 'ng', eg: 'song' },
        { w: 'gh', say: 'fff', eg: 'laugh', note: '在 laugh 裡念 /f/' },
      ] },
      { t: 'chips', label: '不發音的組合', words: [
        { w: 'kn-', eg: 'know', note: 'k 不出聲' },
        { w: 'wr-', eg: 'write', note: 'w 不出聲' },
        { w: 'gn-', eg: 'gnaw', note: 'g 不出聲' },
        { w: '-mb', say: 'muh', eg: 'climb', note: 'b 不出聲' },
      ] },
      { t: 'note', kind: 'try', lines: [
        '把手指輕輕放在喉嚨上，念念看 this，喉嚨會震動；再念念看 thin，喉嚨不會震動。',
        '同樣是 th，兩種念法不一樣喔。',
      ] },

      { t: 'h3', text: '五、子音連音（兩個音，各念各的）' },
      { t: 'chips', label: 'l 開頭', words: [
        { w: 'bl', eg: 'black' }, { w: 'cl', eg: 'class' }, { w: 'fl', eg: 'flag' },
        { w: 'gl', eg: 'glad' }, { w: 'pl', eg: 'plan' }, { w: 'sl', eg: 'slip' },
      ] },
      { t: 'chips', label: 'r 開頭', words: [
        { w: 'br', eg: 'bring' }, { w: 'cr', eg: 'crab' }, { w: 'dr', eg: 'drop' },
        { w: 'fr', eg: 'frog' }, { w: 'gr', eg: 'grass' }, { w: 'pr', eg: 'press' },
        { w: 'tr', eg: 'trip' },
      ] },
      { t: 'chips', label: 's 開頭', words: [
        { w: 'sc', eg: 'scan' }, { w: 'sk', eg: 'skip' }, { w: 'sm', eg: 'small' },
        { w: 'sn', eg: 'snack' }, { w: 'sp', eg: 'spin' }, { w: 'st', eg: 'stop' },
        { w: 'sw', eg: 'swim' },
      ] },
      { t: 'chips', label: '三個字母', words: [
        { w: 'scr', eg: 'scratch' }, { w: 'spl', eg: 'splash' }, { w: 'spr', eg: 'spring' },
        { w: 'str', eg: 'strong' }, { w: 'squ', eg: 'square' }, { w: 'shr', eg: 'shrink' },
        { w: 'thr', eg: 'three' },
      ] },
      { t: 'chips', label: '放在字尾', words: [
        { w: '-nd', eg: 'hand' }, { w: '-nt', eg: 'tent' }, { w: '-mp', eg: 'jump' },
        { w: '-st', say: 'est', eg: 'last' }, { w: '-sk', say: 'esk', eg: 'desk' },
        { w: '-lt', eg: 'salt' }, { w: '-lp', eg: 'help' }, { w: '-ft', eg: 'gift' },
        { w: '-ct', eg: 'fact' },
      ] },
      { t: 'note', kind: 'think', title: '想一想：連音和組合有什麼不一樣？', lines: [
        '組合（例如 sh）是兩個字母合起來，變成一個全新的聲音。',
        '連音（例如 bl）是兩個聲音黏在一起，你仔細聽，還是聽得出 b 和 l。',
      ] },

      { t: 'h3', text: '六、母音組合（兩個母音字母一起工作）' },
      { t: 'chips', words: [
        { w: 'ai', eg: 'rain' }, { w: 'ay', eg: 'play' },
        { w: 'ea', egs: ['eat', 'bread', 'great'], note: '三種念法' },
        { w: 'ee', eg: 'see' }, { w: 'ei', eg: 'receive' }, { w: 'ey', eg: 'key' },
        { w: 'ie', egs: ['pie', 'chief'], note: '兩種念法' },
        { w: 'oa', eg: 'boat' }, { w: 'oe', eg: 'toe' },
        { w: 'ow', eg: 'snow' }, { w: 'ue', eg: 'blue' }, { w: 'ui', eg: 'fruit' },
        { w: 'igh', eg: 'light' }, { w: 'eigh', eg: 'eight' },
      ] },

      { t: 'h3', text: '七、被 r 控制的母音' },
      { t: 'chips', words: [
        { w: 'ar', eg: 'car' }, { w: 'or', eg: 'fork' }, { w: 'er', eg: 'her' },
        { w: 'ir', eg: 'bird' }, { w: 'ur', eg: 'turn' },
        { w: 'air／are／ear', say: 'air', egs: ['chair', 'care', 'bear'] },
        { w: 'ore', eg: 'more' },
        { w: 'eer／ear', say: 'ear', egs: ['deer', 'hear'] },
      ] },
      { t: 'note', kind: 'think', title: '想一想：為什麼說 r 很霸道？', lines: [
        '只要 r 站在母音後面，那個母音就不能照原來的方式念了，通通要聽 r 的話。',
        '所以我們可以叫它「霸道的 r」。',
      ] },

      { t: 'h3', text: '八、雙母音（嘴巴要滑動的聲音）' },
      { t: 'chips', words: [
        { w: 'oi', eg: 'coin' }, { w: 'oy', eg: 'boy' },
        { w: 'ou', eg: 'out' }, { w: 'ow', say: 'ow', eg: 'cow' },
      ] },
      { t: 'note', kind: 'try', lines: [
        '對著鏡子念 out，注意看你的嘴巴。是不是從張開慢慢變成圓圓的？',
        '嘴形會滑動的母音，就叫做雙母音。',
      ] },

      { t: 'h3', text: '九、其他母音拼法' },
      { t: 'chips', words: [
        { w: 'oo', egs: ['moon', 'book'], note: '兩種念法' },
        { w: 'aw', eg: 'saw' }, { w: 'au', eg: 'autumn' },
        { w: 'al', eg: 'salt' }, { w: 'all', eg: 'ball' },
        { w: 'ough', eg: 'thought' }, { w: 'augh', eg: 'caught' },
        { w: 'y', say: 'eye', eg: 'fly', note: '有時念 /ī/' },
        { w: 'y', say: 'ee', eg: 'baby', note: '有時念 /ē/' },
      ] },

      { t: 'h3', text: '十、幾個特別的規則' },
      { t: 'list', items: [
        '**軟音 c、軟音 g**：後面接 e、i、y 的時候，c 和 g 的聲音會變軟。',
        '**輕聲母音 /ə/**：念得很快、很含糊的母音，例如 about、pencil 裡面的那個聲音。',
        '**-ed 有三種念法**：/t/（walked）、/d/（played）、/ɪd/（wanted）。',
        '**-s 有兩種念法**：/s/（cats）、/z/（dogs）。',
        '**常見字尾**：-tion、-sion、-ture、-le。',
      ] },
    ],
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: 'unit2',
    icon: '📖',
    num: '第二單元',
    nav: '各種聲音的單字練習',
    title: '各種聲音的單字練習',
    blocks: [
      { t: 'goals', items: [
        '檢查自己哪些聲音已經熟練，哪些還需要加強。',
        '透過朗讀，把發音規則變成習慣。',
      ] },
      { t: 'note', kind: 'tip', lines: [
        '單子音通常不會有問題，可以直接跳過。真正容易卡住的地方，都在下面這些。',
        '先自己念念看，再點單字對答案。老師檢測時請打開「檢測模式」。',
      ] },

      { t: 'h3', text: '一、短母音' },
      { t: 'chips', label: '短 a', words: ['snap', 'grasp', 'flask', 'drank', 'blast', 'champ', 'clasp', 'stand', 'thrash', 'plank', 'scratch', 'strand', 'ranch', 'gasp', 'splash', 'trapped', 'absent', 'cactus', 'canvas', 'plastic'] },
      { t: 'chips', label: '短 e', words: ['shelf', 'spend', 'trench', 'blend', 'wept', 'kept', 'stretch', 'drench', 'swept', 'strength', 'tempt', 'quench', 'wrench', 'blessed', 'expect', 'defend', 'prevent', 'splendid', 'tempest', 'excellent'] },
      { t: 'chips', label: '短 i', words: ['shrink', 'twist', 'split', 'drift', 'blink', 'script', 'sprint', 'swift', 'thrift', 'glimpse', 'instinct', 'distinct', 'insist', 'district', 'mimic', 'crisp', 'wilt', 'brisk', 'shift', 'zigzag'] },
      { t: 'chips', label: '短 o', words: ['blond', 'frost', 'romp', 'blotch', 'prompt', 'stomp', 'scoff', 'throb', 'chomp', 'sob', 'plot', 'knock', 'shock', 'cost', 'lost', 'wobble', 'topple', 'hostile', 'monster'] },
      { t: 'chips', label: '短 u', words: ['crunch', 'plunge', 'shrunk', 'grump', 'blunt', 'thrust', 'clutch', 'stunt', 'brunch', 'slump', 'trust', 'hunch', 'munch', 'drum', 'struck', 'adjust', 'disrupt', 'summit', 'publish', 'jungle'] },

      { t: 'h3', text: '二、子音組合' },
      { t: 'chips', label: 'sh', words: ['shatter', 'establish', 'publish', 'punish', 'marshal', 'shrivel', 'ambush', 'workshop'] },
      { t: 'chips', label: 'ch', words: ['champion', 'chapter', 'challenge', 'approach', 'exchange', 'purchase', 'orchard', 'merchant'] },
      { t: 'chips', label: 'th（沒有震動）', words: ['thunder', 'thousand', 'healthy', 'wealthy', 'athlete', 'python', 'method'] },
      { t: 'chips', label: 'th（有震動）', words: ['although', 'weather', 'rhythm', 'northern', 'further', 'together', 'whether'] },
      { t: 'chips', label: 'wh', words: ['whistle', 'whimper', 'meanwhile', 'somewhat', 'overwhelm', 'wharf'] },
      { t: 'chips', label: 'ph', words: ['telephone', 'alphabet', 'dolphin', 'elephant', 'photograph', 'orphan', 'triumph'] },
      { t: 'chips', label: 'ck', words: ['package', 'tackle', 'sprinkle', 'wreckage', 'blockade', 'freckle'] },
      { t: 'chips', label: 'ng', words: ['strengthen', 'prolong', 'belonging', 'distinguish', 'angle', 'single'] },
      { t: 'chips', label: '不發音的字母', words: ['knowledge', 'knuckle', 'wrestle', 'wrinkle', 'gnaw', 'campaign', 'climb', 'plumber', 'doubt', 'subtle'] },

      { t: 'h3', text: '三、子音連音' },
      { t: 'chips', label: 'l 開頭', words: ['blossom', 'clatter', 'flourish', 'glisten', 'plunder', 'slither', 'blizzard', 'clumsy', 'flatter', 'gloomy'] },
      { t: 'chips', label: 'r 開頭', words: ['bracket', 'crumble', 'dribble', 'fragment', 'grumble', 'prosper', 'tremble', 'brittle', 'crisis', 'drastic'] },
      { t: 'chips', label: 's 開頭', words: ['scatter', 'skeleton', 'smuggle', 'snorkel', 'splendid', 'stagger', 'swagger', 'scandal', 'sketch', 'smother'] },
      { t: 'chips', label: '三個字母', words: ['scramble', 'splinter', 'sprinkle', 'stranger', 'squabble', 'shrivel', 'throttle', 'scratch', 'spring', 'thrust'] },
      { t: 'chips', label: '放在字尾', words: ['abandon', 'permanent', 'triumph', 'contrast', 'whisker', 'consult', 'engulf', 'transfer', 'conduct', 'instinct'] },

      { t: 'h3', text: '四、不發音的 e' },
      { t: 'note', kind: 'think', lines: [
        '字尾的 e 自己不出聲，可是它會把前面的母音「叫醒」，讓那個母音念出字母自己的名字。',
        '只是多了一個 e，聲音就完全不一樣了。點點看下面每一對，聽聽差別。',
      ] },
      { t: 'pairs', items: [['hop', 'hope'], ['kit', 'kite'], ['not', 'note']] },
      { t: 'chips', label: 'a_e', words: ['blade', 'scrape', 'escape', 'mistake', 'translate', 'debate', 'persuade', 'embrace', 'invade', 'decorate'] },
      { t: 'chips', label: 'i_e', words: ['thrive', 'invite', 'decide', 'survive', 'describe', 'provide', 'entire', 'precise', 'divide', 'recognize'] },
      { t: 'chips', label: 'o_e', words: ['slope', 'stroke', 'explode', 'propose', 'remote', 'suppose', 'compose', 'envelope', 'telescope', 'microphone'] },
      { t: 'chips', label: 'u_e', words: ['costume', 'perfume', 'confuse', 'produce', 'include', 'refuse', 'salute', 'conclude', 'dispute', 'absolute'] },
      { t: 'chips', label: 'e_e', words: ['complete', 'athlete', 'compete', 'extreme', 'concrete', 'delete', 'supreme', 'obsolete'] },

      { t: 'h3', text: '五、母音組合' },
      { t: 'chips', label: 'ai', words: ['strain', 'complain', 'contain', 'explain', 'remain', 'restrain', 'sprain', 'detail', 'campaign', 'entertain', 'maintain', 'portrait'] },
      { t: 'chips', label: 'ay', words: ['betray', 'portray', 'dismay', 'display', 'delay', 'essay', 'decay', 'holiday', 'runaway', 'yesterday'] },
      { t: 'chips', label: 'ea（念長 e）', words: ['repeat', 'defeat', 'retreat', 'appeal', 'conceal', 'reveal', 'disease', 'increase', 'release', 'beneath'] },
      { t: 'chips', label: 'ea（念短 e）', words: ['weather', 'feather', 'treasure', 'measure', 'pleasant', 'healthy', 'wealthy', 'meadow', 'spread', 'breath'] },
      { t: 'chips', label: 'ea（念長 a，很少見）', words: ['great', 'break', 'steak', 'breakage'] },
      { t: 'chips', label: 'ee', words: ['esteem', 'agree', 'degree', 'freedom', 'succeed', 'proceed', 'guarantee', 'engineer', 'referee', 'indeed'] },
      { t: 'chips', label: 'oa', words: ['approach', 'reproach', 'throat', 'boast', 'coastal', 'roast', 'floating', 'oatmeal', 'charcoal', 'cocoa'] },
      { t: 'chips', label: 'ow（念長 o）', words: ['borrow', 'shallow', 'willow', 'sorrow', 'narrow', 'elbow', 'window', 'rainbow', 'follow', 'swallow'] },
      { t: 'chips', label: 'igh', words: ['delight', 'frighten', 'midnight', 'slightly', 'brightness', 'insight', 'lightning'] },
      { t: 'chips', label: 'ie（念長 i）', words: ['denied', 'applied', 'replied', 'satisfied', 'occupied', 'magnified'] },
      { t: 'chips', label: 'ie（念長 e）', words: ['believe', 'achieve', 'relieve', 'brief', 'chief', 'thief', 'fierce', 'pierce'] },
      { t: 'chips', label: 'ue／ui', words: ['pursue', 'rescue', 'avenue', 'argue', 'continue', 'bruise', 'cruise', 'recruit', 'pursuit', 'nuisance'] },
      { t: 'chips', label: 'ei／eigh／ey', words: ['receive', 'ceiling', 'deceive', 'neighbor', 'weight', 'freight', 'eighteen', 'journey', 'chimney', 'obey'] },
      { t: 'note', kind: 'tip', title: '小叮嚀：ea 最容易念錯', lines: [
        'ea 有三種念法。看到 ea 的時候，先試長 e（eat）；念起來覺得怪怪的，再改成短 e（bread）。',
      ] },

      { t: 'h3', text: '六、被 r 控制的母音' },
      { t: 'chips', label: 'ar', words: ['sharpen', 'alarm', 'depart', 'harvest', 'marshal', 'garment', 'particle', 'apartment', 'remarkable', 'guardian', 'marbles', 'partner'] },
      { t: 'chips', label: 'or', words: ['perform', 'absorb', 'reward', 'torment', 'enormous', 'important', 'sorted', 'ordinary', 'transport', 'uniform', 'orbit', 'forbid'] },
      { t: 'chips', label: 'er', words: ['prefer', 'concern', 'modern', 'pattern', 'western', 'discover', 'wilderness', 'permanent', 'interfere', 'whisper'] },
      { t: 'chips', label: 'ir', words: ['thirsty', 'confirm', 'birthday', 'circus', 'circle', 'thirteen', 'squirrel', 'stirring', 'whirlwind'] },
      { t: 'chips', label: 'ur', words: ['disturb', 'survive', 'absurd', 'purchase', 'further', 'curious', 'furniture', 'purpose', 'murmur', 'surface'] },
      { t: 'chips', label: 'air／are／ear', words: ['despair', 'repair', 'staircase', 'prepare', 'compare', 'declare', 'welfare', 'bearable', 'swearing', 'wearable'] },
      { t: 'chips', label: 'ore／oar', words: ['explore', 'restore', 'ignore', 'therefore', 'seashore', 'aboard', 'soaring'] },
      { t: 'chips', label: 'eer／ear／ere', words: ['career', 'volunteer', 'engineer', 'pioneer', 'appear', 'disappear', 'nearby', 'sincere', 'atmosphere', 'interfere'] },
      { t: 'note', kind: 'tip', title: '好消息', lines: [
        'er、ir、ur 這三組念起來**完全一樣**。',
        '所以聽的時候分不出來，是很正常的事，不是你的耳朵有問題。只有在寫字的時候，才需要記住哪個字用哪一種拼法。',
      ] },

      { t: 'h3', text: '七、雙母音' },
      { t: 'chips', label: 'oi', words: ['avoid', 'appoint', 'rejoice', 'poison', 'moisture', 'disappoint', 'ointment', 'turmoil', 'spoiled', 'exploit'] },
      { t: 'chips', label: 'oy', words: ['employ', 'destroy', 'loyal', 'royalty', 'voyage', 'annoy', 'enjoyment', 'oyster', 'decoy', 'corduroy'] },
      { t: 'chips', label: 'ou', words: ['astound', 'devour', 'surround', 'allowance', 'account', 'amount', 'mountain', 'thousand', 'announce', 'pronounce'] },
      { t: 'chips', label: 'ow', words: ['drowsy', 'crowded', 'powder', 'towel', 'however', 'downstairs', 'allowed', 'coward', 'prowler', 'chowder'] },
      { t: 'note', kind: 'tip', title: '小規律', lines: [
        'oi 和 ou 常常出現在字的**中間**；oy 和 ow 常常出現在字的**尾巴**。',
        '所以是 boil 和 boy，不會寫成 boyl。',
      ] },

      { t: 'h3', text: '八、其他母音拼法' },
      { t: 'chips', label: 'oo（長音，像 moon）', words: ['bamboo', 'shampoo', 'gloomy', 'balloon', 'cartoon', 'smooth', 'raccoon', 'spooky', 'groove', 'afternoon'] },
      { t: 'chips', label: 'oo（短音，像 book）', words: ['brookside', 'crooked', 'cookbook', 'woolen', 'football', 'understood', 'mistook', 'childhood', 'neighborhood'] },
      { t: 'chips', label: 'aw／au', words: ['awkward', 'sprawl', 'withdraw', 'lawnmower', 'applaud', 'autumn', 'exhaust', 'laundry', 'astronaut', 'because'] },
      { t: 'chips', label: 'al／all', words: ['although', 'already', 'altogether', 'install', 'recall', 'football', 'waterfall', 'salt', 'halt', 'alter'] },
      { t: 'chips', label: 'ough／augh', words: ['thought', 'brought', 'drought', 'although', 'thorough', 'daughter', 'naughty', 'slaughter', 'caught', 'distraught'] },
      { t: 'note', kind: 'tip', lines: [
        'oo 沒有規則可以套，只能多念幾次記起來。',
        '遇到不確定的字，兩種都念念看，聽聽看哪一種比較像真的英文字。',
      ] },

      { t: 'h3', text: '九、y 當母音用' },
      { t: 'p', text: 'y 是個很有趣的字母。它有時候是子音（yes），有時候會跑去當母音。' },
      { t: 'chips', label: 'y 念 /ī/（在短字的字尾）', words: ['apply', 'deny', 'satisfy', 'occupy', 'identify', 'magnify', 'multiply', 'terrify'] },
      { t: 'chips', label: 'y 念 /ē/（在長字的字尾）', words: ['jealousy', 'energy', 'memory', 'victory', 'mystery', 'sympathy', 'discovery', 'ordinary'] },
      { t: 'chips', label: 'y 念 /i/（在字的中間）', words: ['system', 'symbol', 'mystery', 'gymnasium', 'physical', 'rhythm'] },

      { t: 'h3', text: '十、軟音 c 和軟音 g' },
      { t: 'note', kind: 'think', lines: [
        'c 和 g 後面如果接 **e、i、y**，它們的聲音就會變軟。',
        '　c 從「ㄎ」變成「ㄙ」：cat（硬）→ city（軟）',
        '　g 從「ㄍ」變成「ㄐ」：go（硬）→ giant（軟）',
      ] },
      { t: 'chips', label: '軟音 c', words: ['decide', 'prince', 'distance', 'sincere', 'recent', 'celebrate', 'cinema', 'precise', 'medicine', 'ceremony', 'necessary', 'innocent'] },
      { t: 'chips', label: '軟音 g', words: ['engine', 'danger', 'urgent', 'fragile', 'gigantic', 'energy', 'magic', 'imagine', 'region', 'tragedy', 'generous', 'refrigerator'] },

      { t: 'h3', text: '十一、多音節長字' },
      { t: 'chips', words: ['fantastic', 'established', 'transportation', 'unfortunate', 'independent', 'magnificent', 'disappointment', 'responsibility', 'opportunity', 'encouragement', 'communication', 'extraordinary', 'congratulations', 'considerable', 'particularly', 'environmental', 'unbelievable', 'characteristics'] },
      { t: 'note', kind: 'tip', lines: [
        '這些字看起來很嚇人，先不要急著念。學完第三單元再回來，你會發現它們變簡單了。',
      ] },
    ],
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: 'unit3',
    icon: '✂️',
    num: '第三單元',
    nav: '長單字怎麼切',
    title: '長單字怎麼切',
    blocks: [
      { t: 'goals', items: [
        '知道什麼是音節。',
        '學會六種音節的長相。',
        '用五個規則，把長單字切成一小塊一小塊。',
      ] },
      { t: 'p', text: '這一個單元是進步最快的一招。學會把長字切開，以後看到長字就不必用猜的了。' },
      { t: 'note', kind: 'try', title: '試一試：什麼是音節？', lines: [
        '一個音節，就是嘴巴張開一次、發出的一小段聲音。',
        '把手放在下巴下面，慢慢念 fantastic。下巴是不是掉下來三次？',
        '　fan・tas・tic　→　三個音節',
      ] },

      { t: 'h3', text: '一、六種音節的長相' },
      { t: 'p', text: '每一個音節，一定是下面六種當中的一種。' },
      { t: 'table', head: ['種類', '長相', '例子'], rows: [
        ['關門音節', '子音結尾，母音念短音', 'nap、fan-tas-tic'],
        ['開門音節', '母音結尾，母音念長音', 'he、ro-bot、ti-ger'],
        ['不發音 e', '母音－子音－e', 'hope、com-pete'],
        ['母音組合', '兩個母音在一起', 'rain、ex-plain'],
        ['霸道 r', '母音加上 r', 'bird、for-get'],
        ['子音加 le', '以 -le 結尾', 'ta-ble、jun-gle'],
      ] },
      { t: 'note', kind: 'think', title: '想一想：為什麼叫「關門」和「開門」？', lines: [
        '後面有子音把門關起來，母音被關住了，只能發短短的音。',
        '後面沒有子音擋著，門是開的，母音就可以自由地拉長。',
      ] },

      { t: 'h3', text: '二、切開的五個規則' },
      { t: 'p', text: '請按照下面的順序學習。**點兩個字母中間的縫，就可以下刀。**切對了，字會分開；切錯了，字會搖搖頭。全部切對，它就會念給你聽。' },

      { t: 'h4', text: '規則一　兩個子音，從中間切開' },
      { t: 'ex', w: 'napkin', s: 'nap-kin' },
      { t: 'split', words: ['rab-bit', 'bas-ket', 'mag-net', 'sub-mit', 'con-tent', 'tan-trum', 'ad-mit', 'wal-nut', 'prob-lem', 'hap-pen', 'con-flict', 'splen-did', 'ex-pert', 'black-smith'] },
      { t: 'note', kind: 'tip', title: '注意', lines: [
        'sh、ch、th、ck、ph 這幾組不可以拆開，它們是一體的。',
        '　teach・er　（○）',
        '　teac・her　（×）',
      ] },

      { t: 'h4', text: '規則二　只有一個子音，切在它的前面' },
      { t: 'p', text: '第一個母音念長音。' },
      { t: 'ex', w: 'robot', s: 'ro-bot' },
      { t: 'split', words: ['ti-ger', 'mu-sic', 'ba-sic', 'o-pen', 'spi-der', 'be-gin', 'lo-cate', 'fe-male', 'pi-lot', 'hu-man', 'si-lent', 'fa-mous', 'mo-ment', 'cra-zy', 'de-cent'] },

      { t: 'h4', text: '規則三　念起來不像真的字，就退一格' },
      { t: 'p', text: '如果照規則二切開，念起來不像真的英文字，就把切點往後退一格，切在子音的後面。這時候第一個母音念短音。' },
      { t: 'demo', text: 'robin　→　先試 ro・bin（念起來不像真的字）→　改成 rob・in（對了！）' },
      { t: 'split', words: ['cab-in', 'lem-on', 'plan-et', 'sev-en', 'drag-on', 'wag-on', 'riv-er', 'mod-el', 'cam-el', 'pun-ish', 'sat-in', 'clos-et', 'med-al', 'prom-ise'] },
      { t: 'note', kind: 'tip', title: '小叮嚀：這一條最重要', lines: [
        '這個規則真正要學的，不是背下來，而是養成一個好習慣——',
        '**先試長音，念起來怪怪的，就改成短音。**',
        '願意再試一次，比記住規則有用得多。',
      ] },

      { t: 'h4', text: '規則四　字尾是 -le，從後面往回數三個字母' },
      { t: 'ex', w: 'table', s: 'ta-ble' },
      { t: 'split', words: ['pur-ple', 'can-dle', 'jun-gle', 'sim-ple', 'whis-tle', 'tur-tle', 'mar-ble', 'gen-tle', 'stum-ble', 'sprin-kle', 'ea-gle', 'ti-tle', 'no-ble'] },

      { t: 'h4', text: '規則五　兩個母音不是一組的，從中間切開' },
      { t: 'ex', w: 'lion', s: 'li-on' },
      { t: 'split', words: ['di-et', 'cre-ate', 'po-em', 'ru-in', 'flu-id', 'ne-on', 'tri-al', 'qui-et', 'ri-ot', 'du-et', 'gi-ant', 'sci-ence', 'vi-o-lin'] },

      { t: 'h4', text: '補充　先撕掉字首和字尾' },
      { t: 'p', text: '遇到很長的字，先把前面的字首、後面的字尾拿掉，再處理中間的部分。' },
      { t: 'demo', text: 'unhappiness　→　un ＋ happi ＋ ness　→　un・hap・pi・ness' },
      { t: 'split', words: ['re-place-ment', 'dis-con-nect-ed', 'pre-view-ing', 'un-break-a-ble', 'mis-treat-ment'] },
    ],
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: 'unit4',
    icon: '🧩',
    num: '第四單元',
    nav: '字首',
    title: '字首',
    blocks: [
      { t: 'goals', items: [
        '認識常見的字首和它們的意思。',
        '學會用字首推測生字的意思。',
      ] },
      { t: 'p', text: '字首加在一個字的前面，會改變這個字的意思。學會了字首，就算遇到沒看過的字，也常常猜得出大概的意思。' },

      { t: 'h3', text: '一、最重要的八個字首' },
      { t: 'p', text: '這八個字首，就佔了所有帶字首單字的四分之三左右。請先學這八個。' },
      { t: 'table', head: ['字首', '意思', '例子'], rows: [
        ['**un-**', '不、相反', 'unfair, unlock, unable, unusual, unexpected, uncover, unequal, unfamiliar, unpleasant, uncertain'],
        ['**re-**', '再一次、回去', 'rebuild, return, replace, review, reconsider, recycle, refresh, remind, retreat, rearrange'],
        ['**in-／im-／ir-／il-**', '不', 'incorrect, impossible, irregular, illegal, invisible, informal, impatient, irresponsible, illogical, inactive'],
        ['**dis-**', '不、相反', 'dislike, disagree, disappear, discomfort, dishonest, disorder, distrust, disconnect, discourage, disqualify'],
        ['**en-／em-**', '使變成', 'enable, enjoy, empower, encourage, endanger, enlarge, enrich, embrace, enclose, entitle'],
        ['**non-**', '不、非', 'nonstop, nonsense, nonfiction, nonprofit, nonliving, nonverbal, nonviolent'],
        ['**over-**', '太過頭', 'overflow, overdue, overlook, overwhelm, overcome, overtake, overreact, overcrowded, overheat'],
        ['**mis-**', '錯誤地', 'mistake, misplace, misjudge, misunderstand, mislead, misbehave, misprint, mistreat, misfortune'],
      ] },

      { t: 'h3', text: '二、其他常見的字首' },
      { t: 'table', head: ['字首', '意思', '例子'], rows: [
        ['**pre-**', '在……之前', 'preview, predict, prepare, prevent, prehistoric, precaution, preschool, preheat'],
        ['**sub-**', '在下面', 'submarine, submit, subject, substandard, subway, subtract, subtitle, submerge'],
        ['**inter-**', '在……之間', 'interrupt, internet, interview, international, interact, intersection, interfere, interval'],
        ['**trans-**', '跨越', 'transport, transfer, translate, transform, transplant, transmit, transaction, transparent'],
        ['**super-**', '超過、在上面', 'superman, supermarket, supervise, superior, superhero, supersonic, superstar'],
        ['**anti-**', '對抗', 'antifreeze, antibiotic, antisocial, antiseptic, antibody, anticlimax'],
        ['**de-**', '往下、取消', 'defrost, deflate, descend, decrease, depart, detach, decline, deduct'],
        ['**mid-**', '中間', 'midnight, midway, midterm, midsummer, midfield, midpoint'],
        ['**ex-**', '出去、以前的', 'exit, export, expand, explode, exclude, extract, exhale'],
        ['**co-／con-／com-**', '一起', 'cooperate, connect, combine, community, companion, conference, contract'],
        ['**auto-**', '自己', 'automatic, automobile, autograph, autobiography'],
        ['**tele-**', '遠方', 'telephone, telescope, television, telegraph'],
      ] },
      { t: 'note', kind: 'think', title: '想一想：in- 為什麼有時候會變成 im- 呢？', lines: [
        '因為念起來比較順口。',
        '請念念看「in-possible」，嘴巴是不是很卡？再念念看「impossible」，順多了吧。',
        '所以遇到 p、b、m 就用 **im-**，遇到 r 就用 **ir-**，遇到 l 就用 **il-**。',
      ] },
    ],
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: 'unit5',
    icon: '🏷️',
    num: '第五單元',
    nav: '字尾',
    title: '字尾',
    blocks: [
      { t: 'goals', items: [
        '學會加字尾時的三個拼字規則。',
        '認識常見的字尾，知道它們會把單字變成什麼詞類。',
      ] },

      { t: 'h3', text: '一、會改變文法的字尾' },
      { t: 'p', text: '**-s、-es、-ed、-ing、-er、-est**' },
      { t: 'p', text: '這幾個字尾不會改變單字的意思，只會改變用法。' },

      { t: 'h4', text: '加上去的時候，要注意三個規則' },
      { t: 'p', text: '**規則一　把最後一個子音寫兩次**：只有一個音節＋只有一個母音＋子音結尾。' },
      { t: 'pairs', items: [['hop', 'hopping'], ['run', 'running'], ['big', 'bigger'], ['swim', 'swimming'], ['plan', 'planned'], ['stop', 'stopped'], ['thin', 'thinnest'], ['grab', 'grabbing']] },
      { t: 'p', text: '**規則二　把 e 去掉**：字尾是不發音的 e＋要加的字尾是母音開頭。' },
      { t: 'pairs', items: [['hope', 'hoping'], ['make', 'making'], ['use', 'usable'], ['safe', 'safest'], ['write', 'writing'], ['decide', 'deciding'], ['value', 'valuable']] },
      { t: 'p', text: '**規則三　把 y 改成 i**：子音加 y 結尾（但是加 -ing 的時候不改）。' },
      { t: 'pairs', items: [['happy', 'happiest'], ['carry', 'carried'], ['baby', 'babies'], ['study', 'studied'], ['rely', 'reliable'], ['beauty', 'beautiful']] },
      { t: 'p', text: '**但是**：carry → carrying（加 -ing 的時候，y 不改）。' },

      { t: 'h4', text: '-ed 的三種念法' },
      { t: 'chips', label: '念 /t/', words: ['walked', 'jumped', 'missed', 'watched', 'laughed', 'finished'] },
      { t: 'chips', label: '念 /d/', words: ['played', 'cleaned', 'opened', 'followed', 'traveled', 'remembered'] },
      { t: 'chips', label: '念 /ɪd/', words: ['wanted', 'needed', 'decided', 'invited', 'protected', 'collected'] },
      { t: 'note', kind: 'tip', lines: [
        '這三種念法不必背。念念看，哪一種比較順口，答案就是那一種。',
      ] },

      { t: 'h3', text: '二、會改變詞類的字尾' },
      { t: 'h4', text: '（一）變成名詞' },
      { t: 'table', head: ['字尾', '例子'], rows: [
        ['**-tion／-sion**（念「訓」）', 'action, question, decision, permission, celebration, education, invention, discussion, direction, protection, information, conclusion'],
        ['**-ment**', 'movement, payment, argument, equipment, development, agreement, treatment, entertainment, achievement, punishment'],
        ['**-ness**', 'kindness, darkness, illness, happiness, awareness, weakness, fitness, brightness, loneliness, willingness'],
        ['**-er／-or**（做這件事的人）', 'teacher, farmer, actor, sailor, inventor, director, visitor, employer, manager, translator'],
        ['**-ist**（做這一行的人）', 'artist, dentist, scientist, tourist, journalist, pianist, specialist, novelist'],
        ['**-ity／-ty**', 'activity, ability, safety, majority, community, quality, reality, curiosity, responsibility'],
        ['**-ance／-ence**', 'distance, importance, appearance, confidence, difference, silence, patience, experience'],
      ] },

      { t: 'h4', text: '（二）變成形容詞' },
      { t: 'table', head: ['字尾', '意思', '例子'], rows: [
        ['**-ful**', '充滿……', 'helpful, painful, wonderful, beautiful, powerful, successful, thoughtful, respectful, peaceful'],
        ['**-less**', '沒有……', 'hopeless, careless, endless, worthless, harmless, fearless, useless, breathless, restless'],
        ['**-able／-ible**', '可以被……', 'comfortable, reasonable, terrible, possible, valuable, enjoyable, responsible, flexible, remarkable'],
        ['**-ous**', '有……性質', 'famous, dangerous, nervous, enormous, generous, curious, jealous, mysterious, obvious'],
        ['**-ive**', '有……傾向', 'active, creative, expensive, sensitive, attractive, protective, positive, imaginative'],
        ['**-al**', '和……有關', 'natural, personal, musical, original, national, physical, magical, practical, historical'],
        ['**-y**', '有一點……', 'cloudy, sticky, greedy, healthy, wealthy, guilty, thirsty, mighty'],
      ] },
      { t: 'note', kind: 'think', lines: [
        '-ful 和 -less 剛好是一對相反的字尾。',
        '　helpful（很有幫助的）　↔　helpless（沒有辦法的）',
        '學會一個，順便就多會一個。',
      ] },

      { t: 'h4', text: '（三）變成副詞' },
      { t: 'chips', label: '-ly', words: ['quickly', 'safely', 'carefully', 'immediately', 'suddenly', 'completely', 'especially', 'probably', 'seriously', 'gradually'] },

      { t: 'h4', text: '（四）變成動詞' },
      { t: 'chips', label: '-ize、-ify、-en', words: ['organize', 'realize', 'apologize', 'recognize', 'simplify', 'identify', 'satisfy', 'strengthen', 'brighten', 'sharpen'] },
    ],
  },

  /* ---------------------------------------------------------------- 6 */
  {
    id: 'unit6',
    icon: '🏆',
    num: '第六單元',
    nav: '綜合練習',
    title: '綜合練習',
    blocks: [
      { t: 'goals', items: [
        '把前面學到的規則，通通用出來。',
      ] },

      { t: 'h3', text: '練習一　把下面的字切開' },
      { t: 'p', text: '從簡單排到難。點兩個字母中間的縫下刀；全部切對，它就會念給你聽。' },
      { t: 'split', words: [
        'pic-nic', 'ti-ger', 'cab-in', 'kitch-en', 'pur-ple', 'con-test',
        'mo-ment', 'sev-en', 'tum-ble', 'com-plete', 'mag-net', 'si-lent',
        'pun-ish', 'bi-cy-cle', 'fan-tas-tic', 're-mem-ber', 'im-por-tant',
        'cel-e-brate', 'de-ter-mine', 'op-por-tu-ni-ty', 'in-de-pen-dent',
        'in-for-ma-tion', 're-spon-si-bil-i-ty', 'um-brel-la', 'cal-en-dar',
        'con-ti-nent', 'ad-mi-ra-tion', 'un-for-tu-nate', 'in-ves-ti-ga-tion',
        'char-ac-ter-is-tic',
      ] },
      { t: 'note', kind: 'tip', lines: [
        '在紙上練習的時候，請拿一枝筆，真的把線畫下去——用手切，比在腦袋裡想有效得多。',
        '等到很熟練以後，再改成用想的。',
      ] },

      { t: 'h3', text: '練習二　把下面的字拆成三塊' },
      { t: 'p', text: '字首　＋　字根　＋　字尾。點一下單字，看它怎麼拆。' },
      { t: 'parts', items: [
        { w: 'unhelpful', parts: [['un', '不'], ['help', '幫忙'], ['ful', '充滿']], zh: '沒有幫助的' },
        { w: 'disagreement', parts: [['dis', '不'], ['agree', '同意'], ['ment', '名詞字尾']], zh: '意見不合' },
        { w: 'misunderstanding', parts: [['mis', '錯誤地'], ['understand', '理解'], ['ing', '名詞字尾']], zh: '誤會' },
        { w: 'reconstruction', parts: [['re', '再一次'], ['construct', '建造'], ['ion', '名詞字尾']], zh: '重建' },
        { w: 'unbelievable', parts: [['un', '不'], ['believe', '相信'], ['able', '可以被……']], zh: '難以置信的' },
        { w: 'internationally', parts: [['inter', '在……之間'], ['nation', '國家'], ['al', '形容詞字尾'], ['ly', '副詞字尾']], zh: '國際上' },
        { w: 'unpredictable', parts: [['un', '不'], ['predict', '預測'], ['able', '可以被……']], zh: '無法預測的' },
        { w: 'disrespectfully', parts: [['dis', '不'], ['respect', '尊重'], ['ful', '充滿'], ['ly', '副詞字尾']], zh: '沒有禮貌地' },
        { w: 'overachievement', parts: [['over', '太過頭'], ['achieve', '達成'], ['ment', '名詞字尾']], zh: '超出預期的成就' },
        { w: 'incomprehensible', parts: [['in', '不'], ['comprehend', '理解'], ['ible', '可以被……']], zh: '無法理解的' },
        { w: 'unforgettable', parts: [['un', '不'], ['forget', '忘記'], ['able', '可以被……']], zh: '令人難忘的' },
        { w: 'disappointment', parts: [['dis', '不'], ['appoint', '約定、期待'], ['ment', '名詞字尾']], zh: '失望' },
        { w: 'reconsideration', parts: [['re', '再一次'], ['consider', '考慮'], ['ation', '名詞字尾']], zh: '重新考慮' },
        { w: 'misinformation', parts: [['mis', '錯誤地'], ['inform', '告知'], ['ation', '名詞字尾']], zh: '錯誤的訊息' },
        { w: 'uncomfortable', parts: [['un', '不'], ['comfort', '舒適'], ['able', '可以被……']], zh: '不舒服的' },
      ] },

      { t: 'h3', text: '練習三　從一個字根長出一串字' },
      { t: 'p', text: '這個練習最有成就感。認識一個字根，等於一次多會八個字。' },
      { t: 'family', items: [
        { root: 'act', gloss: '做', words: ['action', 'active', 'actor', 'react', 'reaction', 'activity', 'inactive', 'interact', 'enact'] },
        { root: 'form', gloss: '形狀', words: ['formal', 'format', 'reform', 'inform', 'perform', 'transform', 'information', 'formation', 'uniform'] },
        { root: 'port', gloss: '搬運', words: ['import', 'export', 'report', 'support', 'portable', 'transportation', 'deport', 'porter'] },
        { root: 'press', gloss: '壓', words: ['pressure', 'impress', 'express', 'depress', 'compress', 'expression', 'impressive', 'suppress'] },
        { root: 'struct', gloss: '建造', words: ['structure', 'construct', 'instruct', 'destruction', 'instruction', 'reconstruct'] },
        { root: 'vis／vid', gloss: '看', words: ['vision', 'visible', 'visitor', 'television', 'evidence', 'provide', 'invisible', 'revise'] },
        { root: 'spect', gloss: '看', words: ['inspect', 'respect', 'suspect', 'spectacle', 'spectator', 'perspective', 'inspection'] },
        { root: 'dict', gloss: '說', words: ['predict', 'dictate', 'dictionary', 'contradict', 'verdict', 'prediction'] },
      ] },
    ],
  },

  /* ---------------------------------------------------------------- 結語 */
  {
    id: 'end',
    icon: '🌟',
    nav: '結語',
    title: '結語',
    blocks: [
      { t: 'p', text: '第三單元的音節規則見效最快，練習幾個星期就看得出差別。' },
      { t: 'p', text: '第四、第五單元的字首和字尾，要花上好幾個月才會慢慢感覺到效果。不過，那正是單字量真正變多的地方，值得我們慢慢來。' },
      { t: 'p', text: '每次練習的時間不必太長。' },
      { t: 'kicker', text: '專心的十五分鐘，比不甘願的四十分鐘有用。' },
    ],
  },
];

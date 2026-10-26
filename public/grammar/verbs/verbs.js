/* Irregular Verbs — the data.

   The 64 verbs of the book's own reference list, in its two columns: the
   simple form and the simple past. The Chinese is this site's own.

   NO PAST PARTICIPLE. The book's list at this level has two columns, not
   three, because the present perfect is not in this book — adding a third
   column would teach a tense the course has not reached and turn a page you
   can memorise into one you cannot.

   THE GROUPING IS THIS PAGE'S OWN. The reference list is alphabetical, which
   is how you look a verb up and the worst possible way to learn sixty-four of
   them. So the page also groups them by what the past form actually does, and
   says so. Nine groups: the ones that do not change at all, the six that
   rhyme on -ought and -aught, i becoming a, the -ew four, the ten that take an
   o, the ones ending in -t and those ending in -d, the -old/-ood/-ound set,
   and the thirteen that are simply themselves. Alphabetical order is still
   one tap away, because a reference list has to work as a reference.

   `sayPast` overrides what the voice says for a past form. Two verbs need it:
   read, whose spelling does not change but whose sound does, and be, whose
   past is two words with a comma the voice would otherwise stumble over.
*/

const VERBS = {
  title: 'Irregular Verbs',
  titleZh: '不規則動詞總表',
  kicker: '基礎英文文法 · 查閱用',

  intro: {
    en: 'Sixty-four verbs that do not take -ed. Grouped by what the past form actually does, because that is how you learn them, with alphabetical order one tap away for when you only need to look one up.',
    zh: '六十四個不加 -ed 的動詞。依「過去式怎麼變」分組，因為那才是記得住的方式；需要單純查某個字時，字母順序只差一個切換。',
  },

  source: {
    en: 'The verbs and their past forms are the reference list from Basic English Grammar (Azar & Hagen, 4th edition). The grouping, the Chinese and the notes are written for this page.',
    zh: '動詞與過去式取自《Basic English Grammar》（Azar & Hagen，第四版）的附錄清單；分組方式、中文與說明皆為本站自行撰寫。',
  },

  groups: [
    {
      id: 'same',
      en: 'No change at all',
      zh: '完全不變',
      note: {
        en: 'The past looks exactly like the present. Only the time words around it tell you which one you are hearing.',
        zh: '過去式和現在式長得一模一樣，只能靠句子裡的時間用語判斷。',
      },
      items: [
        { base: 'cost', past: 'cost', zh: '花費（金錢）' },
        { base: 'cut', past: 'cut', zh: '切、剪' },
        { base: 'hit', past: 'hit', zh: '打、撞' },
        { base: 'hurt', past: 'hurt', zh: '受傷、弄痛' },
        { base: 'put', past: 'put', zh: '放' },
        { base: 'read', past: 'read', zh: '讀', sayPast: 'red' },
        { base: 'shut', past: 'shut', zh: '關上' },
      ],
    },
    {
      id: 'ought',
      en: 'The -ought and -aught six',
      zh: '-ought 與 -aught 六個',
      note: {
        en: 'All six rhyme. The two spellings sound identical, so learn them as one sound with two ways of writing it.',
        zh: '六個都押同一個韻。兩種拼法發音完全相同，所以當成「一個音、兩種寫法」來記。',
      },
      items: [
        { base: 'bring', past: 'brought', zh: '帶來' },
        { base: 'buy', past: 'bought', zh: '買' },
        { base: 'catch', past: 'caught', zh: '抓住、趕上' },
        { base: 'fight', past: 'fought', zh: '打架、戰鬥' },
        { base: 'teach', past: 'taught', zh: '教' },
        { base: 'think', past: 'thought', zh: '想、認為' },
      ],
    },
    {
      id: 'i-a',
      en: 'i becomes a',
      zh: 'i 變成 a',
      note: {
        en: 'One letter moves in the middle of the word and nothing else changes.',
        zh: '字中間的一個字母換掉，其他地方都不動。',
      },
      items: [
        { base: 'begin', past: 'began', zh: '開始' },
        { base: 'drink', past: 'drank', zh: '喝' },
        { base: 'ring', past: 'rang', zh: '（鈴）響' },
        { base: 'sing', past: 'sang', zh: '唱歌' },
        { base: 'sit', past: 'sat', zh: '坐' },
        { base: 'swim', past: 'swam', zh: '游泳' },
      ],
    },
    {
      id: 'ew',
      en: 'The -ew four',
      zh: '-ew 四個',
      note: {
        en: 'All four end in the same two letters and the same sound.',
        zh: '四個的字尾字母相同，發音也相同。',
      },
      items: [
        { base: 'fly', past: 'flew', zh: '飛' },
        { base: 'grow', past: 'grew', zh: '生長、種植' },
        { base: 'know', past: 'knew', zh: '知道' },
        { base: 'throw', past: 'threw', zh: '丟' },
      ],
    },
    {
      id: 'o',
      en: 'An o arrives',
      zh: '出現一個 o',
      note: {
        en: 'The vowel in the middle becomes an o. The largest group here, and the one worth saying aloud most often.',
        zh: '字中間的母音變成 o。這是最大的一組，也是最值得反覆唸出聲的一組。',
      },
      items: [
        { base: 'break', past: 'broke', zh: '打破' },
        { base: 'choose', past: 'chose', zh: '選擇' },
        { base: 'drive', past: 'drove', zh: '開車' },
        { base: 'forget', past: 'forgot', zh: '忘記' },
        { base: 'get', past: 'got', zh: '得到' },
        { base: 'ride', past: 'rode', zh: '騎、搭乘' },
        { base: 'speak', past: 'spoke', zh: '說（語言）' },
        { base: 'wake', past: 'woke', zh: '醒來' },
        { base: 'wear', past: 'wore', zh: '穿、戴' },
        { base: 'write', past: 'wrote', zh: '寫' },
      ],
    },
    {
      id: 't',
      en: 'Ends in -t',
      zh: '字尾變成 -t',
      note: {
        en: 'Close to the regular -ed ending in sound, which is why these are the easiest of the irregulars to remember.',
        zh: '發音接近規則變化的 -ed，所以這一組是不規則動詞裡最好記的。',
      },
      items: [
        { base: 'build', past: 'built', zh: '建造' },
        { base: 'feel', past: 'felt', zh: '覺得' },
        { base: 'leave', past: 'left', zh: '離開' },
        { base: 'lose', past: 'lost', zh: '失去、輸' },
        { base: 'meet', past: 'met', zh: '遇見' },
        { base: 'send', past: 'sent', zh: '寄、送' },
        { base: 'sleep', past: 'slept', zh: '睡覺' },
        { base: 'spend', past: 'spent', zh: '花費（時間、金錢）' },
      ],
    },
    {
      id: 'd',
      en: 'Ends in -d',
      zh: '字尾變成 -d',
      note: {
        en: 'Said and paid are spelled as they are and pronounced to rhyme with bed and made — the spelling is not a guide here.',
        zh: 'said 和 paid 的拼法如此，但發音分別押 bed 和 made 的韻——這一組不能看拼法猜發音。',
      },
      items: [
        { base: 'have', past: 'had', zh: '有' },
        { base: 'hear', past: 'heard', zh: '聽到' },
        { base: 'make', past: 'made', zh: '做、製造' },
        { base: 'pay', past: 'paid', zh: '付錢' },
        { base: 'say', past: 'said', zh: '說' },
      ],
    },
    {
      id: 'ound',
      en: 'The -old, -ood and -ound set',
      zh: '-old、-ood、-ound 一組',
      note: {
        en: 'Understand follows stand, because it is stand with a word in front of it. That is worth noticing: a compound verb keeps the past form of the verb inside it.',
        zh: 'understand 跟著 stand 變，因為它就是 stand 前面加了一個字。這點值得注意：複合動詞會沿用裡面那個動詞的過去式。',
      },
      items: [
        { base: 'find', past: 'found', zh: '找到' },
        { base: 'sell', past: 'sold', zh: '賣' },
        { base: 'stand', past: 'stood', zh: '站' },
        { base: 'tell', past: 'told', zh: '告訴' },
        { base: 'understand', past: 'understood', zh: '了解' },
      ],
    },
    {
      id: 'own',
      en: 'One of a kind',
      zh: '各自為政',
      note: {
        en: 'No pattern to lean on. These thirteen are learnt one at a time — and they are also the most common verbs in the language, so they come back often enough to stick.',
        zh: '沒有規則可以依靠。這十三個只能一個一個記——但它們也是英文裡最常用的動詞，出現次數夠多，記得住。',
      },
      items: [
        { base: 'be', past: 'was, were', zh: '是、在', sayPast: 'was. were.' },
        { base: 'become', past: 'became', zh: '變成' },
        { base: 'come', past: 'came', zh: '來' },
        { base: 'do', past: 'did', zh: '做' },
        { base: 'eat', past: 'ate', zh: '吃' },
        { base: 'fall', past: 'fell', zh: '掉落、跌倒' },
        { base: 'give', past: 'gave', zh: '給' },
        { base: 'go', past: 'went', zh: '去' },
        { base: 'hide', past: 'hid', zh: '躲、藏' },
        { base: 'run', past: 'ran', zh: '跑' },
        { base: 'see', past: 'saw', zh: '看見' },
        { base: 'take', past: 'took', zh: '拿、搭乘' },
        { base: 'win', past: 'won', zh: '贏' },
      ],
    },
  ],

  /* Pairs that this list puts near each other and that learners then mix up.
     Written for this page: every one is two verbs from the table above whose
     past forms sound or look alike. */
  traps: [
    {
      a: { en: 'think → thought', zh: '想、認為' },
      b: { en: 'teach → taught', zh: '教' },
      note: { en: 'Identical sound, different spelling.', zh: '發音完全相同，拼法不同。' },
    },
    {
      a: { en: 'read → read', zh: '讀（過去式唸作 red）' },
      b: { en: 'lead → led', zh: '帶領（不在本表，但常被一起問）' },
      note: { en: 'Read keeps its spelling and changes its sound; most verbs do the opposite.', zh: 'read 拼法不變、發音改變；大多數動詞剛好相反。' },
    },
    {
      a: { en: 'fall → fell', zh: '掉落' },
      b: { en: 'feel → felt', zh: '覺得' },
      note: { en: 'Two letters apart in the present, and easy to swap in the past.', zh: '現在式只差兩個字母，過去式很容易互相說錯。' },
    },
    {
      a: { en: 'find → found', zh: '找到' },
      b: { en: 'found → founded', zh: '創立（規則變化，不是 find 的過去式）' },
      note: { en: 'Found is also a regular verb of its own meaning to establish.', zh: 'found 本身也是一個規則動詞，意思是「創立」。' },
    },
  ],
};

VERBS.count = VERBS.groups.reduce((n, g) => n + g.items.length, 0);

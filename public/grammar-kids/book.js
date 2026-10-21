/* Sentence Lab — the map of the course.

   The ten-to-twelve-year-olds' version of /grammar/. Same machinery entirely:
   this page supplies its own map, its own content files and a stylesheet that
   redefines the palette and the sizes, and then loads ../grammar/render.js and
   ../grammar/hub.js unchanged. A fix to the renderer reaches both courses.

   Two things differ from the adult course, and both are deliberate.

   It is a SELECTION, not the whole book. The adult page carries all fifteen
   chapters and 133 sections because an adult uses it as a reference. A child
   of ten does not need count and noncount nouns, expressions of quantity or
   the word order of adjectives, and putting them on the page would say the
   course is longer than it is. Nine units, chosen for what this age is asked
   to say and write.

   A chapter is called a UNIT here, and the units are numbered from one rather
   than carrying Azar's chapter numbers — "Unit 3" means something to a child
   and "Chapter 13" does not. `source` on each unit records which chapters of
   the book it draws on, so the two courses can still be lined up.

   Where a unit gathers material the book spreads across chapters, it says so.
   Unit 5 is the clearest case: where things are comes from 1-8 and there
   is/there are from 5-4, and for a child those are one idea.
*/

const BOOK = {
  title: 'Sentence Lab',
  titleZh: '句子實驗室',
  kicker: '國小高年級 · 基礎文法',

  /* Read by the shared renderer and hub, which default to the adult course's
     wording. Here a chapter is a unit. */
  labels: {
    unitEn: 'Unit',
    unitAbbr: 'UNIT',
    pluralEn: 'units',
    partZh: '節',
  },

  lead: {
    en: 'Nine units, from am, is and are to can and can\u2019t. Each section explains one idea, shows you the pattern, and lets you try it \u2014 English first, and the Chinese is one tap away.',
    zh: '九個單元，從 am、is、are 一路到 can 和 can\u2019t。每一節說明一個觀念、給你看句型，再讓你試試看\u2014\u2014英文在前，中文只差一個「中」。',
  },

  sourceNote: {
    en: 'The grammar follows Basic English Grammar (Azar & Hagen, 4th edition), selected and reordered for this age. The explanations, examples and practice here are written for this page.',
    zh: '文法內容依《Basic English Grammar》（Azar & Hagen，第四版），並針對這個年紀挑選與重新排序；本頁的說明、例句與練習皆為本站自行撰寫。',
  },

  chapters: [
    {
      n: 1,
      id: 'unit01',
      en: 'Am, Is, Are',
      zh: '我是、你是、他是',
      source: { en: 'Chapter 1', zh: '原書第 1 章' },
      built: true,
      sections: [
        { n: '1-1', en: 'I am, you are, he is', zh: '三種形式：am、is、are' },
        { n: '1-2', en: 'One thing: a and an', zh: '一個東西：a 和 an' },
        { n: '1-3', en: 'Two or more', zh: '兩個以上' },
        { n: '1-4', en: 'Short forms: I’m, she’s, they’re', zh: '縮寫：I’m、she’s、they’re' },
        { n: '1-5', en: 'Saying no: isn’t, aren’t', zh: '說「不是」：isn’t、aren’t' },
        { n: '1-6', en: 'Where it is', zh: '東西在哪裡' },
        { n: '1-7', en: 'Three ways to finish', zh: '三種結尾' },
      ],
    },
    {
      n: 2,
      id: 'unit02',
      en: 'Asking Questions',
      zh: '問問題',
      source: { en: 'Chapter 2', zh: '原書第 2 章' },
      built: false,
      sections: [
        { n: '2-1', en: 'Are you…? Is it…?', zh: 'Are you…？Is it…？' },
        { n: '2-2', en: 'Yes, I am. No, I’m not.', zh: '簡答：Yes, I am. / No, I’m not.' },
        { n: '2-3', en: 'Where is it?', zh: '它在哪裡？' },
        { n: '2-4', en: 'What is it? Who is it?', zh: '那是什麼？那是誰？' },
        { n: '2-5', en: 'This, that, these, those', zh: 'this、that、these、those' },
      ],
    },
    {
      n: 3,
      id: 'unit03',
      en: 'What I Do Every Day',
      zh: '我每天做的事',
      source: { en: 'Chapter 3', zh: '原書第 3 章' },
      built: false,
      sections: [
        { n: '3-1', en: 'I play, he plays', zh: 'I play、he plays' },
        { n: '3-2', en: 'The -s on he, she and it', zh: 'he、she、it 的 -s' },
        { n: '3-3', en: 'Always, usually, sometimes, never', zh: '頻率副詞' },
        { n: '3-4', en: 'I don’t, he doesn’t', zh: '否定：don’t、doesn’t' },
        { n: '3-5', en: 'Do you…? Does he…?', zh: '問句：Do you…？Does he…？' },
      ],
    },
    {
      n: 4,
      id: 'unit04',
      en: 'What I Am Doing Now',
      zh: '我現在正在做的事',
      source: { en: 'Chapter 4', zh: '原書第 4 章' },
      built: false,
      sections: [
        { n: '4-1', en: 'I am playing', zh: 'be ＋ -ing' },
        { n: '4-2', en: 'Spelling the -ing', zh: '-ing 的拼法' },
        { n: '4-3', en: 'Questions and negatives', zh: '問句與否定' },
        { n: '4-4', en: 'Every day or right now?', zh: '每天，還是現在？' },
      ],
    },
    {
      n: 5,
      id: 'unit05',
      en: 'Where Things Are',
      zh: '東西在哪裡',
      source: { en: 'Chapters 1 and 5', zh: '原書第 1、5 章' },
      built: false,
      sections: [
        { n: '5-1', en: 'In, on, under, next to', zh: 'in、on、under、next to' },
        { n: '5-2', en: 'There is, there are', zh: 'there is、there are' },
        { n: '5-3', en: 'How many are there?', zh: '有幾個？' },
        { n: '5-4', en: 'It is hot. It is three o’clock.', zh: '用 it 說天氣和時間' },
      ],
    },
    {
      n: 6,
      id: 'unit06',
      en: 'Words for People and Things',
      zh: '人和東西的說法',
      source: { en: 'Chapter 6', zh: '原書第 6 章' },
      built: false,
      sections: [
        { n: '6-1', en: 'One and more than one', zh: '單數與複數' },
        { n: '6-2', en: 'Plurals that break the rule', zh: '不規則複數' },
        { n: '6-3', en: 'My, your, his, her', zh: '我的、你的、他的、她的' },
        { n: '6-4', en: 'Whose is it?', zh: '這是誰的？' },
        { n: '6-5', en: 'I and me, he and him', zh: '主格與受格' },
      ],
    },
    {
      n: 7,
      id: 'unit07',
      en: 'Yesterday',
      zh: '昨天',
      source: { en: 'Chapter 8', zh: '原書第 8 章' },
      built: false,
      sections: [
        { n: '7-1', en: 'Was and were', zh: 'was 與 were' },
        { n: '7-2', en: 'Adding -ed', zh: '加 -ed' },
        { n: '7-3', en: 'Verbs that change instead', zh: '不規則動詞' },
        { n: '7-4', en: 'I didn’t, did you?', zh: '否定與問句' },
        { n: '7-5', en: 'Yesterday, last week, two days ago', zh: '過去的時間說法' },
      ],
    },
    {
      n: 8,
      id: 'unit08',
      en: 'Tomorrow',
      zh: '明天',
      source: { en: 'Chapter 10', zh: '原書第 10 章' },
      built: false,
      sections: [
        { n: '8-1', en: 'I am going to…', zh: 'be going to' },
        { n: '8-2', en: 'I will…', zh: 'will' },
        { n: '8-3', en: 'Asking about tomorrow', zh: '問未來的事' },
        { n: '8-4', en: 'Tomorrow, next week, in two days', zh: '未來的時間說法' },
      ],
    },
    {
      n: 9,
      id: 'unit09',
      en: 'Can and Can’t',
      zh: '會與不會',
      source: { en: 'Chapter 12', zh: '原書第 12 章' },
      built: false,
      sections: [
        { n: '9-1', en: 'I can swim', zh: 'can 的用法' },
        { n: '9-2', en: 'Can and can’t sound different', zh: 'can 與 can’t 的發音' },
        { n: '9-3', en: 'Can you…?', zh: 'Can you…？' },
        { n: '9-4', en: 'I could, when I was small', zh: 'could：過去的能力' },
      ],
    },
  ],

  // No reference shelf here: a child looks things up in the unit, not in an
  // appendix. The hub leaves the whole section out when this is empty.
  extras: [],
};

BOOK.built = BOOK.chapters.filter((c) => c.built);

BOOK.count = BOOK.chapters.reduce((n, c) => n + c.sections.length, 0);

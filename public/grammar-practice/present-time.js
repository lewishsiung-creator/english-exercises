/* Grammar Practice — 現在時間.

   The first point of the chapter, and the first set on this page that is
   Lewis's own writing rather than written for the page. It is his handout
   "Exercise 31 · Reading & Grammar: Simple Present vs. Present Progressive"
   — the four paragraphs, their 中譯, the thirteen choices, the 判斷關鍵 for
   each one and the vocabulary list are all his, reproduced as he wrote them.
   So the rule the rest of this file works under does not apply here: there is
   nothing to write around when the source is the author's own.

   What was added around it: the 重點整理 that opens the point, worked up from
   his own Grammar Focus box, and the right-and-wrong pairs under it, which
   draw out the comparison his worksheet flags in a footnote — 2 `is looking`
   against 13 `look`, the same verb twice with different answers.

   The 判斷關鍵 are kept twice over, on purpose. Grouped by paragraph they are
   the reason shown the moment that paragraph is finished; the chart in
   「判斷關鍵」 is page 2 of the worksheet, item by item, which is what a
   teacher reads from and what a learner comes back to.
*/

/* Part ids are `pres-`, not the `sp-` this point's name suggests: 過去時間's
   spelling point already owns sp-recap, and a 指定作業 link Lewis has sent
   points at a part id. Ids are addresses here, so they are never reused.
   tools/check_grammar_practice.js catches a collision. */
GP.points.push(
  {
    id: 'simple-or-progressive',
    group: { zh: '現在時間', en: 'Present time' },
    zh: '現在簡單式，還是現在進行式？',
    en: 'Simple present or present progressive',
    sub: '「正在做」和「平常都做」怎麼分',
    /* 過去時間's 總複習 already has 🔁, and two of the same mark in one 目錄
       is a worse signal than none. */
    icon: '🔀',

    lead: {
      en: 'Chinese can say 正在 and can leave it out, and the verb never changes either way. English has no such freedom: every present-tense verb has to declare whether this is happening now or happens generally. Nearly every mistake here is one of two things — reaching for -ing because the sentence feels like "now", or missing the time word that already decided it for you.',
      zh: '中文可以說「正在」，也可以不說，動詞都長一樣。英文沒有這種自由：每一個現在式動詞都得表態，到底是「此刻正在發生」還是「平常就是這樣」。這裡幾乎所有的錯都是兩種——覺得句子講的是「現在」就加 -ing，或者沒看到那個早就替你決定好的時間詞。',
    },

    parts: [
      {
        id: 'pres-recap',
        zh: '重點整理',
        en: 'The point in brief',
        blocks: [
          {
            t: 'rule',
            en: 'Happening at this moment, in front of you — be + V-ing.',
            zh: '此刻正在發生、看得見的動作——用 be + V-ing。',
          },
          {
            t: 'rule',
            en: 'A habit, a routine, something that is generally true — the simple present.',
            zh: '習慣、規律、一向如此的事——用現在簡單式。',
          },
          {
            t: 'cols',
            en: 'The time words that decide it',
            zh: '決定時態的時間詞',
            cols: [
              {
                zh: '現在進行式',
                form: 'be + V-ing',
                note: '此刻正在發生',
                words: ['now', 'right now', 'today', 'at the moment', 'this week', 'Look! / Listen!'],
                eg: 'A woman is looking at jeans.',
                egZh: '一位女士正在挑選牛仔褲。',
              },
              {
                zh: '現在簡單式',
                form: 'V / V-s',
                note: '習慣、規律、固定發生',
                words: ['every week', 'often', 'usually', 'always', 'never', 'several times a day'],
                eg: 'The store has new items on sale every week.',
                egZh: '這家店每週都有新的特價商品。',
              },
            ],
          },
          {
            t: 'note',
            en: 'The verbs that refuse -ing',
            zh: '有些動詞不接 -ing',
            bodyEn: 'Some verbs describe a state rather than an action, and they stay in the simple present however much the sentence feels like "now". Two of them are in the reading below: see, and look when it means "appear". She sees several cute styles — she is not in the middle of seeing them. The tables look neat — they are not doing any looking.',
            bodyZh: '有些動詞描述的是「狀態」而不是「動作」，不管句子感覺上多像在講「現在」，它們都留在簡單式。下面的文章裡就有兩個：see，以及當「看起來」用的 look。She sees several cute styles——她不是「正在看見」。The tables look neat——桌子並沒有在「看」。',
            good: ['She sees several cute styles.', 'The tables look neat and tidy.'],
            bad: ['She is seeing several cute styles.', 'The tables are looking neat and tidy.'],
            more: { href: '../grammar-notes/#stative', zh: '完整的狀態動詞整理在「文法筆記」', en: 'The full list is in Grammar Notes' },
          },
          {
            t: 'pairs',
            en: 'The same verb, two answers',
            zh: '同一個動詞，兩種答案',
            items: [
              { ok: true, text: 'A woman is looking at jeans.', zh: '一位女士正在挑選牛仔褲。（看、挑選——動作）' },
              { ok: true, text: 'The tables look neat and tidy.', zh: '展示桌看起來整齊又乾淨。（看起來——狀態）' },
              { ok: false, text: 'The tables are looking neat and tidy.' },
              { ok: true, text: 'A salesperson is folding shirts.', zh: '一位店員正在摺襯衫。（此刻）' },
              { ok: true, text: 'The salesperson folds the clothes several times a day.', zh: '店員每天把衣服摺好好幾次。（頻率）' },
            ],
          },
        ],
      },

      {
        id: 'pres-store',
        zh: '閱讀填空',
        en: 'Shopping at a clothing store',
        blocks: [
          {
            t: 'cloze',
            en: 'Shopping at a clothing store',
            zh: '在服飾店購物',
            hintZh: '選出正確的動詞形式，完成文章。空格編號和講義上的題號一致。四段各自讀完，解說就會出現。',
            hintEn: 'Choose the correct completions. The blanks are numbered as they are on the worksheet, and each paragraph gives its reasons once it is finished.',
            lines: [
              {
                text: 'It’s Saturday at the clothing store. Many people [[are shopping*|shop]] there today. A woman [[is looking*|looks]] at jeans. She [[is seeing|sees*]] several cute styles. She [[is checking*|checks]] the sizes.',
                zh: '今天是星期六，服飾店裡有許多人正在購物。一位女士正在挑選牛仔褲。她看到好幾款可愛的款式，並且正在查看尺寸。',
                why: {
                  zh: '1 today 指今天此刻正在發生。2 look at 是「看、挑選」的動作，正在進行。3 see 是感官狀態動詞，不用進行式——她不是「正在看見」。4 眼前正在做的動作。',
                  en: '1 “today” points at this moment. 2 “look at” is the action of looking and it is in progress. 3 “see” is a non-action verb of perception — she is not in the middle of seeing. 4 something she is doing right now.',
                },
              },
              {
                text: 'Another woman [[is waiting*|waits]] for a dressing room. A man [[is returning*|returns]] a jacket at the counter. It is too big. A teenager [[is checking*|checks]] the sales rack.',
                zh: '另一位女士正在等待試衣間。一位男士正在櫃檯退還一件外套，因為外套太大了。一名青少年正在查看特價商品架上的衣服。',
                why: {
                  zh: '5、6、7 都是此刻眼前正在發生的動作，所以三題都用進行式。整段沒有任何頻率詞。',
                  en: 'All three are actions going on in front of you, so all three take the progressive. There is no frequency word anywhere in the paragraph.',
                },
              },
              {
                text: 'Every week, the store [[is having|has*]] new items on sale. A salesperson [[is folding*|folds]] shirts. Often customers [[aren’t folding|don’t fold*]] them after they [[are picking|pick*]] them up.',
                zh: '這家店每週都有新的特價商品。一位店員正在摺襯衫。顧客拿起衣服之後，通常不會把衣服摺回去。',
                why: {
                  zh: '8 Every week 是固定、規律的事。9 此刻正在摺——先記住它，第 12 題是同一個動詞。10 Often 表示習慣，否定用 don’t fold。11 after 子句講的也是習慣動作。',
                  en: '8 “Every week” is regular. 9 is happening right now — hold on to it, 12 is the same verb. 10 “Often” is a habit, so the negative is “don’t fold”. 11 the after-clause describes what customers habitually do.',
                },
              },
              {
                text: 'The salesperson [[is folding|folds*]] the clothes on the display tables several times a day. The tables [[are looking|look*]] neat and tidy.',
                zh: '店員每天都會把展示桌上的衣服摺好好幾次。展示桌看起來整齊又乾淨。',
                why: {
                  zh: '12 several times a day 是頻率，用簡單式——和第 9 題同一個動詞 fold，答案卻相反，差別只在時間詞。13 look 在這裡是「看起來」，是狀態，不用進行式。',
                  en: '12 “several times a day” is a frequency, so simple present — the same verb as 9 with the opposite answer, and the only difference is the time word. 13 “look” here means “appear”, which is a state.',
                },
              },
            ],
          },
        ],
      },

      {
        id: 'pres-keys',
        zh: '判斷關鍵',
        en: 'The key to each one',
        blocks: [
          {
            t: 'table',
            en: 'Answer key',
            zh: '答案與判斷關鍵',
            hintZh: '十三題的答案、中文意思，以及每一題真正的判斷依據。',
            hintEn: 'The thirteen answers, what each one means, and what actually decides it.',
            head: ['題號', '答案', '中文意思', '判斷關鍵'],
            rows: [
              ['1',  'are shopping', '正在購物',     'today：今天此刻正在發生'],
              ['2',  'is looking',   '正在看／挑選', 'look at 是動作，正在進行'],
              ['3',  'sees',         '看見',         'see 是感官狀態動詞，不用進行式'],
              ['4',  'is checking',  '正在查看',     '眼前正在做的動作'],
              ['5',  'is waiting',   '正在等待',     '眼前正在做的動作'],
              ['6',  'is returning', '正在退貨',     '眼前正在做的動作'],
              ['7',  'is checking',  '正在查看',     '眼前正在做的動作'],
              ['8',  'has',          '有／提供',     'Every week：固定、規律的事'],
              ['9',  'is folding',   '正在摺衣服',   '此刻正在做（對比第 12 題）'],
              ['10', 'don’t fold',   '不會摺回去',   'Often：習慣、經常發生'],
              ['11', 'pick',         '拿起',         'after 子句描述習慣動作，用簡單式'],
              ['12', 'folds',        '摺衣服',       'several times a day：頻率 → 簡單式'],
              ['13', 'look',         '看起來',       'look「看起來」是狀態，不用進行式'],
            ],
          },
          {
            t: 'note',
            en: 'Nine against four',
            zh: '九比四',
            bodyEn: 'Nine of the thirteen are progressive and four are simple present, and the four are worth knowing by their clue rather than by their number: every week (8), often (10), the after-clause that goes with it (11), and several times a day (12). Add the two state verbs, 3 and 13, and you have every answer on the page that is not "be + V-ing".',
            bodyZh: '十三題裡有九題是進行式，四題是簡單式。那四題值得用線索記，而不是用題號記：every week（8）、often（10）、跟著它的 after 子句（11），以及 several times a day（12）。再加上兩個狀態動詞第 3 題和第 13 題，這一頁所有不是 be + V-ing 的答案就都在這裡了。',
          },
        ],
      },

      {
        id: 'pres-words',
        zh: '重點單字',
        en: 'Key vocabulary',
        blocks: [
          {
            t: 'table',
            en: 'Key vocabulary and phrases',
            zh: '重點單字與片語',
            hintZh: '這篇文章用到的字和片語，照文章出現的順序排。',
            hintEn: 'The words and phrases the reading uses, in the order they appear.',
            /* The gloss is an answer, so it hides in 教學 — the whole point of
               showing a teacher a word list. The 判斷關鍵 chart above has no
               zhCol: a reason is explanation, and explanation never hides. */
            zhCol: 1,
            head: ['English', '繁體中文'],
            rows: [
              ['clothing store',      '服飾店'],
              ['shop',                '購物'],
              ['jeans',               '牛仔褲'],
              ['cute styles',         '可愛的款式'],
              ['check the sizes',     '查看尺寸'],
              ['dressing room',       '試衣間'],
              ['return a jacket',     '退還外套'],
              ['counter',             '櫃檯'],
              ['sales rack',          '特價商品架'],
              ['on sale',             '特價中'],
              ['salesperson',         '店員／銷售人員'],
              ['fold shirts',         '摺襯衫'],
              ['pick up',             '拿起'],
              ['display table',       '商品展示桌'],
              ['several times a day', '每天好幾次'],
              ['neat and tidy',       '整齊乾淨'],
            ],
          },
        ],
      },
    ],
  },
);

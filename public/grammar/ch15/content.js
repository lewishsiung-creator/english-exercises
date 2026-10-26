/* Chapter 15 — Making Comparisons.

   All eight sections. Blocks only: the section titles live in ../book.js.

   Built from the chapter's own charts. What they state is all here — the two
   ways to form a comparative and which adjectives take which, the spelling
   changes, the irregular forms, the superlative and what it compares, the
   one of + superlative + plural noun pattern, the adverb forms and the one
   exception to them, the three prepositions that go with the same, similar
   and different, the two sentence shapes for like and alike, and the
   shortened verb after but. The practice and the Chinese are written for this
   page, and the examples are this site's own.

   Five things are added and say so on the page, because they are what a
   Mandarin speaker meets and the charts do not raise:
     15-1  than is not then — one compares, the other is time
     15-2  the superlative keeps its the, and in a place takes in, not of
     15-4  the chart's own exception is the whole trap: early ends in -ly and
           still takes -er
     15-5  different from is safe everywhere; different than is American and
           different to is British, and neither is what a Taiwanese exam wants
     15-8  the short verb after but has to match the first one's tense and
           auxiliary, which is the whole difficulty of the section
*/

const CHAPTER = {
  id: 'ch15',

  intro: {
    en: 'Comparing is the one thing in this book that English does with the shape of a word rather than with an extra word. Chinese adds 比 and leaves the adjective alone; English reaches inside the adjective and changes it — and which change depends on how many syllables it has. Nothing here is hard to understand. The whole chapter is counting syllables fast enough to keep talking.',
    zh: '「比較」是這本書裡唯一一件英文用「改變字的形狀」來完成的事。中文加一個「比」，形容詞不動；英文卻會伸進形容詞裡面改它——而且怎麼改，取決於它有幾個音節。這一章沒有難懂的東西，全部的難處在於：要在說話的速度下數完音節。',
  },

  opening: [
    {
      t: 'lead',
      en: 'Ten sentences. Some are English and some are not. Decide before you read the chapter — the explanation names the section that deals with it, so a wrong answer is a reading list.',
      zh: '十個句子，有些是英文，有些不是。先判斷再讀這一章——解說會指出這是哪一節的內容，所以答錯等於得到一份閱讀清單。',
    },
    {
      t: 'judge',
      en: 'Correct or not?',
      zh: '正確還是不正確？',
      items: [
        {
          text: 'My sister is older than me.',
          ok: true,
          why: { en: 'One syllable, so -er, and than follows it. See 15-1.', zh: '單音節，所以加 -er，後面接 than。見 15-1。' },
        },
        {
          text: 'This project is more harder than the last one.',
          ok: false,
          fix: 'This project is harder than the last one.',
          why: { en: 'One change or the other, never both. Hard takes -er, so more has no work to do. See 15-1.', zh: '只能改一次，不能兩次都來。hard 加 -er，more 就沒有事情可做了。見 15-1。' },
        },
        {
          text: 'Health is importanter than money.',
          ok: false,
          fix: 'Health is more important than money.',
          why: { en: 'Three syllables, so more in front rather than -er on the end. See 15-1.', zh: '三個音節，所以在前面加 more，而不是在字尾加 -er。見 15-1。' },
        },
        {
          text: 'That was worst meeting of the year.',
          ok: false,
          fix: 'That was the worst meeting of the year.',
          why: { en: 'A superlative keeps its the. See 15-2.', zh: '最高級一定要保留 the。見 15-2。' },
        },
        {
          text: 'Taipei is one of the biggest city in Taiwan.',
          ok: false,
          fix: 'Taipei is one of the biggest cities in Taiwan.',
          why: { en: 'One of needs a plural noun after the superlative — it is picking one out of several. See 15-3.', zh: 'one of 後面的名詞要用複數——它是從好幾個裡面挑一個出來。見 15-3。' },
        },
        {
          text: 'She speaks more slowly than I do.',
          ok: true,
          why: { en: 'An adverb ending in -ly takes more, not -er. See 15-4.', zh: '-ly 結尾的副詞用 more，不加 -er。見 15-4。' },
        },
        {
          text: 'My phone is the same with yours.',
          ok: false,
          fix: 'My phone is the same as yours.',
          why: { en: 'Each of these three carries its own preposition, and the same takes as. See 15-5.', zh: '這三個說法各自搭配固定的介系詞，the same 搭配 as。見 15-5。' },
        },
        {
          text: 'Your bag and my bag are like.',
          ok: false,
          fix: 'Your bag and my bag are alike.',
          why: { en: 'Two things joined by and take alike. Like needs something after it. See 15-6.', zh: '用 and 連起來的兩樣東西要用 alike。like 後面一定要接東西。見 15-6。' },
        },
        {
          text: 'The room was cold but the coffee was hot.',
          ok: false,
          fix: 'The room was cold, but the coffee was hot.',
          why: { en: 'A comma comes before but when a whole clause follows it. See 15-7.', zh: 'but 後面接一個完整子句時，前面要加逗號。見 15-7。' },
        },
        {
          text: 'I finished the report, but my colleague didn’t.',
          ok: true,
          why: { en: 'The verb after but is shortened, and it matches the first verb’s tense. See 15-8.', zh: 'but 後面的動詞被縮短了，而且和前面動詞的時態一致。見 15-8。' },
        },
      ],
    },
  ],

  /* The mixed set. New items, no section headings to lean on, and every
     explanation names the section it came from. */
  review: [
    {
      t: 'lead',
      en: 'No headings here. Each question could be about any part of the chapter, which is how the grammar actually arrives when you are speaking.',
      zh: '這裡沒有小節標題。每一題都可能考這一章的任何一個部分——你在說話的時候，文法就是這樣出現的。',
    },
    {
      t: 'mcq',
      en: 'Mixed practice',
      zh: '混合練習',
      hintEn: 'Each answer says which section it came from, so a wrong one is a short reading list.',
      hintZh: '每個解說都會指出是哪一節，所以答錯等於拿到一份簡短的複習清單。',
      items: [
        {
          text: 'My sister is ___ than me.',
          options: ['older', 'more old', 'more older'],
          answer: 0,
          why: { en: 'One syllable takes -er, and only one change. 15-1.', zh: '單音節加 -er，而且只能改一次。15-1。' },
        },
        {
          text: 'Health is ___ than money.',
          options: ['more important', 'importanter', 'more importanter'],
          answer: 0,
          why: { en: 'Three syllables, so more in front. 15-1.', zh: '三個音節，前面加 more。15-1。' },
        },
        {
          text: 'That was ___ meeting of the year.',
          options: ['the longest', 'longest', 'the most long'],
          answer: 0,
          why: { en: 'A superlative keeps its the. 15-2.', zh: '最高級要保留 the。15-2。' },
        },
        {
          text: 'Taipei is one of ___ in Taiwan.',
          options: ['the biggest cities', 'the biggest city', 'biggest cities'],
          answer: 0,
          why: { en: 'One of needs the and a plural noun. 15-3.', zh: 'one of 需要 the 和複數名詞。15-3。' },
        },
        {
          text: 'We arrived ___ than the Smiths did.',
          options: ['earlier', 'more early', 'more earlily'],
          answer: 0,
          why: { en: 'Early ends in -ly and still takes -er. 15-4.', zh: 'early 以 -ly 結尾卻還是加 -er。15-4。' },
        },
        {
          text: 'My phone is the same ___ yours.',
          options: ['as', 'to', 'from'],
          answer: 0,
          why: { en: 'The same takes as. 15-5.', zh: 'the same 搭配 as。15-5。' },
        },
        {
          text: 'This report is similar ___ last year’s.',
          options: ['to', 'as', 'with'],
          answer: 0,
          why: { en: 'Similar takes to. 15-5.', zh: 'similar 搭配 to。15-5。' },
        },
        {
          text: 'Our books are ___.',
          options: ['alike', 'like', 'a like'],
          answer: 0,
          why: { en: 'Nothing follows, so alike. 15-6.', zh: '後面沒有東西，所以用 alike。15-6。' },
        },
        {
          text: 'The room was cold ___ the coffee was hot.',
          options: [', but', ' but', ', and'],
          answer: 0,
          why: { en: 'A full clause follows, so a comma. 15-7.', zh: '後面是完整子句，所以要逗號。15-7。' },
        },
        {
          text: 'Maria didn’t come, but Alex ___.',
          options: ['did', 'does', 'was'],
          answer: 0,
          why: { en: 'The past stays the past. 15-8.', zh: '過去式維持過去式。15-8。' },
        },
      ],
    },
    {
      t: 'order',
      en: 'Build the sentence',
      zh: '造句',
      items: [
        {
          cue: '火車比公車貴。',
          answer: ['The', 'train', 'is', 'more', 'expensive', 'than', 'the', 'bus.'],
          why: { en: 'More, the adjective, then than. 15-1.', zh: 'more、形容詞，然後 than。15-1。' },
        },
        {
          cue: '新系統和舊的完全不同。',
          answer: ['The', 'new', 'system', 'is', 'different', 'from', 'the', 'old', 'one.'],
          why: { en: 'Different needs no the but does need from. 15-5.', zh: 'different 前面不用 the，後面一定要有 from。15-5。' },
        },
        {
          cue: '我完成了報告，但我同事沒有。',
          answer: ['I', 'finished', 'the', 'report,', 'but', 'my', 'colleague', 'didn’t.'],
          why: { en: 'The short verb matches the first half’s tense. 15-8.', zh: '縮短的動詞要和前半句時態一致。15-8。' },
        },
      ],
    },
  ],

  sections: [
    // ============================================================== 15-1
    {
      n: '15-1',
      blocks: [
        {
          t: 'lead',
          en: 'Two things, side by side. English changes the adjective itself — and how it changes depends on nothing but the length of the word.',
          zh: '兩樣東西並排比較。英文會改變形容詞本身——而怎麼改，只取決於這個字有多長。',
        },
        {
          t: 'rule',
          en: 'To compare two people or two things, the adjective takes a special form: either -er on the end, or more in front. That form is called the comparative, and than follows it.',
          zh: '比較兩個人或兩樣東西時，形容詞要用特別的形式：字尾加 -er，或前面加 more。這個形式叫做「比較級」，後面接 than。',
        },
        {
          t: 'forms',
          en: 'The comparative + than',
          zh: '比較級 ＋ than',
          rows: [
            { sub: 'Mary', verb: 'is', rest: 'older than John.', zh: 'Mary 比 John 年長。' },
            { sub: 'Health', verb: 'is', rest: 'more important than money.', zh: '健康比金錢重要。', mark: true },
            { sub: 'This room', verb: 'is', rest: 'bigger than my office.', zh: '這個房間比我的辦公室大。' },
            { sub: 'The train', verb: 'is', rest: 'more expensive than the bus.', zh: '火車比公車貴。', mark: true },
          ],
        },
        {
          t: 'table',
          en: 'Which form the adjective takes',
          zh: '形容詞要用哪一種形式',
          head: [
            { en: 'The adjective', zh: '這個形容詞' },
            { en: 'Comparative', zh: '比較級' },
            { en: 'Examples', zh: '例子' },
          ],
          rows: [
            ['one syllable', 'add -er', 'big → bigger, cheap → cheaper, old → older'],
            ['ends in -y', 'change -y to -i, add -er', 'funny → funnier, pretty → prettier'],
            ['two or more syllables', 'more in front', 'famous → more famous, important → more important'],
            ['good, bad, far', 'irregular', 'better, worse, farther / further'],
          ],
          rowsZh: [
            ['單音節', '字尾加 -er', ''],
            ['字尾是 -y', '-y 改成 -i，再加 -er', ''],
            ['兩個音節以上', '前面加 more', ''],
            ['good、bad、far', '不規則', ''],
          ],
        },
        {
          t: 'note',
          en: 'One vowel and one consonant: double the consonant',
          zh: '一個母音加一個子音：子音要雙寫',
          bodyEn: 'Big ends in one vowel and one consonant, so the g doubles before -er. Cheap does not, because it has two vowels.',
          bodyZh: 'big 的字尾是一個母音加一個子音，所以加 -er 之前 g 要雙寫。cheap 不用，因為它有兩個母音。',
          good: ['big → bigger', 'fat → fatter', 'hot → hotter', 'thin → thinner'],
          bad: ['big → biger', 'hot → hoter'],
        },
        {
          t: 'note',
          en: 'Change the word once, not twice',
          zh: '一個字只改一次',
          bodyEn: 'Either -er or more does the job. Using both is the most common comparative mistake there is, and it survives into quite advanced English.',
          bodyZh: '-er 和 more 只要一個就夠了。兩個一起用是比較級最常見的錯誤，而且即使英文已經不錯的人也還會犯。',
          good: ['Mary is older than John.', 'Health is more important than money.'],
          bad: ['Mary is more old than John.', 'Mary is more older than John.', 'Health is importanter than money.'],
        },
        {
          t: 'note',
          en: 'Than is not then',
          zh: 'than 不是 then',
          bodyEn: 'Written for this page, because the two are one letter apart and a spellchecker cannot tell them apart. Than compares. Then is about time — first this, then that. In speech they sound almost identical, so this is a mistake of the keyboard rather than of the ear.',
          bodyZh: '這一段是為本頁寫的，因為這兩個字只差一個字母，拼字檢查也抓不出來。than 用來比較；then 和時間有關——先這個，然後那個。它們的發音幾乎一樣，所以這是手打出來的錯，不是聽出來的錯。',
          good: ['My office is closer than yours.', 'We finished the report, and then we went home.'],
          bad: ['My office is closer then yours.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'This meeting room is bigger than the other one.', zh: '這間會議室比另一間大。' },
            { en: 'The new system is easier than the old one.', zh: '新系統比舊的簡單。' },
            { en: 'My commute is longer than my colleague’s.', zh: '我的通勤時間比我同事長。' },
            { en: 'This supplier is more reliable than the last one.', zh: '這家供應商比上一家可靠。' },
            { en: 'The weather today is worse than yesterday.', zh: '今天的天氣比昨天糟。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the comparative',
          zh: '選出正確的比較級',
          hintEn: 'Count the syllables first. One syllable takes -er; two or more take more; anything ending in -y takes -ier.',
          hintZh: '先數音節。單音節加 -er；兩個以上用 more；字尾是 -y 的改成 -ier。',
          items: [
            {
              text: 'My sister is ___ than me.',
              options: ['older', 'more old', 'more older'],
              answer: 0,
              why: { en: 'One syllable, so -er. More is for the long words.', zh: '單音節，所以加 -er。more 是給長字用的。' },
            },
            {
              text: 'Health is ___ than money.',
              options: ['more important', 'importanter', 'more importanter'],
              answer: 0,
              why: { en: 'Three syllables, so more in front — and only one change.', zh: '三個音節，所以在前面加 more——而且只能改一次。' },
            },
            {
              text: 'This question is ___ than the last one.',
              options: ['easier', 'more easy', 'easyer'],
              answer: 0,
              why: { en: 'An adjective ending in -y changes the y to i and adds -er.', zh: '-y 結尾的形容詞要把 y 改成 i，再加 -er。' },
            },
            {
              text: 'The weather today is ___ than yesterday.',
              options: ['worse', 'badder', 'more bad'],
              answer: 0,
              why: { en: 'Bad is irregular: bad, worse, the worst.', zh: 'bad 是不規則的：bad、worse、the worst。' },
            },
            {
              text: 'My new desk is ___ than the old one.',
              options: ['bigger', 'biger', 'more big'],
              answer: 0,
              why: { en: 'One vowel and one consonant at the end, so the g doubles.', zh: '字尾是一個母音加一個子音，所以 g 要雙寫。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          hintEn: 'Subject, be, the comparative, then than. Tap a word you have placed to take it back.',
          hintZh: '主詞、be、比較級，然後 than。點已放上的字可以收回。',
          items: [
            {
              cue: '這個房間比我的辦公室大。',
              answer: ['This', 'room', 'is', 'bigger', 'than', 'my', 'office.'],
              why: { en: 'Than comes straight after the comparative, never before it.', zh: 'than 緊接在比較級後面，絕不會在前面。' },
            },
            {
              cue: '火車比公車貴。',
              answer: ['The', 'train', 'is', 'more', 'expensive', 'than', 'the', 'bus.'],
              why: { en: 'Three words carry the comparison: more, expensive, than.', zh: '比較是由三個字完成的：more、expensive、than。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 15-2
    {
      n: '15-2',
      blocks: [
        {
          t: 'lead',
          en: 'Three or more, and one of them wins. The endings are the same ones again, with the in front.',
          zh: '三個以上，其中一個勝出。字尾變化和上一節一樣，只是前面要加 the。',
        },
        {
          t: 'rule',
          en: 'The comparative compares two things. The superlative compares three or more, and says which one is at the top or the bottom. It takes -est or the most, and it keeps the in front of it.',
          zh: '比較級比較兩樣東西；最高級比較三樣以上，指出哪一個最高或最低。它用 -est 或 the most，而且前面一定要有 the。',
        },
        {
          t: 'forms',
          en: 'Two, then three or more',
          zh: '兩個，然後三個以上',
          rows: [
            { sub: 'My thumb', verb: 'is', rest: 'shorter than my index finger.', zh: '我的拇指比食指短。（比較兩個）' },
            { sub: 'My thumb', verb: 'is', rest: 'the shortest finger of all.', zh: '我的拇指是最短的一根手指。（比較全部）', mark: true },
          ],
        },
        {
          t: 'table',
          en: 'All three forms together',
          zh: '三種形式一起看',
          head: [
            { en: 'Adjective', zh: '原級' },
            { en: 'Comparative', zh: '比較級' },
            { en: 'Superlative', zh: '最高級' },
          ],
          rows: [
            ['old', 'older (than)', 'the oldest (of all)'],
            ['big', 'bigger (than)', 'the biggest (of all)'],
            ['pretty', 'prettier (than)', 'the prettiest (of all)'],
            ['easy', 'easier (than)', 'the easiest (of all)'],
            ['expensive', 'more expensive (than)', 'the most expensive (of all)'],
            ['important', 'more important (than)', 'the most important (of all)'],
            ['good', 'better (than)', 'the best (of all)'],
            ['bad', 'worse (than)', 'the worst (of all)'],
            ['far', 'farther / further (than)', 'the farthest / furthest (of all)'],
          ],
        },
        {
          t: 'note',
          en: 'The doubling rule applies here too',
          zh: '雙寫規則在這裡也適用',
          bodyEn: 'An adjective ending in one vowel and one consonant doubles it before -est, exactly as it does before -er.',
          bodyZh: '字尾是一個母音加一個子音的形容詞，加 -est 前也要雙寫，和加 -er 時完全一樣。',
          good: ['big → the biggest', 'fat → the fattest', 'hot → the hottest', 'thin → the thinnest'],
          bad: ['big → the bigest'],
        },
        {
          t: 'note',
          en: 'The superlative keeps its the — and the place after it takes in',
          zh: '最高級要保留 the——後面的地點用 in',
          bodyEn: 'Written for this page. Chinese has nothing standing where the stands, so it is the word that goes missing: 最好的餐廳 comes out as best restaurant. And when a place follows, English says in that place but of all when there is no place named — the best restaurant in Taipei, the best of all.',
          bodyZh: '這一段是為本頁寫的。中文沒有對應 the 的字，所以它最常被漏掉：「最好的餐廳」會說成 best restaurant。另外，後面接地點時用 in，沒有指明地點時用 of all——the best restaurant in Taipei、the best of all。',
          good: ['It is the best restaurant in Taipei.', 'This one is the best of all.'],
          bad: ['It is best restaurant in Taipei.', 'It is the best restaurant of Taipei.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'That was the longest meeting of the year.', zh: '那是今年最長的一場會議。' },
            { en: 'This is the easiest part of the job.', zh: '這是這份工作裡最簡單的部分。' },
            { en: 'She is the most experienced person on the team.', zh: '她是團隊裡經驗最豐富的人。' },
            { en: 'That was the worst week of the project.', zh: '那是這個專案裡最糟的一週。' },
            { en: 'It is the best coffee in the building.', zh: '那是這棟大樓裡最好的咖啡。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Two or three?',
          zh: '比較兩個還是三個以上？',
          hintEn: 'If only two things are being compared, you want the comparative. Three or more, the superlative.',
          hintZh: '只比較兩樣東西用比較級；三樣以上用最高級。',
          items: [
            {
              text: 'Math is ___ class for me. (of all my classes)',
              options: ['the easiest', 'the easyiest', 'easier'],
              answer: 0,
              why: { en: 'All his classes is more than two, so the superlative — and the -y becomes -i.', zh: '「所有的課」不只兩堂，所以用最高級——而且 -y 要改成 -i。' },
            },
            {
              text: 'What is ___ problem in the world?',
              options: ['the worst', 'a worst', 'worse'],
              answer: 0,
              why: { en: 'A superlative always keeps its the. Worse would be comparing just two.', zh: '最高級一定要有 the。用 worse 就變成只比較兩個。' },
            },
            {
              text: 'Of the three suppliers, this one is ___.',
              options: ['the cheapest', 'the cheaper', 'cheaper'],
              answer: 0,
              why: { en: 'Three of them, so the superlative.', zh: '有三家，所以用最高級。' },
            },
            {
              text: 'Between the two reports, this one is ___.',
              options: ['shorter', 'the shortest', 'more short'],
              answer: 0,
              why: { en: 'Between the two is exactly two, so the comparative.', zh: 'between the two 正好是兩個，所以用比較級。' },
            },
            {
              text: 'She is the ___ person on the team.',
              options: ['most experienced', 'experiencedest', 'more experienced'],
              answer: 0,
              why: { en: 'Four syllables, so the most. And the says which one is at the top.', zh: '四個音節，所以用 the most。the 則指出是哪一個居首。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '那是今年最長的一場會議。',
              answer: ['That', 'was', 'the', 'longest', 'meeting', 'of', 'the', 'year.'],
              why: { en: 'The comes before the superlative and stays there.', zh: 'the 放在最高級前面，而且不能省略。' },
            },
            {
              cue: '那是這棟大樓裡最好的咖啡。',
              answer: ['It', 'is', 'the', 'best', 'coffee', 'in', 'the', 'building.'],
              why: { en: 'Good is irregular, and a named place takes in.', zh: 'good 是不規則變化，指明地點時用 in。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 15-3
    {
      n: '15-3',
      blocks: [
        {
          t: 'lead',
          en: 'A way of praising something without claiming it is the only one. The grammar is a single fixed pattern, and the last word is where it goes wrong.',
          zh: '一種稱讚某樣東西、又不必宣稱它是唯一的說法。文法上是一個固定句型，而出錯的地方永遠是最後一個字。',
        },
        {
          t: 'rule',
          en: 'A superlative often follows one of. The pattern is fixed: one of + the superlative + a plural noun. The noun is plural because you are picking one out of a group.',
          zh: '最高級常常出現在 one of 後面。句型是固定的：one of ＋ 最高級 ＋ 複數名詞。名詞要用複數，因為你是從一群裡面挑出一個。',
        },
        {
          t: 'forms',
          en: 'One of + superlative + plural noun',
          zh: 'one of ＋ 最高級 ＋ 複數名詞',
          rows: [
            { sub: 'The Amazon', verb: 'is', rest: 'one of the longest rivers in the world.', zh: '亞馬遜河是世界上最長的河流之一。' },
            { sub: 'A Rolls Royce', verb: 'is', rest: 'one of the most expensive cars in the world.', zh: '勞斯萊斯是世界上最貴的車之一。' },
            { sub: 'Alice', verb: 'is', rest: 'one of the most intelligent people in our class.', zh: 'Alice 是我們班上最聰明的人之一。' },
          ],
        },
        {
          t: 'note',
          en: 'The noun at the end is plural',
          zh: '最後那個名詞是複數',
          bodyEn: 'One of means one out of several, so there have to be several for it to come out of. The sentence starts singular and ends plural, which feels wrong and is right.',
          bodyZh: 'one of 的意思是「好幾個裡面的一個」，所以後面必須有「好幾個」讓它挑。句子開頭是單數、結尾是複數——感覺怪，但這是對的。',
          good: ['The Amazon is one of the longest rivers in the world.'],
          bad: ['The Amazon is one of the longest river in the world.'],
        },
        {
          t: 'note',
          en: 'The does not disappear either',
          zh: 'the 也不能省略',
          bodyEn: 'Both small words have to survive: one of THE longest rivers. Dropping the is the other half of this mistake.',
          bodyZh: '兩個小字都要留著：one of THE longest rivers。漏掉 the 是這個錯誤的另一半。',
          good: ['one of the best restaurants in Taipei'],
          bad: ['one of best restaurants in Taipei'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'Taipei is one of the biggest cities in Taiwan.', zh: '台北是台灣最大的城市之一。' },
            { en: 'That is one of the hardest questions on the test.', zh: '那是這份考卷上最難的題目之一。' },
            { en: 'He is one of the best teachers in the school.', zh: '他是這間學校最好的老師之一。' },
            { en: 'This is one of my favourite restaurants.', zh: '這是我最喜歡的餐廳之一。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Complete the pattern',
          zh: '完成這個句型',
          items: [
            {
              text: 'Taipei is one of ___ in Taiwan.',
              options: ['the biggest cities', 'the biggest city', 'biggest cities'],
              answer: 0,
              why: { en: 'The stays and the noun is plural. Both halves have to be right.', zh: 'the 要留著，名詞要複數。兩邊都要對。' },
            },
            {
              text: 'He is one of ___ in the school.',
              options: ['the best teachers', 'the best teacher', 'best teachers'],
              answer: 0,
              why: { en: 'One out of several teachers, so teachers.', zh: '是好幾位老師中的一位，所以用 teachers。' },
            },
            {
              text: 'That is one of ___ questions on the test.',
              options: ['the hardest', 'the harder', 'hardest'],
              answer: 0,
              why: { en: 'A superlative follows one of, never a comparative.', zh: 'one of 後面接最高級，不會接比較級。' },
            },
            {
              text: 'The pattern is one of + ___ + plural noun.',
              options: ['the superlative', 'the comparative', 'the adjective'],
              answer: 0,
              why: { en: 'That is the whole rule, and it never varies.', zh: '這就是全部的規則，而且不會改變。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '台北是台灣最大的城市之一。',
              answer: ['Taipei', 'is', 'one', 'of', 'the', 'biggest', 'cities', 'in', 'Taiwan.'],
              why: { en: 'Singular at the front, plural at the back.', zh: '前面單數，後面複數。' },
            },
            {
              cue: '這是我最喜歡的餐廳之一。',
              answer: ['This', 'is', 'one', 'of', 'my', 'favourite', 'restaurants.'],
              why: { en: 'My can replace the here, but the noun is still plural.', zh: '這裡的 my 可以取代 the，但名詞還是複數。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 15-4
    {
      n: '15-4',
      blocks: [
        {
          t: 'lead',
          en: 'Now the comparison is about how something was done. The rules look like the adjective rules and split in a different place.',
          zh: '現在比較的是「做事的方式」。規則看起來和形容詞那一套很像，但分界線不一樣。',
        },
        {
          t: 'rule',
          en: 'Adverbs ending in -ly take more and the most. Short irregular adverbs — hard, fast, early, late — take -er and -est instead. Better and the best are the forms of the adverb well.',
          zh: '-ly 結尾的副詞用 more 和 the most。短的不規則副詞——hard、fast、early、late——則是加 -er 和 -est。better 和 the best 是副詞 well 的變化。',
        },
        {
          t: 'table',
          en: 'The three groups',
          zh: '三組',
          head: [
            { en: 'Adverb', zh: '副詞' },
            { en: 'Comparative', zh: '比較級' },
            { en: 'Superlative', zh: '最高級' },
          ],
          rows: [
            ['fluently', 'more fluently', 'the most fluently'],
            ['slowly', 'more slowly', 'the most slowly'],
            ['quickly', 'more quickly', 'the most quickly'],
            ['hard', 'harder', 'the hardest'],
            ['fast', 'faster', 'the fastest'],
            ['early', 'earlier', 'the earliest'],
            ['late', 'later', 'the latest'],
            ['well', 'better', 'the best'],
          ],
        },
        {
          t: 'forms',
          en: 'In a sentence',
          zh: '放進句子裡',
          rows: [
            { sub: 'Kim', verb: 'speaks', rest: 'more fluently than Ali does.', zh: 'Kim 說得比 Ali 流利。' },
            { sub: 'Anna', verb: 'speaks', rest: 'the most fluently of all.', zh: 'Anna 是所有人裡說得最流利的。' },
            { sub: 'Mike', verb: 'worked', rest: 'harder than Sam did.', zh: 'Mike 比 Sam 更努力。', mark: true },
            { sub: 'Rosa', verb: 'writes', rest: 'better than I do.', zh: 'Rosa 寫得比我好。', mark: true },
          ],
        },
        {
          t: 'note',
          en: 'Early is the exception, and it is the trap',
          zh: 'early 是例外，而它就是陷阱',
          bodyEn: 'The rule says -ly takes more. Early ends in -ly and takes -er anyway: early, earlier, the earliest. It is the one word that breaks the rule you have just learnt, which is why it is worth stopping on.',
          bodyZh: '規則說 -ly 結尾要用 more。early 以 -ly 結尾，卻照樣加 -er：early、earlier、the earliest。它是唯一一個打破你剛學會的規則的字，所以值得停下來記一下。',
          good: ['We arrived earlier than the Smiths did.'],
          bad: ['We arrived more early than the Smiths did.'],
        },
        {
          t: 'contrast',
          en: 'Describing the person, describing the doing',
          zh: '描述人，描述動作',
          hintEn: 'After be, an adjective. After an ordinary verb, an adverb. The comparison does not change that.',
          hintZh: 'be 後面接形容詞，一般動詞後面接副詞。比較級不會改變這一點。',
          pairs: [
            {
              a: { en: 'She is a faster worker than I am.', zh: '她比我做事快。（形容詞，描述她）' },
              b: { en: 'She works faster than I do.', zh: '她做事比我快。（副詞，描述工作這件事）' },
            },
            {
              a: { en: 'Rosa is a better writer than I am.', zh: 'Rosa 比我會寫。（形容詞）' },
              b: { en: 'Rosa writes better than I do.', zh: 'Rosa 寫得比我好。（副詞）' },
            },
          ],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'Could you speak more slowly, please?', zh: '可以請你說慢一點嗎？' },
            { en: 'He finished the report more quickly than I expected.', zh: '他比我預期的更快完成報告。' },
            { en: 'My colleague arrives earlier than everyone else.', zh: '我同事比所有人都早到。' },
            { en: 'She explains things the most clearly of all the trainers.', zh: '所有講師裡，她講解得最清楚。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          hintEn: 'Does it end in -ly? Then more. Is it hard, fast, early or late? Then -er.',
          hintZh: '字尾是 -ly 嗎？用 more。是 hard、fast、early、late 嗎？加 -er。',
          items: [
            {
              text: 'Professor Stevens speaks ___ than Professor Miller.',
              options: ['more slowly', 'more slow', 'slowlier'],
              answer: 0,
              why: { en: 'Slowly ends in -ly, so more. Slow on its own would be the adjective.', zh: 'slowly 以 -ly 結尾，所以用 more。單獨的 slow 是形容詞。' },
            },
            {
              text: 'My sister works ___ than I do.',
              options: ['harder', 'more hard', 'more hardly'],
              answer: 0,
              why: { en: 'Hard is one of the four that take -er. Hardly is a different word meaning almost not.', zh: 'hard 是那四個加 -er 的其中之一。hardly 是另一個字，意思是「幾乎不」。' },
            },
            {
              text: 'We arrived ___ than the Smiths did.',
              options: ['earlier', 'more early', 'more earlily'],
              answer: 0,
              why: { en: 'Early ends in -ly and still takes -er. It is the exception.', zh: 'early 以 -ly 結尾，卻還是加 -er。它是例外。' },
            },
            {
              text: 'Pavel can write ___ of all.',
              options: ['the best', 'the most well', 'the goodest'],
              answer: 0,
              why: { en: 'Better and the best are the forms of the adverb well.', zh: 'better 和 the best 是副詞 well 的變化形式。' },
            },
            {
              text: 'Larisa pronounces her words ___ than Katerina does.',
              options: ['more clearly', 'clearer', 'more clear'],
              answer: 0,
              why: { en: 'Clearly describes how she pronounces them, and it ends in -ly.', zh: 'clearly 描述她發音的方式，而且以 -ly 結尾。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '可以請你說慢一點嗎？',
              answer: ['Could', 'you', 'speak', 'more', 'slowly,', 'please?'],
              why: { en: 'The adverb follows the verb, and more comes in front of the adverb.', zh: '副詞跟在動詞後面，more 放在副詞前面。' },
            },
            {
              cue: '我同事比所有人都早到。',
              answer: ['My', 'colleague', 'arrives', 'earlier', 'than', 'everyone', 'else.'],
              why: { en: 'Earlier, not more early — the exception again.', zh: '用 earlier，不是 more early——又是那個例外。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 15-5
    {
      n: '15-5',
      blocks: [
        {
          t: 'lead',
          en: 'Not better or worse — just how close two things are. Three expressions, and each one owns a preposition.',
          zh: '不是誰好誰壞，只是兩樣東西有多接近。三種說法，每一種都固定配一個介系詞。',
        },
        {
          t: 'rule',
          en: 'The same means identical, similar means close but not identical, and different means not alike. Each one takes its own preposition when something follows it: the same as, similar to, different from.',
          zh: 'the same 是完全一樣，similar 是接近但不完全一樣，different 是不一樣。後面要接東西時，各自搭配固定的介系詞：the same as、similar to、different from。',
        },
        {
          t: 'table',
          en: 'Two shapes for each one',
          zh: '每一種都有兩種句型',
          head: [
            { en: 'A and B together', zh: 'A 和 B 一起當主詞' },
            { en: 'A against B', zh: 'A 對比 B' },
            { en: 'Meaning', zh: '意思' },
          ],
          rows: [
            ['A and B are the same.', 'A is the same as B.', '完全一樣'],
            ['C and D are similar.', 'C is similar to D.', '相似，但不完全一樣'],
            ['E and F are different.', 'E is different from F.', '不一樣'],
          ],
          zhCol: 2,
        },
        {
          t: 'note',
          en: 'The preposition belongs to the word',
          zh: '介系詞和那個字是綁在一起的',
          bodyEn: 'There is no logic to learn here — as, to and from are simply the ones English uses. Memorise them as three two-word units rather than as three words and three prepositions.',
          bodyZh: '這裡沒有道理可以推——as、to、from 就是英文選定的三個。把它們當成三組固定搭配來記，不要當成三個字加三個介系詞。',
          good: ['the same as', 'similar to', 'different from'],
          bad: ['the same with', 'similar with', 'different with'],
        },
        {
          t: 'note',
          en: 'Different from, different than, different to',
          zh: 'different from、different than、different to',
          bodyEn: 'Written for this page. All three are heard: from is standard everywhere, than is common in American speech, and to is British. From is the one that is never marked wrong, so it is the one to use in an exam and in writing.',
          bodyZh: '這一段是為本頁寫的。三種都聽得到：from 在哪裡都是標準用法，than 在美式口語中常見，to 是英式用法。from 是唯一不會被判錯的，所以考試和書寫時就用它。',
          good: ['This version is different from the last one.'],
        },
        {
          t: 'note',
          en: 'The same keeps its the',
          zh: 'the same 的 the 不能省',
          bodyEn: 'Similar and different stand alone, but the same never does. It is always the same, and then as if something follows.',
          bodyZh: 'similar 和 different 可以單獨出現，但 the same 不行。它永遠是 the same，後面接東西時再加 as。',
          good: ['Our answers are the same.', 'My phone is the same as yours.'],
          bad: ['Our answers are same.', 'My phone is a same as yours.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'My phone is the same as yours.', zh: '我的手機和你的一樣。' },
            { en: 'This report is similar to last year’s.', zh: '這份報告和去年的很像。' },
            { en: 'The new system is completely different from the old one.', zh: '新系統和舊的完全不同。' },
            { en: 'Our two offices are similar in size.', zh: '我們兩間辦公室大小差不多。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the preposition',
          zh: '選出正確的介系詞',
          items: [
            {
              text: 'My phone is the same ___ yours.',
              options: ['as', 'to', 'from'],
              answer: 0,
              why: { en: 'The same takes as. There is no reason — it is a fixed pair.', zh: 'the same 搭配 as。沒有道理可講，就是固定搭配。' },
            },
            {
              text: 'This report is similar ___ last year’s.',
              options: ['to', 'as', 'with'],
              answer: 0,
              why: { en: 'Similar takes to.', zh: 'similar 搭配 to。' },
            },
            {
              text: 'The new system is different ___ the old one.',
              options: ['from', 'with', 'of'],
              answer: 0,
              why: { en: 'From is the form that is never marked wrong.', zh: 'from 是唯一不會被判錯的形式。' },
            },
            {
              text: 'My backpack and your backpack are ___.',
              options: ['the same', 'a same', 'same'],
              answer: 0,
              why: { en: 'The same never loses its the, even at the end of a sentence.', zh: 'the same 的 the 不會消失，即使放在句尾也一樣。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我的手機和你的一樣。',
              answer: ['My', 'phone', 'is', 'the', 'same', 'as', 'yours.'],
              why: { en: 'Three words in a fixed order: the, same, as.', zh: '三個字固定順序：the、same、as。' },
            },
            {
              cue: '新系統和舊的完全不同。',
              answer: ['The', 'new', 'system', 'is', 'different', 'from', 'the', 'old', 'one.'],
              why: { en: 'Different needs no the, but it does need from.', zh: 'different 前面不用 the，但後面一定要有 from。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 15-6
    {
      n: '15-6',
      blocks: [
        {
          t: 'lead',
          en: 'The same idea as similar, said two more ways — and the two ways need different sentences.',
          zh: '和 similar 一樣的意思，再多兩種說法——而這兩種說法需要不同的句型。',
        },
        {
          t: 'rule',
          en: 'Like means similar to, and alike means similar. They mean the same thing; what differs is the shape of the sentence. Like needs something after it. Alike does not, and it needs two things in the subject.',
          zh: 'like 的意思是 similar to，alike 的意思是 similar。意思相同，差別在句型。like 後面一定要接東西；alike 後面不接，但主詞必須是兩樣東西。',
        },
        {
          t: 'forms',
          en: 'Two shapes',
          zh: '兩種句型',
          rows: [
            { sub: 'Your pen', verb: 'is like', rest: 'my pen.', zh: '你的筆和我的筆很像。' },
            { sub: 'Your pen and my pen', verb: 'are', rest: 'alike.', zh: '你的筆和我的筆很像。', mark: true },
            { sub: 'Our pens', verb: 'are', rest: 'alike.', zh: '我們的筆很像。', mark: true },
            { sub: 'Our pens', verb: 'look', rest: 'alike.', zh: '我們的筆看起來很像。', mark: true },
            { sub: 'You and your mum', verb: 'sound', rest: 'alike.', zh: '你和你媽媽聽起來很像。', mark: true },
          ],
        },
        {
          t: 'table',
          en: 'The two patterns',
          zh: '兩個句型',
          head: [
            { en: 'Pattern', zh: '句型' },
            { en: 'Example', zh: '例句' },
          ],
          rows: [
            ['this + be + like + that', 'Your pen is like my pen.'],
            ['this and that + be + alike', 'Your pen and my pen are alike.'],
          ],
          rowsZh: [
            ['this ＋ be ＋ like ＋ that', ''],
            ['this and that ＋ be ＋ alike', ''],
          ],
        },
        {
          t: 'note',
          en: 'Alike ends the sentence; like cannot',
          zh: 'alike 可以結束句子，like 不行',
          bodyEn: 'If there is nothing after it, the word is alike. If something follows, the word is like. That one test settles every case.',
          bodyZh: '後面沒有東西，就用 alike；後面有東西，就用 like。這一個判斷就能解決所有情況。',
          good: ['Our pens are alike.', 'Your pen is like my pen.'],
          bad: ['Our pens are like.', 'Your pen is alike my pen.'],
        },
        {
          t: 'note',
          en: 'Other verbs work too',
          zh: '其他動詞也可以',
          bodyEn: 'Be is the usual verb, but look, taste, smell, act and sound all take like and alike — the five linking verbs from 14-3, doing the same job.',
          bodyZh: '最常用的是 be，但 look、taste、smell、act、sound 也都可以接 like 和 alike——就是 14-3 那五個連綴動詞，在做同樣的工作。',
          good: ['Green apples and yellow apples taste alike.', 'Coffee is like tea in some ways.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'Your bag is like mine.', zh: '你的包包和我的很像。' },
            { en: 'Our two offices look alike.', zh: '我們兩間辦公室看起來很像。' },
            { en: 'A town is like a city in some ways.', zh: '小鎮在某些方面和城市很像。' },
            { en: 'You and your sister sound alike on the phone.', zh: '你和你姐姐在電話裡聽起來很像。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Like or alike?',
          zh: 'like 還是 alike？',
          hintEn: 'Look at what comes after the blank. Something there means like; nothing there means alike.',
          hintZh: '看空格後面有沒有東西。有東西用 like，沒有東西用 alike。',
          items: [
            {
              text: 'Your book is ___ mine.',
              options: ['like', 'alike', 'similar'],
              answer: 0,
              why: { en: 'Mine follows, so like. Similar would need to.', zh: '後面有 mine，所以用 like。用 similar 的話後面要加 to。' },
            },
            {
              text: 'Our books are ___.',
              options: ['alike', 'like', 'a like'],
              answer: 0,
              why: { en: 'Nothing follows, so alike.', zh: '後面沒有東西，所以用 alike。' },
            },
            {
              text: 'A town ___ a city in some ways.',
              options: ['is like', 'is alike', 'alike'],
              answer: 0,
              why: { en: 'A city follows, and the sentence still needs its verb.', zh: '後面有 a city，而且句子還需要動詞。' },
            },
            {
              text: 'Green apples and yellow apples ___.',
              options: ['taste alike', 'taste like', 'are like'],
              answer: 0,
              why: { en: 'Two things in the subject and nothing after, so alike — and taste is one of the verbs that takes it.', zh: '主詞是兩樣東西、後面沒有東西，所以用 alike——而 taste 正是可以搭配的動詞之一。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '你的包包和我的很像。',
              answer: ['Your', 'bag', 'is', 'like', 'mine.'],
              why: { en: 'One thing, then like, then the other thing.', zh: '一樣東西、like、另一樣東西。' },
            },
            {
              cue: '我們兩間辦公室看起來很像。',
              answer: ['Our', 'two', 'offices', 'look', 'alike.'],
              why: { en: 'Both things are already in the subject, so alike closes the sentence.', zh: '兩樣東西都在主詞裡了，所以 alike 收尾。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 15-7
    {
      n: '15-7',
      blocks: [
        {
          t: 'lead',
          en: 'One word for putting two opposite things in one sentence — and one comma that most people leave out.',
          zh: '一個字，把兩件相反的事放進同一個句子——以及一個大多數人會漏掉的逗號。',
        },
        {
          t: 'rule',
          en: 'But gives the idea that this is the opposite of that. When a whole clause follows it — a new subject and a new verb — a comma comes before it.',
          zh: 'but 表達的是「這個和那個相反」。當它後面接一個完整子句（有新的主詞和新的動詞）時，前面要加逗號。',
        },
        {
          t: 'forms',
          en: 'But joins two opposites',
          zh: 'but 連接兩件相反的事',
          rows: [
            { sub: 'Karin is rich,', verb: 'but', rest: 'Mila is poor.', zh: 'Karin 很有錢，但 Mila 很窮。' },
            { sub: 'The weather was cold,', verb: 'but', rest: 'we were warm inside.', zh: '天氣很冷，但我們在室內很暖和。' },
            { sub: 'This exercise is easy,', verb: 'but', rest: 'that one is hard.', zh: '這個練習很簡單，但那個很難。' },
          ],
        },
        {
          t: 'note',
          en: 'The comma is part of the grammar',
          zh: '逗號是文法的一部分',
          bodyEn: 'Chinese writing does not put a mark there, so it is the thing that goes missing. If what follows but could stand on its own as a sentence, it takes a comma.',
          bodyZh: '中文在那個位置不會加標點，所以這個逗號最常被漏掉。判斷方法：如果 but 後面那段話本身就能當一個句子，就要加逗號。',
          good: ['The room was cold, but the coffee was hot.'],
          bad: ['The room was cold but the coffee was hot.'],
        },
        {
          t: 'note',
          en: 'The two halves have to be genuinely opposite',
          zh: '兩半必須真的相反',
          bodyEn: 'But is not a general joining word. If the second half simply adds something, and is a better choice — the opposition is what but is for.',
          bodyZh: 'but 不是一般的連接詞。如果後半只是補充說明，就該用 and——but 存在的目的是表達對立。',
          good: ['The meeting was long, but it was useful.'],
          bad: ['The meeting was long, but we discussed three topics.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'This exercise is easy, but that one is hard.', zh: '這個練習很簡單，但那個很難。' },
            { en: 'The coffee in this cup is hot, but the coffee in that cup is cold.', zh: '這杯咖啡是熱的，但那杯是冷的。' },
            { en: 'These dishes look clean, but those dishes look dirty.', zh: '這些碗盤看起來很乾淨，但那些看起來很髒。' },
            { en: 'The report was late, but the client did not mind.', zh: '報告遲交了，但客戶不介意。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the opposite',
          zh: '選出相反的那一個',
          items: [
            {
              text: 'That answer is right, but this answer is ___.',
              options: ['wrong', 'correct', 'good'],
              answer: 0,
              why: { en: 'But promises an opposite, and correct would repeat rather than oppose.', zh: 'but 承諾後面是相反的，用 correct 等於重複而不是對立。' },
            },
            {
              text: 'This suitcase is heavy, but that suitcase is ___.',
              options: ['light', 'heavy too', 'big'],
              answer: 0,
              why: { en: 'The opposite of heavy is light.', zh: 'heavy 的相反是 light。' },
            },
            {
              text: 'The room was cold ___ the coffee was hot.',
              options: [', but', ' but', ', and'],
              answer: 0,
              why: { en: 'A full clause follows, so a comma goes in front of but.', zh: '後面是完整子句，所以 but 前面要加逗號。' },
            },
            {
              text: 'But means ___.',
              options: ['this is the opposite of that', 'this is in addition to that', 'this is because of that'],
              answer: 0,
              why: { en: 'Addition is and; cause is because. But is for opposition.', zh: '補充用 and，原因用 because。but 是用來表達對立的。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '這個練習很簡單，但那個很難。',
              answer: ['This', 'exercise', 'is', 'easy,', 'but', 'that', 'one', 'is', 'hard.'],
              why: { en: 'The comma rides on the word in front of but.', zh: '逗號跟著 but 前面那個字。' },
            },
            {
              cue: '報告遲交了，但客戶不介意。',
              answer: ['The', 'report', 'was', 'late,', 'but', 'the', 'client', 'did', 'not', 'mind.'],
              why: { en: 'Two complete clauses, so the comma is needed.', zh: '兩個完整子句，所以逗號不能少。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 15-8
    {
      n: '15-8',
      blocks: [
        {
          t: 'lead',
          en: 'The second half of a but sentence is usually cut short — and what is left behind has to agree with what came first.',
          zh: 'but 後面那半句通常會被縮短——而留下來的那個字，必須和前半句一致。',
        },
        {
          t: 'rule',
          en: 'The verb phrase after but is often shortened to just its first word. An affirmative first half is answered by a negative, and a negative first half by an affirmative.',
          zh: 'but 後面的動詞片語常常縮短成只剩第一個字。前半句是肯定，後半句就用否定；前半句是否定，後半句就用肯定。',
        },
        {
          t: 'table',
          en: 'Affirmative, then negative',
          zh: '先肯定，再否定',
          head: [
            { en: 'Full sentence', zh: '完整句' },
            { en: 'What is left after but', zh: 'but 後面剩下什麼' },
          ],
          rows: [
            ['John is rich, but Mary isn’t.', 'isn’t'],
            ['Balls are round, but boxes aren’t.', 'aren’t'],
            ['I was in class, but Po wasn’t.', 'wasn’t'],
            ['Sue studies hard, but Sam doesn’t.', 'doesn’t'],
            ['We like cats, but they don’t.', 'don’t'],
            ['Alex came, but Maria didn’t.', 'didn’t'],
            ['People can talk, but animals can’t.', 'can’t'],
            ['Olga will graduate, but Ivan won’t.', 'won’t'],
          ],
        },
        {
          t: 'table',
          en: 'Negative, then affirmative',
          zh: '先否定，再肯定',
          head: [
            { en: 'Full sentence', zh: '完整句' },
            { en: 'What is left after but', zh: 'but 後面剩下什麼' },
          ],
          rows: [
            ['Mary isn’t rich, but John is.', 'is'],
            ['Po wasn’t in class, but I was.', 'was'],
            ['Sam doesn’t study, but Sue does.', 'does'],
            ['They don’t like cats, but we do.', 'do'],
            ['Maria didn’t come, but Alex did.', 'did'],
            ['Animals can’t talk, but people can.', 'can'],
            ['Ivan won’t graduate, but Olga will.', 'will'],
          ],
        },
        {
          t: 'note',
          en: 'The short verb has to match the long one',
          zh: '短的那個動詞要跟長的那個一致',
          bodyEn: 'Written for this page, because this is the whole difficulty of the section. Look at the first half and ask two questions: which tense, and which helping verb. A be sentence answers with be. An ordinary verb in the present answers with do or does; in the past, with did. A modal answers with itself.',
          bodyZh: '這一段是為本頁寫的，因為這就是本節全部的難處。看前半句，問兩個問題：什麼時態？用哪個助動詞？be 動詞的句子用 be 回答；一般動詞現在式用 do／does；過去式用 did；助動詞則用它自己回答。',
          good: ['Sue studies hard, but Sam doesn’t.', 'Alex came, but Maria didn’t.'],
          bad: ['Sue studies hard, but Sam isn’t.', 'Alex came, but Maria doesn’t.'],
        },
        {
          t: 'steps',
          en: 'Finishing the second half',
          zh: '完成後半句',
          hintEn: 'Three questions, in this order, and the answer falls out.',
          hintZh: '依序問三個問題，答案就出來了。',
          items: [
            { en: 'Is the first half positive or negative? The second half is the other one.', zh: '前半句是肯定還是否定？後半句就相反。' },
            { en: 'What is the verb in the first half — be, an ordinary verb, or a modal?', zh: '前半句的動詞是什麼——be、一般動詞，還是助動詞？' },
            { en: 'Keep its tense. Past stays past; present stays present.', zh: '保留它的時態。過去式還是過去式，現在式還是現在式。' },
          ],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'Lana is at home, but her husband isn’t.', zh: 'Lana 在家，但她先生不在。' },
            { en: 'I wasn’t at the meeting, but my colleague was.', zh: '我沒去開會，但我同事有去。' },
            { en: 'Tariq can speak French, but I can’t.', zh: 'Tariq 會說法文，但我不會。' },
            { en: 'I finished the report, but my colleague didn’t.', zh: '我完成了報告，但我同事沒有。' },
            { en: 'These chairs aren’t comfortable, but those are.', zh: '這些椅子不舒服，但那些很舒服。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Finish the sentence',
          zh: '完成句子',
          hintEn: 'Match the tense and the helping verb of the first half, then flip it.',
          hintZh: '先對齊前半句的時態與助動詞，再把它反過來。',
          items: [
            {
              text: 'Lana is at home, but her husband ___.',
              options: ['isn’t', 'doesn’t', 'wasn’t'],
              answer: 0,
              why: { en: 'A be sentence in the present, so the answer is a be sentence in the present.', zh: '前半是現在式的 be 動詞句，後半也要是現在式的 be 動詞。' },
            },
            {
              text: 'Sam doesn’t study, but Sue ___.',
              options: ['does', 'is', 'did'],
              answer: 0,
              why: { en: 'Negative first, so affirmative second — and an ordinary verb in the present answers with does.', zh: '前半否定，後半就肯定——而現在式的一般動詞用 does 回答。' },
            },
            {
              text: 'Maria didn’t come, but Alex ___.',
              options: ['did', 'does', 'was'],
              answer: 0,
              why: { en: 'The past stays the past: didn’t is answered by did.', zh: '過去式就維持過去式：didn’t 用 did 回答。' },
            },
            {
              text: 'Animals can’t talk, but people ___.',
              options: ['can', 'do', 'are'],
              answer: 0,
              why: { en: 'A modal answers with itself.', zh: '助動詞用它自己回答。' },
            },
            {
              text: 'Beds are comfortable, but park benches ___.',
              options: ['aren’t', 'don’t', 'isn’t'],
              answer: 0,
              why: { en: 'Plural subject and a be sentence, so aren’t.', zh: '複數主詞加 be 動詞句，所以用 aren’t。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我完成了報告，但我同事沒有。',
              answer: ['I', 'finished', 'the', 'report,', 'but', 'my', 'colleague', 'didn’t.'],
              why: { en: 'Past tense in the first half, so didn’t closes the second.', zh: '前半是過去式，所以後半用 didn’t 收尾。' },
            },
            {
              cue: 'Tariq 會說法文，但我不會。',
              answer: ['Tariq', 'can', 'speak', 'French,', 'but', 'I', 'can’t.'],
              why: { en: 'The modal answers with itself, and the sentence stops there.', zh: '助動詞用自己回答，句子就到此為止。' },
            },
          ],
        },
      ],
    },
  ],
};

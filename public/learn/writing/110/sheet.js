/* 110 練習單 (2026-11-14) — the second year's worksheet, asked for as
   「做 110 的練習單」 the day the 109 one went live.

   Unlike 109 there was no paper worksheet to start from: every question here
   is written for this page, on 109's pattern (A 暖身 … G 換題目寫), from the
   110 essay in ../content.js — its sentences, Chinese and jobs are read from
   ESSAYS.e110, never copied, and practice.js throws if this file drifts from
   it. B2, E and the transfer scenes use new sentences, not the essay's.

   110 is a different kind of task from 109: one picture, described, then
   feelings and advice (圖片描述＋感受反思), so the skeleton has no 代價 and
   the self-check asks for a point of view and two suggestions instead. */

const SHEET = {
  year: '110',
  essay: 'e110',
  kicker: '110 學年度學測 · 圖片描述＋感受反思 · 1 張圖 · 2 段',
  time: '建議時間 50 分鐘：A–F 約 30 分鐘，G 約 20 分鐘。範文全文在最後，寫完 G 再看。',

  parts: [
    {
      id: 'A', kind: 'warmup',
      title: '暖身：先想再寫', titleEn: 'Warm-up',
      lead: '題目情境：一張圖，花園裡的遊客為了拍照走進花圃。第一段描述圖片，第二段寫感受與建議。每一題先自己想（說出來或寫在紙上），再看參考想法。',
      items: [
        {
          q: '圖片裡的花園，你會看到哪三件事？用英文動詞片語說說看（例：take pictures）。',
          ideas: ['enjoy the flowers', 'take pictures', 'step into the flower bed', 'ignore the sign', 'walk on the grass'],
        },
        {
          q: '告示牌要大家做什麼？遊客做了什麼？兩者之間的落差，就是你的 However。用一句英文說說看。',
          ideas: ['There is a sign telling people not to enter, but a few visitors still step in.', 'The sign says "Keep Off," but some people walk right into the flowers.'],
        },
        {
          q: '第二段要從誰的角度寫？他會有什麼感受？想給什麼建議？',
          rows: [['Who', 'the owner of the garden'], ['Feeling', 'angry and disappointed'], ['Advice', 'clearer signs, special photo spots, responsible visitors']],
        },
        {
          q: '「講完就停」：為什麼第二段最後一句只要一個對比，不要再加一個新的建議？',
          zh: '最後一句的工作是收尾，不是開新話題。用一句對比（照片只留幾年，花園屬於所有人）把道理說完，讀者記得的就是這一句；再多加一個建議，結尾就散掉了。',
        },
      ],
    },

    {
      id: 'B1', kind: 'match',
      title: '字彙配對', titleEn: 'Vocabulary & Chunks',
      lead: '先點左邊的英文，再點右邊它的中文。配對成功會念出來。',
      left: [
        ['follow the rules', 'C'], ['a sign telling people not to V', 'J'], ['step into', 'F'],
        ['be damaged', 'A'], ['care more about A than B', 'I'], ['public places', 'B'],
        ['take time and effort', 'H'], ['careless', 'E'], ['put up signs', 'D'], ['be responsible', 'G'],
      ],
      right: {
        A: '受損', B: '公共場所', C: '遵守規定', D: '立告示牌', E: '粗心的；不小心的',
        F: '走進；踏進', G: '負責任', H: '花時間和心力', I: '比起 B 更在意 A', J: '叫人不要……的告示牌',
      },
    },

    {
      id: 'B2', kind: 'gaps',
      title: '片語填空', titleEn: 'Use the chunks',
      lead: '從 B1 選出適當的片語填進去，必要時改變形式（時態、be 動詞）。打好按「對答案」，或按 Enter。',
      bank: ['follow the rules', 'step into', 'be damaged', 'take time and effort', 'careless', 'put up signs'],
      items: [
        { s: 'Please ___ when you visit the museum.', a: ['follow the rules'], hint: '「遵守規定」，三個字。' },
        { s: 'The old bridge ___ in the typhoon last year.', a: ['was damaged'], hint: '橋「被弄壞了」，而且是去年的事：___ damaged。' },
        { s: 'It ___ a lot of time and effort to learn a new language.', a: ['takes'], hint: '「花（時間和心力）」，主詞是 It，現在式。' },
        { s: 'A ___ driver can cause a serious accident.', a: ['careless'], hint: '「粗心的」，形容詞放在名詞前面。' },
        { s: 'The school ___ new signs near the pool last week.', a: ['put up'], hint: '「立起、貼出」。put 的過去式還是 put。' },
        { s: 'The kids ___ the cold water and screamed.', a: ['stepped into'], hint: '「踏進」，而且是過去的事。' },
      ],
    },

    {
      id: 'C', kind: 'jobs',
      title: '動作配對：每一句在做什麼？', titleEn: 'What is each sentence doing?',
      lead: '範文的每一句都有一個「工作」。一次一句，從九個工作裡選一個；同一個工作可以用不只一次。選錯可以再試。',
      moves: [
        ['描述圖片', 'Describe the picture'], ['轉折', 'Turn'], ['舉例說明', 'Give an example'],
        ['說明影響', 'Show the effect'], ['點出現象', 'Name the bigger problem'], ['表明立場', 'State your position'],
        ['說明原因', 'Give a reason'], ['提出建議', 'Make a suggestion'], ['結論收尾', 'Wrap up'],
      ],
      think: [
        { q: '第一段哪一句把鏡頭「拉遠」，從一座花園講到一個普遍現象？', a: 'S5：This scene shows a common problem…——從這一座花園升級成「大家出遊時的通病」，替第二段鋪路。' },
        { q: '第二段有兩個建議，分別是給誰的？', a: 'S9 給花園（更清楚的告示、拍照區）；S10 用 More importantly 換對象，給遊客（學會負責）。' },
      ],
    },

    {
      id: 'D', kind: 'order',
      title: '句子排序：把第二段排回原來的順序', titleEn: 'Put paragraph 2 back in order',
      lead: '下面是第二段的六句，被打亂了。照原來的順序，一句一句點出來；點錯的會晃一下，不會被拿走。',
      para: 1,
      letters: { a: 3, b: 0, c: 5, d: 2, e: 4, f: 1 },
      clues: ['If I were', 'It takes', 'One careless action', 'To solve this problem', 'More importantly', 'but a beautiful garden'],
      clueZh: '線索：If I were（先說感受）→ It takes…（為什麼）→ One careless action（後果）→ To solve this problem（第一個建議）→ More importantly（更重要的建議）→ A… may…, but…（對比收尾）。感受、原因、建議、收尾，就是第二段的地圖。',
    },

    {
      id: 'E', kind: 'rewrite',
      title: '句型練習', titleEn: 'Grammar Spotlight',
      lead: '打好之後按「看參考答案」。參考答案只是一種寫法：意思一樣、文法對，就是對的。',
      groups: [
        {
          id: 'E1', h: 'Although…, … still…：雖然……，還是……',
          eg: '*Although* there is a sign telling people not to enter the flower area, a few visitors *still* step into the garden.',
          ask: '用 although 把兩句合成一句（although 和 but 不能一起用）：',
          items: [
            { q: 'It was raining. We still went hiking.', a: ['Although it was raining, we still went hiking.', 'We still went hiking although it was raining.'] },
            { q: 'The test was hard. Most students still passed.', a: ['Although the test was hard, most students still passed.', 'Most students still passed although the test was hard.'] },
          ],
        },
        {
          id: 'E2', h: 'care more about A than B：比起 B，更在意 A',
          eg: 'People *care more about* getting good photos *than* protecting the environment.',
          ask: '用 care more about A than B 改寫：',
          items: [
            { q: 'Some students think grades are more important than learning.', a: ['Some students care more about grades than learning.'] },
            { q: 'My brother thinks his phone is more important than sleep.', a: ['My brother cares more about his phone than sleep.', 'My brother cares more about his phone than sleeping.'] },
          ],
        },
        {
          id: 'E3', h: 'If I were…, I would…：如果我是……，我會……',
          eg: '*If I were* the owner of the garden, *I would feel* both angry and disappointed.',
          ask: '填空：',
          items: [
            { q: 'If I ___ (be) the principal, I would let students sleep late on Mondays.', a: ['were'] },
            { q: 'If I were a teacher, I ___ (give) less homework.', a: ['would give'] },
          ],
        },
        {
          id: 'E4', h: '對比收尾：A 也許……，但 B 應該……',
          eg: 'A beautiful photo *may last* for a few years, *but* a beautiful garden *should be protected* for everyone.',
          ask: '寫出對比的後半句：',
          items: [
            { q: 'A new phone may make you happy for a week, but ___.', a: ['a good friend can make you happy for years', 'good habits can make you happy for life'], open: true },
            { q: '寫你自己的一句：', a: ['A selfie may get a few likes, but a clean beach should be kept for everyone.'], open: true, long: true },
          ],
        },
      ],
    },

    {
      id: 'F', kind: 'cloze',
      title: '範文填空', titleEn: 'Cloze',
      lead: '點一個空格，再點下面的字。填對了會留下來；不對的字會晃一下，可以再選。',
      text: [
        'In the picture, many visitors are [[enjoying]] a beautiful flower garden. [[However]], some of them are not following the [[rules]]. [[Although]] there is a sign telling people not to enter the flower area, a few visitors still step into the garden to take pictures. Some flowers may be [[damaged]] because people care more about getting good photos than [[protecting]] the environment. This scene shows a common problem: when people travel, they sometimes forget that [[public]] places should be respected.',
        'If I [[were]] the owner of the garden, I would feel both angry and disappointed. It takes a lot of time and [[effort]] to grow and maintain flowers. One [[careless]] action can destroy the hard work of many people. To solve this problem, the garden should put up clearer [[signs]] and create special photo spots for visitors. More importantly, visitors should learn to be [[responsible]]. A beautiful photo may last for a few years, but a beautiful garden should be protected for everyone.',
      ],
    },

    {
      id: 'G', kind: 'transfer',
      title: '同一個骨架，換一個題目', titleEn: 'Transfer', toc: '換題目寫',
      lead: '選一個場景，用和 110 一樣的骨架寫你自己的兩段：第一段描述畫面、點出問題，第二段寫感受和建議。先填骨架（關鍵字就好），再寫成完整的兩段。打的字只存在這台裝置。',
      scenes: [['博物館裡有人摸展品', 'Visitors touching museum exhibits'], ['海灘上的垃圾', 'Litter on a beach'], ['圖書館裡大聲講電話', 'Loud phone calls in a library']],
      rows: [
        ['先寫看得到的、平靜的畫面', 'many visitors · enjoying a beautiful flower garden'],
        ['However…', 'However · some not following the rules'],
        ['一個具體的畫面', 'Although a sign says no · still step in to take pictures'],
        ['後果＋because', 'flowers damaged · because photos > environment'],
        ['鏡頭拉遠', 'a common problem · forget public places should be respected'],
        ['If I were…, I would feel…', 'the owner · angry and disappointed'],
        ['為什麼', 'takes time and effort to grow flowers'],
        ['一個人 vs 許多人', 'one careless action · the hard work of many people'],
        ['給管理的人', 'To solve this · clearer signs · photo spots'],
        ['More importantly · 換對象', 'visitors · learn to be responsible'],
        ['A may…, but B should…', 'a photo · a few years ↔ a garden · for everyone'],
      ],
      cost: ['我從誰的角度寫', '最後那句對比的兩邊'],
      words: 170,
      checks: [
        '第一段先寫圖片裡看得到的，再用 However 轉到問題',
        '用一個具體畫面說明問題（告示牌、走進去做什麼），不只寫 behave badly',
        '第一段最後一句把鏡頭拉遠，點出一個普遍現象',
        '第二段選定一個角度，用 If I were…, I would… 說出感受',
        '至少兩個建議，用 More importantly 換對象',
        '最後一句用「A 也許……，但 B 應該……」的對比收尾，講完就停',
        '第一段用現在式描述圖片，約 160–180 字',
      ],
    },
  ],
};

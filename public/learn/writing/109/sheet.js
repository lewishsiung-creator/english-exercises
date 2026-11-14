/* 109 練習單 — Lewis's paper worksheet for the 109 學測 essay
   (109_Department_Store_Worksheet, 7 pages), as a page (2026-11-14).

   The essay itself is not copied here: the sentences, their Chinese and each
   sentence's job come from ESSAYS.e109 in ../content.js, so C, D, F, G and the
   model essay can never drift from the essay page. practice.js throws if this
   file and the essay stop matching (a cloze that no longer spells the essay,
   a skeleton with the wrong number of rows, a job not in `moves`).

   Everything else is the worksheet's own, with three changes, all for the
   screen:
   - Part A had blank lines and no key; the 參考想法 are written for this page.
   - Part F's word bank was printed in answer order; here it is alphabetical.
   - A tick on the worksheet's answers that a student would write differently
     but correctly (sold out without were; while-clause first) — accepted too. */

const SHEET = {
  year: '109',
  essay: 'e109',
  kicker: '109 學年度學測 · 看圖說故事 · 2 段 · 約 180 words',
  time: '建議時間 50 分鐘：A–F 約 30 分鐘，G 約 20 分鐘。範文全文在最後，寫完 G 再看。',

  parts: [
    {
      id: 'A', kind: 'warmup',
      title: '暖身：先想再寫', titleEn: 'Warm-up',
      lead: '題目情境：百貨公司週年慶，兩張圖。第一段描述場景與事件開端，第二段寫後續發展與結局。每一題先自己想（說出來或寫在紙上），再看參考想法。',
      items: [
        {
          q: '週年慶的百貨公司裡，你會看到哪三件事？用英文動詞片語說說看（例：stand in line）。',
          ideas: ['stand in long lines', 'carry shopping bags', 'rush from one counter to another', 'look for the best discount', 'push through the crowd'],
        },
        {
          q: '人群裡可能發生什麼「一個小事件」？想出兩個。',
          ideas: ['An elderly woman drops her wallet and does not notice.', 'A little boy loses his mother in the crowd.', 'Two shoppers reach for the last discounted bag at the same time.'],
        },
        {
          q: '這個事件裡，誰要做一個決定？他要付出什麼代價？',
          rows: [['Who', 'a teenage boy'], ['Decision', 'take the wallet to the information desk'], ['Cost', 'miss the popular shoes he came to buy']],
        },
        {
          q: '「不要寫成 Netflix 影集第一季。」為什麼考場故事只需要一個選擇？',
          zh: '考場的時間和字數都有限（約 180 字）。只寫一個決定，才有空間把轉折、代價和結局寫清楚；劇情一多，每件事都只剩一句，故事反而變平。',
        },
      ],
    },

    {
      id: 'B1', kind: 'match',
      title: '字彙配對', titleEn: 'Vocabulary & Chunks',
      lead: '先點左邊的英文，再點右邊它的中文。配對成功會念出來。',
      left: [
        ['be packed with', 'C'], ['rush from one counter to another', 'A'], ['be sold out', 'B'],
        ['accidentally', 'E'], ['be in a hurry to V', 'D'], ['ignore', 'H'], ['anxiously', 'F'],
        ['again and again', 'G'], ['the information desk', 'J'], ['do the right thing', 'I'],
      ],
      right: {
        A: '從一個櫃位衝到另一個', B: '賣光了', C: '擠滿了……', D: '急著做……', E: '不小心地',
        F: '焦急地', G: '一次又一次', H: '不理會', I: '做對的事', J: '服務台',
      },
    },

    {
      id: 'B2', kind: 'gaps',
      title: '片語填空', titleEn: 'Use the chunks',
      lead: '從 B1 選出適當的片語填進去，必要時改變形式（時態、be 動詞）。打好按「對答案」，或按 Enter。',
      bank: ['be packed with', 'accidentally', 'be sold out', 'be in a hurry to V', 'ignore', 'anxiously'],
      items: [
        { s: 'The night market was ___ tourists on Saturday night.', a: ['packed with'], hint: '「擠滿了……」，後面直接接人。' },
        { s: 'I ___ stepped on her foot on the crowded MRT.', a: ['accidentally'], hint: '放在動詞前面的副詞：不是故意的。' },
        { s: 'The concert tickets ___ in five minutes.', a: ['were sold out', 'sold out'], hint: '票「被賣光了」，而且是過去的事：___ sold out。' },
        { s: 'We were ___ catch the last bus, so we ran all the way.', a: ['in a hurry to'], hint: '「急著做……」，空格前已經有 were 了。' },
        { s: "Tom ___ his mom's call and kept playing games.", a: ['ignored'], hint: '「不理會」，而且是過去的事。' },
        { s: 'The little girl looked around ___ for her mother.', a: ['anxiously'], hint: '「焦急地」，形容她怎麼看。' },
      ],
    },

    {
      id: 'C', kind: 'jobs',
      title: '動作配對：每一句在做什麼？', titleEn: 'What is each sentence doing?',
      lead: '範文的每一句都有一個「工作」。一次一句，從八個工作裡選一個；同一個工作可以用不只一次。選錯可以再試。',
      moves: [
        ['定調開場', 'Set the scene'], ['描述圖片', 'Describe the picture'], ['說明原因', 'Give a reason'],
        ['補充細節', 'Add a detail'], ['排除錯誤想法', 'Rule out the wrong choice'], ['轉折', 'Turn'],
        ['說明影響', 'Show the effect'], ['結論收尾', 'Wrap up'],
      ],
      think: [
        { q: '第一段的鏡頭從哪一句開始「縮小」到一個人身上？', a: 'S4：In the middle of the crowd, an elderly woman…——從整個賣場推到一位年長女士身上。' },
        { q: '第二段裡，男孩的決定讓他付出了什麼代價？', a: '他沒買到想要的那雙鞋。朋友趕著去買，他選擇先把皮夾送到服務台。' },
      ],
    },

    {
      id: 'D', kind: 'order',
      title: '句子排序：把第二段排回原來的順序', titleEn: 'Put paragraph 2 back in order',
      lead: '下面是第二段的六句，被打亂了。照原來的順序，一句一句點出來；點錯的會晃一下，不會被拿走。',
      para: 1,
      // the worksheet's letters: (a) is the paragraph's third sentence, and so on
      letters: { a: 2, b: 5, c: 0, d: 4, e: 1, f: 3 },
      clues: ['At first', 'However', 'A few minutes later', 'When she got her wallet back'],
      clueZh: '線索：At first（一開始）→ However（然而）→ A few minutes later（幾分鐘後）→ When she got her wallet back（拿回皮夾時）。時間和轉折的字，就是排序的地圖。',
    },

    {
      id: 'E', kind: 'rewrite',
      title: '句型練習', titleEn: 'Grammar Spotlight',
      lead: '打好之後按「看參考答案」。參考答案只是一種寫法：意思一樣、文法對，就是對的。',
      groups: [
        {
          id: 'E1', h: '分詞片語：一個主詞，同時做好幾件事',
          eg: 'People were standing in long lines, *holding* shopping bags, and *rushing* from one counter to another.',
          ask: '把兩句合成一句：',
          items: [
            { q: 'The students were waiting outside the gym. They were checking their phones.', a: ['The students were waiting outside the gym, checking their phones.'] },
            { q: 'My grandfather sat on the bench. He was feeding the pigeons.', a: ['My grandfather sat on the bench, feeding the pigeons.'] },
            { q: 'The woman came back. She was looking for her wallet.', a: ['The woman came back, looking for her wallet.'] },
          ],
        },
        {
          id: 'E2', h: 'while + 過去進行式：「正在做 A 的時候，發生了 B」',
          eg: 'She accidentally dropped her wallet *while she was trying* to carry several bags.',
          ask: '用 while 把兩句合成一句：',
          items: [
            { q: 'I was crossing the street. I lost my umbrella.', a: ['I lost my umbrella while I was crossing the street.', 'While I was crossing the street, I lost my umbrella.'] },
            { q: 'She was talking on the phone. She missed her stop.', a: ['She missed her stop while she was talking on the phone.', 'While she was talking on the phone, she missed her stop.'] },
          ],
        },
        {
          id: 'E3', h: 'tell sb (not) to V ／ decide to V',
          eg: 'His friends *told him to ignore* it. ／ The boy *decided to take* the wallet to the information desk.',
          ask: '填空：',
          items: [
            { q: 'His friends said to him, "Don\'t help her." → His friends ___.', a: ['told him not to help her'] },
            { q: 'In the end, she ___ (decide / return) the money to the owner.', a: ['decided to return'] },
          ],
        },
        {
          id: 'E4', h: '冒號收尾：先賣關子，再揭曉',
          eg: '…but he gained something more valuable*:* the pride of doing the right thing.',
          ask: '冒號後面寫出那個「更重要的東西」：',
          items: [
            { q: 'She lost the game, but she learned something more important: ___.', a: ['the value of teamwork', 'how to lose with grace'], open: true },
            { q: '寫你自己的一句：', a: ['I missed the concert, but I got something better: a whole evening with my grandmother.'], open: true, long: true },
          ],
        },
      ],
    },

    {
      id: 'F', kind: 'cloze',
      title: '範文填空', titleEn: 'Cloze',
      lead: '點一個空格，再點下面的字。填對了會留下來；不對的字會晃一下，可以再選。',
      // [[word]] marks a blank; with the brackets removed this must be ESSAYS.e109 word for word
      text: [
        'Last weekend, a department store held a big anniversary sale, and the whole place was [[packed]] with shoppers. People were standing in long [[lines]], holding shopping bags, and rushing from one counter to another. Everyone wanted to get the best [[discount]] before the products were sold out. In the middle of the crowd, an elderly woman [[accidentally]] dropped her wallet while she was trying to carry several bags at the same time. She did not [[notice]] it at first and continued walking toward the elevator.',
        'A teenage boy saw the wallet on the floor and [[picked]] it up. At first, his friends told him to [[ignore]] it because they were in a [[hurry]] to buy a popular pair of shoes. [[However]], the boy decided to take the wallet to the information desk. A few minutes later, the elderly woman came back [[anxiously]], looking for it. When she got her wallet back, she thanked the boy again and [[again]]. The boy did not get the shoes he wanted, but he gained something more [[valuable]]: the pride of doing the right thing.',
      ],
    },

    {
      id: 'G', kind: 'transfer',
      title: '同一個骨架，換一個題目', titleEn: 'Transfer', toc: '換題目寫',
      lead: '選一個場景，用和 109 一樣的骨架寫你自己的兩段故事。先填骨架（關鍵字就好），再寫成完整的兩段。打的字只存在這台裝置。',
      scenes: [['夜市週末人潮', 'A busy night market'], ['跨年倒數活動', "A New Year's countdown"], ['捷運尖峰時段', 'An MRT station at rush hour']],
      // one row per essay sentence, in order: what to write there, and 109's own keywords as the placeholder
      rows: [
        ['', 'last weekend · anniversary sale · packed with shoppers'],
        ['人群在做什麼', 'standing in lines · holding bags · rushing'],
        ['大家為什麼在這', 'the best discount · before sold out'],
        ['鏡頭縮到一個人', 'an elderly woman · dropped her wallet · while carrying bags'],
        ['', "didn't notice · walked to the elevator"],
        ['主角出場', 'a teenage boy · picked it up'],
        ['At first…', 'At first · friends: ignore it · in a hurry'],
        ['However… decided to…', 'However · decided to take it to the desk'],
        ['', 'a few minutes later · came back anxiously'],
        ['', 'thanked him again and again'],
        ['冒號揭曉', 'no shoes : the pride of doing the right thing'],
      ],
      cost: ['這個故事的代價是', '換來的是'],
      words: 180,
      checks: [
        '第一段有從「整個大場面」縮到「一個小事件」',
        '第二段只有「一個人」做「一個決定」，而且寫出他付出的代價',
        '用了 At first… / However… 讓轉折清楚',
        '至少用了一個分詞片語（…, holding / looking for…）',
        '至少用了一次 while + was/were V-ing',
        '最後一句用冒號揭曉「更珍貴的東西」',
        '全文用過去式，約 180 字，沒有拉成複雜劇情',
      ],
    },
  ],
};

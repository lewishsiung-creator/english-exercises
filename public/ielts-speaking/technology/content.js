/* Technology — IELTS Speaking Part 3, adult one-to-one.

   The second most examined Part 3 area after education, and the one where a
   candidate's own vocabulary is weakest exactly where the questions are
   hardest: not gadgets, but what gadgets have done to attention, work and
   privacy.

   WRITTEN FOR THIS SITE, not taken from a handout — like education/, and
   unlike the commerce and city clusters. The questions, the language under
   them and all the Chinese are the site's.

   Deliberately not a list of devices. Every question here is about a
   consequence, because that is what Part 3 asks and what candidates who have
   prepared "technology vocabulary" are least ready for.
*/

const LESSON = {
  id: 'technology',
  title: 'Technology',
  titleZh: '科技',

  intro: {
    en: 'Nobody will ask you what your phone can do. They will ask what having it has done to you — to how long you can concentrate, where your work stops, and what you have given away without noticing.',
    zh: '沒有人會問你的手機能做什麼。他們會問：擁有它改變了你什麼——你能專注多久、你的工作在哪裡結束，以及你在不知不覺中交出了什麼。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'talk about a technology’s effects rather than its features', zh: '談一項科技的影響，而不是它的功能' },
      { en: 'take a position on a technology without sounding either frightened or starry-eyed', zh: '對科技表態，而不顯得恐慌或盲目樂觀' },
      { en: 'describe a trade-off in one sentence', zh: '用一句話說清楚一個取捨' },
      { en: 'speculate about what is coming in specific rather than hopeful terms', zh: '用具體而非一廂情願的方式談未來' },
    ],
  },

  source: {
    en: 'Written for this page. Like Education, this lesson does not come from a handout — the questions, the language and the Chinese are all the site’s.',
    zh: '本頁為本站自行撰寫。與〈教育〉相同，本課並非出自講義：題目、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'everyday',
      n: 1,
      en: 'What it has done to ordinary life',
      zh: '它對日常生活做了什麼',
      blocks: [
        {
          t: 'lead',
          en: 'The concrete end. These look like easy questions and produce the flattest answers in the whole test, because “it makes life convenient” is where almost everybody stops.',
          zh: '具體的一端。這些題目看起來簡單，卻會引出整場測驗中最平淡的回答——因為幾乎所有人講到「它讓生活很方便」就停了。',
        },
        {
          t: 'qbank',
          en: 'Questions 1–5',
          zh: '第 1–5 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'How has technology changed the way people communicate?',
              zh: '科技如何改變了人們溝通的方式？',
              words: [
                { en: 'stay in touch', zh: '保持聯絡' },
                { en: 'instant messaging', zh: '即時通訊' },
                { en: 'shallower but more frequent contact', zh: '更頻繁但更淺的往來' },
                { en: 'read tone in a message', zh: '從訊息中判讀語氣' },
                { en: 'face-to-face conversation', zh: '面對面對話' },
              ],
            },
            {
              en: 'Do you think people spend too much time on their phones?',
              zh: '你認為人們花太多時間在手機上嗎？',
              words: [
                { en: 'screen time', zh: '螢幕使用時間' },
                { en: 'designed to be addictive', zh: '刻意設計成讓人上癮' },
                { en: 'a shorter attention span', zh: '更短的專注時間' },
                { en: 'it depends what they are doing on it', zh: '這要看他們在上面做什麼' },
                { en: 'fill every spare moment', zh: '把每一個空檔都填滿' },
              ],
            },
            {
              en: 'Has technology made people more or less productive at work?',
              zh: '科技讓人們在工作上更有生產力，還是更沒有？',
              words: [
                { en: 'automate routine tasks', zh: '把例行工作自動化' },
                { en: 'constant interruptions', zh: '不斷被打斷' },
                { en: 'always reachable', zh: '隨時都找得到人' },
                { en: 'blur the line between work and home', zh: '模糊工作與生活的界線' },
                { en: 'it cuts both ways', zh: '這是雙面刃' },
              ],
            },
            {
              en: 'Why do some older people find new technology difficult to use?',
              zh: '為什麼有些年長者覺得新科技難用？',
              words: [
                { en: 'grow up with it', zh: '從小伴隨著它長大' },
                { en: 'designed for younger users', zh: '以年輕使用者為設計對象' },
                { en: 'the digital divide', zh: '數位落差' },
                { en: 'assume a level of familiarity', zh: '預設了某種程度的熟悉度' },
                { en: 'be left behind', zh: '被拋在後面' },
              ],
            },
            {
              en: 'Should children be given smartphones at a young age?',
              zh: '小孩應該在很小的時候就擁有智慧型手機嗎？',
              words: [
                { en: 'parental controls', zh: '家長監護設定' },
                { en: 'stay in contact with their parents', zh: '和父母保持聯繫' },
                { en: 'exposed to content they are not ready for', zh: '接觸到他們還無法處理的內容' },
                { en: 'the social cost of being the only one without', zh: '成為唯一沒有的人所付出的社交代價' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Push past “convenient”',
          zh: '請越過「方便」這個詞',
          bodyEn: 'Convenience is true, it is the first thing everybody says, and it earns nothing. The second sentence is where the marks are: convenient *for whom*, at *what cost*, and *what did it replace*. Answer those and an ordinary opinion becomes a Band 7 one without any new vocabulary.',
          bodyZh: '「方便」是事實，是每個人第一個會說的話，而且拿不到分。分數在第二句：對「誰」方便、代價是「什麼」、它「取代」了什麼。回答這三件事，一個普通的意見就會變成 Band 7 的回答，而且不需要任何新字彙。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'trade-offs',
      n: 2,
      en: 'The trade-offs',
      zh: '取捨',
      blocks: [
        {
          t: 'lead',
          en: 'The middle of the set, where every question has a cost on one side and a benefit on the other. These are balance questions whatever words they use.',
          zh: '題組的中段：每一題都是一邊有代價、一邊有好處。無論措辭如何，這些都是平衡題。',
        },
        {
          t: 'qbank',
          en: 'Questions 6–10',
          zh: '第 6–10 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Are people too willing to give away their personal information online?',
              zh: '人們是否太輕易地在網路上交出自己的個人資料？',
              words: [
                { en: 'personal data', zh: '個人資料' },
                { en: 'read the terms and conditions', zh: '閱讀條款與細則' },
                { en: 'trade privacy for convenience', zh: '用隱私換取便利' },
                { en: 'targeted advertising', zh: '精準廣告' },
                { en: 'until something goes wrong', zh: '直到出事為止' },
              ],
            },
            {
              en: 'Is social media good or bad for society?',
              zh: '社群媒體對社會是好是壞？',
              words: [
                { en: 'give a voice to people who had none', zh: '讓原本沒有聲音的人有了發言權' },
                { en: 'spread misinformation', zh: '散播錯誤資訊' },
                { en: 'an echo chamber', zh: '同溫層' },
                { en: 'compare yourself with others', zh: '拿自己和別人比較' },
                { en: 'it is neither, it is a tool', zh: '它都不是，它是工具' },
              ],
            },
            {
              en: 'Should companies be allowed to replace workers with machines?',
              zh: '企業應該被允許用機器取代勞工嗎？',
              words: [
                { en: 'automation', zh: '自動化' },
                { en: 'dangerous or repetitive work', zh: '危險或重複性的工作' },
                { en: 'retrain the workforce', zh: '讓勞動力重新受訓' },
                { en: 'the people who lose out are rarely the ones who benefit', zh: '受害的人很少是受益的人' },
              ],
            },
            {
              en: 'Do you think technology has made people lonelier?',
              zh: '你認為科技讓人更孤單了嗎？',
              words: [
                { en: 'connected but not close', zh: '連結得上，卻不親近' },
                { en: 'a substitute for company', zh: '陪伴的替代品' },
                { en: 'for people who are isolated anyway', zh: '對本來就孤立的人而言' },
                { en: 'correlation is not cause', zh: '相關不等於因果' },
              ],
            },
            {
              en: 'How can people protect themselves from false information online?',
              zh: '人們可以如何保護自己不受網路不實資訊影響？',
              words: [
                { en: 'check the source', zh: '查證來源' },
                { en: 'digital literacy', zh: '數位素養' },
                { en: 'look for patterns across sources', zh: '比對多個來源的共同點' },
                { en: 'the responsibility cannot sit with users alone', zh: '責任不能只落在使用者身上' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'One sentence that answers half this step',
          zh: '一句話就能處理這一步的一半題目',
          bodyEn: '“It is a trade-off: you get ________, and you give up ________.” Nearly every question here fits it. Say it early, name both halves specifically, and the rest of the answer is just deciding which half you think matters more.',
          bodyZh: '「這是一個取捨：你得到 ________，而你放棄了 ________。」這一步幾乎每一題都套得進去。早一點說出來，把兩邊都講具體，剩下的就只是決定你認為哪一邊比較重要。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'ahead',
      n: 3,
      en: 'What is coming',
      zh: '接下來會發生的事',
      blocks: [
        {
          t: 'lead',
          en: 'Speculation questions. The failure mode here is not being wrong — nobody is marking your forecast — it is being vague. “Things will be very different” is an answer with no content in it.',
          zh: '推測題。這裡的失敗模式不是「猜錯」——沒有人在評你的預測準不準——而是「含糊」。「未來會很不一樣」這種回答，沒有任何內容。',
        },
        {
          t: 'qbank',
          en: 'Questions 11–15',
          zh: '第 11–15 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Which jobs do you think will disappear in the next twenty years?',
              zh: '你認為未來二十年哪些工作會消失？',
              words: [
                { en: 'be replaced by software', zh: '被軟體取代' },
                { en: 'anything predictable', zh: '任何可預測的工作' },
                { en: 'jobs that need judgment', zh: '需要判斷力的工作' },
                { en: 'change rather than disappear', zh: '是改變而不是消失' },
              ],
            },
            {
              en: 'Will artificial intelligence be more of a help or a threat?',
              zh: '人工智慧比較會是助力，還是威脅？',
              words: [
                { en: 'take over the tedious part', zh: '接手乏味的那部分' },
                { en: 'depends who controls it', zh: '取決於誰在掌控它' },
                { en: 'make decisions nobody can explain', zh: '做出沒有人解釋得了的決定' },
                { en: 'regulate it before rather than after', zh: '事前而非事後加以規範' },
              ],
            },
            {
              en: 'Should governments control how new technology is used?',
              zh: '政府應該管制新科技的使用方式嗎？',
              words: [
                { en: 'introduce regulations', zh: '訂定法規' },
                { en: 'hold companies accountable', zh: '要求企業負起責任' },
                { en: 'stifle innovation', zh: '扼殺創新' },
                { en: 'the law is always behind the technology', zh: '法律永遠落後於科技' },
              ],
            },
            {
              en: 'Is it important for everyone to understand how technology works?',
              zh: '每個人都需要理解科技如何運作嗎？',
              words: [
                { en: 'you do not need to be an engineer', zh: '你不必是工程師' },
                { en: 'enough to make informed choices', zh: '足以做出有依據的選擇' },
                { en: 'at the mercy of whoever built it', zh: '任憑建造者擺布' },
                { en: 'basic digital literacy', zh: '基本的數位素養' },
              ],
            },
            {
              en: 'What technology would you most like to see invented?',
              zh: '你最希望看到什麼科技被發明出來？',
              words: [
                { en: 'solve a problem we have lived with', zh: '解決一個我們長期忍受的問題' },
                { en: 'something unglamorous but useful', zh: '不起眼但實用的東西' },
                { en: 'I would rather see ________ than ________', zh: '比起 ________，我更希望看到 ________' },
                { en: 'free people up to', zh: '讓人們挪出餘力去' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Question 15 is a Part 1 question in disguise',
          zh: '第 15 題是偽裝過的 Part 1 題目',
          bodyEn: 'It says “you”, so it invites a personal answer — and here that is allowed, because the question asked for one. But finish by widening it: say who else it would help and why. A Part 3 personal answer that never comes back out to the general is a Part 1 answer in the wrong room.',
          bodyZh: '它用了 you，所以在邀請你談個人——而這一題確實可以，因為題目就是這樣問的。但請在收尾時把範圍拉大：說出它還會幫到誰、為什麼。一個始終沒有拉回通則的個人回答，在 Part 3 就是走錯房間的 Part 1 答案。',
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'practice',
      n: 4,
      en: 'Practice',
      zh: '練習',
      blocks: [
        {
          t: 'bank',
          en: 'Phrases that work across the whole topic',
          zh: '整個主題都用得上的片語',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'it cuts both ways', zh: '這是雙面刃' },
            { en: 'trade privacy for convenience', zh: '用隱私換取便利' },
            { en: 'blur the line between A and B', zh: '模糊 A 與 B 的界線' },
            { en: 'the digital divide', zh: '數位落差' },
            { en: 'be replaced by software', zh: '被軟體取代' },
            { en: 'hold companies accountable', zh: '要求企業負起責任' },
            { en: 'stifle innovation', zh: '扼殺創新' },
            { en: 'free people up to', zh: '讓人們挪出餘力去' },
            { en: 'connected but not close', zh: '連結得上，卻不親近' },
            { en: 'the law is always behind the technology', zh: '法律永遠落後於科技' },
          ],
        },
        {
          t: 'clock',
          en: 'Against the clock',
          zh: '計時進行',
        },
        {
          t: 'task',
          en: 'Say it',
          zh: '說出來',
          instructionEn: 'Pull a question from any bank above. Open its language first, then answer. Record it and listen back.',
          instructionZh: '從上面任一題庫抽一題。先打開該題的用語，再回答。錄下來並回聽。',
          checklist: [
            { en: 'You got past “convenient” by the second sentence', zh: '第二句就越過了「方便」' },
            { en: 'The trade-off is named: what you get, what you give up', zh: '明確說出取捨：得到什麼、放棄什麼' },
            { en: 'Two phrases from that question’s own list', zh: '該題用語清單中的兩個片語' },
            { en: 'A specific prediction, not a hopeful one', zh: '一個具體的預測，而不是一廂情願的期望' },
            { en: 'A conclusion in one sentence', zh: '一句話的結論' },
          ],
        },
      ],
    },
  ],
};

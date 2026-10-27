/* Environment — IELTS Speaking Part 3, adult one-to-one.

   WRITTEN FOR THIS SITE, not taken from a handout — like education/ and
   technology/, and unlike the commerce and city clusters. The questions, the
   language under them and all the Chinese are the site's.

   The hardest Part 3 topic to answer without sounding like a poster. Every
   question here has a well-worn virtuous answer available, and a candidate who
   reaches for it scores nothing: "we should all protect the environment" is
   agreeable, contentless and instantly recognisable as filler. The notes in
   this lesson are mostly about getting past that.
*/

const LESSON = {
  id: 'environment',
  title: 'Environment',
  titleZh: '環境',

  intro: {
    en: 'The topic where the obvious answer is always available and never worth anything. Everyone agrees the environment matters; nobody is being marked on agreeing. What earns a band here is saying why the obvious thing has not happened.',
    zh: '在這個主題裡，「正確答案」永遠唾手可得，而且一文不值。每個人都同意環境很重要，但沒有人是因為「同意」而拿到分數的。這裡真正拿分的，是說出「為什麼那件理所當然的事還沒發生」。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'get past “we should all protect the environment” in one sentence', zh: '一句話就越過「我們都應該保護環境」' },
      { en: 'explain why people do not act on what they already believe', zh: '解釋為什麼人們不照自己相信的事去做' },
      { en: 'argue about who pays without blaming everyone equally', zh: '討論誰該買單，而不是把責任平均分給所有人' },
      { en: 'talk about a trade-off between growth and protection honestly', zh: '誠實地談論成長與環保之間的取捨' },
    ],
  },

  source: {
    en: 'Written for this page. Like Education and Technology, this lesson does not come from a handout — the questions, the language and the Chinese are all the site’s.',
    zh: '本頁為本站自行撰寫。與〈教育〉〈科技〉相同，本課並非出自講義：題目、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'why-it-persists',
      n: 1,
      en: 'The problems, and why they persist',
      zh: '問題，以及它為什麼持續存在',
      blocks: [
        {
          t: 'lead',
          en: 'Naming a problem is the easy half and almost nobody stops there — they stop at the half after it, which is saying it is serious. The marked half is the third one: why it has not been solved by people who know about it.',
          zh: '說出問題是容易的那一半，而且幾乎沒有人停在那裡——大家停在下一半：說它很嚴重。真正被評分的是第三半：為什麼知道有問題的人，還是沒有把它解決掉。',
        },
        {
          t: 'qbank',
          en: 'Questions 1–5',
          zh: '第 1–5 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'What are the most serious environmental problems in your country?',
              zh: '你的國家最嚴重的環境問題是什麼？',
              words: [
                { en: 'air quality', zh: '空氣品質' },
                { en: 'waste disposal', zh: '廢棄物處理' },
                { en: 'water shortages', zh: '缺水' },
                { en: 'it varies by region', zh: '各地情況不同' },
                { en: 'the one people actually notice', zh: '民眾真正會察覺到的那一個' },
              ],
            },
            {
              en: 'Why do people find it difficult to change their habits to protect the environment?',
              zh: '為什麼人們很難為了環保而改變習慣？',
              words: [
                { en: 'the cost is immediate, the benefit is distant', zh: '代價是立即的，好處是遙遠的' },
                { en: 'break a habit', zh: '改掉一個習慣' },
                { en: 'feel like a drop in the ocean', zh: '覺得只是杯水車薪' },
                { en: 'the convenient option is the default', zh: '方便的選項是預設值' },
              ],
            },
            {
              en: 'How effective are recycling programmes?',
              zh: '回收制度的成效如何？',
              words: [
                { en: 'sorting at source', zh: '源頭分類' },
                { en: 'contaminated recycling', zh: '受污染而無法回收的回收物' },
                { en: 'reduce before you recycle', zh: '先減量，再回收' },
                { en: 'it depends on what happens afterwards', zh: '要看回收之後發生了什麼' },
                { en: 'make people feel they have done enough', zh: '讓人覺得自己已經做夠了' },
              ],
            },
            {
              en: 'Why do some people doubt scientific warnings about the environment?',
              zh: '為什麼有些人懷疑科學界對環境的警告？',
              words: [
                { en: 'the predictions keep moving', zh: '預測一直在變動' },
                { en: 'it would cost them something to believe it', zh: '相信它是要付出代價的' },
                { en: 'distrust of institutions', zh: '對體制的不信任' },
                { en: 'uncertainty is read as disagreement', zh: '把不確定性誤讀成意見分歧' },
              ],
            },
            {
              en: 'Do you think environmental education in schools makes a difference?',
              zh: '你認為學校的環境教育有用嗎？',
              words: [
                { en: 'children take it home', zh: '孩子會把它帶回家' },
                { en: 'raise awareness', zh: '提高意識' },
                { en: 'awareness is not behaviour', zh: '有意識不等於會行動' },
                { en: 'habits formed early', zh: '從小養成的習慣' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'The best sentence in this topic',
          zh: '這個主題最好用的一句話',
          bodyEn: '“The cost is immediate and the benefit is distant.” It answers question 2 outright, and it is also the real answer to most of questions 6 to 15. Why do companies pollute, why do countries delay, why does nobody drive less — the shape is the same every time, and naming it once sounds like analysis rather than opinion.',
          bodyZh: '「代價是立即的，好處是遙遠的。」這句話直接回答了第 2 題，而且也是第 6 到 15 題多數題目的真正答案。企業為什麼排污、國家為什麼拖延、為什麼沒有人少開車——結構每次都一樣，把它講出來一次，聽起來就是分析，而不是意見。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'who-pays',
      n: 2,
      en: 'Who should act',
      zh: '該由誰行動',
      blocks: [
        {
          t: 'lead',
          en: 'The responsibility questions, and the place where “everyone has a part to play” goes to die. It is true, it is what the examiner expects, and it answers nothing.',
          zh: '責任類題目，也是「每個人都有責任」這句話陣亡的地方。它是真的、是考官預期中的、而且什麼都沒回答到。',
        },
        {
          t: 'qbank',
          en: 'Questions 6–10',
          zh: '第 6–10 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Should individuals or governments do more to protect the environment?',
              zh: '保護環境應該由個人還是政府多做一些？',
              words: [
                { en: 'individual action adds up slowly', zh: '個人行動累積得很慢' },
                { en: 'only governments can change the default', zh: '只有政府能改變預設選項' },
                { en: 'shift responsibility onto consumers', zh: '把責任推給消費者' },
                { en: 'it is not an either-or, but it is a ranking', zh: '這不是二選一，但確實有先後' },
              ],
            },
            {
              en: 'Should companies be forced to pay for the pollution they cause?',
              zh: '企業應該被迫為自己造成的污染付費嗎？',
              words: [
                { en: 'the polluter pays', zh: '污染者付費' },
                { en: 'pass the cost on to customers', zh: '把成本轉嫁給消費者' },
                { en: 'an external cost', zh: '外部成本' },
                { en: 'build it into the price', zh: '把它算進價格裡' },
                { en: 'enforcement is the hard part', zh: '難的是執行' },
              ],
            },
            {
              en: 'Is it fair to ask developing countries to reduce emissions?',
              zh: '要求開發中國家減排，公平嗎？',
              words: [
                { en: 'developed countries got there first', zh: '已開發國家是先走到那一步的' },
                { en: 'historical responsibility', zh: '歷史責任' },
                { en: 'the right to develop', zh: '發展的權利' },
                { en: 'help with the technology rather than the demand', zh: '提供技術協助，而不只是提出要求' },
              ],
            },
            {
              en: 'Why has climate change become such a divisive issue?',
              zh: '為什麼氣候變遷變成一個如此分裂的議題？',
              words: [
                { en: 'it is about who pays, not about the science', zh: '爭的是誰買單，不是科學本身' },
                { en: 'tied to political identity', zh: '和政治認同綁在一起' },
                { en: 'the people asked to change are not the people who benefit', zh: '被要求改變的人，不是得到好處的人' },
                { en: 'a long-term problem in a short-term system', zh: '一個長期問題落在短期的制度裡' },
              ],
            },
            {
              en: 'Should people eat less meat for environmental reasons?',
              zh: '人們應該為了環境而少吃肉嗎？',
              words: [
                { en: 'land and water use', zh: '土地與水的使用' },
                { en: 'a personal choice with a public cost', zh: '帶有公共代價的個人選擇' },
                { en: 'cutting down rather than cutting out', zh: '減量而不是完全不吃' },
                { en: 'telling people what to eat rarely works', zh: '叫人家吃什麼，通常沒有用' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Rank, then concede — in that order',
          zh: '先排序，再讓步——順序不能反',
          bodyEn: 'These questions want a ranking. Give it first, then hand the other side what it is owed: *Mainly governments — individuals can only choose between the options they are offered, and governments decide what those are. That said, a rule nobody will obey is not worth passing.* You have ranked, conceded and finished in three sentences.',
          bodyZh: '這些題目要的是排序。先排，再把該給另一方的分量補上：「主要是政府——個人只能在被提供的選項中做選擇，而那些選項由政府決定。話雖如此，沒有人會遵守的法規，立了也沒有意義。」三句話，排序、讓步、收尾都完成了。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'ahead',
      n: 3,
      en: 'What happens next',
      zh: '接下來會怎樣',
      blocks: [
        {
          t: 'lead',
          en: 'The forecasting end. The failure here is not pessimism or optimism — it is the answer that commits to neither and says things will probably get better somehow.',
          zh: '預測的一端。這裡的失敗不是太悲觀或太樂觀，而是兩邊都不選，只說「大概會慢慢變好吧」。',
        },
        {
          t: 'qbank',
          en: 'Questions 11–15',
          zh: '第 11–15 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Will renewable energy be able to replace fossil fuels?',
              zh: '再生能源有辦法取代化石燃料嗎？',
              words: [
                { en: 'renewable energy', zh: '再生能源' },
                { en: 'storage is the bottleneck', zh: '儲能是瓶頸' },
                { en: 'the cost has fallen sharply', zh: '成本已經大幅下降' },
                { en: 'replace most of it, not all of it', zh: '取代大部分，而不是全部' },
                { en: 'how fast, not whether', zh: '問題是多快，而不是會不會' },
              ],
            },
            {
              en: 'What will happen if countries fail to act on climate change?',
              zh: '如果各國未能對氣候變遷採取行動，會發生什麼？',
              words: [
                { en: 'extreme weather', zh: '極端天氣' },
                { en: 'the cost of adapting later', zh: '延後適應所付出的代價' },
                { en: 'the people least responsible are hit first', zh: '責任最小的人最先受害' },
                { en: 'migration pressure', zh: '遷移壓力' },
              ],
            },
            {
              en: 'Is economic growth compatible with protecting the environment?',
              zh: '經濟成長和環境保護能並存嗎？',
              words: [
                { en: 'growth in what, exactly', zh: '到底是什麼在成長' },
                { en: 'decouple growth from emissions', zh: '讓成長與排放脫鉤' },
                { en: 'a false choice', zh: '一個假的二選一' },
                { en: 'cleaning up is itself an industry', zh: '治理污染本身就是一個產業' },
              ],
            },
            {
              en: 'How can cities be made more environmentally friendly?',
              zh: '城市可以如何變得更環保？',
              words: [
                { en: 'green spaces', zh: '綠地' },
                { en: 'reduce dependence on cars', zh: '降低對汽車的依賴' },
                { en: 'retrofit existing buildings', zh: '改造既有建築' },
                { en: 'density is not the enemy', zh: '高密度並不是敵人' },
              ],
            },
            {
              en: 'How might people’s daily lives change in a low-carbon future?',
              zh: '在低碳的未來，人們的日常生活可能會有什麼改變？',
              words: [
                { en: 'fly less, travel differently', zh: '少搭飛機，換個方式旅行' },
                { en: 'repair rather than replace', zh: '修理而不是換新' },
                { en: 'most of it would be invisible', zh: '大部分的改變其實看不見' },
                { en: 'not a sacrifice so much as a swap', zh: '與其說是犧牲，不如說是替換' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Question 14 has a trap in the wording',
          zh: '第 14 題的措辭裡有陷阱',
          bodyEn: '“Compatible” invites yes or no, and both sound naive. The strong move is to question the framing: growth in *what*? An economy can grow while its emissions fall, and that distinction is the answer. Noticing that a question contains a false choice, and saying so politely, is one of the clearest Band 7 signals there is.',
          bodyZh: '「能並存嗎」這個問法引你回答是或否，而兩個答案聽起來都很天真。高分的做法是質疑題目的框架：「成長」指的是什麼成長？一個經濟體可以在排放下降的同時成長，而這個區別本身就是答案。能看出題目裡藏著假二選一，並且客氣地說出來，是最明確的 Band 7 訊號之一。',
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
            { en: 'the cost is immediate, the benefit is distant', zh: '代價是立即的，好處是遙遠的' },
            { en: 'the polluter pays', zh: '污染者付費' },
            { en: 'an external cost', zh: '外部成本' },
            { en: 'change the default', zh: '改變預設選項' },
            { en: 'a drop in the ocean', zh: '杯水車薪' },
            { en: 'decouple growth from emissions', zh: '讓成長與排放脫鉤' },
            { en: 'a long-term problem in a short-term system', zh: '長期問題落在短期的制度裡' },
            { en: 'enforcement is the hard part', zh: '難的是執行' },
            { en: 'repair rather than replace', zh: '修理而不是換新' },
            { en: 'that is a false choice', zh: '那是一個假的二選一' },
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
            { en: 'You did not say “we should all protect the environment”', zh: '你沒有說「我們都應該保護環境」' },
            { en: 'A reason why the obvious thing has not happened', zh: '說出了「理所當然的事為什麼還沒發生」' },
            { en: 'A ranking, where the question offered two parties', zh: '題目給了兩方時，你做了排序' },
            { en: 'Two phrases from that question’s own list', zh: '該題用語清單中的兩個片語' },
            { en: 'A conclusion in one sentence', zh: '一句話的結論' },
          ],
        },
      ],
    },
  ],
};

/* A Five-Minute Campaign Speech — reading practice for adults.

   The text is the candidate's own bilingual speech for the 52nd President of
   JCI The Port, kept exactly as written: this page is reading practice,
   not an edit of his words. Only the line breaks are ours, one sentence group
   per line so each is a comfortable unit to read aloud.

   Every visible string is an `en` / `zh` pair. Which one leads depends on the
   mode in the top bar — 讀 Read puts the English first and hides the Chinese
   behind a 中 chip; 記 Recall puts the Chinese first and holds the English
   back until it is asked for.

   Block types:
     lines     the speech itself — one sentence group per entry.
               `k: 1` marks a line worth memorising; it gets a gold rule.
     subhead   a sub-heading inside a section (第一 / 第二 / 第三)
     say       words that are hard to say — a respelling and a Chinese tip
     qa        one question from the election Q&A: a bilingual question shown
               in both languages (it is asked *to* him, so it is context, not
               practice), then the answer as practice lines. **Stars** mark
               the phrase to land on. `pending: 1` renders the question with a
               「回答待補」note instead of an answer — none are pending now, but
               a new question can be added before its answer exists.
*/

const SPEECH = {
  title: 'A Five-Minute Campaign Speech',
  titleZh: '五分鐘政見發表稿',
  kicker: '巨港國際青年商會 · 第52屆理事長候選人',

  source: {
    en: 'Practice text: the candidate’s own five-minute campaign speech for the 52nd President of JCI The Port. The Chinese and the English are reproduced as written.',
    zh: '練習文本：第52屆巨港國際青年商會理事長候選人五分鐘政見發表稿，中英文均依原稿，未經改寫。',
  },

  intro: {
    en: 'The speech first — sixty-two sentences, in the order they are spoken — and then the twenty-four questions from the election floor. Read each line aloud, tap 🔊 to hear it, and tap 中 only when you need the Chinese. When a section feels comfortable, switch to 記 Recall: the Chinese leads, and you say the English before you check it.',
    zh: '先是講稿——全篇六十二句，依演說順序排列——接著是選舉現場的二十四道問答。把每一句大聲讀出來，點 🔊 聽範讀，需要時再點 中 看中文。一段唸熟之後，切換到「記」：中文在前，先把英文說出來，再點開對答案。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'read all 62 sentences of the speech aloud, pausing where the speaker would pause', zh: '朗讀講稿全部 62 句，並在該停頓的地方停頓' },
      { en: 'say the twenty-eight words that most often trip up Mandarin speakers', zh: '唸出 28 個中文母語者最常唸錯的單字' },
      { en: 'produce each English sentence from the Chinese alone', zh: '只看中文，就能把英文說出來' },
      { en: 'deliver the whole speech inside five minutes', zh: '在五分鐘之內完成整篇演說' },
      { en: 'answer all twenty-four election questions without reading from a script', zh: '不看稿，回答二十四道選舉問答' },
    ],
  },

  sections: [
    // ================================================================ 0
    {
      id: 'open',
      n: '開',
      en: 'Opening',
      zh: '開場',
      blocks: [
        {
          t: 'lines',
          items: [
            {
              en: 'Chairperson, past presidents, members of The Port family, and honored guests, good evening.',
              zh: '大會主席、各位前會長、各位巨港家人、各位貴賓，大家晚安。',
            },
            {
              en: 'I am James Chen, a candidate for the 52nd President of JCI The Port.',
              zh: '我是第52屆理事長候選人陳建宏。',
            },
            {
              en: 'As I stand here today, I feel thankful, but I also feel a strong responsibility.',
              zh: '今天站在這裡，我的心中除了感謝，更多的是一份責任。',
            },
            {
              en: 'I have always believed that everyone should have a dream, and everyone deserves support to move toward that dream.',
              zh: '我始終相信：每一個人都應該有夢想，也值得被幫助，朝著夢想前進。',
            },
            {
              en: 'Therefore, the main idea of my campaign is:',
              zh: '因此，我這次參選的核心理念是：',
            },
            {
              en: 'Build Dreams and Bring Greater Honor to The Port.',
              zh: '建築夢想，宏揚巨港。',
              k: 1,
            },
          ],
        },
        {
          t: 'say',
          en: 'Words to watch',
          zh: '注意發音',
          items: [
            { w: 'Chairperson', say: 'CHAIR-per-son', zh: '重音在第一個音節。' },
            { w: 'honored', say: 'ON-erd', zh: 'h 不發音，開頭直接唸母音。' },
            { w: 'responsibility', say: 'ri-spon-suh-BIL-uh-tee', zh: '六個音節，重音落在 BIL。' },
            { w: 'deserves', say: 'di-ZERVZ', zh: '字尾 -ves 唸 /vz/，別漏掉。' },
            { w: 'Therefore', say: 'THAIR-for', zh: '兩個音節，重音在前。' },
          ],
        },
      ],
    },

    // ================================================================ 1
    {
      id: 'why',
      n: 1,
      en: 'Why Am I Running?',
      zh: '我為什麼參選？',
      blocks: [
        {
          t: 'lines',
          items: [
            {
              en: 'In June 2024, a friend introduced me to JCI The Port.',
              zh: '2024年6月，透過朋友引薦，我第一次接觸巨港青商。',
            },
            {
              en: 'At my first board meeting, I saw two important things.',
              zh: '第一次參加理事會，我看見了兩件事。',
            },
            {
              en: 'The first was passion. Every member was thinking about how to make The Port better and how to invite more young people to join.',
              zh: '第一，是熱情。每位會員都在思考，如何讓巨港更好，如何吸引更多青年加入。',
            },
            {
              en: 'The second was professionalism. Every proposal was discussed carefully. The system, duties, and responsibilities were clear.',
              zh: '第二，是專業。議案討論嚴謹、制度完整、分工清楚、責任明確。',
            },
            {
              en: 'At that moment, I knew that The Port was not only a place to make friends. It was also a place to develop leaders.',
              zh: '那一刻，我知道巨港不只是交朋友的地方，更是一個培養領導者的平台。',
              k: 1,
            },
            {
              en: 'After joining, I saw senior members share their experience, officers build clear systems, and members help new partners grow.',
              zh: '加入之後，我看見前輩願意分享經驗，幹部願意建立制度，會員願意幫助新夥伴成長。',
            },
            {
              en: 'This culture of sharing and passing on experience touched me deeply.',
              zh: '這份「傳承、不藏私」的文化，讓我非常感動。',
            },
            {
              en: 'I am not running because I think I am the best. I am running because I believe in The Port, and I am ready to take responsibility and serve everyone.',
              zh: '所以，我參選不是因為我覺得自己最厲害，而是因為我認同巨港，也願意承擔責任，為大家服務。',
              k: 1,
            },
          ],
        },
        {
          t: 'say',
          en: 'Words to watch',
          zh: '注意發音',
          items: [
            { w: 'introduced', say: 'in-truh-DOOST', zh: '字尾 -ced 唸 /st/，不是 /sɪd/。' },
            { w: 'passion', say: 'PASH-un', zh: 'a 是短母音，不要唸成 pay。' },
            { w: 'professionalism', say: 'pruh-FESH-uh-na-lizm', zh: '五個音節，重音在 FESH。' },
            { w: 'experience', say: 'ik-SPEER-ee-uns', zh: '重音在 SPEER，開頭的 ex- 要輕。' },
            { w: 'leaders', say: 'LEE-derz', zh: '長母音 ee，和 letters 分清楚。' },
          ],
        },
      ],
    },

    // ================================================================ 2
    {
      id: 'goals',
      n: 2,
      en: 'My Three Main Goals for 2027',
      zh: '2027年，我有三個主要願景',
      blocks: [
        {
          t: 'subhead',
          en: 'First, Make The Port Influential',
          zh: '第一，打造有影響力的巨港',
        },
        {
          t: 'lines',
          items: [
            {
              en: 'The value of JCI is not only about holding events. It is about creating change through action.',
              zh: '青商的價值不只是辦活動，而是透過行動創造改變。',
              k: 1,
            },
            {
              en: 'In 2027, we will focus on three areas: serving the community, developing young people, and creating influence.',
              zh: '2027年，我們將聚焦三件事：服務社區、培育青年、創造影響力。',
            },
            {
              en: 'Every community project should answer a real need in society.',
              zh: '每一次社區服務，都要回應真正的社會需求。',
            },
            {
              en: 'Every training course should give young people useful skills.',
              zh: '每一場課程，都要讓青年學到真正能使用的能力。',
            },
            {
              en: 'Every partnership should help more people learn about The Port.',
              zh: '每一次合作，都要讓更多人看見巨港。',
            },
            {
              en: 'In the future, when people talk about The Port, I hope they will say:',
              zh: '我希望未來當別人提到巨港，他們會想到：',
            },
            {
              en: '“They are young leaders who are willing to work for Kaohsiung, for young people, and for society.”',
              zh: '「這是一群願意為高雄、為青年、為社會付出的年輕領導者。」',
              k: 1,
            },
          ],
        },

        {
          t: 'subhead',
          en: 'Second, Help Every Member Succeed',
          zh: '第二，成就每一位會員',
        },
        {
          t: 'lines',
          items: [
            { en: 'I often say:', zh: '我常說：' },
            {
              en: 'Members do not come to work for JCI. They come to JCI to become better people.',
              zh: '會員不是來為青商工作，而是透過青商成就更好的自己。',
              k: 1,
            },
            {
              en: 'In the coming year, I will provide more opportunities to practise.',
              zh: '未來一年，我會提供更多實踐機會。',
            },
            {
              en: 'I will encourage members to organize events, lead courses, and manage projects.',
              zh: '我會鼓勵會員舉辦活動、主持課程、承擔專案。',
            },
            {
              en: 'Leadership is not learned only by listening. It is learned by doing.',
              zh: '因為領導力不是聽來的，而是做出來的。',
              k: 1,
            },
            {
              en: 'I will also build a platform for cooperation between different industries and connect members’ skills, resources, and business experience.',
              zh: '我也會建立跨產業合作平台，整合會員的專業、資源與行業經驗。',
            },
            {
              en: 'The Port should offer more than personal connections. It should create real opportunities.',
              zh: '讓巨港不只是人脈，更能創造真正的機會。',
            },
            {
              en: 'I will also start a professional sharing program. Members can share their knowledge, and more young people can learn about The Port.',
              zh: '同時，我會推動職人分享計畫，讓會員分享專業，也讓更多優秀青年認識巨港。',
            },
            {
              en: 'I hope every member can say:',
              zh: '我希望未來每位會員都能說：',
            },
            {
              en: '“Joining The Port was one of the most valuable investments in my life.”',
              zh: '「加入巨港，是我人生最有價值的投資之一。」',
              k: 1,
            },
          ],
        },

        {
          t: 'subhead',
          en: 'Third, Strengthen the Culture of The Port',
          zh: '第三，深化巨港文化',
        },
        {
          t: 'lines',
          items: [
            {
              en: 'The most valuable part of The Port is not only our ability to organize events. It is our culture.',
              zh: '巨港最珍貴的，不只是辦活動的能力，而是我們的文化。',
            },
            {
              en: 'That culture is friendship, service, and training.',
              zh: '這個文化就是：友誼、服務、訓練。',
              k: 1,
            },
            {
              en: 'For friendship, we will continue to organize social, travel, and sports activities. Members should not only know one another. They should trust one another.',
              zh: '在友誼上，我們會持續舉辦聯誼、旅遊與運動活動，讓會員不只是認識，更能建立信任。',
            },
            {
              en: 'For service, I hope The Port will continue to support local communities, students in need, homeless animals, and others who need help.',
              zh: '在服務上，我希望巨港持續深入社區，關懷弱勢學生、流浪動物與其他需要協助的人。',
            },
            { en: 'I believe:', zh: '我相信：' },
            {
              en: 'When we serve others, we also improve ourselves.',
              zh: '服務他人，就是成就自己。',
              k: 1,
            },
            {
              en: 'For training, we will continue to encourage members to join meeting procedure training, the Golden Mouth Award, Oregon Debate, and other courses.',
              zh: '在訓練上，我們會持續鼓勵會員參與會議規範、金口獎、奧瑞岡辯論與各項課程。',
            },
            {
              en: 'I do not want only a few people to speak and lead. I want more members to be brave enough to stand on stage, express their ideas, and lead others.',
              zh: '我希望不只是少數人會說、會帶，而是有更多會員敢上台、敢表達、敢領導。',
            },
            {
              en: 'True succession is not only about finishing events. It is about developing people.',
              zh: '因為真正的傳承，不只是把活動辦完，而是把人才帶出來。',
              k: 1,
            },
          ],
        },
        {
          t: 'say',
          en: 'Words to watch',
          zh: '注意發音',
          items: [
            { w: 'influence, influential', say: 'IN-floo-uns → in-floo-EN-shul', zh: '名詞重音在前，形容詞移到 EN。' },
            { w: 'community', say: 'kuh-MYOO-nuh-tee', zh: '重音在 MYOO，開頭的 co- 要輕。' },
            { w: 'Kaohsiung', say: 'KOW-shung', zh: '說英文時的唸法，兩個音節。' },
            { w: 'opportunities', say: 'op-er-TOO-nuh-teez', zh: '五個音節，重音在 TOO。' },
            { w: 'valuable', say: 'VAL-yoo-bul', zh: '三個音節就好，不要唸成四個。' },
            { w: 'succession', say: 'suk-SESH-un', zh: '和 success 不同字，字尾是 -sion。' },
          ],
        },
      ],
    },

    // ================================================================ 3
    {
      id: 'hope',
      n: 3,
      en: 'The Port I Hope to Build',
      zh: '我期待的巨港',
      blocks: [
        {
          t: 'lines',
          items: [
            {
              en: 'I hope The Port will not only become bigger. I hope it will become warmer.',
              zh: '我期待的巨港，不只是更大，而是更有溫度。',
              k: 1,
            },
            {
              en: 'I hope new members will have someone to guide them.',
              zh: '我希望新會員加入時，有人陪伴。',
            },
            {
              en: 'I hope long-term members will feel that staying is valuable.',
              zh: '老會員留下時，感到值得。',
            },
            {
              en: 'I hope senior members will share their experience, officers will take responsibility, and families will give their support.',
              zh: '前輩願意傳承，幹部願意承擔，家人願意支持。',
            },
            {
              en: 'A truly great chapter is not built by one president. It is built by people who are willing to help one another succeed.',
              zh: '因為一個真正偉大的分會，不是靠一位理事長，而是靠一群願意彼此成就的人。',
              k: 1,
            },
            {
              en: 'One idea is very important to me:',
              zh: '我非常重視一句話：',
            },
            {
              en: 'The president should not stand in front of The Port family. The president should stand beside every member.',
              zh: '理事長不是站在巨港的前面，而是站在巨港家人的身邊。',
              k: 1,
            },
          ],
        },
        {
          t: 'say',
          en: 'Words to watch',
          zh: '注意發音',
          items: [
            { w: 'chapter', say: 'CHAP-ter', zh: '這裡是「分會」，不是「章節」。' },
            { w: 'president', say: 'PREZ-uh-dunt', zh: '重音在第一個音節。' },
            { w: 'truly', say: 'TROO-lee', zh: '拼字沒有 e，唸法也沒有。' },
            { w: 'warmer', say: 'WOR-mer', zh: 'w 開頭要圓唇，和 farmer 分清楚。' },
          ],
        },
      ],
    },

    // ================================================================ 4
    {
      id: 'promise',
      n: 4,
      en: 'My Promise',
      zh: '我的承諾',
      blocks: [
        {
          t: 'lines',
          items: [
            {
              en: 'Dear members of The Port family, one person can have a dream, but a group of people can give that dream a better chance to come true.',
              zh: '各位巨港家人，夢想，一個人可以擁有；但一群人，可以讓夢想更有機會實現。',
              k: 1,
            },
            {
              en: 'If I am lucky enough to receive your support, I cannot promise that everything will be perfect. However, I can promise:',
              zh: '如果有幸獲得大家的支持，我不敢承諾每件事都完美，但我承諾：',
            },
            { en: 'I will listen carefully.', zh: '我會認真傾聽。' },
            { en: 'I will serve sincerely.', zh: '我會真誠服務。' },
            { en: 'I will be brave enough to take responsibility.', zh: '我會勇於承擔。' },
            { en: 'I will move forward together with all of you.', zh: '我會與大家並肩前行。' },
          ],
        },
        {
          t: 'say',
          en: 'Words to watch',
          zh: '注意發音',
          items: [
            { w: 'promise', say: 'PROM-is', zh: '重音在前，字尾輕輕帶過。' },
            { w: 'sincerely', say: 'sin-SEER-lee', zh: '重音在 SEER。' },
            { w: 'perfect', say: 'PER-fikt', zh: '形容詞重音在前，動詞才在後。' },
            { w: 'brave', say: 'BRAYV', zh: '長母音 ay，字尾 v 要出聲。' },
          ],
        },
      ],
    },

    // ================================================================ 5
    {
      id: 'close',
      n: '結',
      en: 'Closing',
      zh: '結語',
      blocks: [
        {
          t: 'lines',
          items: [
            {
              en: 'Let us build dreams for young people, create influence in Kaohsiung, and continue the honor of The Port.',
              zh: '讓我們一起為青年建築夢想，在高雄創造影響，為巨港延續榮耀。',
              k: 1,
            },
            {
              en: 'Let more people grow because of The Port.',
              zh: '讓更多人因巨港而成長。',
            },
            {
              en: 'Let more families connect because of The Port.',
              zh: '讓更多家庭因巨港而連結。',
            },
            {
              en: 'Let more parts of society become better because of The Port.',
              zh: '讓更多社會角落因巨港而變得更美好。',
            },
            {
              en: 'I am James Chen, a candidate for the 52nd President of JCI The Port.',
              zh: '我是第52屆理事長候選人陳建宏。',
            },
            {
              en: 'I sincerely ask every member of The Port family to give me an opportunity to serve.',
              zh: '懇請各位巨港家人，給建宏一個服務的機會。',
            },
            { en: 'Let us move forward together:', zh: '讓我們攜手同行：' },
            {
              en: 'Build Dreams and Bring Greater Honor to The Port.',
              zh: '建築夢想，宏揚巨港。',
              k: 1,
            },
            { en: 'Thank you, everyone.', zh: '謝謝大家。' },
          ],
        },
        {
          t: 'say',
          en: 'Words to watch',
          zh: '注意發音',
          items: [
            { w: 'honor', say: 'ON-er', zh: 'h 不發音，和 honored 一樣。' },
            { w: 'society', say: 'suh-SY-uh-tee', zh: '重音在 SY，開頭的 so- 要輕。' },
            { w: 'connect', say: 'kuh-NEKT', zh: '重音在後面。' },
            { w: 'opportunity', say: 'op-er-TOO-nuh-tee', zh: '單數少一個音節，重音不變。' },
          ],
        },
      ],
    },

    // ================================================================ Q&A
    {
      id: 'qa',
      n: '問',
      en: 'Q&A',
      zh: '問答',
      /* Each question carries its own ▶, so there is no section-wide one:
         two dozen answers back to back is not a thing anyone needs to hear. */
      noPlay: 1,
      lead: {
        en: 'Twenty-four questions from the election floor. The question is given in both languages — it is asked to him, so it is context, not practice. The answer below it works exactly like the speech: read it aloud in 讀, produce it from the Chinese in 記. Bold marks the phrase to land on.',
        zh: '選舉現場的二十四道題目。問題本身中英並陳。下方的回答則與講稿相同：在「讀」朗讀，在「記」由中文回想英文。**粗體是該強調的關鍵句。**',
      },
      blocks: [
        {
          t: 'qa',
          n: 1,
          en: 'Vision and Key Priorities',
          zh: '願景與重點工作',
          qEn: ['What is your vision for JCI The Port in the coming year? What are your key priorities and plans?'],
          qZh: ['您對明年度會務的願景、重點工作或藍圖是什麼？'],
          items: [
            { en: 'In 2027, my vision is to **build a more influential JCI The Port and help every member succeed**. Through community service, youth development, cooperation across different industries, and more opportunities to learn by doing, I hope to attract more young people to JCI The Port. I also want every member to grow through JCI.',
              zh: '2027年，我的願景是「打造有影響力的巨港、成就每一位會員」，透過服務社區、培育青年、跨產業合作與更多實踐機會，讓更多青年因巨港而聚集，也讓每位會員因青商而成長、因巨港而精彩。' },
            { en: 'Second, I want to strengthen our culture of **friendship, service, and training**. Through member activities, community service, training programs, and international exchange, members can not only work together but also support each other, grow together, and be willing to take responsibility.',
              zh: '第二，我要深化巨港「友誼、服務、訓練」的文化，透過會員聯誼、社區服務、課程與國際交流，讓會員不只是一起辦活動，更能彼此支持、共同成長、勇於承擔。' },
            { en: 'Another important goal is to **make our meetings more efficient and effective**. I want to change the image that JCI The Port always has long meetings that end very late. I want us to become a chapter that is efficient, gets results, cares about people, and has a stronger team spirit.',
              zh: '另外，明年我會把「提升會議效率與成效」列為重要工作，讓巨港不再被貼上「開會開很晚、一直在開會」的標籤，真正做到有效率、有成果、有溫度，打造一個更有影響力、更有向心力的巨港。' },
          ],
        },
        {
          t: 'qa',
          n: 2,
          en: 'Handling Disagreements',
          zh: '面對反對意見',
          qEn: ['How would you handle and communicate when disagreements arise in a meeting or when most Board members reject your proposal?'],
          qZh: ['當會議上出現反對意見或理事會成員多數否決您的提案時，您會如何處理與溝通？'],
          items: [
            { en: 'If more than half of the Board members are against my proposal, I will continue to communicate with them and explain why I made this proposal.',
              zh: '如果我的提案遭到超過半數理監事反對，我會持續溝通，讓理監事們了解為何有這樣的提案。' },
            { en: 'If more than half of the Board members are still against it after enough discussion, it means the proposal does not have enough support. In that case, **I will respect the majority decision and will not carry out the proposal**.',
              zh: '如果理監事團隊仍有超過半數反對，這表示這個提案無法獲得多數人的支持，我會尊重多數理監事的選擇，不執行這個提案。' },
          ],
        },
        {
          t: 'qa',
          n: 3,
          en: 'Membership Expansion',
          zh: '會擴計畫',
          qEn: ['What specific plans do you have to increase membership? How will you attract and retain new members and increase their participation?'],
          qZh: ['您有哪些具體的會擴計畫？如何吸引並留住新會員並提升參與度？'],
          items: [
            { en: 'Membership growth is very important for the future of our chapter.',
              zh: '會員擴展是分會永續經營的命脈。' },
            { en: 'Next year, I want to strengthen our **online marketing**. JCI Kaohsiung has attracted many new members through online marketing in recent years, and I think we can learn from them.',
              zh: '未來一年我希望增強網路行銷的部分，高雄分會在近年靠著網路行銷加入非常多生力軍，我認為這是我們可以學習的。' },
            { en: 'We also have members who are experts in online marketing, so we can use their skills to help JCI The Port attract more young people online.',
              zh: '我們會內也有網路行銷行業的專家，我們將藉由他的長才幫助巨港在網路上招募生力軍。' },
            { en: 'At the same time, we will strengthen our **mentoring system**. Senior members will actively support new members and help them become part of the JCI The Port family.',
              zh: '同時，我們將落實輔導學長姐制度，主動關懷新會員，確保每一位新夥伴都能融入大家庭，避免流失。' },
            { en: 'We need both **continuous exposure and real personal support**. We want young people to know and understand JCI The Port. Through activities and shared experiences, we can build strong relationships and encourage them to stay for the long term.',
              zh: '唯有持續曝光與真心陪伴，才能讓巨港品牌更加穩固、持續成長。我們將讓青年知道巨港並了解巨港，並透過活動的舉辦建立深厚的夥伴感情，讓他們願意長期留下來。' },
          ],
        },
        {
          t: 'qa',
          n: 4,
          en: 'JCI "Three Treasures" Training',
          zh: '青商三寶培訓',
          qEn: ['How will you plan member training, such as JCI\'s "Three Treasures"—Public Speaking, Oregon Debate, and Meeting Procedures—and encourage members to continue participating?'],
          qZh: ['您如何規劃會員的培訓，例如青商三寶：金口獎、奧瑞岡辯論及會議規範，並鼓勵會員持續參與？'],
          items: [
            { en: 'JCI\'s "Three Treasures" have always been an important part of JCI The Port. Next year, we will help members understand **why these skills are useful and how they can use them in their careers and other organizations**.',
              zh: '青商三寶一直是巨港的重要特色。未來一年，我們將讓會員了解學習青商三寶有什麼優點，以及如何應用在事業或其他社團活動上。' },
            { en: 'We will continue to encourage members to join competitions and invite trainers to provide professional training. Through training and competition, I hope we can **continue to pass on the Three Treasures to future members**.',
              zh: '我們會持續鼓勵會員參加比賽，也會聘請講師進行培訓，讓青商三寶在巨港繼續傳承下去。' },
          ],
        },
        {
          t: 'qa',
          n: 5,
          en: 'Family, Career, and JCI',
          zh: '家庭、事業與青商',
          qEn: ['Serving as chapter President requires a lot of time and involvement. How will you balance your family, career, and JCI responsibilities?'],
          qZh: ['擔任分會理事長需要投入大量時間與心力。您將如何在家庭、事業與青商責任之間分配時間？'],
          items: [
            { en: '**My family is my support, my career is my foundation, and JCI is a responsibility I choose to take.**',
              zh: '家庭是後盾、事業是根本、青商是承擔。' },
            { en: 'I will communicate with my family in advance and make sure I keep enough time for them. At work, I will build a stronger team and delegate work whenever possible.',
              zh: '我會提前與家人溝通、預留家庭時間，同時將事業制度化、團隊化，把能授權的事情授權出去。' },
            { en: 'For JCI, I will treat chapter affairs as an important one-year project. I will plan my schedule and major activities in advance and divide responsibilities among the team.',
              zh: '青商既然是我選擇承擔的責任，我就會把會務當成年度重要專案，提前排定行程與活動，做好時間管理與團隊分工，不讓所有事情都集中在理事長身上。' },
            { en: 'My goal is not to sacrifice my family or career for JCI. I want to **take good care of my family, manage my business well, and lead the JCI team well**, so that all three can support each other.',
              zh: '我的目標不是犧牲家庭或事業來成就青商，而是把家庭照顧好、事業經營好、青商團隊帶好，讓三者彼此支持，帶著大家一起走得更遠。' },
          ],
        },
        {
          t: 'qa',
          n: 6,
          en: 'The JCI Creed',
          zh: '青商信條',
          qEn: ['As a chapter President, what attitude should you have toward the JCI Creed?'],
          qZh: ['作為一位分會理事長，您認為對於青商信條應該具備怎樣的基本態度？'],
          items: [
            { en: 'I believe that, as a chapter President, it is not enough to simply **remember the JCI Creed**. More importantly, we should **believe in it, practice it, and lead by example**.',
              zh: '我認為，作為一位分會理事長，對青商信條最基本的態度，不只是「熟記」，更重要的是「相信、實踐、以身作則」。' },
            { en: 'The JCI Creed should not just be words on a wall. It should guide us when we make decisions, work with other people, and serve our community.',
              zh: '因為青商信條不是掛在牆上的一句話，而應該成為我們做決策、與人相處以及服務社會時的行動準則。' },
          ],
        },
        {
          t: 'qa',
          n: 7,
          en: 'Helping Members Gain from JCI',
          zh: '讓會員從青商有所收穫',
          qEn: ['If you become the next President of JCI The Port, how will you help members gain something meaningful from JCI?'],
          qZh: ['當您成為下一屆理事長時，您將如何讓會員從青商有所收穫？'],
          items: [
            { en: 'In June this year, I sent a survey to all our members. I asked them one important question: **What do you want to gain from JCI?**',
              zh: '今年六月，我曾經傳一份問卷給所有會員，主要是詢問會員們，在青商會想得到什麼。' },
            { en: 'If I become President next year, I want to understand what each member hopes to achieve. When opportunities come, I will do my best to **help our members reach their goals and achieve their dreams**.',
              zh: '明年如果我成為理事長，我將在機會來臨時，協助會員達成自己的夢想。' },
          ],
        },
        {
          t: 'qa',
          n: 8,
          en: 'Being Examined by Members',
          zh: '接受會員檢視',
          qEn: ['If you become the next President of JCI The Port, how will you make sure that your actions can be openly examined by the members?'],
          qZh: ['當您成為下一屆理事長時，您將如何讓會員仔細審視您的一舉一動？'],
          items: [
            { en: 'If I become President of JCI The Port, I need to understand one thing:',
              zh: '我認為，如果我成為巨港的理事長，就應該要有一個心理準備：' },
            { en: '**I am not standing above the members. I am standing in front of them, and I should be ready for them to examine my actions.**',
              zh: '我不是站在大家上面的人，而是站在大家前面、接受大家檢視的人。' },
            { en: 'My answer is simple: **Lead by example.**',
              zh: '所以如果問我，如何讓會員仔細審視我的一舉一動，我會用四個字回答：**「以身作則。」**' },
            { en: 'I will focus on three things. First, I will keep chapter affairs transparent. Second, I will keep the promises I make. Third, I will listen to and accept different opinions.',
              zh: '我將做到三件事情：第一，會務上透明。第二，承諾過的事情就要做到。第三，接受不同的聲音。' },
          ],
        },
        {
          t: 'qa',
          n: 9,
          en: 'Time Management During the Presidency',
          zh: '任期時間管理',
          qEn: ['How will you manage your time during your term as President of JCI The Port?'],
          qZh: ['當您成為理事長，將如何規劃分配您在任期的時間？'],
          items: [
            { en: 'If I am elected President next year, I will divide the year into **three stages: set the direction, support the team, and prepare for the next generation**.',
              zh: '如果明年有幸當選理事長，我會把一年的時間分成三個階段：**上半年定方向、中間陪團隊、下半年做傳承。**' },
            { en: 'At the beginning of the year, I will make sure that our eight committees clearly understand their goals, responsibilities, and roles.',
              zh: '年初，我會先把八個委員會的目標、工作內容及分工確認清楚，讓大家知道今年要往哪裡走。' },
            { en: 'In the middle of the year, I will focus on important activities, member support, and helping our officers. I will be there when the team needs me, but I will not do everything myself. I will give committee chairs enough responsibility so that they can learn and grow.',
              zh: '年中，我會把時間放在重要活動、會員關懷及幹部陪伴。該出現的時候我一定出現，但不會什麼事情都自己做，而是充分授權給主委，讓幹部真正有成長的機會。' },
            { en: 'In the second half of the year, I will focus on reviewing our work, recording our experience, and developing future leaders. This will help the next team take over more smoothly.',
              zh: '到了下半年，我會開始做檢討、經驗整理以及人才培育，讓今年的經驗可以留下來，也讓下一屆接班的人可以更快進入狀況。' },
          ],
        },
        {
          t: 'qa',
          n: 10,
          en: 'Greatest Weakness',
          zh: '最大的缺點',
          qEn: ['What is your greatest weakness? What will you do to improve it?'],
          qZh: ['您最大的缺點是什麼？未來您要如何克服它？'],
          items: [
            { en: 'I think my greatest weakness is that **I have a strong sense of responsibility, so I sometimes try to handle too many things by myself**.',
              zh: '我認為自己最大的不足，是責任感比較強，也比較容易自己扛事情。' },
            { en: 'If I am elected next year, I will work on three things.',
              zh: '所以如果明年有幸當選，我會特別要求自己做好三件事情：' },
            { en: 'First, I will learn to **delegate** instead of doing everything myself.',
              zh: '第一，學會授權，而不是什麼事情都自己做。' },
            { en: 'Second, instead of only asking for results, I will spend more time **supporting my team during the process**.',
              zh: '第二，從「要求結果」進一步做到「陪伴過程」。' },
            { en: 'Third, I will remind myself to **listen more, ask more questions, and then make decisions**.',
              zh: '第三，我會提醒自己多聽、多問，再做決定。' },
          ],
        },
        {
          t: 'qa',
          n: 11,
          en: 'JCI The Port\'s Culture',
          zh: '巨港的特色與文化',
          qEn: ['Every JCI chapter has its own special characteristics and culture. What do you think makes JCI The Port special? How will you maintain these characteristics, and how will you develop them further? Please give some examples.'],
          qZh: ['每個分會都有屬於自己的特色和文化，您認為巨港分會的特色是什麼？您要如何來維持？是否有任何的計畫將其發揚光大嗎？請舉例說明之。'],
          items: [
            { en: 'I believe the three most important characteristics of JCI The Port are **passion, professionalism, and tradition**. My job is not to create a completely new JCI The Port. My job is to **protect this culture and pass it on to the next generation**.',
              zh: '我認為巨港最大的特色就是**熱情、專業、傳承**，所以我的任務不是重新創造巨港，而是把這份文化守住、傳下去。' },
            { en: 'I will strengthen this culture through friendship, service, and training. We will also use mentoring, experience sharing, and leadership development to help every officer prepare the next person to take over.',
              zh: '我會透過友誼、服務、訓練讓文化真正落實，並透過學長姐輔導、經驗傳承及人才培育，讓每位幹部都能培養下一位接班人。' },
            { en: 'Next year, JCI The Port will host the **Oregon Debate Executive Director Cup**. I hope to develop this into a series of training and brand-building activities, so that more people can see the passion and professionalism of JCI The Port.',
              zh: '同時，明年巨港承辦奧瑞岡式辯論執行長盃，我希望把辯論延伸成系列訓練與品牌活動，讓巨港的專業與熱情被更多人看見。' },
          ],
        },
        {
          t: 'qa',
          n: 12,
          en: 'Weaknesses of JCI The Port',
          zh: '巨港目前的不足',
          qEn: ['JCI chapters across Taiwan have healthy competition, and every chapter has its own strengths and weaknesses. In your opinion, what is JCI The Port\'s biggest weakness now? What caused it, and what will you do to improve it?'],
          qZh: ['全國青商的每個分會一直都維持著良性的競爭，有其擅長及不擅長之處。就您的觀察，目前巨港的劣勢或是比較不足之處為何？您覺得是什麼原因造成？是否有具體的做法或是計畫來改善之？請說明。'],
          items: [
            { en: 'I believe one of JCI The Port\'s biggest weaknesses is that **our meetings often end too late**.',
              zh: '我認為巨港目前比較不足的地方是**開會開太晚**。' },
            { en: 'I think this problem is already affecting our development. Some young people may not want to join us because of our long meetings. Our members may also be less willing to introduce JCI The Port to potential new members.',
              zh: '這件事情我認為已經嚴重阻礙巨港的發展，造成青年不敢加入巨港、他人不敢介紹巨港給有意願加入青商會的人。' },
            { en: 'Some members say long meetings are necessary because everyone needs enough time to express their opinions. However, JCI The Port values training, and meeting procedures are also an important part of that training.',
              zh: '有些會員會說，這是為了讓會員們有充分的時間表達意見。但是巨港既然重視訓練，會議規範是依據國會的議事規則而來，那麼我們開會也要遵守議事規範，因為這也是訓練。' },
            { en: 'Therefore, we should follow proper meeting procedures. **Speaking time and the number of times a person can speak should have reasonable limits.**',
              zh: '我們不能沒有時間限制、沒有次數限制地發言。' },
          ],
        },
        {
          t: 'qa',
          n: 13,
          en: '50th Anniversary Celebration',
          zh: '五十週年慶',
          qEn: ['The 50th anniversary celebration was expected to be one of the major events for the coming year. Do you have any ideas or plans for this celebration?'],
          qZh: ['對於即將到來的50週年慶，是明年大家非常期待的活動之一。請問您目前是否有任何的想法或是計畫要來呈現此慶典嗎？請說明。'],
          items: [
            { en: '**The 50th anniversary celebration was successfully held and completed this year.**',
              zh: '50週年慶已經在今年圓滿舉行完成。' },
          ],
        },
        {
          t: 'qa',
          n: 14,
          en: 'Increasing JCI The Port\'s Visibility',
          zh: '提升巨港能見度',
          qEn: ['Increasing the chapter\'s visibility is an important goal. Besides the Love Sprouts community service program, what specific plans do you have to increase and maintain JCI The Port\'s visibility?'],
          qZh: ['讓自己的分會能夠被看見，一直是每個分會持續努力的目標。明年除了愛發芽的社區公益活動之外，您是否有具體的做法或計畫，讓巨港可以不斷曝光並維持能見度？請說明。'],
          items: [
            { en: 'Yes. I have **three main plans**. First, we will work across our committees to turn our members\' professional knowledge, community service results, and activity stories into **social media and media content**.',
              zh: '有。第一，我們將結合會員暨資訊、會刊及各委員會，把會員專業、公益成果、活動故事轉化成社群與媒體內容。' },
            { en: 'Second, we will build our own **signature events**. For example, next year we will host the Oregon Debate Executive Director Cup, together with activities such as fun speaking challenges, impromptu debate, and persuasive speaking. We want to create this process: **Training → Activities → Exposure → Brand**',
              zh: '第二，打造巨港自己的招牌活動，例如明年的奧瑞岡式辯論執行長盃，搭配如幹話王、即興辯論、說服力等活動，形成**「課程 → 活動 → 曝光 → 品牌」**的效應。' },
            { en: 'Third, JCI The Port will actively reach out to others through public relations visits, international exchange, and cooperation with other chapters. I want every member to become **a brand ambassador for JCI The Port**.',
              zh: '第三，讓巨港主動走出去，透過公關拜訪、國際交流及跨分會合作，讓每一位會員都成為巨港的品牌大使。' },
            { en: 'Our goal is not to be seen only sometimes, but to **be seen continuously**. More importantly, we want people to see not only our activities, but also **the value of our members**.',
              zh: '我們要做到：**「不只是偶爾被看見，而是持續被看見；不只是活動被看見，而是會員的價值被看見。」**' },
          ],
        },
        {
          t: 'qa',
          n: 15,
          en: 'Leadership Weaknesses',
          zh: '領導上的不足',
          qEn: ['As a leader, what weaknesses do you think you still have? How will you improve them so that your team can work more smoothly next year?'],
          qZh: ['身為一個領導者，您覺得自己還有哪些不足之處？您會如何去克服它，以利明年團隊運作能夠更順暢？請說明。'],
          items: [
            { en: 'I think one of my biggest weaknesses is that **I have a strong sense of responsibility and sometimes try to handle too many things myself**. However, I understand that being President is not about doing everything well by myself. It is about **helping the whole team do well**.',
              zh: '我認為自己最大的不足，是責任感強、容易自己扛事情，但我也知道理事長不是自己把事情做好，而是讓團隊把事情做好。' },
            { en: 'Next year, I will learn to delegate more and support our officers as they grow. I will also listen more and ask more questions before making decisions.',
              zh: '因此明年我會學會授權、陪伴幹部成長，並透過多聽、多問再決策，讓八個委員會的主委真正發揮能力。' },
            { en: 'I believe **real leadership is not about showing people how good I am**. It is about helping every team member believe: **"I can do it."** I want our members to become more capable, more confident, and more willing to take responsibility because of their experience in JCI The Port.',
              zh: '我相信真正的領導，不是證明自己有多厲害，而是讓團隊每一個人都覺得「我可以做到」，讓大家因為參與巨港而變得更有能力、更有自信、更願意承擔。' },
          ],
        },
        {
          t: 'qa',
          n: 16,
          en: 'Majority Opposition to a Policy',
          zh: '政見遭多數理監事反對',
          qEn: ['If your most important policy proposal is opposed by more than half of the Board after you take office, but you still strongly believe it is the right decision for JCI The Port, would you respect the majority decision and give up the proposal, or would you continue to push for it? Please choose only one and explain why.'],
          qZh: ['如果您上任後最重要的政見，遭到超過半數理監事反對，但您仍深信這件事對巨港是正確的，您會尊重多數決放棄，還是堅持推動？請只能選一個，並說明理由。'],
          items: [
            { en: 'If more than half of the Board members are against my policy, I will first continue to communicate with them and explain why I believe the policy is important.',
              zh: '如果我的重要政見遭到超過半數理監事反對，我會持續溝通，讓理監事們了解為何有這樣的政見。' },
            { en: 'If more than half of the Board members are still against it after enough discussion, it means the policy does not have enough support. Therefore, **I will respect the majority decision and will not carry out the policy**.',
              zh: '如果理監事團隊仍有超過半數反對，這表示這個政見無法獲得多數人的支持，我會尊重多數理監事的選擇，不執行這個政見。' },
          ],
        },
        {
          t: 'qa',
          n: 17,
          en: 'A Culture That Should Be Changed',
          zh: '應該改變的文化',
          qEn: ['Please identify one part of JCI The Port\'s culture that should be changed or even stopped. If it is a long-standing tradition that many senior members value, would you still have the courage to change it? Why?'],
          qZh: ['請說出目前巨港一項「應該被淘汰或改變的文化」。如果這項文化是許多資深會員非常重視的傳統，您還敢改嗎？'],
          items: [
            { en: 'I believe one culture that should be changed is **having meetings that last too long and end too late**.',
              zh: '我認為巨港目前應該被改變的文化是**開會開太晚**。' },
            { en: 'This has already affected the development of JCI The Port. It may make young people afraid to join us, and members may not want to introduce JCI The Port to other young people.',
              zh: '這件事情我認為已經嚴重阻礙巨港的發展，造成青年不敢加入巨港、他人不敢介紹巨港給有意願加入青商會的人。' },
            { en: 'Some members believe long meetings give everyone enough time to express their opinions. However, meeting procedures are also an important part of JCI training. We should follow these procedures, including reasonable limits on speaking time and the number of times a person can speak.',
              zh: '有些會員會說，這是為了讓會員們有充分的時間表達意見。但是巨港既然重視訓練，會議規範是依據國會的議事規則而來，那麼我們開會也要遵守議事規範，因為這也是訓練。' },
            { en: '**So yes, I believe we should change this culture.**',
              zh: '我們不能沒有時間限制、沒有次數限制地發言，所以我認為這個文化應該改。' },
          ],
        },
        {
          t: 'qa',
          n: 18,
          en: '30% Reduction in Resources',
          zh: '人力與經費減少 30%',
          qEn: ['Suppose the manpower and budget for chapter affairs suddenly decrease by 30% next year, and you must cancel one existing major activity or program. Which one would you cancel, and why?'],
          qZh: ['假設明年會務人力與經費突然減少30%，您必須刪掉一項既有的重要活動或會務，您會刪哪一項？為什麼？不能回答「每一項都重要」。'],
          items: [
            { en: 'If our manpower and budget decrease by 30% next year, I would cancel **company visits organized by the Economic Affairs Committee**.',
              zh: '如果明年會務人力與經費突然減少30%，我會刪除**經濟委員會的企業參訪**。' },
            { en: 'If members are interested in a particular company or industry, they can still arrange visits through their own connections or through other members. Therefore, compared with other chapter activities, I believe canceling company visits would **have a smaller impact on the chapter**.',
              zh: '因為如果會員對個別行業有興趣，可以透過自己或會內人脈自行安排參訪事宜，因此對會內影響較小。' },
          ],
        },
        {
          t: 'qa',
          n: 19,
          en: 'Replacing a Close Friend',
          zh: '撤換自己的好友',
          qEn: ['Suppose a close friend whom you personally invited to join your executive team fails to fulfill their responsibilities for three consecutive months and begins to affect the overall operation of the chapter. Would you replace this person? Please answer "yes" or "no" directly and explain your bottom line.'],
          qZh: ['如果您親自找進會執團隊、同時也是您好朋友的幹部，連續三個月無法完成工作，已經影響整體會務，您會不會撤換他？請直接回答「會」或「不會」，並說明您的底線。'],
          items: [
            { en: '**Yes, I would replace this person if necessary.**',
              zh: '**會。**' },
            { en: 'First, I would talk with my friend and try to understand why they have been unable to complete their work for three months. I would also try to find out whether the situation can be improved.',
              zh: '我會先和這位朋友溝通，了解三個月無法完成工作的原因，以及有沒有辦法改善。' },
            { en: 'If the problem still cannot be solved, I would replace this person.',
              zh: '如果沒有辦法改善，我就會撤換他。' },
            { en: 'My bottom line is simple: **If someone agrees to take a position, they should take responsibility for the work. If they cannot do the job, someone else should take the position.**',
              zh: '我的底線就是：幹部既然答應要接這個職務，就應該執行該執行的事務；如果無法執行，就換人。' },
          ],
        },
        {
          t: 'qa',
          n: 20,
          en: 'Disciplining an Important Senior Member',
          zh: '處理重要資深會員',
          qEn: ['Suppose a senior member who has made significant contributions to JCI The Port—and who was also an important supporter of your election—does something that seriously damages the reputation of the chapter. Disciplining this person may upset many senior members. Would you still take action? If so, how far would you go?'],
          qZh: ['如果一位對巨港貢獻非常大的資深會員，同時也是支持您當選的重要人物，卻做出嚴重傷害巨港名譽的事情，處分他可能得罪一群OB，您敢不敢處理？處理到什麼程度？'],
          items: [
            { en: '**Yes, I would take action.** No matter who the person is, if they seriously damage the reputation of JCI The Port, we should follow **Article 14 of our chapter rules**.',
              zh: '不論是誰，只要嚴重傷害巨港名譽，都應該按照章程第14條處理。' },
            { en: 'According to the rules, if the required number of Board members attend the meeting and at least two-thirds of the attending Board members agree, the person can **lose their membership**.',
              zh: '也就是如果：**「經理事會三分之二以上之出席及出席理事三分之二以上人數之通過」**就：**「喪失其會員資格」。**' },
            { en: 'I would follow this rule even if the person supported me in the election or made major contributions to JCI The Port. These are the rules created by the senior members who came before us, and **everyone should follow the same rules**.',
              zh: '因為這是巨港各位前輩們定下的規矩。' },
          ],
        },
        {
          t: 'qa',
          n: 21,
          en: 'Success or Failure?',
          zh: '成功還是失敗',
          qEn: ['At the end of your term, suppose JCI The Port has fewer members than when you took office and participation has also gone down, even though you organized many successful events. Would you consider your presidency a success or a failure? Please choose only one.'],
          qZh: ['如果您卸任時，巨港會員人數比您上任時更少、活動參與率也下降，但您認為自己辦了很多成功活動，請問您的任期算成功還是失敗？請只能選一個。'],
          items: [
            { en: 'I would consider my presidency **a failure**.',
              zh: '如果卸任時出現這樣的結果，我會認為是**失敗的**。' },
            { en: 'However, what concerns me more is whether I would wait until the end of my term to realize that we had failed.',
              zh: '但我更在意的是，我會不會在卸任那一天才發現失敗。' },
            { en: 'That is why I want to regularly check our progress during the year. I will not only ask whether we completed our activities. I will also ask: **Are our members growing? Is participation increasing? Are new members staying? Are members getting what they want from JCI?**',
              zh: '所以明年我會建立定期檢視機制，不只看活動有沒有辦完，而是看：會員有沒有成長？參與有沒有提升？新會員有沒有留下？會員有沒有從青商得到他想要的東西？' },
            { en: 'I believe the President is not simply **a manager of activities**. The President is responsible for **the growth of our members**.',
              zh: '因為我認為，**理事長不是活動的總管，而是會員成長的負責人。**' },
            { en: 'If our members do not become better and JCI The Port does not become better, I will admit that even if I organized many great activities: **I did many things, but I did not do my job as President well.**',
              zh: '如果最後會員沒有變得更好，巨港沒有變得更好，那即使我辦了再多漂亮的活動，我都會承認：**這一年，我做了很多事，但沒有做好理事長。**' },
          ],
        },
        {
          t: 'qa',
          n: 22,
          en: 'No Successor',
          zh: '沒有下一屆理事長候選人',
          qEn: ['Suppose there are only six months left in your term, but no member is willing to run for President for the following year. Does this mean members are unwilling to take responsibility, or does it show a failure in your leadership and leadership development? How much responsibility would you take?'],
          qZh: ['假設您任期剩下半年，卻沒有任何會員願意參選下一屆理事長。您認為這是會員沒有承擔，還是代表您的領導與人才培養失敗？您願意承擔多少責任？'],
          items: [
            { en: 'If there are only six months left in my term and no one is willing to become the next President, it means that during the year, **we did not help members see the value of becoming President**. It also means that we did not prepare them well enough to take this responsibility.',
              zh: '如果任期只剩半年，卻沒有任何會員願意接任理事長，代表我們在這一年的過程中，沒有讓會員看見**「當理事長的價值」**，也沒有讓會員做好承擔這份責任的準備。' },
            { en: 'A truly successful President is not someone who simply has a great year. A successful President should also **develop the next group of people who are willing to lead**.',
              zh: '真正成功的理事長，不是自己把一年做得多漂亮，而是卸任的時候，能不能留下下一群願意承擔的人。' },
            { en: 'So, if no one is willing to become the next President, I will admit that I did not do enough in leadership and people development. **I will take the main responsibility.**',
              zh: '所以如果明年真的沒有人願意接任，我會承認這是我的領導與人才培養沒有做好，我願意承擔主要責任。' },
            { en: 'At the end of my term, I hope JCI The Port will not only be better. I also hope more members will believe: **"I can be the next person to take the responsibility."**',
              zh: '我希望我的任期結束時，不只是巨港變得更好，而是有更多人相信：**「下一棒，我可以接。」**' },
          ],
        },
        {
          t: 'qa',
          n: 23,
          en: 'Family, Company, or JCI?',
          zh: '家庭、公司還是巨港',
          qEn: ['Suppose three emergencies happen on the same day: your company faces a major customer crisis, your family has an important matter that requires your personal attention, and JCI The Port is holding its most important event of the year. You can personally handle only one. Which one would you choose, and why?'],
          qZh: ['同一天，公司發生重大客戶危機、家人發生必須由您處理的重要事情、巨港正在舉辦年度最重要的活動，三件事情您只能親自處理一件。您選哪一件？為什麼？'],
          items: [
            { en: 'I would choose to **take care of my family first**.',
              zh: '我選擇**先處理家人**。' },
            { en: 'Only when my parents and my wife are healthy and safe can I focus on my company and JCI without worrying about my family.',
              zh: '因為只有父母、妻子健康、平安，我沒有後顧之憂，我才能夠安心處理公司以及巨港的事務。' },
            { en: 'Also, I do not run my company alone. I have a team that can help handle a major customer crisis.',
              zh: '而且我並不是一人公司，我有我的團隊，可以幫忙我處理重大危機。' },
            { en: 'The same is true for JCI The Port. I have an executive team that can help manage our most important event of the year.',
              zh: '巨港這邊，我也有我的會執團隊可以幫忙處理年度重大活動。' },
            { en: '**Neither my company nor JCI The Port depends on only one person. They are organizations built by the whole team.**',
              zh: '**不論是公司還是巨港，都不是我一個人的，是我們所有人加在一起才叫做公司跟巨港。**' },
          ],
        },
        {
          t: 'qa',
          n: 24,
          en: 'Only One Campaign Promise',
          zh: '只能完成一項政見',
          qEn: ['Suppose you can complete only one of your campaign promises next year and all the others fail. Which one would you choose? Please also provide one measurable KPI so members can objectively judge whether you achieved it.'],
          qZh: ['假設您明年提出的政見最後只能完成一項，其他全部失敗，您會選擇完成哪一項？請再提出一個「可以用數字驗收」的 KPI，讓會員年底判斷您到底有沒有做到。'],
          items: [
            { en: 'If I could complete only one campaign promise, I would choose to continue **our monthly chapter magazine**.',
              zh: '如果所有政見中，只能完成一項，其他全部失敗，我會選擇只完成**會刊**。' },
            { en: 'The magazine has been published every month for **51 years without a break**. It is an important part of JCI The Port\'s history, and I have a responsibility to protect it and pass it on.',
              zh: '因為這是巨港傳承51年、每個月不間斷的傳家寶，我有義務維護與傳承它。' },
            { en: 'If we do not hold an activity this year, we can hold it again in the future. But the magazine is different. **Once this 51-year record is broken, we cannot get it back.**',
              zh: '其他的活動我們都可以再辦，但唯有會刊，一旦中斷了，就不可回復。' },
            { en: 'My KPI is simple and measurable: **Publish one issue every month from January to December 2027—12 issues in total, with zero missed months.** At the end of the year, members can easily check whether I kept this promise.',
              zh: '如果要用數字驗收，大家請注意明年1到12月有沒有出刊即可。具體 KPI 可以設定為：**2027年1月至12月，每月完成一期會刊，全年12期，中斷0次。**' },
          ],
        },
      ],
    },
  ],
};

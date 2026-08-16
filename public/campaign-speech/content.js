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
               practice), then the answer as practice lines. `pending: 1` for
               the nine he has not answered yet — the question still shows.
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
    en: 'The speech first — sixty-two sentences, in the order they are spoken — and then the nineteen questions from the election floor. Read each line aloud, tap 🔊 to hear it, and tap 中 only when you need the Chinese. When a section feels comfortable, switch to 記 Recall: the Chinese leads, and you say the English before you check it.',
    zh: '先是講稿——全篇六十二句，依演說順序排列——接著是選舉現場的十九道問答。把每一句大聲讀出來，點 🔊 聽範讀，需要時再點 中 看中文。一段唸熟之後，切換到「記」：中文在前，先把英文說出來，再點開對答案。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'read all 62 sentences of the speech aloud, pausing where the speaker would pause', zh: '朗讀講稿全部 62 句，並在該停頓的地方停頓' },
      { en: 'say the twenty-eight words that most often trip up Mandarin speakers', zh: '唸出 28 個中文母語者最常唸錯的單字' },
      { en: 'produce each English sentence from the Chinese alone', zh: '只看中文，就能把英文說出來' },
      { en: 'deliver the whole speech inside five minutes', zh: '在五分鐘之內完成整篇演說' },
      { en: 'answer ten of the nineteen election questions without reading from a script', zh: '不看稿，回答十九題中已備妥的十題' },
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
         ten answers back to back is not a thing anyone needs to hear. */
      noPlay: 1,
      lead: {
        en: 'Nineteen questions from the election floor. The question is given in both languages — it is asked to him, so it is context, not practice. The answer below it works exactly like the speech: read it aloud in 讀, produce it from the Chinese in 記.',
        zh: '選舉現場的十九道題目。問題本身中英並陳——那是別人問他的，屬於情境而非練習。下方的回答則與講稿相同：在「讀」朗讀，在「記」由中文回想英文。',
      },
      blocks: [
        {
          t: 'qa',
          n: 1,
          en: 'Policy Opposed by Most Board Members',
          zh: '政見遭多數理監事反對',
          qEn: ['If your most important policy is opposed by more than half of the Board after you take office, but you still strongly believe it is the right decision for JCI The Port, would you respect the majority decision and give up the policy, or would you continue to push for it? Please choose only one and explain why.'],
          qZh: ['如果您上任後最重要的政見，遭到超過半數理監事反對，但您仍深信這件事對巨港是正確的，您會尊重多數決放棄，還是堅持推動？請只能選一個，並說明理由。'],
          items: [
            { en: 'If more than half of the Board members are against my important policy, I will first continue to communicate with them. I want them to understand why I proposed this policy and what I hope to achieve through it.',
              zh: '如果我的重要政見遭到超過半數理監事反對，我會持續溝通，讓理監事們了解為什麼有這樣的政見，以及這項政見背後的目的與考量。' },
            { en: 'However, if more than half of the Board members are still against it after enough discussion, it means that the policy does not have enough support. In that case, I will respect the majority decision and will not carry out the policy.',
              zh: '如果經過充分溝通後，理監事團隊仍有超過半數反對，就表示這項政見無法獲得多數人的支持。因此，我會尊重多數理監事的選擇，不執行這項政見。' },
          ],
        },
        {
          t: 'qa',
          n: 2,
          en: 'A Culture That Should Be Changed',
          zh: '巨港應該被改變的文化',
          qEn: ['Please identify one part of JCI The Port’s culture that you believe should be changed or even stopped. If it is a long-standing tradition that many senior members value, would you still have the courage to change it? Why?'],
          qZh: ['請說出目前巨港一項「應該被淘汰或改變的文化」。如果這項文化是許多資深會員非常重視的傳統，您還敢改嗎？'],
          items: [
            { en: 'I think one culture that should be changed is having meetings that last too long and end too late.',
              zh: '我認為巨港目前應該被改變的文化是開會開太晚這件事情。' },
            { en: 'I believe this problem has already affected the development of JCI The Port.',
              zh: '我認為這件事情已經嚴重阻礙巨港的發展。' },
            { en: 'When people talk about our chapter, one thing they often joke about is how late our meetings end. This may make young people afraid to join us. It may also make our members less willing to introduce JCI The Port to potential new members.',
              zh: '我們在外面最常被揶揄的也是這件事情，造成青年不敢加入巨港，也讓會員不敢介紹巨港給有意願加入青商會的人。' },
            { en: 'Some members may say that long meetings give everyone enough time to share their opinions. However, JCI The Port cares a lot about training, and our meeting rules are based on formal meeting procedures. Therefore, following these rules should also be part of our training.',
              zh: '有些會員會說，這是為了讓會員們有充分的時間表達意見。但是巨港既然重視訓練，而會議規範是依據國會議事規則而來，那麼我們開會也應該遵守議事規範，因為這本身也是一種訓練。' },
            { en: 'For example, we should have clear limits on speaking time and how many times a person can speak.',
              zh: '我們不能讓發言沒有時間限制、沒有次數限制。' },
            { en: 'Also, we already have an Executive Board meeting before the Board meeting. I believe we should make better use of this meeting. Important issues should be discussed clearly before the Board meeting. This can help us avoid spending the same amount of time, or even more time, discussing the same issues again.',
              zh: '此外，巨港既然在召開理事會前會先召開常務理事會，我認為落實常務理事會會前會的功能非常重要。這可以避免到了理事會，又花同樣甚至更多的時間處理相同的問題，或處理常務理事會原本沒有處理好的事情。' },
          ],
        },
        {
          t: 'qa',
          n: 3,
          en: 'A 30% Cut in Manpower and Budget',
          zh: '人力與經費減少30%',
          qEn: ['Suppose the manpower and budget for chapter affairs suddenly decrease by 30% next year, and you must cancel one existing major activity or program.', 'Which one would you cancel, and why? You may not answer, “Every activity is important.”'],
          qZh: ['假設明年會務人力與經費突然減少30%，您必須刪掉一項既有的重要活動或會務，您會刪哪一項？為什麼？不能回答「每一項都重要」。'],
          items: [
            { en: 'If our manpower and budget decrease by 30% next year, I would cancel company visits organized by the Economic Affairs Committee.',
              zh: '如果明年會務人力與經費突然減少30%，我會選擇刪除經濟委員會的企業參訪。' },
            { en: 'If members are interested in a certain company or industry, they can still arrange a visit through their own connections or through other members in our chapter.',
              zh: '因為如果會員對個別產業或企業有興趣，可以透過自己的人脈，或透過會內的人脈自行安排參訪。' },
            { en: 'Therefore, compared with other activities, I believe canceling company visits would have a smaller impact on JCI The Port.',
              zh: '因此，相較於其他會務，取消企業參訪對會內所造成的影響較小。' },
          ],
        },
        {
          t: 'qa',
          n: 4,
          en: 'A Close Friend Fails to Do the Job',
          zh: '好朋友連續三個月無法完成工作',
          qEn: ['Suppose a close friend whom you personally invited to join your executive team fails to complete their work for three months in a row, and this begins to affect the whole chapter. Would you replace this person? Please answer “yes” or “no” directly and explain where you would draw the line.'],
          qZh: ['如果您親自找進會執團隊、同時也是您好朋友的幹部，連續三個月無法完成工作，已經影響整體會務，您會不會撤換他？請直接回答「會」或「不會」，並說明您的底線。'],
          items: [
            { en: 'Yes, I would replace this person if necessary.',
              zh: '會。' },
            { en: 'First, I would talk with my friend and try to understand why they have not been able to complete their work for three months. I would also try to find out if there is a way to improve the situation.',
              zh: '如果我親自找進會執團隊、同時也是我的好朋友的幹部，連續三個月無法完成工作，而且已經影響整體會務，我會先和這位朋友溝通，了解這三個月無法完成工作的原因，以及問題有沒有辦法改善。' },
            { en: 'If the problem still cannot be solved after communication and support, I would replace this person.',
              zh: '如果經過溝通與協助之後，仍然沒有辦法改善，我就會撤換他。' },
            { en: 'My bottom line is simple: if you agree to take a position, you should take responsibility for the work. If you are unable to do the job, someone else should take the position.',
              zh: '我的底線是：幹部既然答應接下這個職務，就應該執行這個職務應該完成的工作；如果真的無法執行，就應該換人。' },
          ],
        },
        {
          t: 'qa',
          n: 5,
          en: 'A Senior Member Damages the Chapter’s Reputation',
          zh: '資深會員嚴重傷害巨港名譽',
          qEn: ['Suppose a senior member who has made major contributions to JCI The Port, and who was also an important supporter of your election, does something that seriously damages the reputation of the chapter. Taking action against this person may upset many senior members. Would you still take action? How far would you go?'],
          qZh: ['如果一位對巨港貢獻非常大的資深會員，同時也是支持您當選的重要人物，卻做出嚴重傷害巨港名譽的事情，處分他可能得罪一群OB，您敢不敢處理？處理到什麼程度？'],
          items: [
            { en: 'Yes, I would take action. No matter who the person is, we should follow our chapter rules.',
              zh: '我會處理，而且不論是誰，都應該按照章程處理。' },
            { en: 'If someone seriously damages the reputation of JCI The Port, we should follow Article 14 of our chapter rules.',
              zh: '只要嚴重傷害巨港名譽，就應該按照章程第14條處理。' },
            { en: 'According to Article 14, if the required number of Board members attend the meeting and at least two-thirds of the attending Board members agree, the person can lose their membership.',
              zh: '也就是如果：「經理事會三分之二以上之出席及出席理事三分之二以上人數之通過」就：「喪失其會員資格」。' },
            { en: 'Even if this person is a senior member who has contributed a lot to JCI The Port, or someone who supported me in the election, I would still follow the rules.',
              zh: '即使這個人是對巨港貢獻很大的資深會員，或是曾經支持我當選的重要人物，我仍然會按照制度處理。' },
            { en: 'These rules were created by the senior members who came before us. No one should be above the rules.',
              zh: '因為這是巨港各位前輩們定下來的規矩。' },
          ],
        },
        {
          t: 'qa',
          n: 6,
          en: 'Successful Events but Fewer Members',
          zh: '活動成功，但會員人數與參與率下降',
          qEn: ['At the end of your term, suppose JCI The Port has fewer members than when you took office, and the participation rate in chapter activities has also gone down, even though you believe you organized many successful events. Would you consider your presidency a success or a failure? Please choose only one and explain why.'],
          qZh: ['如果您卸任時，巨港會員人數比您上任時更少、活動參與率也下降，但您認為自己辦了很多成功活動，請問您的任期算成功還是失敗？請只能選一個。'],
          items: [
            { en: 'I would consider it a failure.',
              zh: '我認為是失敗的。' },
            { en: 'If the number of members becomes smaller and the participation rate also goes down, it means that many members may not agree that these activities were truly successful.',
              zh: '因為會員人數減少，而且活動參與率下降，就代表多數會員並不認同理事長所謂的「辦了很多成功活動」。' },
            { en: 'Having many successful events does not mean that the whole chapter is successful.',
              zh: '活動辦得成功，不代表整個分會經營得成功。' },
            { en: 'I also believe that many members quietly give their time and effort to JCI The Port. Although many excellent members may not be able to become President next year, I believe they will continue to support JCI The Port in different ways.',
              zh: '另外，有很多人都默默地為巨港這個分會付出。雖然明年有很多比我更優秀的會員沒有辦法出來承擔理事長一職，但我相信大家都會以不同的形式支持巨港青商會。' },
          ],
        },
        {
          t: 'qa',
          n: 7,
          en: 'No One Wants to Run for the Next Presidency',
          zh: '沒有會員願意參選下一屆理事長',
          qEn: ['Suppose you have only six months left in your term, but no member is willing to run for President for the following year. Do you think the members are unwilling to take responsibility, or does this show a failure in your leadership and leadership development? How much responsibility would you take?'],
          qZh: ['假設您任期剩下半年，卻沒有任何會員願意參選下一屆理事長。您認為這是會員沒有承擔，還是代表您的領導與人才培養失敗？您願意承擔多少責任？'],
          items: [
            { en: 'I believe this would show a failure in my leadership and leadership development.',
              zh: '我認為這代表我的領導與人才培育失敗。' },
            { en: 'I would not blame the members or say that they are unwilling to take responsibility.',
              zh: '我不會把問題歸咎於會員沒有承擔。' },
            { en: 'If there were only six months left in my term and no one was willing to run for the next presidency, I believe that, as President, I should take full responsibility. A President should not only lead the chapter for one year. The President should also help develop future leaders.',
              zh: '如果在我的任期剩下半年時，仍然沒有任何會員願意參選下一屆理事長，我認為身為理事長，我應該承擔全部責任。' },
          ],
        },
        {
          t: 'qa',
          n: 8,
          en: 'Family, Work, and JCI at the Same Time',
          zh: '家庭、公司與巨港同時發生重大事件',
          qEn: ['Suppose three important situations happen on the same day: your company has a major customer crisis, your family has an important matter that needs your personal attention, and JCI The Port is holding its most important event of the year. You can personally handle only one. Which one would you choose, and why?'],
          qZh: ['同一天，公司發生重大客戶危機、家人發生必須由您處理的重要事情、巨港正在舉辦年度最重要的活動，三件事情您只能親自處理一件。您選哪一件？為什麼？'],
          items: [
            { en: 'I would choose to take care of my family first.',
              zh: '我會選擇先處理家人的事情。' },
            { en: 'If my parents and my wife are healthy and safe, I can focus on my work and JCI without worrying about my family.',
              zh: '因為只有父母、妻子健康、平安，我沒有後顧之憂，我才能夠安心處理公司以及巨港的事務。' },
            { en: 'Also, I do not run my company alone. I have a team that can help handle a major customer crisis.',
              zh: '而且我並不是一人公司。我有我的團隊，可以幫忙處理重大客戶危機。' },
            { en: 'The same is true for JCI The Port. I have an executive team that can help manage our most important event of the year.',
              zh: '巨港這邊，我也有我的會執團隊，可以幫忙處理年度重大活動。' },
            { en: 'Neither my company nor JCI The Port belongs to just one person. A strong organization is built by the whole team.',
              zh: '不論是公司還是巨港，都不是我一個人的，是我們所有人加在一起，才叫做公司跟巨港。' },
          ],
        },
        {
          t: 'qa',
          n: 9,
          en: 'Only One Campaign Promise Can Be Completed',
          zh: '所有政見只能完成一項',
          qEn: ['Suppose you can complete only one of your campaign promises next year and all the others fail. Which one would you choose to complete? Please also give one measurable KPI so members can clearly judge at the end of the year whether you achieved it.'],
          qZh: ['假設您明年提出的政見最後只能完成一項，其他全部失敗，您會選擇完成哪一項？請再提出一個「可以用數字驗收」的KPI，讓會員年底判斷您到底有沒有做到。'],
          items: [
            { en: 'If I could complete only one of my campaign promises, I would choose to continue our monthly chapter magazine.',
              zh: '如果所有政見中只能完成一項，其他全部失敗，我會選擇完成會刊。' },
            { en: 'The magazine has been published every month for 51 years without stopping. It is an important part of JCI The Port’s history, and I believe I have a responsibility to protect this tradition.',
              zh: '因為這是巨港傳承51年、每個月不間斷的傳家寶，我認為自己有義務維護它。' },
            { en: 'If we do not hold an activity this year, we can hold it again in the future. However, the magazine is different. Once we stop publishing it, we cannot get back the record of 51 years without a break.',
              zh: '其他的活動如果今年沒有辦，我們未來還可以再辦；但是唯有會刊，一旦中斷了，51年來每個月不中斷的紀錄就無法恢復。' },
            { en: 'My KPI is very clear:',
              zh: '如果要用數字驗收，我的KPI很清楚：' },
            { en: 'From January to December 2027, we will publish one issue every month: 12 issues in total, with zero missed months.',
              zh: '2027年1月至12月，每個月都完成會刊出刊，全年12期，中斷0次。' },
            { en: 'At the end of the year, members can simply check whether all 12 issues were published.',
              zh: '大家年底只要檢視1月到12月是否每個月都有出刊，就可以判斷我是否完成這項承諾。' },
          ],
        },
        {
          t: 'qa',
          n: 10,
          en: 'Why Do You Want to Run for President?',
          zh: '為什麼決定參選理事長？',
          qEn: ['What reasons and motivations led you to run for President? If being President brought no real benefit to your business, personal network, or yourself, and required you to give up a lot of time with your family and at work, would you still be willing to take this responsibility? Why?'],
          qZh: ['是什麼原因與動力，讓您決定投入理事長選舉？如果擔任理事長不會為您的事業、人脈或個人帶來任何實質利益，甚至需要犧牲大量家庭與工作時間，您是否仍然願意承擔？為什麼？'],
          items: [
            { en: 'I do not know whether becoming President of JCI The Port will help my business or career, but that is not the reason I decided to run for President.',
              zh: '擔任巨港理事長對於我的事業會不會有成長，我不知道，這也不是我考量的原因。' },
            { en: 'The biggest reason I am willing to serve as President of JCI The Port in 2027 is simple:',
              zh: '我願意出來擔任2027年巨港理事長，最大的原因，就是希望：' },
            { en: 'JCI The Port is a chapter that has deeply touched me, and I want to help it continue and grow in the future.',
              zh: '巨港這個讓我覺得感動的分會，能夠永續存續下去。' },
            { en: 'Even if being President brings no real benefit to my business, my network, or myself, I am still willing to take this responsibility. I want JCI The Port to continue to grow, and I want its values and traditions to be passed on to future members.',
              zh: '即使擔任理事長不會為我的事業、人脈或個人帶來實質利益，我仍然願意承擔這個責任，因為我希望巨港能夠繼續發展、繼續傳承。' },
          ],
        },
        {
          t: 'qa',
          n: 11,
          en: 'The Unique Value of JCI The Port',
          zh: '巨港最獨特的價值',
          qEn: ['JCI The Port has developed its own culture and special features over many years. What do you think is the most unique value of JCI The Port?', 'If you become President, how will you balance innovation and tradition, so that the spirit of JCI The Port can continue in the future?'],
          qZh: ['巨港歷經多年發展，逐漸形成屬於自己的文化與特色。請問您認為巨港最獨特的價值是什麼？未來若擔任會長，您會如何在創新與傳承之間取得平衡，讓巨港的精神持續延續下去？'],
          pending: 1,
        },
        {
          t: 'qa',
          n: 12,
          en: 'JCI The Port vs. Lions Club',
          zh: '巨港青商與獅子會的差異',
          qEn: ['You have served as President of a Lions Club and also as a Board member of JCI The Port.', 'What do you think are the biggest differences between JCI The Port and the Lions Club in organizational culture, leadership development, and leadership style?', 'If you become President of JCI The Port, how will you adjust your leadership style to help your team continue to grow?'],
          qZh: ['您曾擔任獅子會會長，也曾擔任巨港理事。請問您認為巨港青商與獅子會在組織文化、人才培育及領導模式上，最大的差異是什麼？如果未來擔任巨港會長，您將如何調整自己的領導方式，帶領團隊持續成長？'],
          pending: 1,
        },
        {
          t: 'qa',
          n: 13,
          en: 'Leadership Development and Succession',
          zh: '人才培育與組織傳承',
          qEn: ['JCI The Port has always cared about developing people and preparing future leaders.', 'If you are elected President, what do you think will be the most important leadership development task next year?', 'With the challenge of changing generations and not having enough future leaders, how will you encourage more members to join chapter affairs and grow from participants into future leaders?'],
          qZh: ['巨港一直非常重視人才培育與組織傳承。請問如果順利當選會長，您認為未來一年最重要的人才培育工作是什麼？面對幹部世代交替與人才斷層的挑戰，您將如何讓更多夥伴願意投入會務，並從參與者逐步成長為未來的領導者？'],
          pending: 1,
        },
        {
          t: 'qa',
          n: 14,
          en: 'Using Your Legal Background to Create Value',
          zh: '如何運用律師專業為巨港創造價值',
          qEn: ['You have a professional background as a lawyer. This background represents not only professional knowledge, but also responsibility and good judgment.', 'If you become President, how will you use your professional skills to create new value for JCI The Port?', 'Also, how will you balance good organizational management with active member participation, while protecting both our rules and the spirit of JCI?'],
          qZh: ['您擁有律師的專業背景，這不僅代表著嚴謹與專業，也代表著責任與判斷。請問如果當選會長，您將如何運用自身專業為巨港創造新的價值？面對組織治理與會員活力之間的平衡，您又將如何兼顧制度傳承與青商精神？'],
          pending: 1,
        },
        {
          t: 'qa',
          n: 15,
          en: 'The Biggest Challenge for the Coming Year',
          zh: '未來一年最大的挑戰',
          qEn: ['As a candidate for President, what do you think will be the biggest challenge for JCI The Port in the coming year?', 'With limited time and resources, if you could focus on only one important task, what would you want JCI The Port to achieve?', 'What kind of impact would you like to leave for future members?'],
          qZh: ['身為未來的會長候選人，您認為巨港在未來一年最大的挑戰是什麼？面對有限的時間與資源，如果只能選擇一項最重要的任務全力投入，您最希望帶領巨港完成什麼，並留下什麼樣的影響與傳承？'],
          pending: 1,
        },
        {
          t: 'qa',
          n: 16,
          en: 'Innovation, Stability, and Tradition',
          zh: '創新、穩定與傳承',
          qEn: ['Every President wants to bring positive changes to JCI The Port. However, new ideas often bring different opinions and expectations.', 'What do you think JCI The Port needs to change or improve the most right now?', 'In the coming year, how will you balance innovation, stability, and tradition to help JCI The Port continue moving forward?'],
          qZh: ['每一位會長都希望為巨港帶來新的改變，但創新往往伴隨著不同的聲音與期待。請問您認為，目前巨港最需要突破的是什麼？未來一年，您將如何在創新、穩定與傳承之間取得平衡，帶領巨港持續向前？'],
          pending: 1,
        },
        {
          t: 'qa',
          n: 17,
          en: 'Membership Growth Strategy',
          zh: '會員成長與會擴策略',
          qEn: ['JCI The Port has continued to work on membership growth and organizational development in recent years.', 'If you are elected President, what will be your most important strategy for membership growth next year?', 'How will you attract more young people to join JCI The Port and encourage them to stay for the long term?'],
          qZh: ['巨港近年持續推動會員成長與組織發展。若您順利當選會長，您認為未來一年最重要的會擴策略是什麼？您將如何吸引更多優秀青年加入巨港，並讓他們願意長期留下來？'],
          pending: 1,
        },
        {
          t: 'qa',
          n: 18,
          en: 'JCI “Three Treasures” and Brand Competitiveness',
          zh: '青商三寶的發展與品牌競爭力',
          qEn: ['JCI “Three Treasures” have always been an important feature of JCI The Port.', 'However, in recent years, the main focus has been on Oregon Debate, while training in Public Speaking and Meeting Procedures has become weaker.', 'How do you view this situation?', 'As a leader, how will you balance the development of the three areas, improve the training system, and rebuild the brand competitiveness of JCI The Port?'],
          qZh: ['青商三寶一直是巨港的重要特色，但近年發展重心逐漸集中於奧瑞岡辯論，金口獎及會議規範的傳承與培訓明顯不足。您如何看待這樣的現象？身為領導者，又將如何重新平衡三寶的發展與培育機制，並重塑巨港的品牌競爭力？'],
          pending: 1,
        },
        {
          t: 'qa',
          n: 19,
          en: 'Developing Members Beyond the Local Chapter',
          zh: '向總會、區會、組務及 IA 發展',
          qEn: ['The development of JCI members is not limited to the Local Organization.', 'Members can also take part in JCI Taiwan, South Regional, GA, and IA.', 'If you become President of JCI The Port, how will you encourage and prepare members to take part in these higher-level organizations?', 'Do you also plan to join or host important activities and training programs organized by JCI Taiwan or South Regional? How will you use these opportunities to increase the visibility and influence of JCI The Port?'],
          qZh: ['青商會的發展不只在分會，更包含總會、區會、組務及IA。若您當選理事長，將如何培育會員向外發展，並規劃爭取參加或承辦總會、區會的重要活動與課程，提升巨港的能見度與影響力？'],
          pending: 1,
        },
      ],
    },
  ],
};

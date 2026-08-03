/* A Five-Minute Campaign Speech — reading practice for adults.

   The text is the candidate's own bilingual speech for the 52nd President of
   JCI Great Harbor, kept exactly as written: this page is reading practice,
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
*/

const SPEECH = {
  title: 'A Five-Minute Campaign Speech',
  titleZh: '五分鐘政見發表稿',
  kicker: '巨港國際青年商會 · 第52屆理事長候選人',

  source: {
    en: 'Practice text: the candidate’s own five-minute campaign speech for the 52nd President of JCI Great Harbor. The Chinese and the English are reproduced as written.',
    zh: '練習文本：第52屆巨港國際青年商會理事長候選人五分鐘政見發表稿，中英文均依原稿，未經改寫。',
  },

  intro: {
    en: 'Sixty-two sentences, in the order they are spoken. Read each one aloud, tap 🔊 to hear it, and tap 中 only when you need the Chinese. When a section feels comfortable, switch to 記 Recall: the Chinese leads, and you say the English before you check it.',
    zh: '全篇六十二句，依演說順序排列。把每一句大聲讀出來，點 🔊 聽範讀，需要時再點 中 看中文。一段唸熟之後，切換到「記」：中文在前，先把英文說出來，再點開對答案。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'read all 62 sentences aloud, pausing where the speaker would pause', zh: '朗讀全部 62 句，並在該停頓的地方停頓' },
      { en: 'say the twenty-eight words that most often trip up Mandarin speakers', zh: '唸出 28 個中文母語者最常唸錯的單字' },
      { en: 'produce each English sentence from the Chinese alone', zh: '只看中文，就能把英文說出來' },
      { en: 'deliver the whole speech inside five minutes', zh: '在五分鐘之內完成整篇演說' },
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
              en: 'Chairperson, past presidents, members of the Great Harbor family, and honored guests, good evening.',
              zh: '大會主席、各位前會長、各位巨港家人、各位貴賓，大家晚安。',
            },
            {
              en: 'I am Chen Jianhong, a candidate for the 52nd President of JCI Great Harbor.',
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
              en: 'Build Dreams and Bring Greater Honor to Great Harbor.',
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
              en: 'In June 2024, a friend introduced me to JCI Great Harbor.',
              zh: '2024年6月，透過朋友引薦，我第一次接觸巨港青商。',
            },
            {
              en: 'At my first board meeting, I saw two important things.',
              zh: '第一次參加理事會，我看見了兩件事。',
            },
            {
              en: 'The first was passion. Every member was thinking about how to make Great Harbor better and how to invite more young people to join.',
              zh: '第一，是熱情。每位會員都在思考，如何讓巨港更好，如何吸引更多青年加入。',
            },
            {
              en: 'The second was professionalism. Every proposal was discussed carefully. The system, duties, and responsibilities were clear.',
              zh: '第二，是專業。議案討論嚴謹、制度完整、分工清楚、責任明確。',
            },
            {
              en: 'At that moment, I knew that Great Harbor was not only a place to make friends. It was also a place to develop leaders.',
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
              en: 'I am not running because I think I am the best. I am running because I believe in Great Harbor, and I am ready to take responsibility and serve everyone.',
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
          en: 'First, Build an Influential Great Harbor',
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
              en: 'Every partnership should help more people learn about Great Harbor.',
              zh: '每一次合作，都要讓更多人看見巨港。',
            },
            {
              en: 'In the future, when people talk about Great Harbor, I hope they will say:',
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
              en: 'Great Harbor should offer more than personal connections. It should create real opportunities.',
              zh: '讓巨港不只是人脈，更能創造真正的機會。',
            },
            {
              en: 'I will also start a professional sharing program. Members can share their knowledge, and more young people can learn about Great Harbor.',
              zh: '同時，我會推動職人分享計畫，讓會員分享專業，也讓更多優秀青年認識巨港。',
            },
            {
              en: 'I hope every member can say:',
              zh: '我希望未來每位會員都能說：',
            },
            {
              en: '“Joining Great Harbor was one of the most valuable investments in my life.”',
              zh: '「加入巨港，是我人生最有價值的投資之一。」',
              k: 1,
            },
          ],
        },

        {
          t: 'subhead',
          en: 'Third, Strengthen the Culture of Great Harbor',
          zh: '第三，深化巨港文化',
        },
        {
          t: 'lines',
          items: [
            {
              en: 'The most valuable part of Great Harbor is not only our ability to organize events. It is our culture.',
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
              en: 'For service, I hope Great Harbor will continue to support local communities, students in need, homeless animals, and others who need help.',
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
      en: 'The Great Harbor I Hope to Build',
      zh: '我期待的巨港',
      blocks: [
        {
          t: 'lines',
          items: [
            {
              en: 'I hope Great Harbor will not only become bigger. I hope it will become warmer.',
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
              en: 'The president should not stand in front of the Great Harbor family. The president should stand beside every member.',
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
              en: 'Dear Great Harbor family members, one person can have a dream, but a group of people can give that dream a better chance to come true.',
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
              en: 'Let us build dreams for young people, create influence in Kaohsiung, and continue the honor of Great Harbor.',
              zh: '讓我們一起為青年建築夢想，在高雄創造影響，為巨港延續榮耀。',
              k: 1,
            },
            {
              en: 'Let more people grow because of Great Harbor.',
              zh: '讓更多人因巨港而成長。',
            },
            {
              en: 'Let more families connect because of Great Harbor.',
              zh: '讓更多家庭因巨港而連結。',
            },
            {
              en: 'Let more parts of society become better because of Great Harbor.',
              zh: '讓更多社會角落因巨港而變得更美好。',
            },
            {
              en: 'I am Chen Jianhong, a candidate for the 52nd President of JCI Great Harbor.',
              zh: '我是第52屆理事長候選人陳建宏。',
            },
            {
              en: 'I sincerely ask every member of the Great Harbor family to give me an opportunity to serve.',
              zh: '懇請各位巨港家人，給建宏一個服務的機會。',
            },
            { en: 'Let us move forward together:', zh: '讓我們攜手同行：' },
            {
              en: 'Build Dreams and Bring Greater Honor to Great Harbor.',
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
  ],
};

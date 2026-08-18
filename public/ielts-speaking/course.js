/* IELTS Speaking — the map of the whole course.

   One file, loaded by the contents page and by every lesson page. It holds
   nothing but structure: the three parts of the exam, and the lessons that sit
   under each one.

   `built: true` on a lesson means its folder exists and its page is written.
   The contents page links those and dims the rest, so it doubles as the to-do
   list — a contents page that only shows finished work is not a map of the
   course. This is the same arrangement the grammar book uses.

   Adding a lesson is three steps and nothing else changes:

     1. cp -r _template hometown          (folder name = the lesson id)
     2. write hometown/content.js
     3. flip `built: true` on that lesson here

   Lesson folders are flat — /ielts-speaking/hometown/ — not nested under a
   part. The part a lesson belongs to is recorded here, in `lessons`, and the
   lesson page reads it back out of this file for its kicker and its clocks.
   Ids are therefore unique across the whole course.

   Every visible string is an `en` / `zh` pair. English leads; the Traditional
   Chinese stays hidden until it is asked for.
*/

const COURSE = {
  title: 'IELTS Speaking',
  titleZh: '雅思口說',
  kicker: '成人一對一 · adult one-to-one',

  intro: {
    en: 'The Speaking test is three conversations, not one. Each part rewards a different habit — and the habit that carries Part 1 is the one that sinks Part 3. These lessons take the parts one at a time.',
    zh: '口說測驗是三場對話，不是一場。每個部分獎勵的習慣都不同——撐起 Part 1 的那個習慣，正好會拖垮 Part 3。這些課程一次處理一個部分。',
  },

  /* Shown under each part heading on the contents page, and used by every
     lesson page in that part: `plan` and `speak` set the two clocks, and
     `band` is the stretch of the speaking clock an answer should land in.
     Times are the real exam's, so a lesson never has to restate them. */
  parts: [
    {
      id: 'part1',
      n: 1,
      en: 'The warm-up',
      zh: '暖身',
      label: 'Part 1',
      whatEn: 'Four to five minutes of short questions about you — where you live, what you do, what you like. Familiar ground, asked quickly.',
      whatZh: '四到五分鐘，問你自己的事——住哪裡、做什麼、喜歡什麼。題目熟悉，但問得很快。',
      askEn: 'Answer in two or three sentences: the answer, then a reason or an example. Not one word, and not a speech.',
      askZh: '用兩三句話回答：先給答案，再給一個理由或例子。不要只給一個詞，也不要演講。',
      minutes: '4–5 min',
      clock: { plan: 0, speak: 0, bandLow: 15, bandHigh: 35 },
    },
    {
      id: 'part2',
      n: 2,
      en: 'The long turn',
      zh: '長篇獨白',
      label: 'Part 2',
      whatEn: 'A card with a topic and three or four bullets. One minute to prepare with paper and pencil, then one to two minutes speaking, alone, without interruption.',
      whatZh: '一張卡片，上面有題目與三四個提示。一分鐘用紙筆準備，接著獨自說一到兩分鐘，中間不會被打斷。',
      askEn: 'Use the whole minute of preparation, cover every bullet, and keep talking until you are stopped.',
      askZh: '把準備的那一分鐘用完、每個提示都講到，並且一直說到被喊停為止。',
      minutes: '1 min prep · 1–2 min talk',
      clock: { plan: 60, speak: 0, bandLow: 90, bandHigh: 120 },
    },
    {
      id: 'part3',
      n: 3,
      en: 'The discussion',
      zh: '深入討論',
      label: 'Part 3',
      whatEn: 'Four to five minutes of wider questions growing out of the Part 2 topic — society, change, causes and consequences. No longer about you.',
      whatZh: '四到五分鐘，由 Part 2 的主題延伸出的較大問題——社會、變遷、原因與結果。已經不是在談你自己。',
      askEn: 'Give an answer with a shape a listener can follow: two or three parts, each one named out loud, ending on purpose.',
      askZh: '給出聽者跟得上的結構：兩到三個部分，每一部分都說出口，並且有意識地收尾。',
      minutes: '4–5 min',
      clock: { plan: 30, speak: 0, bandLow: 40, bandHigh: 75 },
    },
  ],

  /* The lessons. `part` matches a part id above. Order here is the order they
     appear on the contents page, so put the skills lesson first and the topic
     lessons after it. Keep `blurb` to one line — it is what the teacher scans
     when picking the next thing to do. */
  lessons: [

    // ---------------------------------------------------------- Part 1
    {
      id: 'two-sentences-more',
      part: 'part1',
      built: false,
      en: 'Two Sentences More',
      zh: '再多兩句',
      blurbEn: 'The habit that fixes most Part 1 scores: answer, then reason or example, then stop.',
      blurbZh: 'Part 1 分數多半靠這個習慣修好：先答案，再理由或例子，然後停。',
    },
    {
      id: 'hometown',
      part: 'part1',
      built: false,
      en: 'Hometown and Where You Live',
      zh: '家鄉與居住地',
      blurbEn: 'The question every candidate gets, and the answer every candidate has memorised.',
      blurbZh: '每個考生都會被問到的題目，也是每個考生都背過的答案。',
    },
    {
      id: 'work-and-study',
      part: 'part1',
      built: false,
      en: 'Work and Study',
      zh: '工作與學業',
      blurbEn: 'Talking about what you do without reciting a job description.',
      blurbZh: '談你在做什麼，而不是背誦一份職務說明。',
    },
    {
      id: 'free-time',
      part: 'part1',
      built: false,
      en: 'Free Time and Hobbies',
      zh: '休閒與興趣',
      blurbEn: 'Easy questions where fluency slips, because nobody prepares for easy questions.',
      blurbZh: '流暢度最常在簡單題上失守，因為沒有人為簡單題做準備。',
    },

    // ---------------------------------------------------------- Part 2
    {
      id: 'the-one-minute-plan',
      part: 'part2',
      built: false,
      en: 'The One-Minute Plan',
      zh: '一分鐘的計畫',
      blurbEn: 'What to write on the paper in sixty seconds, and what never to write.',
      blurbZh: '六十秒內該在紙上寫什麼，以及什麼絕對不要寫。',
    },
    {
      id: 'describe-a-person',
      part: 'part2',
      built: false,
      en: 'Describe a Person',
      zh: '描述一個人',
      blurbEn: 'The commonest card family, and the trick of one scene instead of five adjectives.',
      blurbZh: '最常見的一類卡片；訣竅是給一個場景，而不是五個形容詞。',
    },
    {
      id: 'describe-a-place',
      part: 'part2',
      built: false,
      en: 'Describe a Place',
      zh: '描述一個地方',
      blurbEn: 'Places invite lists. Lists run out at forty seconds.',
      blurbZh: '地方題會誘人條列，而條列講到四十秒就沒了。',
    },
    {
      id: 'describe-an-experience',
      part: 'part2',
      built: false,
      en: 'Describe an Experience',
      zh: '描述一段經驗',
      blurbEn: 'A story with a middle — the one card type where narrative tenses earn marks.',
      blurbZh: '有中段的故事——這是敘事時態真正拿得到分的題型。',
    },
    {
      id: 'when-you-run-dry',
      part: 'part2',
      built: false,
      en: 'When You Run Dry at Ninety Seconds',
      zh: '講到九十秒沒話說',
      blurbEn: 'Four ways to keep going when the bullets are finished and the examiner has not stopped you.',
      blurbZh: '提示都講完、考官卻還沒喊停時，繼續說下去的四種辦法。',
    },

    /* ---------------------------------------------------------- Part 3

       These five come from one set of practice material on a single theme —
       commerce and trust. The frames lesson is the one to teach first; the
       four topic lessons then reuse those frames on their own question banks,
       so the structures are practised four times rather than explained once.

       The English questions, collocations and sentences are the material's.
       The Chinese for the question banks is not — the source gives Chinese for
       the phrase banks and the frames only, so the question translations were
       written for this site. */
    {
      id: 'answer-shapes',
      part: 'part3',
      built: true,
      en: 'Answer Shapes and Frames',
      zh: '回答架構與句型',
      blurbEn: 'Four structures, six frames and ten sentences worth saying as they stand. Teach this one first.',
      blurbZh: '四種結構、六個句型，以及十句可直接照說的句子。這一課請先教。',
    },
    {
      id: 'online-reviews',
      part: 'part3',
      built: true,
      en: 'Online Reviews',
      zh: '線上評論',
      blurbEn: 'Fifteen questions on trust, fakes and star ratings, with the phrase bank that answers them.',
      blurbZh: '十五題，談信任、假評論與星級評分，附可用來回答的字詞庫。',
    },
    {
      id: 'customer-service',
      part: 'part3',
      built: true,
      en: 'Customer Service',
      zh: '顧客服務',
      blurbEn: 'Fifteen questions on complaints, chatbots and staying calm under pressure.',
      blurbZh: '十五題，談客訴、聊天機器人，以及壓力下保持冷靜。',
    },
    {
      id: 'consumer-behaviour',
      part: 'part3',
      built: true,
      en: 'Consumer Behaviour',
      zh: '消費者行為',
      blurbEn: 'Ten questions on impulse buying, brands, discounts and having too much choice.',
      blurbZh: '十題，談衝動購物、品牌、折扣，以及選擇過多。',
    },
    {
      id: 'business-reputation',
      part: 'part3',
      built: true,
      en: 'Business Reputation',
      zh: '企業聲譽',
      blurbEn: 'Ten questions on word-of-mouth, rebuilding trust and answering unfair criticism.',
      blurbZh: '十題，談口碑、重建信任，以及回應不公平的批評。',
    },
  ],
};

/* Convenience for the lesson pages: given a lesson id, hand back the lesson
   and the part it belongs to, already joined. */
COURSE.find = function (id) {
  const lesson = this.lessons.find((l) => l.id === id);
  if (!lesson) throw new Error(`No lesson "${id}" in course.js`);
  const part = this.parts.find((p) => p.id === lesson.part);
  return { lesson, part };
};

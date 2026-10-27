/* Two Sentences More — IELTS Speaking Part 1, adult one-to-one.

   The habit lesson for Part 1, and the one to teach before the three topic
   lessons. Everything in them assumes this shape is already there.

   WRITTEN FOR THIS SITE. The questions are standard Part 1 fare; the answers,
   the language and all the Chinese are the site's.

   Part 1 is a different exam from Part 3 and the course has to say so. There
   is no planning time, the questions are about you, the answers are fifteen
   to thirty-five seconds, and the thing being tested is whether you can be
   fluent about something easy. A Part 3 answer delivered here is as wrong as
   a one-word one.
*/

const LESSON = {
  id: 'two-sentences-more',
  title: 'Two Sentences More',
  titleZh: '再多兩句',

  intro: {
    en: 'Part 1 is four minutes of easy questions, and most of the marks lost there are lost to answers that stop too soon. The fix is one habit, and it is small enough to install in a single lesson: answer the question, then say two sentences more, then stop.',
    zh: 'Part 1 是四分鐘的簡單問題，而大多數失分都來自「答得太早結束」。解法只有一個習慣，而且小到一堂課就裝得起來：先回答問題，再多說兩句，然後停。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'answer any Part 1 question in two or three sentences', zh: '用兩到三句話回答任何 Part 1 題目' },
      { en: 'add a reason or an example without being asked for one', zh: '不必被追問，就自己補上理由或例子' },
      { en: 'stop on purpose instead of trailing off or over-running', zh: '有意識地收尾，而不是消音或講不完' },
      { en: 'hear the difference between too short, right, and too long', zh: '聽得出「太短」「剛好」「太長」的差別' },
    ],
  },

  source: {
    en: 'Written for this page. The questions are standard Part 1 material; the answers, the language and the Chinese are the site’s.',
    zh: '本頁為本站自行撰寫。題目為 Part 1 常見題型；答案、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'the-shape',
      n: 1,
      en: 'Answer, then two more',
      zh: '先回答，再多兩句',
      blocks: [
        {
          t: 'lead',
          en: 'Part 1 is not testing your ideas. It is testing whether you can speak easily about something you already know, which is why the questions are so plain. The examiner needs enough speech to mark — and a one-sentence answer does not give them any.',
          zh: 'Part 1 不是在考你的想法，而是在考你能不能輕鬆地談論你本來就熟悉的事——這就是題目如此平常的原因。考官需要足夠的語料才能評分，而一句話的回答，什麼都沒給他。',
        },
        {
          t: 'shapes',
          en: 'The shape',
          zh: '回答結構',
          hintEn: 'Tap the card to see the three moves and how each one starts.',
          hintZh: '點卡片可看三個動作，以及每個動作的開頭方式。',
          items: [
            {
              tag: '3',
              name: 'Answer, reason, example',
              nameZh: '回答、理由、例子',
              whenEn: 'Every Part 1 question, without exception.',
              whenZh: '每一道 Part 1 題目，無一例外。',
              buckets: [
                { en: 'Answer it', zh: '直接回答' },
                { en: 'Say why', zh: '說出理由' },
                { en: 'Give one detail', zh: '給一個細節' },
              ],
              lines: [
                { en: 'Yes, quite often, actually.', zh: '有，其實還滿常的。' },
                { en: 'Mainly because ________.', zh: '主要是因為 ________。' },
                { en: 'Last week, for instance, ________.', zh: '比如說上週，________。' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Two sentences more, not twenty',
          zh: '多兩句，不是多二十句',
          bodyEn: 'The second failure in Part 1 is the opposite of the first: a candidate who has been told to speak more delivers a Part 3 answer to “do you like coffee?” That reads as rehearsed and it eats the examiner’s clock. Fifteen to thirty-five seconds. Answer, reason, one detail, stop.',
          bodyZh: 'Part 1 的第二種失敗和第一種相反：被叮嚀要多說的考生，對著「你喜歡咖啡嗎？」給出一個 Part 3 等級的回答。那聽起來就像背的，而且吃掉考官的時間。十五到三十五秒。回答、理由、一個細節，然後停。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'too-short-too-long',
      n: 2,
      en: 'Too short, too long, right',
      zh: '太短、太長、剛好',
      blocks: [
        {
          t: 'lead',
          en: 'The same question, answered three ways. Only one of them is a Part 1 answer.',
          zh: '同一道題，三種回答方式。其中只有一個是 Part 1 的答案。',
        },
        {
          t: 'question',
          kicker: 'Part 1',
          en: 'Do you prefer to spend time indoors or outdoors?',
          zh: '你比較喜歡待在室內還是戶外？',
        },
        {
          t: 'upgrade',
          en: 'Too short',
          zh: '太短',
          hintEn: 'Decide what is missing before you open it.',
          hintZh: '先想想少了什麼，再打開。',
          beforeTag: 'About four seconds', beforeTagZh: '大約四秒',
          beforeEn: 'Outdoors. I like fresh air.',
          beforeZh: '戶外。我喜歡新鮮空氣。',
          adds: [
            { en: 'a reason that is actually yours', zh: '一個真正屬於你的理由' },
            { en: 'one concrete detail', zh: '一個具體的細節' },
          ],
          afterTag: 'About twenty seconds', afterTagZh: '大約二十秒',
          afterEn: 'Outdoors, definitely. I sit at a desk all week, so by the weekend I want to be somewhere with a bit of space. There’s a river path near my flat and I walk there most Saturday mornings.',
          afterZh: '絕對是戶外。我整個星期都坐在辦公桌前，所以到了週末就想待在開闊一點的地方。我家附近有一條河濱步道，多數週六早上我都會去那裡走走。',
        },
        {
          t: 'upgrade',
          en: 'Too long',
          zh: '太長',
          hintEn: 'This one is not badly built — it is just the wrong exam.',
          hintZh: '這個回答結構沒問題，只是走錯考試了。',
          beforeTag: 'Over a minute', beforeTagZh: '超過一分鐘',
          beforeEn: 'That’s an interesting question. I think it depends on the situation. On the one hand, modern lifestyles have become increasingly sedentary, and many studies suggest that spending time in natural environments can significantly improve both physical and mental well-being. On the other hand, indoor spaces offer comfort and convenience, particularly in countries with extreme weather. So overall, I would say a balance between the two is ideal, as long as people make a conscious effort to get outside regularly.',
          beforeZh: '這是個很有趣的問題。我認為這要看情況。一方面，現代生活方式越來越久坐，許多研究指出待在自然環境中能顯著改善身心健康。另一方面，室內空間提供舒適與便利，在氣候極端的國家尤其如此。所以整體來說，我會說兩者之間取得平衡是理想的，只要人們有意識地經常外出。',
          adds: [
            { en: 'cut the warm-up — “that’s an interesting question” buys nothing', zh: '砍掉暖場——「這是個很有趣的問題」什麼都換不到' },
            { en: 'cut the research; nobody asked about studies', zh: '砍掉研究引述；沒有人問你文獻' },
            { en: 'say what YOU prefer — the question has the word “you” in it', zh: '說出「你」偏好什麼——題目裡就有 you 這個字' },
          ],
          afterTag: 'Right for Part 1', afterTagZh: 'Part 1 的正確長度',
          afterEn: 'Outdoors, definitely. I sit at a desk all week, so by the weekend I want to be somewhere with a bit of space. There’s a river path near my flat and I walk there most Saturday mornings.',
          afterZh: '絕對是戶外。我整個星期都坐在辦公桌前，所以到了週末就想待在開闊一點的地方。我家附近有一條河濱步道，多數週六早上我都會去那裡走走。',
        },
        {
          t: 'note',
          en: 'The long one would score well in Part 3',
          zh: '那個長版本在 Part 3 會拿到好分數',
          bodyEn: 'Nothing in it is wrong. It is balanced, it concedes, it concludes — it is the A.R.E.A. answer, delivered in the wrong part of the test. That is worth noticing, because a candidate who has drilled Part 3 hard is the one most likely to make this mistake.',
          bodyZh: '那段話本身沒有任何錯誤。它平衡、讓步、有結論——它就是 A.R.E.A. 的回答，只是用在測驗中錯誤的部分。這點值得注意，因為把 Part 3 練得越熟的考生，越可能犯這個錯。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'practice',
      n: 3,
      en: 'Now at speed',
      zh: '現在加快速度',
      blocks: [
        {
          t: 'lead',
          en: 'Part 1 questions arrive quickly, one after another, with no thinking time at all. Practise them the same way — pull one, answer immediately, pull the next.',
          zh: 'Part 1 的題目來得很快，一題接一題，完全沒有思考時間。練習時也請照同樣的方式——抽一題、立刻回答、再抽下一題。',
        },
        {
          t: 'frames',
          en: 'Ways to add the second sentence',
          zh: '補上第二句的說法',
          hintEn: 'These do the work of “two sentences more”. Tap 🔊 to hear one.',
          hintZh: '「再多兩句」靠的就是這些。點 🔊 可聽一次。',
          items: [
            { en: 'Mainly because ________.', zh: '主要是因為 ________。' },
            { en: 'Mostly for practical reasons — ________.', zh: '多半是現實考量——________。' },
            { en: 'I suppose it’s because ________.', zh: '我想是因為 ________。' },
            { en: 'Last week, for instance, ________.', zh: '比如說上週，________。' },
            { en: 'A good example would be ________.', zh: '一個好例子是 ________。' },
            { en: 'It depends on the day, really — ________.', zh: '其實要看那天的狀況——________。' },
            { en: 'That’s changed recently, actually. I used to ________.', zh: '其實這點最近有變。我以前 ________。' },
          ],
        },
        {
          t: 'qbank',
          en: 'Fifteen Part 1 questions',
          zh: '十五道 Part 1 題目',
          hintEn: 'Pull one and answer in two or three sentences. No planning.',
          hintZh: '抽一題，用兩三句話回答。不做計畫。',
          items: [
            { en: 'Do you prefer to spend time indoors or outdoors?', zh: '你比較喜歡待在室內還是戶外？' },
            { en: 'How often do you use public transport?', zh: '你多常搭乘大眾運輸？' },
            { en: 'Do you enjoy cooking?', zh: '你喜歡下廚嗎？' },
            { en: 'What kind of weather do you like best?', zh: '你最喜歡什麼樣的天氣？' },
            { en: 'Do you prefer mornings or evenings?', zh: '你比較喜歡早上還是晚上？' },
            { en: 'How do you usually get to work or school?', zh: '你通常怎麼去上班或上學？' },
            { en: 'Do you like to plan things in advance?', zh: '你喜歡事先把事情計畫好嗎？' },
            { en: 'Is there anything you would like to learn?', zh: '有沒有什麼是你想學的？' },
            { en: 'Do you prefer tea or coffee?', zh: '你比較喜歡茶還是咖啡？' },
            { en: 'How do you usually spend your weekends?', zh: '你週末通常怎麼過？' },
            { en: 'Do you watch much television?', zh: '你看很多電視嗎？' },
            { en: 'Do you like shopping?', zh: '你喜歡購物嗎？' },
            { en: 'How important is music to you?', zh: '音樂對你有多重要？' },
            { en: 'Do you take photographs often?', zh: '你常拍照嗎？' },
            { en: 'Do you prefer to be busy or to have free time?', zh: '你比較喜歡忙碌，還是有空閒時間？' },
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
          instructionEn: 'Answer five in a row without stopping between them. Record the run and listen back — you are checking length, not content.',
          instructionZh: '連續回答五題，中間不停。把整段錄下來回聽——你要檢查的是長度，不是內容。',
          checklist: [
            { en: 'Every answer had a reason in it', zh: '每個回答裡都有理由' },
            { en: 'At least three had a concrete detail', zh: '至少三個有具體細節' },
            { en: 'None was one sentence', zh: '沒有任何一個只有一句話' },
            { en: 'None ran past about thirty-five seconds', zh: '沒有任何一個超過大約三十五秒' },
            { en: 'You never said “that’s an interesting question”', zh: '你沒有說「這是個很有趣的問題」' },
          ],
        },
      ],
    },
  ],
};

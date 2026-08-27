/* Ninety Seconds, Three Ways — IELTS Speaking Part 3, adult one-to-one.

   The practice half of the A.R.E.A. strategy: the same four moves bent to
   three kinds of question, then stretched to a ninety-second answer and run
   against a mixed bank. Teach area-answer first; nothing here re-explains it.

   The three patterns come from the A.R.E.A. strategy material, as do their
   three worked answers and the timing table. Two notes on how they are framed:

   - The material presents the patterns as a taxonomy of their own, which would
     collide with answer-shapes — its Balanced, Cause-and-effect and Comparison
     structures are largely the same three. They are presented here instead as
     A.R.E.A. bending to the question in front of you, and step 1 points at
     answer-shapes for the fourth kind, which this material does not cover.
   - The material's three examples arrive without their questions. The question
     above each one was written for this page, chosen to match the answer that
     the material already supplies.

   The mixed bank in step 4 is not new material: all twelve questions are drawn
   from the four topic lessons, picked so each kind of question appears four
   times. The type label on each is the answer to the exercise, so it sits
   behind the row's tap and the 中文 switch deliberately does not release it.
*/

const LESSON = {
  id: 'ninety-seconds',
  title: 'Ninety Seconds, Three Ways',
  titleZh: '九十秒，三種題型',

  intro: {
    en: 'A.R.E.A. tells you what to do. This lesson is about doing it to a question you did not choose, in the time the examiner actually leaves you.',
    zh: 'A.R.E.A. 告訴你要做什麼。這一課要處理的是：面對你沒得挑的題目，在考官真正給你的時間內，把它做出來。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'tell an opinion question from a cause question from a comparison question', zh: '分辨意見題、原因題與比較題' },
      { en: 'bend the four moves to fit whichever kind you were given', zh: '依照拿到的題型，調整那四個動作' },
      { en: 'pace a ninety-second answer instead of running out at forty', zh: '把九十秒的回答配好速度，而不是講到四十秒就沒了' },
      { en: 'name the question type out loud before you start speaking', zh: '在開口之前，先說出這是哪一種題型' },
    ],
  },

  source: {
    en: 'The three patterns, their worked answers and the timing table are taken from the A.R.E.A. strategy material for this course. The questions framing the three answers were written for this page, and the twelve practice questions come from the four topic lessons.',
    zh: '三種題型、示範答案與時間分配取自本課程的 A.R.E.A. 策略教材；示範答案前的題目為本頁自行擬定，練習用的十二道題則取自四個主題課程。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'three-kinds',
      n: 1,
      en: 'Three kinds of question, the same four moves',
      zh: '三種題型，同樣四個動作',
      blocks: [
        {
          t: 'lead',
          en: 'A.R.E.A. does not change. What changes is which move carries the weight — and in a cause question, that a second reason takes the place of the balancing sentence.',
          zh: 'A.R.E.A. 本身不變，變的是哪一個動作承擔重量——而在原因題裡，第二個理由會取代平衡那一句的位置。',
        },
        {
          t: 'shapes',
          en: 'The three patterns',
          zh: '三種題型的架構',
          hintEn: 'Tap a card for its five moves and the frame that runs through them.',
          hintZh: '點卡片可看它的五個動作，以及貫穿其中的句型。',
          items: [
            {
              tag: '1',
              name: 'Opinion question',
              nameZh: '意見題',
              whenEn: 'Do you think…? · Do you agree…? · Should…?',
              whenZh: 'Do you think…? · Do you agree…? · Should…?',
              buckets: [
                { en: 'Opinion', zh: '立場' },
                { en: 'Reason', zh: '原因' },
                { en: 'Example', zh: '例子' },
                { en: 'Balance', zh: '另一面' },
                { en: 'Conclusion', zh: '結論' },
              ],
              lines: [
                { en: 'I think ________,', zh: '我認為 ________，' },
                { en: 'mainly because ________.', zh: '主要是因為 ________。' },
                { en: 'For example, ________.', zh: '例如，________。' },
                { en: 'That said, ________.', zh: '話雖如此，________。' },
                { en: 'So overall, ________.', zh: '所以整體來說，________。' },
              ],
            },
            {
              tag: '2',
              name: 'Cause question',
              nameZh: '原因題',
              whenEn: 'Why do people…? · Why are some people…? · Why has this become common?',
              whenZh: 'Why do people…? · Why are some people…? · Why has this become common?',
              buckets: [
                { en: 'Reason 1', zh: '理由一' },
                { en: 'Explanation', zh: '說明' },
                { en: 'Reason 2', zh: '理由二' },
                { en: 'Example', zh: '例子' },
                { en: 'Conclusion', zh: '結論' },
              ],
              lines: [
                { en: 'One major reason is ________.', zh: '一個主要原因是 ________。' },
                { en: 'This means that ________.', zh: '這代表 ________。' },
                { en: 'Another reason is ________.', zh: '另一個原因是 ________。' },
                { en: 'For example, ________.', zh: '例如，________。' },
                { en: 'So I would say ________.', zh: '所以我會說 ________。' },
              ],
            },
            {
              tag: '3',
              name: 'Comparison question',
              nameZh: '比較題',
              whenEn: 'How is A different from B? · Do young people and older people…? · Is X better than Y?',
              whenZh: 'How is A different from B? · Do young people and older people…? · Is X better than Y?',
              buckets: [
                { en: 'Main difference', zh: '主要差異' },
                { en: 'Side A', zh: 'A 方' },
                { en: 'Side B', zh: 'B 方' },
                { en: 'Example', zh: '例子' },
                { en: 'Conclusion', zh: '結論' },
              ],
              lines: [
                { en: 'The main difference is ________.', zh: '主要差異是 ________。' },
                { en: 'Younger people tend to ________,', zh: '年輕人傾向 ________，' },
                { en: 'while older people are more likely to ________.', zh: '而年長者比較可能 ________。' },
                { en: 'For example, ________.', zh: '例如，________。' },
                { en: 'So overall, ________.', zh: '所以整體來說，________。' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'The cause question drops the balance',
          zh: '原因題沒有「另一面」',
          bodyEn: 'It is the one pattern of the three with no balancing sentence: a second reason sits in that slot instead. Nobody is asking you to disagree with your own explanation of why something happens, so conceding there sounds confused rather than mature.',
          bodyZh: '三種題型中，只有原因題沒有平衡那一句：那個位置改放第二個理由。沒有人要求你反駁自己對「為什麼會這樣」的解釋，所以在那裡讓步，聽起來只會像思路混亂，而不是成熟。',
        },
        {
          t: 'note',
          en: 'There is a fourth kind',
          zh: '還有第四種題型',
          bodyEn: 'Questions about the future — “Will this become more important?” — are not covered here. They have their own structure in the Answer Shapes and Frames lesson, which also holds the six universal frames these patterns are built from.',
          bodyZh: '關於未來的題目——「Will this become more important?」——不在這一課的範圍內。它在「回答架構與句型」那一課有自己的架構，那一課也收錄了這三種題型所使用的六個通用句型。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'three-answers',
      n: 2,
      en: 'One answer of each kind',
      zh: '三種題型各一個示範',
      blocks: [
        {
          t: 'lead',
          en: 'Read the question, plan your own answer with the pattern, and only then open the model. Opening it first turns the lesson into a reading exercise.',
          zh: '先看題目，用該題型的架構自己規劃一次，再打開示範。先打開，這堂課就變成閱讀練習了。',
        },
        {
          t: 'question',
          en: 'Do you think online reviews are useful?',
          zh: '你認為線上評論有用嗎？',
          shape: 'Opinion question',
          shapeZh: '意見題',
        },
        {
          t: 'model',
          en: 'Pattern 1 · Opinion',
          zh: '題型一 · 意見題',
          hintEn: 'Notice the balance arrives before the conclusion, never after it.',
          hintZh: '注意「另一面」出現在結論之前，絕不會在結論之後。',
          parts: [
            {
              tag: 'Opinion', tagZh: '立場',
              en: 'I think online reviews are useful,',
              zh: '我認為線上評論很有用，',
            },
            {
              tag: 'Reason', tagZh: '原因',
              en: 'mainly because they help customers make better decisions.',
              zh: '主要是因為它們幫助顧客做出更好的決定。',
            },
            {
              tag: 'Example', tagZh: '例子',
              en: 'For example, people often check reviews before booking a hotel or buying electronics.',
              zh: '例如，人們常在訂飯店或購買電子產品前查看評論。',
            },
            {
              tag: 'Balance', tagZh: '另一面',
              en: 'That said, not all reviews are reliable because some may be fake or exaggerated.',
              zh: '話雖如此，並非所有評論都可靠，因為有些可能是假的或誇大的。',
            },
            {
              tag: 'Conclusion', tagZh: '結論',
              en: 'So overall, reviews are helpful, but people should read them critically.',
              zh: '所以整體來說，評論是有幫助的，但人們應該用批判性的方式閱讀它們。',
            },
          ],
        },
        {
          t: 'question',
          en: 'Do you think people buy things more impulsively nowadays?',
          zh: '你認為現在的人購物比以前更衝動嗎？',
          shape: 'Cause question',
          shapeZh: '原因題',
        },
        {
          t: 'model',
          en: 'Pattern 2 · Cause',
          zh: '題型二 · 原因題',
          hintEn: 'Two reasons, and the example belongs to the second one — not to both.',
          hintZh: '兩個理由，而例子是屬於第二個理由的——不是兩個共用。',
          parts: [
            {
              tag: 'Reason 1', tagZh: '理由一',
              en: 'One major reason is convenience.',
              zh: '一個主要原因是便利性。',
            },
            {
              tag: 'Explanation', tagZh: '說明',
              en: 'Shopping apps and one-click payment systems make it very easy for people to buy things quickly.',
              zh: '購物應用程式和一鍵付款系統，讓人們可以非常輕易地快速下單。',
            },
            {
              tag: 'Reason 2', tagZh: '理由二',
              en: 'Another reason is marketing. Companies use limited-time offers and flash sales to create urgency.',
              zh: '另一個原因是行銷。公司利用限時優惠和快閃特賣來製造急迫感。',
            },
            {
              tag: 'Example', tagZh: '例子',
              en: 'For example, when people see “only today,” they may buy something without thinking carefully.',
              zh: '例如，當人們看到「僅限今日」，可能就會沒有仔細思考就買下某樣東西。',
            },
            {
              tag: 'Conclusion', tagZh: '結論',
              en: 'So I would say impulse buying is becoming more common because shopping is faster and marketing is more persuasive.',
              zh: '所以我會說，衝動購物越來越常見，是因為購物變得更快，而行銷也更具說服力。',
            },
          ],
        },
        {
          t: 'question',
          en: 'Do young people and older people spend their money differently?',
          zh: '年輕人和年長者花錢的方式不同嗎？',
          shape: 'Comparison question',
          shapeZh: '比較題',
        },
        {
          t: 'model',
          en: 'Pattern 3 · Comparison',
          zh: '題型三 · 比較題',
          hintEn: 'The first sentence names what is being compared — values, not habits. That is what stops the answer becoming a list.',
          hintZh: '第一句就點出比較的是什麼——是價值觀，不是習慣。這正是讓回答不淪為條列的關鍵。',
          parts: [
            {
              tag: 'Difference', tagZh: '主要差異',
              en: 'The main difference is what they value.',
              zh: '主要差異在於他們重視什麼。',
            },
            {
              tag: 'Side A', tagZh: 'A 方',
              en: 'Younger people tend to care more about fashion, technology, and social image,',
              zh: '年輕人傾向更在意時尚、科技與社交形象，',
            },
            {
              tag: 'Side B', tagZh: 'B 方',
              en: 'while older people are more likely to focus on practicality, comfort, and long-term value.',
              zh: '而年長者比較可能著重實用性、舒適度與長期價值。',
            },
            {
              tag: 'Example', tagZh: '例子',
              en: 'For example, a young person may spend money on the latest phone, while an older person may prefer a reliable car or health-related product.',
              zh: '例如，年輕人可能把錢花在最新的手機上，而年長者可能偏好一輛可靠的車或健康相關的產品。',
            },
            {
              tag: 'Conclusion', tagZh: '結論',
              en: 'So overall, younger consumers often buy for identity, while older consumers buy for stability.',
              zh: '所以整體來說，年輕消費者常常為了認同而買，年長消費者則為了安穩而買。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'ninety',
      n: 3,
      en: 'Ninety seconds, five moves',
      zh: '九十秒，五個動作',
      blocks: [
        {
          t: 'lead',
          en: 'A long Part 3 answer is not five sentences said slowly. Each move gets its own stretch of the ninety seconds, and the commonest failure is spending forty of them on the example.',
          zh: 'Part 3 的長回答，不是把五句話講慢一點。每個動作各占九十秒裡的一段，而最常見的失誤，是把其中四十秒花在例子上。',
        },
        {
          t: 'timeline',
          en: 'Where the time goes',
          zh: '時間怎麼分配',
          hintEn: 'Start the speaking clock below and the row you should be on lights up.',
          hintZh: '啟動下方的開口計時，你當下該講到的那一列就會亮起來。',
          rows: [
            {
              from: 0, to: 10,
              en: 'Direct answer', zh: '直接回答',
              sayEn: 'I think companies should be allowed to delete negative reviews, but only under certain conditions.',
              sayZh: '我認為公司應該被允許刪除負面評論，但僅限於特定情況下。',
            },
            {
              from: 10, to: 30,
              en: 'Main reason', zh: '主要理由',
              sayEn: 'The main reason is that some reviews may be fake or unfair.',
              sayZh: '主要原因是，有些評論可能是假的或不公平的。',
            },
            {
              from: 30, to: 50,
              en: 'Example', zh: '例子',
              sayEn: 'For example, a false review about hygiene could seriously damage a restaurant.',
              sayZh: '例如，一則關於衛生的不實評論，可能嚴重傷害一家餐廳。',
            },
            {
              from: 50, to: 70,
              en: 'Balanced view', zh: '平衡觀點',
              sayEn: 'That said, honest criticism should not be deleted.',
              sayZh: '話雖如此，誠實的批評不應該被刪除。',
            },
            {
              from: 70, to: 90,
              en: 'Final judgment', zh: '收尾判斷',
              sayEn: 'So overall, companies should remove abusive reviews, but protect genuine feedback.',
              sayZh: '所以整體來說，公司應該移除惡意評論，但保護真誠的回饋。',
            },
          ],
        },
        {
          t: 'clock',
          en: 'Against the clock',
          zh: '計時進行',
          /* This lesson teaches the long answer, so it overrides the part's
             usual 0:40–1:15 band with the ninety seconds the timeline maps. */
          clock: { bandLow: 70, bandHigh: 90 },
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'name-the-type',
      n: 4,
      en: 'Name the type, then answer',
      zh: '先說出題型，再回答',
      blocks: [
        {
          t: 'lead',
          en: 'Twelve questions from across the four topics, four of each kind and deliberately shuffled. Say which kind it is before you say anything else — the answer is behind the row.',
          zh: '從四個主題各處抽出的十二道題，三種題型各四題，刻意打散。開口說任何內容之前，先說出它是哪一種——答案就藏在該列後面。',
        },
        {
          t: 'qbank',
          en: 'Which kind of question is it?',
          zh: '這是哪一種題型？',
          hintEn: 'Pull one, name the kind, then tap the row to check before you answer.',
          hintZh: '抽一題，說出題型，點該列確認後再回答。',
          items: [
            { en: 'Should companies be allowed to delete negative reviews?', zh: '公司應該被允許刪除負面評論嗎？', tag: 'Opinion', tagZh: '意見題' },
            { en: 'Why do some companies provide better customer service than others?', zh: '為什麼有些公司提供的顧客服務比其他公司好？', tag: 'Cause', tagZh: '原因題' },
            { en: 'Are online reviews more reliable than advertisements?', zh: '線上評論比廣告更可靠嗎？', tag: 'Comparison', tagZh: '比較題' },
            { en: 'Do you think transparency is important in business?', zh: '你認為透明度在商業中重要嗎？', tag: 'Opinion', tagZh: '意見題' },
            { en: 'Why do some people prefer famous brands?', zh: '為什麼有些人偏好知名品牌？', tag: 'Cause', tagZh: '原因題' },
            { en: 'What are the differences between face-to-face customer service and online customer service?', zh: '面對面的顧客服務和線上顧客服務有什麼差別？', tag: 'Comparison', tagZh: '比較題' },
            { en: 'Should customers always be treated as “always right”?', zh: '是否應該永遠把顧客當成「顧客永遠是對的」？', tag: 'Opinion', tagZh: '意見題' },
            { en: 'Why do some customers lose their temper when making complaints?', zh: '為什麼有些顧客在客訴時會發脾氣？', tag: 'Cause', tagZh: '原因題' },
            { en: 'Are video reviews more persuasive than written reviews?', zh: '影片評論比文字評論更有說服力嗎？', tag: 'Comparison', tagZh: '比較題' },
            { en: 'Do you think people today have too many choices when shopping?', zh: '你認為現在的人購物時選擇太多了嗎？', tag: 'Opinion', tagZh: '意見題' },
            { en: 'Why is reputation important for a company?', zh: '為什麼聲譽對一間公司很重要？', tag: 'Cause', tagZh: '原因題' },
            { en: 'Do you think young people rely on online reviews more than older people?', zh: '你認為年輕人比年長者更依賴線上評論嗎？', tag: 'Comparison', tagZh: '比較題' },
          ],
        },
        {
          t: 'task',
          en: 'Say it',
          zh: '說出來',
          instructionEn: 'Name the kind, then answer with its pattern. Tick each move as you hear it land.',
          instructionZh: '先說出題型，再用該題型的架構回答。聽到哪個動作出現就勾起來。',
          checklist: [
            { en: 'The first sentence answers the question', zh: '第一句就回答了問題' },
            { en: 'One reason, not three', zh: '一個理由，不是三個' },
            { en: 'A specific example', zh: '一個具體的例子' },
            { en: 'A balancing sentence — or a second reason, in a cause question', zh: '一句平衡補充——原因題則是第二個理由' },
            { en: 'A short judgment, then stop', zh: '一句簡短的判斷，然後停下來' },
          ],
        },
      ],
    },
  ],
};

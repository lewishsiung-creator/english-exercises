/* Online Reviews — IELTS Speaking Part 3, adult one-to-one.

   Topic one of four. Teach answer-shapes first; this lesson assumes the four
   structures and the six frames are already on the table, and spends its time
   on the vocabulary and the questions instead.

   The English questions, collocations, sentences and speaking pattern all come
   from the practice material for this course, as does the Chinese for the
   phrase bank. The Chinese for the question bank was written for this page —
   the source gives the questions in English only.
*/

const LESSON = {
  id: 'online-reviews',
  title: 'Online Reviews',
  titleZh: '線上評論',

  intro: {
    en: 'Fifteen questions about whether strangers on the internet can be trusted. The vocabulary is narrow and repeats — which is good news, because it means a dozen phrases will carry the whole topic.',
    zh: '十五道題，談網路上的陌生人能不能相信。這個主題的字彙範圍窄而且重複——這是好消息，因為十來個詞組就足以撐起整個主題。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'use the topic’s core collocations without hunting for them mid-sentence', zh: '自然使用本主題的核心詞組，不必在句子中途才臨時想' },
      { en: 'give a balanced answer about trust rather than a flat yes or no', zh: '針對信任類題目給出平衡的回答，而不是單純的是或否' },
      { en: 'say why a review is or is not reliable, in specific terms', zh: '具體說出一則評論為什麼可信或不可信' },
      { en: 'answer any of the fifteen questions with one of the four shapes', zh: '用四種架構之一，回答這十五題中的任何一題' },
    ],
  },

  source: {
    en: 'The questions, phrases and sentences are taken from the Part 3 practice material for this course. The Chinese for the question bank was written for this page.',
    zh: '題目、詞組與句子取自本課程的 Part 3 練習教材；題庫的中文為本頁自行翻譯。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'words',
      n: 1,
      en: 'The words this topic runs on',
      zh: '這個主題會用到的字詞',
      blocks: [
        {
          t: 'lead',
          en: 'Read down the English column and stop at anything you would not have produced yourself. Those are the ones worth the minute.',
          zh: '把英文那一欄由上往下讀，遇到你自己說不出來的就停下來。那些才值得花這一分鐘。',
        },
        {
          t: 'bank',
          en: 'Collocations',
          zh: '常用詞組',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'online reviews', zh: '線上評論' },
            { en: 'customer reviews', zh: '顧客評論' },
            { en: 'product reviews', zh: '產品評論' },
            { en: 'service reviews', zh: '服務評論' },
            { en: 'star ratings', zh: '星級評分' },
            { en: 'five-star reviews', zh: '五星評論' },
            { en: 'negative reviews', zh: '負面評論' },
            { en: 'positive reviews', zh: '正面評論' },
            { en: 'detailed reviews', zh: '詳細評論' },
            { en: 'fake reviews', zh: '假評論' },
            { en: 'honest reviews', zh: '誠實評論' },
            { en: 'exaggerated comments', zh: '誇大的評論' },
            { en: 'real customer experience', zh: '真實顧客經驗' },
            { en: 'buying decisions', zh: '購買決定' },
            { en: 'make an informed decision', zh: '做出有資訊根據的決定' },
            { en: 'reduce uncertainty', zh: '降低不確定性' },
            { en: 'compare different opinions', zh: '比較不同意見' },
            { en: 'blindly trust reviews', zh: '盲目相信評論' },
            { en: 'read reviews critically', zh: '批判性地閱讀評論' },
            { en: 'look for patterns', zh: '尋找共同模式' },
            { en: 'based on facts', zh: '根據事實' },
            { en: 'damage a company’s reputation', zh: '傷害公司聲譽' },
            { en: 'unfair or false comments', zh: '不公平或不實的評論' },
          ],
        },
        {
          t: 'note',
          en: 'Two of these do most of the work',
          zh: '其中兩個最好用',
          bodyEn: '“Reduce uncertainty” and “make an informed decision” are the reason anyone reads reviews at all. If you can say those two, you can answer half the questions in this topic without reaching for anything else.',
          bodyZh: '「reduce uncertainty」和「make an informed decision」正是人們會看評論的原因。只要你說得出這兩個，本主題一半的題目都能回答，不必再找別的說法。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'sentences',
      n: 2,
      en: 'Sentences you can say as they stand',
      zh: '可直接照說的句子',
      blocks: [
        {
          t: 'sentences',
          en: 'Useful sentences',
          zh: '實用句子',
          hintEn: 'Say each one aloud once. The ones that feel awkward in your mouth are the ones to drop.',
          hintZh: '每一句都出聲說一次。說起來彆扭的那些就捨棄。',
          items: [
            { en: 'Online reviews help customers make more informed decisions before they buy something.', zh: '線上評論可以幫助顧客在購買前做出更有資訊根據的決定。' },
            { en: 'A detailed review is usually more trustworthy than a short emotional comment.', zh: '一則詳細的評論通常比簡短又情緒化的評論更可信。' },
            { en: 'Customers should not blindly trust every review because some of them may be fake or exaggerated.', zh: '顧客不應該盲目相信每一則評論，因為有些可能是假的或誇大的。' },
            { en: 'Unlike advertisements, online reviews often show both the strengths and weaknesses of a product.', zh: '不像廣告，線上評論通常會呈現產品的優點和缺點。' },
            { en: 'If many people mention the same problem, the information is probably more reliable.', zh: '如果很多人都提到同一個問題，這個資訊可能比較可靠。' },
            { en: 'Reviewers should be responsible if their false comments damage a business unfairly.', zh: '如果評論者的不實評論不公平地傷害了一間公司，他們應該負責。' },
            { en: 'Honest criticism should be protected, but false accusations should not be treated as normal feedback.', zh: '誠實的批評應該受到保護，但不實指控不應該被當成一般回饋。' },
            { en: 'Online reviews are useful, but customers still need to read them with a critical mind.', zh: '線上評論很有用，但顧客仍然需要用批判性的態度閱讀它們。' },
          ],
        },
        {
          t: 'model',
          en: 'The balanced shape, worked through',
          zh: '平衡式架構的完整示範',
          hintEn: 'This is one answer to “Are online reviews reliable?” — three sentences, three jobs.',
          hintZh: '這是「線上評論可靠嗎？」的一個回答——三句話，三個任務。',
          parts: [
            {
              tag: 'One hand', tagZh: '一方面',
              en: 'I think online reviews are generally helpful because they reduce uncertainty for customers.',
              zh: '我認為線上評論通常很有幫助，因為它們可以降低顧客的不確定性。',
            },
            {
              tag: 'Other hand', tagZh: '另一方面',
              en: 'However, they are not always reliable, especially when reviews are too emotional or lack specific details.',
              zh: '然而，它們不一定總是可靠，特別是當評論太情緒化，或缺乏具體細節時。',
            },
            {
              tag: 'Verdict', tagZh: '判斷',
              en: 'So overall, I would say reviews are useful, as long as people compare different opinions instead of relying on one review alone.',
              zh: '所以整體來說，我會說評論是有用的，只要人們比較不同意見，而不是只依賴一則評論。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'questions',
      n: 3,
      en: 'The question bank',
      zh: '題庫',
      blocks: [
        {
          t: 'lead',
          en: 'Fifteen questions. Pull one at random, name the shape before answering, then answer against the clock below.',
          zh: '十五道題。隨機抽一題，先說出你要用的架構，再照下方的計時回答。',
        },
        {
          t: 'qbank',
          en: 'Online reviews',
          zh: '線上評論',
          hintEn: 'The button never repeats a question until the bank is empty.',
          hintZh: '在題庫抽完之前，按鈕不會重複同一題。',
          items: [
            { en: 'How much do people in your country trust online reviews?', zh: '你的國家的人有多相信線上評論？' },
            { en: 'Are online reviews more reliable than advertisements? Why or why not?', zh: '線上評論比廣告更可靠嗎？為什麼？' },
            { en: 'What makes an online review useful?', zh: '什麼樣的線上評論才算有用？' },
            { en: 'Do you think people are more likely to write reviews when they are angry or when they are satisfied?', zh: '你認為人們比較可能在生氣時還是滿意時寫評論？' },
            { en: 'Should companies be allowed to delete negative reviews?', zh: '公司應該被允許刪除負面評論嗎？' },
            { en: 'How can customers tell whether an online review is fake?', zh: '顧客要怎麼分辨一則線上評論是不是假的？' },
            { en: 'Do you think young people rely on online reviews more than older people?', zh: '你認為年輕人比年長者更依賴線上評論嗎？' },
            { en: 'Are video reviews more persuasive than written reviews?', zh: '影片評論比文字評論更有說服力嗎？' },
            { en: 'How have online reviews changed the way people shop?', zh: '線上評論如何改變了人們購物的方式？' },
            { en: 'Do online reviews put too much pressure on small businesses?', zh: '線上評論是否給小型企業帶來太大壓力？' },
            { en: 'Should reviewers be responsible if they write unfair or false comments?', zh: '如果評論者寫下不公平或不實的評論，他們應該負責嗎？' },
            { en: 'What types of products or services need reviews the most?', zh: '哪些類型的產品或服務最需要評論？' },
            { en: 'Do people usually read long reviews carefully, or do they just look at the rating?', zh: '人們通常會仔細閱讀長篇評論，還是只看評分？' },
            { en: 'How important are star ratings when people make buying decisions?', zh: '在做購買決定時，星級評分有多重要？' },
            { en: 'Do you think online reviews will become more important in the future?', zh: '你認為線上評論在未來會變得更重要嗎？' },
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
          instructionEn: 'Name your shape out loud before you start. Tick a phrase when you hear it used.',
          instructionZh: '開始前先說出你要用的架構。聽到哪個詞組被用上就勾起來。',
          checklist: [
            { en: 'reduce uncertainty', zh: '降低不確定性' },
            { en: 'make an informed decision', zh: '做出有資訊根據的決定' },
            { en: 'fake or exaggerated', zh: '假的或誇大的' },
            { en: 'read reviews critically', zh: '批判性地閱讀評論' },
            { en: 'So overall, I would say…, as long as…', zh: '所以整體來說，我會說……，只要……' },
          ],
        },
      ],
    },
  ],
};

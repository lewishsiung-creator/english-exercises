/* Business Reputation — IELTS Speaking Part 3, adult one-to-one.

   Topic four of four, and the one that gathers up the other three: reviews,
   service and consumer trust all arrive here as consequences. Teach it last.

   The English questions, collocations, sentences and speaking pattern all come
   from the practice material for this course, as does the Chinese for the
   phrase bank. The Chinese for the question bank was written for this page —
   the source gives the questions in English only.
*/

const LESSON = {
  id: 'business-reputation',
  title: 'Business Reputation',
  titleZh: '企業聲譽',

  intro: {
    en: 'Ten questions about something a company cannot buy and can lose in an afternoon. Answers here are strongest when they run on a timescale — years to build, one response to damage.',
    zh: '十題，談一樣公司買不到、卻可能在一個下午失去的東西。這個主題的回答，只要帶上時間尺度就特別有力——建立要幾年，毀掉只要一次回應。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'explain reputation as an asset rather than a feeling', zh: '把聲譽解釋成一項資產，而不是一種感覺' },
      { en: 'describe how a company rebuilds trust, in a sequence of steps', zh: '按步驟描述一間公司如何重建信任' },
      { en: 'answer a question about unfair criticism without sounding defensive', zh: '回答關於不公平批評的題目，而不顯得防衛' },
      { en: 'answer any of the ten questions with one of the four shapes', zh: '用四種架構之一，回答這十題中的任何一題' },
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
          en: 'Read these as three groups: what a reputation is, what damages it, and what repairs it. Most questions in this topic ask about one of the three.',
          zh: '把這些字分成三組來讀：聲譽是什麼、什麼會傷害它、什麼能修復它。本主題多數題目問的都是這三者之一。',
        },
        {
          t: 'bank',
          en: 'Collocations',
          zh: '常用詞組',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'business reputation', zh: '企業聲譽' },
            { en: 'company reputation', zh: '公司聲譽' },
            { en: 'brand reputation', zh: '品牌聲譽' },
            { en: 'brand image', zh: '品牌形象' },
            { en: 'public image', zh: '公眾形象' },
            { en: 'customer trust', zh: '顧客信任' },
            { en: 'customer loyalty', zh: '顧客忠誠度' },
            { en: 'word-of-mouth', zh: '口碑' },
            { en: 'negative publicity', zh: '負面宣傳' },
            { en: 'public criticism', zh: '公眾批評' },
            { en: 'unfair criticism', zh: '不公平的批評' },
            { en: 'rebuild trust', zh: '重建信任' },
            { en: 'restore reputation', zh: '恢復聲譽' },
            { en: 'damage reputation', zh: '傷害聲譽' },
            { en: 'lose credibility', zh: '失去可信度' },
            { en: 'gain customer loyalty', zh: '獲得顧客忠誠' },
            { en: 'handle complaints professionally', zh: '專業處理客訴' },
            { en: 'respond transparently', zh: '透明地回應' },
            { en: 'admit mistakes', zh: '承認錯誤' },
            { en: 'take responsibility', zh: '承擔責任' },
            { en: 'improve product quality', zh: '改善產品品質' },
            { en: 'learn from customer feedback', zh: '從顧客回饋中學習' },
            { en: 'long-term success', zh: '長期成功' },
            { en: 'competitive advantage', zh: '競爭優勢' },
            { en: 'crisis management', zh: '危機管理' },
          ],
        },
        {
          t: 'note',
          en: 'Admit, respond, act — in that order',
          zh: '承認、回應、行動——照這個順序',
          bodyEn: 'A question about rebuilding trust is really asking for a sequence. “Admit mistakes”, “respond transparently” and “take real action” already are that sequence, so saying them in order gives the answer a structure without any extra work.',
          bodyZh: '關於重建信任的題目，其實是在問一個「順序」。「admit mistakes」「respond transparently」「take real action」本身就是那個順序，照順序說出來，回答就自動有了結構，不必額外費力。',
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
            { en: 'A good reputation is one of the most valuable assets a company can have.', zh: '良好的聲譽是一間公司最有價值的資產之一。' },
            { en: 'Companies with a strong reputation are more likely to gain customer trust.', zh: '擁有良好聲譽的公司更容易獲得顧客信任。' },
            { en: 'One bad customer experience can spread quickly online and damage a company’s image.', zh: '一次不好的顧客經驗可能在線上快速傳播，並傷害公司的形象。' },
            { en: 'Word-of-mouth is still powerful, even in the age of online reviews.', zh: '即使在線上評論的時代，口碑仍然很有影響力。' },
            { en: 'If a company receives negative reviews, it should respond professionally instead of ignoring them.', zh: '如果公司收到負面評論，應該專業地回應，而不是忽視它們。' },
            { en: 'To rebuild trust, companies need to admit mistakes and take real action.', zh: '為了重建信任，公司需要承認錯誤並採取真正的行動。' },
            { en: 'Transparency is important because customers want to know whether a company is being honest.', zh: '透明度很重要，因為顧客想知道一間公司是否誠實。' },
            { en: 'Product quality and customer service both play an important role in building reputation.', zh: '產品品質和顧客服務在建立聲譽方面都扮演重要角色。' },
            { en: 'A strong reputation can become a competitive advantage in a crowded market.', zh: '在競爭激烈的市場中，良好的聲譽可以成為競爭優勢。' },
            { en: 'It takes years to build a reputation, but only one serious mistake to damage it.', zh: '建立聲譽需要好幾年，但一次嚴重錯誤就可能傷害它。' },
          ],
        },
        {
          t: 'model',
          en: 'The cause-and-effect shape, worked through',
          zh: '因果式架構的完整示範',
          hintEn: 'This is one answer to “Why is reputation important for a company?”',
          hintZh: '這是「為什麼聲譽對公司很重要？」的一個回答。',
          parts: [
            {
              tag: 'The claim', tagZh: '主張',
              en: 'I believe reputation is extremely important because it directly affects customer trust and long-term success.',
              zh: '我認為聲譽非常重要，因為它會直接影響顧客信任和長期成功。',
            },
            {
              tag: 'What follows', tagZh: '結果',
              en: 'If a company loses credibility, it may be difficult to win customers back, even if its products are good.',
              zh: '如果一間公司失去可信度，即使它的產品很好，也可能很難贏回顧客。',
            },
            {
              tag: 'So what', tagZh: '因此',
              en: 'That is why companies should respond to criticism transparently and use feedback to improve their products and services.',
              zh: '這就是為什麼公司應該透明地回應批評，並利用回饋來改善產品和服務。',
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
          en: 'Ten questions. Pull one at random, name the shape before answering, then answer against the clock below.',
          zh: '十道題。隨機抽一題，先說出你要用的架構，再照下方的計時回答。',
        },
        {
          t: 'qbank',
          en: 'Business reputation',
          zh: '企業聲譽',
          hintEn: 'The button never repeats a question until the bank is empty.',
          hintZh: '在題庫抽完之前，按鈕不會重複同一題。',
          items: [
            { en: 'Why is reputation important for a company?', zh: '為什麼聲譽對一間公司很重要？' },
            { en: 'How can a company rebuild trust after receiving many negative reviews?', zh: '在收到大量負面評論後，公司可以如何重建信任？' },
            { en: 'Is word-of-mouth still important in the age of online reviews?', zh: '在線上評論的時代，口碑還重要嗎？' },
            { en: 'Do large companies care more about reputation than small companies?', zh: '大公司會比小公司更在意聲譽嗎？' },
            { en: 'Can one bad customer experience seriously damage a business?', zh: '一次不好的顧客經驗，會嚴重傷害一間企業嗎？' },
            { en: 'Should companies focus more on product quality or customer service?', zh: '公司應該更重視產品品質，還是顧客服務？' },
            { en: 'How can companies use customer feedback to improve?', zh: '公司可以如何利用顧客回饋來改善？' },
            { en: 'Do you think transparency is important in business?', zh: '你認為透明度在商業中重要嗎？' },
            { en: 'What should a company do if it receives unfair criticism online?', zh: '如果公司在網路上受到不公平的批評，應該怎麼做？' },
            { en: 'How can businesses encourage customers to leave honest reviews?', zh: '企業可以如何鼓勵顧客留下誠實的評論？' },
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
            { en: 'word-of-mouth', zh: '口碑' },
            { en: 'rebuild trust', zh: '重建信任' },
            { en: 'respond transparently', zh: '透明地回應' },
            { en: 'competitive advantage', zh: '競爭優勢' },
            { en: 'It takes years to build…, but only one…', zh: '建立需要好幾年……，但只要一次……' },
          ],
        },
      ],
    },
  ],
};

/* Customer Service — IELTS Speaking Part 3, adult one-to-one.

   Topic two of four. Teach answer-shapes first.

   The English questions, collocations, sentences and speaking pattern all come
   from the practice material for this course, as does the Chinese for the
   phrase bank. The Chinese for the question bank was written for this page —
   the source gives the questions in English only.
*/

const LESSON = {
  id: 'customer-service',
  title: 'Customer Service',
  titleZh: '顧客服務',

  intro: {
    en: 'Fifteen questions about what happens when something has already gone wrong. Most answers here are really about emotions, not procedures — and saying so is what separates a good answer from an obvious one.',
    zh: '十五道題，談的是「事情已經出錯之後」。這裡多數的回答其實談的是情緒，而不是流程——能講出這一點，好答案與平庸答案就分出來了。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'describe good service in terms of skills rather than adjectives', zh: '用能力而不是形容詞來描述好的服務' },
      { en: 'talk about complaints as information a company can use', zh: '把客訴談成公司可以運用的資訊' },
      { en: 'compare humans and chatbots without sitting on the fence', zh: '比較真人與聊天機器人，而且不騎牆' },
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
          en: 'Notice how many of these are about people rather than systems. That is the shape of the topic.',
          zh: '注意這裡有多少詞談的是「人」而不是「制度」。那正是這個主題的樣貌。',
        },
        {
          t: 'bank',
          en: 'Collocations',
          zh: '常用詞組',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'customer service', zh: '顧客服務' },
            { en: 'customer service staff', zh: '客服人員' },
            { en: 'after-sales service', zh: '售後服務' },
            { en: 'after-sales support', zh: '售後支援' },
            { en: 'customer complaints', zh: '顧客抱怨 / 客訴' },
            { en: 'customer satisfaction', zh: '顧客滿意度' },
            { en: 'customer expectations', zh: '顧客期待' },
            { en: 'angry customers', zh: '生氣的顧客' },
            { en: 'rude customers', zh: '無禮的顧客' },
            { en: 'confused customers', zh: '困惑的顧客' },
            { en: 'disappointed customers', zh: '失望的顧客' },
            { en: 'emotional control', zh: '情緒控制' },
            { en: 'communication skills', zh: '溝通能力' },
            { en: 'problem-solving skills', zh: '解決問題的能力' },
            { en: 'stay calm under pressure', zh: '在壓力下保持冷靜' },
            { en: 'listen carefully', zh: '仔細聆聽' },
            { en: 'make customers feel understood', zh: '讓顧客感覺被理解' },
            { en: 'explain solutions clearly', zh: '清楚說明解決方案' },
            { en: 'respond quickly and professionally', zh: '快速且專業地回應' },
            { en: 'take complaints seriously', zh: '認真看待客訴' },
            { en: 'protect the company’s reputation', zh: '保護公司聲譽' },
            { en: 'deal with difficult customers', zh: '處理難應付的顧客' },
            { en: 'provide reliable support', zh: '提供可靠的支援' },
            { en: 'warranty issues', zh: '保固問題' },
            { en: 'repairs and maintenance', zh: '維修與保養' },
            { en: 'peace of mind', zh: '安心感' },
          ],
        },
        {
          t: 'note',
          en: '“Peace of mind” is the one to steal',
          zh: '「peace of mind」是最值得偷學的一個',
          bodyEn: 'It names the thing a customer is actually buying when they pay more for a known brand or a longer warranty. Drop it into an answer about expensive products and the answer stops sounding like a list.',
          bodyZh: '它精準說出了顧客多花錢買知名品牌或更長保固時，真正在買的東西。把它放進關於高價產品的回答裡，答案就不再像是在條列。',
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
            { en: 'Good customer service requires patience, communication skills, and emotional control.', zh: '好的顧客服務需要耐心、溝通能力和情緒控制。' },
            { en: 'Customer service staff often need to deal with people who are confused, disappointed, or angry.', zh: '客服人員常常需要面對困惑、失望或生氣的顧客。' },
            { en: 'If staff react emotionally, the situation may become worse very quickly.', zh: '如果員工情緒化反應，情況可能很快變得更糟。' },
            { en: 'Good staff should listen carefully and make customers feel understood.', zh: '好的員工應該仔細聆聽，並讓顧客感覺被理解。' },
            { en: 'Customers do not only want an answer; they also want reassurance.', zh: '顧客不只是想要答案；他們也想要安心感。' },
            { en: 'For expensive products, customer service is more important because the financial risk is higher.', zh: '對高價產品來說，顧客服務更重要，因為金錢風險更高。' },
            { en: 'Good after-sales service can make customers feel that their purchase was worth the money.', zh: '好的售後服務可以讓顧客覺得這筆錢花得值得。' },
            { en: 'Companies should take complaints seriously because complaints often reveal real problems.', zh: '公司應該認真看待客訴，因為客訴通常會揭露真正的問題。' },
            { en: 'Fast service is important, but it should not come at the cost of quality.', zh: '快速服務很重要，但不應該犧牲品質。' },
            { en: 'Good customer service is not just about solving problems; it is also about building trust.', zh: '好的顧客服務不只是解決問題，也是在建立信任。' },
          ],
        },
        {
          t: 'model',
          en: 'The cause-and-effect shape, worked through',
          zh: '因果式架構的完整示範',
          hintEn: 'This is one answer to “What are the most important qualities of good customer service staff?”',
          hintZh: '這是「好的客服人員最重要的特質是什麼？」的一個回答。',
          parts: [
            {
              tag: 'The claim', tagZh: '主張',
              en: 'I think the most important quality is the ability to stay calm under pressure.',
              zh: '我認為最重要的特質是在壓力下保持冷靜的能力。',
            },
            {
              tag: 'The reason', tagZh: '原因',
              en: 'This is because customer service staff often have to manage both practical problems and customers’ emotions.',
              zh: '這是因為客服人員通常需要同時處理實際問題和顧客情緒。',
            },
            {
              tag: 'What follows', tagZh: '結果',
              en: 'In my view, professional customer service can protect a company’s reputation and increase customer loyalty.',
              zh: '在我看來，專業的顧客服務可以保護公司的聲譽，並提高顧客忠誠度。',
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
          en: 'Customer service',
          zh: '顧客服務',
          hintEn: 'The button never repeats a question until the bank is empty.',
          hintZh: '在題庫抽完之前，按鈕不會重複同一題。',
          items: [
            { en: 'What are the most important qualities of good customer service staff?', zh: '好的客服人員最重要的特質是什麼？' },
            { en: 'Why do some companies provide better customer service than others?', zh: '為什麼有些公司提供的顧客服務比其他公司好？' },
            { en: 'Do you think customer service is more important for expensive products?', zh: '你認為對高價產品來說，顧客服務更重要嗎？' },
            { en: 'How should companies deal with rude customers?', zh: '公司應該如何應對無禮的顧客？' },
            { en: 'Should customers always be treated as “always right”?', zh: '是否應該永遠把顧客當成「顧客永遠是對的」？' },
            { en: 'What can companies learn from customer complaints?', zh: '公司可以從客訴中學到什麼？' },
            { en: 'Is it better for customer service to be handled by humans or AI chatbots?', zh: '顧客服務由真人處理比較好，還是由 AI 聊天機器人處理比較好？' },
            { en: 'Why do some customers lose their temper when making complaints?', zh: '為什麼有些顧客在客訴時會發脾氣？' },
            { en: 'Do you think companies should compensate customers when they make mistakes?', zh: '你認為公司犯錯時應該賠償顧客嗎？' },
            { en: 'How can companies train their employees to handle complaints professionally?', zh: '公司可以如何訓練員工專業地處理客訴？' },
            { en: 'Is fast customer service always good customer service?', zh: '快速的顧客服務就一定是好的顧客服務嗎？' },
            { en: 'What are the differences between face-to-face customer service and online customer service?', zh: '面對面的顧客服務和線上顧客服務有什麼差別？' },
            { en: 'Do you think customer expectations are higher now than in the past?', zh: '你認為現在顧客的期待比過去更高嗎？' },
            { en: 'How can poor customer service damage a company’s reputation?', zh: '差勁的顧客服務會如何傷害一間公司的聲譽？' },
            { en: 'Should companies publicly respond to customer complaints on social media?', zh: '公司應該在社群媒體上公開回應客訴嗎？' },
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
            { en: 'stay calm under pressure', zh: '在壓力下保持冷靜' },
            { en: 'make customers feel understood', zh: '讓顧客感覺被理解' },
            { en: 'take complaints seriously', zh: '認真看待客訴' },
            { en: 'peace of mind', zh: '安心感' },
            { en: 'That said, this does not mean…', zh: '話雖如此，這不代表……' },
          ],
        },
      ],
    },
  ],
};

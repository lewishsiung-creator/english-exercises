/* Answer Shapes and Frames — IELTS Speaking Part 3, adult one-to-one.

   The structures lesson for the Part 3 set. Teach it before the four topic
   lessons; each of those then puts these same shapes to work on its own bank
   of questions, so the frames get four rehearsals instead of one explanation.

   Everything here comes from the practice material: the four answer
   structures, the six universal sentence frames with their worked examples,
   and the ten high-value sentences. Both languages are the material's own —
   only the framing sentences, the goals and the closing task were written for
   this page.
*/

const LESSON = {
  id: 'answer-shapes',
  title: 'Answer Shapes and Frames',
  titleZh: '回答架構與句型',

  intro: {
    en: 'Part 3 is not a test of how many ideas you have. It is a test of whether a listener can follow the ones you already had. A shape decided before you open your mouth does most of that work for you.',
    zh: 'Part 3 考的不是你有多少想法，而是聽者能不能跟上你已經有的想法。開口前先決定好結構，這件事就完成了大半。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'match a question to one of four answer structures in a few seconds', zh: '在幾秒內，把題目對應到四種回答架構的其中一種' },
      { en: 'say the three parts of that structure out loud, so the examiner hears the shape', zh: '把該架構的三個部分說出口，讓考官聽見你的結構' },
      { en: 'use six sentence frames without having to invent the words around them', zh: '使用六個句型，不必再自己想框架外的字詞' },
      { en: 'add a qualification that sounds considered rather than uncertain', zh: '加上一句補充，聽起來是深思熟慮，而不是沒把握' },
      { en: 'finish on a judgment instead of trailing off', zh: '以一個判斷收尾，而不是逐漸消音' },
    ],
  },

  source: {
    en: 'The structures, frames and sentences on this page are taken from the Part 3 practice material for this course. The English and the Chinese are both as given there.',
    zh: '本頁的架構、句型與句子取自本課程的 Part 3 練習教材，中英文皆依教材原文。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'four-shapes',
      n: 1,
      en: 'Four shapes, four kinds of question',
      zh: '四種架構，四類題目',
      blocks: [
        {
          t: 'lead',
          en: 'Almost every Part 3 question is one of four kinds. Recognise the kind and the structure is already chosen for you.',
          zh: '幾乎每一道 Part 3 題目都屬於四類之一。認出是哪一類，架構就等於已經替你選好了。',
        },
        {
          t: 'note',
          en: 'Listen to the first three words',
          zh: '聽開頭三個字',
          bodyEn: '“Do you think…” asks for a balanced answer. “Why…” asks for cause and effect. “What are the differences between…” asks for a comparison. “Will… in the future” asks for a prediction. The opening words of the question tell you which shape to reach for before the examiner has finished asking it.',
          bodyZh: '「Do you think…」要的是平衡的回答；「Why…」要的是因果；「What are the differences between…」要的是比較；「Will… in the future」要的是預測。題目開頭的幾個字，在考官問完之前就已經告訴你該用哪一種架構。',
        },
        {
          t: 'shapes',
          en: 'The four structures',
          zh: '四種回答架構',
          hintEn: 'Tap a card to see its three parts and the line that announces each one.',
          hintZh: '點卡片可看它的三個部分，以及宣告每一部分的句子。',
          items: [
            {
              tag: '1',
              name: 'Balanced answer',
              nameZh: '平衡式回答',
              whenEn: 'For “Do you think…?” questions.',
              whenZh: '適合回答「Do you think…?」類題目。',
              buckets: [
                { en: 'Refuse the false choice', zh: '拒絕二選一' },
                { en: 'One side, then the other', zh: '一面，再另一面' },
                { en: 'Your verdict', zh: '你的判斷' },
              ],
              lines: [
                { en: 'I think it depends.', zh: '我認為這要看情況。' },
                { en: 'On the one hand, ________. On the other hand, ________.', zh: '一方面，________。另一方面，________。' },
                { en: 'So overall, I would say ________.', zh: '所以整體來說，我會說 ________。' },
              ],
            },
            {
              tag: '2',
              name: 'Cause and effect',
              nameZh: '因果式回答',
              whenEn: 'For “Why…?” questions.',
              whenZh: '適合回答「Why…?」類題目。',
              buckets: [
                { en: 'The reason', zh: '原因' },
                { en: 'What it means', zh: '這代表什麼' },
                { en: 'What follows from it', zh: '因此產生的結果' },
              ],
              lines: [
                { en: 'One major reason is ________.', zh: '一個主要原因是 ________。' },
                { en: 'This means that ________.', zh: '這代表 ________。' },
                { en: 'As a result, ________.', zh: '結果就是 ________。' },
              ],
            },
            {
              tag: '3',
              name: 'Comparison',
              nameZh: '比較式回答',
              whenEn: 'For “What are the differences between…?” questions.',
              whenZh: '適合回答「What are the differences between…?」類題目。',
              buckets: [
                { en: 'Name the difference', zh: '指出差異' },
                { en: 'Set the two side by side', zh: '把兩者並排' },
                { en: 'Say what each tends to do', zh: '說出各自的傾向' },
              ],
              lines: [
                { en: 'The main difference is ________.', zh: '主要差異是 ________。' },
                { en: 'Compared with ________, ________ is more likely to ________.', zh: '和 ________ 相比，________ 比較可能會 ________。' },
                { en: 'For example, if someone buys ________, they may expect ________.', zh: '例如，如果有人購買 ________，他們可能會期待 ________。' },
              ],
            },
            {
              tag: '4',
              name: 'Future prediction',
              nameZh: '預測式回答',
              whenEn: 'For “Will this become more important in the future?” questions.',
              whenZh: '適合回答「Will this become more important in the future?」類題目。',
              buckets: [
                { en: 'Commit to an answer', zh: '先明確表態' },
                { en: 'What people will do', zh: '人們會怎麼做' },
                { en: 'What that forces', zh: '這會逼出什麼結果' },
              ],
              lines: [
                { en: 'Yes, I think it will become more important because ________.', zh: '是的，我認為它會變得更重要，因為 ________。' },
                { en: 'In the future, people may ________.', zh: '未來，人們可能會 ________。' },
                { en: 'So companies will need to ________.', zh: '所以公司需要 ________。' },
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'six-frames',
      n: 2,
      en: 'Six frames that fit any topic',
      zh: '六個通用句型',
      blocks: [
        {
          t: 'lead',
          en: 'These six carry the joins. Learn them as fixed strings, so that in the exam you are only choosing what goes in the gaps.',
          zh: '這六句負責銜接。把它們當成固定字串背下來，考試時你就只需要決定空格裡放什麼。',
        },
        {
          t: 'sentences',
          en: 'The frames',
          zh: '句型',
          hintEn: 'Tap 🔊 to hear one. The numbers match the examples below.',
          hintZh: '點 🔊 可聽一次。編號與下方的例句相對應。',
          items: [
            { en: 'I think it depends on the situation. On the one hand, ________. On the other hand, ________.', zh: '我認為這要看情況。一方面，________。另一方面，________。' },
            { en: 'One major reason is that ________. As a result, ________.', zh: '一個主要原因是 ________。結果，________。' },
            { en: 'Compared with ________, ________ is more likely to ________.', zh: '和 ________ 相比，________ 比較可能 ________。' },
            { en: 'For example, if someone buys ________, they may expect ________.', zh: '例如，如果有人購買 ________，他們可能會期待 ________。' },
            { en: 'That said, this does not mean ________.', zh: '話雖如此，這不代表 ________。' },
            { en: 'So overall, I would say ________, as long as ________.', zh: '所以整體來說，我會說 ________，只要 ________。' },
          ],
        },
        {
          t: 'note',
          en: 'Number five is the one that raises a score',
          zh: '第五句是能拉高分數的那一句',
          bodyEn: '“That said, this does not mean…” is how a speaker shows they can hold two things at once. It concedes without collapsing, and it buys you a clause of thinking time while sounding entirely deliberate.',
          bodyZh: '「That said, this does not mean…」展現的是同時掌握兩件事的能力。它讓步但不投降，還能替你爭取一個子句的思考時間，而且聽起來完全是刻意為之。',
        },
        {
          t: 'sentences',
          en: 'The same six, filled in',
          zh: '同樣六句，填好內容',
          hintEn: 'These are the material’s own examples, on this course’s topics.',
          hintZh: '以下是教材本身的例句，主題與本課程相同。',
          items: [
            { en: 'I think it depends on the situation. On the one hand, online reviews can be very useful. On the other hand, some reviews may be fake or exaggerated.', zh: '我認為這要看情況。一方面，線上評論可能非常有用。另一方面，有些評論可能是假的或誇大的。' },
            { en: 'One major reason is that customers have more choices now. As a result, companies need to work harder to build trust.', zh: '一個主要原因是現在顧客有更多選擇。結果，公司需要更努力建立信任。' },
            { en: 'Compared with advertisements, online reviews are more likely to show real customer experiences.', zh: '和廣告相比，線上評論比較可能呈現真實顧客經驗。' },
            { en: 'For example, if someone buys an expensive laptop, they may expect reliable after-sales support.', zh: '例如，如果有人買一台昂貴的筆電，他們可能會期待可靠的售後支援。' },
            { en: 'That said, this does not mean companies should agree with every customer complaint.', zh: '話雖如此，這不代表公司應該同意每一個客訴。' },
            { en: 'So overall, I would say online reviews are helpful, as long as people read them critically.', zh: '所以整體來說，我會說線上評論是有幫助的，只要人們用批判性的方式閱讀它們。' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'high-value',
      n: 3,
      en: 'Ten sentences worth saying as they stand',
      zh: '十句可直接照說的句子',
      blocks: [
        {
          t: 'lead',
          en: 'Not frames — finished sentences. Each one is a whole idea, said well, and each one fits somewhere in the four topics that follow.',
          zh: '這些不是句型，而是完整句子。每一句都是一個說得漂亮的完整想法，也都能用在接下來的四個主題裡。',
        },
        {
          t: 'sentences',
          en: 'High-value sentences',
          zh: '高價值句子',
          hintEn: 'Pick two you would actually say. Two you own beat ten you recognise.',
          hintZh: '挑兩句你真的會說的。你真正掌握的兩句，勝過你只是認得的十句。',
          items: [
            { en: 'Online reviews can reduce uncertainty and help customers make better buying decisions.', zh: '線上評論可以降低不確定性，並幫助顧客做出更好的購買決定。' },
            { en: 'The best reviews are usually balanced, specific, and based on real experience.', zh: '最好的評論通常是平衡、具體，而且根據真實經驗。' },
            { en: 'Good customer service is not just about solving problems; it is also about managing emotions.', zh: '好的顧客服務不只是解決問題，也是在管理情緒。' },
            { en: 'Customers are more likely to stay loyal to a company if they feel respected and understood.', zh: '如果顧客覺得受到尊重和理解，他們比較可能對公司保持忠誠。' },
            { en: 'Modern consumers are better informed, but they are also more easily influenced by social media.', zh: '現代消費者資訊更充足，但也更容易受到社群媒體影響。' },
            { en: 'Discounts can create a sense of urgency, which may lead to impulse buying.', zh: '折扣可以製造急迫感，這可能導致衝動購物。' },
            { en: 'Trust plays a key role in consumer decisions because people do not want to waste their money.', zh: '信任在消費決策中扮演關鍵角色，因為人們不想浪費錢。' },
            { en: 'A company’s reputation can affect whether customers are willing to buy from it again.', zh: '一間公司的聲譽會影響顧客是否願意再次購買。' },
            { en: 'It takes a long time to build trust, but one poor response can damage it quickly.', zh: '建立信任需要很長時間，但一次糟糕的回應就可能快速傷害信任。' },
            { en: 'Companies should treat customer feedback as a chance to improve, not just as criticism.', zh: '公司應該把顧客回饋視為改善的機會，而不只是批評。' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'try-it',
      n: 4,
      en: 'Now do it once',
      zh: '現在做一次',
      blocks: [
        {
          t: 'lead',
          en: 'One question, one shape, thirty seconds to plan. The shape matters more than the content today.',
          zh: '一道題、一個架構、三十秒計畫。今天架構比內容重要。',
        },
        {
          t: 'question',
          en: 'Do you think online reviews will become more important in the future?',
          zh: '你認為線上評論在未來會變得更重要嗎？',
          shape: 'Future prediction',
          shapeZh: '預測式回答',
        },
        {
          t: 'pad',
          en: 'Plan the three parts',
          zh: '規劃三個部分',
          hintEn: 'Key words only. Nothing here is saved, and a reload clears it.',
          hintZh: '只寫關鍵字。這裡不會儲存任何內容，重新整理即清空。',
          rows: [
            {
              en: 'Because ________ — your reason for saying yes',
              zh: 'Because ________ — 你說「是」的理由',
              ideas: [
                { en: 'people can compare more opinions than ever before', zh: '人們能比較的意見比以往任何時候都多' },
                { en: 'shopping has moved online, so there is nobody in the shop to ask', zh: '購物已經移到線上，店裡沒有人可以問' },
              ],
            },
            {
              en: 'In the future, people may ________',
              zh: 'In the future, people may ________',
              ideas: [
                { en: 'check reviews before almost every purchase, not just expensive ones', zh: '幾乎每一次購買前都查評論，不只是高價商品' },
                { en: 'trust video reviews more than written ones', zh: '相信影片評論多過文字評論' },
              ],
            },
            {
              en: 'So companies will need to ________',
              zh: 'So companies will need to ________',
              ideas: [
                { en: 'respond to criticism transparently instead of deleting it', zh: '透明地回應批評，而不是刪除它' },
                { en: 'treat feedback as a chance to improve', zh: '把回饋視為改善的機會' },
              ],
            },
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
          instructionEn: 'Answer with the plan in front of you but your eyes off it. Tick a frame when you hear it used.',
          instructionZh: '看著計畫，但別盯著它，直接回答。聽到哪個句型被用上就勾起來。',
          checklist: [
            { en: 'Yes, I think it will become more important because…', zh: '是的，我認為它會變得更重要，因為……' },
            { en: 'In the future, people may…', zh: '未來，人們可能會……' },
            { en: 'So companies will need to…', zh: '所以公司需要……' },
            { en: 'That said, this does not mean…', zh: '話雖如此，這不代表……' },
          ],
        },
      ],
    },
  ],
};

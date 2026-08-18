/* Consumer Behaviour — IELTS Speaking Part 3, adult one-to-one.

   Topic three of four. Teach answer-shapes first.

   The English questions, collocations, sentences and speaking pattern all come
   from the practice material for this course, as does the Chinese for the
   phrase bank. The Chinese for the question bank was written for this page —
   the source gives the questions in English only.
*/

const LESSON = {
  id: 'consumer-behaviour',
  title: 'Consumer Behaviour',
  titleZh: '消費者行為',

  intro: {
    en: 'Ten questions about why people buy what they buy. This is the topic where a candidate can talk about themselves and still be answering a Part 3 question — as long as the personal example arrives after the general point, not instead of it.',
    zh: '十題，談人們為什麼買下他們買的東西。在這個主題裡，考生可以談自己而仍然是在回答 Part 3——前提是個人例子出現在通則之後，而不是取代通則。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'separate practical needs from emotional ones when explaining a purchase', zh: '解釋一筆消費時，能區分實際需求與情感需求' },
      { en: 'talk about discounts and social media as causes, not just topics', zh: '把折扣與社群媒體談成「原因」，而不只是「話題」' },
      { en: 'use a personal example to support a general claim rather than replace it', zh: '用個人例子來支撐通則，而不是拿來取代通則' },
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
          en: 'Half of these name a behaviour and half name a pressure. Answers get better when you pair one with the other.',
          zh: '這些詞一半在指「行為」，一半在指「壓力」。把兩者配成一組來說，回答就會好起來。',
        },
        {
          t: 'bank',
          en: 'Collocations',
          zh: '常用詞組',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'consumer behaviour', zh: '消費者行為' },
            { en: 'buying habits', zh: '購買習慣' },
            { en: 'shopping habits', zh: '購物習慣' },
            { en: 'buying decisions', zh: '購買決定' },
            { en: 'impulse buying', zh: '衝動購物' },
            { en: 'emotional spending', zh: '情緒性消費' },
            { en: 'compare prices', zh: '比較價格' },
            { en: 'compare products', zh: '比較產品' },
            { en: 'product quality', zh: '產品品質' },
            { en: 'brand image', zh: '品牌形象' },
            { en: 'famous brands', zh: '知名品牌' },
            { en: 'luxury brands', zh: '奢侈品牌' },
            { en: 'value for money', zh: 'CP 值 / 物有所值' },
            { en: 'discounts and promotions', zh: '折扣和促銷' },
            { en: 'limited-time offers', zh: '限時優惠' },
            { en: 'social media influence', zh: '社群媒體影響' },
            { en: 'influencer marketing', zh: '網紅行銷' },
            { en: 'peer pressure', zh: '同儕壓力' },
            { en: 'personal preference', zh: '個人偏好' },
            { en: 'practical needs', zh: '實際需求' },
            { en: 'emotional needs', zh: '情感需求' },
            { en: 'too many choices', zh: '太多選擇' },
            { en: 'decision fatigue', zh: '決策疲勞' },
            { en: 'careful consumers', zh: '謹慎的消費者' },
            { en: 'price-sensitive customers', zh: '對價格敏感的顧客' },
            { en: 'make smarter buying decisions', zh: '做出更聰明的購買決定' },
          ],
        },
        {
          t: 'note',
          en: '“Decision fatigue” is worth one whole answer',
          zh: '「decision fatigue」值得撐起一整個回答',
          bodyEn: 'It is the precise term for what the question “Do people today have too many choices?” is fishing for. Naming a phenomenon exactly, once, does more for a score than three sentences circling around it.',
          bodyZh: '「Do people today have too many choices?」這一題想釣的，正是這個精確的說法。準確地把一個現象命名一次，對分數的幫助勝過繞著它講三句話。',
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
            { en: 'Many people compare products carefully before buying because they want to get better value for money.', zh: '很多人在購買前會仔細比較產品，因為他們想要買到更高 CP 值的東西。' },
            { en: 'Social media has a strong influence on consumer behaviour, especially among young people.', zh: '社群媒體對消費者行為有很大的影響，特別是在年輕人之中。' },
            { en: 'People often buy things impulsively when they see discounts or limited-time offers.', zh: '當人們看到折扣或限時優惠時，常常會衝動購物。' },
            { en: 'Famous brands can make customers feel more confident about product quality.', zh: '知名品牌可以讓顧客對產品品質更有信心。' },
            { en: 'Price is important, but it is not always the only factor in buying decisions.', zh: '價格很重要，但它不一定是購買決定中唯一的因素。' },
            { en: 'Some people choose expensive brands because they care about status and image.', zh: '有些人選擇昂貴品牌，是因為他們在意地位和形象。' },
            { en: 'Having too many choices can make shopping more stressful rather than easier.', zh: '選擇太多可能會讓購物更有壓力，而不是更容易。' },
            { en: 'Consumers can make smarter decisions by comparing reviews, prices, and product features.', zh: '消費者可以透過比較評論、價格和產品功能來做出更聰明的決定。' },
            { en: 'Discounts can be helpful, but they may also encourage people to buy things they do not really need.', zh: '折扣可能有幫助，但也可能鼓勵人們購買自己其實不需要的東西。' },
            { en: 'Trust plays an important role because customers are more likely to buy from brands they believe in.', zh: '信任扮演重要角色，因為顧客比較可能向他們信任的品牌購買。' },
          ],
        },
        {
          t: 'model',
          en: 'The balanced shape, worked through',
          zh: '平衡式架構的完整示範',
          hintEn: 'This is one answer to “Has consumer behaviour changed?” — notice that the verdict concedes something.',
          hintZh: '這是「消費者行為改變了嗎？」的一個回答——注意最後的判斷仍然有所讓步。',
          parts: [
            {
              tag: 'The claim', tagZh: '主張',
              en: 'I think consumer behaviour has changed a lot because people now have access to more information online.',
              zh: '我認為消費者行為改變很多，因為現在人們可以在線上取得更多資訊。',
            },
            {
              tag: 'Both hands', tagZh: '正反兩面',
              en: 'On the one hand, this helps people compare products more easily. On the other hand, it can also make decisions more complicated.',
              zh: '一方面，這可以幫助人們更容易比較產品。另一方面，它也可能讓決策變得更複雜。',
            },
            {
              tag: 'Verdict', tagZh: '判斷',
              en: 'So I would say modern consumers are better informed, but they are also more easily influenced by marketing.',
              zh: '所以我會說，現代消費者資訊更充足，但也更容易受到行銷影響。',
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
          en: 'Consumer behaviour',
          zh: '消費者行為',
          hintEn: 'The button never repeats a question until the bank is empty.',
          hintZh: '在題庫抽完之前，按鈕不會重複同一題。',
          items: [
            { en: 'Why do people spend a lot of time comparing products before buying them?', zh: '為什麼人們在購買前會花很多時間比較產品？' },
            { en: 'Do you think people buy things more impulsively nowadays?', zh: '你認為現在的人購物比以前更衝動嗎？' },
            { en: 'How does social media influence people’s buying decisions?', zh: '社群媒體如何影響人們的購買決定？' },
            { en: 'Are people in your country careful consumers?', zh: '你的國家的人算是謹慎的消費者嗎？' },
            { en: 'Do discounts and promotions make people buy things they do not really need?', zh: '折扣和促銷會讓人們買下自己其實不需要的東西嗎？' },
            { en: 'Why do some people prefer famous brands?', zh: '為什麼有些人偏好知名品牌？' },
            { en: 'Is price always the most important factor when people choose a product?', zh: '人們選擇產品時，價格永遠是最重要的因素嗎？' },
            { en: 'How can consumers make smarter buying decisions?', zh: '消費者可以如何做出更聰明的購買決定？' },
            { en: 'Do you think people today have too many choices when shopping?', zh: '你認為現在的人購物時選擇太多了嗎？' },
            { en: 'What role does trust play in consumer decisions?', zh: '信任在消費決策中扮演什麼角色？' },
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
            { en: 'value for money', zh: 'CP 值 / 物有所值' },
            { en: 'impulse buying', zh: '衝動購物' },
            { en: 'decision fatigue', zh: '決策疲勞' },
            { en: 'practical needs and emotional needs', zh: '實際需求與情感需求' },
            { en: 'One major reason is that…, As a result,…', zh: '一個主要原因是……，結果……' },
          ],
        },
      ],
    },
  ],
};

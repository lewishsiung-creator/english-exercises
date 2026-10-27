/* Hometown and Where You Live — IELTS Speaking Part 1, adult one-to-one.

   WRITTEN FOR THIS SITE. The questions are standard Part 1 fare; the model
   answers, the language and all the Chinese are the site's.

   Teach two-sentences-more first; this lesson assumes the shape.

   The first topic of almost every Part 1, which means it is also the most
   memorised thing in the whole test. An examiner has heard several thousand
   hometown answers and can hear a prepared one in about four words. That is
   the problem this lesson is built around.
*/

const LESSON = {
  id: 'hometown',
  title: 'Hometown and Where You Live',
  titleZh: '家鄉與居住地',

  intro: {
    en: 'The question every candidate is asked and every candidate has prepared. The examiner is not interested in how much you can say about your city — they are listening to whether you sound like a person talking or a person reciting.',
    zh: '每個考生都會被問、也都準備過的題目。考官在意的不是你能說出多少關於你的城市的事，而是在聽：你聽起來像一個在說話的人，還是一個在背誦的人。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'answer about where you live without the prepared paragraph', zh: '談你住的地方，而不搬出事先準備好的那一段' },
      { en: 'describe a place through one detail rather than a list', zh: '用一個細節描述一個地方，而不是列清單' },
      { en: 'handle the follow-up questions that break a rehearsed answer', zh: '應付那些會戳破背稿的追問' },
      { en: 'say something mildly negative about your own city, naturally', zh: '自然地說出自己城市的一點不足' },
    ],
  },

  source: {
    en: 'Written for this page. The questions are standard Part 1 material; the answers, the language and the Chinese are the site’s.',
    zh: '本頁為本站自行撰寫。題目為 Part 1 常見題型；答案、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'the-prepared-answer',
      n: 1,
      en: 'The answer everyone has ready',
      zh: '每個人都備好的那個答案',
      blocks: [
        {
          t: 'lead',
          en: 'Almost every candidate walks in with a hometown paragraph. It is usually accurate, usually fluent, and usually the clearest signal in the whole test that the next fourteen minutes may be rehearsed too.',
          zh: '幾乎每個考生都帶著一段「家鄉介紹」走進考場。那段話通常正確、通常流暢，也通常是整場測驗裡最明確的訊號：接下來的十四分鐘可能也是背的。',
        },
        {
          t: 'upgrade',
          en: 'The brochure, and the person',
          zh: '觀光簡介，與真人',
          hintEn: 'Both are true. Only one sounds like someone answering a question.',
          hintZh: '兩段都是真的。但只有一段聽起來像在回答問題。',
          beforeTag: 'The brochure', beforeTagZh: '觀光簡介',
          beforeEn: 'I come from Taichung, which is located in the central part of Taiwan. It has a population of approximately two point eight million people and is famous for its night markets, its pleasant climate and the National Taichung Theater, which attracts many tourists every year.',
          beforeZh: '我來自台中，位於台灣中部。人口約兩百八十萬，以夜市、宜人的氣候，以及每年吸引許多觀光客的臺中國家歌劇院聞名。',
          adds: [
            { en: 'drop the population — nobody asks a friend that', zh: '刪掉人口數——沒有人會這樣問朋友' },
            { en: 'drop “is famous for”; say what YOU use the place for', zh: '刪掉 is famous for；說「你」都拿這個地方做什麼' },
            { en: 'one detail, small enough that you could only know it by living there', zh: '一個細節，小到只有住過的人才會知道' },
          ],
          afterTag: 'The person', afterTagZh: '真人',
          afterEn: 'I live in Taichung, in the middle of the island. It’s big, but it doesn’t really feel like it — I can get to most places I need in about twenty minutes. The weather’s the main thing, honestly. It’s warm nearly all year, so people are outside in the evenings and the whole city feels more relaxed than Taipei does.',
          afterZh: '我住在台中，在台灣中部。它其實很大，但住起來沒有那種感覺——我需要去的地方，大多二十分鐘內就到。老實說，天氣才是重點。這裡幾乎全年溫暖，所以晚上大家都在外面，整座城市感覺比台北放鬆。',
        },
        {
          t: 'note',
          en: 'What changed is not the vocabulary',
          zh: '改變的不是字彙',
          bodyEn: 'The second answer uses simpler words than the first. What it has instead is a point of view — it compares, it says “honestly”, it tells you what the speaker does there. Part 1 is marked on fluency and coherence far more than on range, and a person talking beats a brochure every time.',
          bodyZh: '第二個回答用的字其實比第一個簡單。它多的是「觀點」——它有比較、它說了 honestly、它告訴你說話的人在那裡都做些什麼。Part 1 評的是流暢度與連貫性，遠多於字彙廣度，而「一個在說話的人」永遠勝過一份觀光簡介。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'questions',
      n: 2,
      en: 'The questions, and what they want',
      zh: '題目，以及它們要的東西',
      blocks: [
        {
          t: 'qbank',
          en: 'Twelve questions about where you live',
          zh: '十二道關於居住地的題目',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Where are you from?',
              zh: '你來自哪裡？',
              words: [
                { en: 'I’m from ________, in the ________ of ________', zh: '我來自 ________，在 ________ 的 ________ 部' },
                { en: 'originally from, but I live in', zh: '老家在……，但我現在住在' },
                { en: 'about an hour from', zh: '離……大約一小時' },
              ],
            },
            {
              en: 'Do you like living there?',
              zh: '你喜歡住在那裡嗎？',
              words: [
                { en: 'it suits me', zh: '它滿適合我的' },
                { en: 'I’ve got used to it', zh: '我已經習慣了' },
                { en: 'more than I expected to', zh: '比我原本以為的更喜歡' },
                { en: 'it has its drawbacks', zh: '它也有缺點' },
              ],
            },
            {
              en: 'What do you like most about your hometown?',
              zh: '你最喜歡家鄉的什麼？',
              words: [
                { en: 'the thing I’d miss', zh: '我會懷念的是' },
                { en: 'everything is within reach', zh: '什麼都在可及的範圍內' },
                { en: 'people are easy-going', zh: '這裡的人很隨和' },
                { en: 'it never feels rushed', zh: '這裡從來不會讓人覺得匆忙' },
              ],
            },
            {
              en: 'Is there anything you dislike about it?',
              zh: '有沒有什麼是你不喜歡的？',
              words: [
                { en: 'the traffic, mainly', zh: '主要是交通' },
                { en: 'it’s getting more crowded', zh: '它越來越擁擠了' },
                { en: 'nothing serious, but', zh: '沒什麼嚴重的，不過' },
                { en: 'I wouldn’t say I dislike it, but', zh: '我不會說我討厭它，但是' },
              ],
            },
            {
              en: 'Has your hometown changed much since you were a child?',
              zh: '從你小時候到現在，家鄉變了很多嗎？',
              words: [
                { en: 'it’s changed beyond recognition', zh: '它變得幾乎認不出來了' },
                { en: 'there used to be ________ where ________ is now', zh: '現在是 ________ 的地方，以前是 ________' },
                { en: 'the centre has been redeveloped', zh: '市中心重新開發過' },
                { en: 'some parts haven’t changed at all', zh: '有些地方完全沒變' },
              ],
            },
            {
              en: 'Would you like to live somewhere else in the future?',
              zh: '你將來會想住在別的地方嗎？',
              words: [
                { en: 'I’ve thought about it', zh: '我想過這件事' },
                { en: 'for a few years rather than for good', zh: '住個幾年，而不是定居' },
                { en: 'somewhere smaller / somewhere by the sea', zh: '更小一點的地方／靠海的地方' },
                { en: 'it would depend on work', zh: '那要看工作' },
              ],
            },
            {
              en: 'What kind of housing do most people live in where you are?',
              zh: '你住的地方，多數人住什麼樣的房子？',
              words: [
                { en: 'apartment blocks', zh: '公寓大樓' },
                { en: 'a flat on the ________ floor', zh: '在 ________ 樓的一戶公寓' },
                { en: 'houses are rare in the centre', zh: '市中心很少有透天厝' },
                { en: 'rent rather than buy', zh: '用租的而不是買的' },
              ],
            },
            {
              en: 'Do you prefer living in a city or in the countryside?',
              zh: '你比較喜歡住在城市還是鄉下？',
              words: [
                { en: 'I’ve only ever lived in cities', zh: '我從來只住過城市' },
                { en: 'the pace of life', zh: '生活步調' },
                { en: 'nice to visit, harder to live in', zh: '去玩很好，住下來比較難' },
                { en: 'somewhere in between would suit me', zh: '介於兩者之間最適合我' },
              ],
            },
            {
              en: 'Is your area a good place for children to grow up?',
              zh: '你住的區域適合小孩成長嗎？',
              words: [
                { en: 'parks within walking distance', zh: '走路就到的公園' },
                { en: 'safe enough to let them out', zh: '安全到可以放他們出門' },
                { en: 'the schools are decent', zh: '學校還不錯' },
                { en: 'not much green space', zh: '綠地不多' },
              ],
            },
            {
              en: 'How well do you know your neighbours?',
              zh: '你和鄰居熟嗎？',
              words: [
                { en: 'on nodding terms', zh: '點頭之交' },
                { en: 'we keep to ourselves', zh: '大家各過各的' },
                { en: 'the older residents know everyone', zh: '住得久的長輩誰都認識' },
                { en: 'people move in and out a lot', zh: '人口流動很頻繁' },
              ],
            },
            {
              en: 'Where do people in your city go to relax?',
              zh: '你的城市裡，人們都去哪裡放鬆？',
              words: [
                { en: 'a riverside path', zh: '河濱步道' },
                { en: 'night markets', zh: '夜市' },
                { en: 'nothing elaborate — just ________', zh: '沒什麼特別的——就是 ________' },
                { en: 'it depends on the generation', zh: '要看是哪個世代' },
              ],
            },
            {
              en: 'Would you recommend your hometown to a visitor?',
              zh: '你會向外地人推薦你的家鄉嗎？',
              words: [
                { en: 'depends what they’re after', zh: '要看他們想要什麼' },
                { en: 'not for a first visit to the country', zh: '第一次來這個國家的話，不會推薦' },
                { en: 'worth a couple of days', zh: '值得待個兩天' },
                { en: 'I’d send them to ________ instead', zh: '我會叫他們去 ________ 比較好' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Question 4 is the one that catches people',
          zh: '第 4 題最容易讓人卡住',
          bodyEn: 'Prepared answers are almost always positive, so a question asking what you dislike arrives with nothing ready behind it — and candidates either freeze or insist everything is wonderful, which sounds evasive. Have one mild complaint ready: the traffic, the rent, the summers. Saying something slightly negative about your own city is what a real person does.',
          bodyZh: '準備好的答案幾乎都是正面的，所以當題目問「你不喜歡什麼」時，後面沒有東西頂上——考生不是當場卡住，就是堅稱一切都很美好，而那聽起來像在閃避。請準備一個溫和的抱怨：交通、房租、夏天。能說出自己城市的一點不好，才是真人會做的事。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'practice',
      n: 3,
      en: 'Practice',
      zh: '練習',
      blocks: [
        {
          t: 'bank',
          en: 'Describing a place without listing',
          zh: '不用條列的方式描述一個地方',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'it doesn’t really feel like a big city', zh: '它住起來不太像大城市' },
            { en: 'everything is within reach', zh: '什麼都在可及的範圍內' },
            { en: 'the pace of life', zh: '生活步調' },
            { en: 'it’s changed beyond recognition', zh: '它變得幾乎認不出來了' },
            { en: 'there used to be ________ where ________ is now', zh: '現在是 ________ 的地方，以前是 ________' },
            { en: 'on nodding terms with my neighbours', zh: '和鄰居是點頭之交' },
            { en: 'it has its drawbacks', zh: '它也有缺點' },
            { en: 'nice to visit, harder to live in', zh: '去玩很好，住下來比較難' },
            { en: 'I’d miss ________ if I left', zh: '如果我離開，我會懷念 ________' },
            { en: 'it suits me at the moment', zh: '以現在的我來說它很合適' },
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
          instructionEn: 'Answer four in a row, including question 4. Record it. Listening back, ask one thing: does this sound like a person or a brochure?',
          instructionZh: '連續回答四題，其中必須包含第 4 題。錄下來。回聽時只問一件事：這聽起來像真人，還是像觀光簡介？',
          checklist: [
            { en: 'No population figure, no “is famous for”', zh: '沒有人口數字，沒有 is famous for' },
            { en: 'One detail only a resident would know', zh: '一個只有住戶才知道的細節' },
            { en: 'Something mildly negative, said naturally', zh: '自然地說出一點不足' },
            { en: 'A comparison with somewhere else', zh: '和別的地方做了比較' },
            { en: 'Each answer between fifteen and thirty-five seconds', zh: '每個回答落在十五到三十五秒之間' },
          ],
        },
      ],
    },
  ],
};

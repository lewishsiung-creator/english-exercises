/* Free Time and Hobbies — IELTS Speaking Part 1, adult one-to-one.

   WRITTEN FOR THIS SITE. The questions are standard Part 1 fare; the answers,
   the language and all the Chinese are the site's.

   Teach two-sentences-more first.

   The third Part 1 topic, and the one candidates prepare least because it
   looks the easiest. That is exactly why fluency drops here: there is no
   rehearsed paragraph to fall back on, and an adult with a demanding job often
   genuinely does not have a hobby, which produces a panicked invented one.
   This lesson gives permission not to have one.
*/

const LESSON = {
  id: 'free-time',
  title: 'Free Time and Hobbies',
  titleZh: '休閒與興趣',

  intro: {
    en: 'The topic nobody prepares, because it looks too easy to need it. Then the question arrives, the rehearsed material runs out, and an adult who works fifty hours a week has to invent a hobby on the spot. You do not need one. You need something true and fifteen seconds of detail.',
    zh: '沒有人會準備的主題，因為它看起來簡單到不需要準備。然後題目來了、背好的材料用完了，一個每週工作五十小時的成年人，得當場編出一個興趣。你不需要興趣。你需要的是一件真實的事，加上十五秒的細節。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'answer a hobby question truthfully even if you have no hobby', zh: '即使沒有興趣，也能誠實回答興趣題' },
      { en: 'turn an ordinary activity into fifteen seconds of detail', zh: '把一件平凡的活動講成十五秒的細節' },
      { en: 'talk about how often you do something, with range', zh: '用有變化的說法談「多常做某件事」' },
      { en: 'stay fluent on questions you have not prepared', zh: '在沒準備過的題目上維持流暢' },
    ],
  },

  source: {
    en: 'Written for this page. The questions are standard Part 1 material; the answers, the language and the Chinese are the site’s.',
    zh: '本頁為本站自行撰寫。題目為 Part 1 常見題型；答案、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'no-hobby',
      n: 1,
      en: 'You are allowed not to have a hobby',
      zh: '你可以沒有興趣',
      blocks: [
        {
          t: 'lead',
          en: 'Nothing in the mark scheme rewards having an interesting life. “I don’t really have hobbies — I’ve got two small children” is a perfectly good answer, as long as it does not stop there.',
          zh: '評分標準裡沒有任何一條是獎勵「生活精彩」的。「我其實沒什麼興趣——我有兩個小孩」是完全合格的回答，只要它不是講到那裡就停。',
        },
        {
          t: 'upgrade',
          en: 'The invented hobby, and the true one',
          zh: '編出來的興趣，與真實的那個',
          hintEn: 'The first is what panic produces. The second takes no more words.',
          hintZh: '第一個是慌張之下的產物。第二個其實沒有用到更多字。',
          beforeTag: 'Invented', beforeTagZh: '編出來的',
          beforeEn: 'In my free time I enjoy reading books, listening to music and doing sports. These activities help me relax and reduce stress after a busy day.',
          beforeZh: '空閒時我喜歡看書、聽音樂和運動。這些活動能幫助我在忙碌的一天之後放鬆、減輕壓力。',
          adds: [
            { en: 'one thing instead of three', zh: '講一件事，不要三件' },
            { en: 'when you actually last did it', zh: '你上次真的做是什麼時候' },
            { en: 'a detail that proves it happened', zh: '一個能證明它真的發生過的細節' },
          ],
          afterTag: 'True', afterTagZh: '真實的',
          afterEn: 'Honestly, not much — I’ve got a two-year-old, so most of my free time isn’t really free. The one thing I do keep up is swimming. There’s a pool on my way home from work and I go two evenings a week, mainly because it’s the only half hour where nobody can reach me.',
          afterZh: '老實說不多——我有個兩歲的小孩，所以我大部分的「空閒時間」其實不太空閒。唯一還有維持的是游泳。下班回家路上有個游泳池，我一週去兩個晚上，主要是因為那是唯一半小時沒有人找得到我的時間。',
        },
        {
          t: 'note',
          en: 'Three nouns is the tell',
          zh: '三個名詞就是破綻',
          bodyEn: '“Reading, music and sports” is the most common sentence in IELTS Part 1 and it says nothing — it is three categories, not three activities. One real thing with a time, a place and a reason beats a list every time, and it is also far easier to keep talking about when the follow-up arrives.',
          bodyZh: '「閱讀、音樂和運動」是 IELTS Part 1 裡最常見的一句話，而它什麼也沒說——那是三個「類別」，不是三件「事」。一件真實的事，加上時間、地點和理由，永遠勝過一份清單；而且當追問來的時候，它也容易接下去得多。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'questions',
      n: 2,
      en: 'The questions',
      zh: '題目',
      blocks: [
        {
          t: 'qbank',
          en: 'Twelve questions about free time',
          zh: '十二道關於空閒時間的題目',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'What do you usually do in your free time?',
              zh: '你空閒時通常做什麼？',
              words: [
                { en: 'honestly, not much', zh: '老實說，沒做什麼' },
                { en: 'the one thing I do keep up is ________', zh: '我唯一還有維持的是 ________' },
                { en: 'it depends how tired I am', zh: '要看我有多累' },
                { en: 'nothing very exciting', zh: '沒什麼特別精彩的' },
              ],
            },
            {
              en: 'Do you have much free time during the week?',
              zh: '你平日有很多空閒時間嗎？',
              words: [
                { en: 'not during the week, no', zh: '平日沒有' },
                { en: 'an hour or so in the evening', zh: '晚上大概一小時左右' },
                { en: 'it all happens at the weekend', zh: '都集中在週末' },
                { en: 'more than I used to have', zh: '比以前多' },
              ],
            },
            {
              en: 'How did you become interested in it?',
              zh: '你是怎麼開始對它有興趣的？',
              words: [
                { en: 'a friend dragged me along', zh: '朋友把我拖去的' },
                { en: 'I picked it up during ________', zh: '我是在 ________ 期間開始的' },
                { en: 'I’ve done it since I was a child', zh: '我從小就在做' },
                { en: 'completely by accident', zh: '完全是意外' },
              ],
            },
            {
              en: 'Do you prefer doing things alone or with other people?',
              zh: '你比較喜歡自己做事還是和別人一起？',
              words: [
                { en: 'on my own, mostly', zh: '多半是自己一個人' },
                { en: 'it’s the only time I’m not talking to anyone', zh: '那是我唯一不用跟任何人說話的時間' },
                { en: 'more likely to actually go if someone’s waiting', zh: '有人在等的話，比較不會放自己鴿子' },
                { en: 'depends on the activity', zh: '要看是什麼活動' },
              ],
            },
            {
              en: 'Is there a new hobby you would like to try?',
              zh: '有沒有什麼新的興趣是你想嘗試的？',
              words: [
                { en: 'I’ve been meaning to try ________', zh: '我一直想試試 ________' },
                { en: 'it’s more a question of time than interest', zh: '問題在時間，不在興趣' },
                { en: 'I keep saying I’ll ________', zh: '我一直說我要 ________' },
                { en: 'probably something outdoors', zh: '大概是戶外的活動' },
              ],
            },
            {
              en: 'Did you have more free time when you were younger?',
              zh: '你年輕的時候空閒時間比較多嗎？',
              words: [
                { en: 'far more, and I wasted it', zh: '多太多了，而且我浪費掉了' },
                { en: 'I didn’t appreciate it at the time', zh: '當時並不懂得珍惜' },
                { en: 'different kind of free time', zh: '是不同種類的空閒' },
                { en: 'the hours were the same, the obligations weren’t', zh: '時數一樣，但責任不一樣' },
              ],
            },
            {
              en: 'Do you think it is important to have a hobby?',
              zh: '你認為有興趣嗜好重要嗎？',
              words: [
                { en: 'something that isn’t work and isn’t family', zh: '一件不是工作、也不是家庭的事' },
                { en: 'it doesn’t have to be impressive', zh: '它不必多了不起' },
                { en: 'people need something to be bad at', zh: '人需要一件自己做不好的事' },
                { en: 'it matters more as you get older', zh: '年紀越大越重要' },
              ],
            },
            {
              en: 'How do people in your country usually spend their free time?',
              zh: '你的國家的人通常怎麼過空閒時間？',
              words: [
                { en: 'it varies a lot by generation', zh: '不同世代差異很大' },
                { en: 'eating out is the main one', zh: '最主要的是外食' },
                { en: 'a lot of it happens on a phone', zh: '很大一部分發生在手機上' },
                { en: 'families go out together at weekends', zh: '週末全家一起出門' },
              ],
            },
            {
              en: 'Do you prefer indoor or outdoor activities?',
              zh: '你比較喜歡室內還是戶外活動？',
              words: [
                { en: 'outdoors, weather permitting', zh: '戶外，前提是天氣允許' },
                { en: 'the weather makes that decision for me', zh: '天氣會替我決定' },
                { en: 'I get restless indoors', zh: '我待在室內會坐不住' },
                { en: 'in summer it’s too hot to be outside', zh: '夏天太熱，沒辦法待在戶外' },
              ],
            },
            {
              en: 'How often do you do sport or exercise?',
              zh: '你多常運動？',
              words: [
                { en: 'two evenings a week', zh: '一週兩個晚上' },
                { en: 'less than I should', zh: '比我應該做的少' },
                { en: 'it comes and goes', zh: '時有時無' },
                { en: 'I walk a lot, if that counts', zh: '我走很多路，如果那算的話' },
              ],
            },
            {
              en: 'Do you like watching films or TV series?',
              zh: '你喜歡看電影或影集嗎？',
              words: [
                { en: 'series more than films', zh: '影集多過電影' },
                { en: 'I rarely get through a whole film', zh: '我很少能把一部電影看完' },
                { en: 'it’s what I do when I can’t face anything else', zh: '那是我什麼都不想做的時候會做的事' },
                { en: 'I’m always a year behind everyone', zh: '我永遠比別人晚一年' },
              ],
            },
            {
              en: 'What would you do with an extra day off?',
              zh: '如果多出一天假，你會做什麼？',
              words: [
                { en: 'nothing organised', zh: '不做任何安排' },
                { en: 'catch up on sleep, honestly', zh: '老實說，把覺補回來' },
                { en: 'get out of the city', zh: '離開這個城市' },
                { en: 'the boring answer is ________', zh: '無聊的答案是 ________' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Frequency is free marks',
          zh: '頻率是白送的分數',
          bodyEn: 'Half of these questions can take a frequency phrase, and most candidates own exactly two: “sometimes” and “usually”. “Two evenings a week”, “it comes and goes”, “less than I should”, “whenever I get the chance” — four of those used naturally across a Part 1 is visible range, and they are easy to remember because they are short.',
          bodyZh: '這些題目有一半都用得上頻率說法，而多數考生只擁有兩個：sometimes 和 usually。「一週兩個晚上」「時有時無」「比我應該做的少」「一有機會就」——在一次 Part 1 裡自然地用上四個，就是看得見的語言廣度，而且它們都很短、很好記。',
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
          en: 'How often, how much',
          zh: '多常、多少',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'two evenings a week', zh: '一週兩個晚上' },
            { en: 'every couple of weeks', zh: '每隔兩週左右' },
            { en: 'whenever I get the chance', zh: '一有機會就' },
            { en: 'less than I should', zh: '比我應該做的少' },
            { en: 'it comes and goes', zh: '時有時無' },
            { en: 'hardly ever, these days', zh: '最近幾乎沒有' },
            { en: 'more at weekends than during the week', zh: '週末比平日多' },
            { en: 'on and off for years', zh: '斷斷續續好幾年' },
            { en: 'not as often as I used to', zh: '沒有以前那麼常' },
            { en: 'most Saturday mornings', zh: '多數週六早上' },
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
          instructionEn: 'Answer five in a row, with no preparation at all — this is the topic you have to be fluent on cold. Record it and listen back for hesitation, not for content.',
          instructionZh: '連續回答五題，完全不做準備——這就是你必須「冷著也流暢」的主題。錄下來，回聽時聽的是停頓，不是內容。',
          checklist: [
            { en: 'You never said “reading, music and sports”', zh: '你沒有說「閱讀、音樂和運動」' },
            { en: 'One activity, with a time and a place', zh: '一件活動，有時間也有地點' },
            { en: 'Two different frequency phrases', zh: '用了兩個不同的頻率說法' },
            { en: 'Nothing invented — all of it was true', zh: '沒有編造——全部都是真的' },
            { en: 'No long pause before any answer started', zh: '每個回答開始前都沒有長時間停頓' },
          ],
        },
      ],
    },
  ],
};

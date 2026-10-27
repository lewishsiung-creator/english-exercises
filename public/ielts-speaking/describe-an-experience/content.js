/* Describe an Experience — IELTS Speaking Part 2, adult one-to-one.

   WRITTEN FOR THIS SITE. The cards, the model answer, the language and all the
   Chinese are the site's.

   Teach the-one-minute-plan first.

   This is the card type that pays for grammar. Every other task in this course
   can be answered in the present simple; a story cannot. Grammatical Range and
   Accuracy is a quarter of the band and the course had barely touched it —
   this lesson is where it gets touched, because narrative tenses only sound
   natural inside an actual narrative.
*/

const LESSON = {
  id: 'describe-an-experience',
  title: 'Describe an Experience',
  titleZh: '描述一段經驗',

  intro: {
    en: 'The only card that is a story, which makes it the only one where grammar earns you marks directly. A story has a before, a middle and an after, and English marks those with different tenses. Get them right and a quarter of your band looks after itself.',
    zh: '唯一一張「要講故事」的卡片，也因此是唯一一張文法能直接替你拿分的卡片。故事有「之前」「中間」「之後」，而英文用不同的時態標示這三者。把它們用對，你總分的四分之一就自己顧好了。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'tell a two-minute story with a middle, not just an ending', zh: '講一個有中段的兩分鐘故事，而不是只有結尾' },
      { en: 'use the past continuous to set a scene', zh: '用過去進行式鋪陳場景' },
      { en: 'use the past perfect for what happened before', zh: '用過去完成式交代更早發生的事' },
      { en: 'mark the turn in a story out loud', zh: '把故事的轉折點說出口' },
    ],
  },

  source: {
    en: 'Written for this page. The cards, the answer, the language and the Chinese are the site’s.',
    zh: '本頁為本站自行撰寫。卡片、答案、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'three-tenses',
      n: 1,
      en: 'Three tenses, three jobs',
      zh: '三個時態，三個任務',
      blocks: [
        {
          t: 'lead',
          en: 'A candidate who tells the whole story in the past simple is understood perfectly and marked down, because the examiner has no evidence of range. Three tenses do almost all of it, and each one has a job you can hear.',
          zh: '整個故事都用過去簡單式的考生，別人完全聽得懂，但分數會被扣——因為考官看不到任何「廣度」的證據。三個時態幾乎就能處理完一切，而每一個的任務你都聽得出來。',
        },
        {
          t: 'shapes',
          en: 'The three tenses',
          zh: '三個時態',
          hintEn: 'Tap the card to see each tense and what it is for.',
          hintZh: '點卡片可看每個時態，以及它的用途。',
          items: [
            {
              tag: '3',
              name: 'Setting, action, backstory',
              nameZh: '場景、動作、前情',
              whenEn: 'Any card that asks you to describe a time something happened.',
              whenZh: '任何要你描述「某次發生的事」的卡片。',
              buckets: [
                { en: 'Past continuous — the scene', zh: '過去進行式——場景' },
                { en: 'Past simple — what happened', zh: '過去簡單式——發生了什麼' },
                { en: 'Past perfect — what came before', zh: '過去完成式——更早之前' },
              ],
              lines: [
                { en: 'I was waiting at the station when ________.', zh: '我當時正在車站等車，然後 ________。' },
                { en: 'So I went over and asked her.', zh: '所以我就走過去問她。' },
                { en: 'I hadn’t realised she’d already left.', zh: '我當時沒意識到她已經離開了。' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'The past continuous is the cheapest mark in the test',
          zh: '過去進行式是整場測驗最便宜的分數',
          bodyEn: 'One sentence of it at the start of the story — “I was living in Taipei at the time”, “we were waiting for the bus” — sets the scene, sounds completely natural, and is logged by the examiner as range. It takes four words and almost nobody does it, because candidates begin stories with the event rather than the situation around it.',
          bodyZh: '故事開頭放一句就好——「我當時住在台北」「我們當時在等公車」——既鋪陳了場景、聽起來完全自然，也會被考官記成「廣度」。它只要四個字，而幾乎沒有人會用，因為考生開場講的都是「事件」，而不是事件周圍的「狀況」。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'worked',
      n: 2,
      en: 'A story with the tenses marked',
      zh: '一個標出時態的故事',
      blocks: [
        {
          t: 'cue',
          en: 'Describe a time when you helped someone.',
          zh: '描述一次你幫助別人的經驗。',
          bullets: [
            { en: 'who you helped', zh: '你幫助的是誰' },
            { en: 'when and where it happened', zh: '事情發生的時間和地點' },
            { en: 'what you did', zh: '你做了什麼' },
          ],
          closeEn: 'and explain how you felt about it afterwards.',
          closeZh: '並說明事後你的感受。',
        },
        {
          t: 'model',
          en: 'The answer, part by part',
          zh: '範例答案，逐段拆解',
          hintEn: 'Each part is tagged with the tense doing the work. Plan your own first.',
          hintZh: '每一段都標出了負責的時態。請先自己規劃一次。',
          parts: [
            {
              tag: 'Scene · past continuous', tagZh: '場景 · 過去進行式',
              en: 'This was about two years ago. I was working in an office near the station at the time, and I used to take the same train home every evening, usually around seven.',
              zh: '這大概是兩年前的事。我當時在車站附近的一間辦公室上班，每天傍晚都搭同一班火車回家，通常是七點左右。',
            },
            {
              tag: 'The turn · past simple', tagZh: '轉折 · 過去簡單式',
              en: 'One night I noticed an elderly man on the platform who looked completely lost. He was holding a ticket and turning it over and over, and people were walking straight past him.',
              zh: '有天晚上，我注意到月台上有位老先生，看起來完全搞不清楚狀況。他手裡拿著票，翻來覆去地看，而人們就這樣從他旁邊走過去。',
            },
            {
              tag: 'Backstory · past perfect', tagZh: '前情 · 過去完成式',
              en: 'It turned out he’d got on the wrong line somewhere in the city centre, and he’d been going back and forth for nearly an hour. He hadn’t asked anyone because he didn’t want to be a nuisance.',
              zh: '原來他在市中心某一站上錯了線，已經來來回回將近一個小時。他沒有問任何人，因為他不想給人添麻煩。',
            },
            {
              tag: 'What I did · past simple', tagZh: '我做了什麼 · 過去簡單式',
              en: 'So I walked him over to the right platform and waited with him until his train came. It only took about fifteen minutes, and we talked about where he was going — his daughter had just had a baby.',
              zh: '所以我帶他走到正確的月台，陪他等到車來。前後只花了大約十五分鐘，我們聊了他要去哪裡——他女兒剛生了小孩。',
            },
            {
              tag: 'Afterwards · how you felt', tagZh: '事後 · 感受',
              en: 'Afterwards I felt slightly ashamed, to be honest, rather than pleased with myself. I’d walked past that platform hundreds of times and I’ve no idea how many people I’d gone straight past before. It was fifteen minutes. That’s the bit that stayed with me.',
              zh: '老實說，事後我感覺到的比較像一點羞愧，而不是自我滿足。那個月台我走過幾百次，我根本不知道自己之前擦身而過多少人。那不過十五分鐘。真正留在我心裡的是這一點。',
            },
          ],
        },
        {
          t: 'note',
          en: 'The feeling at the end should not be “happy”',
          zh: '結尾的感受，不要是「開心」',
          bodyEn: '“I felt very happy and proud” is what almost every candidate says, and it ends the answer flat. A complicated feeling — slightly ashamed, more relieved than anything, oddly flat afterwards — is both more interesting and more true, and it gives you two more sentences to explain, which is exactly where the time goes.',
          bodyZh: '「我覺得很開心、很自豪」是幾乎每個考生都會說的話，而它讓回答平淡地結束。一個複雜的感受——有點羞愧、與其說高興不如說鬆了一口氣、事後反而有點空——既比較有意思也比較真實，而且還讓你多出兩句話去解釋，而時間正好花在那裡。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'the-language',
      n: 3,
      en: 'Marking the turn',
      zh: '標出轉折',
      blocks: [
        {
          t: 'lead',
          en: 'A story without a turn is a sequence of events. One phrase in the middle is what makes it a story, and the examiner hears the difference immediately.',
          zh: '沒有轉折的故事，只是一串事件。中間的那一句話，才讓它變成故事——而考官立刻就聽得出差別。',
        },
        {
          t: 'frames',
          en: 'Turning the story',
          zh: '故事的轉折',
          hintEn: 'Tap 🔊 to hear one. Use one, not four.',
          hintZh: '點 🔊 可聽一次。用一個就好，不要用四個。',
          items: [
            { en: 'One night I noticed ________.', zh: '有天晚上，我注意到 ________。' },
            { en: 'And then, completely out of the blue, ________.', zh: '然後，完全出乎意料地，________。' },
            { en: 'It turned out that ________.', zh: '結果原來是 ________。' },
            { en: 'That was when I realised ________.', zh: '就在那時我才意識到 ________。' },
            { en: 'What I hadn’t expected was ________.', zh: '我沒料到的是 ________。' },
            { en: 'Anyway, to cut a long story short, ________.', zh: '總之，長話短說，________。' },
          ],
        },
        {
          t: 'bank',
          en: 'Placing a story in time',
          zh: '把故事放進時間裡',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'this was about two years ago', zh: '這大概是兩年前的事' },
            { en: 'at the time I was ________', zh: '我當時 ________' },
            { en: 'I used to ________ every ________', zh: '我以前每 ________ 都會 ________' },
            { en: 'I’d been ________ for about an hour', zh: '我已經 ________ 大約一個小時了' },
            { en: 'I hadn’t realised ________', zh: '我當時沒意識到 ________' },
            { en: 'by the time ________, ________', zh: '等到 ________ 的時候，________' },
            { en: 'afterwards, I felt ________', zh: '事後，我覺得 ________' },
            { en: 'looking back on it now', zh: '現在回頭看' },
            { en: 'that’s the bit that stayed with me', zh: '真正留在我心裡的是那一點' },
            { en: 'I still think about it occasionally', zh: '我偶爾還是會想起這件事' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'practice',
      n: 4,
      en: 'Practice',
      zh: '練習',
      blocks: [
        {
          t: 'cue',
          en: 'Describe a time when something did not go as you planned.',
          zh: '描述一次事情沒有照你計畫進行的經驗。',
          bullets: [
            { en: 'what you had planned', zh: '你原本計畫了什麼' },
            { en: 'what actually happened', zh: '實際上發生了什麼' },
            { en: 'what you did about it', zh: '你如何處理' },
          ],
          closeEn: 'and explain what you learned from it.',
          closeZh: '並說明你從中學到了什麼。',
        },
        {
          t: 'note',
          en: 'This card hands you the past perfect',
          zh: '這張卡片直接把過去完成式送到你手上',
          bodyEn: '“What you had planned” is already in it — the bullet is written in the past perfect, so the first thing you say can be too: *I’d booked the tickets about a month before.* A card that gives you the tense is a card to practise on.',
          bodyZh: '「你原本計畫了什麼」本身就在裡面了——那一行提示就是用過去完成式寫的，所以你開口的第一句也可以是：*I’d booked the tickets about a month before.* 一張把時態送給你的卡片，就是最值得拿來練的卡片。',
        },
        {
          t: 'clock',
          en: 'The real thing',
          zh: '完整實戰',
        },
        {
          t: 'task',
          en: 'Say it',
          zh: '說出來',
          instructionEn: 'One minute to plan, then speak until you are stopped. Record it, and listen back for the tenses rather than the story.',
          instructionZh: '一分鐘規劃，然後一直說到被喊停。錄下來，回聽時聽的是時態，不是故事。',
          checklist: [
            { en: 'A past continuous sentence in the first fifteen seconds', zh: '前十五秒內有一句過去進行式' },
            { en: 'At least one past perfect', zh: '至少用了一次過去完成式' },
            { en: 'One phrase that marked the turn', zh: '有一句話標出了轉折' },
            { en: 'The story had a middle, not just an ending', zh: '故事有中段，不是只有結尾' },
            { en: 'The feeling at the end was not simply “happy”', zh: '結尾的感受不只是「開心」' },
          ],
        },
      ],
    },
  ],
};

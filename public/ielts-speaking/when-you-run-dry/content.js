/* When You Run Dry at Ninety Seconds — IELTS Speaking Part 2, adult.

   WRITTEN FOR THIS SITE. The cards, the language and all the Chinese are the
   site's.

   Teach the-one-minute-plan and at least one card lesson first; this one is
   the repair kit, and a repair kit is no use to someone who has not yet tried
   to build anything.

   Part 2 is the only task in the test with a fixed floor you can fall through.
   Everywhere else, running out means a short answer; here it means silence
   while the examiner watches a clock that still has thirty seconds on it. The
   four moves below are what you reach for when the bullets are finished.
*/

const LESSON = {
  id: 'when-you-run-dry',
  title: 'When You Run Dry at Ninety Seconds',
  titleZh: '講到九十秒沒話說',

  intro: {
    en: 'The bullets are finished, you have said everything you planned, and the examiner has not stopped you. This is the only moment in the test where silence is the real risk — and it is entirely fixable, because there are four places more speech can always come from.',
    zh: '提示都講完了，計畫好的東西也說光了，而考官還沒喊停。這是整場測驗裡唯一「沉默」會真正造成傷害的時刻——而它完全有解，因為永遠有四個地方可以再挖出內容。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'keep going for another thirty seconds from a standing start', zh: '在已經沒話的情況下，再撐三十秒' },
      { en: 'reach for a contrast, a time, a person or a reason', zh: '伸手去拿：對比、時間、人物、理由' },
      { en: 'buy two seconds without saying “um”', zh: '不靠「嗯……」也能爭取兩秒' },
      { en: 'end deliberately if you are genuinely finished', zh: '如果真的講完了，也能有意識地收尾' },
    ],
  },

  source: {
    en: 'Written for this page. The cards, the language and the Chinese are the site’s.',
    zh: '本頁為本站自行撰寫。卡片、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'four-places',
      n: 1,
      en: 'Four places more speech comes from',
      zh: '四個可以再挖出內容的地方',
      blocks: [
        {
          t: 'lead',
          en: 'None of these needs new material. Each one takes something you have already said and turns it over, which is why they work when your head is empty.',
          zh: '這四個都不需要新材料。每一個都是把你已經說過的東西翻過來看，所以就算腦中空白，它們照樣有用。',
        },
        {
          t: 'shapes',
          en: 'The four moves',
          zh: '四個動作',
          hintEn: 'Tap the card to see each one and how it starts.',
          hintZh: '點卡片可看每一個動作，以及它的開頭方式。',
          items: [
            {
              tag: '4',
              name: 'Contrast, time, person, reason',
              nameZh: '對比、時間、人物、理由',
              whenEn: 'Use one when the bullets are done and the clock is not.',
              whenZh: '當提示講完、時間還沒到時，用其中一個。',
              buckets: [
                { en: 'Contrast — what it is not', zh: '對比——它「不是」什麼' },
                { en: 'Time — how it used to be', zh: '時間——它以前是什麼樣子' },
                { en: 'Person — who else is in it', zh: '人物——裡面還有誰' },
                { en: 'Reason — why that matters to you', zh: '理由——為什麼那對你重要' },
              ],
              lines: [
                { en: 'It’s not like ________, though — with ________ you’d ________.', zh: '不過它不像 ________——如果是 ________，你會 ________。' },
                { en: 'It didn’t use to be like that, actually.', zh: '其實它以前不是這樣的。' },
                { en: 'My brother goes there too, and he ________.', zh: '我弟也會去那裡，而他 ________。' },
                { en: 'I suppose the reason that matters to me is ________.', zh: '我想它對我重要的原因是 ________。' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Contrast is the strongest of the four',
          zh: '四個之中，對比最強',
          bodyEn: 'Saying what something is *not* like generates comparison grammar — more than, unlike, whereas, you’d expect — and comparison is marked under range. It also almost always produces a second sentence without being asked, because once you have named the other thing you have to say something about it.',
          bodyZh: '說出某樣東西「不像」什麼，會自然產生比較的文法——more than、unlike、whereas、you’d expect——而比較會被記在「廣度」那一欄。它也幾乎總是會自己再生出第二句話，因為一旦你提到了「另一個東西」，你就得說點關於它的事。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'in-action',
      n: 2,
      en: 'The same answer, extended four ways',
      zh: '同一個回答，四種延伸方式',
      blocks: [
        {
          t: 'cue',
          en: 'Describe something you own that is important to you.',
          zh: '描述一件你擁有、對你很重要的東西。',
          bullets: [
            { en: 'what it is', zh: '那是什麼' },
            { en: 'how long you have had it', zh: '你擁有它多久了' },
            { en: 'where you got it', zh: '你從哪裡得到它的' },
          ],
          closeEn: 'and explain why it is important to you.',
          closeZh: '並說明它為什麼對你重要。',
        },
        {
          t: 'model',
          en: 'Where you run out, and four ways on',
          zh: '你會卡住的地方，以及四條出路',
          hintEn: 'The first part is the answer finishing early. Each part after it is one of the four moves.',
          hintZh: '第一段是提早講完的回答。後面每一段都是四個動作之一。',
          parts: [
            {
              tag: 'Finished at 1:05', tagZh: '一分零五秒就講完了',
              en: 'The thing I’d choose is a watch my father gave me. I’ve had it about fifteen years — he gave it to me when I started my first job. It’s nothing valuable, it’s just an ordinary steel watch, but I wear it most days. It’s important to me because it was from him.',
              zh: '我會選我父親給我的一支錶。我有它大概十五年了——我開始第一份工作時他給我的。它不值錢，就是一支普通的鋼錶，但我幾乎每天都戴。它對我重要，是因為那是他給的。',
            },
            {
              tag: 'Contrast', tagZh: '對比',
              en: 'It’s not a sentimental object in the way photographs are, though. With a photograph you sit down and look at it; this is just on my wrist, so I don’t think about it at all for weeks at a time.',
              zh: '不過它不像照片那種帶著感情的物件。照片是你坐下來、好好看著它；這支錶就在我手腕上，所以我可能連續好幾週根本沒想起它。',
            },
            {
              tag: 'Time', tagZh: '時間',
              en: 'It didn’t use to mean much to me, actually. For the first few years it was just a watch — I’d have swapped it for a better one quite happily. That changed after he got ill.',
              zh: '其實它以前對我沒什麼意義。最初那幾年它就只是一支錶——有更好的我大概會很樂意換掉。那是在他生病之後才改變的。',
            },
            {
              tag: 'Person', tagZh: '人物',
              en: 'My brother got one at the same time, the same model. His stopped working years ago and he never got it repaired, which I think says something about both of us.',
              zh: '我弟當時也拿到一支，同一個型號。他那支幾年前就壞了，而他一直沒拿去修——我覺得這件事多少說明了我們兩個人。',
            },
            {
              tag: 'Reason', tagZh: '理由',
              en: 'I suppose what matters about it isn’t the watch. It’s that he gave it to me for starting work, which was his way of saying something he’d never have said out loud.',
              zh: '我想，重要的其實不是那支錶。而是他在我開始工作時把它給我——那是他說出某句他永遠不會真的講出口的話的方式。',
            },
          ],
        },
        {
          t: 'note',
          en: 'You only need one of them',
          zh: '你只需要其中一個',
          bodyEn: 'All four are shown so you can see the shape. In the exam, one will take you from 1:05 to about 1:40, which is enough — the examiner will stop you. Reaching for all four in sequence sounds like padding, which is its own problem.',
          bodyZh: '這裡四個都列出來，是為了讓你看清楚結構。在考場上，用一個就能把你從一分零五秒撐到大約一分四十，這就夠了——考官會喊停。四個依序全部用上，聽起來就是在灌水，那又是另一個問題了。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'buying-time',
      n: 3,
      en: 'Buying two seconds, and stopping well',
      zh: '爭取兩秒，以及好好收尾',
      blocks: [
        {
          t: 'frames',
          en: 'Two seconds, without “um”',
          zh: '不說「嗯……」也能爭取兩秒',
          hintEn: 'These are not filler — they are what fluent speakers actually say while thinking.',
          hintZh: '這些不是廢話填充，而是母語者在思考時真的會說的話。',
          items: [
            { en: 'I suppose the other thing is ________.', zh: '我想另一件事是 ________。' },
            { en: 'What else can I say about it — ________.', zh: '還能說什麼呢——________。' },
            { en: 'Thinking about it, ________.', zh: '這麼一想，________。' },
            { en: 'It’s hard to explain, but ________.', zh: '有點難解釋，不過 ________。' },
            { en: 'I’m not sure I’ve put that very well. What I mean is ________.', zh: '我好像沒講清楚。我的意思是 ________。' },
          ],
        },
        {
          t: 'frames',
          en: 'Ending on purpose',
          zh: '有意識地收尾',
          hintEn: 'If you genuinely have nothing left, finish — do not trail off into silence.',
          hintZh: '如果真的沒東西了，就收尾——不要逐漸消音變成沉默。',
          items: [
            { en: 'So yes — that’s the one I’d choose.', zh: '所以沒錯——我會選的就是那個。' },
            { en: 'That’s about it, really.', zh: '大概就是這樣了。' },
            { en: 'So that’s why it matters to me.', zh: '所以那就是它對我重要的原因。' },
          ],
        },
        {
          t: 'note',
          en: 'A deliberate ending costs you nothing',
          zh: '有意識地收尾，不會讓你損失什麼',
          bodyEn: 'Candidates believe stopping before being stopped is a failure, so they trail off instead, which is worse — a sentence that fades out reads as having run out of English rather than out of things to say. If you are genuinely done at 1:40, end cleanly. You have given the examiner plenty.',
          bodyZh: '考生以為「在被喊停之前就停」是失敗，所以改成讓聲音慢慢消失，而那更糟——逐漸消音的句子，聽起來像是「英文用完了」，而不是「話講完了」。如果你在一分四十真的講完了，就乾淨地收尾。你給考官的語料已經夠多了。',
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
          t: 'lead',
          en: 'This drill is deliberately unfair: a card with only two bullets, so you will run out early and have to use a move.',
          zh: '這個練習刻意設計得不公平：卡片只有兩個提示，所以你一定會提早講完，非用一個動作不可。',
        },
        {
          t: 'cue',
          en: 'Describe a small thing that improved your day recently.',
          zh: '描述最近一件讓你一天變好的小事。',
          bullets: [
            { en: 'what it was', zh: '那是什麼' },
            { en: 'when it happened', zh: '它發生在什麼時候' },
          ],
          closeEn: 'and explain why such a small thing made a difference.',
          closeZh: '並說明為什麼這麼小的一件事會造成差別。',
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
          instructionEn: 'Speak until you are stopped — do not stop yourself before 1:30. Record it and listen back for the moment you ran out and what you did next.',
          instructionZh: '一直說到被喊停——一分半之前不要自己停。錄下來回聽：找出你卡住的那一刻，以及你接下來做了什麼。',
          checklist: [
            { en: 'You used at least one of the four moves', zh: '你用了四個動作中至少一個' },
            { en: 'You got past 1:30', zh: '你撐過了一分半' },
            { en: 'No silence longer than about two seconds', zh: '沒有超過兩秒左右的沉默' },
            { en: 'You bought time with a phrase, not with “um”', zh: '你用句子爭取時間，而不是用「嗯……」' },
            { en: 'If you finished, you finished on purpose', zh: '如果你講完了，那是有意識地收尾' },
          ],
        },
      ],
    },
  ],
};

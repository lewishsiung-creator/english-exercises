/* The One-Minute Plan — IELTS Speaking Part 2, adult one-to-one.

   The habit lesson for Part 2, and the one to teach before the three card
   lessons. Everything in them assumes the minute is already being used well.

   WRITTEN FOR THIS SITE. The cue card, the plan, the model answer and all the
   Chinese are the site's.

   This is the first lesson in the course to use the `cue` block, and the first
   to put a timeline on the planning clock rather than the speaking one — the
   minute counts DOWN from 1:00 while the timeline is laid out 0:00 to 1:00, so
   render.js inverts it before lighting a row.
*/

const LESSON = {
  id: 'the-one-minute-plan',
  title: 'The One-Minute Plan',
  titleZh: '一分鐘的計畫',

  intro: {
    en: 'Part 2 gives you something no other part of the test does: a minute, a pencil and a piece of paper. Most candidates spend it writing sentences they will never read. What that minute is actually for is deciding four things, and it is enough time for all four.',
    zh: 'Part 2 給了你測驗中其他部分都沒有的東西：一分鐘、一支鉛筆、一張紙。多數考生把它拿來寫自己永遠不會再看的句子。那一分鐘真正的用途，是決定四件事——而一分鐘，剛好夠決定這四件。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'use the whole minute instead of freezing for the first twenty seconds', zh: '把整分鐘用完，而不是前二十秒呆住' },
      { en: 'write key words only, never sentences', zh: '只寫關鍵字，絕不寫句子' },
      { en: 'choose your ending before you start speaking', zh: '開口前就先決定好結尾' },
      { en: 'begin the moment the examiner says start', zh: '考官說開始的那一刻就能開口' },
    ],
  },

  source: {
    en: 'Written for this page. The card, the plan, the model answer and the Chinese are the site’s.',
    zh: '本頁為本站自行撰寫。卡片、計畫、範例答案與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'the-card',
      n: 1,
      en: 'What the card actually asks',
      zh: '卡片真正要求的事',
      blocks: [
        {
          t: 'lead',
          en: 'Read the bullets as a running order, not as four separate questions. They are written to be answered in sequence, and the last one — the “and explain” line — is always the one worth the most time.',
          zh: '把提示當成「講述順序」，不是四個獨立問題。它們本來就是設計成依序回答的，而最後那一行「and explain…」永遠是最值得花時間的。',
        },
        {
          t: 'cue',
          en: 'Describe a place you often go to relax.',
          zh: '描述一個你常去放鬆的地方。',
          bullets: [
            { en: 'where it is', zh: '它在哪裡' },
            { en: 'how often you go there', zh: '你多常去' },
            { en: 'what you do there', zh: '你在那裡做什麼' },
          ],
          closeEn: 'and explain why you find it relaxing.',
          closeZh: '並說明你為什麼覺得那裡讓人放鬆。',
        },
        {
          t: 'note',
          en: 'The first three bullets are worth about forty seconds together',
          zh: '前三個提示加起來大約只值四十秒',
          bodyEn: 'Where, how often and what are facts — they are quick, and a candidate who spends a minute on them has nothing left for the part that is actually being marked. The “and explain” line is where opinion, reasons and interesting language live. Plan it first, even though you say it last.',
          bodyZh: '地點、頻率、做什麼，都是事實——講起來很快；把一分鐘花在這上面的考生，真正被評分的部分就沒東西了。「and explain」那一行，才是意見、理由與漂亮語言所在的地方。即使它最後才說，也要最先規劃。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'the-minute',
      n: 2,
      en: 'Where the minute goes',
      zh: '這一分鐘怎麼分配',
      blocks: [
        {
          t: 'lead',
          en: 'Four decisions, in this order. Start the planning clock below and the row you should be on lights up.',
          zh: '四個決定，照這個順序。啟動下方的計畫計時，你當下該做的那一列就會亮起來。',
        },
        {
          t: 'timeline',
          for: 'plan',
          en: 'The planning minute',
          zh: '準備的一分鐘',
          hintEn: 'This one follows the countdown, not the speaking clock.',
          hintZh: '這條時間軸跟的是倒數計時，不是開口計時。',
          rows: [
            {
              from: 0, to: 10,
              en: 'Choose. Do not choose well.', zh: '選定。不必選得好。',
              sayEn: 'The first thing that comes to mind, as long as you have more than one sentence about it.',
              sayZh: '腦中第一個冒出來的東西就好，只要你對它說得出超過一句話。',
            },
            {
              from: 10, to: 25,
              en: 'Why — plan the ending first', zh: '原因——先想好結尾',
              sayEn: 'Two words for the “and explain” line. This is the part that is marked, so it gets planned first.',
              sayZh: '替「and explain」那一行寫下兩個字。這部分是被評分的，所以要最先規劃。',
            },
            {
              from: 25, to: 45,
              en: 'Key words for the bullets', zh: '各提示的關鍵字',
              sayEn: 'Two or three words per bullet. Nouns and verbs. Never a sentence.',
              sayZh: '每個提示寫兩三個字。名詞和動詞。絕不要寫句子。',
            },
            {
              from: 45, to: 60,
              en: 'One detail, and your first sentence', zh: '一個細節，以及你的第一句話',
              sayEn: 'A number, a name or a moment — then decide the exact words you will open with.',
              sayZh: '一個數字、一個名字，或一個時刻——然後決定你開口的第一句要說什麼。',
            },
          ],
        },
        {
          t: 'clock',
          en: 'Watch the minute go',
          zh: '看著這一分鐘走完',
          /* This clock is here, and not only in step 3, because the timeline
             above is driven by it — syncTimeline is scoped to the step, so a
             timeline in one step and a clock in another never meet. */
          planNoteEn: 'start this and follow the rows above',
          planNoteZh: '啟動它，跟著上面的列走',
        },
        {
          t: 'note',
          en: 'Never write sentences',
          zh: '絕對不要寫句子',
          bodyEn: 'A written sentence gets read aloud, and a sentence read aloud sounds exactly like what it is. It also costs about fifteen seconds to write and gives you one sentence of material. Key words cost two seconds each and leave you speaking rather than reciting — which is the difference between a 6 and a 7 on this task.',
          bodyZh: '寫下來的句子會被唸出來，而被唸出來的句子，聽起來就是「被唸出來的句子」。它還要花掉大約十五秒，而你只換到一句話的材料。關鍵字一個只要兩秒，而且讓你是在「說」而不是在「唸」——這正是這個題型 6 分和 7 分的差別。',
        },
        {
          t: 'note',
          en: 'Choose fast, and do not change your mind',
          zh: '快點選定，而且不要反悔',
          bodyEn: 'The commonest way to lose Part 2 is to spend thirty seconds looking for the perfect example and then start planning with half a minute left. Any topic works if you have something to say about it. A boring choice planned properly beats an interesting one planned in twenty seconds.',
          bodyZh: 'Part 2 最常見的失分方式，是花三十秒尋找「完美的例子」，然後只剩半分鐘才開始規劃。只要你說得出東西，任何題材都行。一個規劃完整的無聊選擇，勝過一個只規劃了二十秒的有趣選擇。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'do-it',
      n: 3,
      en: 'Do it once',
      zh: '做一次',
      blocks: [
        {
          t: 'pad',
          en: 'The pad, as it should look after sixty seconds',
          zh: '六十秒後，你的紙上該長這樣',
          hintEn: 'Key words only. Nothing here is saved, and a reload clears it.',
          hintZh: '只寫關鍵字。這裡不會儲存任何內容，重新整理即清空。',
          rows: [
            {
              en: 'Why — the ending (plan this first)',
              zh: '原因——結尾（最先想）',
              ideas: [
                { en: 'nobody can reach me there', zh: '在那裡沒有人找得到我' },
                { en: 'only place I stop thinking about work', zh: '唯一能停止想工作的地方' },
              ],
            },
            {
              en: 'Where · how often · what you do',
              zh: '地點 · 頻率 · 做什麼',
              ideas: [
                { en: 'river path / twice a week / walk, no phone', zh: '河濱步道／一週兩次／散步，不帶手機' },
                { en: 'rooftop / Sunday mornings / coffee, read', zh: '頂樓／週日早上／喝咖啡、看書' },
              ],
            },
            {
              en: 'One detail — a number, a name, a moment',
              zh: '一個細節——數字、名字或時刻',
              ideas: [
                { en: 'about forty minutes, from the bridge to the park', zh: '大約四十分鐘，從橋走到公園' },
                { en: 'the woman who feeds the cats at seven', zh: '每天七點餵貓的那位太太' },
              ],
            },
          ],
        },
        {
          t: 'clock',
          en: 'The real thing',
          zh: '完整實戰',
          planNoteEn: 'one minute, then the pencil goes down',
          planNoteZh: '一分鐘，時間到就放下筆',
        },
        {
          t: 'model',
          en: 'What that plan turns into',
          zh: '那份計畫會變成什麼',
          hintEn: 'Open this after you have spoken, not before. Notice how short the first three parts are.',
          hintZh: '請在你說完之後再打開，不要提前。注意前三個部分有多短。',
          parts: [
            {
              tag: 'Where', tagZh: '地點',
              en: 'The place I go to relax is a river path about ten minutes from my flat. It runs from a bridge near the station out to a park on the edge of the city.',
              zh: '我放鬆會去的地方，是離我家大約十分鐘路程的一條河濱步道。它從車站附近的一座橋，一路通到城市邊緣的一座公園。',
            },
            {
              tag: 'How often', tagZh: '頻率',
              en: 'I go about twice a week, usually in the evening after work, and most Saturday mornings if the weather’s all right.',
              zh: '我大概一週去兩次，通常是下班後的晚上；天氣還可以的話，多數週六早上也會去。',
            },
            {
              tag: 'What I do', tagZh: '做什麼',
              en: 'I don’t do anything much — I just walk. It takes about forty minutes from the bridge to the park. I don’t take my phone, which is the whole point really.',
              zh: '我其實沒做什麼——就是走路。從橋走到公園大概四十分鐘。我不帶手機，而這其實才是重點。',
            },
            {
              tag: 'And explain why', tagZh: '並說明原因',
              en: 'What makes it relaxing isn’t the river, honestly — it’s that it’s the only half hour in my week when nobody can reach me. At work I’m interrupted constantly, and at home there’s always something that needs doing. On that path there’s nothing I could be doing instead, so my head goes quiet. By the time I get to the park I’ve usually stopped thinking about work altogether, and that doesn’t happen anywhere else.',
              zh: '老實說，讓人放鬆的不是那條河——而是那是我一週裡唯一半小時沒有人找得到我的時間。在公司我不斷被打斷，在家裡永遠有事情等著處理。在那條步道上，我沒有別的事「本來可以在做」，所以腦袋就安靜下來了。等我走到公園，通常已經完全不再想工作的事，而這件事在別的地方不會發生。',
            },
          ],
        },
        {
          t: 'task',
          en: 'Say it',
          zh: '說出來',
          instructionEn: 'Take the full minute, then speak until you are stopped. Record it and listen back.',
          instructionZh: '把整分鐘用完，然後一直說到被喊停。錄下來回聽。',
          checklist: [
            { en: 'You wrote key words, not one full sentence', zh: '你寫的是關鍵字，沒有寫出任何完整句子' },
            { en: 'You planned the “and explain” line first', zh: '你最先規劃的是「and explain」那一行' },
            { en: 'You started speaking immediately', zh: '你立刻就開口了' },
            { en: 'The first three bullets took under a minute between them', zh: '前三個提示加起來不到一分鐘' },
            { en: 'You were still talking when the time ran out', zh: '時間到的時候你還在說' },
          ],
        },
      ],
    },
  ],
};

/* Aaron — a running notebook of one-to-one sessions.

   Unlike most pages in this repo, this one is not a lesson. It is a notebook
   that grows: every discussion adds one entry to `sessions` below and nothing
   else changes. No new files, no new folder, no renderer edit. It is the same
   machinery as /anny/, with the same rules.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n`, `date` and the titles,
   and rewrite the blocks. Put it at the BOTTOM of the array — the page is
   chronological, oldest first, and opens with the newest session expanded and
   the earlier ones folded away. The contents list, the numbering and the
   anchors all come from the array, so there is nothing else to keep in step.

   `id` must be unique and URL-safe: it becomes the anchor, so
   /aaron/#s2 opens session 2 with the rest folded.

   THE CHINESE LAYER
   -----------------
   Every visible English string has a Traditional Chinese counterpart. English
   is what shows; the Chinese waits behind a small 中 chip, or the 中文 switch
   in the top bar opens the lot. Instructions, task prompts, the contents list
   and anything already behind a deliberate reveal stay bilingual — those are
   scaffolding, not comprehension practice.

   A gap-fill translation is a COMPLETE Chinese sentence — the blank is filled
   in, and only the English keeps its ___. That is the notebook convention and
   it differs from the other pages in this repo, which leave ＿＿ in the Chinese
   so it cannot hand over the answer. Here the page is teacher-led and nothing
   is scored, so the Chinese is there to make the situation clear rather than to
   be a second puzzle — and it is still one tap away rather than on screen.

   Matching halves and answer chips stay in English; each is glossed on its own
   phrase card anyway.

   BLOCK TYPES
   -----------
     lead      a framing sentence in italics, opening a session
     link      a pointer to another page in this site
     quote     a short quote, with attribution
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one idea in more depth
     contrast  two columns compared. The tags default to "As it landed" / "As
               it could land"; set coldEn/coldZh and warmEn/warmZh for any other
               pairing — an instinct against a reframe, a habit against its
               replacement
     phrases   phrase cards — English face up, Chinese and an example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     fix       something Aaron actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task with a tick-list of target phrases

   `fix` is the one block the other pages here do not have, and it is the reason
   a per-student notebook is worth keeping: it holds Aaron's own sentences,
   corrected. Session 1 does not use it — the source for that lesson was a
   cleaned write-up of the discussion, with no reliable record of the exact
   wording either speaker used. Put real sentences in as they come up; do not
   reconstruct them from memory, or the most trustworthy part of the page
   becomes the least.

   SAMPLE BANNER
   -------------
   Setting `sample` puts a line across the top saying the content is a
   placeholder — on screen and in print, so a draft cannot be handed over by
   accident. Session 1 is real, so it is off.
*/

const NOTEBOOK = {
  student: 'Aaron',
  title: 'Aaron’s English Notebook',
  titleZh: 'Aaron 的英文筆記',
  kicker: '商業英語討論課 · 課堂筆記',

  intro: {
    en: 'This page is where our sessions are kept. Everything we work through together stays here, so you can come back to it between lessons — the language, the ideas, and the sentences worth keeping.',
    zh: '這一頁是我們課程的紀錄。每次上課討論過的內容都會留在這裡，方便你在課與課之間回來複習——包括語言、觀念，以及值得留下來的句子。',
    goalsEn: 'How to use it',
    goalsZh: '使用方式',
    goals: [
      {
        en: 'Tap any English line to see the Chinese. The 中文 switch at the top opens all of them at once.',
        zh: '點任何一句英文就會出現中文。上方的「中文」按鈕可以一次全部打開。',
      },
      {
        en: 'Tap 🔊 to hear a phrase or sentence read aloud, as many times as you like.',
        zh: '點 🔊 可以聽片語或句子的發音，想聽幾次都可以。',
      },
      {
        en: 'Nothing is saved and nothing is scored. Reloading the page clears it for a fresh run.',
        zh: '這裡不會儲存也不會計分。重新整理頁面就會清空，可以重新練一次。',
      },
      {
        en: 'The newest session is open; earlier ones are folded. Tap a session heading to open or close it.',
        zh: '最新的一堂課是展開的，之前的則收合起來。點課程標題就能展開或收合。',
      },
    ],
  },

  sessions: [
    {
      id: 's1',
      n: 1,
      date: '2026-08-17',
      dateEn: '17 August 2026',
      dateZh: '2026 年 8 月 17 日',
      en: 'Designing a life, not maximising output',
      zh: '設計人生，而不是把產出最大化',

      focus: [
        { en: 'Retire Often', zh: '常常退休' },
        { en: 'Rest as strategy', zh: '休息即策略' },
        { en: 'Sleep and training', zh: '睡眠與訓練' },
        { en: 'Side projects', zh: '無關收入的副業' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'One hour that started with a book about retirement and ended somewhere unexpected: sleep, training loads and a 4:15 a.m. alarm. The through-line turned out to be the same in every part of it.',
          zh: '這一個小時從一本談退休的書開始，卻走到了意想不到的地方：睡眠、訓練量，還有清晨四點十五分的鬧鐘。結果每一段談的其實都是同一件事。',
        },

        {
          t: 'summary',
          en: 'Retirement, careers, sleep, exercise and side projects all came back to one question: how should we design a life, rather than simply maximise our output? In every one of those areas the instinct is the same — do more — and in every one of them the instinct turns out to be an unreliable guide.',
          zh: '退休、職涯、睡眠、運動、副業，最後都回到同一個問題：我們該如何「設計」人生，而不只是把產出最大化？在這每一個領域裡，直覺都是同一句話——做更多——而在每一個領域裡，這個直覺都不是可靠的指引。',
        },

        {
          t: 'note',
          en: 'Retire Often — the argument',
          zh: '《Retire Often》的主張',
          bodyEn: 'The conventional model says retirement comes after twenty-five or thirty years of work, once the career is finished and the money is in place. The problem is what that model does to everything you wanted to do: it postpones all of it to a stage of life when your health, energy or circumstances may no longer allow it. The book proposes taking deliberate breaks throughout a career instead — four to six weeks every couple of years — and using them to travel, train, learn or simply live differently for a while. The point is not the holiday. It is that the break is where you find out what kind of life you actually want.',
          bodyZh: '傳統模型認為，退休發生在工作二十五到三十年之後、職涯結束、錢也準備好了的時候。問題在於這個模型對你想做的事做了什麼：它把那些事全部延到一個你的健康、體力或處境可能已經不允許的人生階段。這本書主張的是，在職涯進行中就刻意安排休息——每兩年四到六週——用這段時間去旅行、訓練、學習，或就只是換一種方式生活一陣子。重點不在假期本身，而在於：休息是你弄清楚自己真正想要什麼樣人生的地方。',
        },

        {
          t: 'contrast',
          en: 'The instinct, and the reframe',
          zh: '直覺的做法，與重新框定',
          coldEn: 'The instinct',
          coldZh: '直覺的做法',
          warmEn: 'The reframe',
          warmZh: '重新框定的說法',
          hintEn: 'Three places in the conversation where the same move happened. Both columns are good English — read them both aloud.',
          hintZh: '這段討論中出現過三次同樣的轉折。左右兩欄都是道地的英文，兩邊都請唸出聲。',
          items: [
            {
              caseEn: 'Taking time off in the middle of a career',
              caseZh: '在職涯中途放長假',
              cold: {
                en: 'If I stop now, someone else will get ahead of me. I should not take that much time off.',
                zh: '如果我現在停下來，別人就會超前我。我不應該休那麼久的假。',
              },
              warm: {
                en: 'No serious athlete says “I don’t need to rest, I just need to keep going.” Rest is part of performance, so I schedule recovery the way they do.',
                zh: '沒有一個認真的運動員會說「我不需要休息，我只要一直做下去就好」。休息是表現的一部分，所以我像他們一樣，把恢復排進行程裡。',
              },
              whyEn: 'The reframe borrows an authority the listener already accepts. Nobody argues with an athlete about rest days; the same claim about a career sounds like an excuse until it is put in that frame.',
              whyZh: '這個重新框定借用了聽者原本就接受的權威。沒有人會跟運動員爭論該不該有休息日；同樣一句話放在職涯上，如果不換這個框架，聽起來就只像藉口。',
            },
            {
              caseEn: 'How effort is judged at work',
              caseZh: '職場上如何評斷努力',
              cold: {
                en: 'I need to do more. I want people to see how hard I am working.',
                zh: '我需要做更多。我希望別人看得到我有多努力。',
              },
              warm: {
                en: 'Being productive is not the same as looking productive. I would rather be judged on what actually got finished.',
                zh: '有生產力跟看起來有生產力，是兩回事。我寧願用實際完成了什麼來被評斷。',
              },
              whyEn: 'A production-line mentality ties output to visible hours, so busyness reads as value. Naming the two things separately is what makes the difference arguable at all.',
              whyZh: '生產線式的思維把產出綁在「看得見的工時」上，於是「忙」就被讀成「有價值」。把這兩件事分開來命名，這個差別才有討論的餘地。',
            },
            {
              caseEn: 'Where personal time sits in the day',
              caseZh: '個人時間放在一天的哪個位置',
              cold: {
                en: 'My time is after nine at night, once everything else is finished — though by then I am too tired to use it well.',
                zh: '我的時間是晚上九點以後，等其他事都做完——雖然到那個時候，我已經累到沒辦法好好運用它。',
              },
              warm: {
                en: 'I did not lose my time. I moved it to a higher-quality part of the day: half past four to half past six in the morning.',
                zh: '我沒有失去我的時間。我把它搬到了一天當中品質更好的時段：早上四點半到六點半。',
              },
              whyEn: 'The quantity did not change — two hours either way. What changed is the state you are in while you spend them, which is the whole argument of the session in miniature.',
              whyZh: '份量沒有改變，兩邊都是兩小時。改變的是你花掉這兩小時時所處的狀態——這正是整堂課的論點的縮影。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Work, rest and the shape of a career',
          zh: '工作、休息，與職涯的形狀',
          items: [
            {
              en: 'take intentional breaks',
              zh: '刻意安排休息',
              eg: 'Instead of saving it all for the end, he takes intentional breaks every couple of years.',
              egZh: '他沒有把休息全部留到最後，而是每隔幾年就刻意安排一次。',
            },
            {
              en: 'postpone something until…',
              zh: '把某件事延到……',
              eg: 'The risk is that you postpone everything meaningful until a stage of life when you cannot enjoy it.',
              egZh: '風險在於，你把所有有意義的事都延到一個你已經享受不了的人生階段。',
            },
            {
              en: 'step away from work',
              zh: '暫時離開工作',
              eg: 'Stepping away from work for six weeks turned out to be easier to arrange than he expected.',
              egZh: '暫時離開工作六週，安排起來比他原本想的容易。',
            },
            {
              en: 'rest is part of performance',
              zh: '休息是表現的一部分',
              eg: 'Athletes treat rest as part of performance; most professionals do not.',
              egZh: '運動員把休息當成表現的一部分，多數上班族並不會。',
            },
            {
              en: 'get ahead of someone',
              zh: '超前某人',
              eg: 'The fear is that if you slow down, other people will get ahead of you.',
              egZh: '那份恐懼是：如果你慢下來，別人就會超前你。',
            },
            {
              en: 'look productive',
              zh: '看起來很有生產力',
              eg: 'Some colleagues looked productive all day without finishing very much.',
              egZh: '有些同事一整天看起來都很有生產力，卻沒完成多少事。',
            },
            {
              en: 'a production-line mentality',
              zh: '生產線式思維',
              eg: 'A production-line mentality measures hours at the desk rather than results.',
              egZh: '生產線式思維衡量的是坐在位子上的時數，而不是成果。',
            },
            {
              en: 'work-life design',
              zh: '工作與生活的設計',
              eg: 'After his son was born, work-life design stopped being an abstract idea.',
              egZh: '兒子出生之後，「工作與生活的設計」就不再是一個抽象的概念了。',
            },
            {
              en: 'maintain your state',
              zh: '維持你的狀態',
              eg: 'An athlete competing at ninety per cent does not lose ten per cent of one game — they lose repeatedly, so maintaining your state matters more than any single effort.',
              egZh: '一個只有九成狀態的運動員，失去的不是「一場比賽的一成」——他會一輸再輸，所以維持狀態比任何單次的努力都重要。',
            },
            {
              en: 'a prerequisite for',
              zh: '……的前提',
              eg: 'Rest is not the opposite of productivity; it is a prerequisite for sustaining it.',
              egZh: '休息不是生產力的反面，而是持續維持生產力的前提。',
            },
            {
              en: 'a lifestyle experiment',
              zh: '生活型態實驗',
              eg: 'A week alone in Okinawa is a small lifestyle experiment rather than a holiday.',
              egZh: '一個人在沖繩待一週，與其說是度假，不如說是一次小型的生活型態實驗。',
            },
            {
              en: 'financially independent',
              zh: '財務獨立',
              eg: 'She and her husband became financially independent at about thirty-three.',
              egZh: '她和她先生在大約三十三歲時達到財務獨立。',
            },
          ],
        },

        {
          t: 'note',
          en: 'The paradox in his first job',
          zh: '第一份工作裡的那個弔詭',
          bodyEn: 'In a trading company working with American customers, emails and faxes arrived after about eight in the evening Taiwan time, so everyone stayed until nine. He worked fast and got things done — and discovered the paradox: the faster you work, the more work you receive. Then he noticed that his sales manager was still there at nine too. That was the question that started everything else: if the job I am working towards still ends at nine at night, what exactly am I working towards? The word solopreneur did not exist yet, but the goal already did — more control over how work fits into a life.',
          bodyZh: '在一家跟美國客戶往來的貿易公司裡，郵件和傳真大約台灣時間晚上八點以後才會進來，所以大家都待到九點。他做事很快、東西都做完了——然後發現了那個弔詭：你做得越快，接到的工作就越多。接著他注意到，他的業務主管九點也還在。那個問題就是後來一切的起點：如果我努力想爬到的那個位置，一樣要做到晚上九點，那我到底在努力什麼？當時還沒有 solopreneur 這個詞，但那個目標已經成形了——對「工作如何嵌進生活」有更多的掌控權。',
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的立場是什麼？',
          hintEn: 'There is no right answer — take a side and say why.',
          hintZh: '沒有標準答案：選一邊，並說明理由。',
          items: [
            { en: 'Rest is not the opposite of productivity.', zh: '休息不是生產力的反面。' },
            { en: 'A company could safely put a book like Retire Often in its training programme.', zh: '一家公司可以放心把《Retire Often》這樣的書放進員工訓練裡。' },
            { en: 'Taking six weeks off mid-career would damage my position at work.', zh: '在職涯中途休六週假，會傷害我在公司的位置。' },
            { en: 'A side project is only worth doing if it leads somewhere.', zh: '副業只有在能帶來某種結果時才值得做。' },
          ],
        },

        {
          t: 'discuss',
          en: 'Questions from the session',
          zh: '課堂上談到的問題',
          items: [
            {
              en: 'Do you have a side project that has nothing to do with making money or improving your career?',
              zh: '你有沒有一個跟賺錢或職涯發展完全無關的個人專案？',
              starters: [
                { en: 'The one I keep coming back to is…', zh: '我一直回去做的那一個是……' },
                { en: 'I have wanted to do it for years, but I never had the time to…', zh: '我想做很多年了，但一直沒有時間去……' },
                { en: 'It is easier now that…', zh: '現在比較容易了，因為……' },
              ],
            },
            {
              en: 'If you could take four to six weeks away from work, what would you actually test — not what would you enjoy, but what would you want to find out?',
              zh: '如果你可以離開工作四到六週，你真正想「測試」的是什麼？不是你會喜歡什麼，而是你想弄清楚什麼？',
              starters: [
                { en: 'What I would want to find out is whether…', zh: '我會想弄清楚的是，究竟……' },
                { en: 'A week would be enough to test…', zh: '一週就足以測試……' },
                { en: 'The part I cannot test from here is…', zh: '在現在的位置上我測不出來的，是……' },
              ],
            },
            {
              en: 'Instead of “how can we make employees work more?”, could a company ask “how can we design an environment where good people perform and still have control over their lives?” Would that work where you are?',
              zh: '與其問「我們怎麼讓員工多做一點？」，公司能不能改問「我們怎麼設計一個環境，讓優秀的人做得出成績，同時保有對自己生活的掌控？」在你的環境裡行得通嗎？',
              starters: [
                { en: 'In my industry the honest answer is…', zh: '在我的產業裡，誠實的答案是……' },
                { en: 'It would work for…, but not for…', zh: '這對……行得通，但對……不行。' },
                { en: 'The thing that would have to change first is…', zh: '必須先改變的是……' },
              ],
            },
            {
              en: 'The closing question of the session: what state allows you to do your best work and live the life you actually want?',
              zh: '這堂課最後的問題：什麼樣的狀態，能讓你做出最好的工作，同時過上你真正想要的生活？',
              starters: [
                { en: 'I do my best work when…', zh: '我在……的時候做得最好。' },
                { en: 'The first thing that goes when I am tired is…', zh: '我一累，最先垮掉的是……' },
                { en: 'The one habit that protects that state is…', zh: '守住那個狀態的那個習慣，是……' },
              ],
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Training and recovery',
          zh: '訓練與恢復',
          items: [
            {
              en: 'training load',
              zh: '訓練量',
              eg: 'Doing weights and an incline treadmill in the same session may simply be too much training load.',
              egZh: '在同一次健身裡既做重訓又做斜坡跑步機，訓練量可能單純就是太大了。',
            },
            {
              en: 'central nervous system fatigue',
              zh: '中樞神經疲勞',
              eg: 'Both resistance and cardio work draw on the same system, so central nervous system fatigue builds up across the week.',
              egZh: '重訓和有氧都會用到同一套系統，所以中樞神經疲勞會在一週之中累積起來。',
            },
            {
              en: 'a deload week',
              zh: '減量週',
              eg: 'After three or four hard weeks, a deload week keeps the training going at a lighter load.',
              egZh: '在三、四週的紮實訓練之後，用一個減量週以較輕的負荷把訓練維持下去。',
            },
            {
              en: 'stay in Zone 2',
              zh: '維持在心率第二區',
              eg: 'The treadmill sessions are meant to stay in Zone 2 — harder cardio is not automatically better cardio.',
              egZh: '跑步機的課表本來就設定維持在心率第二區；有氧做得越硬，並不會自動就越好。',
            },
            {
              en: 'separate the sessions',
              zh: '把兩次訓練分開',
              eg: 'If both have to happen on one day, separate the sessions by several hours.',
              egZh: '如果兩種訓練非得排在同一天，就把它們隔開幾個小時。',
            },
            {
              en: 'cognitively demanding work',
              zh: '需要高度動腦的工作',
              eg: 'After two hours in the gym he finds cognitively demanding work almost impossible.',
              egZh: '在健身房待了兩小時之後，他發現需要高度動腦的工作幾乎做不下去。',
            },
            {
              en: 'sleep quality',
              zh: '睡眠品質',
              eg: 'Training hard has not improved his sleep quality, so he is now experimenting with light and noise instead.',
              egZh: '練得很兇並沒有改善他的睡眠品質，所以他現在改從光線和噪音下手實驗。',
            },
            {
              en: 'maximum effort is not always optimal effort',
              zh: '最大努力不等於最佳努力',
              eg: 'At work and at the gym, maximum effort is not always optimal effort.',
              egZh: '不論在職場還是在健身房，最大努力都不等於最佳努力。',
            },
          ],
        },

        {
          t: 'note',
          en: 'What was said about AMPK and mTOR',
          zh: '課堂上對 AMPK 與 mTOR 的說法',
          bodyEn: 'The conversation used two names as shorthand: AMPK for the energy-regulation and fat-oxidation side of things, and mTOR for the muscle-building side — and suggested that if cardio and weights both have to happen on one day, leaving several hours between them is worth trying, say the treadmill at six or seven in the morning and the weights around midday. Recorded here as it was said in class: the physiology was not checked against a source afterwards, so treat it as the shape of an idea to look into rather than as settled fact.',
          bodyZh: '討論中用了兩個名詞當作簡稱：AMPK 對應能量調節與脂肪氧化那一側，mTOR 對應肌肉合成那一側；並提到如果有氧和重訓非得排在同一天，把兩者隔開幾個小時值得一試，例如早上六、七點跑步機，中午前後重訓。這裡是照課堂上的說法記下來的：後來並沒有對照文獻查證，所以請把它當成一個值得再去查的方向，而不是已成定論的事實。',
        },

        {
          t: 'match',
          en: 'Match the phrase',
          zh: '配對片語',
          hintEn: 'Click the Chinese on the left, then its English partner on the right.',
          hintZh: '先點左邊的中文，再點右邊對應的英文。',
          pairs: [
            { a: '刻意安排休息', b: 'take intentional breaks' },
            { a: '暫時離開工作', b: 'step away from work' },
            { a: '看起來很有生產力', b: 'look productive' },
            { a: '……的前提', b: 'a prerequisite for' },
            { a: '維持你的狀態', b: 'maintain your state' },
            { a: '訓練量', b: 'training load' },
            { a: '減量週', b: 'a deload week' },
            { a: '財務獨立', b: 'financially independent' },
          ],
        },

        {
          t: 'gap',
          en: 'Finish the sentence',
          zh: '完成句子',
          items: [
            {
              text: 'The book’s argument is that you should not ___ everything meaningful until the end of your career.',
              textZh: '這本書的主張是：你不應該把所有有意義的事都延到職涯的最後。',
              options: ['postpone', 'maintain', 'separate'],
              answer: 0,
              why: {
                en: '“Postpone something until…” is the fixed pattern for pushing a thing back to a later time. The other two are in this session’s vocabulary but do not take a time phrase like this.',
                zh: 'postpone something until… 是「把某件事往後推到某個時間」的固定用法。另外兩個雖然也是這堂課的字，但不會這樣接時間。',
              },
            },
            {
              text: 'Athletes take it for granted that ___ — most professionals still treat it as time lost.',
              textZh: '運動員理所當然地認為休息是表現的一部分，多數上班族卻仍把休息當成損失掉的時間。',
              options: ['rest is part of performance', 'maximum effort is optimal effort', 'the training load is too high'],
              answer: 0,
              why: {
                en: 'The contrast in the second half — “most professionals treat it as time lost” — only works if the first half says rest counts for something.',
                zh: '後半句「多數上班族卻把它當成損失掉的時間」形成對比，所以前半句必須是「休息是有價值的」才說得通。',
              },
            },
            {
              text: 'A ___ measures how many hours you are visible at your desk rather than what you actually finished.',
              textZh: '生產線式思維衡量的是你在座位上被看見多少小時，而不是你實際完成了什麼。',
              options: ['lifestyle experiment', 'production-line mentality', 'deload week'],
              answer: 1,
              why: {
                en: 'The industrial image is the point: on a line, visible activity really is output. In an office it is only a proxy — and a poor one.',
                zh: '重點在那個工業時代的意象：在生產線上，看得見的動作確實就是產出；在辦公室裡，它只是一個代理指標，而且是個很差的代理指標。',
              },
            },
            {
              text: 'A week alone in Okinawa is less a holiday than a ___ — a way of finding out what that life would actually feel like.',
              textZh: '一個人在沖繩待一週，與其說是度假，不如說是一次生活型態實驗——一種去弄清楚那樣的生活實際感覺如何的方法。',
              options: ['lifestyle experiment', 'work-life design', 'central nervous system fatigue'],
              answer: 0,
              why: {
                en: 'The dash explains the phrase that comes before it, and “a way of finding out” is what makes it an experiment rather than a plan.',
                zh: '破折號是在解釋前面那個片語，而「一種去弄清楚……的方法」正是讓它成為「實驗」而不是「計畫」的原因。',
              },
            },
            {
              text: 'After three or four hard weeks, a ___ keeps you in the gym while the load comes down.',
              textZh: '在三、四週的紮實訓練之後，一個減量週能讓你繼續進健身房，同時把負荷降下來。',
              options: ['deload week', 'time-out', 'recovery day'],
              answer: 0,
              why: {
                en: '“Deload” is the training word for planned lighter weeks. A time-out is a pause inside a game, and a recovery day is a single day off — neither is a planned reduction in load.',
                zh: 'deload 是訓練上「有計畫地降低負荷幾週」的專門用語。time-out 是比賽中的暫停，recovery day 是單獨一天的休息，兩者都不是「有計畫地降量」。',
              },
            },
            {
              text: 'At work and at the gym the instinct is the same — do more — but ___.',
              textZh: '在職場和在健身房，直覺是一樣的：做更多。但最大努力不等於最佳努力。',
              options: ['maximum effort is not always optimal effort', 'rest is the opposite of productivity', 'busyness is the same as effectiveness'],
              answer: 0,
              why: {
                en: '“But” has to reverse what came before it. The other two options agree with “do more” instead of contradicting it.',
                zh: 'but 後面必須推翻前面的說法。另外兩個選項是在附和「做更多」，而不是反駁它。',
              },
            },
          ],
        },

        {
          t: 'link',
          href: '../book-club/#ladder',
          en: 'The book behind today’s homework',
          zh: '今天作業出處的那本書',
          noteEn: 'The homework question comes from The Wealth Ladder in the book discussion guide — Nick Maggiulli’s argument that your financial strategy should match your wealth level rather than your income. The guide has the full summary and the vocabulary that goes with it.',
          noteZh: '作業的問題出自讀書討論手冊裡的《財富階梯》——Nick Maggiulli 主張，你的理財策略應該對應你的淨資產水準，而不是你的收入。手冊裡有完整書介與相關詞彙。',
        },

        {
          t: 'task',
          en: 'Homework: your financial habits',
          zh: '作業：你的金錢習慣',
          instructionEn: 'Maggiulli argues that your financial strategy should match your current wealth level, not your income. Do your money habits reflect where you actually are, or where you wish you were? Write one to three sentences using the frames below and send them on LINE — we will go over them next time.',
          instructionZh: 'Maggiulli 認為，你的理財策略應該對應你目前的淨資產水準，而不是你的收入。你的金錢習慣反映的是你真實的財務狀況，還是你希望自己所在的位置？請用下面的句型寫一到三句，用 LINE 傳給我，下次一起檢討。',
          prompts: [
            { en: 'Answer it about your own money habits.', zh: '就你自己的金錢習慣回答。' },
            { en: 'Or answer it about your time instead of your money — the same question works.', zh: '或者把「錢」換成「時間」來回答——同一個問題一樣成立。' },
          ],
          frames: [
            { en: 'If I am honest, my habits are set for ___.', zh: '老實說，我的習慣是照著＿＿設定的。' },
            { en: 'The gap between the two shows up most in ___.', zh: '這兩者的落差，最明顯地表現在＿＿。' },
            { en: 'One habit I have kept for far too long is ___.', zh: '有一個習慣我留了太久，就是＿＿。' },
          ],
        },
      ],
    },
  ],
};

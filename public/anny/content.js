/* Anny — a running notebook of one-to-one sessions.

   Unlike the other pages in this repo, this one is not a lesson. It is a
   notebook that grows: every discussion adds one entry to `sessions` below and
   nothing else changes. No new files, no new folder, no renderer edit.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n`, `date` and the titles,
   and rewrite the blocks. Put it at the BOTTOM of the array — the page is
   chronological, oldest first, and opens with the newest session expanded and
   the earlier ones folded away. The contents list, the numbering and the
   anchors all come from the array, so there is nothing else to keep in step.

   `id` must be unique and URL-safe: it becomes the anchor, so
   /anny/#s3 opens session 3 with the rest folded.

   THE CHINESE LAYER
   -----------------
   Every visible English string has a Traditional Chinese counterpart. English
   is what shows; the Chinese waits behind a small 中 chip, or the 中文 switch
   in the top bar opens the lot. Instructions, task prompts, the contents list
   and anything already behind a deliberate reveal stay bilingual — those are
   scaffolding, not comprehension practice.

   A gap-fill translation is a COMPLETE Chinese sentence — the blank is filled
   in, and only the English keeps its ___. The other pages in this repo do the
   opposite and leave ＿＿ in the Chinese so it cannot hand over the answer;
   Lewis asked for the full sentence here (2026-08-12). The reasoning is that
   this page is teacher-led and nothing is scored, so the Chinese is there to
   make the situation clear rather than to be a second puzzle — and it is still
   one tap away rather than on screen. Write the Chinese to read naturally as a
   finished sentence, not as a translation with a word dropped into a hole.

   Matching halves and answer chips stay in English; each is glossed on its own
   phrase card anyway.

   BLOCK TYPES
   -----------
     lead      a framing sentence in italics, opening a session
     quote     a short quote, with attribution
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one idea in more depth
     contrast  the same message said two ways — how it landed, how it could
               land. Both sides are good English, so both are spoken aloud
     phrases   phrase cards — English face up, Chinese and an example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     fix       something Anny actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task with a tick-list of target phrases

   `fix` is the one block the other pages here do not have, and it is the reason
   a per-student notebook is worth keeping: it holds her own sentences,
   corrected. Session 1 does not use it — the source for that lesson was a
   cleaned summary of the discussion, with the speech-recognition noise already
   stripped out, so there is no reliable record of what she actually said. Put
   her real sentences in as they come up; do not reconstruct them from memory,
   or the most trustworthy part of the page becomes the least.

   SAMPLE BANNER
   -------------
   Setting `sample` puts a line across the top saying the content is a
   placeholder — on screen and in print, so a draft cannot be handed over by
   accident. Session 1 is real, so it is off.
*/

const NOTEBOOK = {
  student: 'Anny',
  title: 'Anny’s English Notebook',
  titleZh: 'Anny 的英文筆記',
  kicker: '中高階管理者英文溝通 · 課堂筆記',

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
      /* Change these two if the lesson was not the day the notes were written. */
      date: '2026-08-12',
      dateEn: '12 August 2026',
      dateZh: '2026 年 8 月 12 日',
      en: 'Coaching a newly promoted manager',
      zh: '指導剛升任的主管',

      focus: [
        { en: 'Feedback that creates awareness', zh: '能建立覺察的回饋' },
        { en: 'Expert → leader', zh: '從專家到領導者' },
        { en: 'Empowering people', zh: '賦能他人' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'One hour on the hardest kind of management problem: someone who is very good at her job, and whose strengths are now the thing getting in her way.',
          zh: '一個小時，談的是管理上最難的一種問題：一個很會做事的人，而她的優點如今正好成了她的阻礙。',
        },

        {
          t: 'summary',
          en: 'The manager has been with the company for more than twelve years. She is technically strong, thoroughly prepared and hard to discourage — and she has just been promoted into a people-management role. Her professional competence was never the issue. What has not moved is her communication style: she still leads with what she knows, in a job where the measure has quietly changed from what she can do to what the people around her can do.',
          zh: '這位主管在公司待了超過十二年。她技術扎實、準備充分、不容易被打退——而她剛被升到帶人的職位。她的專業能力從來不是問題，沒有跟著改變的是溝通方式：她仍然以「我知道什麼」為出發點，但在這個職位上，衡量標準已經悄悄從「她能做到什麼」變成「她身邊的人能做到什麼」。',
        },

        {
          t: 'quote',
          en: 'You have already proved that you can perform. Now, as a leader, your success is measured by whether other people become better when they work with you.',
          zh: '你已經證明了你做得到。現在身為領導者，衡量你成功與否的，是別人跟你合作之後有沒有變得更好。',
          by: 'the sentence to keep from this lesson 這堂課最值得留下的一句',
        },

        {
          t: 'contrast',
          en: 'The same message, said two ways',
          zh: '同一個訊息，兩種說法',
          hintEn: 'Left is how it landed. Right is how it could have landed. Read both aloud — the difference is not politeness, it is what the other person is invited to do next.',
          hintZh: '左邊是當下實際造成的效果，右邊是本來可以有的效果。兩邊都念出來——差別不在客氣與否，而在於對方接下來被邀請做什麼。',
          items: [
            {
              caseEn: 'The alignment meeting with the superintendent',
              caseZh: '與院長的對齊會議',
              cold: {
                en: 'The numbers have declined. You have not achieved this year’s goal. What are you going to do about it?',
                zh: '數字下滑了。你們沒有達到今年的目標。你們打算怎麼辦？',
              },
              warm: {
                en: 'We see a change in the numbers, but we don’t fully understand what is happening inside the hospital. We are here to listen and to explore what we can do to support you.',
                zh: '我們看到數字有變化，但我們並不完全了解醫院內部發生了什麼。我們來是想聽、想了解，也想一起看看我們可以怎麼支援你們。',
              },
              whyEn: 'The first hands over a verdict. The second hands over a question — and a question is the only one of the two the other person can pick up.',
              whyZh: '第一種給的是結論，第二種給的是問題——而兩者之中，只有問題是對方接得住的。',
            },
            {
              caseEn: 'Training the surgeon on the system',
              caseZh: '指導醫師操作系統',
              cold: {
                en: 'You’re doing it wrong. Let me demonstrate.',
                zh: '你做錯了。我示範給你看。',
              },
              warm: {
                en: 'I can see what you’re trying to do. Let me show you another approach that may make this easier — try it and see how it feels.',
                zh: '我看得出來你想做什麼。我示範另一種做法，可能會讓這個步驟更順——你試試看感覺如何。',
              },
              whyEn: 'Both are aimed at the same correction. Only the second leaves the surgeon willing to try it again in front of her.',
              whyZh: '兩種說法要修正的是同一件事，但只有第二種會讓醫師願意在她面前再試一次。',
            },
            {
              caseEn: 'What the job is now',
              caseZh: '這份工作現在的重點',
              cold: {
                en: 'Look at what I can do.',
                zh: '看看我做得到什麼。',
              },
              warm: {
                en: 'Look at what the people around me can do.',
                zh: '看看我身邊的人做得到什麼。',
              },
              whyEn: 'The whole promotion, in two sentences. She no longer has to prove she is the most capable person in the room; she has to make the room more capable.',
              whyZh: '兩句話就講完了整個升遷的意義。她不再需要證明自己是全場最強的人，而是要讓全場的人都變強。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Why “tell her to change” will not work',
          zh: '為什麼「叫她改」行不通',
          bodyEn: 'The behaviours she is being asked to change are the behaviours that made her successful for twelve years. From where she stands, the request sounds like being told that what worked was wrong. That is why the conversation has to start with what she keeps — persistence, preparation, standards — and treat leadership as the next use of those strengths rather than a replacement for them.',
          bodyZh: '現在要她改的那些行為，正是讓她成功了十二年的行為。站在她的角度，這個要求聽起來就像在說她過去做對的事其實是錯的。所以這段對話必須從「哪些要保留」開始——堅持、準備、標準——並且把領導力當成這些優點的下一個用法，而不是取代它們。',
        },

        {
          t: 'phrases',
          en: 'Coaching and feedback',
          zh: '指導與回饋',
          items: [
            {
              en: 'coach a team member',
              zh: '指導團隊成員',
              eg: 'I’m trying to work out how to coach a team member who doesn’t think she needs coaching.',
              egZh: '我正在想，該怎麼指導一位不覺得自己需要被指導的團隊成員。',
            },
            {
              en: 'give constructive feedback',
              zh: '給予建設性的回饋',
              eg: 'I gave her constructive feedback after the meeting, but she heard it as criticism.',
              egZh: '會後我給了她建設性的回饋，但她聽起來覺得是批評。',
            },
            {
              en: 'create awareness',
              zh: '建立自我覺察',
              eg: 'The point of the conversation is to create awareness, not to win the argument.',
              egZh: '這段對話的目的是建立她的覺察，不是把道理辯贏。',
            },
            {
              en: 'a business alignment meeting',
              zh: '商業共識／策略對齊會議',
              eg: 'A business alignment meeting is not a performance review.',
              egZh: '策略對齊會議不是績效檢討會。',
            },
            {
              en: 'a discovery-oriented approach',
              zh: '探索式的溝通方式',
              eg: 'She needs a more discovery-oriented approach: discover, understand, discuss, then solve.',
              egZh: '她需要更偏向探索式的溝通方式：先探索、理解、討論，最後才解決。',
            },
            {
              en: 'communication style',
              zh: '溝通風格',
              eg: 'Her communication style hasn’t changed since the promotion.',
              egZh: '她的溝通風格從升遷之後就沒有改變過。',
            },
            {
              en: 'speak up',
              zh: '主動表達意見',
              eg: 'I want the team to speak up in front of the customer, not wait to be asked.',
              egZh: '我希望團隊在客戶面前主動表達意見，而不是等人來問。',
            },
            {
              en: 'lose sight of the ultimate goal',
              zh: '忘記最終目標',
              eg: 'When she pushes for the number, she loses sight of the ultimate goal.',
              egZh: '當她一味追著數字，就忘記了最終目標。',
            },
            {
              en: 'a sense of insecurity',
              zh: '不安全感',
              eg: 'Some of that aggressiveness may come from a sense of insecurity.',
              egZh: '那份強勢，有一部分可能來自不安全感。',
            },
            {
              en: 'prove oneself',
              zh: '證明自己',
              eg: 'She still feels she has to prove herself, even though she already has the role.',
              egZh: '即使職位已經到手，她還是覺得必須證明自己。',
            },
            {
              en: 'positive reinforcement',
              zh: '正向強化',
              eg: 'I’m going to start with positive reinforcement rather than a list of problems.',
              egZh: '我打算從正向強化開始，而不是先列出一堆問題。',
            },
            {
              en: 'a focused person',
              zh: '很專注的人',
              eg: 'She’s a very focused person — that’s exactly why she gets results.',
              egZh: '她是一個非常專注的人——這正是她拿得出成績的原因。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Leading and growing people',
          zh: '領導與培養人',
          items: [
            {
              en: 'persistent',
              zh: '堅持不懈的',
              eg: 'She’s persistent, which built her career — and which is why old habits are hard to drop.',
              egZh: '她很堅持，這造就了她的職涯——也正因如此，舊習慣才難以放下。',
            },
            {
              en: 'result-oriented',
              zh: '結果導向的',
              eg: 'Being result-oriented isn’t the problem; it becomes one when it overrides the learning.',
              egZh: '結果導向本身不是問題，問題出在它壓過了學習的過程。',
            },
            {
              en: 'strategic',
              zh: '有策略性的',
              eg: 'She’s strategic about the account, but not yet about the relationship.',
              egZh: '她對客戶的經營很有策略，但對關係還沒有。',
            },
            {
              en: 'transition from an individual contributor to a manager',
              zh: '從個人貢獻者轉型為管理者',
              eg: 'The transition from an individual contributor to a manager is taking longer than HR expected.',
              egZh: '從個人貢獻者轉型為管理者，花的時間比人資預期的長。',
            },
            {
              en: 'reinvent yourself',
              zh: '重新塑造自己',
              eg: 'To reinvent yourself is to rethink how you work from the ground up.',
              egZh: '重新塑造自己，是從根本重新思考你的工作方式。',
            },
            {
              en: 'evolve as a leader',
              zh: '作為領導者持續進化',
              eg: 'She doesn’t need to reinvent herself — she needs to evolve as a leader.',
              egZh: '她不需要重新塑造自己，她需要的是作為領導者持續進化。',
            },
            {
              en: 'empower people',
              zh: '賦能他人',
              eg: 'To empower people is to leave them thinking “I can do this”.',
              egZh: '賦能他人，就是讓對方心裡想著「這個我做得到」。',
            },
            {
              en: 'build someone’s confidence',
              zh: '建立某人的信心',
              eg: 'A good trainer builds the surgeon’s confidence before correcting the technique.',
              egZh: '好的訓練者會先建立醫師的信心，再修正技術。',
            },
            {
              en: 'make people want to improve',
              zh: '讓人產生主動改善的意願',
              eg: 'Constant criticism raises stress; the job is to make people want to improve.',
              egZh: '不斷的批評只會提高壓力；真正該做的是讓人產生主動改善的意願。',
            },
            {
              en: 'focus on helping others become better',
              zh: '專注於讓他人變得更好',
              eg: 'Her next stage is to focus on helping others become better.',
              egZh: '她的下一個階段，是專注於讓他人變得更好。',
            },
            {
              en: 'a one-man show',
              zh: '一個人包辦／個人英雄式表現',
              eg: 'Leadership at this level can’t be a one-man show.',
              egZh: '到了這個層級，領導不可能是一個人包辦的事。',
            },
            {
              en: 'make the people around you better',
              zh: '讓周圍的人變得更優秀',
              eg: 'You don’t have to be the smartest person in the room; you have to make the people around you better.',
              egZh: '你不必當全場最聰明的人，你要做的是讓周圍的人變得更優秀。',
            },
          ],
        },

        {
          t: 'match',
          en: 'Which half goes with which',
          zh: '配對：哪一半接哪一半',
          hintEn: 'Tap a phrase on the left, then its partner on the right.',
          hintZh: '先點左邊的字詞，再點右邊配對的字詞。',
          pairs: [
            { a: 'create', b: 'awareness' },
            { a: 'give', b: 'constructive feedback' },
            { a: 'empower', b: 'the people around you' },
            { a: 'build', b: 'someone’s confidence' },
            { a: 'lose sight of', b: 'the ultimate goal' },
            { a: 'prove', b: 'yourself' },
            { a: 'evolve', b: 'as a leader' },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the phrase that fits',
          zh: '選出適合的片語',
          items: [
            {
              text: 'My aim in the conversation is to ___, not to tell her she is wrong.',
              textZh: '這場對話我的目的是建立她的覺察，而不是告訴她她錯了。',
              options: ['create awareness', 'prove myself', 'speak up'],
              answer: 0,
              why: {
                en: 'Awareness is something she arrives at. A verdict is something she is handed — and the second one is what went wrong in the meeting.',
                zh: '覺察是她自己走到的，結論是別人丟給她的——而後者正是那場會議出問題的地方。',
              },
            },
            {
              text: 'She’s extremely ___, which is why she gets results and why she won’t let go of old habits.',
              textZh: '她非常堅持，這既是她拿得出成績的原因，也是她放不下舊習慣的原因。',
              options: ['strategic', 'persistent', 'insecure'],
              answer: 1,
              why: {
                en: 'This was the turn of the whole lesson: the same quality explains the success and the sticking point.',
                zh: '這是整堂課的轉折：同一項特質，同時說明了她的成功和她卡住的地方。',
              },
            },
            {
              text: 'She doesn’t need to ___ — twelve years of experience is worth keeping. She needs to evolve.',
              textZh: '她不需要重新塑造自己——十二年的經驗是值得保留的。她需要的是持續進化。',
              options: ['speak up', 'empower people', 'reinvent herself'],
              answer: 2,
              why: {
                en: '“Reinvent” starts again from nothing; “evolve” develops what is already there. For her, the second word is the kinder and the more accurate one.',
                zh: '「Reinvent」是從頭來過，「evolve」是把已經有的東西往前推。對她來說，後者既比較溫和，也比較準確。',
              },
            },
            {
              text: 'If the training only ever points out errors, the surgeon’s stress rises and you stop ___.',
              textZh: '如果訓練從頭到尾只指出錯誤，醫師的壓力會升高，你也就不再讓人產生主動改善的意願了。',
              options: ['making people want to improve', 'being result-oriented', 'giving feedback'],
              answer: 0,
              why: {
                en: 'Feedback still happens and results still matter — what is lost is the learner’s willingness to keep going.',
                zh: '回饋還是有給，成果也還是重要——失去的是學習者願意繼續下去的意願。',
              },
            },
          ],
        },

        {
          t: 'poll',
          en: 'What do you think?',
          zh: '你怎麼看？',
          hintEn: 'There is no right answer — pick one and think about why.',
          hintZh: '沒有標準答案——選一個，然後想想原因。',
          items: [
            {
              en: 'Stepping into her presentation was the right call, even though she felt undermined.',
              zh: '即使她覺得被打臉，當下接手那場簡報仍然是對的決定。',
            },
            {
              en: 'A manager who was promoted because there were no other candidates should be told so.',
              zh: '如果一個人是因為沒有其他人選才被升上來的，就應該讓他知道這件事。',
            },
            {
              en: 'Being liked and being effective as a leader usually pull in opposite directions.',
              zh: '身為領導者，「被喜歡」和「有效」通常是互相拉扯的。',
            },
            {
              en: 'The higher you climb, the fewer people are willing to give you candid feedback.',
              zh: '你爬得越高，願意對你說真話的人就越少。',
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk it through',
          zh: '聊聊看',
          items: [
            {
              en: 'How will you open the next conversation with her, so that it does not sound like a second correction?',
              zh: '下一次跟她談，你會怎麼開場，才不會聽起來像是第二次糾正？',
              starters: [
                { en: 'I want to start by saying what I’d like you to keep doing.', zh: '我想先說說我希望你繼續保持的部分。' },
                { en: 'Before we get to the meeting itself, can I ask how you felt it went?', zh: '在談那場會議之前，我可以先問問你覺得進行得如何嗎？' },
                { en: 'You’ve already proved the professional side. What I’m thinking about now is…', zh: '專業的部分你已經證明過了。我現在在想的是⋯⋯' },
              ],
            },
            {
              en: 'She told a mentor that you did not respect her in front of other people. How do you handle that, without pretending it did not happen?',
              zh: '她跟一位前輩說你在別人面前不尊重她。你會怎麼處理，又不假裝這件事沒發生過？',
              starters: [
                { en: 'I understand how it must have looked at the time.', zh: '我可以理解那個當下看起來是什麼樣子。' },
                { en: 'If I’d had another way to do it in the moment, I would have taken it.', zh: '如果當下有別的做法，我會選那個做法。' },
                { en: 'Can we agree a signal for next time, so it doesn’t have to happen that way?', zh: '我們可不可以先約好一個暗號，下次就不必用這種方式處理？' },
              ],
            },
            {
              en: 'Who gives you candid feedback at your level — and if the honest answer is nobody, what would you have to set up?',
              zh: '在你這個層級，誰會對你說真話——如果誠實的答案是沒有人，那你需要建立什麼機制？',
              starters: [
                { en: 'Honestly, very few people tell me what they really think.', zh: '老實說，很少有人會告訴我他們真正的想法。' },
                { en: 'I’d have to make it safe for someone to say it.', zh: '我得先讓對方覺得說出來是安全的。' },
                { en: 'One thing I could put in place is…', zh: '我可以建立的一件事情是⋯⋯' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Two minutes: the conversation you are about to have',
          zh: '兩分鐘：你接下來要進行的那場對話',
          instructionEn: 'Pick a moment and speak for two minutes as if she were sitting opposite you. Reinforce first, then name the next challenge — do not lead with the meeting. Tick each phrase as it lands.',
          instructionZh: '選一個情境，說兩分鐘，就當她正坐在你對面。先肯定，再指出下一個挑戰——不要一開口就談那場會議。用到哪個片語就打勾。',
          prompts: [
            { en: 'The follow-up conversation about the superintendent meeting.', zh: '針對院長那場會議的後續談話。' },
            { en: 'Explaining to her what her job is measured by now.', zh: '向她說明，現在衡量她的標準是什麼。' },
            { en: 'Coaching her on how to train the surgeon differently.', zh: '指導她用不同的方式去訓練那位醫師。' },
            { en: 'Briefing your own boss on how you are handling this.', zh: '向你的主管說明你打算怎麼處理這件事。' },
          ],
          checklist: [
            { en: 'You’ve already proved that…', zh: '你已經證明了⋯⋯' },
            { en: 'What I’d like you to keep is…', zh: '我希望你保留的是⋯⋯' },
            { en: 'The next challenge is…', zh: '下一個挑戰是⋯⋯' },
            { en: 'create awareness', zh: '建立覺察' },
            { en: 'empower', zh: '賦能' },
            { en: 'evolve', zh: '進化' },
            { en: 'make the people around you better', zh: '讓周圍的人變得更優秀' },
          ],
          frames: [
            { en: 'You’ve already proved that you can ___. The next challenge is ___.', zh: '你已經證明了你能夠＿＿。下一個挑戰是＿＿。' },
            { en: 'What I don’t want you to lose is ___.', zh: '我不希望你失去的是＿＿。' },
            { en: 'I’d rather understand what’s happening than tell them what’s wrong.', zh: '比起告訴他們哪裡不對，我更想了解到底發生了什麼。' },
            { en: 'Your success is measured by whether ___ becomes better.', zh: '衡量你成功與否的，是＿＿有沒有變得更好。' },
          ],
        },
      ],
    },
  ],
};

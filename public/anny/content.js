/* Anny — a running notebook of one-to-one sessions.

   Unlike the other pages in this repo, this one is not a lesson. It is a
   notebook that grows: every discussion adds one entry to `sessions` below and
   nothing else changes. No new files, no new folder, no renderer edit.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n`, `date` and the titles,
   and rewrite the blocks. Put it at the BOTTOM of the array — the array stays
   chronological and `n` counts up with it. The PAGE reads the other way round:
   the renderer reverses the array, so the newest session is at the top, open,
   with the earlier ones below it and folded away. The contents list, the
   numbering and the anchors all come from the array, so there is nothing else
   to keep in step.

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
     contrast  the same message said two ways. Both sides are good English, so
               both are spoken aloud. The column tags default to "As it landed"
               / "As it could land"; set coldEn/coldZh/warmEn/warmZh when the
               two columns are not a before and after — session 2 uses them for
               a belief and its reframe
     phrases   phrase cards — English face up, Chinese and an example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     fix       something Anny actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     a two-button audit list. The buttons default to "I have this" /
               "I need this", which is wording for auditing PEOPLE; set
               haveEn/haveZh/needEn/needZh whenever the list is anything else
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
        en: 'The newest session is at the top and open; earlier ones sit below it, folded. Tap a session heading to open or close it.',
        zh: '最新的一堂課在最上面，而且是展開的；之前的課在下面，收合起來。點課程標題就能展開或收合。',
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

    {
      id: 's2',
      n: 2,
      date: '2026-11-04',
      dateEn: '4 November 2026',
      dateZh: '2026 年 11 月 4 日',
      en: 'The beliefs that hold a leader back',
      zh: '拖垮領導力的心魔',

      focus: [
        { en: 'Naming a hidden blocker', zh: '指認潛在障礙' },
        { en: 'Belief → reframe', zh: '從信念到轉念' },
        { en: 'Coaching yourself', zh: '自我教練' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Last time we looked at your manager from the outside. This article looks at her from the inside — and then, quietly, at you.',
          zh: '上次我們是從外面看這位主管。這篇文章是從她的內在看她——然後，不動聲色地，也看向你。',
        },

        {
          t: 'summary',
          en: 'Muriel Wilkins has coached senior executives for twenty years. Her finding is that when a leader stalls, the cause is rarely the bureaucracy or the team — it is a belief the leader holds about themselves and has never examined. She calls these hidden blockers, and out of more than three hundred leaders she drew seven that come up again and again.',
          zh: '慕瑞爾‧威金斯擔任高階主管教練二十年。她的發現是：當一位領導者卡住，原因很少是官僚體系或團隊，而是他對自己抱持、卻從未檢視過的某個信念。她稱之為「潛在障礙」，並從三百多位領導者身上歸納出七個反覆出現的類型。',
        },

        {
          t: 'note',
          en: 'How she works on one: uncover, unpack, unblock',
          zh: '她的處理順序：找出、剖析、破除',
          bodyEn: 'Three stages, and the order is the point. Uncover: notice you are stuck, then put the belief into words. Unpack: admit the part you are playing, then trace where the belief came from — it was usually earning its keep for years. Unblock: replace it with one that serves the leader you now have to be, and change a single concrete thing. Most people try to jump straight to the last stage, which is why the change never holds.',
          bodyZh: '三個階段，順序本身就是重點。找出：先察覺自己卡住了，再把那個信念化成具體的句子。剖析：承認自己在其中扮演的角色，再回溯這個信念從哪裡來——它通常曾經很管用，而且管用了很多年。破除：換成一個能支撐你現在這個角色的信念，並且具體改變一件事。多數人想直接跳到最後一個階段，這就是改變撐不住的原因。',
        },

        {
          t: 'cards',
          en: 'The seven hidden blockers',
          zh: '七大心魔',
          hintEn: 'Read each one as a sentence you might say to yourself. Mark the ones you recognise — in her, or in you.',
          hintZh: '把每一句都當成你可能對自己說的話。認得出來的就標記起來——不論是在她身上，還是在你身上。',
          haveEn: 'That’s me',
          haveZh: '這就是我',
          needEn: 'Not really',
          needZh: '還好',
          items: [
            {
              icon: '🙋',
              en: 'I need to be involved.',
              zh: '我必須親自介入。',
              descEn: 'You are in every meeting and on every thread, and decisions wait for you. To everyone else it reads as micromanagement.',
              descZh: '每場會議、每串訊息你都在，決策也都在等你。但看在別人眼裡，這就是微觀管理。',
            },
            {
              icon: '⏱',
              en: 'I need it done now.',
              zh: '我必須立刻完成。',
              descEn: 'Urgency is the only speed you have. Work that would be better for another week of thought goes out on Friday anyway.',
              descZh: '你只有「急」這一種速度。有些事再多想一週會更好，但還是週五就送出去了。',
            },
            {
              icon: '☝️',
              en: 'I know I’m right.',
              zh: '我知道我是對的。',
              descEn: 'You often are, which is the problem. You stop asking, they stop offering, and the room gets quieter every month.',
              descZh: '你常常真的是對的，而這正是問題。你不再問，他們也不再說，會議室一個月比一個月安靜。',
            },
            {
              icon: '🎯',
              en: 'I can’t make a mistake.',
              zh: '我絕不能犯錯。',
              descEn: 'Nothing leaves your desk until it is perfect, so less and less leaves your desk. Risk looks like exposure rather than learning.',
              descZh: '不夠完美的東西你不放手，於是放得出去的愈來愈少。風險在你眼中是把柄，不是學習。',
            },
            {
              icon: '🪞',
              en: 'If I can do it, so can you.',
              zh: '如果我能做到，你們也能。',
              descEn: 'Your own capability is the standard, and you cannot see why anyone would need more time, more context, or a different route.',
              descZh: '你拿自己的能力當標準，無法理解為什麼有人需要更多時間、更多背景，或是另一條路。',
            },
            {
              icon: '🚪',
              en: 'I can’t say no.',
              zh: '我不能拒絕。',
              descEn: 'Every request becomes a commitment, your calendar belongs to other people, and the work only you can do happens after hours.',
              descZh: '每個請求都變成承諾，行事曆屬於別人，只有你能做的事只好留到下班以後。',
            },
            {
              icon: '🪟',
              en: 'I don’t belong here.',
              zh: '我不屬於這裡。',
              descEn: 'You are in the room on merit and still waiting to be found out, so you over-prepare, over-prove, and speak last.',
              descZh: '你是憑實力坐在那裡的，卻還在等著被拆穿，於是你過度準備、過度證明，而且總是最後才發言。',
            },
          ],
        },

        {
          t: 'contrast',
          en: 'The belief, and the reframe',
          zh: '信念，與轉念',
          hintEn: 'On the left, the sentence running underneath. On the right, what could replace it — not softer, just more use to the person she now has to be.',
          hintZh: '左邊是底下一直在跑的那句話。右邊是可以取代它的說法——不是比較軟，而是對她現在這個角色更有用。',
          coldEn: 'The belief',
          coldZh: '心魔',
          warmEn: 'The reframe',
          warmZh: '轉念',
          items: [
            {
              caseEn: 'When she steps into the training',
              caseZh: '當她接手那場訓練',
              cold: { en: 'I need to be involved.', zh: '我必須親自介入。' },
              warm: {
                en: 'I need to be involved mainly where I add the most value.',
                zh: '我只需要在我最能創造價值的地方介入。',
              },
              whyEn: 'This is the one reframe Wilkins publishes herself, and notice it does not say “step back”. It says be deliberate about where you step in — which is what makes it survivable for someone who built twelve years on being involved.',
              whyZh: '這是威金斯自己公開的那一個轉念，而且注意：它並沒有說「放手」，而是說「刻意選擇你要在哪裡介入」。對一個靠「親自參與」累積了十二年的人來說，正是這個差別讓她接得住。',
            },
            {
              caseEn: 'When she already has the answer',
              caseZh: '當她心裡已經有答案',
              cold: { en: 'I know I’m right.', zh: '我知道我是對的。' },
              warm: {
                en: 'I may be right, and I still want to hear what I’m missing.',
                zh: '我可能是對的，但我還是想聽聽我漏掉了什麼。',
              },
              whyEn: 'The reframe does not ask her to doubt herself. It only separates being right from being finished — she keeps the judgement and still leaves the door open.',
              whyZh: '這個轉念並沒有要她懷疑自己。它只是把「我是對的」和「這件事談完了」分開——判斷她留著，門也留著。',
            },
            {
              caseEn: 'When the surgeon is slower than she was',
              caseZh: '當醫師的進度比她當年慢',
              cold: { en: 'If I can do it, so can you.', zh: '如果我能做到，你們也能。' },
              warm: {
                en: 'What took me years, I’m asking him to do in a week.',
                zh: '我花了好幾年才會的事，我卻要求他一週就做到。',
              },
              whyEn: 'Her own learning curve has gone invisible to her, which is what expertise does to everyone. Putting the time back into the sentence is usually enough to change the tone of the whole session.',
              whyZh: '她自己的學習曲線對她來說已經隱形了——專業對每個人都會這樣。把「花了多久」放回句子裡，通常就足以改變整堂訓練的語氣。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'The language of a hidden belief',
          zh: '談「隱藏信念」的語言',
          items: [
            {
              en: 'a limiting belief',
              zh: '限制性信念',
              eg: 'Her real problem isn’t the surgeon. It’s a limiting belief about her own value.',
              egZh: '她真正的問題不是那位醫師，而是一個關於自身價值的限制性信念。',
            },
            {
              en: 'a hidden blocker',
              zh: '潛在障礙',
              eg: 'A hidden blocker is hidden mainly from the person carrying it.',
              egZh: '潛在障礙主要是對當事人自己隱形。',
            },
            {
              en: 'a blind spot',
              zh: '盲點',
              eg: 'Everyone on her team can see the blind spot except her.',
              egZh: '她團隊裡每個人都看得見那個盲點，只有她看不見。',
            },
            {
              en: 'self-awareness',
              zh: '自我覺察',
              eg: 'You can’t talk someone into self-awareness by telling them what they’re like.',
              egZh: '你沒辦法靠「告訴對方他是什麼樣的人」，就讓他產生自我覺察。',
            },
            {
              en: 'mindset',
              zh: '心態、思維模式',
              eg: 'Carol Dweck’s research is why mindset is in every leadership book now.',
              egZh: '現在每本領導力的書都在談 mindset，源頭是卡蘿‧杜維克的研究。',
            },
            {
              en: 'reframe something',
              zh: '轉念、重新框架',
              eg: 'Don’t delete the belief — reframe it into one that still sounds like her.',
              egZh: '不要刪掉那個信念——把它轉成一個聽起來仍然像她的說法。',
            },
            {
              en: 'own the impact',
              zh: '承擔自己造成的影響',
              eg: 'She has to own the impact before any of this starts moving.',
              egZh: '她必須先承擔自己造成的影響，這件事才動得起來。',
            },
            {
              en: 'unexamined',
              zh: '未經檢視的',
              eg: 'It’s an unexamined rule she has followed since her first job.',
              egZh: '那是一條她從第一份工作就遵守、卻從未檢視過的規則。',
            },
            {
              en: 'serve someone well',
              zh: '對某人很管用、讓某人受用',
              eg: 'That belief served you well for twelve years. It doesn’t serve this job.',
              egZh: '那個信念讓你受用了十二年，但它幫不了現在這個職位。',
            },
            {
              en: 'get in your own way',
              zh: '自己絆住自己',
              eg: 'She isn’t being blocked by the company. She’s getting in her own way.',
              egZh: '擋住她的不是公司，是她自己絆住了自己。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Letting go, in English',
          zh: '「放手」的英文',
          items: [
            {
              en: 'delegate',
              zh: '授權、把工作下放',
              eg: 'Delegate the task and the authority, or you’ve only moved the work.',
              egZh: '要授權就連決定權一起給，否則你只是把工作換了個位置。',
            },
            {
              en: 'step back',
              zh: '退一步、放手',
              eg: 'I’m going to step back on this one and let her run it.',
              egZh: '這件事我打算退一步，讓她主導。',
            },
            {
              en: 'a bottleneck',
              zh: '瓶頸',
              eg: 'If every decision waits for you, you are the bottleneck.',
              egZh: '如果每個決策都在等你，你就是那個瓶頸。',
            },
            {
              en: 'micromanage',
              zh: '微觀管理、事必躬親',
              eg: 'Her 360 feedback used the word micromanage, and it landed hard.',
              egZh: '她的 360 回饋裡出現了「微觀管理」這個詞，而這句話打得很重。',
            },
            {
              en: 'be pulled into the weeds',
              zh: '被拉進瑣碎細節裡',
              eg: 'I get pulled into the weeds and never reach the strategic work.',
              egZh: '我老是被拉進瑣碎細節裡，永遠做不到策略性的事。',
            },
            {
              en: 'give someone room',
              zh: '給某人空間',
              eg: 'Give her room to do it her way, even if it takes longer.',
              egZh: '給她空間用她的方法做，就算久一點也沒關係。',
            },
            {
              en: 'trust someone with something',
              zh: '把某事放心交給某人',
              eg: 'I’m trusting you with the whole account, not just the paperwork.',
              egZh: '我是把整個客戶放心交給你，不只是那些文書作業。',
            },
            {
              en: 'let it go',
              zh: '放下、不再糾結',
              eg: 'It won’t be done the way I’d do it, and I have to let that go.',
              egZh: '它不會照我的方式完成，而我得放下這件事。',
            },
            {
              en: 'set someone up to succeed',
              zh: '幫某人鋪好成功的條件',
              eg: 'Delegating with no context isn’t trust — it’s setting someone up to fail.',
              egZh: '沒給背景就授權，那不是信任，而是讓人注定失敗。',
            },
            {
              en: 'where I add the most value',
              zh: '我最能創造價值的地方',
              eg: 'I’m working out where I add the most value, and protecting that time.',
              egZh: '我正在想清楚我最能創造價值的地方，並把那段時間保護起來。',
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
            { a: 'get in', b: 'your own way' },
            { a: 'own', b: 'the impact' },
            { a: 'a limiting', b: 'belief' },
            { a: 'pulled into', b: 'the weeds' },
            { a: 'set someone up', b: 'to succeed' },
            { a: 'give her', b: 'room' },
            { a: 'trust him', b: 'with the account' },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the phrase that fits',
          zh: '選出適合的片語',
          items: [
            {
              text: 'If every decision waits for you, you are the ___.',
              textZh: '如果每個決策都在等你，你就是那個瓶頸。',
              options: ['bottleneck', 'blind spot', 'mindset'],
              answer: 0,
              why: {
                en: 'The image is the neck of the bottle — the narrow point everything has to squeeze through.',
                zh: '這個比喻講的是瓶子的頸部——所有東西都得擠過去的那個窄口。',
              },
            },
            {
              text: 'That belief ___ for twelve years. It doesn’t help in this job.',
              textZh: '那個信念讓她受用了十二年，但在現在這個職位上幫不了她。',
              options: ['served her well', 'got in her way', 'let it go'],
              answer: 0,
              why: {
                en: 'The whole coaching move depends on saying this first. It is what makes the next sentence hearable.',
                zh: '整段教練對話的關鍵，就在於先說這一句。有了它，下一句才聽得進去。',
              },
            },
            {
              text: 'She can see everyone else’s ___ except her own.',
              textZh: '她看得見別人的盲點，唯獨看不見自己的。',
              options: ['blind spot', 'bottleneck', 'reframe'],
              answer: 0,
              why: {
                en: 'A blind spot is literal: the piece of the mirror where the car genuinely cannot be seen.',
                zh: '「盲點」是字面的：後照鏡上那塊真的看不到車的位置。',
              },
            },
            {
              text: 'Don’t ask her to drop the belief — help her ___ it.',
              textZh: '不要要求她丟掉那個信念，而是幫她把它轉個念。',
              options: ['reframe', 'delegate', 'own'],
              answer: 0,
              why: {
                en: 'Dropping a belief that built a career is not on offer. Changing its shape is.',
                zh: '要她丟掉一個造就了她職涯的信念，不可能；改變它的形狀，才做得到。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk it through',
          zh: '聊聊看',
          items: [
            {
              en: 'Of the seven, which one is your manager’s? And is it the same one you marked for yourself?',
              zh: '七個之中，哪一個是你那位主管的？它跟你替自己標記的是同一個嗎？',
              starters: [
                { en: 'The one that jumped out for her was…', zh: '一眼就看到她身上的那一個是⋯⋯' },
                { en: 'Mine is less obvious, but I think it’s…', zh: '我自己的沒那麼明顯，但我想應該是⋯⋯' },
                { en: 'I’d never have called it a belief before.', zh: '我以前從來不會把它叫做「信念」。' },
              ],
            },
            {
              en: 'Her belief earned her twelve years of success. How do you ask someone to change the very thing that worked?',
              zh: '她的信念為她換來十二年的成功。你要怎麼開口，請一個人改變那個一直很管用的東西？',
              starters: [
                { en: 'I’d start by naming what it got her.', zh: '我會先說出這個信念為她帶來了什麼。' },
                { en: 'I wouldn’t ask her to drop it — I’d ask her to aim it somewhere else.', zh: '我不會要她放棄，我會請她把它用在別的地方。' },
                { en: 'The risk is she hears “so I was wrong all along”.', zh: '風險是她會聽成「原來我一直都是錯的」。' },
              ],
            },
            {
              en: 'Last time you said the higher you climb, the fewer people tell you the truth. So who would tell you yours?',
              zh: '上次你說，爬得越高，願意對你說真話的人就越少。那麼，誰會告訴你你的那一個？',
              starters: [
                { en: 'Honestly, probably nobody at work.', zh: '老實說，公司裡大概沒有人。' },
                { en: 'I’d have to ask directly, and make it safe to answer.', zh: '我得直接問，而且要讓對方覺得回答是安全的。' },
                { en: 'My team can see it. They just wouldn’t say it to me.', zh: '我的團隊看得出來，只是不會對我說。' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Two minutes: uncover, unpack, unblock',
          zh: '兩分鐘：找出、剖析、破除',
          instructionEn: 'Pick one blocker — hers or yours — and take it through the three stages. Name it in one sentence, say where it came from and what it has been worth, then say the reframe out loud. Tick each phrase as it lands.',
          instructionZh: '挑一個心魔——她的或你的都可以——照三個階段走一遍。用一句話命名它，說出它從哪裡來、曾經帶來什麼價值，然後把轉念說出口。用到哪個片語就打勾。',
          prompts: [
            { en: 'Her blocker, as you would put it to her.', zh: '她的心魔，用你會對她說的方式講一遍。' },
            { en: 'Your own, as you would put it to a coach.', zh: '你自己的，用你會對教練說的方式講一遍。' },
            { en: 'The one you marked “that’s me” and wish you hadn’t.', zh: '那個你標了「這就是我」、又有點後悔標下去的。' },
          ],
          checklist: [
            { en: 'a limiting belief', zh: '限制性信念' },
            { en: 'It served me well when…', zh: '它在⋯⋯的時候很管用' },
            { en: 'get in my own way', zh: '自己絆住自己' },
            { en: 'own the impact', zh: '承擔自己造成的影響' },
            { en: 'reframe it as…', zh: '把它轉成⋯⋯' },
            { en: 'where I add the most value', zh: '我最能創造價值的地方' },
          ],
          frames: [
            { en: 'The sentence running underneath is ___.', zh: '底下一直在跑的那句話是＿＿。' },
            { en: 'It came from ___, and it worked for a long time.', zh: '它來自＿＿，而且管用了很久。' },
            { en: 'What it costs me now is ___.', zh: '它現在讓我付出的代價是＿＿。' },
            { en: 'The version I’d rather run is ___.', zh: '我比較想跑的版本是＿＿。' },
          ],
        },

        /* Sourcing, on the page rather than only in this file: the seven names
           and the three stages are Wilkins's, one reframe is hers, and the rest
           is the lesson's own. Anyone reading the page can see which is which. */
        {
          t: 'note',
          en: 'Where this comes from',
          zh: '出處',
          bodyEn: 'Muriel M. Wilkins, “The Hidden Beliefs That Hold Leaders Back”, Harvard Business Review, November–December 2025, read here in the HBR Taiwan translation 〈拖垮領導力的七大心魔〉; the ideas are developed in her book Leadership Unblocked (HBR Press, 2025). The seven names and the three stages are hers, and so is the first reframe above. The other two reframes, and every example, explanation and exercise on this page, were written for this lesson — they are not quotations from the article.',
          bodyZh: '出自 Muriel M. Wilkins〈The Hidden Beliefs That Hold Leaders Back〉，《哈佛商業評論》2025 年 11–12 月號，此處讀的是中文版〈拖垮領導力的七大心魔〉；相關概念另見其著作《Leadership Unblocked》（HBR Press, 2025）。七個名稱與三個階段出自原作者，上面第一個轉念也是。其餘兩個轉念，以及本頁所有的例子、說明與練習，都是為這堂課而寫，並非原文的引述。',
        },
      ],
    },

    {
      id: 's3',
      n: 3,
      date: '2026-11-14',
      dateEn: '14 November 2026',
      dateZh: '2026 年 11 月 14 日',
      en: 'The three-minute leadership update',
      zh: '三分鐘的領導簡報',

      focus: [
        { en: 'The four Cs', zh: '四個 C' },
        { en: 'Story before numbers', zh: '先講故事，再給數字' },
        { en: 'Ending with an ask', zh: '用明確的請求收尾' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'The last two sessions were about one conversation at a time. This one is about the other kind of three minutes — the room is looking at you, and they have to leave knowing what to do.',
          zh: '前兩堂課談的是一次一場的對話。這一堂談的是另一種三分鐘——整個會議室看著你，而他們離開時必須知道該做什麼。',
        },

        {
          t: 'summary',
          en: 'A leadership presentation answers one question: how do you turn a sound strategy into a message people understand, believe in, and act on? That is a different job from reporting. A report moves information; a leadership update creates alignment and drives a decision. Everything below is in service of that one difference.',
          zh: '領導簡報要回答的是一個問題：你要怎麼把一個好策略，變成別人聽得懂、願意相信、而且真的會去做的訊息？這跟「報告」是不同的工作。報告傳遞資訊；領導簡報建立共識，並推動一個決定。下面所有內容，都是為了這一個差別。',
        },

        {
          t: 'cards',
          en: 'The four Cs',
          zh: '四個 C',
          hintEn: 'Each one is something the audience does, not something you do. Mark the one that is already working for you, and the one that is not.',
          hintZh: '每一個講的都是「聽眾會怎樣」，而不是「你做了什麼」。標出已經做得不錯的，以及還沒做到的那一個。',
          haveEn: 'Already strong',
          haveZh: '已經夠強',
          needEn: 'The weak one',
          needZh: '這一塊最弱',
          items: [
            {
              icon: '📊',
              en: 'Credibility — they believe the strategy.',
              zh: '可信——他們相信這個策略。',
              descEn: 'Real data, measurable objectives, and a plan that would survive contact with an actual quarter. The question behind it: can we actually deliver this?',
              descZh: '真實的數據、可衡量的目標，以及一個真的撐得過一季的計畫。背後的問題是：這件事我們真的做得到嗎？',
            },
            {
              icon: '🧲',
              en: 'Connection — they care about the outcome.',
              zh: '共鳴——他們在乎這個結果。',
              descEn: 'The strategy is tied to what this particular audience is already worried about or hoping for. The question behind it: why should these people care?',
              descZh: '策略要接上「這一群聽眾」本來就在擔心或期待的事。背後的問題是：他們為什麼要在乎？',
            },
            {
              icon: '🔎',
              en: 'Clarity — they grasp it quickly.',
              zh: '清晰——他們很快就看懂。',
              descEn: 'One message per slide, with the insight on top instead of the whole dataset. The question behind it: can people get this at a glance?',
              descZh: '一張投影片一個訊息，把洞察放在最上面，而不是整份數據。背後的問題是：別人一眼看得懂嗎？',
            },
            {
              icon: '✅',
              en: 'Commitment — they take action.',
              zh: '行動——他們真的去做。',
              descEn: 'They leave knowing what decision is needed, who owns it, and what happens next. The question behind it: what do we need these people to do?',
              descZh: '他們離開時知道要做什麼決定、誰負責、接下來會怎樣。背後的問題是：我們需要他們做什麼？',
            },
          ],
        },

        {
          t: 'note',
          en: 'Where each one usually breaks, and the order that prevents it',
          zh: '每一個 C 通常壞在哪裡，以及防止它的順序',
          bodyEn: 'The four failures are predictable. Credibility goes when there are numbers everywhere and no "so what". Connection goes when you open straight into data, before anyone knows why they are listening. Clarity goes when a slide carries paragraphs and a chart too small to read. Commitment goes when you finish on "Any questions?" and nobody has been asked for anything. The order that prevents most of this is story, then strategy, then one clear slide, then the ask — which is almost the reverse of how a report is built.',
          bodyZh: '這四種失敗是可以預測的。數字到處都是、卻沒有說出「所以呢」，可信就沒了。一開場就進數據、聽眾還不知道自己為什麼要聽，共鳴就沒了。一張投影片塞滿整段文字和看不清的圖表，清晰就沒了。最後以「有沒有問題？」收尾、卻沒有向任何人提出請求，行動就沒了。能擋掉大部分問題的順序是：先故事、再策略、再一張清楚的投影片、最後提出請求——這幾乎和一般寫報告的順序相反。',
        },

        {
          t: 'contrast',
          en: 'The same point, upgraded',
          zh: '同一句話，升級版',
          hintEn: 'Both sides are correct English. The right-hand version is the one that sounds like a decision has been made.',
          hintZh: '兩邊的英文都是對的。右邊那個版本，聽起來像是已經下了決定。',
          coldEn: 'Instead of',
          coldZh: '不要說',
          warmEn: 'Try',
          warmZh: '改說',
          items: [
            {
              caseEn: 'Reporting the quarter',
              caseZh: '報告這一季',
              cold: { en: 'Procedure volume increased a lot this year.', zh: '今年手術量增加了很多。' },
              warm: {
                en: 'Procedure volume grew significantly — up 18% year over year.',
                zh: '手術量顯著成長——較去年同期增加 18%。',
              },
              whyEn: '"A lot" is your opinion of the number. The figure is the number. Senior audiences hear the first as padding and the second as evidence, and it costs you nothing to say the second.',
              whyZh: '「很多」是你對這個數字的感想，數字本身才是數字。高階聽眾會把前者當成填充，把後者當成證據——而說後者並不花你任何力氣。',
            },
            {
              caseEn: 'Flagging a priority',
              caseZh: '指出優先順序',
              cold: { en: 'This is very important for next year.', zh: '這件事明年非常重要。' },
              warm: {
                en: 'This is our top priority for next year.',
                zh: '這是我們明年的首要任務。',
              },
              whyEn: 'Everything in a leadership deck is "very important" by the third slide, so the phrase has stopped meaning anything. "Top priority" ranks it, and ranking is what they came for.',
              whyZh: '在領導簡報裡，到第三張投影片為止，每件事都「非常重要」，這個說法已經失去意義。「首要任務」是在排序，而排序正是他們來聽的東西。',
            },
            {
              caseEn: 'Committing to something',
              caseZh: '做出承諾',
              cold: { en: 'We will try to lift utilisation at the quieter sites.', zh: '我們會試著提高使用率較低的院所的使用量。' },
              warm: {
                en: 'We’re committed to lifting utilisation to four cases a week.',
                zh: '我們承諾把使用率提高到每週四台。',
              },
              whyEn: '"We will try" is a sentence that survives failure, and everyone in the room knows it. The upgrade is not louder — it just names the number you are willing to be held to.',
              whyZh: '「我們會試著」是一句失敗了也活得下來的話，在場每個人都聽得出來。升級版並不是講得更大聲，它只是把你願意被追究的那個數字講出來。',
            },
            {
              caseEn: 'Introducing a chart',
              caseZh: '帶出一張圖表',
              cold: { en: 'This slide shows utilisation by hospital.', zh: '這張投影片顯示各院所的使用率。' },
              warm: {
                en: 'The key takeaway here is that our growth is in the systems we already have.',
                zh: '這裡最重要的一點是：我們的成長空間，在我們已經裝機的設備上。',
              },
              whyEn: 'They can see what the slide shows. What they cannot see is what you concluded from it. Saying the conclusion out loud is the whole job of the sentence.',
              whyZh: '投影片顯示什麼，他們看得見；他們看不見的是你從中得出了什麼結論。把結論說出口，就是這句話唯一的工作。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Opening, and the numbers',
          zh: '開場，以及數字',
          items: [
            {
              en: 'Let me start with a story.',
              zh: '我先從一個故事開始。',
              eg: 'Let me start with a story from last quarter.',
              egZh: '我先從上一季的一個故事開始。',
            },
            {
              en: 'Picture this: …',
              zh: '想像一下：⋯⋯',
              eg: 'Picture this: a surgeon who had never touched a robotic system.',
              egZh: '想像一下：一位從來沒碰過手術機器人的外科醫師。',
            },
            {
              en: 'Here’s why this matters.',
              zh: '這件事之所以重要，是因為⋯⋯',
              eg: 'Here’s why this matters for our patients.',
              egZh: '這件事對我們的病人之所以重要，是因為⋯⋯',
            },
            {
              en: 'The numbers tell a clear story.',
              zh: '數字說得很清楚。',
              eg: 'The numbers tell a clear story: we are growing, but unevenly.',
              egZh: '數字說得很清楚：我們在成長，但成長得不平均。',
            },
            {
              en: 'year over year',
              zh: '較去年同期',
              eg: 'We grew procedure volume by 18% year over year.',
              egZh: '我們的手術量較去年同期成長 18%。',
            },
            {
              en: 'This is driven mainly by …',
              zh: '這主要是由⋯⋯帶動的',
              eg: 'This is driven mainly by three hospitals in the north.',
              egZh: '這主要是由北部三家醫院帶動的。',
            },
            {
              en: 'Our priority is threefold.',
              zh: '我們的優先順序有三項。',
              eg: 'Our priority for next year is threefold: train, lift, and build.',
              egZh: '我們明年的優先順序有三項：訓練、提升、培養。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Guiding them, and the ask',
          zh: '帶著他們走，以及提出請求',
          items: [
            {
              en: 'As you can see here, …',
              zh: '你在這裡可以看到⋯⋯',
              eg: 'As you can see here, three sites account for most of the growth.',
              egZh: '你在這裡可以看到，三家院所佔了大部分的成長。',
            },
            {
              en: 'The key takeaway is …',
              zh: '最重要的一點是⋯⋯',
              eg: 'The key takeaway is that the opportunity is already installed.',
              egZh: '最重要的一點是：機會就在已經裝好的設備裡。',
            },
            {
              en: 'I’ll come back to this.',
              zh: '這一點我等一下會再回來講。',
              eg: 'I’ll come back to this in a moment.',
              egZh: '這一點我等一下會再回來講。',
            },
            {
              en: 'So what I’m asking for today is …',
              zh: '所以我今天要請大家支持的是⋯⋯',
              eg: 'So what I’m asking for today is two more training specialists.',
              egZh: '所以我今天要請大家支持的是：再增加兩位臨床訓練專員。',
            },
            {
              en: 'If we get this right, …',
              zh: '如果這件事我們做對了，⋯⋯',
              eg: 'If we get this right, more surgeons will have that same experience.',
              egZh: '如果這件事我們做對了，會有更多醫師經歷同樣的過程。',
            },
            {
              en: 'Let’s make this happen together.',
              zh: '讓我們一起把它做成。',
              eg: 'That’s the plan. Let’s make this happen together.',
              egZh: '這就是計畫。讓我們一起把它做成。',
            },
            {
              en: 'a clear win',
              zh: '一個明確的成果',
              eg: 'Shorter recovery is a clear win for the hospital and the patient.',
              egZh: '恢復期縮短，對醫院和病人都是一個明確的成果。',
            },
          ],
        },

        {
          t: 'note',
          en: 'A model three-minute update',
          zh: '一份三分鐘簡報的示範',
          bodyEn: 'Story. Last month, a colorectal surgeon in Taichung did her 50th robotic case. A year ago she told us she would never switch. What changed? Her patients went home a day earlier, and she saw it. Strategy. That story is happening across Taiwan: volume grew 18% this year, but unevenly — three hospitals account for 60% of cases. Our priority for next year is threefold: expand training in central and southern Taiwan, lift utilisation at under-used sites to four cases a week, and build two new surgeon champions per region. Slides. On the next slide you will see one chart: utilisation by hospital. The key takeaway is simple — our growth opportunity is not new systems, it is the systems we already have. The ask. So what I am asking for today is support for two additional clinical training specialists. If we get this right, more surgeons will have that same experience, and so will their patients.',
          bodyZh: '故事。上個月，台中一位大腸直腸外科醫師完成了她的第 50 台機器人手術。一年前她跟我們說，她絕對不會換。是什麼改變了？她的病人早一天回家，而且這是她自己看見的。策略。同樣的事正在全台灣發生：今年手術量成長 18%，但成長不平均——三家醫院就佔了六成。我們明年的優先順序有三項：擴大中南部的訓練、把使用率偏低院所提升到每週四台、每區再培養兩位種子醫師。投影片。下一張你會看到一張圖：各院所的使用率。最重要的一點很簡單——我們的成長機會不在新機器，而在已經裝好的機器上。請求。所以我今天要請大家支持的是：再增加兩位臨床訓練專員。如果這件事我們做對了，會有更多醫師經歷同樣的過程，他們的病人也是。',
        },

        {
          t: 'discuss',
          en: 'Read the model, then answer',
          zh: '讀完示範，回答這幾題',
          items: [
            {
              en: 'Why does it open with one surgeon instead of the 18% figure?',
              zh: '為什麼開場是一位醫師，而不是那個 18%？',
              starters: [
                { en: 'Because nobody argues with a person.', zh: '因為沒有人會跟一個「人」爭論。' },
                { en: 'The number means more once you know who it happened to.', zh: '知道那是發生在誰身上之後，數字才有意義。' },
                { en: 'It buys you the attention to spend on the data.', zh: '它替你換來注意力，之後才有本錢講數據。' },
              ],
            },
            {
              en: 'What makes that strategy executable rather than just ambitious?',
              zh: '是什麼讓那個策略「做得到」，而不只是「有企圖心」？',
              starters: [
                { en: 'Each priority has a number attached to it.', zh: '每一項優先事項後面都接著一個數字。' },
                { en: 'It says where, how many, and by when.', zh: '它說了在哪裡、多少、到什麼時候。' },
                { en: 'Nothing in it depends on something we do not control.', zh: '裡面沒有一項是靠我們控制不了的東西。' },
              ],
            },
            {
              en: 'Of your own audiences — regional leadership, your sales team, surgeons — which is hardest in English, and is it the numbers, the story, or keeping the slides simple?',
              zh: '面對你自己的聽眾——區域主管、你的業務團隊、外科醫師——哪一種用英文最難？難的是數字、故事，還是把投影片保持簡單？',
              starters: [
                { en: 'With leadership it’s the numbers; with surgeons it’s the story.', zh: '對主管是數字難，對醫師是故事難。' },
                { en: 'The hardest part is cutting, not writing.', zh: '最難的不是寫，是刪。' },
                { en: 'In Chinese I would never put it this directly.', zh: '用中文我不會講得這麼直接。' },
              ],
            },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the phrase that fits',
          zh: '選出適合的片語',
          items: [
            {
              text: 'So what I’m ___ for today is two more training specialists.',
              textZh: '所以我今天要請大家支持的是：再增加兩位訓練專員。',
              options: ['asking', 'telling', 'hoping'],
              answer: 0,
              why: {
                en: 'Ask for it in words. A leadership update that ends without a request is a report, and the room will treat it as one.',
                zh: '請求要說出口。沒有提出請求就結束的領導簡報，就是一份報告，在場的人也會把它當報告處理。',
              },
            },
            {
              text: 'The key ___ here is that our growth is in the systems we already have.',
              textZh: '這裡最重要的一點是：我們的成長空間，在已經裝機的設備上。',
              options: ['takeaway', 'number', 'slide'],
              answer: 0,
              why: {
                en: 'The takeaway is the conclusion you drew, not the thing on screen. They can already see the thing on screen.',
                zh: '「takeaway」是你得出的結論，不是螢幕上的東西——螢幕上的東西他們已經看得到了。',
              },
            },
            {
              text: 'We grew procedure volume by 18% ___ over year.',
              textZh: '我們的手術量較去年同期成長 18%。',
              options: ['year', 'month', 'quarter'],
              answer: 0,
              why: {
                en: '“Year over year” is fixed — it compares the same period in two consecutive years, which is why it survives a seasonal business.',
                zh: '「year over year」是固定用法，比較的是連續兩年的同一段期間，所以季節性強的生意也適用。',
              },
            },
            {
              text: 'We’re ___ to lifting utilisation to four cases a week.',
              textZh: '我們承諾把使用率提高到每週四台。',
              options: ['committed', 'trying', 'planning'],
              answer: 0,
              why: {
                en: '“Committed to” takes a noun or an -ing form, never a bare verb. It is also the version you cannot quietly walk away from.',
                zh: '「committed to」後面接名詞或 -ing，不能直接接原形動詞。它同時也是那個你沒辦法默默走開的版本。',
              },
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
            { a: 'the key', b: 'takeaway' },
            { a: 'year over', b: 'year' },
            { a: 'driven mainly', b: 'by' },
            { a: 'a top', b: 'priority' },
            { a: 'committed', b: 'to lifting it' },
            { a: 'come back', b: 'to this' },
            { a: 'a clear', b: 'win' },
          ],
        },

        {
          t: 'task',
          en: 'Three minutes: your own update',
          zh: '三分鐘：你自己的簡報',
          instructionEn: 'Pick one real topic — a quarterly result, a new initiative, or a team challenge. Plan the four boxes in notes, not sentences. Then deliver it for three minutes from the notes, record it on your phone, take one piece of feedback, and deliver it again.',
          instructionZh: '挑一個真實的主題——一季的成果、一項新計畫，或團隊的一個難題。用筆記寫下四個框，不要寫成完整句子。然後看著筆記講三分鐘，用手機錄下來，接受一項回饋，再講一次。',
          prompts: [
            { en: 'A quarterly result you already have the numbers for.', zh: '一個你已經有數字的季度成果。' },
            { en: 'A new initiative you want resourced.', zh: '一項你希望拿到資源的新計畫。' },
            { en: 'A team challenge you have not raised upwards yet.', zh: '一個你還沒有往上提的團隊難題。' },
          ],
          checklist: [
            { en: 'Let me start with a story.', zh: '我先從一個故事開始。' },
            { en: 'The numbers tell a clear story.', zh: '數字說得很清楚。' },
            { en: 'year over year', zh: '較去年同期' },
            { en: 'The key takeaway is…', zh: '最重要的一點是⋯⋯' },
            { en: 'So what I’m asking for today is…', zh: '所以我今天要請大家支持的是⋯⋯' },
            { en: 'If we get this right, …', zh: '如果這件事我們做對了，⋯⋯' },
          ],
          frames: [
            { en: 'Story — one person this affected, and what happened: ___', zh: '故事——這件事影響到的一個人，以及發生了什麼：＿＿' },
            { en: 'Strategy — the one to three numbers that prove it, and the plan: ___', zh: '策略——能證明它的一到三個數字，以及計畫：＿＿' },
            { en: 'Slide — if you had one slide, its title would say: ___', zh: '投影片——如果只能有一張，它的標題會寫：＿＿' },
            { en: 'Ask — what you need from this audience: ___', zh: '請求——你需要這群聽眾做什麼：＿＿' },
          ],
        },

        /* Sourcing, on the page rather than only in this file. This lesson is
           Lewis's own, and the only thing a reader could mistake for reported
           fact is the model update — so the numbers in it are called invented
           where they can be seen, not just in the lesson plan. */
        {
          t: 'note',
          en: 'About the example',
          zh: '關於這個示範',
          bodyEn: 'The model update above is written for practice and every figure in it is invented — the 18%, the 60%, the four cases a week, the 50th case. Do not reuse them. The exercise is to swap in your own real numbers, which is also the only way the credibility half of this lesson does anything for you. The four Cs are a common business-communication framing rather than one author’s model; the examples, the language and the exercises on this page were written for this lesson.',
          bodyZh: '上面那份示範是為了練習而寫的，裡面每一個數字都是虛構的——18%、六成、每週四台、第 50 台，都是。請不要沿用。這個練習的重點是換成你自己的真實數字，而這也是這堂課「可信」那一半唯一能對你產生作用的方式。四個 C 是商業溝通常見的歸納方式，不是某一位作者的專屬模型；本頁的例子、語言與練習，都是為這堂課而寫。',
        },
      ],
    },
  ],
};

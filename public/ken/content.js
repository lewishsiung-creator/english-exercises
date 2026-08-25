/* Ken — a running notebook of one-to-one sessions.

   Unlike most pages in this repo, this one is not a lesson. It is a notebook
   that grows: every discussion adds one entry to `sessions` below and nothing
   else changes. No new files, no new folder, no renderer edit. It is the same
   machinery as /anna/, /anny/, /aaron/, /anita/, /nikky/ and /eason/, with the
   same rules.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n`, the date and the titles,
   and rewrite the blocks. Put it at the BOTTOM of the array — the page runs in
   teaching order, oldest first, and opens with the newest session expanded and
   the earlier ones folded away. The contents list, the numbering and the
   anchors all come from the array, so there is nothing else to keep in step.
   A lesson taught between two that are already here goes in its right place in
   the array, not at the bottom, and everything after it is renumbered.

   `id` must be unique and URL-safe: it becomes the anchor, so
   /ken/#s2 opens session 2 with the rest folded.

   THE STUDENT
   -----------
   Ken is a college student, so the register is the one worked out on /anna/:
   not the working-adult voice of /anny/, /aaron/ and /nikky/, whose examples
   come from an office and a career already under way, and not the plainer
   register of /eason/, who is still at school. Write to someone who is an adult
   but new to the subject — full sentences, nothing simplified, but the examples
   belong to his life rather than to a job he does not have yet. Nothing here is
   written down to him.

   His two subjects are PHOTOGRAPHY and WEIGHT TRAINING, and invented example
   sentences should come from those, from campus, or from the TOEIC exam he has
   just sat — not from meetings, clients or quarterly targets.

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
     part      a divider INSIDE one session, for a source that arrives already
               cut into labelled sections
     lead      a framing sentence in italics, opening a session
     link      a pointer to another page in this site
     quote     a short quote, with attribution
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one idea in more depth
     contrast  two columns compared. The tags default to "As it landed" / "As
               it could land"; set coldEn/coldZh and warmEn/warmZh for any other
               pairing — almost right against natural, vague against precise
     phrases   phrase cards — English face up, Chinese and an example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     mcq       a quiz question about the reading. The options stay on screen
               after the answer is found, so the row reads as a record of what
               was guessed. `why` is optional: leave it off where the text above
               is already the explanation, and use it where the question asks
               him to judge something rather than to remember it
     fix       something Ken actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something. Set
               haveEn/haveZh and needEn/needZh whenever the list is not people —
               the built-in Chinese says "I have such a person"
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task with a tick-list of target phrases

   `fix` is the one block the other pages here do not have, and it is the reason
   a per-student notebook is worth keeping: it holds Ken's own sentences,
   corrected.

   THE SOURCE OF SESSION 1, AND ONE RULE THAT COMES OUT OF IT
   ----------------------------------------------------------
   The source is Lewis's write-up of the hour, which opens with a table of
   Ken's ORIGINAL sentences beside a ChatGPT rewrite of them. The left-hand
   column is Ken's own English, so it is real `fix` material and it is used as
   such — nothing there is invented.

   The rewrite is NOT Ken's English, and the write-up itself points out that it
   still contains mistakes. Those leftovers therefore go in a `contrast` block
   labelled "The rewrite" against "Natural English", never in `fix`: putting
   them there would credit Ken with sentences a machine wrote for him, and the
   whole value of `fix` is that every line in it was really said. Keep that
   separation in any later session where a rewriting tool is part of the source.

   SESSION 2, AND WHAT A NOTEBOOK OWES A HEALTH CLAIM
   --------------------------------------------------
   Session 2's source is a written summary of a Huberman Lab clip on body
   recomposition, handed over in chat. It was written before the lesson and
   carries no record of anything Ken said, so it has **no `fix` block** — the
   rule from Anny's notebook, and not an oversight.

   It is also the first session here built on claims about the body, and two
   things follow. The page records what the clip and the summary SAID; it does
   not vouch for the science, and the studies are named so he can read them
   himself. And a `note` near the top says in both languages that this is an
   English lesson rather than a nutrition plan — the protein figures on the page
   are intakes used in particular studies, never a target for him. Keep any
   later session on training or food to that line, and never let a study's
   condition (`were used`) drift into advice (`are recommended`); Part B of that
   session is built around exactly this distinction.

   SAMPLE BANNER
   -------------
   Setting `sample` puts a line across the top saying the content is a
   placeholder — on screen and in print, so a draft cannot be handed over by
   accident. Session 1 is real, so it is off.
*/

const NOTEBOOK = {
  student: 'Ken',
  title: 'Ken’s English Notebook',
  titleZh: 'Ken 的英文筆記',
  kicker: '英語討論課 · 課堂筆記',

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
        en: 'Tap 🔊 to hear a phrase or sentence read aloud, as many times as you like. The voice is good for pronunciation; for intonation, copy me in the lesson instead.',
        zh: '點 🔊 可以聽片語或句子的發音，想聽幾次都可以。這個聲音適合用來練發音；語調的部分，請在課堂上跟著我模仿。',
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
      dateEn: '26 August 2026',
      dateZh: '2026 年 8 月 26 日',
      en: 'Small but consistent: the summer you actually had',
      zh: '小而持續：你真正度過的這個暑假',

      focus: [
        { en: 'Your own sentences, fixed', zh: '你自己的句子，修過一遍' },
        { en: 'workout vs. working out', zh: 'workout 與 working out' },
        { en: 'Habit and goal collocations', zh: '習慣與目標的搭配詞' },
        { en: 'Five sentence patterns', zh: '五個句型' },
        { en: 'Atomic Habits', zh: '《原子習慣》' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'You spoke about the two goals you set yourself this summer — getting stronger, and sitting the TOEIC exam for the first time. This is that hour, kept: your own sentences with the repairs beside them, the language you needed and did not have yet, and five questions to take the subject further.',
          zh: '你談了這個暑假替自己設下的兩個目標——把身體練壯，以及第一次參加多益考試。這一頁就是那一堂課的紀錄：你自己的句子和它們的修正版、你當時還沒有但需要的語言，以及五個把這個主題談得更深的問題。',
        },

        {
          t: 'summary',
          en: 'The content of what you said was good, and it is worth saying so before we look at any of the English. You noticed a change in yourself early in the year, you decided to do something about it, you kept it up for two months, and you can now describe the result. That is a complete story with a beginning, a middle and an end — which is exactly what an examiner, an interviewer or a new friend is listening for. Everything below is about making the English carry that story as clearly as you told it.',
          zh: '你說的內容很好，這一點值得在談任何英文之前先說清楚。你在年初察覺自己的改變，決定採取行動，持續了兩個月，現在能夠描述結果。這是一個有開頭、有轉折、有結尾的完整故事——而考官、面試官，或一個剛認識的朋友，想聽的就是這個。接下來的內容，都只是為了讓你的英文，把這個故事說得跟你當時一樣清楚。',
        },

        {
          t: 'part',
          n: 'A',
          en: 'What you said, and what changed',
          zh: '你說了什麼，以及改了什麼',
        },

        {
          t: 'fix',
          en: 'Your own sentences, tidied up',
          zh: '你自己的句子，修過一遍',
          hintEn: 'These are your sentences from today, exactly as you said them. Tap one to see the repair — try to spot the change yourself first.',
          hintZh: '這些是你今天說過的句子，原封不動。點一下就會看到修正版——先自己找找看改了哪裡。',
          items: [
            {
              wrong: 'My body became skinnier this year so that’s the reason I wanted to make my body stronger.',
              right: 'My body became skinnier this year, so I wanted to make my body stronger.',
              whyEn: 'You gave the reason twice. “So” already means “that is why”, so putting “that’s the reason” after it says the same thing again. Keep one of them: “…, so I wanted to…” or “That’s the reason why I wanted to…” — never both in one sentence.',
              whyZh: '你把「原因」講了兩次。so 本身就已經是「所以、這就是為什麼」，後面再接 that’s the reason 等於同一件事說兩遍。留一個就好：「…, so I wanted to…」或「That’s the reason why I wanted to…」——同一句裡不要兩個都用。',
            },
            {
              wrong: 'And workout becomes a life habit for me.',
              right: 'Working out has become a daily habit for me.',
              whyEn: 'Three separate repairs in one short sentence, and they are all worth having. “Workout” is a noun for one session at the gym, so it cannot be the subject here — the -ing form “working out” can. “Life habit” is not something English says; “a daily habit” is. And because this started earlier and is still true, the present perfect “has become” fits better than “becomes”.',
              whyZh: '這麼短的一句裡有三個修正，而且每一個都值得記住。workout 是名詞，指「一次的健身」，不能當這裡的主詞，動名詞 working out 才可以。英文沒有 life habit 這種搭配，要說 a daily habit。另外，這件事從以前開始、到現在仍然成立，所以用現在完成式 has become 比 becomes 更合適。',
            },
            {
              wrong: 'A daily habit for me. Just like drinking water.',
              right: 'It has become a daily habit for me, just like drinking water.',
              whyEn: 'The comparison is a lovely one — keep it. But “Just like drinking water” has no subject and no verb, so on its own it is a fragment. Join it to the sentence it belongs to with a comma and it becomes the ending of the thought rather than a piece that fell off it.',
              whyZh: '這個比喻很好，一定要留著。但「Just like drinking water」沒有主詞也沒有動詞，單獨存在就是一個不完整的片段。用逗號把它接回它原本所屬的那句話，它就會變成整個想法的收尾，而不是掉在外面的一小段。',
            },
            {
              wrong: 'The second goal, it’s about Toeic exam.',
              right: 'My second goal was the TOEIC exam.',
              whyEn: 'English needs “the” in front of “TOEIC exam” here, because we both know which exam you mean — you had just mentioned it. This is the single most useful article rule for you: when the thing has already been introduced, or when there is only one of it in the situation, it takes “the”.',
              whyZh: '這裡的 TOEIC exam 前面需要加 the，因為我們都知道你指的是哪一場考試——你前面剛提過。這是對你最有用的一條冠詞規則：當某樣東西前面已經提過，或在這個情境裡只有一個時，就要用 the。',
            },
            {
              wrong: 'I feel really fulfilled these two months.',
              right: 'I feel really fulfilled after these two months.',
              whyEn: '“Fulfilled” is how you feel now, looking back, so the two months need a preposition that puts them behind you: after these two months. Without it, the sentence reads as though the feeling ran through the whole period, which is a different claim — and a less interesting one.',
              whyZh: 'fulfilled 是你「現在回頭看」的感受，所以這兩個月需要一個把它放在你身後的介系詞：after these two months。少了它，句子聽起來像是這種感覺貫穿了整段時間，那是另一個意思——而且沒那麼有意思。',
            },
            {
              wrong: 'I want to keep maintaining my habits.',
              right: 'I want to keep maintaining these habits.',
              whyEn: 'A small word doing real work. “My habits” could mean any habit you have ever had, including the ones you would rather not mention. “These habits” points back at the two you have just described — the gym and the studying — and that is what you meant.',
              whyZh: '一個小小的字，做的卻是關鍵的事。my habits 可以指你所有的習慣，包括你不太想提的那些。these habits 則指回你剛剛描述的那兩個——健身和讀書——那才是你的本意。',
            },
          ],
        },

        {
          t: 'note',
          en: 'so, or that’s the reason — one of them, not both',
          zh: 'so 和 that’s the reason，二選一',
          bodyEn: 'Both are correct English on their own. ✕ “My body became skinnier, so that’s the reason I wanted to become stronger.” ✓ “My body became skinnier, so I wanted to become stronger.” ✓ “That’s the reason why I wanted to become stronger.” The doubling is easy to hear once you know it is there, and it happens most often when you are thinking while speaking — which is a good sign, not a bad one. Slow down half a beat and pick one.',
          bodyZh: '這兩種說法單獨用都正確。✕「My body became skinnier, so that’s the reason I wanted to become stronger.」✓「My body became skinnier, so I wanted to become stronger.」✓「That’s the reason why I wanted to become stronger.」一旦知道有這個問題，就很容易聽出來；而它最常發生在你邊想邊說的時候——那是好現象，不是壞事。放慢半拍，選一個就好。',
        },

        {
          t: 'note',
          en: 'workout, work out, working out',
          zh: 'workout、work out、working out',
          bodyEn: 'One word, one noun: a workout is a single training session. “I had a good workout today.” Two words, a verb: to work out is to train. “I work out four times a week.” The -ing form is the one you needed today, because it lets the activity itself be the subject of a sentence: “Working out has become a daily habit for me.” Same for your other subject — “Shooting film has become an expensive habit” works; “Shoot film has become…” does not.',
          bodyZh: '合起來寫是名詞：a workout 指一次的訓練。「I had a good workout today.」分開寫是動詞：work out 就是健身。「I work out four times a week.」而你今天需要的是 -ing 形式，因為它能讓「這件事本身」當句子的主詞：「Working out has become a daily habit for me.」你的另一個興趣也一樣——「Shooting film has become an expensive habit」可以說，「Shoot film has become…」則不行。',
        },

        {
          t: 'phrases',
          en: 'Habits: the verbs that go with them',
          zh: '習慣：與它搭配的動詞',
          items: [
            {
              en: 'develop a habit',
              zh: '養成習慣',
              eg: 'It took me about six weeks to develop the habit of going to the gym before class.',
              egZh: '我大概花了六個星期，才養成上課前先去健身房的習慣。',
            },
            {
              en: 'build a habit',
              zh: '建立習慣',
              eg: 'I am trying to build the habit of editing one photo every evening.',
              egZh: '我正在試著建立每天晚上修一張照片的習慣。',
            },
            {
              en: 'maintain a habit',
              zh: '維持習慣',
              eg: 'Maintaining a habit during the exam period is harder than starting one.',
              egZh: '在考試期間維持一個習慣，比開始一個習慣還要難。',
            },
            {
              en: 'a daily habit',
              zh: '每日習慣',
              eg: 'Working out has become a daily habit for me, just like drinking water.',
              egZh: '健身已經成為我的日常習慣，就像喝水一樣。',
            },
            {
              en: 'a healthy habit',
              zh: '健康的習慣',
              eg: 'Sleeping before midnight is the healthy habit I keep failing at.',
              egZh: '在午夜前睡覺，是我一直做不到的那個健康習慣。',
            },
            {
              en: 'make something a habit',
              zh: '把某件事變成習慣',
              eg: 'I want to make carrying my camera a habit, not a decision.',
              egZh: '我想把「帶著相機」變成習慣，而不是每次都要決定一次。',
            },
            {
              en: 'break a habit',
              zh: '戒掉習慣',
              eg: 'Breaking the habit of checking my phone in bed is my next project.',
              egZh: '戒掉睡前躺在床上滑手機的習慣，是我下一個目標。',
            },
            {
              en: 'stick to something',
              zh: '持續做某事、堅持下去',
              eg: 'Anyone can start a training plan; sticking to it in week five is the difficult part.',
              egZh: '誰都可以開始一份訓練計畫；難的是到了第五週還持續下去。',
            },
          ],
        },

        {
          t: 'contrast',
          en: 'What the rewrite still got wrong',
          zh: '改寫版本仍然沒改好的地方',
          hintEn: 'You ran your talk through ChatGPT, and it repaired several things properly. It also left several things alone that a native speaker would change. These are its sentences, not yours — but they are worth reading, because the errors it leaves behind are the ones people stop noticing. The Chinese is almost identical on both sides, and that is the point: what is wrong is not the meaning, it is the English.',
          hintZh: '你把這段話丟給 ChatGPT 改過，它確實修好了幾個地方，但也放過了幾個母語者一定會改的地方。以下是它的句子，不是你的——但值得看，因為它留下來的錯誤，正是大家漸漸不再注意到的那一種。兩邊的中文幾乎一模一樣，那正是重點：錯的不是意思，而是英文的形式。',
          coldEn: 'The rewrite',
          coldZh: '改寫版',
          warmEn: 'Natural English',
          warmZh: '自然的英文',
          items: [
            {
              caseEn: 'Saying where you train',
              caseZh: '說你在哪裡訓練',
              cold: { en: 'I go to gym three times a week.', zh: '我一週去健身房三次。' },
              warm: { en: 'I go to the gym three times a week.', zh: '我一週去健身房三次。' },
              whyEn: 'A handful of places drop “the” after “go to” — go to school, go to work, go to bed, go to church — and they are all about the purpose rather than the building. The gym is not one of them. Learn the short list; assume “the” everywhere else.',
              whyZh: '只有少數幾個地方在 go to 後面不加 the——go to school、go to work、go to bed、go to church——而且它們講的都是「目的」而不是「那棟建築物」。健身房不在這個名單裡。把那份短名單記起來，其他地方一律加 the。',
            },
            {
              caseEn: 'Saying you sat an exam',
              caseZh: '說你參加了考試',
              cold: { en: 'It was my first time to take Toeic exam.', zh: '那是我第一次參加多益考試。' },
              warm: { en: 'It was my first time taking the TOEIC exam.', zh: '那是我第一次參加多益考試。' },
              whyEn: 'Two things. “My first time” takes the -ing form: my first time taking, my first time flying, my first time shooting film. And the exam takes “the” — TOEIC is the name of a specific test, so “the TOEIC” behaves like “the JLPT” or “the driving test”.',
              whyZh: '兩件事。my first time 後面接 -ing：my first time taking、my first time flying、my first time shooting film。另外考試要加 the——TOEIC 是一場特定考試的名稱，所以 the TOEIC 的用法就跟 the JLPT、the driving test 一樣。',
            },
            {
              caseEn: 'Saying the habit is established',
              caseZh: '說這個習慣已經建立起來了',
              cold: { en: 'Working out becomes a daily habit for me.', zh: '健身成為我的日常習慣。' },
              warm: { en: 'Working out has become a daily habit for me.', zh: '健身已經成為我的日常習慣。' },
              whyEn: 'The simple present describes a general truth — something that happens repeatedly, like “water boils at 100°C”. What you mean is that a change started at some point in the past and the result is still with you, and that is exactly what the present perfect is for.',
              whyZh: '現在簡單式描述的是一般性的事實——反覆發生的事，像「water boils at 100°C」。你要表達的是「某個時間點開始的改變，結果延續到現在」，而這正是現在完成式的用途。',
            },
            {
              caseEn: 'Saying you concentrated',
              caseZh: '說你保持專注',
              cold: { en: 'I stayed focus during the test.', zh: '考試的時候我保持專注。' },
              warm: { en: 'I stayed focused during the test.', zh: '考試的時候我保持專注。' },
              whyEn: '“Stay” is a linking verb here, like “be”, so what follows describes you rather than naming a thing: stay calm, stay safe, stay focused. “Focus” without the -ed is the noun or the verb — “my focus”, “I focus on it” — and neither fits the slot.',
              whyZh: '這裡的 stay 是連綴動詞，功能像 be，所以後面要接描述「你」的字，而不是一個名詞：stay calm、stay safe、stay focused。沒有 -ed 的 focus 是名詞或動詞——my focus、I focus on it——兩者都放不進這個位置。',
            },
            {
              caseEn: 'Saying how often',
              caseZh: '說多常發生',
              cold: { en: 'I train everyday.', zh: '我每天訓練。' },
              warm: { en: 'I train every day.', zh: '我每天訓練。' },
              whyEn: 'Two words is the time expression: I train every day. One word is an adjective meaning ordinary: my everyday camera, an everyday problem. If you can put “single” in the middle — every single day — it is two words.',
              whyZh: '分開寫是時間副詞：I train every day。合起來寫是形容詞，意思是「日常的、普通的」：my everyday camera、an everyday problem。判斷方法：如果中間可以插入 single（every single day），那就是分開寫的那個。',
            },
          ],
        },

        {
          t: 'part',
          n: 'B',
          en: 'The polished version',
          zh: '潤飾過的版本',
        },

        {
          t: 'summary',
          en: 'Today, I’d like to share the goals I set for myself this summer and reflect on the progress I have made. At the beginning of the summer, I had two main goals: to improve my physical condition and to prepare for the TOEIC exam. Earlier this year, I noticed that I had become thinner, so I decided to start working out regularly in order to become stronger and healthier. What surprised me most was how much my body changed in just two months. Exercise gradually became part of my daily routine, and now working out feels as natural to me as drinking water.',
          zh: '今天我想分享我這個暑假替自己設下的目標，並回顧這段時間的進步。暑假一開始，我有兩個主要目標：改善身體狀況，以及準備多益考試。今年年初，我注意到自己變瘦了，所以我決定開始規律健身，好讓自己變得更強壯、更健康。最讓我驚訝的是，我的身體在短短兩個月內改變了這麼多。運動逐漸成為我日常作息的一部分，現在健身對我來說，就像喝水一樣自然。',
        },

        {
          t: 'summary',
          en: 'My second goal was to prepare for the TOEIC exam. Since it was my first time taking the test, I felt quite nervous because I was unfamiliar with the format, rules, and overall process. However, once the exam started, I gradually became more focused and was able to complete most of the questions within the two-hour time limit. Looking back, I feel that these two months have been both productive and rewarding. Although I did not have any major travel plans or special activities, I spent my time developing healthier habits, challenging myself, and making steady progress. This experience has taught me that meaningful improvement does not always require dramatic changes; sometimes, small but consistent efforts can make a significant difference.',
          zh: '我的第二個目標是準備多益考試。因為這是我第一次參加這個考試，我感到相當緊張——它的題型、規則和整體流程，我都不熟悉。不過，考試一開始之後，我逐漸變得更專注，並且能在兩個小時的時間限制內完成大部分的題目。回頭看，我覺得這兩個月既充實又有收穫。雖然我沒有什麼重要的旅行計畫或特別的活動，但我把時間花在養成更健康的習慣、挑戰自己，以及穩定地進步上。這次經驗讓我明白：有意義的進步並不總是需要巨大的改變；有時候，小而持續的努力就能帶來顯著的不同。',
        },

        {
          t: 'note',
          en: 'What this version does that yours did not',
          zh: '這個版本做到了哪些你原本沒做到的事',
          bodyEn: 'It is not more difficult English — read it again and you will see there is almost no vocabulary in it you did not already know. What it does is signpost. It announces the structure in the first sentence (“the goals I set… and the progress I have made”), it numbers the goals, it marks the turn with “However”, and it closes by saying what the experience taught. Those signposts are what make a two-minute answer sound organised rather than remembered.',
          bodyZh: '它並不是比較難的英文——再讀一次你會發現，裡面幾乎沒有你不認識的單字。它做到的是「指路」。它在第一句就宣告了結構（the goals I set… and the progress I have made），把目標編號，用 However 標示轉折，最後說出這段經驗帶給他什麼體會。正是這些路標，讓一段兩分鐘的回答聽起來是有組織的，而不是背出來的。',
        },

        {
          t: 'mcq',
          en: 'Did you get it?',
          zh: '你讀懂了嗎？',
          hintEn: 'Eight questions on the polished version above. A wrong answer fades and the question stays open, so try again — nothing is scored and nothing is recorded.',
          hintZh: '關於上面那個潤飾版本的八個問題。答錯的選項會變淡，題目仍然開著，可以再試一次——不計分，也不會留下紀錄。',
          items: [
            {
              q: 'How many goals does the speaker name, and what are they?',
              qZh: '說話者提到幾個目標，分別是什麼？',
              options: [
                'Two — getting fitter and preparing for the TOEIC exam',
                'Three — fitness, the TOEIC exam and travel',
                'One — passing the TOEIC exam',
              ],
              answer: 0,
            },
            {
              q: 'Why did he decide to start working out?',
              qZh: '他為什麼決定開始健身？',
              options: [
                'A doctor advised him to',
                'He had noticed that he had become thinner',
                'A friend invited him to the gym',
              ],
              answer: 1,
            },
            {
              q: 'What surprised him most?',
              qZh: '最讓他驚訝的是什麼？',
              options: [
                'How difficult the TOEIC exam was',
                'How much his body changed in only two months',
                'How expensive the gym membership was',
              ],
              answer: 1,
            },
            {
              q: 'Why did he feel nervous before the exam?',
              qZh: '他為什麼在考試前感到緊張？',
              options: [
                'He had not studied at all',
                'He was unfamiliar with the format, rules and process',
                'He arrived late at the test centre',
              ],
              answer: 1,
            },
            {
              q: 'What happened once the exam actually started?',
              qZh: '考試真正開始之後發生了什麼？',
              options: [
                'He gradually became more focused',
                'He ran out of time completely',
                'He became more nervous than before',
              ],
              answer: 0,
            },
            {
              q: 'What does the last sentence claim about improvement?',
              qZh: '最後一句對「進步」提出了什麼看法？',
              options: [
                'It always requires a dramatic change',
                'It is mostly a matter of luck',
                'Small but consistent efforts can make a significant difference',
              ],
              answer: 2,
            },
            {
              q: 'The paragraph says “Although I did not have any major travel plans…”. Why mention that at all?',
              qZh: '這段話說「雖然我沒有什麼重要的旅行計畫……」。為什麼要提這件事？',
              options: [
                'To apologise for a boring summer',
                'To set up the point that a quiet summer can still be a productive one',
                'To explain why he had no money',
              ],
              answer: 1,
              why: {
                en: 'It is a concession: you name the thing your listener might hold against you, then turn it into your argument. “Although X, I still Y” is one of the most useful shapes in spoken English precisely because it sounds like honesty rather than defence.',
                zh: '這是一種「讓步」：先講出聽者可能拿來質疑你的那一點，再把它翻轉成你的論點。「Although X, I still Y」是英語口說裡最好用的句型之一，正是因為它聽起來是坦白，而不是辯解。',
              },
            },
            {
              q: 'Which sentence would fit best immediately after the final line, if you were asked to keep going?',
              qZh: '如果你被要求繼續講下去，哪一句最適合接在最後一句之後？',
              options: [
                'Anyway, that is all I want to say about my summer.',
                'So next semester, I plan to keep both habits going while my course load gets heavier.',
                'In conclusion, exercise is good for everybody.',
              ],
              answer: 1,
              why: {
                en: 'The first closes the door, and the third swaps your own experience for a slogan anyone could say. The second earns its place because it does what the paragraph has been doing all along — it stays specific to you and it looks forward, which gives the listener something to ask about.',
                zh: '第一句把門關上了，第三句則把你自己的經驗換成了一句誰都能說的口號。第二句之所以成立，是因為它延續了整段一直在做的事——內容具體、只有你講得出來，而且是往前看的，這會給聽的人一個可以追問的東西。',
              },
            },
          ],
        },

        {
          t: 'part',
          n: 'C',
          en: 'The collocations worth taking away',
          zh: '值得記下來的搭配詞',
        },

        {
          t: 'phrases',
          en: 'Goals and progress',
          zh: '目標與進步',
          items: [
            {
              en: 'set a goal',
              zh: '設定目標',
              eg: 'I set a goal to shoot one roll of film every month this year.',
              egZh: '我設定了一個目標：今年每個月拍完一卷底片。',
            },
            {
              en: 'make progress',
              zh: '取得進步',
              eg: 'I have made more progress in two months than I did in the whole of last year.',
              egZh: '這兩個月我的進步，比去年一整年還要多。',
            },
            {
              en: 'make steady progress',
              zh: '穩定進步',
              eg: 'My bench press is not going up quickly, but I am making steady progress.',
              egZh: '我的臥推重量上升得不快，但我在穩定進步。',
            },
            {
              en: 'challenge yourself',
              zh: '挑戰自己',
              eg: 'You have to challenge yourself if you want the training to keep working.',
              egZh: '如果你想讓訓練持續有效，就必須挑戰自己。',
            },
            {
              en: 'consistent effort',
              zh: '持續的努力',
              eg: 'Consistent effort matters more than motivation on any single day.',
              egZh: '持續的努力，比某一天的衝勁重要得多。',
            },
            {
              en: 'meaningful improvement',
              zh: '有意義的進步',
              eg: 'Meaningful improvement takes months, not days.',
              egZh: '有意義的進步需要幾個月，而不是幾天。',
            },
            {
              en: 'a dramatic change',
              zh: '巨大的改變',
              eg: 'You do not need a dramatic change to get a different result.',
              egZh: '你不需要巨大的改變，也能得到不一樣的結果。',
            },
            {
              en: 'make a significant difference',
              zh: '產生顯著的影響',
              eg: 'Ten extra minutes of stretching made a significant difference to my back.',
              egZh: '多做十分鐘的伸展，對我的背產生了顯著的影響。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'The body and the training',
          zh: '身體與訓練',
          items: [
            {
              en: 'improve your physical condition',
              zh: '改善身體狀況',
              eg: 'Regular exercise can improve your physical condition within a few weeks.',
              egZh: '規律運動可以在幾週內改善你的身體狀況。',
            },
            {
              en: 'work out regularly',
              zh: '規律健身',
              eg: 'He works out regularly, even during the exam period.',
              egZh: '他規律健身，就連考試期間也是。',
            },
            {
              en: 'become stronger and healthier',
              zh: '變得更強壯、更健康',
              eg: 'My goal was simply to become stronger and healthier.',
              egZh: '我的目標很單純，就是變得更強壯、更健康。',
            },
            {
              en: 'a daily routine',
              zh: '日常作息',
              eg: 'Training in the morning is now part of my daily routine.',
              egZh: '早上訓練，現在已經是我日常作息的一部分。',
            },
            {
              en: 'feel natural',
              zh: '感覺自然、習以為常',
              eg: 'Carrying a camera everywhere started to feel natural after a month.',
              egZh: '走到哪裡都帶著相機，過了一個月之後就開始覺得很自然了。',
            },
            {
              en: 'put on weight / put on muscle',
              zh: '增重／增肌',
              eg: 'I have put on four kilos of muscle since April.',
              egZh: '從四月到現在，我增加了四公斤的肌肉。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'The exam',
          zh: '考試',
          items: [
            {
              en: 'prepare for an exam',
              zh: '準備考試',
              eg: 'I spent two months preparing for the TOEIC exam.',
              egZh: '我花了兩個月準備多益考試。',
            },
            {
              en: 'take a test / take an exam',
              zh: '參加考試',
              eg: 'This was my first time taking the TOEIC exam.',
              egZh: '這是我第一次參加多益考試。',
            },
            {
              en: 'be unfamiliar with something',
              zh: '對某事不熟悉',
              eg: 'I was unfamiliar with the format, so the first section felt fast.',
              egZh: '我對題型不熟悉，所以第一大題感覺過得特別快。',
            },
            {
              en: 'the test format',
              zh: '考試題型／形式',
              eg: 'You should understand the test format before you sit the exam.',
              egZh: '在正式應考之前，你應該先了解考試的題型。',
            },
            {
              en: 'feel nervous',
              zh: '感到緊張',
              eg: 'I always feel nervous in the ten minutes before an exam starts.',
              egZh: '考試開始前的那十分鐘，我總是很緊張。',
            },
            {
              en: 'stay focused',
              zh: '保持專注',
              eg: 'It is difficult to stay focused for two hours without a break.',
              egZh: '中間不休息、連續專注兩個小時，是很困難的。',
            },
            {
              en: 'complete the questions',
              zh: '完成題目',
              eg: 'I managed to complete most of the questions.',
              egZh: '我設法完成了大部分的題目。',
            },
            {
              en: 'within the time limit',
              zh: '在時間限制內',
              eg: 'Everyone must finish within the two-hour time limit.',
              egZh: '每個人都必須在兩小時的時間限制內完成。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Looking back on it',
          zh: '回頭看',
          items: [
            {
              en: 'look back on something',
              zh: '回顧某事',
              eg: 'Looking back on this summer, I learned more than I expected to.',
              egZh: '回顧這個暑假，我學到的比原本預期的還多。',
            },
            {
              en: 'reflect on something',
              zh: '反思某事',
              eg: 'It is worth reflecting on why one habit stuck and the other did not.',
              egZh: '值得反思一下：為什麼有一個習慣留下來了，另一個卻沒有。',
            },
            {
              en: 'feel productive',
              zh: '覺得充實、有生產力',
              eg: 'I feel productive when I finish everything I planned for the day.',
              egZh: '當我完成當天所有計畫好的事，我就覺得很充實。',
            },
            {
              en: 'rewarding',
              zh: '有收穫的、值得的',
              eg: 'The two months were tiring, but genuinely rewarding.',
              egZh: '這兩個月很累，但真的很有收穫。',
            },
            {
              en: 'develop healthy habits',
              zh: '養成健康的習慣',
              eg: 'I spent the summer developing healthier habits instead of travelling.',
              egZh: '我沒有去旅行，而是把這個暑假用來養成更健康的習慣。',
            },
          ],
        },

        {
          t: 'match',
          en: 'Phrase and meaning',
          zh: '片語與意思',
          hintEn: 'Click a phrase on the left, then the meaning that belongs to it on the right.',
          hintZh: '先點左邊的片語，再點右邊對應的意思。',
          pairs: [
            { a: 'set a goal', b: 'decide on something you intend to achieve' },
            { a: 'be unfamiliar with', b: 'not know something well yet' },
            { a: 'stay focused', b: 'keep your attention on one thing' },
            { a: 'within the time limit', b: 'before the time allowed runs out' },
            { a: 'look back on', b: 'think about something that is now finished' },
            { a: 'consistent effort', b: 'work you keep doing at the same level' },
            { a: 'a dramatic change', b: 'a large and sudden difference' },
            { a: 'a daily routine', b: 'the things you do at the same time every day' },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the collocation',
          zh: '選出正確的搭配詞',
          hintEn: 'One of the three fits the sentence. Tap the Chinese for the situation if you want it.',
          hintZh: '三個選項中只有一個適合這個句子。想看情境的話，可以點開中文。',
          items: [
            {
              text: 'At the start of the summer I ___ two goals for myself.',
              textZh: '暑假一開始，我替自己設下了兩個目標。',
              options: ['set', 'made', 'built'],
              answer: 0,
              why: {
                en: '“Set a goal” is fixed. You can make a plan and build a habit, but goals are set — and “set” does not change form in the past, which is why this one is easy to miss when you are speaking.',
                zh: 'set a goal 是固定用法。你可以 make a plan、build a habit，但目標要用 set。而且 set 的過去式同形，所以在口說時特別容易被忽略。',
              },
            },
            {
              text: 'Because it was my first time, I was ___ the test format.',
              textZh: '因為那是我第一次應考，所以對考試的題型並不熟悉。',
              options: ['unfamiliar to', 'unfamiliar with', 'not familiar of'],
              answer: 1,
              why: {
                en: 'You are unfamiliar WITH a thing. “Unfamiliar to” exists but flips the direction — “the format was unfamiliar to me” — so both are correct English about the same situation, with the subject swapped.',
                zh: '人對某樣東西不熟悉，用 unfamiliar with。unfamiliar to 也存在，但方向相反——「the format was unfamiliar to me」——兩句都對，只是主詞換了。',
              },
            },
            {
              text: 'Once the exam started, I gradually became more ___.',
              textZh: '考試開始之後，我逐漸變得更專注。',
              options: ['focus', 'focusing', 'focused'],
              answer: 2,
              why: {
                en: 'After “become” and “stay” you need the -ed adjective: become focused, stay focused, get tired, become interested. This is the same repair the rewrite missed above.',
                zh: 'become 和 stay 後面要接 -ed 形容詞：become focused、stay focused、get tired、become interested。這正是上面改寫版沒改到的同一個問題。',
              },
            },
            {
              text: 'I finished most of the questions ___ the two-hour limit.',
              textZh: '我在兩個小時的限制內完成了大部分的題目。',
              options: ['within', 'inside', 'under'],
              answer: 0,
              why: {
                en: '“Within the time limit” is the set phrase for deadlines and durations. “Under” works with a number — “I finished in under two hours” — but not with the word “limit”.',
                zh: '談期限和時間長度，固定用 within the time limit。under 可以接數字——「I finished in under two hours」——但不能接 limit 這個字。',
              },
            },
            {
              text: 'Exercise gradually became part of my daily ___.',
              textZh: '運動逐漸成為我日常作息的一部分。',
              options: ['habit', 'routine', 'schedule'],
              answer: 1,
              why: {
                en: '“Part of my daily routine” is the natural phrase for the shape of a whole day. A habit is one behaviour, and a schedule sounds like a written timetable someone could check.',
                zh: '談「一整天的樣子」，自然的說法是 part of my daily routine。habit 指單一行為，schedule 則聽起來像一份可以拿出來查的書面時間表。',
              },
            },
            {
              text: 'Small but consistent efforts can ___ a significant difference.',
              textZh: '小而持續的努力能夠帶來顯著的不同。',
              options: ['do', 'take', 'make'],
              answer: 2,
              why: {
                en: '“Make a difference” is fixed, and it is worth over-learning because “do” feels right to Chinese speakers here. Compare: make a mistake, make progress, make an effort — all “make”.',
                zh: 'make a difference 是固定用法，值得多練幾次，因為中文母語者在這裡會直覺想用 do。一起記：make a mistake、make progress、make an effort——全部都用 make。',
              },
            },
          ],
        },

        {
          t: 'part',
          n: 'D',
          en: 'Five patterns you can reuse',
          zh: '五個可以重複使用的句型',
        },

        {
          t: 'lead',
          en: 'Learn these as whole chunks rather than as grammar. Each one is a container you can pour any subject into — this summer, a photo you took, a job interview next year.',
          zh: '把這些當作「整塊」記起來，而不是當文法學。每一個都是一個框架，什麼主題都能套進去——這個暑假、你拍的一張照片、明年的面試。',
        },

        {
          t: 'phrases',
          en: 'Sentence patterns',
          zh: '句型',
          items: [
            {
              en: 'What surprised me most was…',
              zh: '最讓我驚訝的是……',
              eg: 'What surprised me most was how much my body changed in two months.',
              egZh: '最讓我驚訝的是，我的身體在兩個月內改變了這麼多。',
            },
            {
              en: 'Since it was my first time + V-ing, …',
              zh: '因為這是我第一次……',
              eg: 'Since it was my first time taking the test, I felt quite nervous.',
              egZh: '因為這是我第一次參加這個考試，我感到相當緊張。',
            },
            {
              en: 'Looking back, I feel that…',
              zh: '回頭看，我覺得……',
              eg: 'Looking back, I feel that these two months were genuinely rewarding.',
              egZh: '回頭看，我覺得這兩個月真的很有收穫。',
            },
            {
              en: 'Although…, …',
              zh: '雖然……，但是……',
              eg: 'Although I did not travel anywhere, I still had a productive summer.',
              egZh: '雖然我沒有去任何地方旅行，但還是度過了一個充實的暑假。',
            },
            {
              en: 'Small but consistent efforts can…',
              zh: '小而持續的努力可以……',
              eg: 'Small but consistent efforts can lead to big improvements.',
              egZh: '小而持續的努力可以帶來很大的進步。',
            },
          ],
        },

        {
          t: 'gap',
          en: 'Finish the pattern',
          zh: '把句型補完',
          hintEn: 'The same five containers, one word missing from each. The Chinese below gives you the whole sentence if you want the situation.',
          hintZh: '同樣是那五個句型，每一句少一個字。想看情境的話，下方的中文會給你完整的句子。',
          items: [
            {
              text: 'What surprised me most ___ how quickly I improved.',
              textZh: '最讓我驚訝的是，我進步得這麼快。',
              options: ['was', 'were', 'is being'],
              answer: 0,
              why: {
                en: 'The whole “what…” clause is one singular subject, so it takes “was”, no matter how many things follow it. “What surprised me most was the people” is correct too.',
                zh: '整個 what… 子句是一個單數主詞，所以用 was，不管後面接了幾樣東西。「What surprised me most was the people」也是對的。',
              },
            },
            {
              text: 'Since it was my first time ___ the test, I felt nervous.',
              textZh: '因為這是我第一次參加這個考試，我感到緊張。',
              options: ['to take', 'taking', 'take'],
              answer: 1,
              why: {
                en: 'After “my first time”, English uses the -ing form: my first time flying, my first time living alone, my first time shooting in the rain.',
                zh: 'my first time 後面用 -ing：my first time flying、my first time living alone、my first time shooting in the rain。',
              },
            },
            {
              text: '___ back, I feel that the whole summer was worth it.',
              textZh: '回頭看，我覺得整個暑假都是值得的。',
              options: ['Look', 'Looked', 'Looking'],
              answer: 2,
              why: {
                en: '“Looking back” is a set opener — a participle phrase that frames the sentence rather than commanding anyone. “Look back” would be an instruction to your listener.',
                zh: 'Looking back 是固定的開場說法，是一個替句子定調的分詞片語，而不是在命令誰。Look back 會變成在叫聽的人「回頭看」。',
              },
            },
            {
              text: '___ I did not travel anywhere, I still had a productive summer.',
              textZh: '雖然我沒有去任何地方旅行，但還是度過了一個充實的暑假。',
              options: ['Although', 'But', 'However'],
              answer: 0,
              why: {
                en: '“Although” joins two clauses inside one sentence. “However” needs its own sentence and a full stop before it, and English never uses 雖然…但是… as a pair the way Chinese does — one connector per sentence.',
                zh: 'Although 把兩個子句連在同一句裡。However 前面需要句點、自成一句。另外英文不像中文有「雖然……但是……」的成對用法——一句話只用一個連接詞。',
              },
            },
            {
              text: 'Small but consistent efforts can ___ to big improvements.',
              textZh: '小而持續的努力可以帶來很大的進步。',
              options: ['lead', 'bring', 'cause'],
              answer: 0,
              why: {
                en: '“Lead to” is the natural verb for a slow result over time. “Bring” needs an object without “to”, and “cause” is almost always used for something bad.',
                zh: '談「長時間慢慢產生的結果」，自然的動詞是 lead to。bring 後面直接接受詞、不加 to；而 cause 幾乎都用在不好的事情上。',
              },
            },
          ],
        },

        {
          t: 'part',
          n: 'E',
          en: 'Atomic Habits: five questions',
          zh: '《原子習慣》：五個問題',
        },

        {
          t: 'note',
          en: 'Where this comes from',
          zh: '這些問題的出處',
          bodyEn: 'You described building a habit, so the natural next step is James Clear’s Atomic Habits, which is about exactly that. Four of its ideas are enough for our purposes: identity-based habits (become the kind of person who trains, rather than trying to train), the 1% rule (small gains compound), make it easy (shrink the habit until starting is trivial), and environment design (change the room, not your willpower). The fifth question is the one worth spending the most time on.',
          bodyZh: '你描述的是「建立一個習慣」的過程，那麼很自然的下一步，就是 James Clear 的《原子習慣》，因為那本書談的正是這件事。對我們來說，四個概念就夠了：身分認同型習慣（成為「會訓練的那種人」，而不是逼自己去訓練）、1% 法則（微小的進步會複利累積）、讓行動輕而易舉（把習慣縮小到「開始」幾乎不費力）、以及環境設計（改變房間，而不是改變意志力）。第五個問題，是最值得花時間談的。',
        },

        {
          t: 'cards',
          en: 'Audit one habit',
          zh: '盤點一個習慣',
          hintEn: 'Pick one habit you want to keep — the gym, the studying, editing photos, sleeping earlier. For each line, say whether it is already true of that habit or still missing. There is no right answer and nothing is recorded.',
          hintZh: '挑一個你想維持的習慣——健身、讀書、修照片、早點睡。針對每一項，說說看這個習慣已經做到了，還是還沒做到。沒有標準答案，也不會留下任何紀錄。',
          haveEn: 'Already true',
          haveZh: '已經做到',
          needEn: 'Still missing',
          needZh: '還沒做到',
          items: [
            {
              icon: '🪪',
              en: 'It matches who you think you are',
              zh: '它符合你心目中的自己',
              descEn: 'You would describe yourself as someone who does this, not someone trying to.',
              descZh: '你會說自己「就是做這件事的人」，而不是「正在努力做這件事的人」。',
            },
            {
              icon: '👀',
              en: 'The cue is obvious',
              zh: '提示顯而易見',
              descEn: 'Something in your day or your room reminds you without you having to remember.',
              descZh: '你的作息或房間裡有某樣東西會提醒你，不必靠自己記得。',
            },
            {
              icon: '🪶',
              en: 'Starting is easy',
              zh: '開始輕而易舉',
              descEn: 'The first step is small enough that you would do it on a bad day.',
              descZh: '第一步小到就算狀態很差的那一天，你也還是會做。',
            },
            {
              icon: '🎉',
              en: 'Finishing feels good',
              zh: '做完會有成就感',
              descEn: 'There is something satisfying at the end, even if it is only ticking it off.',
              descZh: '結束的時候有某種滿足感，就算只是打個勾也好。',
            },
            {
              icon: '🏠',
              en: 'Your environment helps',
              zh: '環境幫得上忙',
              descEn: 'Your bag, your desk or your route makes the habit easier rather than harder.',
              descZh: '你的包包、書桌或每天走的路線，讓這個習慣變得比較容易，而不是比較難。',
            },
            {
              icon: '⚙️',
              en: 'There is a system, not just a goal',
              zh: '你有一套系統，而不只是一個目標',
              descEn: 'You know what you do each week, not only what you want to end up with.',
              descZh: '你知道自己每週要做什麼，而不只是知道自己最後想得到什麼。',
            },
          ],
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的看法是？',
          hintEn: 'No right answers. Pick one and be ready to say why — that sentence is the exercise.',
          hintZh: '沒有標準答案。選一個，並準備好說明理由——那句理由才是真正的練習。',
          items: [
            {
              en: 'Motivation is overrated; a fixed time in the day matters far more.',
              zh: '動力被高估了；一天當中有一個固定的時間，重要得多。',
            },
            {
              en: 'A goal you tell other people about is more likely to happen.',
              zh: '一個你告訴別人的目標，比較可能真的實現。',
            },
            {
              en: 'If a habit needs willpower after a month, you have designed it badly.',
              zh: '如果一個習慣過了一個月還需要靠意志力，那就是你設計得不好。',
            },
            {
              en: 'Two months is long enough to say a habit is really yours.',
              zh: '兩個月已經足以說一個習慣真的屬於你了。',
            },
            {
              en: 'I would rather improve slowly at three things than quickly at one.',
              zh: '比起在一件事上快速進步，我寧願在三件事上慢慢進步。',
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk it through',
          zh: '一起討論',
          items: [
            {
              en: 'James Clear says habits are easier to keep when they become part of your identity. What kind of person do you want to become, and what small habit would support that?',
              zh: 'James Clear 認為，當一個習慣成為自我認同的一部分時，就更容易維持。你想成為什麼樣的人？有什麼小習慣可以支撐這個身分？',
              starters: [
                { en: 'I want to become the kind of person who…', zh: '我想成為那種會……的人。' },
                { en: 'The habit that would prove it to myself is…', zh: '能向我自己證明這件事的習慣是……' },
                { en: 'Right now I would describe myself as someone who…', zh: '現在的我，會形容自己是一個……的人。' },
              ],
            },
            {
              en: 'The book argues that improving by 1% a day adds up to something large over a year. Where in your life would small improvements make the biggest difference?',
              zh: '書中提到，每天進步 1%，長期下來會累積成很大的成果。你生活中的哪一個領域，透過小幅度的進步就能產生最大的改變？',
              starters: [
                { en: 'The obvious one is…, because…', zh: '最明顯的是……，因為……' },
                { en: 'One percent for me would look like…', zh: '對我來說，1% 大概會是……的樣子。' },
                { en: 'It would add up over time because…', zh: '它會隨著時間累積起來，因為……' },
              ],
            },
            {
              en: 'Think of a habit you tried to build and did not keep. Why was it difficult, and how could you make it easier to continue?',
              zh: '想一個你曾經想養成、但最後沒有維持下來的習慣。你覺得為什麼失敗了？你可以如何讓它更容易持續？',
              starters: [
                { en: 'I tried to… but I stopped after about…', zh: '我試過……，但大概……之後就停了。' },
                { en: 'Looking back, the real obstacle was…', zh: '回頭看，真正的阻礙是……' },
                { en: 'Instead of an hour, I could start with just…', zh: '與其一次做一小時，我可以先從……開始。' },
              ],
            },
            {
              en: 'How does your environment shape what you do — your phone, your room, your desk, the gym, the route you walk to class?',
              zh: '你的環境如何影響你的行為——手機、房間、書桌、健身房，還有你走去上課的那條路？',
              starters: [
                { en: 'The biggest distraction in my room is…', zh: '我房間裡最大的干擾是……' },
                { en: 'I am much more likely to train when…', zh: '當……的時候，我去訓練的機率高很多。' },
                { en: 'If I moved… , I think I would…', zh: '如果我把……移開，我想我就會……' },
              ],
            },
            {
              en: 'Which matters more: setting an ambitious goal, or building a good system? Take a goal you have now and describe the system that would get you there.',
              zh: '設定有企圖心的目標與建立良好的系統，哪一個比較重要？舉一個你現在的目標，描述一套能幫你達成它的系統。',
              starters: [
                { en: 'The goal is…, but the system would be…', zh: '目標是……，但系統會是……' },
                { en: 'I think the system matters more, because a goal only tells you…', zh: '我認為系統比較重要，因為目標只告訴你……' },
                { en: 'What I actually do every week is…', zh: '我每個星期實際上做的事情是……' },
              ],
            },
          ],
        },

        {
          t: 'note',
          en: 'Why question five is the one to sit with',
          zh: '為什麼第五題最值得停下來談',
          bodyEn: 'Most people your age talk about outcomes: a higher TOEIC score, a certain body weight, a better job. Atomic Habits replaces that question with a more useful one — what system would make this result likely? A goal is a scoreboard, and you can look at a scoreboard all day without moving. A system is what you do on Tuesday. The English worth noticing here is the difference between “I want to…” and “Every week I…”: the first describes a wish, the second describes a person.',
          bodyZh: '和你同年紀的人多半在談結果：更高的多益分數、某個體重數字、更好的工作。《原子習慣》把這個問題換成一個更有用的問題——什麼樣的系統會讓這個結果更可能發生？目標是計分板，而你可以盯著計分板一整天，卻一步也沒有前進。系統則是你星期二實際會做的事。這裡值得注意的英文，是「I want to…」和「Every week I…」的差別：前者描述一個願望，後者描述一個人。',
        },

        {
          t: 'task',
          en: 'Say it again, better',
          zh: '再說一次，說得更好',
          instructionEn: 'Talk for about ninety seconds on one of these prompts. Use at least three phrases from the tick-list, and open with one of the five patterns from Part D. Do not read off the cards — if you need to look, stop, look, then start the sentence again.',
          instructionZh: '從以下題目選一個，說大約九十秒。至少用上「目標片語」裡的三個，開場請用 D 部分那五個句型的其中一個。不要照著字卡唸——如果需要看，就先停下來看，再重新把那句話說一次。',
          prompts: [
            {
              en: 'Tell the story of your summer again, from the beginning, in two minutes.',
              zh: '重新從頭把你這個暑假的故事說一次，兩分鐘。',
            },
            {
              en: 'Describe the habit you are proudest of building, and what nearly stopped it.',
              zh: '描述一個你最引以為傲、自己建立起來的習慣，以及什麼事情差點讓它中斷。',
            },
            {
              en: 'Explain to a friend how you would prepare for the TOEIC exam if you were starting again tomorrow.',
              zh: '向朋友說明：如果明天要重新開始，你會怎麼準備多益考試。',
            },
            {
              en: 'Describe a photograph you took this summer and why you kept it.',
              zh: '描述你這個暑假拍的一張照片，以及你為什麼留下它。',
            },
            {
              en: 'Argue for one side: ambitious goals, or a good system.',
              zh: '選一邊站，替它說出理由：有企圖心的目標，還是一套好的系統。',
            },
          ],
          checklist: [
            { en: 'set a goal', zh: '設定目標' },
            { en: 'make steady progress', zh: '穩定進步' },
            { en: 'work out regularly', zh: '規律健身' },
            { en: 'part of my daily routine', zh: '我日常作息的一部分' },
            { en: 'be unfamiliar with', zh: '對……不熟悉' },
            { en: 'stay focused', zh: '保持專注' },
            { en: 'within the time limit', zh: '在時間限制內' },
            { en: 'looking back', zh: '回頭看' },
            { en: 'consistent effort', zh: '持續的努力' },
            { en: 'make a significant difference', zh: '產生顯著的影響' },
          ],
          frames: [
            {
              en: 'At the beginning of the summer, I had two main goals.',
              zh: '暑假一開始，我有兩個主要目標。',
            },
            {
              en: 'I decided to start working out regularly in order to become stronger.',
              zh: '我決定開始規律健身，好讓自己變得更強壯。',
            },
            {
              en: 'What surprised me most was how much changed in just two months.',
              zh: '最讓我驚訝的是，短短兩個月內改變了這麼多。',
            },
            {
              en: 'Since it was my first time taking the test, I felt quite nervous.',
              zh: '因為這是我第一次參加這個考試，我感到相當緊張。',
            },
            {
              en: 'Working out has become a daily habit for me, just like drinking water.',
              zh: '健身已經成為我的日常習慣，就像喝水一樣。',
            },
            {
              en: 'Looking back, I feel that these two months were both productive and rewarding.',
              zh: '回頭看，我覺得這兩個月既充實又有收穫。',
            },
            {
              en: 'Although I did not travel anywhere, I still made steady progress.',
              zh: '雖然我沒有去旅行，但還是穩定地進步了。',
            },
            {
              en: 'Small but consistent efforts can make a significant difference.',
              zh: '小而持續的努力可以產生顯著的影響。',
            },
          ],
        },

        {
          t: 'quote',
          en: 'Meaningful improvement does not always require dramatic changes.',
          zh: '有意義的進步，並不總是需要巨大的改變。',
          by: 'the closing idea of your own paragraph 你自己那段話的結語',
        },
      ],
    },

    {
      id: 's2',
      n: 2,
      dateEn: '26 August 2026',
      dateZh: '2026 年 8 月 26 日',
      en: 'Weight is not the whole story: body recomposition',
      zh: '體重不是全部：談身體重組',

      focus: [
        { en: 'What recomposition is', zh: '什麼是身體重組' },
        { en: 'Weight loss vs. fat loss', zh: '減重與減脂的差別' },
        { en: 'Protein, calories, training', zh: '蛋白質、熱量、訓練' },
        { en: 'What research can and cannot say', zh: '研究能說與不能說的話' },
        { en: 'Saying a claim carefully', zh: '把一個主張講得準確' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'A discussion built on a nine-minute Huberman Lab clip with the nutrition researcher Alan Aragon, on whether you can gain muscle and lose fat at the same time. The subject is your own training, so the vocabulary is worth having — but the more useful half of this hour is the language the researchers use to avoid saying more than they know.',
          zh: '這一堂課的材料，是 Huberman Lab 一段九分鐘的影片，來賓是營養研究者 Alan Aragon，談的是「能不能同時增肌又減脂」。主題正好是你自己的訓練，所以這些字彙很值得學——但這一個小時更有用的一半，是研究者用來「不把話說得比自己知道的還滿」的那套語言。',
        },

        {
          t: 'note',
          en: 'What this page is, and what it is not',
          zh: '這一頁是什麼，不是什麼',
          bodyEn: 'This is an English lesson about how people talk and write about training and nutrition. It is a record of what the clip and the summary said, not a check on whether the science is right — the studies are named so you can go and read them yourself. Nothing here is a nutrition plan. The protein numbers you will see below are the intakes used in particular studies, not a target for you; for a figure that fits your own body and training, ask a doctor or a registered dietitian.',
          bodyZh: '這是一堂英文課，學的是人們談論訓練與營養時所使用的語言。它記錄的是那段影片和那份摘要「說了什麼」，並不是在確認這些科學結論對不對——文中會標出研究名稱，你可以自己去讀原文。這一頁上沒有任何飲食計畫。下面會出現的蛋白質數字，是特定研究裡採用的攝取量，不是給你的目標；想知道適合你自己身體和訓練的數字，請問醫師或營養師。',
        },

        {
          t: 'part',
          n: 'A',
          en: 'The idea',
          zh: '這個概念',
        },

        {
          t: 'summary',
          en: 'Body recomposition means two things happening at once: muscle mass going up while fat mass goes down. The traditional bodybuilding model says the two need separate phases — eat above maintenance to build, eat below it to cut — because one needs spare energy and the other needs a shortage of it. The claim in this clip is that the separation is not absolute.',
          zh: '身體重組（body recomposition）指的是兩件事同時發生：肌肉量上升，脂肪量下降。傳統健美的做法認為這兩件事必須分成兩個階段——增肌時吃得比維持熱量多，減脂時吃得比維持熱量少——因為一個需要多餘的能量，另一個需要能量不足。這段影片的主張是：這條界線並不是絕對的。',
        },

        {
          t: 'summary',
          en: 'The evidence Aragon points to is a 2020 review by Barakat and colleagues, which found recomposition happening in people who already had training experience — not only in beginners and not only in people with obesity. In roughly seven of the ten studies discussed, participants gained more lean mass than the fat they lost, which means total body weight sometimes went up while body fat went down. The review names two main drivers: progressive resistance training, and nutrition set up to support it.',
          zh: 'Aragon 引用的證據是 Barakat 等人在 2020 年的一篇文獻回顧，該研究發現身體重組也會發生在已經有訓練經驗的人身上——不只是初學者，也不只是肥胖者。在所討論的十篇研究中，大約有七篇的受試者「增加的肌肉量」多於「減少的脂肪量」，也就是說，體脂下降的同時，總體重有時反而上升。這篇回顧指出兩個主要因素：漸進式的阻力訓練，以及為此設計的營養攝取。',
        },

        {
          t: 'note',
          en: 'Weight loss and fat loss are not the same thing',
          zh: '減重和減脂不是同一件事',
          bodyEn: 'This is the sentence to take away from the whole hour. Imagine someone who weighs 90 kg, trains for several months, and weighs 90 kg at the end. The scale says nothing happened. Underneath, fat is down three kilos and lean mass is up three. That is a serious change, and the one number most people track is the one number that cannot see it. The useful question is not “how much weight did I lose?” but “what did I lose, and what did I keep?”',
          bodyZh: '這是整堂課最值得帶走的一句話。想像一個人體重 90 公斤，訓練了好幾個月，最後量起來還是 90 公斤。體重計說什麼都沒發生。但在底下，脂肪少了三公斤，肌肉多了三公斤。那是很大的改變，而大多數人唯一在追蹤的那個數字，恰好就是看不到這件事的數字。真正該問的不是「我瘦了幾公斤」，而是「我掉的是什麼？我留下了什麼？」',
        },

        {
          t: 'summary',
          en: 'Huberman asks the obvious follow-up: does the fat loss half require eating below maintenance? Aragon says not necessarily. Someone attempting a recomp could eat around maintenance, or even a little above it, provided the other conditions are in place — hard resistance training above all, and a high protein intake. For the person he sketches, that means a judicious surplus of about ten percent, which for many people is something like two to three hundred calories a day.',
          zh: 'Huberman 接著問了最直接的問題：想要減脂，是不是一定得吃得比維持熱量少？Aragon 的回答是「不一定」。想做身體重組的人，可以吃在維持熱量附近，甚至略高一點，前提是其他條件都到位——最重要的是紮實的阻力訓練，以及高蛋白攝取。以他描述的那個對象來說，大約是抓十％左右的「有節制的盈餘」，對很多人而言差不多就是每天多兩三百大卡。',
        },

        {
          t: 'note',
          en: 'Read that claim slowly',
          zh: '把這個主張讀慢一點',
          bodyEn: 'It would be easy, and wrong, to turn the paragraph above into “eating more calories burns fat”. That is not what is being said. The proposition is narrower: if the training gives a strong enough signal to build muscle, and if most of the extra energy arrives as protein, then the outcome may look different from simply eating more carbohydrate and fat. Notice how many conditions that sentence carries. Stripping them out is exactly how a research finding becomes an internet headline.',
          zh: '要把上面那一段講成「多吃熱量就能減脂」很容易，但那是錯的。它說的不是這個。真正的主張窄得多：如果訓練給出的「長肌肉」訊號夠強，而且多出來的能量大部分來自蛋白質，那麼結果可能會和「單純多吃碳水和脂肪」不一樣。注意這句話帶了多少前提條件。把這些條件拿掉，正是一項研究結果變成一則網路標題的過程。',
        },

        {
          t: 'summary',
          en: 'Protein is the centrepiece of the argument. Aragon notes that many of the successful recomposition studies had one thing in common: a very high protein intake, in the region of one to one and a half grams per pound of body weight — roughly 2.2 to 3.3 grams per kilo a day. That is well above what is needed to avoid deficiency, and above what most lifters need to maximise muscle growth. Huberman reduces it to a rule that is easy to act on: if you are going to add calories, make them high-quality protein.',
          zh: '蛋白質是整個論點的核心。Aragon 指出，許多成功做到身體重組的研究都有一個共同點：蛋白質攝取量非常高，大約是每磅體重一到一點五公克——換算下來，每公斤體重每天大約 2.2 到 3.3 公克。這遠高於「不缺乏」所需要的量，也高於大多數重訓者「把肌肉成長拉到最大」所需要的量。Huberman 把它濃縮成一條可以直接執行的原則：如果你要多吃熱量，就讓那些熱量是優質蛋白質。',
        },

        {
          t: 'summary',
          en: 'The studies behind that rule come mostly from Jose Antonio and colleagues, working with people who already lift. In one, a group ate about 4.4 grams of protein per kilo a day — far more protein and far more total calories than the comparison group — and showed no significant increase in fat mass. In others, participants were told to keep eating as they normally do and simply add fifty to a hundred grams of protein a day: an extra chicken breast, some whey, a few more eggs. The fat gain you would expect from that much extra energy largely did not appear, and in some cases fat mass went down.',
          zh: '支持這條原則的研究，多半來自 Jose Antonio 等人，對象是已經有重訓習慣的人。其中一項研究裡，有一組每公斤體重每天吃到大約 4.4 公克蛋白質——蛋白質和總熱量都遠高於對照組——結果脂肪量並沒有顯著增加。另外幾項研究則是請受試者維持原本的飲食，只多加每天五十到一百公克的蛋白質：多一塊雞胸、一些乳清、幾顆蛋。照理說多出這麼多熱量應該會增加的脂肪，大致上並沒有出現，在某些研究裡脂肪量甚至還下降了。',
        },

        {
          t: 'summary',
          en: 'Why might extra protein behave differently from extra energy? Aragon offers four possibilities and is careful to call them possibilities. Protein is very filling, so adding a lot of it may quietly push other food out — the real surplus ends up smaller than it looks on paper. Protein also costs more energy to digest and process than carbohydrate or fat, so four hundred calories of protein and four hundred calories of fat are not metabolically the same arrival. Eating more may let people train harder and recover better. And people may simply move more during the day without noticing, which has a name of its own: non-exercise activity thermogenesis, or NEAT.',
          zh: '為什麼多吃蛋白質，表現會和多吃熱量不一樣？Aragon 提出四種可能，而且很小心地把它們稱為「可能」。第一，蛋白質很有飽足感，所以刻意多吃蛋白質，可能會不知不覺把其他食物擠掉——實際的熱量盈餘，比紙上算出來的小。第二，身體消化與處理蛋白質所耗掉的能量，比碳水或脂肪高，所以四百大卡的蛋白質和四百大卡的脂肪，在代謝上並不是同一回事。第三，吃得多一點，可能讓人練得更兇、恢復得更好。第四，人可能只是不自覺地在一天當中動得比較多，而這件事有自己的名字：非運動性活動產熱，簡稱 NEAT。',
        },

        {
          t: 'summary',
          en: 'Then Aragon does something worth copying: he points out the weakness in his own evidence. Most of these are free-living studies. Nobody is watching the participants for twenty-four hours a day, so the food record is what people say they ate, and self-reported diet data are famously unreliable. Someone told to add a hundred grams of protein reports adding a hundred grams of protein — and may not report the dessert they stopped wanting. He has a name for the other half of the problem, the “good pupil phenomenon”: people over-report the behaviour the researcher asked for and under-report the rest.',
          zh: '接著 Aragon 做了一件值得學起來的事：他主動指出自己所引用的證據有什麼弱點。這些研究大多是「自由生活型研究」——沒有人二十四小時盯著受試者，所以飲食紀錄是「受試者說自己吃了什麼」，而自陳式的飲食資料，不可靠是出了名的。一個被要求「多吃一百公克蛋白質」的人，會回報自己多吃了一百公克蛋白質——卻不一定會回報那份他後來不太想吃的甜點。這個問題的另一半，他也給了名字，叫「好學生現象」：人們會高估自己配合研究者的程度，而低估其他部分。',
        },

        {
          t: 'summary',
          en: 'To make the point properly he then brings in a study that cuts against him. Bray and colleagues, 2012, kept participants inside a tightly controlled metabolic facility, where the food really is measured. They were deliberately overfed by about 954 calories a day — roughly forty percent above maintenance — on diets of five, fifteen or twenty-five percent protein. Crucially, there was no exercise programme. Everyone gained fat. The normal- and high-protein groups did gain considerably more lean mass than the very-low-protein group, but nobody escaped the surplus.',
          zh: '為了把話說完整，他接著拿出一篇對自己不利的研究。Bray 等人在 2012 年的研究，把受試者放在嚴格控管的代謝實驗室裡，食物是真的量過的。研究刻意讓他們每天多吃大約 954 大卡——比維持熱量高出約四成——飲食中蛋白質分別佔五％、十五％、二十五％。關鍵是：這項研究沒有安排任何運動。結果所有人都增加了脂肪。蛋白質正常與偏高的兩組，確實比極低蛋白組增加了明顯更多的肌肉量，但沒有人躲得過那些多吃的熱量。',
        },

        {
          t: 'contrast',
          en: 'The same protein, two different situations',
          zh: '同樣的蛋白質，兩種不同情境',
          hintEn: 'Put the two experiments side by side and the argument stops being about protein. Protein is in both columns; what changes is whether anything is asking the body to build muscle.',
          hintZh: '把這兩組實驗並排來看，這個論點就不再是在講蛋白質了。兩邊都有蛋白質，改變的是「有沒有東西在要求身體去長肌肉」。',
          coldEn: 'Without training',
          coldZh: '沒有訓練',
          warmEn: 'With training',
          warmZh: '有訓練',
          items: [
            {
              caseEn: 'What the study did',
              caseZh: '研究怎麼做的',
              cold: {
                en: 'Participants were overfed by about forty percent above maintenance, with no exercise programme at all.',
                zh: '受試者被刻意多吃到比維持熱量高出約四成，而且完全沒有安排運動課表。',
              },
              warm: {
                en: 'Participants lifted progressively, three or four times a week, and ate around maintenance or slightly above it.',
                zh: '受試者每週做三到四次漸進式的重量訓練，吃在維持熱量附近或略高一點。',
              },
              whyEn: 'The energy is not the only difference and it is not the interesting one. In the second column something is repeatedly telling the body that the muscle is needed. In the first, nothing is.',
              whyZh: '兩邊的差別不只是熱量，而且熱量也不是重點。在右邊那一欄，有某樣東西反覆在告訴身體「這些肌肉是需要的」；在左邊那一欄，沒有。',
            },
            {
              caseEn: 'What happened to fat mass',
              caseZh: '脂肪量怎麼變化',
              cold: {
                en: 'Everybody gained fat, including the high-protein group.',
                zh: '所有人都增加了脂肪，包括高蛋白那一組。',
              },
              warm: {
                en: 'Fat mass often stayed flat, and in several studies it fell.',
                zh: '脂肪量多半沒有明顯變化，在好幾項研究裡甚至還下降了。',
              },
              whyEn: 'This is the sentence that stops the clip being read as “calories do not matter”. A large enough surplus produces fat gain whatever the protein does.',
              whyZh: '正是這一句話，讓這段影片不能被讀成「熱量不重要」。只要盈餘夠大，不管蛋白質怎麼吃，脂肪都會增加。',
            },
            {
              caseEn: 'What the protein did',
              caseZh: '蛋白質起了什麼作用',
              cold: {
                en: 'The higher-protein groups still gained more lean mass than the very-low-protein group.',
                zh: '蛋白質較高的那幾組，肌肉量還是比極低蛋白組增加得多。',
              },
              warm: {
                en: 'The high protein appeared to support the muscle that the training was already asking for.',
                zh: '高蛋白看起來是在支援訓練「本來就在要求」的那些肌肉。',
              },
              whyEn: 'Protein is not doing nothing in the left-hand column — it is doing the same job in both. What it cannot do on its own is supply the reason to build.',
              whyZh: '在左邊那一欄，蛋白質並不是毫無作用——它在兩邊做的其實是同一件事。它自己做不到的，是提供「為什麼要長肌肉」的理由。',
            },
          ],
        },

        {
          t: 'summary',
          en: 'So the training is the switch, and it has to be real training. The programme Huberman sketches is resistance work three or four times a week, with sets taken close enough to failure to mean something, alongside cardio about three times a week — mostly Zone 2, with some harder work or sprints now and then. Resistance training and cardio are not competing here: one supplies the signal to build, the other raises energy expenditure and conditioning.',
          zh: '所以訓練才是那個開關，而且必須是真的在練。Huberman 描述的課表是每週三到四次阻力訓練，每一組都要練到夠接近力竭、有意義的程度，另外每週大約三次有氧——主要是心率二區，偶爾加一些強度較高的或衝刺。在這裡，重訓和有氧並不互相衝突：一個提供「長肌肉」的訊號，另一個提高熱量消耗與心肺能力。',
        },

        {
          t: 'summary',
          en: 'Two practical notes close the clip, and both take pressure off. Total protein across the day matters more than the exact hour you eat it, so the “anabolic window” is not something to organise your life around. And training fasted or fed is not the deciding factor either. What decides it is total daily nutrition, total protein, the quality of the training, recovery and consistency — all things you can hold steady across a semester that does not always let you eat at the same time every day.',
          zh: '影片最後有兩個實用的提醒，而且兩個都是在幫人卸下壓力。第一，一整天的蛋白質總量，比你到底幾點吃下去更重要，所以不必為了「合成代謝黃金期」去安排整個生活。第二，空腹練還是吃過再練，也不是決定性的因素。真正決定結果的是每日總營養、蛋白質總量、訓練品質、恢復，以及持續性——這些全都是你在一個沒辦法每天固定時間吃飯的學期裡，還能穩定維持的東西。',
        },

        {
          t: 'quote',
          en: 'Assess success through body composition and performance, not merely scale weight.',
          zh: '用身體組成和運動表現來評估成果，而不是只看體重計上的數字。',
          by: 'the practical takeaway of the discussion 這次討論最實用的結論',
        },

        {
          t: 'mcq',
          en: 'Did you get it?',
          zh: '你讀懂了嗎？',
          hintEn: 'Ten questions on the reading above. A wrong answer fades and the question stays open, so try again — nothing is scored and nothing is recorded.',
          hintZh: '關於上面那些內容的十個問題。答錯的選項會變淡，題目仍然開著，可以再試一次——不計分，也不會留下紀錄。',
          items: [
            {
              q: 'What does “body recomposition” mean?',
              qZh: '「身體重組」是什麼意思？',
              options: [
                'Losing weight as fast as possible',
                'Gaining muscle mass and losing fat mass at the same time',
                'Building muscle first and cutting fat afterwards',
              ],
              answer: 1,
            },
            {
              q: 'In about seven of the ten studies in the Barakat review, what happened?',
              qZh: '在 Barakat 那篇回顧所討論的十項研究中，大約有七項出現了什麼結果？',
              options: [
                'Participants gained more lean mass than the fat they lost',
                'Participants lost more fat than the muscle they gained',
                'Nothing measurable changed',
              ],
              answer: 0,
            },
            {
              q: 'Someone’s body weight has not changed in four months. What does the reading say that tells you?',
              qZh: '某個人四個月來體重完全沒變。文章認為這告訴了你什麼？',
              options: [
                'Their training has failed',
                'On its own, almost nothing — fat and muscle may both have moved',
                'They have definitely lost muscle',
              ],
              answer: 1,
            },
            {
              q: 'Does Aragon say fat loss during a recomp requires eating below maintenance?',
              qZh: 'Aragon 是否認為，身體重組期間要減脂就必須吃得低於維持熱量？',
              options: [
                'Yes, always',
                'Not necessarily, if training and protein are in place',
                'Only for beginners',
              ],
              answer: 1,
            },
            {
              q: 'What is Huberman’s one-line rule about extra calories?',
              qZh: 'Huberman 對「多吃的熱量」提出的一句話原則是什麼？',
              options: [
                'Never eat above maintenance',
                'If you are going to add calories, make them high-quality protein',
                'Add carbohydrate before training and protein after',
              ],
              answer: 1,
            },
            {
              q: 'What is the “good pupil phenomenon”?',
              qZh: '什麼是「好學生現象」？',
              options: [
                'Participants over-report the behaviour the researcher asked for',
                'Students who train harder get better results',
                'Younger participants follow instructions more closely',
              ],
              answer: 0,
            },
            {
              q: 'What was different about the Bray metabolic-ward study?',
              qZh: 'Bray 那項代謝實驗室研究，特別的地方在哪裡？',
              options: [
                'Everyone followed a heavy lifting programme',
                'Food was tightly controlled and there was no exercise programme',
                'Participants ate below maintenance',
              ],
              answer: 1,
            },
            {
              q: 'Why does Aragon bring up a study that goes against his own argument?',
              qZh: 'Aragon 為什麼要提出一篇對自己論點不利的研究？',
              options: [
                'To show that his argument has a boundary, and where it is',
                'Because he changed his mind halfway through',
                'To fill time in the interview',
              ],
              answer: 0,
              why: {
                en: 'Naming the case your claim does not cover is what separates an argument from a sales pitch. It also protects you: the person who has already stated the limit cannot be caught out by it later.',
                zh: '主動說出「我這個主張不涵蓋哪些情況」，正是「論述」與「推銷」的分界線。這也是在保護自己：已經先講出界線的人，不會後來才被那條界線抓到。',
              },
            },
            {
              q: 'Which summary of the clip would be a misreading?',
              qZh: '以下哪一句是對這段影片的誤讀？',
              options: [
                'Training is what makes high protein useful for recomposition',
                'Extra calories burn fat as long as they come from protein',
                'Total daily protein matters more than the exact timing',
              ],
              answer: 1,
              why: {
                en: 'The metabolic-ward study is in the clip precisely to rule this reading out. A large surplus produced fat gain at every protein level, so calories were never suspended — they were being spent on muscle the training had asked for.',
                zh: '那篇代謝實驗室的研究之所以會出現在影片裡，就是為了排除這種讀法。在夠大的熱量盈餘下，不論蛋白質吃多少，脂肪都增加了；所以熱量從來沒有被豁免，只是被用在訓練所要求的肌肉上。',
              },
            },
            {
              q: 'A friend tells you he is going to eat 3.3 g of protein per kilo because “that is what the research says”. What is the careful reply?',
              qZh: '朋友告訴你他要開始每公斤體重吃 3.3 公克蛋白質，因為「研究就是這樣說的」。比較謹慎的回答會是什麼？',
              options: [
                'That is the correct amount for everybody',
                'Those were the intakes used in particular studies, not a target for everyone',
                'Research on protein is unreliable, so ignore it',
              ],
              answer: 1,
              why: {
                en: 'Both of the other answers throw away information — one turns a study condition into a rule, the other throws out the study. The middle answer keeps the finding and its scope together, which is the whole skill this part of the page is teaching.',
                zh: '另外兩個答案都在丟掉資訊——一個把「研究裡的條件」變成「規則」，另一個則把整篇研究都丟了。中間那個答案把「結果」和「適用範圍」一起留著，而這正是這一頁這個部分想教的能力。',
              },
            },
          ],
        },

        {
          t: 'part',
          n: 'B',
          en: 'What research can and cannot say',
          zh: '研究能說與不能說的話',
        },

        {
          t: 'note',
          en: 'Hedging is not weakness',
          zh: '保留說法不是心虛',
          bodyEn: 'Read the summary again and count the soft verbs: protein may displace other foods, training performance could improve, fat loss appeared not to follow, the mechanism is not fully established. To a Chinese ear this can sound as if the speaker is unsure of himself. It is the opposite. In academic and professional English, saying exactly how strong your evidence is marks you as someone who knows the difference between what was measured and what was concluded — and someone who states a claim more strongly than the evidence allows loses the room the first time it is checked.',
          bodyZh: '把上面的摘要再讀一次，數數看那些「軟」的動詞：蛋白質「可能」把其他食物擠掉、訓練表現「或許」會進步、脂肪增加「看起來」沒有跟著出現、機制「尚未完全確立」。用中文的耳朵聽，這會像是講話的人對自己沒把握。其實正好相反。在學術和專業英文裡，把「你的證據有多強」講得剛剛好，代表你分得清「被量到的」和「被推論出來的」；而一旦有人把話說得比證據還滿，第一次被查證的時候，整個場子就不會再相信他了。',
        },

        {
          t: 'contrast',
          en: 'Say exactly as much as you know',
          zh: '知道多少，就說多少',
          hintEn: 'The same finding stated two ways. The left column is not a lie — it is a true finding with its conditions removed, which is how most bad fitness advice is made.',
          hintZh: '同一個研究結果的兩種說法。左邊那一欄並不是謊話——它是一個真實的結果被拿掉了前提條件，而大部分糟糕的健身建議，就是這樣製造出來的。',
          coldEn: 'Overclaiming',
          coldZh: '說得太滿',
          warmEn: 'As the research puts it',
          warmZh: '研究的說法',
          items: [
            {
              caseEn: 'Reporting what a review found',
              caseZh: '轉述一篇回顧研究的發現',
              cold: {
                en: 'Science proves you can build muscle and lose fat at the same time.',
                zh: '科學已經證明你可以同時增肌又減脂。',
              },
              warm: {
                en: 'A 2020 review found evidence of recomposition in trained individuals, not only in beginners.',
                zh: '2020 年的一篇回顧研究發現，在已有訓練經驗的人身上也有身體重組的證據，不只是初學者。',
              },
              whyEn: 'Reviews find evidence; they do not prove. And “you” is a promise to one person, where the study describes what happened to a group under stated conditions.',
              whyZh: '回顧研究是「找到證據」，不是「證明」。另外，「你」是對一個人做出的承諾，而研究描述的，是一群人在特定條件下發生了什麼。',
            },
            {
              caseEn: 'Reporting a possible mechanism',
              caseZh: '轉述一個可能的機制',
              cold: {
                en: 'Protein burns more calories, so it cannot make you fat.',
                zh: '蛋白質會消耗更多熱量，所以吃蛋白質不會胖。',
              },
              warm: {
                en: 'Protein has a higher thermic effect, which may be part of why the fat gain did not appear.',
                zh: '蛋白質的食物產熱效應較高，這可能是脂肪並未如預期增加的原因之一。',
              },
              whyEn: '“May be part of why” is doing careful work: it offers the mechanism as a candidate, not a verdict. Aragon states four candidates and refuses to choose between them, which is honest rather than vague.',
              whyZh: '「可能是原因之一」這幾個字是在做很細緻的工作：它把這個機制當成候選答案，而不是判決。Aragon 一口氣提了四個候選，而且拒絕在它們之間下結論，這是誠實，不是含糊。',
            },
            {
              caseEn: 'Reporting an amount used in a study',
              caseZh: '轉述研究中使用的攝取量',
              cold: {
                en: 'You need 3.3 grams of protein per kilo to recomp.',
                zh: '想做身體重組，你需要每公斤體重吃 3.3 公克蛋白質。',
              },
              warm: {
                en: 'Intakes of around 2.2 to 3.3 grams per kilo were used in several of these studies.',
                zh: '在其中幾項研究裡，採用的攝取量大約落在每公斤 2.2 到 3.3 公克。',
              },
              whyEn: 'A number that was used is not a number that is needed. The passive — “were used” — keeps the sentence about the studies rather than about the listener, which is exactly where it belongs.',
              whyZh: '「研究裡用了這個數字」不等於「你需要這個數字」。被動語態 were used 讓這句話講的是「那些研究」而不是「聽的人」，而這正是它該待的位置。',
            },
            {
              caseEn: 'Reporting a study with a known weakness',
              caseZh: '轉述一項有已知弱點的研究',
              cold: {
                en: 'The participants ate an extra hundred grams of protein and did not gain fat.',
                zh: '受試者每天多吃一百公克蛋白質，而且沒有變胖。',
              },
              warm: {
                en: 'Participants reported adding a hundred grams of protein, and no significant fat gain was measured.',
                zh: '受試者回報自己每天多吃了一百公克蛋白質，而測量到的脂肪增加並不顯著。',
              },
              whyEn: 'Two repairs in one sentence. “Reported” names where the number came from, and “no significant gain was measured” is what a study can actually say — “did not gain fat” claims more than the measurement can carry.',
              whyZh: '一句話裡有兩個修正。reported 說明了這個數字的來源；而「測量到的增加不顯著」才是一項研究真正能說的話——「沒有變胖」講的比測量結果所能承擔的還要多。',
            },
            {
              caseEn: 'Reporting what you did yourself',
              caseZh: '轉述你自己做過的事',
              cold: {
                en: 'This programme works. I gained five kilos of muscle.',
                zh: '這套課表有效，我長了五公斤肌肉。',
              },
              warm: {
                en: 'It worked for me — my weight went up five kilos, though I did not measure body composition.',
                zh: '這套課表對我有效——我的體重增加了五公斤，不過我沒有測身體組成。',
              },
              whyEn: 'One person is a story, not evidence, and “for me” is the honest scope. The second half is the part almost nobody adds: saying what you did not measure is what makes the part you did measure worth listening to.',
              whyZh: '一個人的經驗是故事，不是證據，而「對我來說」正是誠實的適用範圍。後半句則是幾乎沒有人會補上的部分：說出「你沒有測什麼」，才讓你測到的那一部分變得值得聽。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Talking about research',
          zh: '談論研究',
          items: [
            {
              en: 'a review',
              zh: '文獻回顧（整理多篇研究的論文）',
              eg: 'A 2020 review pulled together ten studies on recomposition.',
              egZh: '2020 年的一篇文獻回顧，整理了十項關於身體重組的研究。',
            },
            {
              en: 'a study found that…',
              zh: '一項研究發現……',
              eg: 'The study found that the high-protein group gained no significant fat.',
              egZh: '這項研究發現，高蛋白組並沒有顯著增加脂肪。',
            },
            {
              en: 'evidence suggests that…',
              zh: '有證據顯示……',
              eg: 'Evidence suggests that trained lifters can recompose too.',
              egZh: '有證據顯示，已經有訓練經驗的人也可能做到身體重組。',
            },
            {
              en: 'participants',
              zh: '受試者',
              eg: 'Participants lived in the facility for the whole study.',
              egZh: '受試者在整個研究期間都住在該研究機構裡。',
            },
            {
              en: 'self-reported',
              zh: '自陳的、受試者自行回報的',
              eg: 'Self-reported food intake is notoriously unreliable.',
              egZh: '受試者自行回報的飲食攝取量，不可靠是出了名的。',
            },
            {
              en: 'a limitation',
              zh: '研究限制',
              eg: 'The main limitation is that nobody watched what they actually ate.',
              egZh: '主要的研究限制在於：沒有人真正看著他們吃了什麼。',
            },
            {
              en: 'significant',
              zh: '（統計上）顯著的',
              eg: 'There was no significant increase in fat mass.',
              egZh: '脂肪量並沒有顯著增加。',
            },
            {
              en: 'a control group',
              zh: '對照組',
              eg: 'The control group kept eating as they normally did.',
              egZh: '對照組維持原本的飲食習慣。',
            },
            {
              en: 'the mechanism',
              zh: '機制（某件事為何會發生）',
              eg: 'He is careful not to claim the mechanism is fully established.',
              egZh: '他很小心，不去宣稱這個機制已經完全確立。',
            },
            {
              en: 'to rule something out',
              zh: '排除某個可能',
              eg: 'That study rules out the simplest explanation.',
              egZh: '那項研究排除了最簡單的那個解釋。',
            },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the careful verb',
          zh: '選出說得剛剛好的動詞',
          hintEn: 'Every sentence is about the same evidence. Only one option says as much as the evidence allows — no more and no less.',
          hintZh: '每一句講的都是同一份證據。只有一個選項說得剛剛好，不多也不少。',
          items: [
            {
              text: 'The review ___ evidence of recomposition in trained individuals.',
              textZh: '這篇回顧研究，在已有訓練經驗的人身上找到了身體重組的證據。',
              options: ['proved', 'found', 'guaranteed'],
              answer: 1,
              why: {
                en: 'Studies find, show, suggest, report and indicate. In English they almost never “prove” — that verb belongs to mathematics, and using it about a review is the fastest way to sound like an advertisement.',
                zh: '研究會 find、show、suggest、report、indicate。英文裡幾乎不會說研究 prove——那個動詞屬於數學；用它來講一篇回顧研究，是最快讓自己聽起來像廣告的方法。',
              },
            },
            {
              text: 'Protein ___ be part of the reason the fat gain did not appear.',
              textZh: '蛋白質可能是脂肪並未如預期增加的原因之一。',
              options: ['may', 'will', 'must'],
              answer: 0,
              why: {
                en: '“May” offers a candidate explanation. “Must” claims you have ruled the others out, and Aragon explicitly has not — he lists four possibilities and leaves them open.',
                zh: 'may 提出的是一個候選解釋。must 則是宣稱你已經排除了其他可能，而 Aragon 明白表示他沒有——他列了四個可能，並且讓它們保持開放。',
              },
            },
            {
              text: 'Participants ___ adding a hundred grams of protein a day.',
              textZh: '受試者回報自己每天多吃了一百公克蛋白質。',
              options: ['reported', 'proved', 'promised'],
              answer: 0,
              why: {
                en: '“Reported” quietly tells the reader that this number came from the participants themselves, which is the whole limitation Aragon raises. Take it out and a self-report turns into a measurement.',
                zh: 'reported 這個字，不動聲色地告訴讀者「這個數字是受試者自己說的」——而這正是 Aragon 提出的那個限制。把它拿掉，一份自陳資料就變成了一筆測量結果。',
              },
            },
            {
              text: 'There was no ___ increase in fat mass.',
              textZh: '脂肪量並沒有顯著增加。',
              options: ['big', 'significant', 'real'],
              answer: 1,
              why: {
                en: 'In a research sentence “significant” is a statistical word, not an emotional one. It means the result is unlikely to be chance — not that it is large, and not that it matters to you.',
                zh: '在研究的句子裡，significant 是統計上的用語，不是情緒上的形容詞。它的意思是「這個結果不太可能是碰巧」——不是「很大」，也不是「對你很重要」。',
              },
            },
            {
              text: 'Intakes of around 3 grams per kilo ___ in several of these studies.',
              textZh: '其中幾項研究採用了每公斤體重約三公克的攝取量。',
              options: ['are needed', 'were used', 'are recommended'],
              answer: 1,
              why: {
                en: 'The passive keeps the sentence about the studies. The moment you switch to “are needed” or “are recommended”, you have quietly turned a study condition into advice for whoever is listening.',
                zh: '被動語態讓這句話講的是「那些研究」。一旦換成 are needed 或 are recommended，你就在不知不覺間，把「研究裡的條件」變成了給聽者的建議。',
              },
            },
            {
              text: 'It worked ___ , though I did not measure body composition.',
              textZh: '這對我來說有效，不過我沒有測身體組成。',
              options: ['for everyone', 'for me', 'in general'],
              answer: 1,
              why: {
                en: 'Two words that keep you honest and, oddly, make you more persuasive. Nobody argues with “for me”, and the person who states their own scope is the person worth asking follow-up questions.',
                zh: '這兩個字讓你保持誠實，而且奇妙地讓你更有說服力。沒有人會去反駁「對我來說」；而會主動說出自身適用範圍的人，才是值得繼續追問的人。',
              },
            },
          ],
        },

        {
          t: 'part',
          n: 'C',
          en: 'The vocabulary of training',
          zh: '訓練的字彙',
        },

        {
          t: 'phrases',
          en: 'Body composition',
          zh: '身體組成',
          items: [
            {
              en: 'body composition',
              zh: '身體組成',
              eg: 'Body composition tells you more than body weight does.',
              egZh: '身體組成能告訴你的，比體重多得多。',
            },
            {
              en: 'body recomposition',
              zh: '身體重組（增肌減脂同時發生）',
              eg: 'Body recomposition means gaining muscle and losing fat at the same time.',
              egZh: '身體重組指的是同時增加肌肉、減少脂肪。',
            },
            {
              en: 'lean mass',
              zh: '瘦體重、除脂體重',
              eg: 'He gained three kilos of lean mass over the summer.',
              egZh: '這個暑假他增加了三公斤的瘦體重。',
            },
            {
              en: 'fat mass',
              zh: '脂肪量',
              eg: 'Fat mass went down even though the scale did not move.',
              egZh: '就算體重計上的數字沒動，脂肪量還是下降了。',
            },
            {
              en: 'body fat percentage',
              zh: '體脂率',
              eg: 'My weight is the same, but my body fat percentage is lower.',
              egZh: '我的體重一樣，但體脂率變低了。',
            },
            {
              en: 'to put on muscle',
              zh: '增肌',
              eg: 'Putting on muscle is slower than most people expect.',
              egZh: '增肌的速度，比大多數人想像的慢。',
            },
            {
              en: 'to lose fat',
              zh: '減脂',
              eg: 'Losing fat and losing weight are not the same goal.',
              egZh: '減脂和減重，不是同一個目標。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'In the gym',
          zh: '在健身房',
          items: [
            {
              en: 'resistance training',
              zh: '阻力訓練、重量訓練',
              eg: 'Resistance training three or four times a week is the signal to build.',
              egZh: '一週三到四次的阻力訓練，就是「長肌肉」的訊號。',
            },
            {
              en: 'progressive overload',
              zh: '漸進式超負荷',
              eg: 'Without progressive overload the body has no reason to adapt.',
              egZh: '沒有漸進式超負荷，身體就沒有理由去適應。',
            },
            {
              en: 'to train close to failure',
              zh: '練到接近力竭',
              eg: 'The sets have to be taken close to failure to mean anything.',
              egZh: '每一組都要練到接近力竭，才有意義。',
            },
            {
              en: 'a set / a rep',
              zh: '一組／一下（一次反覆）',
              eg: 'Three to six sets per body part was the example given.',
              egZh: '影片舉的例子是每個部位三到六組。',
            },
            {
              en: 'hypertrophy',
              zh: '肌肥大',
              eg: 'Hypertrophy is the technical word for muscle growth.',
              egZh: 'hypertrophy 是「肌肉成長」的專業說法。',
            },
            {
              en: 'Zone 2 cardio',
              zh: '心率二區有氧',
              eg: 'Most of the cardio in the programme is Zone 2.',
              egZh: '這份課表裡的有氧，大部分是心率二區。',
            },
            {
              en: 'recovery',
              zh: '恢復',
              eg: 'Recovery is not the gap between training; it is where the growth happens.',
              egZh: '恢復不是訓練之間的空檔，成長就是在那個時候發生的。',
            },
            {
              en: 'to train fasted / fed',
              zh: '空腹訓練／進食後訓練',
              eg: 'Whether you train fasted or fed is not the deciding factor.',
              egZh: '空腹練還是吃過再練，並不是決定性的因素。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Food and energy',
          zh: '飲食與熱量',
          items: [
            {
              en: 'maintenance calories',
              zh: '維持熱量',
              eg: 'He suggests eating around maintenance, or a little above it.',
              egZh: '他建議吃在維持熱量附近，或略高一點。',
            },
            {
              en: 'a caloric surplus / deficit',
              zh: '熱量盈餘／熱量赤字',
              eg: 'A judicious surplus is about ten percent above maintenance.',
              egZh: '所謂有節制的盈餘，大約是比維持熱量高出一成。',
            },
            {
              en: 'protein intake',
              zh: '蛋白質攝取量',
              eg: 'Very high protein intake was the common feature of those studies.',
              egZh: '非常高的蛋白質攝取量，是那些研究的共同特徵。',
            },
            {
              en: 'grams per kilo of body weight',
              zh: '每公斤體重幾公克',
              eg: 'The studies used around two to three grams per kilo of body weight.',
              egZh: '這些研究採用的量，大約是每公斤體重二到三公克。',
            },
            {
              en: 'satiating',
              zh: '有飽足感的',
              eg: 'Protein is satiating, so it may push other food out.',
              egZh: '蛋白質有飽足感，所以可能會把其他食物擠掉。',
            },
            {
              en: 'the thermic effect of food',
              zh: '食物產熱效應',
              eg: 'Protein has a higher thermic effect than carbohydrate or fat.',
              egZh: '蛋白質的食物產熱效應，比碳水化合物或脂肪高。',
            },
            {
              en: 'to overfeed',
              zh: '（研究中）刻意讓受試者多吃',
              eg: 'Participants were overfed by about forty percent.',
              egZh: '研究刻意讓受試者多吃了大約四成的熱量。',
            },
            {
              en: 'energy expenditure',
              zh: '熱量消耗',
              eg: 'Cardio raises energy expenditure and improves conditioning.',
              egZh: '有氧可以提高熱量消耗，並改善體能狀態。',
            },
          ],
        },

        {
          t: 'match',
          en: 'Term and meaning',
          zh: '術語與意思',
          hintEn: 'Click a term on the left, then the meaning that belongs to it on the right.',
          hintZh: '先點左邊的術語，再點右邊對應的意思。',
          pairs: [
            { a: 'body recomposition', b: 'gaining muscle and losing fat at the same time' },
            { a: 'lean mass', b: 'everything in the body that is not fat' },
            { a: 'maintenance calories', b: 'the intake at which body weight stays the same' },
            { a: 'progressive overload', b: 'gradually asking the body to do more than before' },
            { a: 'hypertrophy', b: 'growth in the size of muscle tissue' },
            { a: 'the thermic effect of food', b: 'the energy the body spends processing what you eat' },
            { a: 'NEAT', b: 'the energy you burn moving around outside training' },
            { a: 'a limitation', b: 'something a study cannot tell you, stated openly' },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the collocation',
          zh: '選出正確的搭配詞',
          hintEn: 'One of the three fits the sentence. Tap the Chinese for the situation if you want it.',
          hintZh: '三個選項中只有一個適合這個句子。想看情境的話，可以點開中文。',
          items: [
            {
              text: 'She has ___ three kilos of muscle since April.',
              textZh: '從四月到現在，她增加了三公斤的肌肉。',
              options: ['put on', 'put up', 'put in'],
              answer: 0,
              why: {
                en: '“Put on” is the phrasal verb for weight, muscle and fat alike. It is the everyday one; “gain” is its neutral written partner, and both are correct.',
                zh: '不論是體重、肌肉還是脂肪，片語動詞都用 put on。它偏口語；書面上的中性說法是 gain，兩個都對。',
              },
            },
            {
              text: 'The programme asks you to ___ close to failure on most sets.',
              textZh: '這份課表要求你大部分的組數都練到接近力竭。',
              options: ['make', 'train', 'do'],
              answer: 1,
              why: {
                en: '“Train” is the verb for the activity as a whole — train hard, train close to failure, train fasted. You do a set and you make progress, but you train.',
                zh: '講「訓練」這件事本身，動詞用 train——train hard、train close to failure、train fasted。你 do a set、make progress，但你是 train。',
              },
            },
            {
              text: 'Eating slightly ___ maintenance can still work, if you lift hard.',
              textZh: '只要重訓夠紮實，吃得比維持熱量略高一點還是行得通。',
              options: ['over', 'above', 'upper'],
              answer: 1,
              why: {
                en: '“Above maintenance” and “below maintenance” are the fixed pair. “Over” is not wrong in speech, but every study you read will say above.',
                zh: 'above maintenance 和 below maintenance 是固定的一組說法。口語裡用 over 不算錯，但你讀到的每一篇研究都會寫 above。',
              },
            },
            {
              text: 'Protein is very ___ , so you may end up eating less of other things.',
              textZh: '蛋白質很有飽足感，所以你可能會不知不覺少吃其他東西。',
              options: ['filling', 'filled', 'full'],
              answer: 0,
              why: {
                en: 'The food is filling; the person is full. Mixing them up is one of the most common slips in this subject — “I am filling” describes the food you have become.',
                zh: '食物是 filling，人是 full。把這兩個字搞混，是這個主題裡最常見的錯誤之一——說「I am filling」，等於在說你自己變成了那份食物。',
              },
            },
            {
              text: 'The study found no significant ___ in fat mass.',
              textZh: '這項研究發現，脂肪量並沒有顯著增加。',
              options: ['rise up', 'increase', 'grow'],
              answer: 1,
              why: {
                en: '“Increase” is the noun that goes with a measurement. “Grow” is a verb and takes no article here, and “rise up” means to rebel — which is a rather different study.',
                zh: '談測量結果時，名詞用 increase。grow 是動詞，這裡不能加冠詞；而 rise up 的意思是「起義、反抗」——那會是另一種完全不同的研究。',
              },
            },
            {
              text: 'Total daily protein matters more than the exact ___ .',
              textZh: '一整天的蛋白質總量，比精確的攝取時間點更重要。',
              options: ['time', 'timing', 'moment'],
              answer: 1,
              why: {
                en: '“Timing” is when something is done relative to everything else — meal timing, the timing of a joke. “Time” would be asking for a clock reading.',
                zh: 'timing 指的是「相對於其他事情的時間安排」——meal timing、笑話的 timing。用 time 就變成在問「幾點鐘」。',
              },
            },
          ],
        },

        {
          t: 'part',
          n: 'D',
          en: 'Talk it through',
          zh: '一起討論',
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的看法是？',
          hintEn: 'No right answers. Pick one and be ready to say why — that sentence is the exercise.',
          hintZh: '沒有標準答案。選一個，並準備好說明理由——那句理由才是真正的練習。',
          items: [
            {
              en: 'The bathroom scale does more harm than good.',
              zh: '體重計帶來的壞處比好處多。',
            },
            {
              en: 'Most fitness advice online fails because it removes the conditions, not because it is invented.',
              zh: '網路上大多數的健身建議之所以失敗，是因為它把前提條件拿掉了，而不是因為它是編出來的。',
            },
            {
              en: 'For someone my age, consistency is worth more than getting the numbers exactly right.',
              zh: '對我這個年紀的人來說，持續下去比把數字算得完全精準更有價值。',
            },
            {
              en: 'A person who says “I am not sure” sounds less credible, not more.',
              zh: '一個會說「我不確定」的人，聽起來反而比較沒有可信度。',
            },
            {
              en: 'I would rather follow a plan I understand than a better plan I do not.',
              zh: '比起一份我看不懂但更好的計畫，我寧願照著一份我真的理解的計畫做。',
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Questions',
          zh: '討論題',
          items: [
            {
              en: 'Before this discussion, what did you think had to happen to your weight in order to get stronger? Has anything moved?',
              zh: '在這次討論之前，你以為「變壯」的過程中體重一定會怎麼變化？現在有什麼想法改變了嗎？',
              starters: [
                { en: 'I used to assume that…', zh: '我以前一直以為……' },
                { en: 'What I had never separated was…', zh: '我從來沒有把……分開來看。' },
                { en: 'I am still not convinced that…', zh: '我到現在還是不太相信……' },
              ],
            },
            {
              en: 'If you stopped weighing yourself, what would you measure instead? Be specific — what number, how often?',
              zh: '如果你不再量體重，你會改成量什麼？請說具體一點——量哪個數字？多久量一次？',
              starters: [
                { en: 'I would track… instead of…', zh: '我會改成追蹤……，而不是……' },
                { en: 'The number I actually care about is…', zh: '我真正在意的那個數字是……' },
                { en: 'I would check it about once every…', zh: '我大概會每……檢查一次。' },
              ],
            },
            {
              en: 'Aragon brings up a study that weakens his own case. When did you last do that in an argument — and what does it cost you?',
              zh: 'Aragon 主動提出一篇對自己論點不利的研究。你上一次在爭論中這樣做是什麼時候？這樣做要付出什麼代價？',
              starters: [
                { en: 'The last time I admitted a weak point was…', zh: '我上一次承認自己論點的弱點是……' },
                { en: 'It is harder to do in Chinese than in English because…', zh: '用中文做這件事比用英文難，因為……' },
                { en: 'I think it costs you… but you get…', zh: '我覺得這樣做會失去……，但會得到……' },
              ],
            },
            {
              en: 'A lot of training advice reaches you through short videos. What would you now check before believing one?',
              zh: '你接收到的訓練建議，很多都來自短影片。現在的你，在相信一支影片之前會先確認什麼？',
              starters: [
                { en: 'The first thing I would look for is…', zh: '我會先找的第一件事是……' },
                { en: 'A claim without… is not worth much, because…', zh: '一個沒有……的主張沒什麼價值，因為……' },
                { en: 'The accounts I trust tend to…', zh: '我比較信任的那些帳號通常會……' },
              ],
            },
            {
              en: 'Describe your own training in the careful language from Part B — what you did, what changed, and what you did not measure.',
              zh: '用 B 部分那種謹慎的語言，描述你自己的訓練——你做了什麼、什麼改變了，以及你沒有測到什麼。',
              starters: [
                { en: 'Over the last few months I have…', zh: '過去這幾個月，我……' },
                { en: 'What I can actually say is…', zh: '我真正能說的是……' },
                { en: 'What I never measured was…', zh: '我一直沒有測的是……' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Explain it without overclaiming',
          zh: '把它說清楚，但不要說得太滿',
          instructionEn: 'Pick one prompt and talk for about ninety seconds. One rule, and it is the whole exercise: every claim has to carry its conditions with it. If a sentence would still sound true with the conditions removed, it is probably too strong.',
          instructionZh: '選一個題目，說大約九十秒。只有一條規則，而它就是這個練習的全部：每一個主張都要把前提條件一起帶著。如果一句話「把條件拿掉之後聽起來還是成立」，那它大概就說得太滿了。',
          prompts: [
            {
              en: 'Explain body recomposition to a friend who thinks losing weight and losing fat are the same thing.',
              zh: '向一個以為「減重」和「減脂」是同一件事的朋友，解釋什麼是身體重組。',
            },
            {
              en: 'Explain why the metabolic-ward study matters, even though it seems to contradict the main argument.',
              zh: '解釋那篇代謝實驗室的研究為什麼重要，即使它看起來和主要論點互相矛盾。',
            },
            {
              en: 'Explain to someone what a “free-living study” is and why it should change how you read the result.',
              zh: '向別人解釋什麼是「自由生活型研究」，以及它為什麼會改變你解讀結果的方式。',
            },
            {
              en: 'Describe your own training over the past two months, and say clearly what you did not measure.',
              zh: '描述你過去兩個月的訓練，並明確說出你沒有測到什麼。',
            },
            {
              en: 'Take one fitness claim you have seen online and say it again with its conditions put back.',
              zh: '挑一個你在網路上看過的健身主張，把前提條件放回去，再說一次。',
            },
          ],
          checklist: [
            { en: 'evidence suggests that', zh: '有證據顯示' },
            { en: 'a review found', zh: '一篇回顧研究發現' },
            { en: 'may be part of the reason', zh: '可能是原因之一' },
            { en: 'participants reported', zh: '受試者回報' },
            { en: 'no significant increase', zh: '沒有顯著增加' },
            { en: 'the main limitation is', zh: '主要的研究限制是' },
            { en: 'were used in these studies', zh: '這些研究採用的是' },
            { en: 'it worked for me', zh: '這對我來說有效' },
            { en: 'body composition', zh: '身體組成' },
            { en: 'resistance training', zh: '阻力訓練' },
          ],
          frames: [
            {
              en: 'Body recomposition means gaining muscle and losing fat at the same time.',
              zh: '身體重組指的是同時增加肌肉、減少脂肪。',
            },
            {
              en: 'Weight loss and fat loss are not the same thing.',
              zh: '減重和減脂不是同一件事。',
            },
            {
              en: 'A 2020 review found evidence of recomposition in trained individuals.',
              zh: '2020 年的一篇回顧研究，在已有訓練經驗的人身上找到了身體重組的證據。',
            },
            {
              en: 'Intakes of around two to three grams per kilo were used in several of these studies.',
              zh: '其中幾項研究採用的攝取量，大約是每公斤體重二到三公克。',
            },
            {
              en: 'Protein may displace other foods, but the mechanism is not fully established.',
              zh: '蛋白質可能會把其他食物擠掉，但這個機制尚未完全確立。',
            },
            {
              en: 'The main limitation is that the food intake was self-reported.',
              zh: '主要的研究限制在於，飲食攝取量是受試者自行回報的。',
            },
            {
              en: 'Without a training stimulus, a large surplus still produced fat gain.',
              zh: '在沒有訓練刺激的情況下，夠大的熱量盈餘仍然造成了脂肪增加。',
            },
            {
              en: 'It worked for me, though I did not measure body composition.',
              zh: '這對我來說有效，不過我沒有測身體組成。',
            },
          ],
        },
      ],
    },
  ],
};

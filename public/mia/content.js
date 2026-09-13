/* Mia — a running notebook of one-to-one sessions.

   Unlike most pages in this repo, this one is not a lesson. It is a notebook
   that grows: every discussion adds one entry to `sessions` below and nothing
   else changes. No new files, no new folder, no renderer edit. It is the same
   machinery as /ken/, /anna/, /anny/, /aaron/, /anita/, /nikky/ and /eason/,
   copied from /ken/, with the same rules.

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
   /mia/#s2 opens session 2 with the rest folded. Sessions here are DATED —
   give every entry `dateEn` and `dateZh`, the date the lesson was taught.

   FOCUS CHIPS THAT JUMP
   ---------------------
   A session runs long enough that its focus chips are the only contents list it
   has, so they are links. Give a block an `id` and give the chip that names it a
   matching `to`, and tapping the chip jumps there:

     focus:  { en: 'Your own sentences, fixed', zh: '你自己的句子，修過一遍', to: 's1-fix' }
     block:  { t: 'fix', id: 's1-fix', en: 'Your own sentences, tidied up', ... }

   Any block type takes an `id`; the convention here is `<session>-<letter>` for
   a part divider and `<session>-<word>` for a block inside one. A chip with no
   `to` stays plain text, so nothing breaks if a session is added without them.
   Keep every id unique across the whole file — they are page anchors, not
   per-session ones, and /mia/#s1-fix has to open session 1 and land on the
   corrections. The renderer handles that: a hash naming a block opens the
   session holding it before the jump.

   THE STUDENT
   -----------
   Mia is a young adult who WORKS IN A PLASTIC SURGERY CLINIC. That puts the
   register between the two already worked out here: like /anny/, /aaron/ and
   /nikky/ the examples come from a job actually under way — but a job early
   in a career, not an office with quarterly targets, and like /anna/ and /ken/
   the voice is an adult's who is still new to some of the subjects. Full
   sentences, nothing simplified, nothing written down.

   Invented example sentences should come from the clinic: consultations,
   appointments and follow-ups, pre- and post-op instructions, recovery and
   aftercare, the front desk, the doctors and colleagues at the clinic, and
   patients who arrive nervous or with expectations to manage. Not from
   meetings, clients or quarterly targets, and not from campus.

   THREE LINES THE CLINIC DRAWS
   ----------------------------
   THE CLINIC'S NAME. Mia is named on this page — Lewis chose that — but the
   clinic she works at is NOT, anywhere: not in a sentence, a title, an example
   or a model answer, and not its doctors' names or its address either. If a
   source names it, write "the clinic" or "our clinic" instead. The page is
   public at its URL, and her employer has not agreed to be on it.

   PATIENTS. Nothing that could identify a real patient goes on this page — not
   a name, not a procedure tied to a person, not a story specific enough to be
   recognised. If Mia describes a case in a lesson, the page keeps the English
   and drops the person: "a patient", an invented detail, a generic procedure.
   The page is public at its URL.

   MEDICINE. This is an English notebook, not clinical guidance. Where a session
   touches procedures, risks, recovery times or aftercare, the page records the
   language for talking about them — and what the source said — without vouching
   for the medicine. Recovery periods and risks on the page are wording to
   practise, never figures to quote to a patient. The precedent is Ken's
   session 2 and Aaron's AMPK/mTOR note: `usually takes` is not `will take`, and
   `may cause` is not `causes`.

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

   No markdown in content strings — the renderer escapes everything, so
   *asterisks* render literally.

   BLOCK TYPES
   -----------
     part      a divider INSIDE one session, for a source that arrives already
               cut into labelled sections
     lead      a framing sentence in italics, opening a session
     link      a pointer to another page in this site, or an in-page anchor
               such as `#s1` — the renderer unfolds the target session first
     quote     a short quote, with attribution
     photo     a photograph above the paragraph it belongs to — `src`, `alt`,
               the photographer in `by`, and a `pos` (CSS object-position) if
               the default centre crop cuts the wrong thing. Illustration only:
               no lesson text, and print drops it
     summary   a teaching paragraph, spoken aloud on request. Optional
               `titleEn`/`titleZh` put a heading above it and optional `n` a
               number beside that — use them wherever the SOURCE arrived cut
               into titled sections, so a long reading stays scannable weeks
               later when the student is looking for one idea rather than reading the lot
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
               Mia to judge something rather than to remember it
     fix       something Mia actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something. Set
               haveEn/haveZh and needEn/needZh whenever the list is not people —
               the built-in Chinese says "I have such a person"
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task with a tick-list of target phrases

   `fix` is the one block the other pages here do not have, and it is the reason
   a per-student notebook is worth keeping: it holds Mia's own sentences,
   corrected.

   WHAT GOES IN `fix`, AND WHAT NEVER DOES
   ---------------------------------------
   Only sentences Mia really said or wrote, in Mia's own wording. A source that
   has already been polished — a summary written up after the lesson, a
   "polished version", material prepared before the lesson — carries no record
   of Mia's wording, so that session has no `fix` block and nothing is
   reconstructed from the polished text: a sentence Lewis wrote is not a
   sentence Mia said.

   Where a source sets Mia's original sentences beside a ChatGPT (or any other
   tool's) rewrite, the originals are `fix` material and the rewrite is not. If
   the rewrite has mistakes of its own, they go in a `contrast` labelled "The
   rewrite" against "Natural English" — the rule Ken's session 1 set, because
   putting them in `fix` would credit Mia with sentences a machine wrote.

   SESSION 1, AND ITS TWO SOURCES
   ------------------------------
   Session 1 (12 September 2026) was built from two things Lewis handed over
   together, and they are treated differently because they are different kinds
   of source:

   - "Mia's Session Review｜課堂回顧", a bilingual PDF written up after the
     lesson in seven titled sections. It is polished prose, so it supplies
     Part B (its seven sections are the seven numbered `summary` blocks) and
     nothing in `fix`.
   - A corrections write-up pasted into chat, drawn from the Zoom transcript.
     Its "Original" lines are Mia's own transcript sentences — the write-up
     kept only the ones where the mistake is clearly hers and left out what the
     transcription may have garbled — so they ARE `fix` material, quoted as
     given. Its chunk tables supply Part C.

   The corrections in `fix` are not always the write-up's. Where its suggested
   version was itself off, this file uses a better one: "may still remain" →
   "may still be" (#22), "I didn't expect myself to" → "I didn't expect to"
   (#4), and "the second treatment" kept as "the second machine", because that
   is what she said. Its item on "focus on the moment" is left out entirely:
   that is natural English, and `fix` holds mistakes. "Focus on the present
   moment" is on a phrase card instead.

   The client she described — a painful treatment at another clinic, a fear of
   anything similar, trust rebuilt — is on the page only as "a client": no
   name, no date, no clinic. That is the PATIENTS line above, applied.

   PHOTOGRAPHS
   -----------
   The `photo` block is this notebook's own — no other notebook renderer has
   one; it is ported from /wealth-habits/. Files live in img/, from Pexels,
   whose licence allows commercial use and asks for no attribution; the
   photographer is credited under each picture anyway. Each was fetched at
   1600 px wide (1600×1067) and is cropped by CSS.

   Choose them the way the clinic lines above require: stock photographs of
   no real clinic — no visible name, logo or signage (a reception shot was
   passed over for a logo on the wall) — nothing graphic, and nobody who could
   be taken for one of Mia's clients. Session 1 has four, each opening one of
   the review's sections: records.jpg (B-2, preparing), consultation.jpg (B-3,
   the client), journal.jpg (B-4, the progress journal), knitting.jpg (B-6,
   attention). Lewis approved each file before it was downloaded; a fifth, a
   clinician explaining facial anatomy on a tablet, was offered and declined.

   SAMPLE BANNER
   -------------
   Setting `sample` puts a line across the top saying the content is a
   placeholder — on screen and in print, so a draft cannot be handed over by
   accident.
*/

const NOTEBOOK = {
  student: 'Mia',
  title: 'Mia’s English Notebook',
  titleZh: 'Mia 的英文筆記',
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
      dateEn: '12 September 2026',
      dateZh: '2026 年 9 月 12 日',
      en: 'What else can I do? Ownership, self-trust, and the progress you already have',
      zh: '我還能做什麼？主人翁思維、自我信任，以及你早已擁有的進步',

      focus: [
        { en: 'Your own sentences, fixed', zh: '你自己的句子，修過一遍', to: 's1-fix' },
        { en: 'Worker vs. ownership mindset', zh: '員工思維與主人翁思維', to: 's1-b' },
        { en: 'Self-trust, not ability', zh: '是自我信任，不是能力', to: 's1-trust' },
        { en: 'Chunks for the clinic', zh: '診所用得到的語塊', to: 's1-c' },
        { en: 'Six reusable patterns', zh: '六個可以重複使用的句型', to: 's1-d' },
        { en: 'Your next step', zh: '你的下一步', to: 's1-e' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'We had not had a class in two months, and you used the hour to take stock of your past six months at work: what work has done to you, what you have learned, why you still get anxious about things you can handle, and a client whose trust you and your team won back. This is that hour, kept — your own sentences with the repairs behind them, the ideas we talked through, the language you reached for and did not have yet, and the questions to take into next time.',
          zh: '我們已經兩個月沒上課了，你用這一小時回顧了自己這半年的工作：工作如何改變了你、你學到了什麼、為什麼你還是會對自己其實應付得來的事情感到焦慮，以及一位你和團隊重新贏回信任的客戶。這一頁就是那一堂課的紀錄——你自己的句子和它們的修正、我們談過的觀念、你當時想用卻還沒有的語言，以及帶到下一堂課的問題。',
        },

        {
          t: 'summary',
          en: 'Before any of the corrections, the most important thing: you had something to say for a full hour, and all of it was yours — your job, your clients, your own doubts. That is the hard part, and you already have it. What held the English back was not a lack of ideas but the way the ideas were put together: small words like prepositions, nouns that need an -s, and sentences built word by word from Chinese. The next step is to learn English in chunks — whole phrases like “what else can I do” and “that’s where it comes from” — rather than single words, and most of this page is built around that.',
          zh: '在看任何修正之前，先說最重要的一點：你整整一小時都有話可說，而且全都是你自己的內容——你的工作、你的客戶、你自己的疑惑。那是最難的部分，而你已經有了。拖住英文的不是缺少想法，而是把想法組起來的方式：介系詞這類小字、需要加 -s 的名詞，以及從中文一個字一個字搭出來的句子。下一步是用「語塊」來學英文——像 what else can I do、that’s where it comes from 這樣的整段片語——而不是一個一個單字，這一頁大部分的內容都是圍繞著這一點設計的。',
        },

        {
          t: 'part',
          id: 's1-a',
          n: 'A',
          en: 'What you said, and what changed',
          zh: '你說了什麼，以及改了什麼',
        },

        {
          t: 'note',
          en: 'Where these sentences come from',
          zh: '這些句子從哪裡來',
          bodyEn: 'Every sentence below is taken from the Zoom transcript of our lesson, as the transcript recorded it. The transcript is written by a machine and it mishears, so only the lines where the mistake is clearly yours are here; anything the machine may have garbled was left out rather than counted against you. They are grouped by the kind of mistake, because the kind is what you can learn — you may never say a particular sentence again, but the pattern behind it you will use every day.',
          bodyZh: '以下每一句都取自我們這堂課的 Zoom 逐字稿，照逐字稿的紀錄呈現。逐字稿是機器產生的，會聽錯，所以這裡只收錄「錯誤明顯是你的」那些句子；可能是機器聽錯的，一律不列入，不算在你身上。句子依照錯誤的類型分組，因為真正能學起來的是類型——某一句話你可能再也不會說，但它背後的規則你每天都會用到。',
        },

        {
          t: 'fix',
          id: 's1-fix',
          en: 'Verbs and tenses',
          zh: '動詞與時態',
          hintEn: 'Your sentences, as you said them. Tap one to see the repair — try to spot the change yourself first.',
          hintZh: '這些是你說過的句子，原封不動。點一下就會看到修正版——先自己找找看改了哪裡。',
          items: [
            {
              wrong: 'I haven’t have class with you for two months.',
              right: 'I haven’t had a class with you in two months.',
              whyEn: 'The present perfect is have + the past participle, and the past participle of “have” is “had” — so “haven’t had”, even though it looks like the same word twice. “A class” needs its article. And after a negative, both “for two months” and “in two months” are correct; “in” is the one you will hear more often. I haven’t seen her in weeks.',
              whyZh: '現在完成式是 have + 過去分詞，而 have 的過去分詞是 had——所以是 haven’t had，雖然看起來像同一個字用了兩次。class 前面要加冠詞 a。另外在否定句裡，for two months 和 in two months 都正確，in 比較常聽到。I haven’t seen her in weeks.',
            },
            {
              wrong: 'My mindset haven’t been grow up.',
              right: 'I don’t feel that I’ve really grown.',
              whyEn: 'Three things. “Mindset” is one thing, so it would take “hasn’t”, not “haven’t”. The present perfect is have + the past participle — “grown” — with no “been” in between. And “grow up” means to become an adult: I grew up in Kaohsiung. For growing as a person or a professional, drop the “up”: I’ve grown a lot this year. Making yourself the subject is simpler than making it your mindset, because in English a mindset changes rather than grows.',
              whyZh: '三件事。mindset 是單數，所以要用 hasn’t，不是 haven’t。現在完成式是 have + 過去分詞——grown——中間不需要 been。另外 grow up 是「長大成人」：I grew up in Kaohsiung。談一個人或一個專業工作者的成長，要把 up 拿掉：I’ve grown a lot this year。讓「你自己」當主詞，會比讓 mindset 當主詞簡單，因為在英文裡 mindset 是「改變」，而不是「長大」。',
            },
            {
              wrong: 'I becoming working, like… like a machine.',
              right: 'I feel like I’m starting to work like a machine.',
              whyEn: 'The -ing form needs “am” in front of it — “I’m becoming”, never “I becoming”. But the more useful change is the frame. “I feel like I’m starting to…” describes a change you have noticed in yourself and are not happy about, which is exactly what you meant. I feel like I’m starting to lose motivation.',
              whyZh: '-ing 形式前面一定要有 am——I’m becoming，不能說 I becoming。但更有用的修正是這個句型。「I feel like I’m starting to…」描述的是「你在自己身上察覺到、而且不太喜歡的改變」，這正是你想表達的。I feel like I’m starting to lose motivation.',
            },
            {
              wrong: 'I have found a way that’s stupid, but work.',
              right: 'I’ve found a way that sounds a bit silly, but it works.',
              whyEn: '“It” is one thing, so the verb takes an -s: it works. The second half also needs its own subject — “but it works”, not “but work”. And “stupid” is harsher in English than you meant. “Sounds a bit silly” says the method looks strange from the outside and still does the job, which is a nice thing to be able to say about your own idea.',
              whyZh: 'it 是單數，所以動詞要加 -s：it works。後半句也需要自己的主詞——but it works，不是 but work。另外 stupid 在英文裡比你想表達的重得多。sounds a bit silly 的意思是「這個方法從外面看有點怪，但確實有用」，用這句話來形容自己的點子剛剛好。',
            },
            {
              wrong: 'She have a bad experience about the second machine.',
              right: 'She had a bad experience with the second machine.',
              whyEn: 'It happened in the past, so “had” — and even in the present it would be “she has”, never “she have”. The preposition is “with”: you have a good or bad experience with something, not about it. If you mean the treatment rather than the device, say so: a bad experience with the second treatment.',
              whyZh: '這件事發生在過去，所以用 had——就算是現在式也要說 she has，不能說 she have。介系詞用 with：對某樣東西有好或不好的經驗，是 experience with，不是 about。如果你指的是療程而不是儀器，就直接說：a bad experience with the second treatment。',
            },
            {
              wrong: 'Your skin still be loose.',
              right: 'Your skin may still be loose.',
              whyEn: 'A sentence needs a real verb, and “be” on its own is not one. You are telling a client what might happen, so add “may” — and “may” is also the honest word here, because it is a possibility, not a promise. “Your skin may remain loose” is another good way to say it.',
              whyZh: '一個句子需要一個真正的動詞，單獨的 be 不算。你是在告訴客戶「可能會發生的事」，所以要加 may——而 may 在這裡也是誠實的用字，因為那是一種可能，不是保證。「Your skin may remain loose」也是很好的說法。',
            },
          ],
        },

        {
          t: 'fix',
          id: 's1-fix-b',
          en: 'The small words: prepositions and fixed patterns',
          zh: '小字：介系詞與固定用法',
          hintEn: 'These are the mistakes that are hardest to hear, because the meaning comes through anyway. Tap to see the repair.',
          hintZh: '這一類錯誤最難自己聽出來，因為意思還是傳達得到。點一下看修正版。',
          items: [
            {
              wrong: 'I just didn’t get used that my life has been… full of everything about work.',
              right: 'I just wasn’t used to my life being so full of work.',
              whyEn: '“Used to” in this sense is followed by a noun or an -ing form, never by “that”: I’m used to long hours, I’m getting used to working weekends. So the clause becomes “my life being…”. Keep it apart from the other “used to”, which takes a plain verb and means something you did in the past: I used to work at a café.',
              whyZh: '這個意思的 used to 後面接名詞或 -ing，不能接 that：I’m used to long hours、I’m getting used to working weekends。所以子句要改成 my life being…。要跟另一個 used to 分開：那一個後面接原形動詞，意思是「過去常做某事」：I used to work at a café。',
            },
            {
              wrong: 'I didn’t expect me to grow up on something specific.',
              right: 'I didn’t expect to grow in any particular area.',
              whyEn: 'When the person expecting and the person growing are the same, English leaves the second one out: I didn’t expect to…, not I didn’t expect me to…. “Expect me to” means someone else had the expectation — my manager expects me to stay late. You grow in an area, not on it, and — as above — without “up”.',
              whyZh: '當「期待的人」和「成長的人」是同一個人時，英文會把後面那個省略：I didn’t expect to…，而不是 I didn’t expect me to…。expect me to 表示期待的是別人——my manager expects me to stay late。在某個領域成長是 grow in，不是 on；而且跟上面一樣，不需要 up。',
            },
            {
              wrong: 'I’m lacking of the experience in the workplace.',
              right: 'I don’t have much workplace experience yet.',
              whyEn: '“Lack” is a verb, and it takes its object directly: I lack experience. The “of” belongs only to the noun: a lack of experience. “I lack workplace experience” is correct but sounds blunt about yourself; “I don’t have much … yet” says the same thing, and the “yet” says it is changing.',
              whyZh: 'lack 是動詞，後面直接接受詞：I lack experience。of 只跟名詞一起用：a lack of experience。「I lack workplace experience」是對的，但用來說自己聽起來有點直接；「I don’t have much … yet」意思一樣，而那個 yet 表示這件事正在改變。',
            },
            {
              wrong: 'I’m just lack of confidence, and I think too much.',
              right: 'I just lack confidence, and I tend to overthink things.',
              whyEn: 'The same “lack”: as a verb it needs no “am” and no “of”. “I think too much” is fine English, but “I tend to overthink things” is what people actually say about this habit — and “tend to” makes it a pattern you have, not a fact about you forever.',
              whyZh: '同一個 lack：當動詞用時，前面不需要 am，後面也不需要 of。「I think too much」沒有錯，但談這個習慣時，大家實際會說的是「I tend to overthink things」——而 tend to 讓它變成「你有的一個傾向」，而不是「你永遠就是這樣」。',
            },
            {
              wrong: 'I’m always anxious on something that I actually can do.',
              right: 'I’m always anxious about things that I can actually do.',
              whyEn: 'You are anxious about something — the same as worried about or nervous about. “Actually” sits after “can”, not before it: I can actually do it. And since you mean a whole kind of thing, make it plural. “Things I can actually handle” is another good ending, and “handle” is a word worth owning in your job: handle a client, handle a complaint, handle pressure.',
              whyZh: '對某事焦慮是 anxious about——跟 worried about、nervous about 一樣。actually 要放在 can 的後面：I can actually do it。另外你指的是「一類事情」，所以要用複數。結尾換成 things I can actually handle 也很好，而 handle 是你工作上很值得熟練的字：handle a client、handle a complaint、handle pressure。',
            },
            {
              wrong: 'Try to learn things from the every opportunity.',
              right: 'Try to learn from every opportunity.',
              whyEn: '“Every” already does the work of “the”, so the two never sit together: every client, every day, every opportunity. And “learn from” needs no object — you learn from a mistake, from a colleague, from every opportunity.',
              whyZh: 'every 已經有 the 的功能，所以兩個不會一起出現：every client、every day、every opportunity。另外 learn from 不需要加受詞——learn from a mistake、learn from a colleague、learn from every opportunity。',
            },
          ],
        },

        {
          t: 'note',
          id: 's1-lack',
          en: 'lack, a lack of, lacking',
          zh: 'lack、a lack of、lacking',
          bodyEn: 'Two of your sentences tripped on this word, so it is worth a minute. As a verb, “lack” takes its object straight away: I lack confidence. As a noun, it needs “a” and “of”: a lack of confidence — My lack of experience sometimes makes me hesitate. “Lacking” is an adjective and comes after “be”: Something is lacking. ✕ I’m lack of confidence. ✕ I lack of experience. ✓ I lack confidence. ✓ My biggest problem is a lack of confidence.',
          bodyZh: '你有兩句話都卡在這個字上，值得花一分鐘。當動詞用時，lack 後面直接接受詞：I lack confidence。當名詞用時，需要 a 和 of：a lack of confidence——My lack of experience sometimes makes me hesitate。lacking 是形容詞，放在 be 後面：Something is lacking。✕ I’m lack of confidence. ✕ I lack of experience. ✓ I lack confidence. ✓ My biggest problem is a lack of confidence.',
        },

        {
          t: 'fix',
          id: 's1-fix-c',
          en: 'One or many: nouns that count',
          zh: '一個還是很多：可數名詞',
          hintEn: 'English makes you decide whether a noun can be counted, and Chinese does not. Tap to see the repair.',
          hintZh: '英文要求你判斷一個名詞能不能數，中文則不需要。點一下看修正版。',
          items: [
            {
              wrong: 'I’ve learned a lot of technique during this half of year.',
              right: 'I’ve learned a lot of techniques over the past six months.',
              whyEn: '“Technique” counts — one technique, three techniques — so after “a lot of” it needs the -s. And “this half of year” is 這半年 in English words. English measures back from today: over the past six months, or in the last six months.',
              whyZh: 'technique 是可數名詞——one technique、three techniques——所以 a lot of 後面要加 -s。另外 this half of year 是把「這半年」直接換成英文字。英文是從今天往回算：over the past six months，或 in the last six months。',
            },
            {
              wrong: 'I started to refuse lots of learning opportunity.',
              right: 'I started turning down a lot of learning opportunities.',
              whyEn: 'An opportunity counts, so “a lot of opportunities”. The verb matters too: “refuse” sounds like rejecting a demand, while “turn down” is what you do to an offer — turn down an invitation, turn down a job, turn down an opportunity.',
              whyZh: 'opportunity 是可數名詞，所以是 a lot of opportunities。動詞也有差別：refuse 聽起來像「拒絕一個要求」，而 turn down 是用在「別人給你的東西」上——turn down an invitation、turn down a job、turn down an opportunity。',
            },
            {
              wrong: 'I have done every research that I can do before clients go to our clinic.',
              right: 'I do as much research as I can before a client comes to the clinic.',
              whyEn: '“Research” does not count, so there is no “every research” and no “researches”; you do a lot of research, or as much research as you can. Two more repairs. You are describing a habit, so the simple present: I do. And the client is coming towards you, so “comes to the clinic” — “go” is for moving away from where you are.',
              whyZh: 'research 是不可數名詞，所以沒有 every research，也沒有 researches；要說 a lot of research，或 as much research as you can。另外還有兩個修正。你描述的是一個習慣，所以用現在簡單式：I do。而且客戶是朝你這邊來，所以是 comes to the clinic——go 是往離開你所在位置的方向走。',
            },
          ],
        },

        {
          t: 'fix',
          id: 's1-fix-d',
          en: 'Thought in Chinese, said in English',
          zh: '用中文想，用英文說',
          hintEn: 'Each of these is a good Chinese sentence translated word by word. The repair is not a grammar rule — it is the phrase English already has for the idea. Tap to see it.',
          hintZh: '這些句子每一句都是一句很好的中文，只是被一個字一個字翻成英文。修正的方法不是文法規則，而是英文本來就有的那個說法。點一下看。',
          items: [
            {
              wrong: 'We should treat ourselves as the clinic stockholder.',
              right: 'We should think of ourselves as shareholders in the clinic.',
              whyEn: '“Stockholder” is not wrong, but “shareholder” is the everyday word — and since “we” is plural, so is the noun. The bigger change is the verb. How you see yourself is “think of yourself as”; “treat” is about how you behave towards someone: treat a client with respect.',
              whyZh: 'stockholder 沒有錯，但 shareholder 是比較日常的說法——而且 we 是複數，名詞也要用複數。更大的修正是動詞。「把自己看作……」要說 think of yourself as；treat 講的是你怎麼對待別人：treat a client with respect。',
            },
            {
              wrong: 'What I can do more to help this clinic.',
              right: 'What else can I do to help the clinic?',
              whyEn: '還可以多做什麼 is “what else”, not “what … more” — and this is one of the most useful chunks on the page, because it is the question at the centre of the whole lesson. As a direct question, the verb comes before the subject: what else can I do? Inside a longer sentence it goes back to normal order: I try to think about what else I can do to help.',
              whyZh: '「還可以多做什麼」是 what else，不是 what … more——而這是這一頁最有用的語塊之一，因為它正是整堂課的核心問題。當直接問句時，動詞要放在主詞前面：what else can I do? 放在長句裡時就回到一般語序：I try to think about what else I can do to help.',
            },
            {
              wrong: 'So our mindset would be wider.',
              right: 'So that would broaden our perspective.',
              whyEn: 'In English a mindset is not wide or narrow. The phrase for this idea is “broaden your perspective”, or “think more broadly”: Working with different clients has broadened my perspective.',
              whyZh: '在英文裡，mindset 不會用寬或窄來形容。這個意思的說法是 broaden your perspective，或 think more broadly：Working with different clients has broadened my perspective.',
            },
            {
              wrong: 'I was still… came out of lots of thoughts.',
              right: 'I still had a lot of thoughts going through my mind.',
              whyEn: '腦中冒出很多想法 does not become “come out”. English says thoughts go through your mind, or run through your head: I had a lot of worst-case scenarios going through my mind.',
              whyZh: '「腦中冒出很多想法」不能翻成 come out。英文會說想法 go through your mind，或 run through your head：I had a lot of worst-case scenarios going through my mind.',
            },
            {
              wrong: 'That’s my anxious reason.',
              right: 'That’s where my anxiety comes from.',
              whyEn: '“Anxious” describes a person — I feel anxious — and “anxiety” is the thing itself. But the better repair is the pattern: “That’s where … comes from” explains the cause of a feeling in one short sentence. That’s where my lack of confidence comes from.',
              whyZh: 'anxious 是形容人的——I feel anxious——anxiety 才是那個東西本身。但更好的修正是這個句型：「That’s where … comes from」用一句短短的話就說明了一種感受的來源。That’s where my lack of confidence comes from.',
            },
            {
              wrong: 'Her target is to make her neck skin more tight.',
              right: 'Her goal is to tighten the skin on her neck.',
              whyEn: 'For what a client hopes to achieve, “goal” sounds more natural than “target”, which is closer to a number to hit. “Neck skin” is Chinese word order (脖子皮膚); English says the skin on her neck. And “tighten” is one verb doing the work of “make … more tight” — it is also the word you will hear in a consultation.',
              whyZh: '談客戶想達成的效果，goal 比 target 自然；target 比較像一個要達到的數字。neck skin 是中文的語序（脖子皮膚），英文要說 the skin on her neck。另外 tighten 一個動詞就做到了 make … more tight 的事——而且這也是你在諮詢時會聽到的字。',
            },
            {
              wrong: 'Give her a company… to do the treatment.',
              right: 'I kept her company during the treatment.',
              whyEn: '陪她 is “keep someone company” — and here “company” means being with someone, so it takes no “a”. (“A company” is a business.) In your job, “I stayed with her during the treatment” says the same thing and sounds a little more professional.',
              whyZh: '「陪她」是 keep someone company——這裡的 company 是「陪伴」，所以不加 a（a company 是一間公司）。在你的工作場合，「I stayed with her during the treatment」意思一樣，聽起來也更專業一點。',
            },
            {
              wrong: 'She also got the good result that she won.',
              right: 'She also got the result she wanted.',
              whyEn: 'English says “get the result you want” — and it does not need “good”, because the result you wanted is already a good one. “She was happy with the outcome” is another way to say it.',
              whyZh: '英文會說 get the result you want——而且不需要加 good，因為你想要的結果本來就是好的結果。「She was happy with the outcome」也是另一種說法。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Four things to listen for in your own English',
          zh: '在自己的英文裡，要留意的四件事',
          bodyEn: 'One: prepositions — anxious about, an experience with, learn from, grow in. Two: collocations, the words that go together — take initiative, build confidence, address a concern. Three: countability — techniques and opportunities take an -s; research never does. Four, and the most important: translating word by word from Chinese. The cure for the fourth is the cure for the other three as well: learn the whole chunk, not the single word, so that “what else can I do” arrives in one piece when you need it.',
          bodyZh: '一、介系詞——anxious about、an experience with、learn from、grow in。二、搭配詞，也就是習慣一起出現的字——take initiative、build confidence、address a concern。三、可數與不可數——techniques 和 opportunities 要加 -s，research 永遠不加。四、也是最重要的：從中文一個字一個字翻成英文。第四點的解方，其實也是前三點的解方：學整個語塊，而不是單一個字，這樣你需要的時候，「what else can I do」就會整句一起出來。',
        },

        {
          t: 'part',
          id: 's1-b',
          n: 'B',
          en: 'What we talked about',
          zh: '我們談了什麼',
        },

        {
          t: 'summary',
          n: '1',
          titleEn: 'From a worker mindset to an ownership mindset',
          titleZh: '從「員工思維」走向「主人翁思維」',
          en: 'One of the biggest topics in this session was the difference between simply completing tasks and thinking more broadly about how you can contribute to the clinic. A worker mindset asks: what do I need to finish today? An ownership mindset asks a different question: what else can I do to make this clinic better? This does not mean that finishing your tasks is unimportant. It means that as you become more experienced, you can start looking beyond the task itself and think about the bigger picture — how to improve the client’s experience, what problems might happen and how to prevent them, how to support your coworkers or improve the workflow, and what you can do without waiting for someone to tell you. This is one important step in your professional growth.',
          zh: '這堂課其中一個最重要的主題，就是「只把工作做完」和「思考自己還能如何為診所創造更多價值」之間的差別。「員工思維」會問：我今天需要完成什麼？「主人翁思維」會問不同的問題：我還能做什麼，讓這間診所變得更好？這並不是說完成工作不重要，而是當你的工作經驗逐漸增加之後，你可以開始不只看眼前的工作，而是思考更大的整體——如何改善客戶的體驗、可能會發生哪些問題又該如何預防、如何協助同事或改善工作流程，以及有哪些事情不需要等別人交代就可以主動去做。這會是你職涯成長中很重要的一步。',
        },

        {
          t: 'contrast',
          en: 'Two questions for the same working day',
          zh: '同一個工作天，兩種不同的問題',
          hintEn: 'The same situations, asked from each side. Neither column is wrong English — the difference is how far the question looks.',
          hintZh: '同樣的情境，從兩種角度來問。兩邊的英文都沒有錯——差別在於問題看得有多遠。',
          coldEn: 'Worker mindset',
          coldZh: '員工思維',
          warmEn: 'Ownership mindset',
          warmZh: '主人翁思維',
          items: [
            {
              caseEn: 'Starting the day',
              caseZh: '一天的開始',
              cold: { en: 'What do I need to finish today?', zh: '我今天需要完成什麼？' },
              warm: { en: 'What else can I do to make the clinic better?', zh: '我還能做什麼，讓診所變得更好？' },
              whyEn: 'The first question ends when the list is done. The second one has no fixed end, which is why it is the one that grows you.',
              whyZh: '第一個問題在清單做完時就結束了。第二個問題沒有固定的終點，這也是為什麼它才是讓你成長的那一個。',
            },
            {
              caseEn: 'A client’s visit',
              caseZh: '客戶來訪',
              cold: { en: 'I did the part I was asked to do.', zh: '我做完了被交代的那部分。' },
              warm: { en: 'How can I improve this client’s experience?', zh: '我可以如何改善這位客戶的體驗？' },
              whyEn: 'The left-hand sentence is about your task; the right-hand one is about the person in front of you. Clients notice the difference even when they could not name it.',
              whyZh: '左邊那句講的是你的工作；右邊那句講的是你眼前的那個人。就算客戶說不出來，他們也感覺得到其中的差別。',
            },
            {
              caseEn: 'Problems',
              caseZh: '問題',
              cold: { en: 'I’ll deal with it if it happens.', zh: '真的發生了再處理。' },
              warm: { en: 'What might go wrong, and how can I prevent it?', zh: '可能會出什麼問題？我可以如何預防？' },
              whyEn: 'The same thinking you already do before a client arrives — the difference is using it to prevent problems instead of to worry about them.',
              whyZh: '這其實就是你在客戶來之前本來就在做的思考——差別在於，把它用來預防問題，而不是用來擔心問題。',
            },
            {
              caseEn: 'Your colleagues',
              caseZh: '你的同事',
              cold: { en: 'That’s not my job.', zh: '那不是我的工作。' },
              warm: { en: 'How can I support my coworkers or improve the workflow?', zh: '我可以如何協助同事，或改善工作流程？' },
              whyEn: 'An owner sees the whole clinic, not one job description. That is what “see the bigger picture” means in practice.',
              whyZh: '老闆看到的是整間診所，而不是一份職務說明。這就是 see the bigger picture 在實際工作中的意思。',
            },
            {
              caseEn: 'Waiting',
              caseZh: '等待',
              cold: { en: 'Nobody has told me to do it yet.', zh: '還沒有人叫我做。' },
              warm: { en: 'What can I do without waiting to be told?', zh: '有哪些事我不用等別人交代就能做？' },
              whyEn: 'This is “take initiative” as a question you can ask yourself on an ordinary Tuesday.',
              whyZh: '這就是 take initiative——變成一個你在平常的星期二就能問自己的問題。',
            },
          ],
        },

        {
          t: 'photo',
          src: 'img/records.jpg',
          alt: 'Hands in a white coat holding a clipboard of patient documents and a pen',
          by: 'MART PRODUCTION',
          pos: '50% 40%',
        },

        {
          t: 'summary',
          id: 's1-trust',
          n: '2',
          titleEn: 'Your main challenge may not be ability — it may be self-trust',
          titleZh: '你目前最大的挑戰，可能不是能力，而是對自己的信任',
          en: 'You explained that before meeting a client, you usually prepare very carefully: you read the client’s records, review previous photos, find out what treatments the client has had before, think about what the client needs now, and prepare possible recommendations. That shows you are responsible and serious about your job. However, even after preparing well, you may still think: what if the client doesn’t like me? What if I say something she doesn’t want to hear? What if something goes wrong? The important question is whether those things actually happened — and in many situations, the answer was no. That suggests your main challenge may not be a lack of ability. It may be overthinking, anxiety and a lack of self-trust. You described it clearly yourself in class: you get anxious about things that you can actually do. Recognising this is already an important step forward.',
          zh: '你提到，在接待客戶之前，你通常都會做非常充分的準備：仔細閱讀客戶的紀錄、查看之前的照片、了解客戶過去做過哪些療程、思考客戶目前的需求，並準備可能的建議。這代表你對工作很有責任感，而且非常認真。但是，即使已經準備得很完整，你還是可能會想：如果客戶不喜歡我怎麼辦？如果我講了她不想聽的事情怎麼辦？如果出了什麼問題怎麼辦？這時候很重要的問題是：你擔心的那些事情，真的發生了嗎？很多時候，答案其實是沒有。這代表你現在最大的問題可能並不是能力不足，更可能是想太多、焦慮，以及還不夠相信自己。你在課堂上自己就說得很清楚：你常常對一些其實自己做得到的事情感到焦慮。能夠意識到這一點，本身就已經是一個很重要的進步。',
        },

        {
          t: 'photo',
          src: 'img/consultation.jpg',
          alt: 'A clinician and a client in a treatment chair looking at a tablet together, both smiling',
          by: 'Gustavo Fring',
          pos: '50% 35%',
        },

        {
          t: 'summary',
          n: '3',
          titleEn: 'Your client experience is evidence that you are improving',
          titleZh: '你的客戶案例，就是你正在進步的證據',
          en: 'You shared an experience about a client who had once received a very painful treatment at another clinic, and had been afraid of anything similar ever since. When she came to your clinic, you and your team did not simply try to sell her another procedure. You understood her previous experience, identified her concerns, explained the treatment clearly, showed her how it was different, rebuilt her trust, and stayed with her during the procedure. As a result, she had a much better experience and got the result she wanted. This matters because it shows you are no longer only completing tasks. You are becoming a more client-centred professional — learning to understand people, communicate clearly, build trust, reduce a client’s anxiety, and guide someone through a difficult decision. That is real professional growth.',
          zh: '你分享了一個很重要的案例：有一位客戶曾經在其他診所接受過非常痛苦的療程，從此對類似的療程產生了很大的恐懼。當她來到你們診所時，你和團隊並不是單純想要再「賣一個療程」給她。你們了解她過去的經驗、確認她真正擔心的是什麼、清楚說明療程、讓她了解不同療程之間的差異、重新建立她的信任，並在療程過程中陪伴她。最後，她得到了一次比過去好很多的經驗，也獲得了她想要的效果。這個案例很重要，因為它證明你已經不只是「完成工作」而已。你正在逐漸成為一位以客戶為中心的專業工作者——學會理解不同的人、清楚溝通、建立信任、降低客戶的不安，以及協助客戶做出困難的決定。這就是真正的職場成長。',
        },

        {
          t: 'photo',
          src: 'img/journal.jpg',
          alt: 'Hands writing in a lined notebook with a pencil',
          by: 'Kevin Malik',
          pos: '50% 55%',
        },

        {
          t: 'summary',
          n: '4',
          titleEn: 'Keep a progress journal — not only a mistake journal',
          titleZh: '建立「進步紀錄」，不要只記錄錯誤',
          en: 'You said that your notebook is mostly a list of the mistakes you have made and the things you want to improve. That is useful. But if you only record mistakes, the notebook slowly becomes a collection of evidence that you are “not good enough”. You also need evidence of your progress. Try asking yourself: What did I do well today? What did I handle better than before? What am I proud of today? What action helped me get a good result? Confidence does not always come from telling yourself “I’m good enough.” A steadier kind comes from evidence: I have done this before, I handled it well, and I can probably handle it again. That is evidence-based confidence.',
          zh: '你提到，你現在的筆記本裡大多記錄的是自己犯過的錯誤，以及需要改進的地方。這當然有幫助。但是如果你只記錄錯誤，筆記本可能慢慢變成一份不斷證明「自己還不夠好」的紀錄。你同樣也需要「自己正在進步」的證據。你可以開始問自己：我今天哪件事情做得不錯？有什麼事情我比以前處理得更好了？今天有什麼事情值得我為自己感到驕傲？是什麼行動讓我得到好的結果？自信不一定來自一直告訴自己「我很棒」。更穩定的自信來自於證據：我以前做過這件事，我處理得很好，所以下一次我很可能也做得到。這就是「以證據建立的自信」。',
        },

        {
          t: 'summary',
          n: '5',
          titleEn: 'Maturity does not mean having no emotions',
          titleZh: '成熟，不代表沒有情緒',
          en: 'You said you want to become more mature, less sensitive and less emotional. But being mature does not mean having no emotions — everyone has them. The skill is what happens between the emotion and the reaction: emotion, then space, then reaction. I feel nervous. I notice that I am nervous. I give myself a moment to think. I choose the most appropriate response. The goal is not “Don’t feel nervous.” The goal is: even when I feel nervous, I can still choose my next action.',
          zh: '你說，你希望自己可以變得更成熟、不要那麼敏感，也不要那麼容易受情緒影響。但是成熟並不代表沒有情緒——每個人都有情緒。真正重要的能力，是「情緒出現之後、做出反應之前」的那段空間：情緒 → 空間 → 反應。我感到緊張。我注意到自己很緊張。我給自己一點時間思考。我選擇最適合的反應方式。目標不是「不要緊張」，而是：即使我感到緊張，我還是可以決定自己下一步要怎麼做。',
        },

        {
          t: 'photo',
          src: 'img/knitting.jpg',
          alt: 'Close-up of two hands knitting with natural yarn',
          by: 'Sergei Starostin',
          pos: '50% 50%',
        },

        {
          t: 'summary',
          n: '6',
          titleEn: 'Attention is also a professional skill',
          titleZh: '專注力也是一種職場能力',
          en: 'Attention is not only for studying. In your job, it is how you notice the signals a client gives you — tone of voice, facial expressions, body language, hesitation, emotions, concerns — and those details help you decide how to talk to each client. That is why activities that ask for sustained attention, such as knitting, LEGO or reading, are worth your time: they are practice at staying with one thing for a long period. Reducing unnecessary phone use helps too, because attention is limited. So it is worth asking: what deserves my attention?',
          zh: '專注力不只是讀書時才重要。在你的工作中，專注力讓你注意到客戶釋放出的各種訊號——說話語氣、臉部表情、肢體語言、猶豫、情緒、顧慮——而這些細節能幫助你判斷，面對不同的客戶該如何溝通。這也是為什麼編織、樂高、閱讀這類需要長時間專注的活動值得投入：它們是在練習「長時間待在同一件事上」。減少不必要的手機使用也有幫助，因為人的注意力是有限的。所以值得問自己：什麼事情真正值得我投入注意力？',
        },

        {
          t: 'summary',
          n: '7',
          titleEn: 'Don’t try to fix everything at once',
          titleZh: '不要一次想改變所有事情',
          en: 'One of the most useful questions from this session was this: what is one thing I’m doing wrong, that I know I’m doing wrong, that I could fix, and that I would fix? The key words are “one thing”. You do not need to fix ten problems at the same time. Choose one, then turn it into an action plan — something specific enough that you would know at the end of the day whether you had done it. The goal is to turn reflection into action.',
          zh: '這堂課其中一個最值得保留的問題是：有哪一件事情，是我知道自己做得不對、我有能力改變、而且我願意開始改變的？關鍵字是「一件事情」。你不需要一次改掉十個問題。選一個就好，接著把它變成具體的行動計畫——具體到一天結束時，你就知道自己有沒有做到。目標是把反思轉換成行動。',
        },

        {
          t: 'contrast',
          en: 'A wish, and an action',
          zh: '一個願望，和一個行動',
          hintEn: 'The left column is what most people write in a notebook. The right column is something you can check at the end of the day.',
          hintZh: '左邊是大多數人會寫在筆記本裡的句子。右邊則是你在一天結束時可以檢查的事情。',
          coldEn: 'A wish',
          coldZh: '一個願望',
          warmEn: 'An action',
          warmZh: '一個行動',
          items: [
            {
              caseEn: 'Confidence',
              caseZh: '自信',
              cold: { en: 'I want to be more confident.', zh: '我想變得更有自信。' },
              warm: { en: 'After every important client interaction, I will write down one thing I handled well.', zh: '每次完成一個重要的客戶互動之後，我會寫下一件自己處理得好的事情。' },
              whyEn: 'The right-hand sentence has a trigger (after every important interaction), an action (write down) and a size (one thing). That is what makes it possible to keep.',
              whyZh: '右邊的句子有一個觸發點（每次重要的互動之後）、一個動作（寫下來）和一個份量（一件事）。正是這三樣東西，讓它做得到、也持續得了。',
            },
            {
              caseEn: 'Overthinking',
              caseZh: '想太多',
              cold: { en: 'I want to stop overthinking.', zh: '我想停止想太多。' },
              warm: { en: 'I will prepare for the client once, review my notes once, and then stop preparing.', zh: '我會先做好一次完整的準備，再複習一次筆記，然後就停止準備。' },
              whyEn: 'Overthinking is preparation with no stopping point, so the cure is to decide where the stopping point is before you start.',
              whyZh: '想太多，其實就是「沒有停止點的準備」，所以解方就是在開始之前，先決定停止點在哪裡。',
            },
            {
              caseEn: 'Ownership',
              caseZh: '主人翁思維',
              cold: { en: 'I want to have an ownership mindset.', zh: '我想要有主人翁思維。' },
              warm: { en: 'Once a day, I will ask myself what else I can do to make the clinic better.', zh: '每天我會問自己一次：我還能做什麼，讓診所變得更好？' },
              whyEn: 'A mindset cannot be done, but a question can be asked. Ask it every day for a month and the mindset follows.',
              whyZh: '思維沒辦法「做」，但問題可以「問」。連續一個月每天問一次，思維自然就跟上了。',
            },
          ],
        },

        {
          t: 'mcq',
          en: 'Did you get it?',
          zh: '你讀懂了嗎？',
          hintEn: 'Eight questions on the seven sections above. A wrong answer fades and the question stays open, so try again — nothing is scored and nothing is recorded.',
          hintZh: '關於上面七個段落的八個問題。答錯的選項會變淡，題目仍然開著，可以再試一次——不計分，也不會留下紀錄。',
          items: [
            {
              q: 'What question does an ownership mindset ask?',
              qZh: '主人翁思維會問什麼問題？',
              options: [
                'What do I need to finish today?',
                'What else can I do to make the clinic better?',
                'Who should I ask for instructions?',
              ],
              answer: 1,
            },
            {
              q: 'According to the review, what may be your main challenge?',
              qZh: '根據課堂回顧，你目前最大的挑戰可能是什麼？',
              options: [
                'A lack of ability',
                'Not preparing enough before clients arrive',
                'Overthinking, anxiety and a lack of self-trust',
              ],
              answer: 2,
            },
            {
              q: 'What is the important question to ask about the things you worried about?',
              qZh: '關於那些你擔心的事情，最重要的問題是什麼？',
              options: [
                'Did they actually happen?',
                'Who caused them?',
                'How long did they last?',
              ],
              answer: 0,
            },
            {
              q: 'Why was the client in your story afraid?',
              qZh: '你分享的那位客戶為什麼會害怕？',
              options: [
                'She had had a very painful treatment at another clinic',
                'She had never had any treatment before',
                'She did not trust the doctor’s qualifications',
              ],
              answer: 0,
            },
            {
              q: 'What is the problem with a notebook that records only mistakes?',
              qZh: '一本只記錄錯誤的筆記本，問題在哪裡？',
              options: [
                'It takes too long to write',
                'It slowly becomes evidence that you are “not good enough”',
                'It is hard to find anything in it later',
              ],
              answer: 1,
            },
            {
              q: 'In “emotion → space → reaction”, what happens in the space?',
              qZh: '在「情緒 → 空間 → 反應」裡，「空間」發生了什麼事？',
              options: [
                'The emotion disappears',
                'You notice the feeling and choose your response',
                'You tell someone else how you feel',
              ],
              answer: 1,
            },
            {
              q: 'Why does the review call attention a professional skill in your job?',
              qZh: '為什麼課堂回顧說，專注力在你的工作中是一種職場能力？',
              options: [
                'It helps you notice a client’s signals — tone, expression, hesitation',
                'It helps you pass exams',
                'It lets you work longer hours without a break',
              ],
              answer: 0,
            },
            {
              q: 'Which of these is an action rather than a wish?',
              qZh: '以下哪一句是「行動」，而不是「願望」？',
              options: [
                'I want to be calmer with clients.',
                'I will stop preparing once I have reviewed my notes one time.',
                'I hope I overthink less this month.',
              ],
              answer: 1,
              why: {
                en: 'An action can be checked at the end of the day: either you stopped after one review or you did not. The other two describe how you would like to feel, which is where most plans stop.',
                zh: '行動可以在一天結束時檢查：你要嘛複習一次就停了，要嘛沒有。另外兩句描述的是你「希望有的感覺」，而大多數的計畫就停在那裡。',
              },
            },
          ],
        },

        {
          t: 'part',
          id: 's1-c',
          n: 'C',
          en: 'Chunks for the clinic',
          zh: '診所用得到的語塊',
        },

        {
          t: 'lead',
          en: 'These are the phrases you are most likely to need again — with clients, with your colleagues, and when you think about your own work. Learn each one whole, the way you would learn a single word.',
          zh: '這些是你最可能再次用到的片語——面對客戶、和同事相處，以及思考自己的工作時。每一個都整塊記起來，就像記一個單字一樣。',
        },

        {
          t: 'phrases',
          en: 'Growing at work',
          zh: '在工作中成長',
          items: [
            {
              en: 'have an ownership mindset',
              zh: '具有主人翁思維',
              eg: 'I’m trying to develop an ownership mindset instead of simply completing tasks.',
              egZh: '我正在努力培養主人翁思維，而不只是把工作做完。',
            },
            {
              en: 'see the bigger picture',
              zh: '看見整體全局',
              eg: 'As I gain more experience, I’m learning to see the bigger picture.',
              egZh: '隨著經驗增加，我正在學著看見更大的全局。',
            },
            {
              en: 'take initiative',
              zh: '主動採取行動',
              eg: 'I want to take more initiative instead of waiting for instructions.',
              egZh: '我希望自己更主動，而不是等別人給指示。',
            },
            {
              en: 'take ownership of something',
              zh: '對某事負起責任',
              eg: 'I want to take ownership of the client’s experience, from the first call to the follow-up.',
              egZh: '我想對客戶的體驗負起責任，從第一通電話到回診追蹤都是。',
            },
            {
              en: 'contribute more to the team',
              zh: '為團隊做更多貢獻',
              eg: 'I’m thinking about how I can contribute more to the team.',
              egZh: '我正在思考自己可以如何為團隊做更多貢獻。',
            },
            {
              en: 'improve the workflow',
              zh: '改善工作流程',
              eg: 'If we prepared the forms the day before, it would improve the workflow in the morning.',
              egZh: '如果我們前一天就先把表單準備好，早上的工作流程會順很多。',
            },
            {
              en: 'broaden my perspective',
              zh: '擴大我的視野',
              eg: 'Working with so many different clients has broadened my perspective.',
              egZh: '和這麼多不同的客戶相處，拓展了我的視野。',
            },
            {
              en: 'turn down an opportunity',
              zh: '拒絕一個機會',
              eg: 'I don’t want to turn down learning opportunities just because I’m tired.',
              egZh: '我不想只因為累了，就拒絕學習的機會。',
            },
            {
              en: 'learn from every opportunity',
              zh: '從每個機會中學習',
              eg: 'I try to learn from every client I meet.',
              egZh: '我試著從遇到的每一位客戶身上學習。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Confidence and anxiety',
          zh: '自信與焦慮',
          items: [
            {
              en: 'lack confidence',
              zh: '缺乏自信',
              eg: 'I sometimes lack confidence when I meet a new client.',
              egZh: '見新客戶的時候，我有時候會缺乏自信。',
            },
            {
              en: 'trust myself',
              zh: '相信自己',
              eg: 'Once I’ve prepared, I need to learn to trust myself.',
              egZh: '準備好之後，我需要學著相信自己。',
            },
            {
              en: 'overthink things',
              zh: '把事情想得太多',
              eg: 'I tend to overthink things the night before a difficult consultation.',
              egZh: '在一場困難的諮詢前一晚，我很容易想太多。',
            },
            {
              en: 'feel anxious about something',
              zh: '對某事感到焦慮',
              eg: 'I sometimes feel anxious about things I can actually handle.',
              egZh: '我有時候會對一些其實自己應付得來的事情感到焦慮。',
            },
            {
              en: 'worry about what could go wrong',
              zh: '擔心可能出錯的事',
              eg: 'I often worry about what could go wrong, even when nothing has.',
              egZh: '就算什麼事都沒發生，我還是常常擔心可能會出錯。',
            },
            {
              en: 'build confidence',
              zh: '建立自信',
              eg: 'Every consultation that goes well helps me build confidence.',
              egZh: '每一次順利的諮詢，都幫助我建立自信。',
            },
            {
              en: 'handle a situation',
              zh: '處理狀況',
              eg: 'I handled the situation better than I expected.',
              egZh: '我處理那個狀況的表現，比我預期的還要好。',
            },
            {
              en: 'focus on the present moment',
              zh: '專注在當下',
              eg: 'I’m trying to focus on the present moment instead of worrying about tomorrow.',
              egZh: '我正在試著專注在當下，而不是擔心明天。',
            },
            {
              en: 'let go of unnecessary worries',
              zh: '放下不必要的擔憂',
              eg: 'After I’ve prepared, I need to let go of unnecessary worries.',
              egZh: '準備好之後，我需要放下不必要的擔憂。',
            },
            {
              en: 'evidence-based confidence',
              zh: '以證據建立的自信',
              eg: 'Evidence-based confidence comes from remembering what you have already handled.',
              egZh: '以證據建立的自信，來自記得自己已經處理過哪些事。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Talking with clients',
          zh: '和客戶溝通',
          items: [
            {
              en: 'understand a client’s needs',
              zh: '了解客戶的需求',
              eg: 'The first step is always to understand the client’s needs.',
              egZh: '第一步永遠是了解客戶的需求。',
            },
            {
              en: 'address a client’s concerns',
              zh: '回應客戶的疑慮',
              eg: 'We need to address the client’s concerns before we talk about any treatment.',
              egZh: '在談任何療程之前，我們需要先回應客戶的疑慮。',
            },
            {
              en: 'build trust with a client',
              zh: '與客戶建立信任',
              eg: 'Clear explanations help us build trust with clients.',
              egZh: '清楚的說明能幫助我們與客戶建立信任。',
            },
            {
              en: 'rebuild someone’s trust',
              zh: '重建某人的信任',
              eg: 'After a bad experience somewhere else, it can take time to rebuild a client’s trust.',
              egZh: '客戶在別的地方有過不好的經驗之後，重建他們的信任可能需要時間。',
            },
            {
              en: 'set realistic expectations',
              zh: '建立合理的預期',
              eg: 'It’s important to set realistic expectations before any procedure.',
              egZh: '在任何療程之前，建立合理的預期都很重要。',
            },
            {
              en: 'walk someone through something',
              zh: '一步一步向某人說明',
              eg: 'I walked the client through each step of the treatment.',
              egZh: '我一步一步向客戶說明療程的每個步驟。',
            },
            {
              en: 'explain the pros and cons',
              zh: '說明優缺點',
              eg: 'We should explain the pros and cons of each option clearly.',
              egZh: '我們應該清楚說明每個選項的優缺點。',
            },
            {
              en: 'recommend the most suitable treatment',
              zh: '推薦最適合的療程',
              eg: 'Our job is to recommend the most suitable treatment, not simply to sell one.',
              egZh: '我們的工作是推薦最適合的療程，而不只是把療程賣出去。',
            },
            {
              en: 'make an informed decision',
              zh: '在充分了解後做決定',
              eg: 'We give clients enough information to make an informed decision.',
              egZh: '我們提供客戶足夠的資訊，讓他們在充分了解後做決定。',
            },
            {
              en: 'keep someone company / stay with someone',
              zh: '陪伴某人',
              eg: 'I stayed with the client during the treatment so she would not feel alone.',
              egZh: '療程進行時我一直陪著客戶，讓她不會覺得孤單。',
            },
            {
              en: 'provide a positive client experience',
              zh: '提供良好的客戶體驗',
              eg: 'I want to provide a positive client experience from beginning to end.',
              egZh: '我希望從頭到尾都提供良好的客戶體驗。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Preparing for a client',
          zh: '接待客戶前的準備',
          items: [
            {
              en: 'review the client’s records',
              zh: '查看客戶的紀錄',
              eg: 'I always review the client’s records the day before.',
              egZh: '我一定會在前一天先查看客戶的紀錄。',
            },
            {
              en: 'go through someone’s treatment history',
              zh: '看過某人的療程紀錄',
              eg: 'I go through the client’s treatment history to see what she has tried before.',
              egZh: '我會看過客戶的療程紀錄，了解她以前做過什麼。',
            },
            {
              en: 'look at previous photos',
              zh: '查看之前的照片',
              eg: 'Looking at previous photos helps me see what has changed.',
              egZh: '看之前的照片能幫助我看出有哪些改變。',
            },
            {
              en: 'understand the client’s condition',
              zh: '了解客戶目前的狀況',
              eg: 'Before I suggest anything, I want to understand the client’s condition.',
              egZh: '在提出任何建議之前，我想先了解客戶目前的狀況。',
            },
            {
              en: 'identify potential concerns',
              zh: '找出可能的疑慮',
              eg: 'If I identify potential concerns in advance, the consultation goes more smoothly.',
              egZh: '如果我事先找出可能的疑慮，諮詢就會進行得比較順利。',
            },
            {
              en: 'prepare in advance',
              zh: '事先準備',
              eg: 'Preparing in advance means I can listen properly during the consultation.',
              egZh: '事先準備好，代表我在諮詢的時候能好好地聽。',
            },
            {
              en: 'do as much research as I can',
              zh: '盡可能做好功課',
              eg: 'I do as much research as I can before a client comes to the clinic.',
              egZh: '在客戶來診所之前，我會盡可能做好功課。',
            },
            {
              en: 'set a stopping point',
              zh: '設定一個停止點',
              eg: 'I prepare once, review my notes once, and that is my stopping point.',
              egZh: '我準備一次、複習一次筆記，那就是我的停止點。',
            },
          ],
        },

        {
          t: 'lead',
          en: 'A model answer, for shadowing. Tap 🔊, listen, then say it together with the voice — this is how you might describe your preparation to anyone who asks about your job.',
          zh: '一段示範回答，用來跟讀。點 🔊 聽一次，再跟著聲音一起說——有人問起你的工作時，你可以這樣描述自己的準備方式。',
        },

        {
          t: 'summary',
          titleEn: 'Before I meet a client',
          titleZh: '在見客戶之前',
          en: 'Before meeting a client, I usually review her records, look at her previous photos and go through her treatment history. I try to understand her needs and prepare as much as I can in advance. Then I review my notes once, and I stop — because by then, I have done what I can do.',
          zh: '在見客戶之前，我通常會查看她的紀錄、以前的照片，以及她的療程紀錄。我會試著了解她的需求，並盡可能事先做好準備。接著我會複習一次筆記，然後就停下來——因為到了那個時候，我能做的都已經做了。',
        },

        {
          t: 'note',
          id: 's1-medical',
          en: 'The treatment words are English, not advice',
          zh: '這些療程用語是英文，不是建議',
          bodyEn: 'The next set is the language of the treatments themselves. The sentences show how the words are used; they are not claims about what any treatment does, how well, or for whom — that is for the doctor to explain to each client. Notice how often the examples say “can help” or “may” rather than “will”. That is not vagueness: in a clinic it is the accurate way to talk about a result, and it is a habit worth keeping in English too.',
          bodyZh: '下一組是談療程本身的語言。這些句子示範的是字詞怎麼用；它們並不是在說明任何療程的效果、效果有多好，或適合誰——那是醫師要向每一位客戶說明的事。注意例句有多常用 can help 或 may，而不是 will。這不是含糊其辭：在診所裡，這才是談論效果時準確的說法，在英文裡也值得保留這個習慣。',
        },

        {
          t: 'phrases',
          en: 'Treatments and results',
          zh: '療程與效果',
          items: [
            {
              en: 'tighten the skin',
              zh: '緊實皮膚',
              eg: 'Many clients ask whether a treatment can help tighten the skin on the neck.',
              egZh: '很多客戶會問，某個療程能不能幫助緊實脖子的皮膚。',
            },
            {
              en: 'reduce fat tissue',
              zh: '減少脂肪組織',
              eg: 'Reducing fat tissue does not always tighten the skin, so the skin may still be loose afterwards.',
              egZh: '減少脂肪組織不一定會讓皮膚變緊實，所以之後皮膚可能還是會鬆弛。',
            },
            {
              en: 'smooth out wrinkles',
              zh: '撫平皺紋',
              eg: 'The doctor will explain whether this can help smooth out fine lines and wrinkles.',
              egZh: '醫師會說明這是否能幫助撫平細紋和皺紋。',
            },
            {
              en: 'apply numbing cream / a topical anaesthetic',
              zh: '塗抹麻藥膏／表面麻醉',
              eg: 'Before some procedures, we apply numbing cream first.',
              egZh: '有些療程開始之前，我們會先塗抹麻藥膏。',
            },
            {
              en: 'reduce discomfort',
              zh: '減輕不適',
              eg: 'The numbing cream helps reduce discomfort during the procedure.',
              egZh: '麻藥膏有助於減輕療程中的不適。',
            },
            {
              en: 'previous treatment experience',
              zh: '過去的療程經驗',
              eg: 'We always ask about a client’s previous treatment experience.',
              egZh: '我們一定會詢問客戶過去的療程經驗。',
            },
            {
              en: 'have a bad experience with something',
              zh: '對某事有過不好的經驗',
              eg: 'Some clients have had a bad experience with a similar treatment elsewhere.',
              egZh: '有些客戶曾經在別的地方，對類似的療程有過不好的經驗。',
            },
            {
              en: 'get the result you wanted',
              zh: '得到想要的效果',
              eg: 'Setting realistic expectations makes it more likely that a client feels she got the result she wanted.',
              egZh: '建立合理的預期，會讓客戶更有可能覺得自己得到了想要的效果。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Reflecting on your own work',
          zh: '反思自己的工作',
          items: [
            {
              en: 'keep a record of my progress',
              zh: '記錄自己的進步',
              eg: 'I want to keep a record of my progress, not just my mistakes.',
              egZh: '我想記錄自己的進步，而不只是記錄錯誤。',
            },
            {
              en: 'learn from my mistakes',
              zh: '從錯誤中學習',
              eg: 'I try to learn from my mistakes instead of being afraid of them.',
              egZh: '我試著從錯誤中學習，而不是害怕犯錯。',
            },
            {
              en: 'identify an area for improvement',
              zh: '找出需要改善的地方',
              eg: 'At the end of each week, I identify one area for improvement.',
              egZh: '每週結束時，我會找出一個需要改善的地方。',
            },
            {
              en: 'reflect on my performance',
              zh: '反思自己的表現',
              eg: 'I spend five minutes reflecting on my performance at the end of the day.',
              egZh: '每天結束時，我會花五分鐘反思自己的表現。',
            },
            {
              en: 'recognise my progress',
              zh: '看見自己的進步',
              eg: 'I need to learn to recognise my progress, not only my mistakes.',
              egZh: '我需要學著看見自己的進步，而不只是看見錯誤。',
            },
            {
              en: 'turn reflection into action',
              zh: '把反思變成行動',
              eg: 'Reflection only becomes useful when you turn it into action.',
              egZh: '反思只有在變成行動的時候，才真正有用。',
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
            { a: 'take initiative', b: 'act without waiting to be told' },
            { a: 'see the bigger picture', b: 'understand how your task fits into the whole' },
            { a: 'address a concern', b: 'respond to something a person is worried about' },
            { a: 'set realistic expectations', b: 'make sure someone knows what result is likely' },
            { a: 'walk someone through', b: 'explain something to someone step by step' },
            { a: 'make an informed decision', b: 'choose after understanding the options' },
            { a: 'turn down', b: 'say no to something you were offered' },
            { a: 'overthink things', b: 'keep thinking about something long after it helps' },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the right word',
          zh: '選出正確的字',
          hintEn: 'Every item here is one of the four things to listen for in Part A. One of the three options fits. Tap the Chinese for the situation if you want it.',
          hintZh: '這裡的每一題，都是 A 部分「要留意的四件事」之一。三個選項中只有一個適合。想看情境的話，可以點開中文。',
          items: [
            {
              text: 'I tend to get anxious ___ things I can actually handle.',
              textZh: '我很容易對一些其實自己應付得來的事情感到焦慮。',
              options: ['on', 'about', 'for'],
              answer: 1,
              why: {
                en: 'Anxious about, worried about, nervous about — the feeling words share one preposition. “Anxious for” exists but means eager: anxious for news.',
                zh: 'anxious about、worried about、nervous about——這些描述感受的字用同一個介系詞。anxious for 也存在，但意思是「渴望」：anxious for news。',
              },
            },
            {
              text: 'She had a bad experience ___ a similar treatment.',
              textZh: '她對類似的療程有過不好的經驗。',
              options: ['about', 'with', 'of'],
              answer: 1,
              why: {
                en: 'You have an experience with something. “Experience of” is used for knowledge you have built up — experience of working with nervous clients — not for one event.',
                zh: '對某樣東西的經驗是 experience with。experience of 用在「累積起來的經驗」——experience of working with nervous clients——而不是單一事件。',
              },
            },
            {
              text: 'I try to learn ___ every client I meet.',
              textZh: '我試著從遇到的每一位客戶身上學習。',
              options: ['from', 'with', 'by'],
              answer: 0,
              why: {
                en: 'You learn from a person, a mistake or an experience. “Learn with” means studying alongside someone, which is a different idea.',
                zh: '從某個人、某個錯誤或某段經驗中學習，用 learn from。learn with 是「和某人一起學」，那是另一個意思。',
              },
            },
            {
              text: 'I’ve learned a lot of new ___ over the past six months.',
              textZh: '過去這六個月，我學到了很多新技巧。',
              options: ['technique', 'techniques', 'a technique'],
              answer: 1,
              why: {
                en: 'A technique can be counted, so after “a lot of” it takes the plural.',
                zh: 'technique 可以數，所以 a lot of 後面要用複數。',
              },
            },
            {
              text: 'Before the consultation, I did as much ___ as I could.',
              textZh: '諮詢之前，我盡可能做好了功課。',
              options: ['research', 'researches', 'a research'],
              answer: 0,
              why: {
                en: 'Research is uncountable: no “a”, no -s. The same goes for advice, information and equipment — all words you use at work.',
                zh: 'research 是不可數名詞：不加 a，也不加 -s。advice、information、equipment 也一樣——這些都是你工作上會用到的字。',
              },
            },
            {
              text: 'I don’t want to ___ learning opportunities just because I’m tired.',
              textZh: '我不想只因為累了，就拒絕學習的機會。',
              options: ['refuse', 'turn down', 'turn off'],
              answer: 1,
              why: {
                en: 'You turn down an offer or an opportunity. “Refuse” sounds like rejecting a demand, and “turn off” is for a light or a machine.',
                zh: '拒絕別人給的提議或機會，用 turn down。refuse 聽起來像拒絕一個要求，turn off 則是關燈或關機器。',
              },
            },
            {
              text: 'I need to ___ more initiative at work.',
              textZh: '我在工作上需要更主動。',
              options: ['take', 'do', 'make'],
              answer: 0,
              why: {
                en: '“Take initiative” is fixed, like take ownership and take responsibility. All three are about claiming something as yours.',
                zh: 'take initiative 是固定搭配，就像 take ownership、take responsibility。這三個都是「把某件事攬到自己身上」。',
              },
            },
            {
              text: 'We need to ___ her concerns before we talk about any treatment.',
              textZh: '在談任何療程之前，我們需要先回應她的疑慮。',
              options: ['address', 'answer to', 'solve'],
              answer: 0,
              why: {
                en: 'You address a concern — you take it seriously and respond to it. You solve a problem, but a concern is a feeling, and feelings are addressed rather than solved.',
                zh: '回應疑慮用 address a concern——認真看待並做出回應。problem 可以 solve，但 concern 是一種感受，感受是被回應，而不是被解決的。',
              },
            },
            {
              text: 'Clear explanations help us ___ trust with clients.',
              textZh: '清楚的說明能幫助我們與客戶建立信任。',
              options: ['make', 'build', 'take'],
              answer: 1,
              why: {
                en: 'Trust is built, slowly, like confidence: build trust, build confidence, build a relationship. And when it is lost, you rebuild it.',
                zh: '信任是慢慢「建立」起來的，就像自信一樣：build trust、build confidence、build a relationship。一旦失去了，就要 rebuild。',
              },
            },
          ],
        },

        {
          t: 'part',
          id: 's1-d',
          n: 'D',
          en: 'Six patterns you can reuse',
          zh: '六個可以重複使用的句型',
        },

        {
          t: 'lead',
          en: 'Each of these came out of something you tried to say in class. Learn them as whole containers — almost any situation at the clinic will fit inside one.',
          zh: '這些句型每一個都來自你在課堂上想說的一句話。把它們當成完整的框架記起來——診所裡幾乎任何情況都能套進去。',
        },

        {
          t: 'phrases',
          en: 'Sentence patterns',
          zh: '句型',
          items: [
            {
              en: 'What else can I do to…?',
              zh: '我還能做什麼來……？',
              eg: 'What else can I do to make this client feel comfortable?',
              egZh: '我還能做什麼，讓這位客戶覺得自在？',
            },
            {
              en: 'I tend to get anxious about…, even though…',
              zh: '即使……，我還是容易對……感到焦慮',
              eg: 'I tend to get anxious about meeting new clients, even though I usually prepare very well.',
              egZh: '即使我通常準備得很充分，我在見新客戶之前還是很容易焦慮。',
            },
            {
              en: 'That’s where… comes from.',
              zh: '這就是……的來源。',
              eg: 'I compare myself with senior colleagues all the time. That’s where my lack of confidence comes from.',
              egZh: '我一直拿自己跟資深的同事比較。這就是我缺乏自信的來源。',
            },
            {
              en: 'I feel like I’m starting to…',
              zh: '我覺得自己開始……',
              eg: 'I feel like I’m starting to understand what clients really want.',
              egZh: '我覺得自己開始了解客戶真正想要的是什麼了。',
            },
            {
              en: 'I haven’t + past participle + in…',
              zh: '我已經（多久）沒有……',
              eg: 'I haven’t taken a day off in three weeks.',
              egZh: '我已經三個星期沒有休假了。',
            },
            {
              en: 'Instead of…, I want to…',
              zh: '與其……，我想……',
              eg: 'Instead of trying to sell a treatment, I want to help the client make an informed decision.',
              egZh: '與其只是想賣療程，我希望幫助客戶在充分了解後做決定。',
            },
          ],
        },

        {
          t: 'gap',
          en: 'Finish the pattern',
          zh: '把句型補完',
          hintEn: 'The same six containers, one word missing from each. The Chinese gives you the whole sentence if you want the situation.',
          hintZh: '同樣是那六個句型，每一句少一個字。想看情境的話，中文會給你完整的句子。',
          items: [
            {
              text: 'What ___ can I do to help the clinic?',
              textZh: '我還能做什麼來幫助診所？',
              options: ['more', 'else', 'other'],
              answer: 1,
              why: {
                en: '“What else” is the chunk for 還有什麼. “What more can I do?” exists, but it sounds like you have already done a great deal and are close to giving up.',
                zh: '「還有什麼」的語塊是 what else。「What more can I do?」也存在，但聽起來像是你已經做了很多、快要放棄了。',
              },
            },
            {
              text: 'I tend to get anxious about new clients, even ___ I prepare well.',
              textZh: '即使我準備得很好，我還是容易對新客戶感到焦慮。',
              options: ['though', 'if', 'so'],
              answer: 0,
              why: {
                en: '“Even though” is for something that is true: I do prepare well. “Even if” is for something that may or may not happen.',
                zh: 'even though 用在「確實如此」的事：我確實準備得很好。even if 則用在「可能發生、也可能不會發生」的事。',
              },
            },
            {
              text: 'That’s ___ my anxiety comes from.',
              textZh: '這就是我焦慮的來源。',
              options: ['why', 'where', 'what'],
              answer: 1,
              why: {
                en: '“Comes from” needs “where”. “That’s why I feel anxious” is also correct English — it is simply the other pattern.',
                zh: 'comes from 要搭配 where。「That’s why I feel anxious」也是正確的英文——只是另一個句型。',
              },
            },
            {
              text: 'I feel like I’m starting ___ like a machine.',
              textZh: '我覺得自己開始像機器一樣工作了。',
              options: ['to work', 'working', 'work'],
              answer: 0,
              why: {
                en: 'After “starting”, English avoids a second -ing: I’m starting to work, not I’m starting working. With “I started”, both are fine.',
                zh: '在 starting 後面，英文會避免再接一個 -ing：I’m starting to work，而不是 I’m starting working。如果是 I started，兩種都可以。',
              },
            },
            {
              text: 'I haven’t ___ a class in two months.',
              textZh: '我已經兩個月沒有上課了。',
              options: ['have', 'had', 'having'],
              answer: 1,
              why: {
                en: 'Have + the past participle. The past participle of “have” is “had”, so the sentence says “haven’t had”.',
                zh: 'have + 過去分詞。have 的過去分詞是 had，所以要說 haven’t had。',
              },
            },
            {
              text: '___ of trying to sell a treatment, I want to help the client decide.',
              textZh: '與其只是想賣療程，我希望幫助客戶做決定。',
              options: ['Instead', 'Rather', 'Except'],
              answer: 0,
              why: {
                en: '“Instead of” takes a noun or an -ing form. “Rather than” would also work, but “rather” needs “than”, not “of”.',
                zh: 'instead of 後面接名詞或 -ing。rather than 也可以，但 rather 要搭配 than，不是 of。',
              },
            },
          ],
        },

        {
          t: 'part',
          id: 's1-e',
          n: 'E',
          en: 'Your next step',
          zh: '你的下一步',
        },

        {
          t: 'cards',
          en: 'Ten chunks: which are already yours?',
          zh: '十個語塊：哪些已經是你的了？',
          hintEn: 'These are the ten phrases from today that would let you tell the whole lesson again. For each, say whether you would already use it without thinking, or whether it is still new. There is no right answer and nothing is recorded.',
          hintZh: '這是今天的十個片語，有了它們，你幾乎可以把整堂課重新講一次。針對每一個，說說看你是已經會不假思索地用，還是仍然很陌生。沒有標準答案，也不會留下任何紀錄。',
          haveEn: 'I would use this',
          haveZh: '我會用',
          needEn: 'Still new',
          needZh: '還很陌生',
          items: [
            {
              icon: '🚀',
              en: 'take initiative',
              zh: '主動採取行動',
              descEn: 'Act without waiting to be told.',
              descZh: '不等別人交代就主動去做。',
            },
            {
              icon: '🏠',
              en: 'have an ownership mindset',
              zh: '具有主人翁思維',
              descEn: 'Think like someone who owns the result, not only the task.',
              descZh: '像一個對結果負責的人那樣思考，而不只是對工作負責。',
            },
            {
              icon: '❓',
              en: 'What else can I do to…?',
              zh: '我還能做什麼來……？',
              descEn: 'The question at the centre of the whole lesson.',
              descZh: '整堂課的核心問題。',
            },
            {
              icon: '🔭',
              en: 'broaden my perspective',
              zh: '擴大我的視野',
              descEn: 'See more than you did before.',
              descZh: '看得比以前更廣。',
            },
            {
              icon: '🌀',
              en: 'overthink things',
              zh: '把事情想得太多',
              descEn: 'Keep thinking long after it helps.',
              descZh: '想到已經沒有幫助了還在想。',
            },
            {
              icon: '😰',
              en: 'feel anxious about something',
              zh: '對某事感到焦慮',
              descEn: 'With “about” — never “on”.',
              descZh: '搭配 about——不是 on。',
            },
            {
              icon: '🧯',
              en: 'handle a difficult situation',
              zh: '處理困難的狀況',
              descEn: 'Deal with it, and come out the other side.',
              descZh: '面對它，並且把它處理好。',
            },
            {
              icon: '💬',
              en: 'address a client’s concerns',
              zh: '回應客戶的疑慮',
              descEn: 'Take a worry seriously and respond to it.',
              descZh: '認真看待客戶的擔心，並做出回應。',
            },
            {
              icon: '🤝',
              en: 'build trust with a client',
              zh: '與客戶建立信任',
              descEn: 'Slowly, through clear explanations and keeping your word.',
              descZh: '慢慢地，透過清楚的說明和說到做到。',
            },
            {
              icon: '📓',
              en: 'keep a record of my progress',
              zh: '記錄自己的進步',
              descEn: 'Evidence that you are improving, not only a list of mistakes.',
              descZh: '留下自己正在進步的證據，而不只是一份錯誤清單。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Your top three priorities',
          zh: '你最重要的三個目標',
          bodyEn: 'Priority 1, build self-trust: after each workday, write down one thing you handled successfully. Priority 2, reduce overthinking: set a clear stopping point for your preparation. Priority 3, develop an ownership mindset: once a day, ask yourself, “What else can I do to make the clinic better?” Three priorities, one action each — and if three is too many this month, start with the first.',
          bodyZh: '目標一，建立對自己的信任：每個工作日結束後，記錄一件自己成功處理的事情。目標二，減少過度思考：為工作準備設定一個明確的停止點。目標三，培養主人翁思維：每天問自己一次：「我還能做什麼，讓診所變得更好？」三個目標，每個一個行動——如果這個月三個太多，就先從第一個開始。',
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的看法是？',
          hintEn: 'No right answers. Pick one and be ready to say why — that sentence is the exercise.',
          hintZh: '沒有標準答案。選一個，並準備好說明理由——那句理由才是真正的練習。',
          items: [
            {
              en: 'Being mature means not showing your emotions at work.',
              zh: '成熟就是在工作時不表現出情緒。',
            },
            {
              en: 'Preparing more always makes you less anxious.',
              zh: '準備得越多，焦慮一定越少。',
            },
            {
              en: 'Everyone at a clinic should think like a shareholder, not only the managers.',
              zh: '診所裡的每個人都應該用股東的角度思考，而不只是主管。',
            },
            {
              en: 'Writing down what went well is more useful than writing down what went wrong.',
              zh: '記下做得好的事，比記下做錯的事更有用。',
            },
            {
              en: 'It is better to fix one thing properly than to fix five things a little.',
              zh: '把一件事好好改掉，比五件事都改一點點更好。',
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk it through',
          zh: '一起討論',
          items: [
            {
              en: 'What is one thing you are doing wrong, that you know you are doing wrong, that you could fix, and that you would fix?',
              zh: '有哪一件事情，是你知道自己做得不對、你有能力改變，而且你願意開始改變的？',
              starters: [
                { en: 'The one thing I keep doing is…', zh: '我一直重複在做的一件事是……' },
                { en: 'I know it’s a problem because…', zh: '我知道這是個問題，因為……' },
                { en: 'The first small step would be…', zh: '第一個小步驟會是……' },
              ],
            },
            {
              en: 'Think about your last week at work. What did you handle better than you would have six months ago?',
              zh: '想想你上個星期的工作。有什麼事情，你處理得比六個月前的自己更好？',
              starters: [
                { en: 'Six months ago, I would have…', zh: '六個月前的我，大概會……' },
                { en: 'This time, I…', zh: '這一次，我……' },
                { en: 'What helped was…', zh: '有幫助的是……' },
              ],
            },
            {
              en: 'Emotion, space, reaction: tell me about a moment when you felt nervous at work. What happened in the space — or what would you do in it now?',
              zh: '情緒、空間、反應：說一個你在工作中感到緊張的時刻。在那段「空間」裡發生了什麼——或者現在的你會怎麼做？',
              starters: [
                { en: 'I noticed that I was…', zh: '我注意到自己……' },
                { en: 'I gave myself a moment to…', zh: '我給自己一點時間……' },
                { en: 'Next time, I would choose to…', zh: '下一次，我會選擇……' },
              ],
            },
            {
              en: 'What deserves your attention at work, and what takes your attention without deserving it?',
              zh: '工作中什麼事情值得你投入注意力？又有什麼事情佔據了你的注意力，卻不值得？',
              starters: [
                { en: 'What really deserves my attention is…', zh: '真正值得我注意的是……' },
                { en: 'What steals it is…', zh: '偷走我注意力的是……' },
                { en: 'If I put my phone away during…, I think…', zh: '如果我在……的時候把手機收起來，我想……' },
              ],
            },
            {
              en: 'Where does your anxiety come from? Is it about your ability, or about what other people might think?',
              zh: '你的焦慮從哪裡來？是跟你的能力有關，還是跟別人可能怎麼想有關？',
              starters: [
                { en: 'I think it comes from…', zh: '我覺得它來自……' },
                { en: 'That’s where my anxiety comes from.', zh: '這就是我焦慮的來源。' },
                { en: 'The evidence says…, even though I feel…', zh: '證據告訴我……，即使我感覺……' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Say it again, better',
          zh: '再說一次，說得更好',
          instructionEn: 'Talk for about ninety seconds on one of these prompts. Use at least three phrases from the tick-list and one of the six patterns from Part D. When you talk about a client, keep it general — “a client”, “one of our clients” — without a name or anything that would identify her; that is good practice for talking about work in English anyway.',
          instructionZh: '從以下題目選一個，說大約九十秒。至少用上「目標片語」裡的三個，以及 D 部分六個句型的其中一個。談到客戶時，請保持概括——「a client」、「one of our clients」——不提名字，也不提任何認得出她是誰的細節；這本來就是用英文談工作時的好習慣。',
          prompts: [
            {
              en: 'Describe how you prepare before you meet a new client — and where you stop.',
              zh: '描述你在見新客戶之前怎麼準備——以及你在哪裡停下來。',
            },
            {
              en: 'Tell the story of a client whose trust you and your team rebuilt.',
              zh: '說一個你和團隊重新建立起客戶信任的故事。',
            },
            {
              en: 'Explain the difference between a worker mindset and an ownership mindset to a new colleague.',
              zh: '向一位新同事說明「員工思維」和「主人翁思維」的差別。',
            },
            {
              en: 'Describe your past six months at work: what work has changed in you, and what you have learned.',
              zh: '描述你這六個月的工作：工作讓你改變了什麼，你又學到了什麼。',
            },
            {
              en: 'Choose your top priority for the next month and describe the action that goes with it.',
              zh: '選出你下個月最重要的目標，並描述與它搭配的行動。',
            },
          ],
          checklist: [
            { en: 'take initiative', zh: '主動採取行動' },
            { en: 'see the bigger picture', zh: '看見整體全局' },
            { en: 'What else can I do to…?', zh: '我還能做什麼來……？' },
            { en: 'broaden my perspective', zh: '擴大我的視野' },
            { en: 'overthink things', zh: '把事情想得太多' },
            { en: 'feel anxious about', zh: '對……感到焦慮' },
            { en: 'handle a situation', zh: '處理狀況' },
            { en: 'address a client’s concerns', zh: '回應客戶的疑慮' },
            { en: 'build trust with a client', zh: '與客戶建立信任' },
            { en: 'set realistic expectations', zh: '建立合理的預期' },
            { en: 'keep a record of my progress', zh: '記錄自己的進步' },
            { en: 'turn reflection into action', zh: '把反思變成行動' },
          ],
        },
      ],
    },
  ],
};

/* Riva & Rex — the session half of the page.

   The dated record of what happened in each lesson. The practice papers live
   in practice.js, which pushes onto the same `NOTEBOOK.sessions` array, so
   /riva-rex/ is one page with one contents list. Add a session here; add an
   exercise there.

   A running notebook of their pair sessions.

   Like /eason/, /anita/, /aaron/ and /anny/, this is not a lesson. It is a
   notebook that grows: every session adds one entry to `sessions` below and
   nothing else changes. No new files, no new folder, no renderer edit.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n`, `date` and the titles,
   and rewrite the blocks. Put it at the BOTTOM of the array.

   The FILE is chronological, oldest first. The PAGE is not: render.js reverses
   the dated entries at the point of display, so a session added at the bottom
   here appears at the TOP of the page, which is where you want the newest
   lesson. Do not reverse anything by hand — if you do, the numbering and the
   "newest open on load" rule both invert with it.

   The contents list, the numbering and the anchors all come from the array, so
   there is nothing else to keep in step.

   `id` must be unique and URL-safe: it becomes the anchor, so
   /riva-rex/#s3 opens session 3 with the rest folded.

   THE STUDENTS
   ------------
   Riva and Rex are ten to twelve and are taught together, so this is one
   notebook rather than two. Where the source notes name who said what, the
   page names them too — a `note` block headed with the name, or a phrase card
   set that belongs to one of them. Where the notes do not say, the page does
   not guess.

   The register is the notebook register set one step plainer: short sentences
   in the summaries, examples from school and home rather than from an office.
   Nothing here is written down to them. They are eleven, not five, and the
   source notes are already at A2 pushing into B1.

   THE SOURCE
   ----------
   Every session below comes from the Notion page "Riva & Rex", one sub-page
   per week. The vocabulary, the example sentences and the Chinese are Lewis's
   own from those notes and are reproduced rather than rewritten; the framing
   sentences, the discussion questions and the speaking tasks are new, because
   the notes are a record of what was covered and not a page to teach from.

   Where a source note reads "More natural: …", that is a sentence one of them
   actually produced with the upgrade beside it, and it becomes a `fix` block.
   That is the most valuable thing in the notebook and the reason a per-student
   page is worth keeping at all. Do not invent them. If a session's notes carry
   no such line, that session has no `fix` block.

   THE CHINESE LAYER
   -----------------
   Every visible English string has a Traditional Chinese counterpart. English
   is what shows; the Chinese waits behind a small 中 chip, or the 中文 switch
   in the top bar opens the lot. Instructions, task prompts, the contents list
   and anything already behind a deliberate reveal stay bilingual — those are
   scaffolding, not comprehension practice.

   At this age the Chinese is offered more freely than on the adult pages: a
   gap-fill translation is a COMPLETE Chinese sentence with the blank filled
   in, and only the English keeps its ___. The page is teacher-led and nothing
   is scored, so the Chinese is there to make the situation clear rather than
   to be a second puzzle — and it is still one tap away rather than on screen.

   BLOCK TYPES
   -----------
     lead      a framing sentence in italics, opening a session
     link      a pointer to another page in this site
     quote     a short quote, with attribution
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one idea in more depth
     contrast  two columns compared
     phrases   phrase cards — English face up, Chinese and an example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     fix       something Riva or Rex actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking task with a tick-list of target phrases

   Discussion is spoken only. There are no input fields anywhere on this page
   and nothing persists between lessons — at this age the writing happens in
   their paper notebooks, which is where it should stay.
*/

const NOTEBOOK = {
  student: 'Riva & Rex',
  title: 'Riva & Rex’s English Notebook',
  titleZh: 'Riva 與 Rex 的英文筆記',
  kicker: '國小英語 · 課堂筆記',

  intro: {
    en: 'This page is where our lessons are kept. The first part is the record of each lesson — every word, sentence and story we work on together. The second part is the practice: reading papers and grammar, with no date on them, to do in any order and more than once.',
    zh: '這一頁是我們上課的紀錄。上半部是每一堂課的記錄——課堂上練習過的每個單字、句子和故事。下半部是練習題：閱讀考卷和文法練習，它們沒有日期，可以照任何順序做，也可以重複做。',
    goalsEn: 'How to use it',
    goalsZh: '使用方式',
    goals: [
      {
        en: 'Tap any English line to see the Chinese. The 中文 switch at the top opens all of them at once.',
        zh: '點任何一句英文就會出現中文。上方的「中文」按鈕可以一次全部打開。',
      },
      {
        en: 'Tap 🔊 to hear a word or sentence read aloud, as many times as you like.',
        zh: '點 🔊 可以聽單字或句子的發音，想聽幾次都可以。',
      },
      {
        en: 'The questions are for talking, not for writing. Say your answer out loud — there is nothing to type here.',
        zh: '這些問題是用來「說」的，不是用來寫的。請把答案念出來——這裡沒有任何地方需要打字。',
      },
      {
        en: 'Nothing is saved and nothing is scored. Reloading the page clears it for a fresh run.',
        zh: '這裡不會儲存也不會計分。重新整理頁面就會清空，可以重新練一次。',
      },
      {
        en: 'In the practice papers, the reading texts are in English only. That is on purpose — the questions are asking whether you understood, so there is no Chinese to peek at.',
        zh: '在練習題裡，閱讀短文只有英文。這是故意的——因為題目要問的就是你有沒有看懂，所以沒有中文可以偷看。',
      },
      {
        en: 'In a word box, tap a word first and then tap the blank it belongs in. Some words in every box are spare — the box says how many.',
        zh: '在單字框裡，先點一個單字，再點它要放進去的空格。每個框裡都有多餘的字用不到——框上會寫明有幾個。',
      },
      {
        en: 'The newest lesson is open; everything else is folded. Tap any heading to open or close it, or use the contents list.',
        zh: '最新的一堂課是展開的，其他都收合起來。點任何標題就能展開或收合，也可以使用左邊的目錄。',
      },
    ],
  },

  sessions: [
    // ---------------------------------------------------------------- 1
    {
      id: 's1',
      n: 1,
      date: '2026-03-21',
      dateEn: '21 March 2026',
      dateZh: '2026 年 3 月 21 日',
      en: 'Two brooms, three floors, and two candies',
      zh: '兩支掃把、三層樓，還有兩顆糖',

      focus: [
        { en: 'Helping at school', zh: '在學校幫忙' },
        { en: 'Because / after that', zh: 'because 與 after that' },
        { en: 'Saying how you felt', zh: '說出當時的感受' },
        { en: 'Teaching someone else', zh: '教別人' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'A small favour for a teacher — two brooms carried up from the basement — turned out to be a complete story: what you did, why you did it, and how you felt afterwards. That shape is the thing to keep.',
          zh: '幫老師一個小忙——從地下室搬兩支掃把上樓——結果變成了一個完整的故事：你做了什麼、為什麼做，以及做完之後的感受。要記住的就是這個結構。',
        },

        {
          t: 'summary',
          en: 'You helped your teacher carry two brooms from the basement up to the third floor. They were big and heavy for you, and you needed to do it because your class did not have enough brooms for cleaning. On the way, a classmate had to throw away the garbage, and you went with her — partly because she is your good friend, and partly because you did not want to go back to class quite so quickly. The teacher gave you two candies as payment. Afterwards your body felt tired and you wanted to rest, but you were happy, because you had helped.',
          zh: '你幫老師把兩支掃把從地下室搬到三樓。那些掃把對你來說又大又重，而你們必須這樣做，因為班上沒有足夠的掃把可以打掃。路上有位同學要去丟垃圾，你陪她一起去——一方面因為她是你的好朋友，另一方面也因為你不想那麼快回到教室。老師給了你兩顆糖當作回報。之後你的身體覺得很累，想休息，但你很開心，因為你幫上了忙。',
        },

        {
          t: 'phrases',
          en: 'Jobs around school',
          zh: '學校裡的工作',
          items: [
            {
              en: 'broom',
              zh: '掃把',
              eg: 'I helped my teacher carry two brooms from the basement to the third floor.',
              egZh: '我幫老師把兩支掃把從地下室搬到三樓。',
            },
            {
              en: 'heavy',
              zh: '重的',
              eg: 'The brooms were big and heavy for me.',
              egZh: '那些掃把對我來說又大又重。',
            },
            {
              en: 'the basement / the third floor',
              zh: '地下室／三樓',
              eg: 'We went from the basement to the third floor.',
              egZh: '我們從地下室走到三樓。',
            },
            {
              en: 'do cleaning',
              zh: '打掃',
              eg: 'We needed to do this because our class didn’t have enough brooms for cleaning.',
              egZh: '我們需要這樣做，因為班上沒有足夠的掃把打掃。',
            },
            {
              en: 'throw away the garbage',
              zh: '丟垃圾',
              eg: 'My classmate had to throw away the garbage, and I went with her.',
              egZh: '我的同學要去丟垃圾，我陪她一起去。',
            },
            {
              en: 'as payment',
              zh: '作為回報',
              eg: 'The teacher gave me two candies as payment.',
              egZh: '老師給我兩顆糖當作回報。',
            },
            {
              en: 'go with someone',
              zh: '陪某人一起去',
              eg: 'I was happy to go with her because she is my good friend.',
              egZh: '我很開心陪她去，因為她是我的好朋友。',
            },
            {
              en: 'the cashier',
              zh: '收銀員',
              eg: 'The cashier helped us pay for the snacks.',
              egZh: '收銀員幫我們結帳買零食。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'From the week before — teaching, making, finishing',
          zh: '上一週的內容——教人、動手做、完成一件事',
          items: [
            {
              en: 'teach – taught',
              zh: '教（現在式 – 過去式）',
              eg: 'I taught my classmate math because he was confused.',
              egZh: '我教我同學數學，因為他搞不懂。',
            },
            {
              en: 'confused',
              zh: '困惑的、搞不清楚的',
              eg: 'I sometimes get confused in math class.',
              egZh: '我在數學課上有時候會搞不懂。',
            },
            {
              en: 'get better at something',
              zh: '在某件事上進步',
              eg: 'I hope I can get better at math this semester.',
              egZh: '我希望這學期數學可以進步。',
            },
            {
              en: 'a sense of achievement',
              zh: '成就感',
              eg: 'After making the bookmarks, I felt a sense of achievement.',
              egZh: '做完那些書籤之後，我很有成就感。',
            },
            {
              en: 'make something for someone',
              zh: '為某人做東西',
              eg: 'I made the bookmark because I wanted to make something for my classmates.',
              egZh: '我做那個書籤，是因為我想為同學做點東西。',
            },
            {
              en: 'put together LEGO',
              zh: '組樂高',
              eg: 'I enjoy putting together LEGO models.',
              egZh: '我很享受組樂高模型。',
            },
            {
              en: 'noisy / noise',
              zh: '吵的／噪音',
              eg: 'I can’t study well when there is too much noise.',
              egZh: '太吵的時候我沒辦法好好念書。',
            },
            {
              en: 'cover',
              zh: '包（書套）、蓋住',
              eg: 'Please cover the book to keep it clean.',
              egZh: '請把書包起來，才能保持乾淨。',
            },
          ],
        },

        {
          t: 'note',
          en: 'The shape of the whole story',
          zh: '整個故事的結構',
          bodyEn: 'Everything you said today fits one pattern, and it is worth learning as a pattern rather than as separate sentences: I did something → because → after that → I felt… Once you have it, almost any week of your life can be told in four sentences. “I helped my teacher because our class needed more brooms. After doing this, I felt tired but happy.” Notice that the feeling comes last. That is what makes it a story instead of a list.',
          bodyZh: '你今天說的每一件事，其實都符合同一個結構，而且值得把它當成一個「句型」來記，而不是一句一句分開背：I did something → because → after that → I felt…（我做了什麼 → 因為 → 之後 → 我覺得……）。學會之後，幾乎任何一週的生活都可以用四句話講完。「I helped my teacher because our class needed more brooms. After doing this, I felt tired but happy.」注意「感受」是放在最後的。這就是讓它變成一個故事、而不是一張清單的原因。',
        },

        {
          t: 'gap',
          en: 'One word missing',
          zh: '少了一個字',
          hintEn: 'Choose the word that fits. The reason appears after you choose.',
          hintZh: '選出合適的字。選完之後會出現理由。',
          items: [
            {
              text: 'The teacher gave me two candies ___ payment.',
              textZh: '老師給我兩顆糖當作回報。',
              options: ['as', 'for', 'with'],
              answer: 0,
              why: {
                en: '“As payment” means the candies WERE the payment — the thing itself. “For payment” would mean the candies were given in order to get paid, which is not what happened.',
                zh: 'as payment 的意思是「這兩顆糖就是那個回報」——糖本身就是報酬。for payment 會變成「為了拿到報酬而給糖」，跟實際情況不一樣。',
              },
            },
            {
              text: 'I went ___ her because she is my good friend.',
              textZh: '我陪她一起去，因為她是我的好朋友。',
              options: ['with', 'to', 'at'],
              answer: 0,
              why: {
                en: '“Go with someone” means you go together. “Go to someone” would mean you walked over to where she was standing — a different picture.',
                zh: 'go with someone 是「和某人一起去」。go to someone 會變成「走到她站的地方」，畫面完全不一樣。',
              },
            },
            {
              text: 'After ___ this, I felt tired but happy.',
              textZh: '做完這件事之後，我覺得又累又開心。',
              options: ['doing', 'do', 'did'],
              answer: 0,
              why: {
                en: 'After “after”, a verb takes -ing: after doing, after helping, after finishing. This one is worth saying out loud three times.',
                zh: 'after 後面接動詞時要用 -ing：after doing、after helping、after finishing。這個值得念出聲三次。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'Tell me about a time you helped someone at school. What did you do, and how did you feel afterwards?',
              zh: '說說你在學校幫助別人的一次經驗。你做了什麼？之後有什麼感覺？',
              starters: [
                { en: 'I helped my ___ because ___.', zh: '我幫了我的＿＿＿，因為＿＿＿。' },
                { en: 'After doing this, I felt ___.', zh: '做完之後，我覺得＿＿＿。' },
                { en: 'It was tiring, but I was happy because ___.', zh: '雖然很累，但我很開心，因為＿＿＿。' },
              ],
            },
            {
              en: 'Your teacher paid you in candy. What would be a fair payment for carrying two heavy brooms up three floors?',
              zh: '老師用糖果當作你的回報。搬兩支很重的掃把上三樓，你覺得什麼樣的回報才算公平？',
              starters: [
                { en: 'I think a fair payment would be ___.', zh: '我覺得公平的回報應該是＿＿＿。' },
                { en: 'Two candies is not enough, because ___.', zh: '兩顆糖不夠，因為＿＿＿。' },
                { en: 'Actually, I don’t need any payment, because ___.', zh: '其實我不需要任何回報，因為＿＿＿。' },
              ],
            },
            {
              en: 'You taught your classmate math when he was confused. Is teaching someone else a good way to get better at something yourself?',
              zh: '同學搞不懂的時候，你教了他數學。教別人，是不是也是讓自己進步的好方法？',
              starters: [
                { en: 'After teaching him, I felt that I was getting better at math.', zh: '教完他之後，我覺得自己的數學好像變好了。' },
                { en: 'You have to understand it completely before you can explain it.', zh: '你要完全懂了，才有辦法解釋給別人聽。' },
                { en: 'Sometimes I get confused too, so ___.', zh: '有時候我自己也會搞不懂，所以＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 2
    {
      id: 's2',
      n: 2,
      date: '2026-03-28',
      dateEn: '28 March 2026',
      dateZh: '2026 年 3 月 28 日',
      en: 'A page flip animation, finished after dinner',
      zh: '一個翻頁動畫，晚餐後完成',

      focus: [
        { en: 'A thing you made', zh: '你做出來的東西' },
        { en: 'It took me… to…', zh: 'It took me… to… 句型' },
        { en: 'Two things at once', zh: '同時做兩件事' },
        { en: 'For a long time', zh: 'for a long time' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'You had wanted to make a page flip animation for a long time, and last night, after dinner, you finally did. Thirty minutes, two characters, a history book — and a very good sentence pattern hiding inside it.',
          zh: '你一直很想做一個翻頁動畫，而昨天晚餐後，你終於做了。三十分鐘、兩個人物、一本歷史課本——裡面還藏著一個非常好用的句型。',
        },

        {
          t: 'summary',
          en: 'You completed a page flip animation in your notebook last night after dinner. It took you about thirty minutes to finish it, and you were happy, because it was something you had wanted to do for a long time. You were drawing in your book while your mother was helping you review. The drawing was two characters from a history book — one was easy to draw, and the other was more difficult. The drawings took about ten minutes, but you have not finished colouring them yet. Afterwards you felt a sense of achievement, and now you want to draw more page flip animations with your older sister.',
          zh: '你昨天晚餐後在筆記本裡完成了一個翻頁動畫。大約花了三十分鐘完成，你很開心，因為這是你很久以前就一直想做的事。你在書上畫畫的時候，媽媽正在幫你複習。你畫的是歷史課本裡的兩個人物——一個很好畫，另一個比較難。圖大約花了十分鐘畫完，但還沒上色完成。做完之後你很有成就感，現在你想和姊姊一起畫更多翻頁動畫。',
        },

        {
          t: 'fix',
          en: 'Your own sentences, made natural',
          zh: '你自己的句子，改得更自然',
          hintEn: 'These are sentences you really said. Read the first one, work out what is odd about it, then tap to see the natural version.',
          hintZh: '這些是你真正說過的句子。先讀第一句，想想哪裡怪怪的，再點開看自然的說法。',
          items: [
            {
              wrong: 'I have wanted to do this since a long time ago.',
              right: 'I have wanted to do this for a long time.',
              whyEn: 'Use FOR with a length of time (for a long time, for three years, for ten minutes) and SINCE with a starting point (since last year, since I was seven). “A long time” is a length, not a point, so it takes “for”.',
              whyZh: 'for 接的是「一段時間的長度」（for a long time、for three years、for ten minutes）；since 接的是「起點」（since last year、since I was seven）。a long time 是長度而不是起點，所以要用 for。',
            },
            {
              wrong: 'I felt a sense of achievement. / I felt proud.',
              right: 'Both are correct — “I felt a sense of achievement” is the fuller one.',
              whyEn: 'These two say the same thing, and it is useful to have both. “I felt proud” is short and easy to reach for when you are speaking. “I felt a sense of achievement” is longer and sounds more grown-up in writing. Notice it needs the “a”: not “I felt sense of achievement”.',
              whyZh: '這兩句意思一樣，兩個都會說很有用。I felt proud 比較短，說話時容易脫口而出；I felt a sense of achievement 比較長，寫作時聽起來比較成熟。注意一定要有那個 a：不能說 I felt sense of achievement。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Making something',
          zh: '動手做東西',
          items: [
            {
              en: 'a page flip animation',
              zh: '翻頁動畫',
              eg: 'I made a page flip animation in my notebook.',
              egZh: '我在我的筆記本裡做了一個翻頁動畫。',
            },
            {
              en: 'It took me about… to…',
              zh: '我大約花了……做……',
              eg: 'It took me about 30 minutes to finish it.',
              egZh: '我大約花了三十分鐘完成它。',
            },
            {
              en: 'complete something',
              zh: '完成某件事',
              eg: 'I completed a page flip animation last night after dinner.',
              egZh: '我昨晚晚餐後完成了一個翻頁動畫。',
            },
            {
              en: 'while',
              zh: '當……的時候（兩件事同時發生）',
              eg: 'I was drawing in my book while my mother was helping us review.',
              egZh: '當我媽媽在幫我們複習的時候，我正在書上畫畫。',
            },
            {
              en: 'characters',
              zh: '（書中、遊戲中的）人物、角色',
              eg: 'I was trying to draw two characters in a history book.',
              egZh: '我那時正在歷史課本裡畫兩個人物。',
            },
            {
              en: 'a fun challenge',
              zh: '有趣的挑戰',
              eg: 'I wanted to draw this because it was a fun challenge with my classmates.',
              egZh: '我想畫這個，因為這對我和同學來說是一個有趣的挑戰。',
            },
            {
              en: 'one… but the other…',
              zh: '一個……但另一個……',
              eg: 'One character is easy to draw, but the other is more difficult.',
              egZh: '一個人物很好畫，但另一個比較困難。',
            },
            {
              en: 'pajamas',
              zh: '睡衣',
              eg: 'I wear my pajamas before I go to bed.',
              egZh: '我睡覺前會穿上睡衣。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Two things at the same time: while',
          zh: '兩件事同時發生：while',
          bodyEn: 'When two things are happening at the same moment, English puts both verbs in the -ing form and joins them with “while”: I was drawing in my book while my mother was helping us review. Both halves are unfinished actions, which is exactly why both are “was + -ing”. You can turn the sentence around without changing the meaning — “My mother was helping us review, and I was drawing in my book” — and it is worth practising both directions, because in speaking the second one is often easier to start.',
          bodyZh: '當兩件事在同一個時間點正在發生時，英文會把兩個動詞都用 -ing 形，並用 while 連起來：I was drawing in my book while my mother was helping us review.（媽媽在幫我們複習的時候，我正在書上畫畫。）兩邊都是「還沒結束的動作」，這正是兩邊都要用 was + -ing 的原因。這個句子前後對調也不會改變意思——My mother was helping us review, and I was drawing in my book——兩種順序都值得練，因為說話時往往是第二種比較容易開口。',
        },

        {
          t: 'match',
          en: 'Put the halves together',
          zh: '把句子的兩半配起來',
          hintEn: 'Click a beginning on the left, then the ending that finishes it.',
          hintZh: '先點左邊的開頭，再點右邊接得起來的結尾。',
          pairs: [
            { a: 'It took me about ten minutes', b: 'to finish the drawings.' },
            { a: 'I have wanted to do this', b: 'for a long time.' },
            { a: 'I was drawing in my book', b: 'while my mother was helping us review.' },
            { a: 'One character is easy to draw,', b: 'but the other is more difficult.' },
            { a: 'After I finished it,', b: 'I felt a sense of achievement.' },
            { a: 'I finished the drawings,', b: 'but I still need to colour them.' },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'What is something you have wanted to make or do for a long time, but have not started yet? What is stopping you?',
              zh: '有什麼事情是你很久以前就想做、但到現在還沒開始的？是什麼原因讓你還沒開始？',
              starters: [
                { en: 'I have wanted to ___ for a long time.', zh: '我很久以前就一直想＿＿＿。' },
                { en: 'I haven’t started because ___.', zh: '我還沒開始，因為＿＿＿。' },
                { en: 'It would take me about ___ to finish it.', zh: '我大概要花＿＿＿才能完成。' },
              ],
            },
            {
              en: 'You drew in your book while your mother was helping you review. Was that a good idea? Be honest.',
              zh: '媽媽在幫你複習的時候，你在書上畫畫。這是個好主意嗎？誠實一點。',
              starters: [
                { en: 'Actually, I can do two things at the same time because ___.', zh: '其實我可以同時做兩件事，因為＿＿＿。' },
                { en: 'I know I shouldn’t, but ___.', zh: '我知道我不應該，但是＿＿＿。' },
                { en: 'Next time I will ___ first, and then ___.', zh: '下次我會先＿＿＿，然後再＿＿＿。' },
              ],
            },
            {
              en: 'You have finished the drawings but not the colouring. Is a thing finished when it is only half finished?',
              zh: '你把圖畫完了，但還沒上色。一件事只做了一半，算完成嗎？',
              starters: [
                { en: 'I finished the drawings, but I still need to colour them.', zh: '我已經把圖畫完了，但還需要幫它們上色。' },
                { en: 'For me, it’s finished when ___.', zh: '對我來說，＿＿＿的時候才算完成。' },
                { en: 'I often start things and don’t finish them, because ___.', zh: '我常常開始了卻沒完成，因為＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 3
    {
      id: 's3',
      n: 3,
      date: '2026-04-03',
      dateEn: '3 April 2026',
      dateZh: '2026 年 4 月 3 日',
      en: 'April Fool’s Day, and a very high slide',
      zh: '愚人節，還有一座很高的溜滑梯',

      focus: [
        { en: 'A school event', zh: '學校活動' },
        { en: 'Being afraid of heights', zh: '怕高' },
        { en: 'At first → then → overall', zh: 'At first → then → overall' },
        { en: 'Getting used to something', zh: '習慣一件事' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Twelve times down an inflatable slide, in a competition with your classmates over who could go the most. And underneath it, the sentence pattern that turns any experience into a proper account: at first, then, after that, overall.',
          zh: '在充氣溜滑梯上玩了十二次，還和同學比賽看誰玩得多。而在這件事底下的，是一個能把任何經驗變成完整敘述的句型：at first、then、after that、overall。',
        },

        {
          t: 'summary',
          en: 'On April Fool’s Day there was a special activity at your school: a very high inflatable slide. You had wanted to try it for a long time. You played on it twelve times because it was so much fun, and you and your classmates challenged each other to see who could go the most times. Some people only played once, because they were afraid of heights. You were a little afraid at first too, but you got used to the height very quickly — the first time you were really scared, and the second time you felt a little less scared. The hard part was keeping your balance while you climbed up. Overall, it was a fun activity and you really enjoyed it.',
          zh: '愚人節那天，學校有一個特別的活動：一座很高的充氣溜滑梯。你一直很想試試看。因為太好玩了，你玩了十二次，而你和同學還互相挑戰，看誰能玩最多次。有些人只玩了一次，因為他們怕高。你一開始也有點害怕，但很快就習慣了那個高度——第一次真的很怕，第二次就沒那麼怕了。比較難的部分是爬上去的時候要保持平衡。整體來說，這是一個很好玩的活動，你玩得很開心。',
        },

        {
          t: 'fix',
          en: 'Your own sentence, made natural',
          zh: '你自己的句子，改得更自然',
          hintEn: 'Read it first, then tap to see the version to use from now on.',
          hintZh: '先讀一次，再點開看以後要用的說法。',
          items: [
            {
              wrong: 'There was a very high inflated slide at my school.',
              right: 'There was a very high inflatable slide at my school.',
              whyEn: '“Inflated” describes something that has already been filled with air right now. “Inflatable” describes what a thing IS — the kind of thing you blow up. The slide is an inflatable slide even when it is folded up in a cupboard, so “inflatable” is the word you want.',
              whyZh: 'inflated 是「現在已經被充飽氣的」狀態；inflatable 則是在說「這是什麼東西」——一種可以充氣的東西。那座溜滑梯就算折起來收在倉庫裡，它仍然是 an inflatable slide，所以要用 inflatable。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'The day, and the slide',
          zh: '那一天，還有那座溜滑梯',
          items: [
            {
              en: 'nothing special',
              zh: '沒有特別的感覺',
              eg: 'I don’t feel anything special today.',
              egZh: '我今天沒有特別的感覺。',
            },
            {
              en: 'April Fool’s Day',
              zh: '愚人節',
              eg: 'We had a special activity on April Fool’s Day.',
              egZh: '愚人節那天我們有一個特別活動。',
            },
            {
              en: 'an inflatable slide',
              zh: '充氣溜滑梯',
              eg: 'There was a very high inflatable slide at my school.',
              egZh: '我們學校有一個很高的充氣溜滑梯。',
            },
            {
              en: 'challenge each other',
              zh: '互相挑戰',
              eg: 'My classmates and I challenged each other to see who could play more times.',
              egZh: '我和同學互相挑戰，看誰可以玩更多次。',
            },
            {
              en: 'be afraid of heights',
              zh: '怕高',
              eg: 'Some people played only once because they were afraid of heights.',
              egZh: '有些人只玩一次，因為他們怕高。',
            },
            {
              en: 'get used to something',
              zh: '習慣某件事',
              eg: 'I got used to it after a few tries.',
              egZh: '我試了幾次之後就習慣了。',
            },
            {
              en: 'keep my balance',
              zh: '保持平衡',
              eg: 'It was not easy to keep my balance when I climbed up the slide.',
              egZh: '我爬上去的時候很難保持平衡。',
            },
            {
              en: 'overall',
              zh: '整體來說',
              eg: 'Overall, it was a fun activity, and I really enjoyed it.',
              egZh: '整體來說，這是一個很好玩的活動，我很喜歡。',
            },
          ],
        },

        {
          t: 'note',
          en: 'At first → then → after that → overall',
          zh: 'At first → then → after that → overall',
          bodyEn: 'This is the second pattern of the term, and it is the one that makes you sound organised. Four words, in order: At first, I was scared. Then I tried again. After that, I felt better. Overall, it was fun. The pattern works because it shows a change over time and then judges the whole thing at the end. “Overall” is the most useful of the four and the one most learners never use — it is how you finish, and it tells the listener you have come to the end of your answer.',
          bodyZh: '這是這學期的第二個句型，也是讓你聽起來很有條理的那一個。四個詞，照順序：At first, I was scared.（一開始我很害怕。）Then I tried again.（然後我再試一次。）After that, I felt better.（之後我感覺好多了。）Overall, it was fun.（整體來說很好玩。）這個結構有效，是因為它先呈現「隨時間的改變」，最後再對整件事下評語。四個詞裡最有用的是 overall，也是最多學習者從來不用的一個——它是你用來收尾的方式，同時告訴聽的人：我的回答講完了。',
        },

        {
          t: 'gap',
          en: 'One word missing',
          zh: '少了一個字',
          hintEn: 'Choose the word that fits. The reason appears after you choose.',
          hintZh: '選出合適的字。選完之後會出現理由。',
          items: [
            {
              text: 'I was a little afraid at first, but I got ___ to the height very quickly.',
              textZh: '我一開始有點害怕，但很快就習慣了那個高度。',
              options: ['used', 'use', 'using'],
              answer: 0,
              why: {
                en: 'The phrase is “get used to”. It always keeps this exact shape: got used to, getting used to, will get used to. And the “to” here is a preposition, so what follows is a noun or an -ing verb: used to the height, used to waking up early.',
                zh: '這個片語是 get used to，形狀永遠固定：got used to、getting used to、will get used to。而且這裡的 to 是介系詞，後面要接名詞或動名詞：used to the height、used to waking up early。',
              },
            },
            {
              text: '___, it was a fun activity, and I really enjoyed it.',
              textZh: '整體來說，這是一個很好玩的活動，我很喜歡。',
              options: ['Overall', 'At first', 'However'],
              answer: 0,
              why: {
                en: 'This is the last sentence, so it needs the word that sums everything up. “At first” opens a story and “however” turns it around — neither of them can close it.',
                zh: '這是最後一句，所以需要一個「總結全部」的詞。at first 是用來開頭的，however 是用來轉折的，兩個都沒辦法用來收尾。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'Twelve times! Why do you think some classmates only went once?',
              zh: '玩了十二次！你覺得為什麼有些同學只玩了一次？',
              starters: [
                { en: 'Some people played only once because they were afraid of heights.', zh: '有些人只玩一次，因為他們怕高。' },
                { en: 'Maybe they didn’t want to ___.', zh: '也許他們不想＿＿＿。' },
                { en: 'I was a little afraid at first, but ___.', zh: '我一開始有點害怕，但是＿＿＿。' },
              ],
            },
            {
              en: 'Tell me about something you were scared of at first, and got used to. Use “at first”, “then” and “overall”.',
              zh: '說一件你一開始害怕、後來習慣了的事。請用 at first、then 和 overall。',
              starters: [
                { en: 'At first, I was scared because ___.', zh: '一開始我很害怕，因為＿＿＿。' },
                { en: 'Then I tried again, and ___.', zh: '然後我又試了一次，而且＿＿＿。' },
                { en: 'Overall, it was ___.', zh: '整體來說，那是＿＿＿。' },
              ],
            },
            {
              en: 'Is it a good thing to challenge your classmates, or does it make an activity less fun?',
              zh: '和同學互相挑戰是好事嗎？還是會讓活動變得比較不好玩？',
              starters: [
                { en: 'We challenged each other to see who could ___.', zh: '我們互相挑戰，看誰可以＿＿＿。' },
                { en: 'It’s more fun when ___.', zh: '＿＿＿的時候會比較好玩。' },
                { en: 'I don’t like competing because ___.', zh: '我不喜歡比賽，因為＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 4
    {
      id: 's4',
      n: 4,
      date: '2026-04-11',
      dateEn: '11 April 2026',
      dateZh: '2026 年 4 月 11 日',
      en: 'A cold, a dinosaur, and a balloon caught in time',
      zh: '一場感冒、一隻恐龍，還有一顆及時抓住的氣球',

      focus: [
        { en: 'Being ill', zh: '生病' },
        { en: 'Feeling better', zh: '感覺好轉' },
        { en: 'Helping a stranger', zh: '幫助陌生人' },
        { en: 'So / then', zh: 'so 與 then' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'A day that started badly — weak, unwell, no school — and turned around by the afternoon. A dinosaur exhibition, a little girl’s escaping balloon, and a game of baseball once you felt better.',
          zh: '一天的開頭很糟——身體虛弱、不舒服、沒去上學——但到了下午整個翻轉過來。一場恐龍展、一顆小女孩快飛走的氣球，還有身體好轉後的一場棒球。',
        },

        {
          t: 'summary',
          en: 'You caught a cold, so you did not go to school. In the morning you felt weak and had diarrhea, but by the afternoon you felt much better and went outside to play baseball. Last week your family went to Wei Wu Ying, the National Kaohsiung Center for the Arts, where there was a dinosaur exhibition that you found very interesting. While you were there, a little girl’s balloon was flying away, and you caught it for her. She was happy, and you felt helpful. Meanwhile Riva brought your homework back from school, so now you have more homework to do. You also checked your test results and received a prize, because you had done well.',
          zh: '你感冒了，所以沒有去上學。早上你覺得很虛弱，還拉肚子，但到了下午感覺好多了，就出去打棒球。上週你和家人去了衛武營國家藝術文化中心，那裡有一個恐龍展，你覺得非常有趣。在那裡的時候，有個小女孩的氣球快要飛走，你幫她抓住了。她很開心，你也覺得自己幫上了忙。同時 Riva 幫你把作業從學校帶回來，所以你現在有更多作業要做。你也查看了考試成績，因為表現很好，還拿到了一個獎品。',
        },

        {
          t: 'phrases',
          en: 'Not feeling well',
          zh: '身體不舒服',
          items: [
            {
              en: 'feel cold / feel tired',
              zh: '覺得冷／覺得累',
              eg: 'I am feeling tired because I got up early today.',
              egZh: '我覺得很累，因為我今天很早起床。',
            },
            {
              en: 'catch a cold',
              zh: '感冒',
              eg: 'I caught a cold, so I didn’t go to school yesterday.',
              egZh: '我感冒了，所以昨天沒有去上學。',
            },
            {
              en: 'feel weak',
              zh: '覺得虛弱',
              eg: 'I felt weak in the morning and had diarrhea.',
              egZh: '我早上覺得很虛弱，而且拉肚子。',
            },
            {
              en: 'feel better',
              zh: '感覺好多了',
              eg: 'In the afternoon, I felt much better and went outside to play.',
              egZh: '下午我感覺好多了，就出去玩。',
            },
            {
              en: 'decide',
              zh: '決定',
              eg: 'I decided to stay at home and rest.',
              egZh: '我決定待在家休息。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Out with the family, and back at school',
          zh: '和家人出門，還有回到學校',
          items: [
            {
              en: 'an exhibition',
              zh: '展覽',
              eg: 'There was a dinosaur exhibition, and it was very interesting.',
              egZh: '那裡有一個恐龍展覽，非常有趣。',
            },
            {
              en: 'catch something for someone',
              zh: '幫某人抓住東西',
              eg: 'A little girl’s balloon was flying away, so I caught it for her.',
              egZh: '一個小女孩的氣球飛走了，所以我幫她抓回來。',
            },
            {
              en: 'feel helpful',
              zh: '覺得自己有幫上忙',
              eg: 'After catching the balloon, the girl was happy and I felt helpful.',
              egZh: '抓到氣球後，小女孩很開心，我也覺得自己有幫助。',
            },
            {
              en: 'groceries',
              zh: '食材、日用品',
              eg: 'My mom bought groceries at the market.',
              egZh: '我媽媽在市場買了食材。',
            },
            {
              en: 'tell – told',
              zh: '告訴（現在式 – 過去式）',
              eg: 'My teacher told me to rest at home.',
              egZh: '老師叫我在家休息。',
            },
            {
              en: 'results',
              zh: '成績、結果',
              eg: 'I checked my test results yesterday.',
              egZh: '我昨天查看了考試成績。',
            },
            {
              en: 'receive a prize',
              zh: '得到獎品',
              eg: 'I received a prize because I did well.',
              egZh: '因為表現很好，我得到一個獎品。',
            },
            {
              en: 'have more to do',
              zh: '有更多事情要做',
              eg: 'Now I have more homework to do.',
              egZh: '現在我有更多作業要做。',
            },
          ],
        },

        {
          t: 'note',
          en: 'The third pattern: I was sick → so → then → I felt…',
          zh: '第三個句型：I was sick → so → then → I felt…',
          bodyEn: 'You now have three patterns and they are all doing the same job in different weather. This one carries a day that changed: I caught a cold, so I stayed at home. In the afternoon, I felt better and went out. Overall, it was a better day. The word doing the work is “so” — it links a reason to what you did about it. Compare it with “because”, which you used in the first session: “because” puts the reason second (I stayed at home because I caught a cold), and “so” puts it first. Same two facts, opposite order, and both are worth being able to say.',
          bodyZh: '你現在有三個句型了，它們在不同情境下做的其實是同一件事。這一個用來講「翻轉的一天」：I caught a cold, so I stayed at home.（我感冒了，所以待在家。）In the afternoon, I felt better and went out.（下午我感覺好多了，就出門。）Overall, it was a better day.（整體來說是比較好的一天。）真正在發揮作用的字是 so——它把「原因」和「你因此做了什麼」連起來。可以拿它跟第一堂課用的 because 比較：because 把原因放後面（I stayed at home because I caught a cold），so 把原因放前面。同樣兩件事，順序相反，兩種都值得會說。',
        },

        {
          t: 'gap',
          en: 'One word missing',
          zh: '少了一個字',
          hintEn: 'Choose the word that fits. The reason appears after you choose.',
          hintZh: '選出合適的字。選完之後會出現理由。',
          items: [
            {
              text: 'I caught a cold, ___ I didn’t go to school yesterday.',
              textZh: '我感冒了，所以昨天沒有去上學。',
              options: ['so', 'because', 'but'],
              answer: 0,
              why: {
                en: 'The reason comes first here, so you need “so” to introduce the result. If you wanted “because”, the order would have to flip: I didn’t go to school because I caught a cold.',
                zh: '這裡原因放在前面，所以要用 so 來帶出結果。如果想用 because，順序就必須顛倒：I didn’t go to school because I caught a cold.',
              },
            },
            {
              text: 'A little girl’s balloon was flying away, so I caught it ___ her.',
              textZh: '一個小女孩的氣球快飛走了，所以我幫她抓住。',
              options: ['for', 'to', 'at'],
              answer: 0,
              why: {
                en: '“For someone” means you did it on their behalf — the whole point of the story. “Catch it to her” is not English, and “catch it at her” would mean you threw it in her direction.',
                zh: 'for someone 是「幫某人做這件事」，也正是這個故事的重點。catch it to her 在英文裡不通；catch it at her 則會變成「朝她丟過去」。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'You caught the balloon for a girl you did not know. Why did you do it? Would you do it again?',
              zh: '你幫一個不認識的小女孩抓住了氣球。你為什麼這樣做？下次還會這樣做嗎？',
              starters: [
                { en: 'I caught it for her because ___.', zh: '我幫她抓住，是因為＿＿＿。' },
                { en: 'After that, she was happy and I felt helpful.', zh: '之後她很開心，我也覺得自己有幫上忙。' },
                { en: 'I didn’t really think about it — I just ___.', zh: '我其實沒有多想，我就＿＿＿。' },
              ],
            },
            {
              en: 'Riva brought your homework home while you were ill. Was that a kind thing to do, or not?',
              zh: '你生病的時候，Riva 幫你把作業帶回家。這算是好意嗎？還是不算？',
              starters: [
                { en: 'Riva brought my homework from school, so now I ___.', zh: 'Riva 幫我把作業帶回來，所以我現在＿＿＿。' },
                { en: 'It was kind, but ___.', zh: '這是好意，但是＿＿＿。' },
                { en: 'If I were Riva, I would ___.', zh: '如果我是 Riva，我會＿＿＿。' },
              ],
            },
            {
              en: 'What do you usually do when you are ill and have to stay at home all day?',
              zh: '生病必須在家待一整天的時候，你通常都做些什麼？',
              starters: [
                { en: 'I decided to stay at home and rest.', zh: '我決定待在家休息。' },
                { en: 'In the morning I ___, and in the afternoon I ___.', zh: '早上我＿＿＿，下午我＿＿＿。' },
                { en: 'I feel bored at home because ___.', zh: '我在家會覺得無聊，因為＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 5
    {
      id: 's5',
      n: 5,
      date: '2026-04-25',
      dateEn: '25 April 2026',
      dateZh: '2026 年 4 月 25 日',
      en: 'Camping: hotpot outdoors and a catchy melody',
      zh: '露營：戶外火鍋，還有一段洗腦的旋律',

      focus: [
        { en: 'A camping trip', zh: '露營之旅' },
        { en: 'What I like most about…', zh: 'What I like most about… 句型' },
        { en: 'If it’s possible…', zh: 'If it’s possible… 句型' },
        { en: 'Talking about music', zh: '談論音樂' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'The longest set of corrections so far, and the best one. Five sentences you built yourself, each one nearly right — which is exactly the point at which the small repairs are worth making.',
          zh: '到目前為止最長、也最好的一次訂正。這五個句子都是你自己造出來的，而且每一句都「差一點就對了」——正好是值得動手做小修正的時候。',
        },

        {
          t: 'summary',
          en: 'You went camping in the mountains last weekend, and you were happy because you had not gone camping for a long time. It was hot: the sun was scorching and the sky was clear, but luckily there was some shade from the trees. One of your favourite parts was having hotpot outdoors with your family, and what you liked most was setting up the tent with everyone. You walked around the campsite and explored the area, and it was fun to explore and listen to music outdoors at night. After the trip, you hope you can go camping again at 9th Forest soon, and if it is possible, with friends next time.',
          zh: '你上週末去山上露營，你很開心，因為已經很久沒有去露營了。天氣很熱：太陽非常毒辣、天空晴朗，幸好有一些樹蔭。你最喜歡的其中一部分是和家人在戶外吃火鍋，而你最喜歡的一點是和大家一起搭帳篷。你們在營地四周走走、探索那個地方，晚上一邊探索一邊在戶外聽音樂很有趣。這次露營之後，你希望很快可以再去「第九森林」露營，如果可以的話，下次和朋友一起去。',
        },

        {
          t: 'fix',
          en: 'Five of your own sentences, made natural',
          zh: '你自己的五個句子，改得更自然',
          hintEn: 'Every one of these is a sentence you built. Read it, find the small thing that is off, then tap for the natural version.',
          hintZh: '這裡每一句都是你自己造的句子。先讀一次，找出那個小小的不對勁，再點開看自然的說法。',
          items: [
            {
              wrong: 'I felt happy when we went camping because it had been a long time for us not to go camping.',
              right: 'I felt happy when we went camping because we had not gone camping for a long time.',
              whyEn: 'The idea was right; the shape was borrowed from Chinese. English does not say “it had been a long time for us not to do something”. Put the person first and make the verb negative: we had not gone camping for a long time. Notice “for a long time” again — the same phrase from session 2.',
              whyZh: '意思完全正確，只是句子的形狀是從中文搬過來的。英文不會說 it had been a long time for us not to do something。要把「人」放前面，動詞改成否定：we had not gone camping for a long time。注意 for a long time 又出現了——就是第二堂課的那個片語。',
            },
            {
              wrong: 'Luckily, there was shade of trees.',
              right: 'Luckily, there was some shade from the trees.',
              whyEn: 'Shade comes FROM the thing that makes it, not OF it. And shade is uncountable, so it takes “some” rather than “a”: some shade, some water, some rice.',
              whyZh: '樹蔭是「從」樹來的，用 from 而不是 of。而且 shade 是不可數名詞，所以要用 some 而不是 a：some shade、some water、some rice。',
            },
            {
              wrong: 'It’s fun to explore around and listen to music outdoors.',
              right: 'It’s fun to explore and listen to music outdoors.',
              whyEn: '“Explore” already contains the idea of going around, so “explore around” doubles up. If you want the “around” feeling, use “look around” instead — that one needs it.',
              whyZh: 'explore 這個字本身就含有「四處走走看看」的意思，所以 explore around 是重複了。如果你想要那種「四處」的感覺，可以改用 look around——那個片語才需要 around。',
            },
            {
              wrong: 'What I like the most about rock music is the melody is catchy.',
              right: 'What I like most about rock music is that the melody is catchy.',
              whyEn: 'Two small repairs. First, “what I like most” — English drops the “the” in this phrase. Second, when the second half is a whole sentence (“the melody is catchy”), it needs “that” to join it on. Without the “that”, two sentences are crashing into each other.',
              whyZh: '兩個小修正。第一，what I like most——英文在這個片語裡不加 the。第二，當後半段是一個完整句子（the melody is catchy）時，前面要有 that 把它接起來。沒有 that 的話，等於兩個句子直接撞在一起。',
            },
            {
              wrong: 'After this camping, I hope we can go camping again at 9th Forest soon.',
              right: 'After this camping trip, I hope we can go camping again at 9th Forest soon.',
              whyEn: '“Camping” is the activity, so it cannot follow “this”. The event needs a noun after it: this camping trip, this holiday, this weekend. Compare: I like camping (activity) / this camping trip was fun (event).',
              whyZh: 'camping 是「露營這項活動」，所以不能直接接在 this 後面。指「這一次」的時候後面要有名詞：this camping trip、this holiday、this weekend。比較看看：I like camping（活動）／this camping trip was fun（那一次的事件）。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Outdoors',
          zh: '在戶外',
          items: [
            {
              en: 'scorching',
              zh: '（陽光）毒辣的、燙的',
              eg: 'It was a scorching day, so we drank a lot of water.',
              egZh: '那天非常炎熱，所以我們喝了很多水。',
            },
            {
              en: 'shade',
              zh: '陰影、樹蔭',
              eg: 'We sat in the shade under a big tree.',
              egZh: '我們坐在大樹下的陰影裡。',
            },
            {
              en: 'outdoors',
              zh: '在戶外',
              eg: 'We like eating outdoors on cool evenings.',
              egZh: '我們喜歡在涼爽的晚上在戶外吃東西。',
            },
            {
              en: 'set up the tent',
              zh: '搭帳篷',
              eg: 'What I liked most about camping was setting up the tent with everyone.',
              egZh: '我最喜歡露營的一點，就是和大家一起搭帳篷。',
            },
            {
              en: 'explore',
              zh: '探索、四處走走看看',
              eg: 'We walked around the campsite and explored the area.',
              egZh: '我們在營地四周走走並探索那個地方。',
            },
            {
              en: 'melody',
              zh: '旋律',
              eg: 'I like this song because its melody is soft and sweet.',
              egZh: '我喜歡這首歌，因為它的旋律柔和又好聽。',
            },
            {
              en: 'catchy',
              zh: '洗腦的、朗朗上口的',
              eg: 'This song is catchy, so I remember it easily.',
              egZh: '這首歌很洗腦，所以我很容易記住。',
            },
            {
              en: 'go on a trip',
              zh: '去旅行',
              eg: 'My family will go on a trip next month.',
              egZh: '我家人下個月要去旅行。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Two sentence openers worth owning',
          zh: '兩個值得徹底學會的句子開頭',
          bodyEn: 'What I like most about ___ is that ___. This is how you give an opinion without starting every sentence with “I like”. What I like most about summer is that I can go swimming. What I like most about school is that I see my friends. Remember: no “the” after “like”, and “that” before the second half. If it’s possible, ___. This is a polite, careful way of hoping for something, and it is much softer than “I want”. If it’s possible, I hope we can go camping with friends next time. If it’s possible, I want to go there again. Both openers are ready-made — learn them as whole units and you will never have to build them from scratch.',
          bodyZh: 'What I like most about ___ is that ___.（我最喜歡＿＿＿的一點是＿＿＿。）這是用來表達意見的說法，可以讓你不必每句都用 I like 開頭。What I like most about summer is that I can go swimming.／What I like most about school is that I see my friends. 記住：like 後面不加 the，後半段前面要有 that。If it’s possible, ___.（如果可以的話，＿＿＿。）這是一種客氣、留有餘地的表達期望的方式，比 I want 委婉很多。If it’s possible, I hope we can go camping with friends next time.／If it’s possible, I want to go there again. 這兩個開頭都是現成的——把它們當成一整塊記起來，以後就不必每次從零開始造句。',
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'What do you like most about camping — and what do you like least?',
              zh: '露營你最喜歡哪一點——最不喜歡哪一點？',
              starters: [
                { en: 'What I like most about camping is that ___.', zh: '我最喜歡露營的一點是＿＿＿。' },
                { en: 'What I like least is ___, because ___.', zh: '我最不喜歡的是＿＿＿，因為＿＿＿。' },
                { en: 'One of my favourite parts was ___.', zh: '我最喜歡的其中一部分是＿＿＿。' },
              ],
            },
            {
              en: 'You said rock music has a catchy melody. Describe a song you cannot get out of your head.',
              zh: '你說搖滾樂的旋律很洗腦。描述一首你怎麼樣都忘不掉的歌。',
              starters: [
                { en: 'The melody of this song is ___.', zh: '這首歌的旋律很＿＿＿。' },
                { en: 'It’s catchy, so I remember it easily.', zh: '它很洗腦，所以我很容易記住。' },
                { en: 'I like it because ___.', zh: '我喜歡它，因為＿＿＿。' },
              ],
            },
            {
              en: 'If it’s possible — where do you want to go on your next trip, and what would you take?',
              zh: '如果可以的話——下次旅行你想去哪裡？你會帶什麼？',
              starters: [
                { en: 'If it’s possible, I hope to travel to ___.', zh: '如果可以的話，我希望去＿＿＿旅行。' },
                { en: 'If it’s possible, I hope to take ___ when we go on a trip.', zh: '如果可以的話，我希望旅行時可以帶＿＿＿。' },
                { en: 'Maybe we can invite ___ next time.', zh: '也許我們下次可以邀請＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 6
    /* The first session the source notes split by name. The Mother's Day half
       is labelled "Riva" in the notes; the grades half carries no label, and
       is attributed to Rex here by elimination — it is a two-student class,
       and the following week Rex says he remembered that Riva "had written a
       Mother's Day card before", which puts the card firmly with Riva. That
       is an inference, not something the notes state. If it is wrong, this is
       the one line to change. */
    {
      id: 's6',
      n: 6,
      date: '2026-05-08',
      dateEn: '8 May 2026',
      dateZh: '2026 年 5 月 8 日',
      en: 'A reward for good grades, and a card with a voice inside it',
      zh: '好成績換來的獎勵，還有一張錄了聲音的卡片',

      focus: [
        { en: 'School subjects', zh: '學校科目' },
        { en: 'Being good at / challenged by', zh: '擅長／感到吃力' },
        { en: 'Mother’s Day', zh: '母親節' },
        { en: 'Being touched', zh: '感動' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'From here on the notebook has two voices in it. This week you each brought your own topic — one about grades, one about a card — and each of you needed a different set of words to tell it.',
          zh: '從這裡開始，這本筆記裡有兩個聲音。這一週你們各自帶了自己的主題——一個關於成績，一個關於卡片——而你們各自需要一組不同的詞來把它講出來。',
        },

        {
          t: 'summary',
          en: 'Rex: You got a reward because of your excellent grades at school. Your best subjects are Social Studies and English, and you got 96 on both. You can do well in Social Studies because you practise a lot and do many exercises and test papers; as for English, the tests are quite easy for you because you enjoy learning it. However, you are still challenged by Maths, because the tests are more difficult than you expected. You hope you can improve your Maths grades in the future.',
          zh: 'Rex：因為在學校成績優秀，你得到了一個獎勵。你最好的科目是社會和英文，兩科都拿了 96 分。社會你可以考得好，是因為你練習很多，做了很多練習和考卷；至於英文，考試對你來說相當簡單，因為你喜歡學英文。不過，數學對你來說還是很有挑戰性，因為考題比你預期的還難。你希望未來可以把數學成績提升上來。',
        },

        {
          t: 'phrases',
          en: 'Rex — grades and subjects',
          zh: 'Rex——成績與科目',
          items: [
            {
              en: 'get a reward',
              zh: '得到獎勵',
              eg: 'I got a reward because of my excellent grades at school.',
              egZh: '因為在學校成績優秀，我得到了一個獎勵。',
            },
            {
              en: 'excellent grades',
              zh: '優秀的成績',
              eg: 'She has excellent grades.',
              egZh: '她的成績很優秀。',
            },
            {
              en: 'my best subjects',
              zh: '我最好的科目',
              eg: 'My best subjects are Social Studies and English.',
              egZh: '我最好的科目是社會和英文。',
            },
            {
              en: 'do many exercises',
              zh: '做很多練習',
              eg: 'I can do well in Social Studies because I do many exercises and test papers.',
              egZh: '我社會可以考得好，因為我做了很多練習和考卷。',
            },
            {
              en: 'be challenged by something',
              zh: '對某件事感到吃力',
              eg: 'However, I am still challenged by Math.',
              egZh: '不過，我對數學還是覺得很吃力。',
            },
            {
              en: 'more difficult than I expected',
              zh: '比我預期的還難',
              eg: 'The tests are more difficult than I expected.',
              egZh: '考題比我預期的還難。',
            },
          ],
        },

        {
          t: 'summary',
          en: 'Riva: You made a Mother’s Day card for your mum using coloured paper. You made it because it was a class assignment — your teacher asked everyone to record voice messages for their mothers, and she even added background music to the recordings. She was going to send the voice messages to the mothers at midnight that night. When you gave the card to your mum, she looked very happy, and you thought she would be touched when she heard the voice message later.',
          zh: 'Riva：你用色紙幫媽媽做了一張母親節卡片。你會做這張卡片，是因為那是班級作業——老師請大家錄一段給媽媽的語音訊息，她甚至還幫錄音加上了背景音樂。她預計要在當天午夜把語音訊息傳給媽媽們。當你把卡片交給媽媽時，她看起來很開心，而你覺得她晚上聽到語音訊息的時候一定會很感動。',
        },

        {
          t: 'phrases',
          en: 'Riva — Mother’s Day',
          zh: 'Riva——母親節',
          items: [
            {
              en: 'a Mother’s Day card',
              zh: '母親節卡片',
              eg: 'I made a Mother’s Day card for my mom using colored paper.',
              egZh: '我用色紙幫媽媽做了一張母親節卡片。',
            },
            {
              en: 'a class assignment',
              zh: '班級作業',
              eg: 'I made the card because it was a class assignment.',
              egZh: '我做這張卡片，是因為那是班級作業。',
            },
            {
              en: 'record a voice message',
              zh: '錄語音訊息',
              eg: 'My teacher asked us to record voice messages for our mothers.',
              egZh: '老師請我們錄給媽媽的語音訊息。',
            },
            {
              en: 'background music',
              zh: '背景音樂',
              eg: 'She even added background music to our recordings.',
              egZh: '她甚至還幫我們的錄音加上了背景音樂。',
            },
            {
              en: 'be touched',
              zh: '被感動',
              eg: 'I think she will be touched when she hears the voice message tonight.',
              egZh: '我覺得她今晚聽到語音訊息時會很感動。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Touched, not touching',
          zh: 'touched，不是 touching',
          bodyEn: 'A person is touched; a thing is touching. Your mum was touched (she felt the emotion), and the voice message was touching (it caused the emotion). The same rule runs through a whole family of words you already use: I am bored / the movie is boring. I am excited / the race is exciting. I am interested / the exhibition is interesting. Whenever you are unsure, ask yourself which one is the person — the person gets -ed.',
          bodyZh: '人用 touched，事物用 touching。你媽媽是 touched（她產生了那個情緒），而那段語音訊息是 touching（它引起了那個情緒）。同樣的規則貫穿一整組你已經在用的字：I am bored／the movie is boring；I am excited／the race is exciting；I am interested／the exhibition is interesting。不確定的時候就問自己：哪一個是「人」——人用 -ed。',
        },

        {
          t: 'gap',
          en: 'One word missing',
          zh: '少了一個字',
          hintEn: 'Choose the word that fits. The reason appears after you choose.',
          hintZh: '選出合適的字。選完之後會出現理由。',
          items: [
            {
              text: 'I think she will be ___ when she hears the voice message tonight.',
              textZh: '我覺得她今晚聽到語音訊息時會很感動。',
              options: ['touched', 'touching', 'touch'],
              answer: 0,
              why: {
                en: 'She is the person feeling it, so she takes the -ed form. The message itself would be “touching”.',
                zh: '她是「感受到情緒的人」，所以要用 -ed 的形式。那段訊息本身才是 touching。',
              },
            },
            {
              text: 'However, I am still ___ by Math.',
              textZh: '不過，我對數學還是覺得很吃力。',
              options: ['challenged', 'challenging', 'challenge'],
              answer: 0,
              why: {
                en: 'Same rule again: you are the person, so you are challenged. Maths is the thing, so Maths is challenging.',
                zh: '同一個規則：你是「人」，所以是 challenged；數學是「事物」，所以數學是 challenging。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'Which subject are you challenged by, and what would actually help?',
              zh: '哪一個科目讓你覺得吃力？什麼樣的做法才真的有幫助？',
              starters: [
                { en: 'I am challenged by ___ because ___.', zh: '我對＿＿＿覺得吃力，因為＿＿＿。' },
                { en: 'The tests are more difficult than I expected.', zh: '考題比我預期的還難。' },
                { en: 'I think I should do more ___.', zh: '我覺得我應該多做一些＿＿＿。' },
              ],
            },
            {
              en: 'Should you get a reward for good grades? Or should good grades be their own reward?',
              zh: '成績好應該要有獎勵嗎？還是好成績本身就是獎勵了？',
              starters: [
                { en: 'I got a reward because of my excellent grades.', zh: '因為成績優秀，我得到了一個獎勵。' },
                { en: 'A reward helps me because ___.', zh: '獎勵對我有幫助，因為＿＿＿。' },
                { en: 'Actually, I would study hard even without ___.', zh: '其實就算沒有＿＿＿，我也會努力念書。' },
              ],
            },
            {
              en: 'A handmade card, or a voice message — which one would touch your mother more?',
              zh: '一張手做的卡片，或一段語音訊息——哪一個更能讓你媽媽感動？',
              starters: [
                { en: 'I think she would be more touched by ___, because ___.', zh: '我覺得她會比較被＿＿＿感動，因為＿＿＿。' },
                { en: 'When I gave the card to my mom, she looked very happy.', zh: '當我把卡片交給媽媽時，她看起來很開心。' },
                { en: 'It took me a long time to ___.', zh: '我花了很久的時間＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 7
    {
      id: 's7',
      n: 7,
      date: '2026-05-16',
      dateEn: '16 May 2026',
      dateZh: '2026 年 5 月 16 日',
      en: 'A writing contest, and an idea for Riva',
      zh: '一場寫作比賽，還有一個為 Riva 想出來的點子',

      focus: [
        { en: 'A competition', zh: '比賽' },
        { en: 'This year / last year', zh: '今年／去年' },
        { en: 'Coming up with an idea', zh: '想出點子' },
        { en: 'Training for a race', zh: '為比賽訓練' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Two proud moments in one lesson, and they are different kinds of proud: one for something you did on your own, and one for something you did for the other person in the room.',
          zh: '一堂課裡有兩個驕傲的時刻，而且是兩種不同的驕傲：一個是為自己做到的事，另一個是為了房間裡的另一個人所做的事。',
        },

        {
          t: 'summary',
          en: 'Riva: On Wednesday morning you attended a writing contest. Because of the contest you could skip one class, so you felt happy. This year your seat was in front of the teachers; last year your seat was also facing the teacher, and you felt much more nervous then. In addition, you got full marks on an English exam, and when you saw the result you felt really proud of yourself.',
          zh: 'Riva：星期三早上，你參加了一場寫作比賽。因為比賽，你可以不用上一堂課，所以你很開心。今年你的座位在老師前面；去年你的座位也是面向老師，而你那時候緊張多了。除此之外，你的英文考試拿了滿分，看到成績的時候，你真的對自己感到很驕傲。',
        },

        {
          t: 'summary',
          en: 'Rex: Last week you came up with an idea for Riva, and you felt proud of yourself. Riva did not know what she could share, so you remembered that she had written a Mother’s Day card before. After thinking of this idea you felt happy, because you could help her. In addition, you are going to attend a running race this June. You are excited about it, you are going to train four days a week, and before the race you are going to take good care of your body.',
          zh: 'Rex：上週你想到一個點子幫 Riva，你對自己感到很驕傲。Riva 不知道可以分享什麼，所以你想到她之前寫過一張母親節卡片。想到這個點子之後你很開心，因為你能幫上她的忙。除此之外，你今年六月要參加一場跑步比賽。你對這場比賽很興奮，你打算每週訓練四天，而且在比賽前會好好照顧自己的身體。',
        },

        {
          t: 'phrases',
          en: 'The words this week',
          zh: '這一週的單字',
          items: [
            {
              en: 'attend',
              zh: '參加',
              eg: 'I attended a writing contest.',
              egZh: '我參加了一場寫作比賽。',
            },
            {
              en: 'a contest',
              zh: '比賽',
              eg: 'The contest started at nine o’clock.',
              egZh: '比賽九點開始。',
            },
            {
              en: 'in front of',
              zh: '在……前面',
              eg: 'This year, my seat was in front of the teachers.',
              egZh: '今年我的座位在老師前面。',
            },
            {
              en: 'face / facing',
              zh: '面對、朝向',
              eg: 'Last year, my seat was also facing the teacher.',
              egZh: '去年我的座位也是面向老師。',
            },
            {
              en: 'get full marks',
              zh: '拿滿分',
              eg: 'In addition, I got full marks on an English exam.',
              egZh: '除此之外，我英文考試拿了滿分。',
            },
            {
              en: 'come up with an idea',
              zh: '想出一個點子',
              eg: 'Last week, I came up with an idea for Riva.',
              egZh: '上週我想到一個點子幫 Riva。',
            },
            {
              en: 'in addition',
              zh: '除此之外',
              eg: 'In addition, I am going to attend a running race this June.',
              egZh: '除此之外，我今年六月要參加一場跑步比賽。',
            },
            {
              en: 'take good care of my body',
              zh: '好好照顧身體',
              eg: 'Before the race, I am going to take good care of my body.',
              egZh: '在比賽之前，我會好好照顧自己的身體。',
            },
            {
              en: 'bored',
              zh: '感到無聊的',
              eg: 'I felt bored during the long movie.',
              egZh: '看那部很長的電影時我覺得很無聊。',
            },
            {
              en: 'an alarm',
              zh: '鬧鐘',
              eg: 'My alarm rings at 6:30 every morning.',
              egZh: '我的鬧鐘每天早上六點半響。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Going to, for a plan you have already made',
          zh: 'going to：講一個你已經決定好的計畫',
          bodyEn: 'Rex did not say “I will attend a running race”. He said “I am going to attend a running race this June”, and that is the more accurate choice, because the decision is already made and the training has already started. Use “going to” for a plan that exists: I am going to train four days a week. I am going to take good care of my body. Save “will” for something you decide as you speak. Notice how naturally it repeats — three “going to” sentences in a row is not clumsy in English, it is what a plan sounds like.',
          bodyZh: 'Rex 沒有說 I will attend a running race，他說的是 I am going to attend a running race this June，而這是更準確的選擇，因為這個決定已經做好了，訓練也已經開始了。當一個計畫「已經存在」時，用 going to：I am going to train four days a week.／I am going to take good care of my body. 而 will 留給「說話當下才決定」的事。也注意它重複起來多自然——連續三句 going to 在英文裡並不笨拙，計畫聽起來本來就是這樣。',
        },

        {
          t: 'match',
          en: 'Put the halves together',
          zh: '把句子的兩半配起來',
          hintEn: 'Click a beginning on the left, then the ending that finishes it.',
          hintZh: '先點左邊的開頭，再點右邊接得起來的結尾。',
          pairs: [
            { a: 'Because of the contest,', b: 'I could skip one class.' },
            { a: 'When I saw the result,', b: 'I felt really proud of myself.' },
            { a: 'Riva did not know what she could share,', b: 'so I remembered her Mother’s Day card.' },
            { a: 'In addition,', b: 'I am going to attend a running race this June.' },
            { a: 'Before the race,', b: 'I am going to take good care of my body.' },
            { a: 'Last year, my seat was facing the teacher,', b: 'and I felt much more nervous then.' },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'Riva, you were more nervous last year than this year. What changed?',
              zh: 'Riva，你去年比今年還緊張。是什麼改變了？',
              starters: [
                { en: 'Last year I felt much more nervous because ___.', zh: '去年我緊張多了，因為＿＿＿。' },
                { en: 'This year I ___, so ___.', zh: '今年我＿＿＿，所以＿＿＿。' },
                { en: 'I think I got used to ___.', zh: '我想我已經習慣＿＿＿了。' },
              ],
            },
            {
              en: 'Rex, you felt proud of an idea you had for someone else. Is that better than being proud of your own work?',
              zh: 'Rex，你為了幫別人想出的點子感到驕傲。這種驕傲，會比為自己的成果感到驕傲更好嗎？',
              starters: [
                { en: 'I felt happy because I could help ___.', zh: '我很開心，因為我可以幫助＿＿＿。' },
                { en: 'It feels different because ___.', zh: '這種感覺不一樣，因為＿＿＿。' },
                { en: 'I am proud of both, but ___.', zh: '兩種我都覺得驕傲，但是＿＿＿。' },
              ],
            },
            {
              en: 'You are going to train four days a week. What exactly are you going to do, and what are you going to stop doing?',
              zh: '你打算每週訓練四天。具體來說你要做什麼？又要停止做什麼？',
              starters: [
                { en: 'I am going to train ___ a week.', zh: '我打算每週訓練＿＿＿。' },
                { en: 'Before the race, I am going to ___.', zh: '比賽前，我打算＿＿＿。' },
                { en: 'I am going to stop ___ because ___.', zh: '我打算不再＿＿＿，因為＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 8
    {
      id: 's8',
      n: 8,
      date: '2026-05-23',
      dateEn: '23 May 2026',
      dateZh: '2026 年 5 月 23 日',
      en: 'How many languages your mother speaks — and Kevin’s Saturday',
      zh: '媽媽會說幾種語言——還有 Kevin 的星期六',

      focus: [
        { en: 'Languages', zh: '語言' },
        { en: 'Actually…', zh: 'Actually… 的用法' },
        { en: 'A story with a twist', zh: '有轉折的故事' },
        { en: 'Strong verbs', zh: '有力量的動詞' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Half of this lesson was everyday sentences — trains, bridges, languages. The other half was a story about a man who ran all the way to the office on the wrong day.',
          zh: '這堂課有一半是日常句子——火車、橋、語言。另一半則是一個故事，關於一個在錯的日子拚命跑去辦公室的男人。',
        },

        {
          t: 'phrases',
          en: 'Words to copy into your notebook',
          zh: '要抄進筆記本的單字',
          items: [
            {
              en: 'actually',
              zh: '其實、事實上',
              eg: 'Actually, I’m waiting for my friend.',
              egZh: '其實，我正在等我的朋友。',
            },
            {
              en: 'several',
              zh: '幾個、好幾種',
              eg: 'My mother can speak several languages.',
              egZh: '我媽媽會說好幾種語言。',
            },
            {
              en: 'a language',
              zh: '語言',
              eg: 'English is an international language.',
              egZh: '英文是一種國際語言。',
            },
            {
              en: 'Mandarin Chinese',
              zh: '中文、華語',
              eg: 'She can speak Mandarin Chinese and a little Japanese.',
              egZh: '她會說中文和一點日文。',
            },
            {
              en: 'a bagel',
              zh: '貝果',
              eg: 'I like bagels for breakfast.',
              egZh: '我早餐喜歡吃貝果。',
            },
            {
              en: 'an alarm clock',
              zh: '鬧鐘',
              eg: 'My alarm clock rings at 6:30 every morning.',
              egZh: '我的鬧鐘每天早上六點半響。',
            },
            {
              en: 'faced',
              zh: '面向（過去式）',
              eg: 'Our home faced a bridge before.',
              egZh: '我們以前的家面向一座橋。',
            },
            {
              en: 'in front of',
              zh: '在……的前面',
              eg: 'The dog is sitting in front of the car.',
              egZh: '那隻狗坐在車子的前面。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Actually — the small word that corrects politely',
          zh: 'actually——那個能客氣糾正別人的小字',
          bodyEn: 'In Chinese, 其實 is easy to reach for. In English, “actually” does the same job and does it very well, but many learners never use it. It goes at the front, followed by a comma, and it softens a correction so that it does not sound like an argument: “Are you waiting for the train right now?” — “Actually, I’m waiting for my friend.” Without “actually”, the answer is blunt. With it, you are gently saying: not quite, here is the real situation. It also works for a surprise about yourself — “Actually, I enjoy English very much.”',
          bodyZh: '在中文裡，「其實」很容易脫口而出。在英文裡，actually 做的是同一件事，而且做得非常好，但很多學習者從來不用它。它放在句首，後面加逗號，可以讓一個「糾正」聽起來不像在吵架：「Are you waiting for the train right now?」——「Actually, I’m waiting for my friend.」如果沒有 actually，這個回答會顯得很生硬；有了它，你等於在客氣地說：不完全是，真實情況是這樣。它也可以用來講關於自己的意外之處——「Actually, I enjoy English very much.」',
        },

        {
          t: 'summary',
          en: 'It was a peaceful Saturday morning. Kevin was sleeping comfortably in his bed while the sun slowly rose outside his window. Suddenly — “RING!! RING!!” His alarm clock went off loudly. Kevin jumped out of bed and looked at the time. “GAH! I’m late!” he shouted. He quickly put on his clothes, grabbed his bag, and dashed out of the house as fast as he could. While he was running down the street, he kept thinking, “I can’t be late again!”',
          zh: '這是一個平靜的星期六早晨。Kevin 正舒服地躺在床上睡覺，窗外的太陽慢慢升起。突然——「鈴！鈴！」鬧鐘大聲響了起來。Kevin 從床上跳起來，看了時間。「啊！我要遲到了！」他大喊。他立刻穿好衣服、拿起包包，飛快地衝出家門。當他跑在街上時，他一直想著：「我不能再遲到了！」',
        },

        {
          t: 'summary',
          en: 'Finally, Kevin arrived at the office. He was breathing heavily and sweating a lot. Then he looked at the calendar on the wall. “MAY… SATURDAY?” Kevin froze for a moment. The office was closed. He stood there silently, feeling tired and embarrassed. Then he laughed at himself and decided to go home and enjoy the rest of his weekend.',
          zh: '最後，Kevin 終於到了辦公室。他氣喘吁吁，而且滿頭大汗。這時，他看向牆上的日曆。「五月……星期六？」Kevin 突然愣住了。辦公室是關著的。他安靜地站在那裡，覺得又累又尷尬。接著，他忍不住笑了出來，決定回家好好享受剩下的週末。',
        },

        {
          t: 'quote',
          en: '…Wait. Today is Saturday.',
          zh: '……等等，今天是星期六。',
          by: 'Kevin',
        },

        {
          t: 'phrases',
          en: 'The verbs that make the story move',
          zh: '讓故事動起來的動詞',
          items: [
            {
              en: 'sleep comfortably',
              zh: '舒服地睡覺',
              eg: 'Kevin was sleeping comfortably in his bed.',
              egZh: 'Kevin 正舒服地躺在床上睡覺。',
            },
            {
              en: 'go off',
              zh: '（鬧鐘）響起',
              eg: 'His alarm clock went off loudly.',
              egZh: '他的鬧鐘大聲響了起來。',
            },
            {
              en: 'jump out of bed',
              zh: '從床上跳起來',
              eg: 'Kevin jumped out of bed and looked at the time.',
              egZh: 'Kevin 從床上跳起來，看了時間。',
            },
            {
              en: 'grab a bag',
              zh: '一把抓起包包',
              eg: 'He grabbed his bag and ran to the door.',
              egZh: '他抓起包包就往門口跑。',
            },
            {
              en: 'dash out of the house',
              zh: '衝出家門',
              eg: 'He dashed out of the house as fast as he could.',
              egZh: '他用最快的速度衝出家門。',
            },
            {
              en: 'breathe heavily',
              zh: '氣喘吁吁',
              eg: 'He was breathing heavily and sweating a lot.',
              egZh: '他氣喘吁吁，而且滿頭大汗。',
            },
            {
              en: 'freeze',
              zh: '愣住、僵住',
              eg: 'Kevin froze for a moment.',
              egZh: 'Kevin 愣了一下。',
            },
            {
              en: 'feel embarrassed',
              zh: '覺得尷尬',
              eg: 'He stood there silently, feeling tired and embarrassed.',
              egZh: '他安靜地站在那裡，覺得又累又尷尬。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Why “grabbed” and “dashed” and not “took” and “ran”',
          zh: '為什麼是 grabbed 和 dashed，而不是 took 和 ran',
          bodyEn: 'The story would still make sense with ordinary verbs: he took his bag and ran out of the house. But “grabbed” and “dashed” carry the panic inside the verb itself, so you do not need to add “quickly” or “in a hurry”. This is the cheapest way to make English sound better: not longer sentences, but sharper verbs. Collect them the way you collect nouns — go off, jump out, grab, dash, freeze. Each one saves you an adverb.',
          bodyZh: '就算用普通的動詞，這個故事也還是通的：he took his bag and ran out of the house。但 grabbed 和 dashed 把那種「慌張」直接放進動詞裡，所以你不需要再加 quickly 或 in a hurry。這是讓英文變好聽最省力的方法：不是把句子拉長，而是換更精準的動詞。像收集名詞一樣去收集它們——go off、jump out、grab、dash、freeze。每一個都幫你省下一個副詞。',
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'Has anything like Kevin’s Saturday ever happened to you? Tell the story.',
              zh: '你有沒有發生過像 Kevin 星期六那樣的事？把它講出來。',
              starters: [
                { en: 'One morning, my alarm clock went off and I ___.', zh: '有一天早上，我的鬧鐘響了，然後我＿＿＿。' },
                { en: 'I jumped out of bed and ___.', zh: '我從床上跳起來，然後＿＿＿。' },
                { en: 'I felt tired and embarrassed because ___.', zh: '我覺得又累又尷尬，因為＿＿＿。' },
              ],
            },
            {
              en: 'Kevin laughed at himself. Is that a good way to deal with an embarrassing moment?',
              zh: 'Kevin 笑了自己一下。遇到尷尬的時刻，這是好的處理方式嗎？',
              starters: [
                { en: 'Then he laughed at himself and decided to ___.', zh: '接著他笑了自己一下，決定＿＿＿。' },
                { en: 'When I feel embarrassed, I usually ___.', zh: '當我覺得尷尬時，我通常會＿＿＿。' },
                { en: 'Actually, I think it’s better to ___.', zh: '其實我覺得＿＿＿比較好。' },
              ],
            },
            {
              en: 'How many languages can the people in your family speak? Which one would you like to learn?',
              zh: '你家裡的人總共會說幾種語言？你自己想學哪一種？',
              starters: [
                { en: 'My mother can speak several languages.', zh: '我媽媽會說好幾種語言。' },
                { en: 'She can speak ___ and a little ___.', zh: '她會說＿＿＿和一點＿＿＿。' },
                { en: 'I want to learn ___ in the future, because ___.', zh: '我未來想學＿＿＿，因為＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 9
    {
      id: 's9',
      n: 9,
      date: '2026-05-30',
      dateEn: '30 May 2026',
      dateZh: '2026 年 5 月 30 日',
      en: 'The junior mayor poster, and a broken tea egg',
      zh: '小市長海報，還有一顆被弄破的茶葉蛋',

      focus: [
        { en: 'A school election', zh: '學校選舉' },
        { en: 'Saying no, with reasons', zh: '有理由地說不' },
        { en: 'However / besides that', zh: 'however 與 besides that' },
        { en: 'Training', zh: '訓練' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Rex drew the poster for the election and then explained, very clearly and at some length, why he does not want the job. Turning down something that sounds good is harder to say than accepting it — and it needs better English.',
          zh: 'Rex 幫選舉畫了海報，然後非常清楚、而且相當完整地說明了他為什麼不想做這件事。要拒絕一件聽起來很好的事，比接受它更難說出口——也需要更好的英文。',
        },

        {
          t: 'summary',
          en: 'You helped draw a poster for the junior mayor election at your school. If you became the junior mayor, you could share the students’ opinions with the school and help other students. However, you actually do not want to become the junior mayor: you do not want to waste your time in meetings with teachers, and you do not want to waste your study time or your energy. Besides that, you are training for a running race in two weeks. After training you always bring home a bottle of sports drink and a tea egg — and this Thursday Riva accidentally broke your tea egg in the car, and you became very angry. You hope you can run fast and finish in the top three places.',
          zh: '你幫學校的小市長選舉畫了海報。如果你當上小市長，你可以向學校反映學生的意見，也可以幫助其他同學。不過，你其實不想當小市長：你不想把時間浪費在和老師開會上，也不想浪費讀書的時間和精力。除此之外，你正在為兩週後的跑步比賽訓練。訓練後你總是會帶一瓶運動飲料和一顆茶葉蛋回家——而這星期四 Riva 在車上不小心把你的茶葉蛋弄破了，你非常生氣。你希望自己可以跑得很快，拿到前三名。',
        },

        {
          t: 'phrases',
          en: 'Saying what you do and don’t want',
          zh: '說出你想要與不想要的事',
          items: [
            {
              en: 'share opinions with someone',
              zh: '向某人反映意見',
              eg: 'I can share students’ opinions with the school.',
              egZh: '我可以向學校分享學生們的意見。',
            },
            {
              en: 'however',
              zh: '不過、然而',
              eg: 'However, I actually do not want to become the junior mayor.',
              egZh: '不過，其實我不太想成為小市長。',
            },
            {
              en: 'waste time',
              zh: '浪費時間',
              eg: 'I do not want to waste my time in meetings with teachers.',
              egZh: '我不想把時間浪費在和老師開會上。',
            },
            {
              en: 'waste energy',
              zh: '浪費精力',
              eg: 'I also do not want to waste my study time or energy.',
              egZh: '我也不想浪費我的讀書時間和精力。',
            },
            {
              en: 'besides that',
              zh: '除此之外',
              eg: 'Besides that, I am training for a running race in two weeks.',
              egZh: '此外，我正在為兩週後的跑步比賽訓練。',
            },
            {
              en: 'finish in the top three',
              zh: '得到前三名',
              eg: 'I hope I can run fast and finish in the top three places in the race.',
              egZh: '我希望我可以跑得很快，並得到前三名。',
            },
            {
              en: 'a sports drink',
              zh: '運動飲料',
              eg: 'After training, I always bring home a bottle of sports drink.',
              egZh: '訓練後我總是會帶一瓶運動飲料回家。',
            },
            {
              en: 'accidentally',
              zh: '不小心地',
              eg: 'Riva accidentally broke my tea egg in the car.',
              egZh: 'Riva 在車上不小心把我的茶葉蛋弄破了。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Comfortable, comfortably — and the rest',
          zh: 'comfortable、comfortably——以及其他',
          items: [
            {
              en: 'comfortable',
              zh: '舒服的（形容詞）',
              eg: 'This sofa is very comfortable.',
              egZh: '這張沙發非常舒服。',
            },
            {
              en: 'comfortably',
              zh: '舒服地（副詞）',
              eg: 'The baby is sleeping comfortably.',
              egZh: '那個嬰兒睡得很舒服。',
            },
            {
              en: 'yawn',
              zh: '打哈欠',
              eg: 'Rex is yawning because he is tired.',
              egZh: 'Rex 在打哈欠，因為他累了。',
            },
            {
              en: 'embarrassed',
              zh: '尷尬的',
              eg: 'I am feeling embarrassed right now.',
              egZh: '我現在覺得很尷尬。',
            },
            {
              en: 'decide',
              zh: '決定',
              eg: 'I decided to watch TV after class.',
              egZh: '我決定下課後看電視。',
            },
          ],
        },

        {
          t: 'note',
          en: 'However and besides that: two ways to keep going',
          zh: 'however 與 besides that：兩種把話接下去的方式',
          bodyEn: 'These two words do opposite jobs and both let you speak for longer. “However” turns the sentence around — it warns the listener that what comes next disagrees with what came before: I could help other students. However, I do not want to become the junior mayor. “Besides that” adds another reason on the same side: Besides that, I am training for a running race. If you can use both in one answer, your answer stops being a list and becomes an argument. That is the whole difference between an A2 answer and a B1 one.',
          bodyZh: '這兩個詞做的是相反的工作，而且都能讓你把話說得更長。however 是轉折——它預告聽者：接下來要說的和前面相反：I could help other students. However, I do not want to become the junior mayor.（我可以幫助其他同學。不過，我不想當小市長。）besides that 則是「往同一邊再加一個理由」：Besides that, I am training for a running race. 如果你能在同一段回答裡把這兩個都用上，你的回答就不再是一張清單，而變成了一段論述。這正是 A2 的回答和 B1 的回答之間的差別。',
        },

        {
          t: 'gap',
          en: 'One word missing',
          zh: '少了一個字',
          hintEn: 'Choose the word that fits. The reason appears after you choose.',
          hintZh: '選出合適的字。選完之後會出現理由。',
          items: [
            {
              text: 'I could help other students. ___, I actually do not want to become the junior mayor.',
              textZh: '我可以幫助其他同學。不過，其實我不想當小市長。',
              options: ['However', 'Besides that', 'Overall'],
              answer: 0,
              why: {
                en: 'The second sentence disagrees with the first, so it needs the turn-around word. “Besides that” would be adding to the same idea, and “overall” would be summing up at the end.',
                zh: '第二句和第一句是相反的，所以需要一個轉折詞。besides that 是「再加一個同方向的理由」，overall 則是最後的總結。',
              },
            },
            {
              text: 'Riva ___ broke my tea egg in the car, and I became very angry.',
              textZh: 'Riva 在車上不小心把我的茶葉蛋弄破了，我非常生氣。',
              options: ['accidentally', 'suddenly', 'carefully'],
              answer: 0,
              why: {
                en: '“Accidentally” means she did not mean to do it — which matters here, because it is the reason you can be angry and still be friends afterwards.',
                zh: 'accidentally 表示她不是故意的——這一點在這裡很重要，因為正是這個原因，你可以生氣，但之後仍然是好朋友。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'You drew the poster but do not want the job. Was that the right thing to do?',
              zh: '你畫了海報，卻不想當這個職位。這樣做對嗎？',
              starters: [
                { en: 'I helped draw a poster, however ___.', zh: '我幫忙畫了海報，不過＿＿＿。' },
                { en: 'If I became the junior mayor, I could ___.', zh: '如果我當上小市長，我可以＿＿＿。' },
                { en: 'Besides that, I ___.', zh: '除此之外，我＿＿＿。' },
              ],
            },
            {
              en: 'Is going to meetings really a waste of time? What would you change about them?',
              zh: '開會真的是浪費時間嗎？如果可以，你會怎麼改？',
              starters: [
                { en: 'I don’t want to waste my time in ___.', zh: '我不想把時間浪費在＿＿＿。' },
                { en: 'Meetings are useful when ___.', zh: '＿＿＿的時候，開會是有用的。' },
                { en: 'I would rather spend that time ___.', zh: '我寧願把那些時間花在＿＿＿。' },
              ],
            },
            {
              en: 'Riva broke your tea egg by accident. How angry is it fair to be about an accident?',
              zh: 'Riva 是不小心弄破你的茶葉蛋的。對一個「不小心」，生多大的氣才算合理？',
              starters: [
                { en: 'She did it accidentally, but ___.', zh: '她是不小心的，但是＿＿＿。' },
                { en: 'I became very angry because ___.', zh: '我非常生氣，因為＿＿＿。' },
                { en: 'Looking back, I think I ___.', zh: '現在回頭想，我覺得我＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 10
    {
      id: 's10',
      n: 10,
      date: '2026-06-27',
      dateEn: '27 June 2026',
      dateZh: '2026 年 6 月 27 日',
      en: 'Which subject takes the most time',
      zh: '哪一科最花時間',

      focus: [
        { en: 'School subjects', zh: '學校科目' },
        { en: 'First, second, then, finally', zh: '第一、第二、接著、最後' },
        { en: 'Collocations', zh: '搭配詞' },
        { en: 'Keeping going', zh: '繼續努力' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'A longer piece of reading than usual, and the first one where you had to organise four separate difficulties inside a single paragraph. The organising words are the lesson.',
          zh: '一篇比平常更長的閱讀，也是你第一次必須把四個不同的困難，整理進同一個段落裡。真正要學的，是那些用來「排序」的字。',
        },

        {
          t: 'summary',
          en: 'Your school subjects are Chinese, Maths, Science, Health and Social Studies, the same as usual this semester. Among all your subjects, English is the easiest for you, because you enjoy learning it and speaking it with your teacher. However, Chinese is particularly hard, and for four separate reasons: first, there are many new words to memorise; second, you have to make sentences with the new words; then you also need to find the wrong words and correct them; and finally, you take multiple-choice tests based on the texts. You think Chinese takes the most time to study.',
          zh: '你這學期的科目是國文、數學、自然、健康和社會，和平常一樣。在所有科目中，英文對你來說最簡單，因為你喜歡學英文，也喜歡和老師用英文說話。不過，國文特別困難，而且有四個各自獨立的原因：第一，有很多生字要背；第二，你必須用新單字造句；接著，你還要找出錯字並改正；最後，還要根據課文做選擇題測驗。你覺得國文是最花時間準備的科目。',
        },

        {
          t: 'summary',
          en: 'As for Maths, converting units is hard for you. Sometimes you know the answer, but you make small mistakes because you are not careful enough, so you have to be very careful with your calculations. Health is also difficult, because there are too many details to learn, and the tests sometimes ask questions you have not learned in class — which means you have to study extra information by yourself. On the other hand, Social Studies is another challenge, because you have to memorise many important historical events and the years when they happened, and it is not easy to remember all the dates. Although some subjects are difficult, you will keep studying hard. You believe that practice can help you improve little by little.',
          zh: '至於數學，單位換算對你來說很困難。有時候你知道答案，但因為不夠小心，還是會犯一些小錯，所以計算時必須非常仔細。健康課也很難，因為有太多細節要學，而且考試有時候會考課堂上沒學過的內容——這表示你必須自己額外去補充。另一方面，社會課也是一個挑戰，因為你必須背很多重要的歷史事件和發生的年份，要記住所有年代並不容易。雖然有些科目很困難，但你會繼續努力。你相信持續練習可以幫助你一點一點地進步。',
        },

        {
          t: 'note',
          en: 'First, second, then, finally — and the two that change direction',
          zh: 'first、second、then、finally——還有兩個用來轉向的詞',
          bodyEn: 'Four difficulties inside one subject would be a mess without ordering words, and this paragraph uses the full set: first, second, then, finally. Say them in that order and the listener can follow four ideas without getting lost. Then there are two more that change direction rather than continue: “as for ___” moves you to a new topic (As for Maths, converting units is hard), and “on the other hand” introduces a different side (On the other hand, Social Studies is another challenge). Between them, these six words are most of what makes a long answer sound organised rather than long.',
          bodyZh: '一個科目裡有四個困難，如果沒有排序詞就會變成一團亂，而這一段把整組都用上了：first、second、then、finally。照這個順序說出來，聽的人就能跟上四個想法而不會迷路。另外還有兩個詞不是「繼續」，而是「轉向」：as for ___ 用來換到新的主題（As for Maths, converting units is hard.），on the other hand 用來帶出另一面（On the other hand, Social Studies is another challenge.）。這六個字加起來，就是「長回答聽起來有條理」與「只是很長」之間的主要差別。',
        },

        {
          t: 'phrases',
          en: 'School collocations',
          zh: '學校搭配詞',
          items: [
            { en: 'memorise words', zh: '背單字', eg: 'I memorise words before the test.', egZh: '我考試前會背單字。' },
            { en: 'make sentences', zh: '造句', eg: 'We make sentences in Chinese class.', egZh: '我們在國文課造句。' },
            { en: 'correct mistakes', zh: '改正錯誤', eg: 'I correct mistakes in my notebook.', egZh: '我在筆記本裡改正錯誤。' },
            { en: 'study for a test', zh: '準備考試', eg: 'I study for a test at night.', egZh: '我晚上準備考試。' },
            { en: 'review the lesson', zh: '複習課程', eg: 'I review the lesson after class.', egZh: '我下課後複習課程。' },
            { en: 'get good grades', zh: '得到好成績', eg: 'I want to get good grades.', egZh: '我想要得到好成績。' },
            { en: 'convert units', zh: '換算單位', eg: 'As for math, converting units is hard for me.', egZh: '至於數學，單位換算對我來說很困難。' },
            { en: 'little by little', zh: '一點一點地', eg: 'I believe that practice can help me improve little by little.', egZh: '我相信練習可以幫助我一點一點地進步。' },
          ],
        },

        {
          t: 'phrases',
          en: 'Feelings collocations',
          zh: '感受搭配詞',
          items: [
            { en: 'feel bored', zh: '感到無聊', eg: 'I feel bored during long movies.', egZh: '看很長的電影時我覺得無聊。' },
            { en: 'feel nervous', zh: '感到緊張', eg: 'I feel nervous before a test.', egZh: '考試前我會緊張。' },
            { en: 'feel proud', zh: '感到驕傲', eg: 'I feel proud of myself.', egZh: '我為自己感到驕傲。' },
            { en: 'feel excited', zh: '感到興奮', eg: 'I feel excited about the race.', egZh: '我對比賽感到很興奮。' },
            { en: 'feel embarrassed', zh: '感到尷尬', eg: 'I feel embarrassed when I make a mistake.', egZh: '犯錯的時候我覺得尷尬。' },
            { en: 'feel comfortable', zh: '感到舒服', eg: 'I feel comfortable at home.', egZh: '我在家覺得很舒服。' },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'Which subject takes you the most time — and is the hardest subject always the one that takes the longest?',
              zh: '哪一科最花你的時間？最難的科目，一定就是最花時間的科目嗎？',
              starters: [
                { en: 'I think ___ takes the most time to study.', zh: '我覺得＿＿＿是最花時間準備的科目。' },
                { en: 'It is hard because, first, ___. Second, ___.', zh: '它很難，因為第一，＿＿＿。第二，＿＿＿。' },
                { en: 'On the other hand, ___ is easier for me.', zh: '另一方面，＿＿＿對我來說比較簡單。' },
              ],
            },
            {
              en: 'You said you make small mistakes because you are not careful enough. What actually helps you slow down?',
              zh: '你說你因為不夠小心而犯小錯。什麼方法才真的能讓你慢下來？',
              starters: [
                { en: 'Sometimes I know the answer, but ___.', zh: '有時候我知道答案，但是＿＿＿。' },
                { en: 'I have to be very careful with ___.', zh: '我必須非常小心地處理＿＿＿。' },
                { en: 'What helps me is ___.', zh: '對我有幫助的是＿＿＿。' },
              ],
            },
            {
              en: 'Is it fair for a test to ask about something you have not learned in class?',
              zh: '考試考課堂上沒教過的內容，這樣公平嗎？',
              starters: [
                { en: 'The tests sometimes ask questions we haven’t learned in class.', zh: '考試有時候會考我們課堂上沒有學過的內容。' },
                { en: 'Therefore, I have to study extra information by myself.', zh: '因此，我必須自己額外學習更多內容。' },
                { en: 'I think it is / isn’t fair because ___.', zh: '我覺得這樣公平／不公平，因為＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 11
    {
      id: 's11',
      n: 11,
      date: '2026-07-11',
      dateEn: '11 July 2026',
      dateZh: '2026 年 7 月 11 日',
      en: 'Speaking up in class, and going to bed on time',
      zh: '在課堂上開口，以及準時上床睡覺',

      focus: [
        { en: 'Asking for help', zh: '請人幫忙' },
        { en: 'Keeping ideas to yourself', zh: '把想法放在心裡' },
        { en: 'Loudly / quietly / clearly', zh: 'loudly／quietly／clearly' },
        { en: 'Sleep', zh: '睡眠' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'The most honest session of the term. You said you often keep your ideas to yourself because you worry your classmates may not respect them — and then, in the same breath, that you think you would feel more relaxed if you shared them more often. Both halves of that are worth keeping.',
          zh: '這是這學期最誠實的一堂課。你說你常常把想法放在心裡，因為擔心同學可能不會尊重它們——然後，在同一口氣裡，你又說你覺得如果能更常分享自己的想法，你反而會比較放鬆。這兩句話都值得留下來。',
        },

        {
          t: 'summary',
          en: 'Sometimes you ask a classmate for help, because she is an excellent student, and when you do not understand something she explains it to you in an easy way. Sometimes, though, you keep your ideas to yourself, because you worry that your classmates may not respect them. However, you think you would feel more relaxed if you shared your ideas more often, and you believe that if you find your mistakes faster, you can learn new things faster. At school you usually stay quiet and let other classmates answer first. If there is a new classmate, you let them talk to other people first, because you do not want to make them feel nervous — so most of the time, other people talk to you first. You want to become more confident and speak more clearly in class.',
          zh: '有時候你會請同學幫忙，因為她是一位很優秀的學生；當你不懂的時候，她會用簡單的方式解釋給你聽。不過有時候，你會把自己的想法放在心裡，因為你擔心同學可能不會尊重它們。然而，你覺得如果能更常分享想法，你會比較放鬆，而且你相信如果能更快發現自己的錯誤，就能更快學到新東西。在學校，你通常保持安靜，先讓其他同學回答。如果有新同學，你會先讓對方跟其他人聊天，因為你不想讓他覺得緊張——所以大部分時候，都是別人先來跟你說話。你希望自己能變得更有自信，在課堂上說得更清楚。',
        },

        {
          t: 'phrases',
          en: 'Asking, sharing, staying quiet',
          zh: '請求、分享、保持安靜',
          items: [
            {
              en: 'ask someone for help',
              zh: '請某人幫忙',
              eg: 'I asked my teacher for help.',
              egZh: '我請老師幫忙。',
            },
            {
              en: 'explain something in an easy way',
              zh: '用簡單的方式解釋',
              eg: 'Can you explain it in an easy way?',
              egZh: '你可以用簡單的方式解釋嗎？',
            },
            {
              en: 'keep an idea to yourself',
              zh: '把想法放在心裡',
              eg: 'Sometimes I keep my ideas to myself.',
              egZh: '有時候我會把自己的想法放在心裡。',
            },
            {
              en: 'share my ideas',
              zh: '分享我的想法',
              eg: 'I enjoy sharing my ideas.',
              egZh: '我很享受分享自己的想法。',
            },
            {
              en: 'stay quiet',
              zh: '保持安靜',
              eg: 'Please stay quiet during the test.',
              egZh: '考試時請保持安靜。',
            },
            {
              en: 'let other people answer first',
              zh: '讓別人先回答',
              eg: 'I usually let others answer first.',
              egZh: '我通常會讓別人先回答。',
            },
            {
              en: 'most of the time',
              zh: '大部分時候',
              eg: 'Most of the time, I read after dinner.',
              egZh: '大部分時候，我晚餐後會看書。',
            },
            {
              en: 'confident',
              zh: '有自信的',
              eg: 'She is confident when she speaks English.',
              egZh: '她說英文時很有自信。',
            },
            {
              en: 'speak clearly',
              zh: '說得清楚',
              eg: 'Please speak clearly.',
              egZh: '請說清楚一點。',
            },
            {
              en: 'even if',
              zh: '即使',
              eg: 'I will try even if it is difficult.',
              egZh: '即使很困難，我還是會試。',
            },
          ],
        },

        {
          t: 'link',
          href: '../confidence-talk/',
          en: 'Confidence and Everyday Life',
          zh: '自信與日常生活',
          noteEn: 'A lesson from the same week on the same theme — confidence, explaining, speaking clearly — with more practice and a speaking task at the end. It was built from another student\u2019s notes, so the words overlap without being identical.',
          noteZh: '同一週、同一個主題的另一堂課——自信、解釋、把話說清楚——有更多練習，最後還有一個口說任務。它是用另一位學生的課堂筆記做的，所以單字有重疊，但不完全相同。',
        },

        {
          t: 'note',
          en: 'Loudly, quietly, clearly',
          zh: 'loudly、quietly、clearly',
          bodyEn: 'These three all describe HOW you speak, so they all end in -ly and they all come after the verb: speak loudly, speak quietly, speak clearly. You need all three, because they are not about volume alone. “Sometimes I need to speak loudly because my classmates are noisy” is about volume. “I want to speak more clearly” is not — it is about being understood, and you can speak very loudly and still not be clear. That distinction is the useful part.',
          bodyZh: '這三個字都在描述你「怎麼」說話，所以都以 -ly 結尾，而且都放在動詞後面：speak loudly、speak quietly、speak clearly。三個都需要，因為它們不只是在講音量。「Sometimes I need to speak loudly because my classmates are noisy.」講的是音量；「I want to speak more clearly.」講的不是——它講的是「讓別人聽懂」，而你可以講得非常大聲，卻仍然不清楚。這個區別才是真正有用的地方。',
        },

        {
          t: 'summary',
          en: 'You also said you felt tired that day because you had not slept well the night before, but that you still tried your best in class. That is worth taking seriously. Children aged six to twelve need about nine to twelve hours of sleep a day, and enough sleep helps you focus in class, remember new words and understand new ideas. It also helps you control your feelings: a child who sleeps well feels calmer, happier and more patient. Sleep is like charging a battery — if the battery is low, everything becomes slower.',
          zh: '你也說過那天覺得很累，因為前一晚沒睡好，但你在課堂上還是很努力。這件事值得認真看待。6 到 12 歲的孩子每天大約需要 9 到 12 小時的睡眠，而足夠的睡眠可以幫助你在課堂上專心、記住新單字、理解新觀念。它也能幫助你控制情緒：睡得好的孩子比較冷靜、心情比較好，也比較有耐心。睡眠就像充電——如果電量太低，所有功能都會變慢。',
        },

        {
          t: 'note',
          en: 'Enough sleep is not the same as a good schedule',
          zh: '睡得夠，不等於作息好',
          bodyEn: 'This is the part that surprises people. If you go to bed at 11 p.m. and get up at 11 a.m., you have slept twelve hours — more than enough. But if that happens often, your body clock moves too late: you do not feel sleepy at night and you do not feel awake in the morning. Your brain then “wakes up” slowly, and it becomes harder to focus, remember and learn. For most eleven-year-olds a better bedtime is around 9 to 10 p.m. on school nights, which gives you enough sleep AND a schedule that fits the day you actually have.',
          bodyZh: '這是最容易讓人意外的部分。如果你晚上 11 點睡、早上 11 點起床，你睡了十二個小時——綽綽有餘。但如果經常這樣，你的生理時鐘會往後跑太多：晚上不想睡，早上也醒不來。大腦早上「開機」會變慢，專心、記憶和學習都會變得更困難。對大多數 11 歲的孩子來說，上學日晚上 9 點到 10 點左右上床比較理想，這樣既睡得夠，作息也能配合你實際要過的一天。',
        },

        {
          t: 'poll',
          en: 'Do you agree?',
          zh: '你同意嗎？',
          hintEn: 'There is no right answer here. Say why.',
          hintZh: '這裡沒有標準答案。說說你的理由。',
          items: [
            {
              en: 'If I shared my ideas more often, I would feel more relaxed in class.',
              zh: '如果我更常分享自己的想法，我在課堂上會比較放鬆。',
            },
            {
              en: 'It is better to stay quiet and let other classmates answer first.',
              zh: '保持安靜、先讓其他同學回答，比較好。',
            },
            {
              en: 'If we find our mistakes faster, we can learn new things faster.',
              zh: '如果我們能更快發現自己的錯誤，就能更快學到新東西。',
            },
            {
              en: 'Twelve hours of sleep is enough, even if I go to bed at 11 p.m.',
              zh: '就算我晚上 11 點才睡，睡滿十二小時也就夠了。',
            },
            {
              en: 'Sleeping well changes how I feel about other people, not just how tired I am.',
              zh: '睡得好會改變我對別人的感受，而不只是累不累而已。',
            },
          ],
        },

        {
          t: 'task',
          en: 'Speaking task: one idea you kept to yourself',
          zh: '口說任務：一個你曾放在心裡的想法',
          instructionEn: 'Think of one time this term when you had an idea in class and did not say it. Tell me three things out loud: what the idea was, why you kept it to yourself, and what you think would have happened if you had said it. Use as many of the target phrases below as you can — tick one each time you use it. This is spoken only; there is nothing to write down.',
          instructionZh: '想一個這學期在課堂上你有想法卻沒說出口的時刻。用說的告訴我三件事：那個想法是什麼、為什麼你把它放在心裡，以及如果你當時說出來，你覺得會發生什麼事。盡量用到下面的目標片語——每用到一個就打一個勾。這個任務只用說的，不需要寫下來。',
          prompts: [
            { en: 'What was the idea?', zh: '那個想法是什麼？' },
            { en: 'Why did you keep it to yourself?', zh: '你為什麼把它放在心裡？' },
            { en: 'What would have happened if you had said it?', zh: '如果你當時說出來，會發生什麼事？' },
          ],
          checklist: [
            { en: 'keep an idea to myself', zh: '把想法放在心裡' },
            { en: 'share my ideas', zh: '分享我的想法' },
            { en: 'stay quiet', zh: '保持安靜' },
            { en: 'let other people answer first', zh: '讓別人先回答' },
            { en: 'most of the time', zh: '大部分時候' },
            { en: 'more confident', zh: '更有自信' },
            { en: 'speak clearly', zh: '說得清楚' },
            { en: 'even if', zh: '即使' },
          ],
          frames: [
            { en: 'Sometimes I keep my ideas to myself because ___.', zh: '有時候我會把想法放在心裡，因為＿＿＿。' },
            { en: 'I worry that my classmates may not ___.', zh: '我擔心同學可能不會＿＿＿。' },
            { en: 'However, I think I would feel more relaxed if I ___.', zh: '不過，我覺得如果我＿＿＿，我會比較放鬆。' },
            { en: 'Even if ___, I want to ___.', zh: '即使＿＿＿，我還是想要＿＿＿。' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 12
    {
      id: 's12',
      n: 12,
      date: '2026-08-14',
      dateEn: '14 August 2026',
      dateZh: '2026 年 8 月 14 日',
      en: 'How far, how many steps, and who snores',
      zh: '多遠、幾步，還有誰在打呼',

      focus: [
        { en: 'Distance and averages', zh: '距離與平均' },
        { en: 'Continents and landmarks', zh: '洲與地標' },
        { en: 'Right- and left-handed', zh: '慣用右手與左手' },
        { en: 'Loud vs loudly', zh: 'loud 與 loudly' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'A vocabulary week: miles, averages, continents, and a man called Thomas asleep on a couch. It ends on the single most common adjective-and-adverb mix-up in English, which is worth the whole lesson on its own.',
          zh: '這是一個單字週：英里、平均、各大洲，還有一個叫 Thomas、睡在沙發上的人。這堂課的結尾是英文裡最常見的形容詞與副詞混淆——光是這一點就值得整堂課。',
        },

        {
          t: 'link',
          href: '#p1',
          en: 'Practice — reading papers and grammar',
          zh: '練習題——閱讀考卷與文法',
          noteEn: 'Further down this page: the five Cambridge Movers reading exercises, the present tense worksheet, and the escape room reading.',
          noteZh: '在這一頁的下半部：五份劍橋 Movers 閱讀練習、現在式文法練習，以及密室逃脫閱讀。',
        },

        {
          t: 'phrases',
          en: 'Distance, size and the world',
          zh: '距離、大小與世界',
          items: [
            {
              en: 'miles',
              zh: '英里',
              eg: 'My uncle lives several miles away from our house.',
              egZh: '我叔叔住在離我們家好幾英里的地方。',
            },
            {
              en: 'on average',
              zh: '平均而言',
              eg: 'On average, I sleep for eight hours every night.',
              egZh: '平均來說，我每天晚上睡八個小時。',
            },
            {
              en: 'mountains',
              zh: '山、山脈',
              eg: 'There are many beautiful mountains in Taiwan.',
              egZh: '台灣有很多美麗的山。',
            },
            {
              en: 'cover',
              zh: '覆蓋、占據',
              eg: 'Forests cover a large part of the mountains.',
              egZh: '森林覆蓋了山區很大一部分。',
            },
            {
              en: 'Africa',
              zh: '非洲',
              eg: 'Africa is the second-largest continent in the world.',
              egZh: '非洲是世界第二大的洲。',
            },
            {
              en: 'Europe',
              zh: '歐洲',
              eg: 'France and Italy are both in Europe.',
              egZh: '法國和義大利都位於歐洲。',
            },
            {
              en: 'a step',
              zh: '一步、階梯',
              eg: 'I walk about 8,000 steps every day.',
              egZh: '我每天大約走八千步。',
            },
            {
              en: 'the Eiffel Tower',
              zh: '艾菲爾鐵塔',
              eg: 'The Eiffel Tower is in Paris, France.',
              egZh: '艾菲爾鐵塔位於法國巴黎。',
            },
            {
              en: 'right-handed / left-handed',
              zh: '慣用右手的／慣用左手的',
              eg: 'My sister is left-handed.',
              egZh: '我妹妹是左撇子。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Thomas is asleep on the couch',
          zh: 'Thomas 睡在沙發上',
          items: [
            {
              en: 'Shhh!',
              zh: '噓！',
              eg: 'Shhh! Thomas is sleeping on the couch.',
              egZh: '噓！Thomas 正在沙發上睡覺。',
            },
            {
              en: 'take a nap',
              zh: '小睡、睡午覺',
              eg: 'Thomas likes to take a nap in the afternoon.',
              egZh: 'Thomas 喜歡在下午小睡一下。',
            },
            {
              en: 'a couch',
              zh: '沙發',
              eg: 'My dad is watching TV on the couch.',
              egZh: '我爸爸正在沙發上看電視。',
            },
            {
              en: 'snore',
              zh: '打呼',
              eg: 'My grandfather sometimes snores when he sleeps.',
              egZh: '我爺爺睡覺時有時候會打呼。',
            },
            {
              en: 'loudly',
              zh: '大聲地',
              eg: 'The students laughed loudly at the funny story.',
              egZh: '學生們聽到那個有趣的故事後大聲笑了起來。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Loud is a thing. Loudly is a way of doing.',
          zh: 'loud 是「東西怎麼樣」，loudly 是「動作怎麼做」',
          bodyEn: 'Loud is an adjective, so it describes a noun: The music is loud. A loud noise. Loudly is an adverb, so it describes an action: Thomas is snoring loudly. The students laughed loudly. Here is the quick test — ask what the word is describing. If it is a THING (the music, the noise), use loud. If it is a DOING word (snoring, laughing, speaking), use loudly. This same pair runs through dozens of words: quiet / quietly, clear / clearly, careful / carefully, comfortable / comfortably. Learn the test once and it works on all of them.',
          bodyZh: 'loud 是形容詞，用來描述名詞：The music is loud.／A loud noise. loudly 是副詞，用來描述動作：Thomas is snoring loudly.／The students laughed loudly. 這裡有一個快速的判斷方法——問自己：這個字在描述什麼？如果描述的是一個「東西」（音樂、聲音），用 loud；如果描述的是一個「動作」（打呼、笑、說話），用 loudly。同樣這一組規則適用於好幾十對字：quiet／quietly、clear／clearly、careful／carefully、comfortable／comfortably。學會一次判斷方法，全部都能通用。',
        },

        {
          t: 'gap',
          en: 'Loud or loudly?',
          zh: 'loud 還是 loudly？',
          hintEn: 'Ask yourself what the word is describing — a thing, or a doing word.',
          hintZh: '問自己：這個字在描述什麼——一個東西，還是一個動作？',
          items: [
            {
              text: 'Thomas is snoring ___ on the couch.',
              textZh: 'Thomas 正在沙發上大聲打呼。',
              options: ['loudly', 'loud', 'louder'],
              answer: 0,
              why: {
                en: '“Snoring” is the action, so it needs the -ly form. Compare: the snoring is loud (a thing) / he snores loudly (a doing word).',
                zh: 'snoring 是動作，所以要用 -ly 的形式。比較看看：the snoring is loud（東西）／he snores loudly（動作）。',
              },
            },
            {
              text: 'The music in the classroom is very ___.',
              textZh: '教室裡的音樂非常大聲。',
              options: ['loud', 'loudly', 'louder'],
              answer: 0,
              why: {
                en: 'Here the word describes the music itself — a thing — so it takes the plain adjective. After “is”, you almost always want the adjective.',
                zh: '這裡的字是在描述音樂本身——一個東西——所以要用原形的形容詞。在 is 後面，幾乎都是用形容詞。',
              },
            },
            {
              text: 'Please don’t speak ___ in the library.',
              textZh: '在圖書館裡請不要大聲說話。',
              options: ['loudly', 'loud', 'loudness'],
              answer: 0,
              why: {
                en: '“Speak” is the action, so it takes loudly — the same pattern as speak quietly and speak clearly from session 11.',
                zh: 'speak 是動作，所以要用 loudly——和第 11 堂課的 speak quietly、speak clearly 是同一個模式。',
              },
            },
          ],
        },

        {
          t: 'match',
          en: 'Collocations: put the halves together',
          zh: '搭配詞：把兩半配起來',
          hintEn: 'Click a phrase on the left, then the half that finishes it.',
          hintZh: '先點左邊的片語，再點右邊接得起來的那一半。',
          pairs: [
            { a: 'several miles', b: 'away' },
            { a: 'on', b: 'average' },
            { a: 'cover a large', b: 'area' },
            { a: 'take a', b: 'nap' },
            { a: 'climb the', b: 'stairs' },
            { a: 'sit on the', b: 'couch' },
            { a: 'snore', b: 'loudly' },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'On average, how many steps do you walk in a day? How would you find out?',
              zh: '平均來說，你一天走幾步？你要怎麼知道答案？',
              starters: [
                { en: 'On average, I walk about ___ steps every day.', zh: '平均來說，我每天大約走＿＿＿步。' },
                { en: 'I walk the most on ___ because ___.', zh: '我在＿＿＿走最多，因為＿＿＿。' },
                { en: 'I could find out by ___.', zh: '我可以透過＿＿＿知道答案。' },
              ],
            },
            {
              en: 'Is anyone in your family left-handed? Is being left-handed useful, difficult, or neither?',
              zh: '你家裡有人是左撇子嗎？慣用左手是方便、困難，還是都不算？',
              starters: [
                { en: 'My ___ is left-handed.', zh: '我的＿＿＿是左撇子。' },
                { en: 'Most right-handed people write with their right hand.', zh: '大多數慣用右手的人用右手寫字。' },
                { en: 'I think it is difficult when ___.', zh: '我覺得在＿＿＿的時候會比較困難。' },
              ],
            },
            {
              en: 'Which continent do you most want to visit — Africa, Europe, or somewhere else? Why?',
              zh: '你最想去哪一洲——非洲、歐洲，還是別的地方？為什麼？',
              starters: [
                { en: 'I most want to visit ___ because ___.', zh: '我最想去＿＿＿，因為＿＿＿。' },
                { en: 'I would like to see the ___.', zh: '我想去看＿＿＿。' },
                { en: 'It is several thousand miles away, so ___.', zh: '那裡有好幾千英里遠，所以＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

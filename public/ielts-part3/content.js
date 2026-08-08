/* Sort Before You Speak — IELTS Speaking Part 3, adult one-to-one.

   The two worked questions were rebuilt from a recorded Part 3 answer in a
   real lesson. Every idea in them came from the student and nothing has been
   added — the page takes his organised answer apart into cards so he has to
   put it back together, because the diagnosis was never a shortage of ideas.
   He is not named anywhere on the page; it is publicly reachable.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for, either line by line
   with the 中 chip or all at once with the 中文 switch in the top bar.
   Instructions, task prompts and bucket names stay bilingual — those are
   scaffolding, not comprehension practice.

   Block types:
     lead      a framing sentence in italics, opening a step
     note      a boxed aside explaining one idea in more depth
     frames    a list of sentence frames, each spoken on request
     shapes    the shape library — four answer structures, each with its
               buckets and the line that announces each bucket out loud
     question  a Part 3 question, presented as an exam card
     sort      the bucket sort: cards from the recorded answer, three buckets.
               `bucket` is an id, or an array of ids when two are defensible.
               `why` is one line, shown when the card lands and also when it is
               put somewhere else — a mis-sort explains itself and stays open.
     model     the same points written out as one answer, behind a reveal.
               Split into parts so each sentence group carries its bucket.
     pad       a planning pad for an unseen question — three buckets to name
               and fill, with two ideas each behind a tap for when he is stuck
     clock     a thirty-second planning countdown and a speaking count-up
     task      a speaking task with a tick-list of target phrases
*/

const LESSON = {
  title: 'Sort Before You Speak',
  titleZh: '先分類，再開口',
  kicker: 'IELTS Speaking · Part 3',

  intro: {
    en: 'Part 3 is not a test of how many ideas you have. It is a test of whether you can put them in an order a listener can follow — while you are already speaking.',
    zh: 'Part 3 考的不是你有多少想法，而是你能不能在已經開口的同時，把想法排成聽者跟得上的順序。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'choose one of four answer shapes in about ten seconds', zh: '在大約十秒內，選定四種答案結構的其中一種' },
      { en: 'sort a pile of ideas into two or three buckets before you start', zh: '開口前，把一堆想法歸成兩到三個籃子' },
      { en: 'name each bucket out loud, so the examiner hears the structure', zh: '把每個籃子說出口，讓考官聽見你的結構' },
      { en: 'buy yourself thinking time without saying “um”', zh: '不靠「嗯……」也能替自己爭取思考時間' },
      { en: 'give a forty-five second answer that ends on purpose instead of trailing off', zh: '給出四十五秒、有意識收尾而不是逐漸消音的回答' },
    ],
  },

  source: {
    en: 'The two worked questions on this page were rebuilt from a recorded Part 3 answer in a real lesson. Every idea in them came from the student; nothing has been added.',
    zh: '本頁兩題示範題，取自一堂實際課程的 Part 3 錄音重建。裡面每一個想法都出自該位學生，未新增任何內容。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'ten-seconds',
      n: 1,
      en: 'The ten seconds before you speak',
      zh: '開口前的十秒鐘',
      blocks: [
        {
          t: 'lead',
          en: 'The problem is almost never a shortage of ideas. It is that the ideas arrive in the order they occur to you, and that is not an order anyone can follow.',
          zh: '問題幾乎從來不是想法不夠，而是想法照著它們冒出來的順序出場——那個順序沒有人跟得上。',
        },
        {
          t: 'note',
          en: 'What a listener actually needs',
          zh: '聽者真正需要的東西',
          bodyEn: 'An examiner is not counting your ideas. They are listening for a shape: how many parts the answer has, which part they are in now, and when you have finished. Give them two or three parts and say what each one is, and an ordinary answer sounds organised.',
          bodyZh: '考官不是在數你的想法，而是在聽一個形狀：這個回答有幾個部分、現在講到哪一部分、什麼時候講完了。給他們兩到三個部分，並把每一部分是什麼說出來，一個普通的回答聽起來就有條理。',
        },
        {
          t: 'note',
          en: 'Two or three. Never five.',
          zh: '兩個或三個，絕不要五個',
          bodyEn: 'Four buckets is already more than anyone can hold while they are talking. If you find yourself with five ideas, two of them are examples of the others — put them inside.',
          bodyZh: '一邊講話一邊要記住四個籃子，已經超過任何人的負荷。如果你發現自己有五個想法，其中兩個其實是另外幾個的例子——把它們收進去。',
        },
        {
          t: 'frames',
          en: 'Buying the ten seconds',
          zh: '替自己爭取那十秒',
          hintEn: 'Say one of these while you sort. It is not filler — it is the first sentence of an organised answer.',
          hintZh: '一邊分類，一邊說出其中一句。這不是廢話，這是一個有條理的回答的第一句。',
          items: [
            { en: 'That’s an interesting one — let me think about that for a second.', zh: '這題滿有意思的，讓我想一下。' },
            { en: 'There are really two sides to this.', zh: '這件事其實有兩面。' },
            { en: 'I’d approach that from two angles.', zh: '我會從兩個角度來看。' },
            { en: 'I think it comes down to about three things.', zh: '我覺得大概可以歸成三件事。' },
            { en: 'Can I answer that in two parts?', zh: '我可以分兩部分回答嗎？' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'shapes',
      n: 2,
      en: 'Four shapes',
      zh: '四種結構',
      blocks: [
        {
          t: 'lead',
          en: 'Four shapes cover most of Part 3. Learn the four and you are never choosing from nothing.',
          zh: '四種結構就能應付 Part 3 的大部分題目。記住這四種，你就不必從一片空白開始想。',
        },
        {
          t: 'shapes',
          en: 'The shape library',
          zh: '結構庫',
          hintEn: 'Tap a shape to see the line that announces each bucket out loud.',
          hintZh: '點一個結構，看看用什麼句子把每個籃子說出口。',
          items: [
            {
              tag: 'A',
              name: 'Concede → Argue → Solve',
              nameZh: '讓步 → 主張 → 解方',
              whenEn: 'Should X be allowed? Should X be banned? Do you agree that…?',
              whenZh: '「應不應該……？」「該不該禁止……？」「你同不同意……？」',
              buckets: [
                { en: 'The fair point on the other side', zh: '對方站得住腳的地方' },
                { en: 'Why I still think what I think', zh: '我為什麼還是這樣想' },
                { en: 'What should actually happen', zh: '那實際上該怎麼做' },
              ],
              lines: [
                { en: 'I can see why people say the opposite —', zh: '我能理解為什麼有人持相反意見——' },
                { en: 'But the reason I’d still say yes is', zh: '但我之所以還是說會，是因為' },
                { en: 'So for me it isn’t a flat yes or no. It’s', zh: '所以對我來說，這不是單純的是或否，而是' },
              ],
            },
            {
              tag: 'B',
              name: 'Three types',
              nameZh: '三種類型',
              whenEn: 'How can you tell…? What are the ways…? What kinds of…?',
              whenZh: '「要怎麼分辨……？」「有哪些方式……？」「有哪幾種……？」',
              buckets: [
                { en: 'The first kind, and the easiest to spot', zh: '第一種，也是最好認的' },
                { en: 'The second kind', zh: '第二種' },
                { en: 'The last kind, and the one I trust most', zh: '最後一種，也是我最相信的' },
              ],
              lines: [
                { en: 'I’d put it into about three groups.', zh: '我大概會分成三類。' },
                { en: 'The first thing I’d look at is', zh: '我會先看的是' },
                { en: 'The last one, and probably the most reliable, is', zh: '最後一個，大概也是最可靠的，是' },
              ],
            },
            {
              tag: 'C',
              name: 'Then → Now → Next',
              nameZh: '以前 → 現在 → 接下來',
              whenEn: 'Has X changed? Will X change? How is X different from the past?',
              whenZh: '「……變了嗎？」「……會改變嗎？」「和以前有什麼不同？」',
              buckets: [
                { en: 'How it used to work', zh: '以前是怎麼運作的' },
                { en: 'What is different now', zh: '現在有什麼不同' },
                { en: 'Where I think it goes next', zh: '我認為接下來會怎麼走' },
              ],
              lines: [
                { en: 'Twenty years ago, none of this existed.', zh: '二十年前，這些東西根本不存在。' },
                { en: 'What’s changed is', zh: '改變的是' },
                { en: 'And I suspect the next step is', zh: '我猜接下來會是' },
              ],
            },
            {
              tag: 'D',
              name: 'Cause → Effect → Limit',
              nameZh: '原因 → 影響 → 但是',
              whenEn: 'Why does X happen? What effect does X have on…?',
              whenZh: '「為什麼會……？」「……對……造成什麼影響？」',
              buckets: [
                { en: 'The main reason', zh: '主要原因' },
                { en: 'What that leads to', zh: '因此帶來什麼' },
                { en: 'Where it stops being true', zh: '這個說法到哪裡就不成立' },
              ],
              lines: [
                { en: 'The main reason is probably', zh: '主要原因大概是' },
                { en: 'And the knock-on effect of that is', zh: '而它連帶的效應是' },
                { en: 'That said, it only goes so far, because', zh: '話說回來，這也有極限，因為' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'The third bucket is where the marks are',
          zh: '分數藏在第三個籃子',
          bodyEn: 'Most candidates manage two buckets and stop. The third one — the solution, the limit, the place where it stops being true — is the part that sounds like an opinion rather than a list. It is also the easiest to prepare, because every shape has one.',
          bodyZh: '多數考生講完兩個籃子就停了。第三個籃子——解方、極限、「這說法到哪裡就不成立」——才是讓回答聽起來像觀點、而不是清單的部分。它其實也最好準備，因為每一種結構都有一個。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'q1',
      n: 3,
      en: 'Question 1 — deleting bad reviews',
      zh: '第一題：刪除負評',
      blocks: [
        {
          t: 'question',
          en: 'Should companies be allowed to delete negative reviews?',
          zh: '企業應該被允許刪除負評嗎？',
          shape: 'A · Concede → Argue → Solve',
          shapeZh: 'A · 讓步 → 主張 → 解方',
        },
        {
          t: 'lead',
          en: 'Fourteen points, all from one recorded answer, roughly in the order they were said. Sort them into three buckets before you look at anything else.',
          zh: '十四個想法，全部出自同一段錄音回答，大致照當時說出來的順序排列。先把它們分進三個籃子，再看別的。',
        },
        {
          t: 'sort',
          en: 'Sort the fourteen points',
          zh: '把十四個想法分類',
          hintEn: 'Tap a point, then tap the bucket it belongs in. A point in the wrong bucket says why and stays where you can see it.',
          hintZh: '先點一個想法，再點它該去的籃子。放錯的想法會說明理由，並留在你看得到的地方。',
          buckets: [
            { id: 'a', en: 'The other side', zh: '對方的道理', subEn: 'why people want them left up', subZh: '為什麼大家希望負評留著' },
            { id: 'b', en: 'My reason', zh: '我的理由', subEn: 'why some of them are unfair', subZh: '為什麼有些負評並不公平' },
            { id: 'c', en: 'So what should happen', zh: '那該怎麼辦', subEn: 'the rule I would want instead', subZh: '我想要的規則' },
          ],
          cards: [
            {
              en: 'Consumers want honest information about a company.',
              zh: '消費者想知道一家公司真實的樣子。',
              bucket: 'a',
              why: {
                en: 'This is the case against you. Say it first and say it briefly — it buys you the right to disagree.',
                zh: '這是反對你的立場。先講，而且講短——它替你換來反對的資格。',
              },
            },
            {
              en: 'Reviews tell future customers what to expect.',
              zh: '評論讓未來的客人知道自己會遇到什麼。',
              bucket: 'a',
              why: {
                en: 'Same bucket as the first — it is the reason the public defends bad reviews.',
                zh: '和第一張同一籃——這是大眾捍衛負評的理由。',
              },
            },
            {
              en: 'People use reviews to decide where to spend their money.',
              zh: '大家靠評論決定把錢花在哪裡。',
              bucket: 'a',
              why: {
                en: 'Still the other side. Three sentences is plenty for a concession — any more and it becomes their answer, not yours.',
                zh: '仍然屬於對方的道理。讓步三句就夠了——再多，那就變成他們的答案，不是你的。',
              },
            },
            {
              en: 'After a bad experience, some customers write while they are still angry.',
              zh: '有些客人在氣頭上就寫下評論。',
              bucket: 'b',
              why: {
                en: 'This is your first reason, not the other side — it is why a review can be unreliable.',
                zh: '這是你的第一個理由，不是對方的立場——它說明評論為什麼可能不可靠。',
              },
            },
            {
              en: 'They exaggerate, or twist what actually happened.',
              zh: '他們誇大，或扭曲實際發生的事。',
              bucket: 'b',
              why: {
                en: 'Belongs with the angry-customer point: at this stage the review has stopped describing the business.',
                zh: '和「氣頭上」那點同一組：到這個地步，評論已經不是在描述那家店了。',
              },
            },
            {
              en: 'One bad night at a hotel becomes a review of the whole hotel.',
              zh: '一晚不愉快，變成整間飯店的評價。',
              bucket: 'b',
              why: {
                en: 'Your best example. Keep it in the reason bucket and it does the arguing for you.',
                zh: '你最好的例子。把它放在理由籃裡，它會替你論證。',
              },
            },
            {
              en: 'Some people leave a bad review hoping for compensation.',
              zh: '有些人留負評，是想要賠償。',
              bucket: 'b',
              why: {
                en: 'Motive rather than method — but still a reason the review is not real feedback.',
                zh: '這談的是動機而不是做法——但一樣說明那則評論不是真的回饋。',
              },
            },
            {
              en: 'Some comments are abusive rather than critical.',
              zh: '有些留言是辱罵，而不是批評。',
              bucket: 'b',
              why: {
                en: 'Reason bucket. Note the word: abusive, not merely negative. That distinction is your whole argument.',
                zh: '理由籃。注意用字：是 abusive（辱罵），不只是 negative（負面）。這個區別就是你整個論點。',
              },
            },
            {
              en: 'The complaint is written to damage the business, not to describe it.',
              zh: '那則抱怨是為了傷害店家而寫，不是為了描述店家。',
              bucket: 'b',
              why: {
                en: 'The strongest version of your reason. Say it last in this bucket and it carries you into the solution.',
                zh: '你這個理由最有力的版本。放在這一籃的最後講，它會把你帶進解方。',
              },
            },
            {
              en: 'The company should report the review, not delete it itself.',
              zh: '公司應該檢舉評論，而不是自己刪掉。',
              bucket: 'c',
              why: {
                en: 'This is the solution, and it is the sentence that stops you sounding pro-censorship.',
                zh: '這是解方，也是讓你不會聽起來像在支持審查的那一句。',
              },
            },
            {
              en: 'A platform like Google should be the one that checks it.',
              zh: '應該由 Google 這類平台來審查。',
              bucket: 'c',
              why: {
                en: 'Solution bucket — who decides is part of the answer, not part of the complaint.',
                zh: '解方籃——「由誰決定」是答案的一部分，不是抱怨的一部分。',
              },
            },
            {
              en: 'There have to be clear, published criteria for removal.',
              zh: '刪除必須有明確、公開的標準。',
              bucket: 'c',
              why: {
                en: 'Solution. Without this sentence your answer is only “sometimes yes”, which is not a position.',
                zh: '解方。少了這一句，你的答案只是「有時候可以」，那不算立場。',
              },
            },
            {
              en: 'Fake, abusive or irrelevant reviews can come down.',
              zh: '造假、辱罵或不相關的評論可以下架。',
              bucket: 'c',
              why: {
                en: 'Solution — the line you draw. Naming the types is what makes it sound thought through.',
                zh: '解方——你劃下的那條線。把類型點名出來，才顯得你真的想過。',
              },
            },
            {
              en: 'Honest criticism and useful suggestions stay up.',
              zh: '誠實的批評和有用的建議留著。',
              bucket: 'c',
              why: {
                en: 'The last sentence of the answer. It ends on purpose instead of trailing off.',
                zh: '整段回答的最後一句。它是有意識地收尾，而不是逐漸消音。',
              },
            },
          ],
        },
        {
          t: 'model',
          en: 'The same fourteen points, in bucket order',
          zh: '同樣的十四個想法，照籃子的順序',
          hintEn: 'About fifty-five seconds. Nothing has been added — this is your own material with the order fixed.',
          hintZh: '大約五十五秒。沒有新增任何內容——這就是你自己的素材，只是順序整理過了。',
          parts: [
            {
              tag: 'Position',
              tagZh: '立場',
              en: 'I’d say yes — but not freely, and not by the company itself.',
              zh: '我會說可以，但不是想刪就刪，也不是由公司自己刪。',
            },
            {
              tag: 'The other side',
              tagZh: '對方的道理',
              en: 'I can see why people want every negative review left up. Consumers want honest information, and it’s how most of us decide where to spend our money.',
              zh: '我能理解為什麼大家希望所有負評都留著。消費者想要真實的資訊，我們多數人也是靠這個決定把錢花在哪裡。',
            },
            {
              tag: 'My reason',
              tagZh: '我的理由',
              en: 'The problem is that some of these aren’t really feedback. People write while they’re still angry, they exaggerate, and one bad night at a hotel turns into a review of the whole hotel. Some are abusive rather than critical, and some are written hoping for compensation.',
              zh: '問題在於，有些根本不算回饋。人們在氣頭上就動筆，會誇大，一晚不愉快就變成整間飯店的評價。有些是辱罵而不是批評，有些則是為了要到賠償才寫的。',
            },
            {
              tag: 'So what should happen',
              tagZh: '那該怎麼辦',
              en: 'So what I’d want isn’t deletion on demand. The company reports the review, a platform like Google checks it against clear published criteria, and only the fake, abusive or irrelevant ones come down. Honest criticism stays up.',
              zh: '所以我想要的不是想刪就刪。公司提出檢舉，由 Google 這類平台依照明確公開的標準審查，只有造假、辱罵或不相關的才下架。誠實的批評留著。',
            },
          ],
        },
        {
          t: 'task',
          en: 'Now say it without the model',
          zh: '現在不看範例，說一次',
          instructionEn: 'Cover the model answer. Say it from the three bucket names alone, in about forty-five seconds. Tick a phrase when you actually use it.',
          instructionZh: '把範例蓋起來。只看三個籃子的名稱，用大約四十五秒說出來。真的用到某個句型時，再打勾。',
          checklist: [
            { en: 'I can see why people say the opposite.', zh: '我能理解為什麼有人持相反意見。' },
            { en: 'The problem is that…', zh: '問題在於……' },
            { en: 'So what I’d want isn’t…, it’s…', zh: '所以我想要的不是……，而是……' },
            { en: '…and that’s where I’d draw the line.', zh: '……這就是我會劃下的界線。' },
          ],
        },
        { t: 'clock', en: 'Plan, then speak', zh: '先計畫，再開口' },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'q2',
      n: 4,
      en: 'Question 2 — spotting fake reviews',
      zh: '第二題：看出假評論',
      blocks: [
        {
          t: 'question',
          en: 'How can consumers tell whether an online review is fake?',
          zh: '消費者要怎麼分辨網路上的評論是不是假的？',
          shape: 'B · Three types',
          shapeZh: 'B · 三種類型',
        },
        {
          t: 'lead',
          en: 'Twelve points this time, and the three buckets were already there in the answer — they just came out mixed together. One card fits two buckets, and both are defensible.',
          zh: '這次是十二個想法，而三個籃子原本就在那段回答裡，只是講的時候混在一起了。有一張卡片兩個籃子都放得進去，兩種都說得通。',
        },
        {
          t: 'sort',
          en: 'Sort the twelve points',
          zh: '把十二個想法分類',
          hintEn: 'Tap a point, then tap its bucket. If you can justify the other bucket out loud, say so — one of these takes either.',
          hintZh: '先點一個想法，再點它的籃子。如果你能說出另一個籃子的理由，就講出來——其中一張兩邊都收。',
          buckets: [
            { id: 'a', en: 'Who wrote it', zh: '誰寫的', subEn: 'the reviewer, not the review', subZh: '看的是評論者，不是那則評論' },
            { id: 'b', en: 'How many, and when', zh: '數量與時間', subEn: 'the pattern across all of them', subZh: '整體呈現出來的樣態' },
            { id: 'c', en: 'How it reads', zh: '怎麼寫的', subEn: 'the words on the page', subZh: '頁面上的文字本身' },
          ],
          cards: [
            {
              en: 'Open the profile and see what else this person has reviewed.',
              zh: '點開個人檔案，看這個人還評論過什麼。',
              bucket: 'a',
              why: { en: 'The reviewer, not the review. This is the fastest check you have.', zh: '看的是人，不是那則評論。這是你最快的一招。' },
            },
            {
              en: 'Someone who gives every restaurant one star is just a picky reviewer.',
              zh: '每家餐廳都給一星的人，只是個挑剔的評論者。',
              bucket: 'a',
              why: { en: 'A judgement about the person. It tells you more about them than about the restaurant.', zh: '這是對人的判斷。它告訴你的是那個人，而不是那家餐廳。' },
            },
            {
              en: 'An account that has only ever posted five stars.',
              zh: '一個只發過五星的帳號。',
              bucket: 'a',
              why: { en: 'Also the profile — the giveaway is the account history, not this one review.', zh: '同樣是看檔案——破綻在帳號的歷史紀錄，不在這一則。' },
            },
            {
              en: 'Thirty five-star reviews in the same week.',
              zh: '同一週出現三十則五星評論。',
              bucket: 'b',
              why: { en: 'Timing. One review like this means nothing; thirty at once is a pattern.', zh: '時間點。單獨一則什麼都不代表，一次三十則就是樣態。' },
            },
            {
              en: 'The shop offers a free drink for a five-star review and a photo.',
              zh: '店家用一杯免費飲料，換五星加照片。',
              bucket: 'b',
              why: { en: 'This is the explanation for the cluster, so it lives with the cluster.', zh: '這是那一叢評論的成因，所以和它放在一起。' },
            },
            {
              en: 'A rating built on a thousand reviews beats one built on a hundred.',
              zh: '一千則評論撐起來的分數，勝過一百則撐起來的分數。',
              bucket: 'b',
              why: { en: 'Volume. Same bucket as timing — both look at the whole set rather than one review.', zh: '數量。和時間同一籃——兩者看的都是整體，而不是單一評論。' },
            },
            {
              en: 'Ratings that all appeared just after the shop opened.',
              zh: '所有評分都出現在店剛開幕之後。',
              bucket: 'b',
              why: { en: 'Timing again, and the most suspicious version of it.', zh: '一樣是時間，而且是最可疑的那一種。' },
            },
            {
              en: 'Every review uses the same handful of words.',
              zh: '每一則評論都用那幾個一模一樣的字。',
              bucket: ['a', 'c'],
              why: {
                en: 'Both work. It is a pattern in the writing, and it is a sign of one person or one campaign behind several accounts. Say which one you mean and it counts either way.',
                zh: '兩邊都成立。它是文字上的樣態，也是多個帳號背後同一個人、同一波操作的跡象。你只要說清楚指的是哪一種，兩種都算數。',
              },
            },
            {
              en: 'Comments that read too smoothly to be real.',
              zh: '讀起來順到不像真的留言。',
              bucket: 'c',
              why: { en: 'The words themselves. This is where an AI-written review gives itself away.', zh: '看的是文字本身。AI 寫出來的評論就是在這裡露餡。' },
            },
            {
              en: 'Reviews that just say “good” and nothing else.',
              zh: '只寫「好」，其他什麼都沒有的評論。',
              bucket: 'c',
              why: { en: 'Quality of the comment. No detail means nothing was actually experienced.', zh: '留言的品質。沒有細節，代表根本沒有真的經歷過。' },
            },
            {
              en: 'A real review says what they ordered and what went wrong.',
              zh: '真的評論會說出點了什麼、哪裡出了問題。',
              bucket: 'c',
              why: { en: 'The positive version of the same test — details are hard to fake.', zh: '同一個標準的正面版本——細節很難造假。' },
            },
            {
              en: 'Praise with no detail about the visit at all.',
              zh: '完全沒提到這趟消費細節的稱讚。',
              bucket: 'c',
              why: { en: 'Quality again. Vague praise and vague complaints fail the same test.', zh: '仍然是品質。含糊的稱讚和含糊的抱怨，過不了同一關。' },
            },
          ],
        },
        {
          t: 'model',
          en: 'The same twelve points, in bucket order',
          zh: '同樣的十二個想法，照籃子的順序',
          hintEn: 'About fifty-five seconds. The three buckets are announced out loud — that is the only thing added.',
          hintZh: '大約五十五秒。三個籃子被明白地說出口——那是唯一加上去的東西。',
          parts: [
            {
              tag: 'Position',
              tagZh: '立場',
              en: 'Honestly, you can’t be certain — but I look at three things.',
              zh: '老實說，沒辦法百分之百確定，不過我會看三件事。',
            },
            {
              tag: 'Who wrote it',
              tagZh: '誰寫的',
              en: 'First, who wrote it. I open the reviewer’s profile and see what else they’ve posted. If someone gives every restaurant one star, that tells me more about them than about the restaurant.',
              zh: '第一，是誰寫的。我會點開評論者的個人檔案，看他還發過什麼。如果一個人每家餐廳都給一星，那告訴我的是他這個人，而不是那家餐廳。',
            },
            {
              tag: 'How many, and when',
              tagZh: '數量與時間',
              en: 'Second, how many and when. A rating out of a thousand reviews means more than one out of a hundred, and thirty five-star reviews in the same week usually means a promotion — leave five stars, get a free drink.',
              zh: '第二，數量和時間。一千則評論撐起的分數，比一百則的更有意義；同一週出現三十則五星，通常代表有活動——給五星、送一杯飲料。',
            },
            {
              tag: 'How it reads',
              tagZh: '怎麼寫的',
              en: 'Third, how it reads. A real review tells you what they ordered and what went wrong. A fake one is vague, or repeats the same phrases, or reads too smoothly — the way AI writes.',
              zh: '第三，是怎麼寫的。真的評論會告訴你點了什麼、哪裡出問題。假的則含糊、重複同樣的說法，或者順到不像話——就是 AI 那種寫法。',
            },
          ],
        },
        {
          t: 'task',
          en: 'Now say it without the model',
          zh: '現在不看範例，說一次',
          instructionEn: 'Announce the three buckets as you go. If you lose your place, name the next bucket out loud and carry on — that is what the buckets are for.',
          instructionZh: '一邊講，一邊把三個籃子說出來。如果講到不知道自己在哪，就把下一個籃子的名字說出口再繼續——籃子就是為此存在的。',
          checklist: [
            { en: 'I look at about three things.', zh: '我大概會看三件事。' },
            { en: 'First, … Second, … Third, …', zh: '第一……第二……第三……' },
            { en: 'That tells me more about them than about the restaurant.', zh: '那告訴我的是他這個人，而不是那家餐廳。' },
            { en: 'You can’t be certain, but…', zh: '沒辦法完全確定，不過……' },
          ],
        },
        { t: 'clock', en: 'Plan, then speak', zh: '先計畫，再開口' },
      ],
    },

    // ------------------------------------------------------------ step 5
    {
      id: 'your-turn',
      n: 5,
      en: 'Your turn — three new questions',
      zh: '換你來：三題新題目',
      blocks: [
        {
          t: 'lead',
          en: 'Same topic, no prepared points. Thirty seconds to fill the pad, then speak. Nothing on this page is saved — a reload clears every pad.',
          zh: '同樣的主題，但沒有現成的想法。三十秒填好計畫表，然後開口。這一頁不會儲存任何東西——重新整理就清空所有計畫表。',
        },

        {
          t: 'question',
          en: 'Why do people trust a stranger’s review more than a company’s own advertising?',
          zh: '為什麼大家相信陌生人的評論，勝過公司自己的廣告？',
          shape: 'D · Cause → Effect → Limit',
          shapeZh: 'D · 原因 → 影響 → 但是',
        },
        {
          t: 'pad',
          en: 'Three buckets, two words each',
          zh: '三個籃子，每個兩三個字',
          hintEn: 'Key words only. If you write a sentence you will read it aloud, and reading aloud is not speaking.',
          hintZh: '只寫關鍵字。寫成句子，你就會照著唸——照著唸不算口說。',
          rows: [
            {
              en: 'The main reason',
              zh: '主要原因',
              ideas: [
                { en: 'The stranger has nothing to gain from you.', zh: '那個陌生人不會從你身上得到什麼。' },
                { en: 'Advertising only ever shows the good day.', zh: '廣告永遠只呈現順利的那一天。' },
              ],
            },
            {
              en: 'What that leads to',
              zh: '因此帶來什麼',
              ideas: [
                { en: 'Companies now write advertising to sound like a customer.', zh: '現在公司會把廣告寫得像顧客在說話。' },
                { en: 'One bad review can cost more than a campaign earns.', zh: '一則負評的代價，可能高過一檔廣告賺到的。' },
              ],
            },
            {
              en: 'Where it stops being true',
              zh: '這說法到哪裡就不成立',
              ideas: [
                { en: 'Strangers can be paid too.', zh: '陌生人也可以被收買。' },
                { en: 'We trust the crowd, not the person — one review convinces nobody.', zh: '我們相信的是群體不是個人——單獨一則評論說服不了任何人。' },
              ],
            },
          ],
        },
        { t: 'clock', en: 'Plan, then speak', zh: '先計畫，再開口' },

        {
          t: 'question',
          en: 'Should online platforms be responsible for the reviews they publish?',
          zh: '網路平台該為自己刊出的評論負責嗎？',
          shape: 'A · Concede → Argue → Solve',
          shapeZh: 'A · 讓步 → 主張 → 解方',
        },
        {
          t: 'pad',
          en: 'Three buckets, two words each',
          zh: '三個籃子，每個兩三個字',
          hintEn: 'You have answered a shape A question already today. Use the same three lines.',
          hintZh: '你今天已經答過一題結構 A 了。用同樣的那三句話。',
          rows: [
            {
              en: 'The fair point on the other side',
              zh: '對方站得住腳的地方',
              ideas: [
                { en: 'A platform hosts millions of reviews; it cannot read them all.', zh: '一個平台上有數百萬則評論，不可能全部讀過。' },
                { en: 'If they are liable, they will delete anything risky.', zh: '一旦要負責，他們就會把有風險的全刪掉。' },
              ],
            },
            {
              en: 'Why I still think what I think',
              zh: '我為什麼還是這樣想',
              ideas: [
                { en: 'They take money for the ranking those reviews produce.', zh: '那些評論產生的排名，他們是收錢的。' },
                { en: 'A newspaper is responsible for its letters page.', zh: '報紙要為它的讀者投書版負責。' },
              ],
            },
            {
              en: 'What should actually happen',
              zh: '那實際上該怎麼做',
              ideas: [
                { en: 'Responsible for the system, not for every single review.', zh: '對制度負責，而不是對每一則評論負責。' },
                { en: 'A published removal policy and a real route of appeal.', zh: '公開的下架標準，加上真的能申訴的管道。' },
              ],
            },
          ],
        },
        { t: 'clock', en: 'Plan, then speak', zh: '先計畫，再開口' },

        {
          t: 'question',
          en: 'Has the internet changed the way businesses treat their customers?',
          zh: '網路改變了企業對待顧客的方式嗎？',
          shape: 'C · Then → Now → Next',
          shapeZh: 'C · 以前 → 現在 → 接下來',
        },
        {
          t: 'pad',
          en: 'Three buckets, two words each',
          zh: '三個籃子，每個兩三個字',
          hintEn: 'The third bucket is a guess about the future. You are allowed to be wrong — say “I suspect” and it is an opinion, not a claim.',
          hintZh: '第三個籃子是對未來的猜測。你可以猜錯——講「I suspect」，它就是觀點，而不是斷言。',
          rows: [
            {
              en: 'How it used to work',
              zh: '以前是怎麼運作的',
              ideas: [
                { en: 'A complaint reached the manager and stopped there.', zh: '一個客訴走到店長那裡就停住了。' },
                { en: 'The only revenge was not going back.', zh: '唯一的報復就是不再上門。' },
              ],
            },
            {
              en: 'What is different now',
              zh: '現在有什麼不同',
              ideas: [
                { en: 'Every unhappy customer has a microphone.', zh: '每個不滿意的顧客手上都有一支麥克風。' },
                { en: 'Staff are trained to ask for the review, not just the sale.', zh: '員工被訓練去要評論，而不只是成交。' },
              ],
            },
            {
              en: 'Where I think it goes next',
              zh: '我認為接下來會怎麼走',
              ideas: [
                { en: 'Politeness on the surface, the same policy underneath.', zh: '表面上更客氣，底下的規定沒變。' },
                { en: 'When everyone has five stars, five stars stops meaning anything.', zh: '當所有人都是五星，五星就不再有任何意義。' },
              ],
            },
          ],
        },
        { t: 'clock', en: 'Plan, then speak', zh: '先計畫，再開口' },

        {
          t: 'task',
          en: 'Across all three answers',
          zh: '三題一起看',
          instructionEn: 'Tick these once each, across the three questions. Four ticks and the structure is audible without you thinking about it.',
          instructionZh: '這三題加起來，每一項打勾一次就好。四個勾都拿到，代表你不用刻意想，結構也聽得出來了。',
          checklist: [
            { en: 'You bought thinking time with a sentence, not with “um”.', zh: '你是用一個句子、而不是「嗯……」來爭取思考時間。' },
            { en: 'You said how many parts the answer had before you started.', zh: '你在開始之前，先說了這個回答有幾個部分。' },
            { en: 'You named the third bucket out loud.', zh: '你把第三個籃子明白說出口了。' },
            { en: 'You stopped on purpose instead of trailing off.', zh: '你是刻意停下來，而不是逐漸消音。' },
          ],
        },
        {
          t: 'note',
          en: 'One rule to leave with',
          zh: '帶走一條規則',
          bodyEn: 'You are allowed ten seconds of silence at the start of a Part 3 answer. You are not allowed thirty seconds of drift in the middle of one. Spend the ten.',
          bodyZh: '在 Part 3 回答的開頭，你可以有十秒的沉默；但你不能在回答中間漂流三十秒。把那十秒花掉。',
        },
      ],
    },
  ],
};

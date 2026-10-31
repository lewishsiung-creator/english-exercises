/* Body Words — the English for the things the body makes.

   Started from a Cool English carousel on 眼屎、鼻屎、耳屎. The words there are
   right, and the carousel's own framing — a casual word, a formal word, and a
   collocation line — is the shape this page keeps. Three things were added
   here that the source does not have, and they are the reason this is a page
   rather than a screenshot:

   - **cerumen.** 鼻屎 is given a 正式說法 (dried nasal mucus) and 眼屎 is given
     one (eye discharge), but 耳屎 is given none. The medical word is cerumen,
     which is what a nurse writes on a form, and without it the set reads
     inconsistent.
   - **鼻屎 against 鼻涕.** Chinese separates them and so does English — booger
     is dry, snot is wet — and this is the mistake a Taiwanese student actually
     makes. The source does not mention it.
   - **What people really say for 挖耳棒.** "Ear pick" is understood and is how
     the tool is sold, but a British or American speaker reaches for a cotton
     swab, or a Q-tip in the US. Left uncorrected, 挖耳棒 comes out of a
     student's mouth sounding translated.

   THE SPINE OF THE PAGE
   ---------------------
   Chinese names all three of these with one character — 屎 — and English does
   not. Each thing has its own word, and each word sits somewhere on a ladder
   from 非常口語 to 醫學. Knowing *which rung* is most of the lesson: booger to
   a friend, dried nasal mucus on a form, and never the other way round. Every
   term therefore carries one or more register tags, and the tags are defined
   once in `REGISTERS` so a tag never means two different things on two topics.

   ADDING A TOPIC
   --------------
   Push another object onto `topics`: 口水 (saliva / drool / spit), 汗 (sweat /
   perspiration), 痰 (phlegm / mucus), 指甲垢, 頭皮屑 (dandruff). The contents
   list, the numbering and the anchors all come from the array, so a new topic
   needs no code. `id` becomes the anchor: /body-words/#ear.

   Fields per topic:
     id      URL-safe; becomes the anchor
     zh,en   the two titles. The Chinese is the one a student searches for
     icon    one emoji, a quiet marker in the contents list and the heading
     lead    a framing sentence, both languages
     terms   the words themselves (below)
     colls   常用搭配 — the phrase, and its 中文
     notes   the things worth a paragraph. en/zh are the heading, body* the text

   Fields per term:
     t       the English term, as it is said
     reg     one or more keys from REGISTERS. Order matters: the first is the
             one the chip shows biggest
     zh      what it means, in Chinese
     ex      a sentence using it, written for this page
     zhEx    its 中譯

   BOTH HALVES OF EVERY PAIR MUST BE FILLED IN. A missing zh is not a
   half-finished line — in 自學 mode it is a hole where the meaning should be.
*/

window.BODY = {

  title:   'Body Words',
  titleZh: '身體的那些字',

  /* Where the first three topics' cards come from. Stated once here and shown
     at the foot of the page, as well as on every figure that uses one.

     These are Cool English's artwork, not this site's. The words on them are
     facts and belong to nobody, which is why the page's own text was written
     fresh rather than transcribed — but the cards themselves are theirs, so
     they are credited where they are used and again at the end, with a link
     back. If the credit is ever the thing that gets edited out, the images
     should go with it. */
  credit: {
    name: 'Cool English',
    nameZh: '教育部酷英網',
    href: 'https://www.coolenglish.edu.tw/',
    en: 'The cards for 眼屎, 鼻屎 and 耳屎 are Cool English’s, from their post on the three. The words on them are not anybody’s property and the text of this page was written for it rather than copied, but the artwork is theirs. The pictures for 口水, 汗 and 痰 were drawn for this page — Cool English’s post did not cover those three.',
    zh: '「眼屎」、「鼻屎」、「耳屎」三張單字卡是 Cool English（教育部酷英網）的作品，出自他們介紹這三個字的貼文。卡片上的單字本身不屬於任何人，這一頁的文字也是重新寫的、不是照抄，但圖是他們的。「口水」、「汗」、「痰」三張則是為這一頁另外畫的——他們那篇貼文沒有這三個。',
  },

  intro: {
    en: 'The things the body makes, and the English for them. The first three share one character in Chinese — 屎 — and share nothing at all in English. Each one has its own word, and each word sits somewhere between what you say to a friend and what a doctor writes down. Knowing which is which is most of the lesson.',
    zh: '身體製造出來的那些東西，以及它們的英文。前三個在中文裡共用一個「屎」字，在英文裡卻毫無關係。每一個都有自己的字，而且每個字落在不同的位置——從跟朋友講的，到醫生寫在紀錄上的。真正要學的，是什麼場合該用哪一個。',
  },

  /* The ladder, defined once. A tag that meant 口語 on one topic and 正式 on
     another would quietly destroy the only thing this page is teaching. */
  registers: {
    us:   { en: 'US',           zh: '美式' },
    uk:   { en: 'UK',           zh: '英式' },
    talk: { en: 'casual',       zh: '口語' },
    very: { en: 'very casual',  zh: '非常口語' },
    neut: { en: 'everyday',     zh: '一般通用' },
    form: { en: 'formal',       zh: '正式' },
    med:  { en: 'medical',      zh: '醫學' },
  },

  topics: [

    /* ---------------------------------------------------------------- 1 */
    {
      id: 'eye',
      zh: '眼屎',
      en: 'Eye discharge',
      icon: '👁',
      lead: {
        en: 'The one with the strangest English word in it: the stuff in the corner of your eye when you wake up is called sleep.',
        zh: '這一組裡藏著最奇怪的一個英文字：早上起床時眼角那個東西，英文就叫 sleep。',
      },

      image: {
        src: 'img/eye.jpg', w: 1000, h: 1000, source: 'cool',
        alt: 'Cool English 的「眼屎」單字卡：一隻眼睛的半調網點插圖，眼角有一塊黃色的眼屎；左邊列出 sleep in one’s eyes、eye boogers、eye gunk、eye discharge 四種說法與中文，下方是常用搭配 have sleep in one’s eyes 和 wipe the sleep from one’s eyes。',
      },

      terms: [
        {
          t: 'sleep', reg: ['talk'],
          zh: '眼屎（特別指睡醒後眼角的那些）',
          ex: 'You’ve still got sleep in your eyes.',
          zhEx: '你眼角還有眼屎。',
        },
        {
          t: 'eye boogers', reg: ['very', 'us'],
          zh: '眼屎',
          ex: 'My little brother woke up with eye boogers everywhere.',
          zhEx: '我弟弟一起床，眼睛周圍都是眼屎。',
        },
        {
          t: 'eye gunk', reg: ['talk'],
          zh: '眼睛裡黏黏的分泌物',
          ex: 'I washed the eye gunk away with warm water.',
          zhEx: '我用溫水把眼睛裡黏黏的東西洗掉。',
        },
        {
          t: 'eye discharge', reg: ['form', 'med'],
          zh: '眼睛分泌物',
          ex: 'The doctor asked whether there had been any eye discharge.',
          zhEx: '醫生問有沒有出現眼睛分泌物。',
        },
      ],

      colls: [
        { en: 'have sleep in one’s eyes', zh: '眼睛有眼屎' },
        { en: 'wipe the sleep from one’s eyes', zh: '擦掉眼屎' },
        { en: 'rub one’s eyes', zh: '揉眼睛' },
      ],

      notes: [
        {
          en: 'This “sleep” has no plural',
          zh: '這個 sleep 不可數',
          bodyEn: 'It is the same word as the sleep you get at night, used for a different thing, and in this meaning it never takes a or an and never becomes sleeps. You have sleep in your eyes — not a sleep, not sleeps. It behaves like water or rice: you can have some of it, or a lot of it, but you cannot have one.',
          bodyZh: '它和「睡覺」是同一個字，只是拿來指另一個東西；在這個意思下，前面不加 a 或 an，也沒有複數。要說 You have sleep in your eyes，不能說 a sleep 或 sleeps。它的用法像 water 或 rice：可以有 some、有 a lot，但不能有「一個」。',
        },
      ],
    },

    /* ---------------------------------------------------------------- 2 */
    {
      id: 'nose',
      zh: '鼻屎',
      en: 'Booger',
      icon: '👃',
      lead: {
        en: 'Two everyday words that split along the Atlantic, one formal phrase — and a trap, because Chinese keeps 鼻屎 and 鼻涕 apart and so does English.',
        zh: '兩個日常用字，一個在美國一個在英國；一個正式說法。還有一個陷阱：中文把「鼻屎」和「鼻涕」分開，英文也分。',
      },

      image: {
        src: 'img/nose.jpg', w: 1000, h: 1000, source: 'cool',
        alt: 'Cool English 的「鼻屎」單字卡：一個鼻子的半調網點插圖，鼻孔下有一塊黃色的鼻屎長出手腳；左邊列出 booger（美式英文）、bogey（英式英文）、dried nasal mucus（正式說法），下方是常用搭配 pick one’s nose。',
      },

      terms: [
        {
          t: 'booger', reg: ['us', 'talk'],
          zh: '鼻屎',
          ex: 'Don’t wipe your boogers on the sofa!',
          zhEx: '不要把鼻屎抹在沙發上！',
        },
        {
          t: 'bogey', reg: ['uk', 'talk'],
          zh: '鼻屎（英式說法，也拼成 bogie）',
          ex: 'He flicked a bogey out of the car window.',
          zhEx: '他把一顆鼻屎彈出車窗外。',
        },
        {
          t: 'dried nasal mucus', reg: ['form', 'med'],
          zh: '乾掉的鼻腔分泌物',
          ex: 'Dried nasal mucus can block a baby’s nose.',
          zhEx: '乾掉的鼻腔分泌物可能會塞住嬰兒的鼻子。',
        },
      ],

      colls: [
        { en: 'pick one’s nose', zh: '挖鼻屎' },
        { en: 'blow one’s nose', zh: '擤鼻涕' },
        { en: 'have a runny nose', zh: '流鼻水' },
      ],

      notes: [
        {
          en: 'A booger is dry. Snot is wet.',
          zh: 'booger 是乾的，snot 是濕的',
          bodyEn: 'Chinese separates 鼻屎 from 鼻涕, and English separates them just as firmly: a booger is the dry thing you pick out, and snot — or more politely mucus — is the wet thing that runs. Saying “I have a booger” when you mean 鼻涕 lands strangely, because the listener pictures a solid object. If your nose is running, say I have a runny nose, which is the one to reach for in front of anybody.',
          bodyZh: '中文把「鼻屎」和「鼻涕」分開，英文分得一樣清楚：booger 是乾的、挖得出來的那個；snot（客氣一點說 mucus）是濕的、會流下來的那個。想講「鼻涕」卻說 I have a booger，聽起來很奇怪，因為對方腦中浮現的是一個固體。鼻水一直流的時候，說 I have a runny nose 最安全，在誰面前都能講。',
        },
      ],
    },

    /* ---------------------------------------------------------------- 3 */
    {
      id: 'ear',
      zh: '耳屎',
      en: 'Earwax',
      icon: '👂',
      lead: {
        en: 'The easiest of the three to remember, because the word says what it is: ear + wax. The hard part is the tool you clean it with.',
        zh: '三組裡最好記的一個，因為這個字直接說出它是什麼：ear（耳朵）＋ wax（蠟）。難的是「挖耳棒」怎麼說。',
      },

      image: {
        src: 'img/ear.jpg', w: 1000, h: 1000, source: 'cool',
        alt: 'Cool English 的「耳屎」單字卡：一隻耳朵的半調網點插圖，耳道裡有一塊黃色的耳屎；上方寫著 ear（耳朵）＋ wax（蠟）＝ earwax（耳垢／耳屎），下方是常用搭配 have a lot of earwax、remove earwax 和 ear pick。',
      },

      terms: [
        {
          t: 'earwax', reg: ['neut'],
          zh: '耳垢、耳屎',
          ex: 'He had so much earwax that he couldn’t hear properly.',
          zhEx: '他耳屎多到聽不太清楚。',
        },
        {
          t: 'cerumen', reg: ['med'],
          zh: '耳垢（醫學用語）',
          ex: 'The nurse wrote “cerumen build-up” on the form.',
          zhEx: '護理師在表格上寫了「耳垢堆積」。',
        },
      ],

      colls: [
        { en: 'have a lot of earwax', zh: '耳屎很多' },
        { en: 'remove earwax', zh: '清除耳垢' },
        { en: 'clean one’s ears', zh: '清耳朵' },
      ],

      notes: [
        {
          en: 'What to call 挖耳棒',
          zh: '「挖耳棒」到底怎麼說',
          bodyEn: 'Ear pick is understood, and it is what the Taiwanese and Japanese tool is called where it is sold. But it is not what a British or American speaker reaches for in conversation: they say a cotton swab, or in the US a Q-tip, which is a brand name used for all of them. Worth knowing that doctors in both countries advise against putting either one into the ear canal — so the sentence you are most likely to hear is about not doing it.',
          bodyZh: 'ear pick 聽得懂，台灣和日本那種挖耳棒在商品頁上也是這樣寫。但英美的人日常講的不是它，而是 cotton swab；在美國多半說 Q-tip，那其實是一個品牌名，後來拿來泛稱所有棉花棒。順帶一提，兩國的醫生都不建議把任何東西伸進耳道，所以你最可能聽到的那句話，其實是叫你別這麼做。',
        },
        {
          en: 'Earwax does not count either',
          zh: 'earwax 也是不可數',
          bodyEn: 'Like sleep in your eyes, earwax is uncountable: a lot of earwax, some earwax, too much earwax — never an earwax and never earwaxes. The same is true of mucus. English tends to treat anything the body produces as a substance rather than as objects, which is why booger, a countable thing you can hold, is the odd one out in this set.',
          bodyZh: '和眼睛裡的 sleep 一樣，earwax 不可數：可以說 a lot of earwax、some earwax、too much earwax，但不能說 an earwax 或 earwaxes。mucus 也一樣。英文傾向把身體製造出來的東西當成「物質」，而不是「一個一個的東西」，所以這一組裡反而是 booger 特別——它是可數的，因為你真的可以拿在手上。',
        },
      ],
    },

    /* ---------------------------------------------------------------- 4 */
    {
      id: 'mouth',
      zh: '口水',
      en: 'Saliva',
      icon: '💧',
      lead: {
        en: 'Three everyday words for one substance, and what separates them is not what it is but how it got out of your mouth.',
        zh: '同一個東西有三個日常用字，而分辨它們的關鍵不是「它是什麼」，而是「它怎麼跑出嘴巴的」。',
      },

      image: {
        src: 'img/mouth.svg', w: 1000, h: 1000,
        alt: '為這一頁畫的「口水」插圖：琥珀色底上有一張張開的嘴，露出舌頭，三滴透明的口水從下唇滴落。',
      },

      terms: [
        {
          t: 'spit', reg: ['talk'],
          zh: '口水（吐出來的）',
          ex: 'There was spit all over the microphone.',
          zhEx: '麥克風上面都是口水。',
        },
        {
          t: 'drool', reg: ['talk'],
          zh: '流出來的口水',
          ex: 'The baby’s drool soaked right through her bib.',
          zhEx: '寶寶的口水把圍兜整個浸濕了。',
        },
        {
          t: 'dribble', reg: ['uk', 'talk'],
          zh: '流口水（英式說法，多半講嬰兒）',
          ex: 'Babies dribble a lot when they are teething.',
          zhEx: '寶寶長牙的時候會流很多口水。',
        },
        {
          t: 'saliva', reg: ['form', 'med'],
          zh: '唾液',
          ex: 'Saliva starts breaking your food down before you swallow it.',
          zhEx: '唾液在你吞下食物之前就開始分解它了。',
        },
      ],

      colls: [
        { en: 'make someone’s mouth water', zh: '讓人流口水' },
        { en: 'drool over something', zh: '垂涎某樣東西' },
        { en: 'spit something out', zh: '把東西吐出來' },
      ],

      notes: [
        {
          en: 'Spit, drool, saliva — what actually separates them',
          zh: 'spit、drool、saliva 差在哪裡',
          bodyEn: 'Saliva is the substance itself, and it is the word a doctor or a textbook uses. Spit leaves your mouth because you meant it to. Drool leaves your mouth because you did not — a sleeping baby, a dog watching dinner. Same stuff; three different stories about how it got out. That is why you cannot swap them: calling a baby’s drool spit makes it sound deliberate.',
          bodyZh: 'saliva 是「唾液」這個物質本身，是醫生和課本用的字。spit 是你「故意」從嘴裡吐出來的。drool 則是你「不是故意」流出來的——睡著的寶寶、盯著晚餐看的狗。同樣的東西，三個字講的是它「怎麼跑出來的」。所以這三個字不能互換：把寶寶的口水說成 spit，聽起來會像他是故意吐的。',
        },
        {
          en: '「看到就流口水」is not spit, and usually not drool either',
          zh: '「看了流口水」不要用 spit',
          bodyEn: 'In Chinese you 流口水 at a plate of food. English does not reach for spit or drool for that at all — it turns water into a verb: the smell made my mouth water. Drool can be used, but figuratively and about wanting something you cannot have — he was drooling over the new phone — so it carries a hint of being slightly embarrassing. Spit is never this: spit is what leaves the mouth on purpose.',
          bodyZh: '中文看到一桌菜會說「流口水」。英文完全不會用 spit 或 drool 來講這件事，而是把 water 當動詞用：the smell made my mouth water（那個香味讓我流口水）。drool 也可以用，但是比喻用法，指「很想要某個得不到的東西」——he was drooling over the new phone（他看著那支新手機垂涎三尺）——所以帶一點「有點丟臉」的味道。spit 絕對不是這個意思：spit 是故意吐出來的。',
        },
      ],
    },

    /* ---------------------------------------------------------------- 5 */
    {
      id: 'sweat',
      zh: '汗',
      en: 'Sweat',
      icon: '💦',
      lead: {
        en: 'The one where the everyday word is also the verb, so 流汗 is a single word in English and nothing needs to flow.',
        zh: '這一組的日常用字本身就是動詞，所以「流汗」在英文裡只要一個字，不需要另外找一個「流」。',
      },

      image: {
        src: 'img/sweat.svg', w: 1000, h: 1000,
        alt: '為這一頁畫的「汗」插圖：墨綠色底上有一張側臉，四顆透明的汗珠從臉的兩側甩出去。',
      },

      terms: [
        {
          t: 'sweat', reg: ['neut'],
          zh: '汗；流汗',
          ex: 'His shirt was soaked with sweat after the race.',
          zhEx: '比賽結束後，他的襯衫被汗浸濕了。',
        },
        {
          t: 'sweaty', reg: ['talk'],
          zh: '滿身汗的、汗濕的',
          ex: 'I’m all sweaty — give me five minutes to change.',
          zhEx: '我全身都是汗，給我五分鐘換件衣服。',
        },
        {
          t: 'perspiration', reg: ['form'],
          zh: '汗水',
          ex: 'A little perspiration on the forehead is normal in this heat.',
          zhEx: '這麼熱的天氣，額頭上有點汗是正常的。',
        },
      ],

      colls: [
        { en: 'break out in a sweat', zh: '開始冒汗' },
        { en: 'work up a sweat', zh: '運動到流汗' },
        { en: 'a cold sweat', zh: '冷汗' },
      ],

      notes: [
        {
          en: 'Sweat is the verb as well, and 流 is not needed',
          zh: 'sweat 本身就是動詞，不用再加「流」',
          bodyEn: 'English says I sweat a lot in summer. There is no separate word doing the work of 流 — writing my sweat flows is the kind of sentence that announces it was translated. As a noun it is uncountable, like earwax and like the sleep in your eyes: a lot of sweat, never many sweats. It takes an a only inside fixed phrases — a cold sweat, break out in a sweat, work up a sweat — and those are learned whole rather than built.',
          bodyZh: '英文會說 I sweat a lot in summer（我夏天很會流汗）。沒有另一個字在負責「流」這個動作——寫成 my sweat flows，一看就知道是翻譯出來的句子。當名詞時它不可數，和 earwax、眼睛裡的 sleep 一樣：可以說 a lot of sweat，不能說 many sweats。只有在固定片語裡才會出現 a——a cold sweat、break out in a sweat、work up a sweat——這些要整組記起來，不要自己拼。',
        },
        {
          en: 'Perspiration is for reading, not for saying',
          zh: 'perspiration 是拿來讀的，不是拿來講的',
          bodyEn: 'It means exactly what sweat means, but it lives on product labels, in health leaflets and in a doctor’s sentence. Almost nobody says it out loud, and someone who does sounds as though they are carefully avoiding the word sweat — which draws more attention than sweat would have. Say sweat. Recognise perspiration when you read it.',
          bodyZh: '它的意思和 sweat 完全一樣，但它活在產品標示、衛教單張和醫生的句子裡。幾乎沒有人會把它說出口；真的說了，聽起來會像你在刻意避開 sweat 這個字——反而比直接說 sweat 更引人注意。講話就說 sweat，perspiration 讀到認得就好。',
        },
      ],
    },

    /* ---------------------------------------------------------------- 6 */
    {
      id: 'phlegm',
      zh: '痰',
      en: 'Phlegm',
      icon: '😷',
      lead: {
        en: 'A short word with a silent letter in the middle of it, and an adjective that puts the letter back and changes the meaning completely.',
        zh: '一個中間藏著不發音字母的短字，而它的形容詞不但把那個字母唸回來，意思也完全變了。',
      },

      image: {
        src: 'img/phlegm.svg', w: 1000, h: 1000,
        alt: '為這一頁畫的「痰」插圖：磚紅色底上有氣管和兩片肺，氣管下段卡著一塊黃綠色的痰。',
      },

      terms: [
        {
          t: 'phlegm', reg: ['neut'],
          zh: '痰',
          ex: 'He coughed up phlegm all morning.',
          zhEx: '他整個早上都在咳痰。',
        },
        {
          t: 'mucus', reg: ['form', 'med'],
          zh: '黏液（鼻腔、喉嚨的分泌物）',
          ex: 'Mucus traps dust before it can reach your lungs.',
          zhEx: '黏液會在灰塵進到肺部之前把它攔下來。',
        },
        {
          t: 'a frog in one’s throat', reg: ['talk'],
          zh: '喉嚨卡卡的、聲音沙啞',
          ex: 'Sorry — I’ve got a bit of a frog in my throat this morning.',
          zhEx: '抱歉，我今天早上喉嚨有點卡。',
        },
      ],

      colls: [
        { en: 'cough up phlegm', zh: '咳出痰' },
        { en: 'clear one’s throat', zh: '清喉嚨' },
        { en: 'a chesty cough', zh: '有痰的咳嗽' },
      ],

      notes: [
        {
          en: 'The g in phlegm is silent — until it isn’t',
          zh: 'phlegm 的 g 不發音——直到它發音為止',
          bodyEn: 'Phlegm is said /flem/, rhyming with them. The g is silent, the way it is in sign, design and foreign. What makes this one worth remembering is that the g comes back in the adjective: phlegmatic is said /fleg-MAT-ic/, with the g fully pronounced. And it does not mean full of phlegm. It means calm, and hard to upset — from an old idea that the fluids in the body decided a person’s temperament.',
          bodyZh: 'phlegm 唸 /flem/，和 them 押韻。那個 g 不發音，就像 sign、design、foreign 裡的 g 一樣。真正值得記住的是：到了形容詞 phlegmatic，g 又回來了，唸 /fleg-MAT-ic/，g 要清楚發出來。而且它的意思不是「痰很多」，是「冷靜、不容易激動」——來自古代認為體液決定一個人性情的說法。',
        },
        {
          en: 'Mucus is a bigger word than 痰',
          zh: 'mucus 涵蓋的比「痰」大',
          bodyEn: 'It is the same word for what runs from your nose with a cold, which is why the formal name for 鼻屎 further up this page was dried nasal mucus. Nasal mucus belongs to the nose; phlegm comes from the chest and the throat. If you only keep one of the two, keep phlegm — it is the one a doctor will actually ask you about.',
          bodyZh: '感冒時從鼻子流出來的東西也是這個字，這也是為什麼這一頁前面「鼻屎」的正式說法是 dried nasal mucus。nasal mucus 屬於鼻子，phlegm 則是從胸腔和喉嚨來的。如果兩個只留一個，留 phlegm——那是醫生真的會問你的那一個。',
        },
      ],
    },

    /* ---------------------------------------------------------------- 7 */
    {
      id: 'scalp',
      zh: '頭皮屑',
      en: 'Dandruff',
      icon: '💇',
      lead: {
        en: 'The clearest case on this page of a word you can have a lot of but never one of — and of a body part students almost always name wrongly.',
        zh: '這一頁裡「可以有很多、但不能有一個」最清楚的例子；順便還有一個學生幾乎都會講錯的身體部位。',
      },

      image: {
        src: 'img/dandruff.svg', w: 1000, h: 1000,
        alt: '為這一頁畫的「頭皮屑」插圖：藍色底上有一顆側臉的頭，頭髮是深色的，白色的頭皮屑正從髮際落下來。',
      },

      terms: [
        {
          t: 'dandruff', reg: ['neut'],
          zh: '頭皮屑',
          ex: 'I’ve had dandruff since the weather turned cold.',
          zhEx: '天氣轉冷之後我就一直有頭皮屑。',
        },
        {
          t: 'flakes', reg: ['talk'],
          zh: '一片片的頭皮屑',
          ex: 'There were white flakes all over his black jacket.',
          zhEx: '他的黑外套上都是白白的頭皮屑。',
        },
        {
          t: 'scalp', reg: ['neut'],
          zh: '頭皮',
          ex: 'My scalp gets itchy if I don’t wash my hair.',
          zhEx: '我沒洗頭的話頭皮就會癢。',
        },
        {
          t: 'seborrhoeic dermatitis', reg: ['med'],
          zh: '脂漏性皮膚炎',
          ex: 'The doctor said it was seborrhoeic dermatitis, not ordinary dandruff.',
          zhEx: '醫生說那是脂漏性皮膚炎，不是普通的頭皮屑。',
        },
      ],

      colls: [
        { en: 'have dandruff', zh: '有頭皮屑' },
        { en: 'an itchy scalp', zh: '頭皮癢' },
        { en: 'anti-dandruff shampoo', zh: '抗屑洗髮精' },
      ],

      notes: [
        {
          en: 'You can have a lot of dandruff, but never a dandruff',
          zh: '可以有很多頭皮屑，但不能有「一個」',
          bodyEn: 'Dandruff is uncountable, like sweat and earwax and the sleep in your eyes: I have dandruff, a lot of dandruff, too much dandruff — never a dandruff and never dandruffs. When you do want to count, that is what flakes is for: I can see a few flakes on your collar. One word for the condition, another for the pieces. If you only remember one rule from this page, it is this one, because it has now come up five times.',
          bodyZh: 'dandruff 是不可數的，和 sweat、earwax、眼睛裡的 sleep 一樣：可以說 I have dandruff、a lot of dandruff、too much dandruff，但不能說 a dandruff 或 dandruffs。真的想「數」的時候，那就是 flakes 的用途：I can see a few flakes on your collar（我看到你領子上有幾片頭皮屑）。一個字講「這個狀況」，另一個字講「一片一片的東西」。如果這一頁只記一條規則，就記這一條——它到現在已經出現第五次了。',
        },
        {
          en: 'It is your scalp, not your head skin',
          zh: '那叫 scalp，不是 head skin',
          bodyEn: 'The skin on top of your head has its own word in English, and 頭皮 translates straight onto it: scalp. Head skin is understandable but is not a thing anyone says, and it is one of the easiest Taiwanese-student phrases to spot. Say my scalp is itchy. The word also shows up outside the bathroom — a scalp massage is what you get at the hairdresser.',
          bodyZh: '頭頂上的那層皮膚在英文裡有自己的字，而「頭皮」正好可以直接對應過去：scalp。head skin 聽得懂，但沒有人這樣說，而且這是最容易被一眼認出是台灣學生講的句子之一。要說 my scalp is itchy。這個字也不只出現在浴室裡——去美髮店做的「頭皮按摩」就是 a scalp massage。',
        },
      ],
    },

    /* ---------------------------------------------------------------- 8 */
    {
      id: 'nails',
      zh: '指甲垢',
      en: 'Dirt under the nails',
      icon: '💅',
      lead: {
        en: 'The one that turns this whole page around: here it is Chinese that has the single word, and English that has to describe it.',
        zh: '這一組把整頁翻轉過來：這一次換成中文有專門的字，英文反而只能用一句話描述。',
      },

      image: {
        src: 'img/nails.svg', w: 1000, h: 1000,
        alt: '為這一頁畫的「指甲垢」插圖：琥珀色底上有一根豎起的手指，指甲是白色的，指甲前緣下方卡著一條深色的指甲垢。',
      },

      terms: [
        {
          t: 'the dirt under your nails', reg: ['neut'],
          zh: '指甲垢',
          ex: 'Wash your hands properly — look at the dirt under your nails.',
          zhEx: '手要好好洗——你看你的指甲垢。',
        },
        {
          t: 'gunk', reg: ['talk'],
          zh: '髒東西、黏黏的汙垢',
          ex: 'He dug the gunk out from under his thumbnail.',
          zhEx: '他把大拇指甲縫裡的髒東西挖出來。',
        },
        {
          t: 'grime', reg: ['neut', 'form'],
          zh: '積垢、黑垢',
          ex: 'After a day in the garden her nails were black with grime.',
          zhEx: '在花園忙了一天之後，她的指甲裡都是黑黑的積垢。',
        },
        {
          t: 'subungual debris', reg: ['med'],
          zh: '甲下碎屑',
          ex: 'The report described subungual debris under three nails.',
          zhEx: '報告上寫著其中三片指甲下方有甲下碎屑。',
        },
      ],

      colls: [
        { en: 'clean under one’s nails', zh: '清指甲縫' },
        { en: 'cut one’s nails', zh: '剪指甲' },
        { en: 'bite one’s nails', zh: '咬指甲' },
      ],

      notes: [
        {
          en: 'This time English is the one with no word for it',
          zh: '這一次是英文沒有字',
          bodyEn: 'Everywhere else on this page Chinese has one short word and English has three longer ones. Here it is the other way round: 指甲垢 is a word, and English has no everyday single word at all — you describe it, as the dirt under your nails. There is a clinical term, subungual debris, and nobody has ever said it out loud outside a hospital. This is worth meeting once, because the instinct when a word is missing is to invent a compound like nail dirt. Describing it is not a failure of your English. It is what English itself does.',
          bodyZh: '這一頁其他地方都是中文一個短字、英文三個長字。這一組剛好反過來：「指甲垢」是一個詞，而英文根本沒有對應的日常單字——你得描述它，說 the dirt under your nails。醫學上確實有一個詞 subungual debris，但除了醫院以外沒有人會把它說出口。這件事值得遇到一次，因為當一個字不存在時，大家的直覺是自己造一個複合字，例如 nail dirt。用描述的方式講並不是你英文不好，那就是英文自己的做法。',
        },
        {
          en: 'Fingernail, toenail, and the nail you hammer',
          zh: 'fingernail、toenail，和用槌子敲的那種 nail',
          bodyEn: '指甲 covers hands and feet at once; English splits them. Fingernail is 手指甲, toenail is 腳趾甲, and nail on its own is almost always the finger one — nobody says my nails are long and means their feet. The same word is also the metal nail you hammer into a wall, which is where hit the nail on the head comes from, and that idiom has nothing to do with fingers at all.',
          bodyZh: '中文的「指甲」同時涵蓋手和腳，英文則分開：fingernail 是手指甲，toenail 是腳趾甲，而單講 nail 幾乎都是指手的——沒有人說 my nails are long 卻是在講腳。同一個字也是用槌子敲進牆裡的「釘子」，片語 hit the nail on the head（一針見血）就是從那裡來的，跟手指完全無關。',
        },
      ],
    },

  ],
};

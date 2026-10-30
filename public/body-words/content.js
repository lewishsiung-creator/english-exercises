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

  intro: {
    en: 'Chinese names these with one character — 屎 — and English does not. Each one has its own word, and each word sits somewhere between what you say to a friend and what a doctor writes down. Knowing which is which is most of the lesson.',
    zh: '中文用同一個「屎」字把這些東西串起來，英文完全不是這樣：每一個都有自己的字，而且每個字落在不同的位置——從跟朋友講的，到醫生寫在紀錄上的。真正要學的，是什麼場合該用哪一個。',
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

  ],
};

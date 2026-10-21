/* Chapter 1 — Using Be.

   Blocks only: the section titles live in ../book.js.

   Built from the chapter's own charts. What they state is all here — the three
   forms of be and the pronouns that take them, the fact that a pronoun
   replaces its noun rather than joining it, plural meaning two or more, the
   article before a singular noun, the seven contractions and the apostrophe,
   the two negative short forms and the one subject that has only one, the
   one-word places and the prepositional phrases, and the three completions
   that can follow be. The practice and the Chinese are written for this page,
   and the examples are this site's own.

   Seven things are added and say so on the page, because they are what a
   Mandarin speaker meets early and the charts do not raise:
     1-1  a title — Dr., Professor — does not tell you he or she
     1-3  a or an follows the sound, not the letter: a university, an hour
     1-4  -y becomes -ies only after a consonant: cities, but boys
     1-5  it's is it is; its is the possessive
     1-6  no cannot negate a verb; not can
     1-7  很 is not very — 我很忙 is I am busy
     1-7  old has two opposites: young for people, new for things

   The opening is the book's own idea — every chapter starts by asking what the
   learner already knows — rebuilt with this page's own sentences.
*/

const CHAPTER = {
  id: 'ch01',

  intro: {
    en: 'Be is the first verb, and the one adult learners drop. Mandarin joins a subject to an adjective with 很 and needs no verb at all, so 我很忙 arrives in English as “I busy” before it becomes “I am busy”. Nothing in this chapter is difficult to understand. All of it is difficult to remember at speaking speed, which is why most of the page is practice.',
    zh: 'be 動詞是第一個動詞，也是成人學習者最常漏掉的一個。中文用「很」連接主詞和形容詞，根本不需要動詞，所以「我很忙」會先變成 I busy，之後才變成 I am busy。這一章沒有任何難懂的東西，難的是在說話的速度下想起來——所以這一頁大部分都是練習。',
  },

  /* The book opens each chapter by asking what the learner already knows. Same
     idea, this page's own sentences: ten to judge, covering the error types
     the chapter goes on to fix. */
  opening: [
    {
      t: 'lead',
      en: 'Ten sentences. Some are English and some are not. Decide before you read the chapter — being wrong here costs nothing and tells you where to spend the hour.',
      zh: '十個句子，有些是英文，有些不是。先判斷，再讀這一章——在這裡答錯不會有任何損失，卻能告訴你這一小時該花在哪裡。',
    },
    {
      t: 'judge',
      en: 'Correct or not?',
      zh: '正確還是不正確？',
      hintEn: 'The explanation names the section that deals with it, so a wrong answer is a reading list.',
      hintZh: '解說會指出這是哪一節的內容，所以答錯等於得到一份閱讀清單。',
      items: [
        {
          text: 'Bus 12 is here.',
          ok: true,
          why: { en: 'A bus is one thing, so it takes is — and it would replace Bus 12. See 1-1.', zh: '公車是一個東西，所以用 is——用代名詞的話是 it。見 1-1。' },
        },
        {
          text: 'My manager he is busy.',
          ok: false,
          fix: 'My manager is busy.',
          why: { en: 'A pronoun replaces the noun; it does not stand beside it. One subject only. See 1-1.', zh: '代名詞是用來「取代」名詞，不是跟它並排。主詞只能有一個。見 1-1。' },
        },
        {
          text: 'Ken and Lisa is absent.',
          ok: false,
          fix: 'Ken and Lisa are absent.',
          why: { en: 'Two nouns joined by and are plural, and everything plural takes are. See 1-4.', zh: '用 and 連接的兩個名詞是複數，而所有複數都用 are。見 1-4。' },
        },
        {
          text: 'You and I are late.',
          ok: true,
          why: { en: 'You and I is we, and we takes are. See 1-2.', zh: 'you and I 就是 we，we 搭配 are。見 1-2。' },
        },
        {
          text: 'Taipei is city.',
          ok: false,
          fix: 'Taipei is a city.',
          why: { en: 'A singular noun needs an article in front of it. This is the word Chinese does not have. See 1-3.', zh: '單數名詞前面需要冠詞。這正是中文沒有的那個字。見 1-3。' },
        },
        {
          text: 'Okinawa is a island.',
          ok: false,
          fix: 'Okinawa is an island.',
          why: { en: 'Island starts with a vowel sound, so an. See 1-3.', zh: 'island 以母音開頭，所以用 an。見 1-3。' },
        },
        {
          text: 'We,re ready.',
          ok: false,
          fix: 'We’re ready.',
          why: { en: 'The mark in a contraction is an apostrophe, not a comma, and it sits above the line. See 1-5.', zh: '縮寫裡的符號是撇號，不是逗號，而且位置在字的上方。見 1-5。' },
        },
        {
          text: 'He no ready.',
          ok: false,
          fix: 'He isn’t ready.',
          why: { en: 'No cannot make a verb negative. Not does, and it goes after be. See 1-6.', zh: 'no 不能否定動詞，not 才可以，而且要放在 be 後面。見 1-6。' },
        },
        {
          text: 'My colleague is in the meeting room.',
          ok: true,
          why: { en: 'Be followed by a place, written as a preposition plus a noun. See 1-8.', zh: 'be 後面接地點，形式是介系詞加名詞。見 1-8。' },
        },
        {
          text: 'Dinner is not ready.',
          ok: true,
          why: { en: 'Subject, be, not, then an adjective — one of the three shapes gathered in 1-9.', zh: '主詞、be、not，然後形容詞——1-9 整理的三種句型之一。' },
        },
      ],
    },
  ],

  sections: [
    // ============================================================== 1-1
    {
      n: '1-1',
      blocks: [
        {
          t: 'lead',
          en: 'Three forms of one verb, and the only thing that decides which you need is the word standing in front of it.',
          zh: '同一個動詞有三種形式，而決定用哪一個的，只有它前面那個字。',
        },
        {
          t: 'rule',
          en: 'Singular means one. I, you, she, he and it each refer to one person or one thing, and each takes its own form of be. Am, are and is are the forms of be.',
          zh: '單數的意思是「一個」。I、you、she、he、it 各指一個人或一個東西，而且各自搭配一種 be 動詞的形式。am、are、is 就是 be 的三種形式。',
        },
        {
          t: 'forms',
          en: 'Singular pronouns + be',
          zh: '單數代名詞 ＋ be',
          rows: [
            { sub: 'I', verb: 'am', rest: 'late.', zh: '我遲到了。', mark: true },
            { sub: 'You', verb: 'are', rest: 'late.', zh: '你遲到了。' },
            { sub: 'She', verb: 'is', rest: 'late.', zh: '她遲到了。' },
            { sub: 'He', verb: 'is', rest: 'late.', zh: '他遲到了。' },
            { sub: 'It', verb: 'is', rest: 'late.', zh: '它遲到了。' },
          ],
        },
        {
          t: 'note',
          en: 'Am belongs to I and to nothing else',
          zh: 'am 只跟 I 走',
          bodyEn: 'Am has exactly one subject in the whole language. If the subject is not I, the word is not am.',
          bodyZh: '整個英文裡，am 只有一個主詞。主詞不是 I，就不會是 am。',
          good: ['I am late.', 'She is late.'],
          bad: ['She am late.', 'I is late.'],
        },
        {
          t: 'rule',
          en: 'A pronoun refers to a noun — it stands in the noun’s place. Maria becomes she, Tom becomes he, and anything that is not a person becomes it.',
          zh: '代名詞指向一個名詞——它站在那個名詞的位置上。Maria 變成 she，Tom 變成 he，不是人的東西都變成 it。',
        },
        {
          t: 'table',
          en: 'Which pronoun the noun becomes',
          zh: '名詞會變成哪個代名詞',
          head: [
            { en: 'Noun', zh: '名詞' },
            { en: 'Pronoun', zh: '代名詞' },
            { en: 'Why', zh: '原因' },
          ],
          rows: [
            ['Maria', 'she', 'one woman'],
            ['Tom', 'he', 'one man'],
            ['Bus 10', 'it', 'one thing'],
            ['Canada', 'it', 'a place is a thing'],
            ['English', 'it', 'a subject is a thing'],
          ],
          rowsZh: [
            ['', '', '一位女性'],
            ['', '', '一位男性'],
            ['', '', '一個東西'],
            ['', '', '地方算東西'],
            ['', '', '科目算東西'],
          ],
        },
        {
          t: 'note',
          en: 'Say the subject once',
          zh: '主詞只說一次',
          bodyEn: 'The pronoun replaces the noun, so the two never stand together. And the verb is never left out, however obvious the meaning is without it.',
          bodyZh: '代名詞是用來取代名詞的，所以兩者不會並排出現。而且不管意思多明顯，動詞都不能省略。',
          good: ['Maria is late.', 'She is late.'],
          bad: ['Maria she is late.', 'Maria late.'],
        },
        {
          t: 'note',
          en: 'A title does not tell you he or she',
          zh: '頭銜看不出是 he 還是 she',
          bodyEn: 'Written for this page. Dr. Wong, Professor Lee, Ms. Silva — only the last of those settles it. With the other two, either pronoun may be right, and guessing from the job is how people get this wrong about a colleague.',
          bodyZh: '這一段是為本頁寫的。Dr. Wong、Professor Lee、Ms. Silva——只有最後一個看得出來。前兩個兩種代名詞都可能對，而「從職業猜」正是別人稱呼同事時出錯的原因。',
          good: ['Dr. Wong is here. She is in her office.', 'Dr. Wong is here. He is in his office.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'I am in a meeting until three.', zh: '我要開會到三點。' },
            { en: 'You are the first person here.', zh: '你是第一個到的人。' },
            { en: 'She is our new colleague.', zh: '她是我們的新同事。' },
            { en: 'He is on the phone right now.', zh: '他現在在講電話。' },
            { en: 'It is a long report.', zh: '那是一份很長的報告。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form of be',
          zh: '選出正確的 be 動詞',
          hintEn: 'Look only at the subject. Nothing after the blank changes the answer.',
          hintZh: '只看主詞。空格後面的字不會影響答案。',
          items: [
            {
              text: 'He ___ here.',
              options: ['am', 'is', 'are'],
              answer: 1,
              why: { en: 'He, she and it all take is.', zh: 'he、she、it 都搭配 is。' },
            },
            {
              text: 'You ___ late.',
              options: ['am', 'is', 'are'],
              answer: 2,
              why: { en: 'You takes are, whether it means one person or several.', zh: 'you 搭配 are，不論指一個人還是很多人。' },
            },
            {
              text: 'I ___ ready.',
              options: ['am', 'is', 'are'],
              answer: 0,
              why: { en: 'I takes am — always, and it is the only subject that does.', zh: 'I 搭配 am，而且只有 I 搭配 am。' },
            },
            {
              text: 'It ___ cold today.',
              options: ['am', 'is', 'are'],
              answer: 1,
              why: { en: 'It is one thing, so is. The weather is an it.', zh: 'it 是一個東西，所以用 is。天氣就是一個 it。' },
            },
            {
              text: 'Ms. Silva is my manager. ___ is from Brazil.',
              options: ['She', 'He', 'It'],
              answer: 0,
              why: { en: 'Ms. is the one title that settles it. Dr. and Professor do not.', zh: 'Ms. 是少數看得出性別的稱謂，Dr. 和 Professor 則看不出來。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          hintEn: 'Subject, then be, then the rest. Tap a word you have placed to take it back.',
          hintZh: '先主詞，再 be 動詞，最後其他部分。點已放上的字可以收回。',
          items: [
            {
              cue: '我今天很忙。',
              answer: ['I', 'am', 'busy', 'today.'],
              why: { en: 'Mandarin joins 我 to 忙 with 很; English joins them with am.', zh: '中文用「很」連接「我」和「忙」，英文用 am。' },
            },
            {
              cue: '她是我們的新同事。',
              answer: ['She', 'is', 'our', 'new', 'colleague.'],
              why: { en: 'One woman, so she and is.', zh: '一位女性，所以用 she 和 is。' },
            },
            {
              cue: '那是一份很長的報告。',
              answer: ['It', 'is', 'a', 'long', 'report.'],
              why: { en: 'A report is a thing, so it. The article is 1-3.', zh: '報告是東西，所以用 it。冠詞的部分在 1-3。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 1-2
    {
      n: '1-2',
      blocks: [
        {
          t: 'lead',
          en: 'Two or more, and the verb stops changing: everything plural takes are.',
          zh: '兩個以上，動詞就不再變化了：所有複數都用 are。',
        },
        {
          t: 'rule',
          en: 'Plural means two, three or more. We, you and they all take are. The work in this section is not the verb — it is choosing which of the three pronouns a group of people becomes.',
          zh: '複數的意思是兩個、三個或更多。we、you、they 全部搭配 are。這一節真正要練的不是動詞，而是判斷一群人該變成哪一個代名詞。',
        },
        {
          t: 'forms',
          en: 'Plural pronouns + be',
          zh: '複數代名詞 ＋ be',
          rows: [
            { sub: 'We', verb: 'are', rest: 'here.', zh: '我們在這裡。' },
            { sub: 'You', verb: 'are', rest: 'here.', zh: '你們在這裡。' },
            { sub: 'They', verb: 'are', rest: 'here.', zh: '他們在這裡。' },
          ],
        },
        {
          t: 'table',
          en: 'Which pronoun the group becomes',
          zh: '一群人會變成哪個代名詞',
          head: [
            { en: 'The group', zh: '這一群人' },
            { en: 'Becomes', zh: '變成' },
            { en: 'Because', zh: '因為' },
          ],
          rows: [
            ['Sam and I', 'we', 'I am in it'],
            ['Sam and you', 'you', 'you are in it, I am not'],
            ['Sam and Lisa', 'they', 'neither of us is in it'],
          ],
          rowsZh: [
            ['', '', '「我」在裡面'],
            ['', '', '「你」在裡面，「我」不在'],
            ['', '', '你我都不在裡面'],
          ],
        },
        {
          t: 'steps',
          en: 'Choosing between we, you and they',
          zh: '在 we、you、they 之間做選擇',
          hintEn: 'Written for this page — three questions in a fixed order, because at speaking speed there is no time to think about it twice.',
          hintZh: '這一段是為本頁寫的——三個問題，固定順序；講話的速度下沒有時間想第二次。',
          items: [
            { en: 'Am I in this group? If yes, it is we. Stop.', zh: '「我」在這一群裡嗎？是的話就是 we。到此為止。' },
            { en: 'If not: is the person I am talking to in it? If yes, it is you.', zh: '如果不在：我正在對話的那個人在裡面嗎？在的話就是 you。' },
            { en: 'If neither of us is in it, it is they.', zh: '如果你我都不在裡面，就是 they。' },
          ],
        },
        {
          t: 'note',
          en: 'You is both 你 and 你們',
          zh: 'you 同時是「你」和「你們」',
          bodyEn: 'Chinese has two words and English has one. You never changes for number and the verb stays are either way, so nothing on the page tells you how many people are meant — only the situation does.',
          bodyZh: '中文有兩個字，英文只有一個。you 不因單複數改變，動詞也都是 are，所以字面上看不出指幾個人——只能從情境判斷。',
          good: ['You are late. (one colleague)', 'You are late. (the whole team)'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'We are ready to start.', zh: '我們準備好可以開始了。' },
            { en: 'You are all on the same team.', zh: '你們都在同一個團隊。' },
            { en: 'They are in the meeting room.', zh: '他們在會議室。' },
            { en: 'Lee and Bill are our suppliers.', zh: 'Lee 和 Bill 是我們的供應商。' },
            { en: 'Alice and I are from the Taipei office.', zh: 'Alice 和我來自台北辦公室。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the pronoun',
          zh: '選出正確的代名詞',
          hintEn: 'Ask the three questions in order: am I in it, are you in it, or neither?',
          hintZh: '依序問三個問題：我在裡面嗎？你在裡面嗎？還是都不在？',
          items: [
            {
              text: 'Lee and Bill → ___',
              options: ['they', 'we', 'you'],
              answer: 0,
              why: { en: 'Neither of us is in the group, so they.', zh: '你我都不在這一群裡，所以用 they。' },
            },
            {
              text: 'Alice and I → ___',
              options: ['we', 'they', 'you'],
              answer: 0,
              why: { en: 'I am in it, so we — and that answer comes first, before anything else is considered.', zh: '「我」在裡面，所以是 we——而且這個判斷最優先，其他都不用再想。' },
            },
            {
              text: 'you and Dr. Taher → ___',
              options: ['you', 'they', 'we'],
              answer: 0,
              why: { en: 'I am not in it but you are, so you — now meaning two people.', zh: '「我」不在裡面但「你」在，所以是 you——這時候指的是兩個人。' },
            },
            {
              text: 'Mr. and Mrs. Chen and I → ___',
              options: ['we', 'they', 'you'],
              answer: 0,
              why: { en: 'Three people, and one of them is me. We.', zh: '三個人，其中一個是我。用 we。' },
            },
            {
              text: 'Ken and Lisa ___ absent today.',
              options: ['are', 'is', 'am'],
              answer: 0,
              why: { en: 'Two people are plural, and all plurals take are.', zh: '兩個人是複數，所有複數都用 are。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我們準備好了。',
              answer: ['We', 'are', 'ready.'],
              why: { en: 'We takes are, like every other plural.', zh: 'we 搭配 are，所有複數都一樣。' },
            },
            {
              cue: '他們在會議室。',
              answer: ['They', 'are', 'in', 'the', 'meeting', 'room.'],
              why: { en: 'Plural subject, are, then a place — which is 1-8.', zh: '複數主詞、are，然後地點——地點是 1-8 的內容。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 1-3
    {
      n: '1-3',
      blocks: [
        {
          t: 'lead',
          en: 'The article is the word Chinese has no use for, and the one English will not let you leave out.',
          zh: '冠詞是中文用不到的字，也是英文不准你省略的字。',
        },
        {
          t: 'rule',
          en: 'A noun can be joined to another noun by is. When the second noun is singular, it almost always needs a or an in front of it. A and an mean the same thing; both are called articles.',
          zh: '名詞可以用 is 連接另一個名詞。當後面那個名詞是單數時，它前面幾乎一定要有 a 或 an。a 和 an 意思相同，都叫做冠詞。',
        },
        {
          t: 'forms',
          en: 'Noun + is + noun',
          zh: '名詞 ＋ is ＋ 名詞',
          rows: [
            { sub: 'Canada', verb: 'is', rest: 'a country.', zh: '加拿大是一個國家。' },
            { sub: 'Taipei', verb: 'is', rest: 'a city.', zh: '台北是一座城市。' },
            { sub: 'Bali', verb: 'is', rest: 'an island.', zh: '峇里島是一座島。', mark: true },
            { sub: 'My brother', verb: 'is', rest: 'an engineer.', zh: '我弟弟是工程師。', mark: true },
          ],
        },
        {
          t: 'note',
          en: 'A singular noun cannot stand on its own',
          zh: '單數名詞不能單獨站著',
          bodyEn: 'This is the single most common mistake a Mandarin speaker makes in English, and it is not a mistake of meaning — the sentence is perfectly clear without the article. It is simply not English.',
          bodyZh: '這是中文母語者在英文裡最常犯的錯誤，而且它不是意思上的錯誤——少了冠詞，句子還是完全清楚。它只是不像英文。',
          good: ['Canada is a country.', 'Bali is an island.'],
          bad: ['Canada is country.', 'Bali is island.'],
        },
        {
          t: 'table',
          en: 'A or an',
          zh: 'a 還是 an',
          head: [
            { en: 'Article', zh: '冠詞' },
            { en: 'Used in front of', zh: '用在什麼前面' },
            { en: 'Examples', zh: '例子' },
          ],
          rows: [
            ['a', 'a consonant: b, c, d, f, g …', 'a bed, a cat, a dog, a friend, a girl'],
            ['an', 'a vowel: a, e, i, o', 'an animal, an ear, an island, an office'],
          ],
          rowsZh: [
            ['', '子音開頭：b、c、d、f、g …', ''],
            ['', '母音開頭：a、e、i、o', ''],
          ],
        },
        {
          t: 'note',
          en: 'It follows the sound, not the letter',
          zh: '看的是聲音，不是字母',
          bodyEn: 'Written for this page. The letter rule above is the right place to start and covers nearly every word you meet. But a or an is really chosen by the sound the word begins with — which is why a university takes a (it starts with a “you” sound) and an hour takes an (the h is silent). Say the word, then choose.',
          bodyZh: '這一段是為本頁寫的。上面那條字母規則是很好的起點，幾乎涵蓋你會遇到的每個字。但 a 或 an 其實是由「開頭的發音」決定的——所以 a university 用 a（它的開頭發音像 you），an hour 用 an（h 不發音）。先把字唸出來，再選。',
          good: ['a university', 'an hour', 'an honest answer'],
          bad: ['an university', 'a hour'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'Taipei is a city. Taiwan is an island.', zh: '台北是一座城市，台灣是一座島。' },
            { en: 'My colleague is an engineer.', zh: '我同事是工程師。' },
            { en: 'This is a hospital, not a hotel.', zh: '這是醫院，不是飯店。' },
            { en: 'That building is an office, and this one is a bank.', zh: '那棟建築是辦公室，這一棟是銀行。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose a or an',
          zh: '選 a 還是 an',
          hintEn: 'Say the word to yourself first. The first sound decides it.',
          hintZh: '先把那個字唸一遍，開頭的聲音就決定了答案。',
          items: [
            {
              text: 'Bali is ___ island.',
              options: ['an', 'a', '—'],
              answer: 0,
              why: { en: 'Island begins with a vowel sound, so an. Leaving it out is the mistake this section exists for.', zh: 'island 以母音開頭，所以用 an。整個省略，正是這一節要處理的錯誤。' },
            },
            {
              text: 'Canada is ___ country.',
              options: ['a', 'an', '—'],
              answer: 0,
              why: { en: 'Country begins with a consonant, so a. A singular noun needs one.', zh: 'country 以子音開頭，所以用 a。單數名詞一定要有冠詞。' },
            },
            {
              text: 'My colleague is ___ engineer.',
              options: ['an', 'a', '—'],
              answer: 0,
              why: { en: 'Engineer begins with a vowel sound. A job is a singular noun like any other.', zh: 'engineer 以母音開頭。職業和其他名詞一樣是單數名詞。' },
            },
            {
              text: 'She works at ___ airport.',
              options: ['an', 'a', '—'],
              answer: 0,
              why: { en: 'Airport begins with a vowel sound, so an.', zh: 'airport 以母音開頭，所以用 an。' },
            },
            {
              text: 'He is ___ university student.',
              options: ['a', 'an', '—'],
              answer: 0,
              why: { en: 'The letter is a vowel but the sound is not — university opens with a “you” sound, so a.', zh: '字母是母音，但聲音不是——university 的開頭發音像 you，所以用 a。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '台北是一座城市。',
              answer: ['Taipei', 'is', 'a', 'city.'],
              why: { en: 'Noun, is, article, noun. The article is not optional.', zh: '名詞、is、冠詞、名詞。冠詞不是可加可不加的。' },
            },
            {
              cue: '我同事是工程師。',
              answer: ['My', 'colleague', 'is', 'an', 'engineer.'],
              why: { en: 'Chinese says 是工程師 with nothing in between; English puts an there.', zh: '中文說「是工程師」，中間什麼都不加；英文要放一個 an。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 1-4
    {
      n: '1-4',
      blocks: [
        {
          t: 'lead',
          en: 'Chinese marks number with a number word, and only when it matters. English marks it on the noun itself, every time, whether it matters or not.',
          zh: '中文用數量詞標示數量，而且只在需要的時候標。英文把數量標在名詞本身，每一次都標，不管需不需要。',
        },
        {
          t: 'rule',
          en: 'A plural noun means two or more and ends in -s. A plural subject takes are — and when a plural noun follows be, it carries its -s as well.',
          zh: '複數名詞的意思是兩個以上，字尾加 -s。複數主詞搭配 are——而且當 be 後面接的也是名詞時，那個名詞同樣要加 -s。',
        },
        {
          t: 'forms',
          en: 'Plural noun + are + plural noun',
          zh: '複數名詞 ＋ are ＋ 複數名詞',
          rows: [
            { sub: 'Cats', verb: 'are', rest: 'animals.', zh: '貓是動物。' },
            { sub: 'Cities', verb: 'are', rest: 'places.', zh: '城市是地方。' },
            { sub: 'Canada and China', verb: 'are', rest: 'countries.', zh: '加拿大和中國是國家。', mark: true },
            { sub: 'Dogs and cats', verb: 'are', rest: 'animals.', zh: '狗和貓是動物。', mark: true },
          ],
        },
        {
          t: 'table',
          en: 'Singular and plural',
          zh: '單數與複數',
          head: [
            { en: 'Singular', zh: '單數' },
            { en: 'Plural', zh: '複數' },
            { en: 'What changed', zh: '變化' },
          ],
          rows: [
            ['a cat', 'cats', 'add -s'],
            ['an animal', 'animals', 'add -s'],
            ['a city', 'cities', 'the -y becomes -ies'],
            ['a country', 'countries', 'the -y becomes -ies'],
          ],
          rowsZh: [
            ['', '', '加 -s'],
            ['', '', '加 -s'],
            ['', '', '-y 變成 -ies'],
            ['', '', '-y 變成 -ies'],
          ],
        },
        {
          t: 'note',
          en: 'A and an belong to singular nouns only',
          zh: 'a 和 an 只跟單數名詞走',
          bodyEn: 'One article, one thing. A plural noun takes no article here at all — and it must still take its -s. Dropping the -s is the same habit as dropping the article in 1-3: Chinese needs neither, so neither gets typed.',
          bodyZh: '一個冠詞，一個東西。複數名詞在這裡完全不加冠詞——但 -s 還是不能少。漏掉 -s 和 1-3 漏掉冠詞是同一個習慣：中文兩者都不需要，所以兩者都沒打出來。',
          good: ['She is an engineer.', 'They are engineers.'],
          bad: ['They are engineer.', 'They are a engineers.'],
        },
        {
          t: 'note',
          en: 'Two singular nouns joined by and are plural',
          zh: '用 and 連接的兩個單數名詞是複數',
          bodyEn: 'Canada is singular and China is singular, but together they are more than one — so the verb is are, and the noun after it goes plural too. Both halves have to move.',
          bodyZh: 'Canada 是單數，China 也是單數，但加起來就不只一個——所以動詞用 are，後面的名詞也要變複數。兩邊都要改。',
          good: ['Canada and China are countries.'],
          bad: ['Canada and China is a country.', 'Canada and China are country.'],
        },
        {
          t: 'note',
          en: 'The -y becomes -ies only after a consonant',
          zh: '-y 變 -ies 只發生在子音後面',
          bodyEn: 'Written for this page, because the chart says some nouns ending in -y do this and the useful part is knowing which. Look at the letter before the -y: a consonant gives -ies (city, cities), a vowel just takes -s (boy, boys). Chapter 3-5 takes this further.',
          bodyZh: '這一段是為本頁寫的，因為原表格說「有些」以 -y 結尾的名詞會這樣變，而真正有用的是知道「哪些」。看 -y 前面那個字母：子音就變 -ies（city → cities），母音就只加 -s（boy → boys）。3-5 會講得更詳細。',
          good: ['cities, countries', 'boys, days'],
          bad: ['citys', 'boies'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'Cats and dogs are animals.', zh: '貓和狗是動物。' },
            { en: 'Taipei and Tokyo are cities.', zh: '台北和東京是城市。' },
            { en: 'My colleagues are engineers.', zh: '我的同事是工程師。' },
            { en: 'Mondays are busy.', zh: '星期一都很忙。' },
            { en: 'Kuwait and Syria are countries.', zh: '科威特和敘利亞是國家。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the plural',
          zh: '選出正確的複數',
          hintEn: 'Two questions each time: is the subject more than one, and does the noun after be need its -s?',
          hintZh: '每次都問兩個問題：主詞是不是超過一個？be 後面的名詞需不需要加 -s？',
          items: [
            {
              text: 'Cats ___ animals.',
              options: ['are', 'is', 'am'],
              answer: 0,
              why: { en: 'A plural subject takes are. Both nouns in the sentence are plural too.', zh: '複數主詞搭配 are。句子裡的兩個名詞也都是複數。' },
            },
            {
              text: 'Kuwait and Syria are ___.',
              options: ['countries', 'country', 'a country'],
              answer: 0,
              why: { en: 'Two of them, so the noun after be goes plural as well — and the -y becomes -ies.', zh: '有兩個，所以 be 後面的名詞也要變複數——而且 -y 要變成 -ies。' },
            },
            {
              text: 'The plural of city is ___.',
              options: ['cities', 'citys', 'cityes'],
              answer: 0,
              why: { en: 'A consonant before the -y, so the -y goes and -ies arrives.', zh: '-y 前面是子音，所以去掉 -y，加上 -ies。' },
            },
            {
              text: 'My colleagues are ___.',
              options: ['engineers', 'engineer', 'a engineers'],
              answer: 0,
              why: { en: 'Plural subject, plural noun. Leaving the -s off is the most common version of this mistake.', zh: '複數主詞，複數名詞。漏掉 -s 是這個錯誤最常見的形式。' },
            },
            {
              text: 'A and an are used with ___.',
              options: ['singular nouns only', 'plural nouns only', 'both'],
              answer: 0,
              why: { en: 'One article means one thing. A plural noun takes no article in sentences like these.', zh: '一個冠詞代表一個東西。在這類句子裡，複數名詞不加冠詞。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '狗和貓是動物。',
              answer: ['Dogs', 'and', 'cats', 'are', 'animals.'],
              why: { en: 'Three plurals in one short sentence, and every one of them carries its -s.', zh: '一個短句裡有三個複數，而且每一個都帶著 -s。' },
            },
            {
              cue: '台北和東京是城市。',
              answer: ['Taipei', 'and', 'Tokyo', 'are', 'cities.'],
              why: { en: 'Two singular names joined by and, so are — and city becomes cities.', zh: '兩個單數名稱用 and 連接，所以用 are——而 city 變成 cities。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 1-5
    {
      n: '1-5',
      blocks: [
        {
          t: 'lead',
          en: 'Two words pushed into one. These belong in writing as well as in speech, which is the part people get wrong.',
          zh: '兩個字壓成一個。這些縮寫不只用在口語，書面也用——這一點最常被搞錯。',
        },
        {
          t: 'rule',
          en: 'When people speak, they often push two words together. A contraction is two words pushed together, and contractions of a subject pronoun plus be are used in both speaking and writing.',
          zh: '說話的時候，人們常常把兩個字擠在一起。縮寫就是兩個擠在一起的字，而「主詞代名詞 ＋ be」的縮寫在口語和書面都會使用。',
        },
        {
          t: 'table',
          en: 'The seven contractions',
          zh: '七個縮寫',
          head: [
            { en: 'Long form', zh: '完整形式' },
            { en: 'Contraction', zh: '縮寫' },
            { en: 'Example', zh: '例句' },
          ],
          rows: [
            ['I am', 'I’m', 'I’m a student.'],
            ['she is', 'she’s', 'She’s a student.'],
            ['he is', 'he’s', 'He’s a student.'],
            ['it is', 'it’s', 'It’s a city.'],
            ['you are', 'you’re', 'You’re a student.'],
            ['we are', 'we’re', 'We’re students.'],
            ['they are', 'they’re', 'They’re students.'],
          ],
        },
        {
          t: 'note',
          en: 'The mark is an apostrophe, not a comma',
          zh: '那個符號是撇號，不是逗號',
          bodyEn: 'An apostrophe sits above the line. A comma sits on it. They are different marks, and on a keyboard they are different keys — the apostrophe shares its key with the double quote.',
          bodyZh: '撇號在字的上方，逗號在底線上。它們是兩個不同的符號，鍵盤上也是不同的鍵——撇號和雙引號在同一個鍵上。',
          good: ['I’m a student.', 'They’re hungry.'],
          bad: ['I,m a student.', 'They,re hungry.'],
        },
        {
          t: 'note',
          en: 'It’s is it is. Its is something else',
          zh: 'it’s 是 it is；its 是另一回事',
          bodyEn: 'Written for this page, because an adult writing email meets both in the first week. It’s always means it is. Its, with no apostrophe, means belonging to it — and the full possessive set comes in 6-7.',
          bodyZh: '這一段是為本頁寫的，因為成人只要開始寫英文信，第一週就會同時遇到這兩個字。it’s 永遠是 it is。its 沒有撇號，意思是「它的」——完整的所有格會在 6-7 出現。',
          good: ['It’s a long report.', 'The company changed its name.'],
          bad: ['Its a long report.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'I’m in a meeting until three.', zh: '我要開會到三點。' },
            { en: 'She’s our new colleague.', zh: '她是我們的新同事。' },
            { en: 'It’s a long report.', zh: '那是一份很長的報告。' },
            { en: 'We’re ready to start.', zh: '我們準備好可以開始了。' },
            { en: 'They’re in the meeting room.', zh: '他們在會議室。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the contraction',
          zh: '選出正確的縮寫',
          items: [
            {
              text: 'she is → ___',
              options: ['she’s', 'shes', 'she,s'],
              answer: 0,
              why: { en: 'The apostrophe stands where the missing letter was.', zh: '撇號的位置就是被省略的字母原本的位置。' },
            },
            {
              text: 'they are → ___',
              options: ['they’re', 'their', 'theyre'],
              answer: 0,
              why: { en: 'They’re is they are. Their is a different word, and 6-5 deals with it.', zh: 'they’re 是 they are。their 是另一個字，6-5 會處理。' },
            },
            {
              text: '___ a long report.',
              options: ['It’s', 'Its', 'It is’'],
              answer: 0,
              why: { en: 'It is, contracted. Without the apostrophe it means belonging to it.', zh: 'it is 的縮寫。少了撇號就變成「它的」。' },
            },
            {
              text: 'I’m late. The long form is ___.',
              options: ['I am', 'I are', 'I is'],
              answer: 0,
              why: { en: 'I am has only one contraction, and it is the only subject am ever takes.', zh: 'I am 只有一種縮寫，而且 am 也只搭配這一個主詞。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我是學生。',
              answer: ['I’m', 'a', 'student.'],
              why: { en: 'Three words, and the article is still there. A contraction shortens the verb, never the article.', zh: '三個字，冠詞還在。縮寫縮的是動詞，不會縮掉冠詞。' },
            },
            {
              cue: '他們在會議室。',
              answer: ['They’re', 'in', 'the', 'meeting', 'room.'],
              why: { en: 'They’re is one word on the page and two in the grammar.', zh: 'they’re 在紙上是一個字，在文法上是兩個字。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 1-6
    {
      n: '1-6',
      blocks: [
        {
          t: 'lead',
          en: 'One word in one place — and then a choice of two short forms for everybody except I.',
          zh: '一個字放在一個位置——然後除了 I 以外，每個主詞都有兩種縮寫可選。',
        },
        {
          t: 'rule',
          en: 'Not makes a sentence negative. Put it straight after am, is or are. Nothing else in the sentence changes, and be and not can then be contracted.',
          zh: 'not 讓句子變成否定。把它直接放在 am、is、are 後面。句子的其他部分完全不變，接著 be 和 not 可以縮寫。',
        },
        {
          t: 'forms',
          en: 'Be + not',
          zh: 'be ＋ not',
          rows: [
            { sub: 'I', verb: 'am not', rest: 'a teacher.', zh: '我不是老師。', mark: true },
            { sub: 'You', verb: 'are not', rest: 'a teacher.', zh: '你不是老師。' },
            { sub: 'She', verb: 'is not', rest: 'a teacher.', zh: '她不是老師。' },
            { sub: 'It', verb: 'is not', rest: 'a city.', zh: '那不是一座城市。' },
            { sub: 'They', verb: 'are not', rest: 'teachers.', zh: '他們不是老師。' },
          ],
        },
        {
          t: 'table',
          en: 'Two short forms, for everybody except I',
          zh: '兩種縮寫——除了 I 以外',
          head: [
            { en: 'Full form', zh: '完整形式' },
            { en: 'Short form 1', zh: '縮寫一' },
            { en: 'Short form 2', zh: '縮寫二' },
          ],
          rows: [
            ['I am not', 'I’m not', '—'],
            ['you are not', 'you’re not', 'you aren’t'],
            ['she is not', 'she’s not', 'she isn’t'],
            ['he is not', 'he’s not', 'he isn’t'],
            ['it is not', 'it’s not', 'it isn’t'],
            ['we are not', 'we’re not', 'we aren’t'],
            ['they are not', 'they’re not', 'they aren’t'],
          ],
        },
        {
          t: 'note',
          en: 'There is no amn’t',
          zh: '英文沒有 amn’t',
          bodyEn: 'Every other subject has two short forms; I has one. The dash in the table is not a gap — the word simply does not exist, and I’m not is what fills its place.',
          bodyZh: '其他主詞都有兩種縮寫，只有 I 只有一種。表格裡那個破折號不是漏了——這個字根本不存在，它的位置由 I’m not 補上。',
          good: ['I’m not sure.', 'I am not sure.'],
          bad: ['I amn’t sure.'],
        },
        {
          t: 'note',
          en: 'No cannot negate a verb',
          zh: 'no 不能否定動詞',
          bodyEn: 'Written for this page, because this is the error the chapter opener catches most often. No answers a question or marks a quantity. Not is the word that makes a verb negative, and it goes after be.',
          bodyZh: '這一段是為本頁寫的，因為本章開頭的判斷題最常抓到的就是這個錯誤。no 用來回答問句或表示數量，not 才是讓動詞變否定的字，而且要放在 be 後面。',
          good: ['He isn’t a doctor.', 'He is not a doctor.'],
          bad: ['He no a doctor.', 'He not is a doctor.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'I’m not available this afternoon.', zh: '我今天下午沒空。' },
            { en: 'She isn’t in the office today.', zh: '她今天不在辦公室。' },
            { en: 'It isn’t a serious problem.', zh: '那不是什麼嚴重的問題。' },
            { en: 'We aren’t ready yet.', zh: '我們還沒準備好。' },
            { en: 'They’re not our suppliers.', zh: '他們不是我們的供應商。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the negative',
          zh: '選出正確的否定',
          items: [
            {
              text: 'She ___ in the meeting room.',
              options: ['isn’t', 'amn’t', 'no is'],
              answer: 0,
              why: { en: 'She + is + not, shortened to isn’t. Amn’t does not exist, and no cannot negate a verb.', zh: 'she ＋ is ＋ not，縮寫成 isn’t。amn’t 不存在，no 也不能否定動詞。' },
            },
            {
              text: 'I ___ ready yet.',
              options: ['am not', 'amn’t', 'not am'],
              answer: 0,
              why: { en: 'I takes am, and not follows it. There is no short form of am not.', zh: 'I 搭配 am，not 跟在後面。am not 沒有縮寫形式。' },
            },
            {
              text: 'They ___ our suppliers.',
              options: ['aren’t', 'isn’t', 'not are'],
              answer: 0,
              why: { en: 'They takes are, and not goes after it.', zh: 'they 搭配 are，not 放在後面。' },
            },
            {
              text: 'Which one is NOT possible?',
              options: ['I aren’t', 'I’m not', 'I am not'],
              answer: 0,
              why: { en: 'Aren’t belongs to you, we and they. I has am, and am not has no contraction.', zh: 'aren’t 屬於 you、we、they。I 搭配 am，而 am not 沒有縮寫。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我今天下午沒空。',
              answer: ['I’m', 'not', 'available', 'this', 'afternoon.'],
              why: { en: 'Not goes after the verb, not before it and not at the end.', zh: 'not 放在動詞後面，不是前面，也不是句尾。' },
            },
            {
              cue: '她今天不在辦公室。',
              answer: ['She', 'isn’t', 'in', 'the', 'office', 'today.'],
              why: { en: 'Isn’t already contains not, so not is not said twice.', zh: 'isn’t 裡面已經有 not 了，所以不會再說一次 not。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 1-7
    {
      n: '1-7',
      blocks: [
        {
          t: 'lead',
          en: 'The word that describes the subject — and the one word in the sentence that never changes, however many people it is describing.',
          zh: '用來描述主詞的字——也是整句裡唯一不會變的字，不管它描述的是幾個人。',
        },
        {
          t: 'rule',
          en: 'Adjectives often follow a form of be. The adjective gives information about the noun or pronoun at the beginning of the sentence — the subject.',
          zh: '形容詞常常接在 be 動詞後面。形容詞提供的是句首那個名詞或代名詞的資訊——也就是主詞。',
        },
        {
          t: 'forms',
          en: 'Be + adjective',
          zh: 'be ＋ 形容詞',
          rows: [
            { sub: 'The baby', verb: 'is', rest: 'small.', zh: '那個寶寶很小。' },
            { sub: 'The babies', verb: 'are', rest: 'small.', zh: '那些寶寶很小。', mark: true },
            { sub: 'Lulu', verb: 'is', rest: 'smart.', zh: 'Lulu 很聰明。' },
            { sub: 'Maria and Tom', verb: 'are', rest: 'happy.', zh: 'Maria 和 Tom 很開心。' },
            { sub: 'I', verb: 'am', rest: 'tired.', zh: '我很累。' },
            { sub: 'They', verb: 'are', rest: 'comfortable.', zh: '他們很舒服。' },
          ],
        },
        {
          t: 'note',
          en: 'The subject changes, the adjective does not',
          zh: '主詞會變，形容詞不變',
          bodyEn: 'One baby or ten, the word is small. An adjective has no plural form in English — the only thing that moved between the first two rows of the chart above is the verb.',
          bodyZh: '一個寶寶或十個寶寶，那個字都是 small。英文的形容詞沒有複數形式——上面表格前兩列之間唯一改變的，只有動詞。',
          good: ['The babies are small.'],
          bad: ['The babies are smalls.'],
        },
        {
          t: 'note',
          en: '很 is not very',
          zh: '「很」不等於 very',
          bodyEn: 'Written for this page. 我很忙 is I am busy, not I am very busy. In Chinese the 很 is mostly there to hold the sentence together, and translating it every time makes everything sound extreme. Use very when you actually mean it — and either way the verb am cannot be dropped, which is the mistake underneath the whole chapter.',
          bodyZh: '這一段是為本頁寫的。「我很忙」是 I am busy，不是 I am very busy。中文的「很」多半只是用來撐住句子，每次都翻出來會讓所有事情聽起來都很誇張。真的要強調時才用 very——而不管用不用，am 都不能省略，那才是貫穿整章的那個錯誤。',
          good: ['I am busy.', 'I am very busy. (when you mean it)'],
          bad: ['I very busy.', 'I busy.'],
        },
        {
          t: 'table',
          en: 'Common adjectives and their opposites',
          zh: '常用形容詞與反義詞',
          head: [
            { en: 'Adjective', zh: '形容詞' },
            { en: 'Opposite', zh: '反義詞' },
            { en: 'Meaning', zh: '中文' },
          ],
          rows: [
            ['happy', 'sad', '開心／難過'],
            ['tall', 'short', '高／矮'],
            ['clean', 'dirty', '乾淨／髒'],
            ['easy', 'difficult', '簡單／困難'],
            ['expensive', 'cheap', '貴／便宜'],
            ['fast', 'slow', '快／慢'],
            ['noisy', 'quiet', '吵／安靜'],
            ['rich', 'poor', '富有／貧窮'],
            ['beautiful', 'ugly', '美／醜'],
          ],
          zhCol: 2,
        },
        {
          t: 'note',
          en: 'Old has two opposites',
          zh: 'old 有兩個反義詞',
          bodyEn: 'Written for this page, because old appears in the chart with no warning attached. For people it is young; for things it is new. Using the wrong one is not a grammar mistake, which is exactly why nobody corrects it.',
          bodyZh: '這一段是為本頁寫的，因為原表格列出 old 時沒有附任何提醒。用在人身上，反義詞是 young；用在東西上，反義詞是 new。用錯不算文法錯誤——這正是沒有人會糾正你的原因。',
          good: ['My manager is young.', 'My laptop is new.'],
          bad: ['My laptop is young.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'I am tired today.', zh: '我今天很累。' },
            { en: 'The meeting room is noisy.', zh: '會議室很吵。' },
            { en: 'My colleagues are busy this week.', zh: '我同事這星期都很忙。' },
            { en: 'This report isn’t difficult. It’s easy.', zh: '這份報告不難，很簡單。' },
            { en: 'The chairs are comfortable.', zh: '這些椅子很舒服。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          items: [
            {
              text: 'The babies ___ small.',
              options: ['are', 'is', 'am'],
              answer: 0,
              why: { en: 'A plural subject takes are. The adjective stays as it is.', zh: '複數主詞搭配 are。形容詞維持原樣。' },
            },
            {
              text: 'The babies are ___.',
              options: ['small', 'smalls', 'a small'],
              answer: 0,
              why: { en: 'Adjectives have no plural, and they take no article either.', zh: '形容詞沒有複數，也不加冠詞。' },
            },
            {
              text: 'I ___ tired.',
              options: ['am', 'is', 'are'],
              answer: 0,
              why: { en: 'I takes am, as it does everywhere else in the chapter.', zh: 'I 搭配 am，整章都是如此。' },
            },
            {
              text: 'My laptop isn’t new. It’s ___.',
              options: ['old', 'young', 'short'],
              answer: 0,
              why: { en: 'A thing is new or old. Young is for people.', zh: '東西是 new 或 old。young 用在人身上。' },
            },
            {
              text: 'Mr. Thomas isn’t rich. He’s ___.',
              options: ['poor', 'cheap', 'short'],
              answer: 0,
              why: { en: 'Cheap is for prices, not for people — calling a person cheap says they are mean with money.', zh: 'cheap 用在價格，不是用在人——說一個人 cheap 是說他小氣。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          hintEn: 'Chinese puts 很 before the adjective. English puts a verb there instead.',
          hintZh: '中文在形容詞前面放「很」，英文在那個位置放的是動詞。',
          items: [
            {
              cue: '我今天很累。',
              answer: ['I', 'am', 'tired', 'today.'],
              why: { en: 'The 很 becomes am, not very.', zh: '「很」變成的是 am，不是 very。' },
            },
            {
              cue: '那些寶寶很小。',
              answer: ['The', 'babies', 'are', 'small.'],
              why: { en: 'The plural is on the noun and the verb, never on the adjective.', zh: '複數標在名詞和動詞上，絕不標在形容詞上。' },
            },
            {
              cue: 'Maria 和 Tom 很開心。',
              answer: ['Maria', 'and', 'Tom', 'are', 'happy.'],
              why: { en: 'Two names joined by and, so are — 1-4 again, with an adjective this time.', zh: '兩個名字用 and 連接，所以用 are——又是 1-4，只是這次後面接形容詞。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 1-8
    {
      n: '1-8',
      blocks: [
        {
          t: 'lead',
          en: 'After be, English very often wants to know where.',
          zh: 'be 後面，英文很常接的是「在哪裡」。',
        },
        {
          t: 'rule',
          en: 'Be is often followed by a place. A place can be a single word, or it can be a preposition and a noun together.',
          zh: 'be 後面很常接地點。地點可以是一個單字，也可以是介系詞加名詞。',
        },
        {
          t: 'table',
          en: 'A place in one word',
          zh: '一個字就是地點',
          head: [
            { en: 'Word', zh: '單字' },
            { en: 'Meaning', zh: '中文' },
          ],
          rows: [
            ['here', '這裡'],
            ['there', '那裡'],
            ['upstairs', '樓上'],
            ['downstairs', '樓下'],
            ['inside', '裡面'],
            ['outside', '外面'],
            ['downtown', '市中心'],
          ],
          zhCol: 1,
        },
        {
          t: 'note',
          en: 'A one-word place takes no preposition',
          zh: '單字地點前面不加介系詞',
          bodyEn: 'These words already carry the whole idea of the place, so nothing goes in front of them. The preposition is what a noun needs, and these are not nouns here.',
          bodyZh: '這些字本身就已經包含了「地點」的完整意思，所以前面什麼都不加。介系詞是名詞才需要的，而這些字在這裡不是名詞。',
          good: ['She is upstairs.', 'They are outside.'],
          bad: ['She is at upstairs.', 'They are at outside.'],
        },
        {
          t: 'table',
          en: 'A place as a preposition + a noun',
          zh: '介系詞 ＋ 名詞也是地點',
          head: [
            { en: 'Example', zh: '例子' },
            { en: 'Meaning', zh: '中文' },
          ],
          rows: [
            ['Bob is at the library.', '在圖書館'],
            ['Bob is on the bus.', '在公車上'],
            ['Bob is in his room.', '在他房間裡'],
            ['Bob is at work.', '在上班'],
            ['Bob is next to Maria.', '在 Maria 旁邊'],
          ],
          zhCol: 1,
        },
        {
          t: 'table',
          en: 'Common prepositions',
          zh: '常見介系詞',
          head: [
            { en: 'Preposition', zh: '介系詞' },
            { en: 'Meaning', zh: '中文' },
          ],
          rows: [
            ['above', '在…上方（沒有接觸）'],
            ['at', '在（某一點）'],
            ['behind', '在…後面'],
            ['between', '在…之間'],
            ['from', '來自'],
            ['in', '在…裡面'],
            ['in front of', '在…前面'],
            ['in back of', '在…後面'],
            ['next to', '在…旁邊'],
            ['on', '在…上面（有接觸）'],
            ['under', '在…下面'],
          ],
          zhCol: 1,
        },
        {
          t: 'contrast',
          en: 'On and above, in and on',
          zh: 'on 與 above、in 與 on',
          hintEn: 'The pair that decides it is contact: on touches, above does not.',
          hintZh: '判斷的關鍵是有沒有接觸：on 有接觸，above 沒有。',
          pairs: [
            {
              a: { en: 'The ball is on the box.', zh: '球在盒子上面（碰到盒子）。' },
              b: { en: 'The ball is above the box.', zh: '球在盒子上方（沒有碰到）。' },
            },
            {
              a: { en: 'The ball is in the box.', zh: '球在盒子裡面。' },
              b: { en: 'The ball is next to the box.', zh: '球在盒子旁邊。' },
            },
          ],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'Maria is here.', zh: 'Maria 在這裡。' },
            { en: 'Bob is at the library.', zh: 'Bob 在圖書館。' },
            { en: 'My manager is downstairs.', zh: '我主管在樓下。' },
            { en: 'The files are in the drawer.', zh: '檔案在抽屜裡。' },
            { en: 'He is at work until six.', zh: '他要上班到六點。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the place',
          zh: '選出正確的地點說法',
          items: [
            {
              text: 'She is ___.',
              options: ['upstairs', 'at upstairs', 'in upstairs'],
              answer: 0,
              why: { en: 'A one-word place needs nothing in front of it.', zh: '單字地點前面什麼都不加。' },
            },
            {
              text: 'Bob is ___ the library.',
              options: ['at', 'on', '—'],
              answer: 0,
              why: { en: 'A noun needs a preposition, and at is the one for a place you go to.', zh: '名詞需要介系詞，而 at 用於你前往的地點。' },
            },
            {
              text: 'The files are ___ the drawer.',
              options: ['in', 'on', 'above'],
              answer: 0,
              why: { en: 'Inside something closed is in. On would put them on top of it.', zh: '在封閉的東西裡面用 in。用 on 會變成放在抽屜上面。' },
            },
            {
              text: 'The lamp is ___ the table — it hangs from the ceiling.',
              options: ['above', 'on', 'in'],
              answer: 0,
              why: { en: 'Above is higher with no contact; on would mean it is standing on the table.', zh: 'above 是在上方且沒有接觸；用 on 就變成燈立在桌上。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我主管在樓下。',
              answer: ['My', 'manager', 'is', 'downstairs.'],
              why: { en: 'Four words, and no preposition anywhere.', zh: '四個字，而且沒有任何介系詞。' },
            },
            {
              cue: '檔案在抽屜裡。',
              answer: ['The', 'files', 'are', 'in', 'the', 'drawer.'],
              why: { en: 'A noun place needs its preposition, and plural files takes are.', zh: '名詞地點需要介系詞，而複數的 files 搭配 are。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 1-9
    {
      n: '1-9',
      blocks: [
        {
          t: 'lead',
          en: 'Everything in this chapter is one of three shapes. Once you can name the shape, you can build the sentence.',
          zh: '這一章所有的內容都是三種句型之一。只要能說出是哪一種，你就能造出那個句子。',
        },
        {
          t: 'rule',
          en: 'The noun or pronoun at the beginning of a sentence is called the subject. Be is a verb, and almost every English sentence has a subject and a verb. After be there are exactly three things that can come next: a noun, an adjective, or an expression of place.',
          zh: '句子開頭的名詞或代名詞叫做「主詞」。be 是動詞，而幾乎每個英文句子都有主詞和動詞。be 後面只有三種東西可以接：名詞、形容詞，或表示地點的說法。',
        },
        {
          t: 'forms',
          en: 'The three completions',
          zh: '三種接法',
          rows: [
            { sub: 'I', verb: 'am', rest: 'a student.', zh: '主詞 ＋ be ＋ 名詞：我是學生。' },
            { sub: 'He', verb: 'is', rest: 'smart.', zh: '主詞 ＋ be ＋ 形容詞：他很聰明。', mark: true },
            { sub: 'We', verb: 'are', rest: 'in class.', zh: '主詞 ＋ be ＋ 地點：我們在上課。' },
            { sub: 'Amy', verb: 'is', rest: 'upstairs.', zh: '主詞 ＋ be ＋ 地點（一個字）：Amy 在樓上。' },
          ],
        },
        {
          t: 'table',
          en: 'Naming the shape',
          zh: '說出句型',
          head: [
            { en: 'Pattern', zh: '句型' },
            { en: 'Example', zh: '例句' },
            { en: 'What follows be', zh: 'be 後面是什麼' },
          ],
          rows: [
            ['subject + be + noun', 'I am a student.', 'a noun'],
            ['subject + be + adjective', 'He is smart.', 'an adjective'],
            ['subject + be + a place', 'We are in class.', 'a preposition and a noun'],
            ['subject + be + a place', 'Amy is upstairs.', 'one word'],
          ],
          rowsZh: [
            ['主詞 ＋ be ＋ 名詞', '', '名詞'],
            ['主詞 ＋ be ＋ 形容詞', '', '形容詞'],
            ['主詞 ＋ be ＋ 地點', '', '介系詞加名詞'],
            ['主詞 ＋ be ＋ 地點', '', '一個字'],
          ],
        },
        {
          t: 'note',
          en: 'An expression of place has two forms',
          zh: '地點有兩種形式',
          bodyEn: 'It can be a preposition and a noun, as in in class, or a single word, as in upstairs. Both are the same shape as far as this summary is concerned — 1-8 is where the difference lives.',
          bodyZh: '它可以是介系詞加名詞，例如 in class；也可以是一個單字，例如 upstairs。對這份總整理來說兩者算同一種句型——差別在 1-8。',
          good: ['Jack is at home.', 'Gina is upstairs.'],
        },
        {
          t: 'mcq',
          en: 'What follows be?',
          zh: 'be 後面是什麼？',
          hintEn: 'Three answers, every time. Say the sentence, then name what came after the verb.',
          hintZh: '每次都只有三個答案。把句子唸一次，再說出動詞後面是什麼。',
          items: [
            {
              text: 'We’re friends. → are + ___',
              options: ['a noun', 'an adjective', 'a place'],
              answer: 0,
              why: { en: 'Friends is a noun. The article is dropped because it is plural, which is 1-4.', zh: 'friends 是名詞。因為是複數所以沒有冠詞，那是 1-4 的內容。' },
            },
            {
              text: 'Anna is in Rome. → is + ___',
              options: ['a place', 'a noun', 'an adjective'],
              answer: 0,
              why: { en: 'In Rome is a preposition and a noun: an expression of place.', zh: 'in Rome 是介系詞加名詞：表示地點的說法。' },
            },
            {
              text: 'I’m hungry. → am + ___',
              options: ['an adjective', 'a noun', 'a place'],
              answer: 0,
              why: { en: 'Hungry describes the subject, so it is an adjective — 1-7.', zh: 'hungry 在描述主詞，所以是形容詞——1-7 的內容。' },
            },
            {
              text: 'Gina is upstairs. → is + ___',
              options: ['a place', 'an adjective', 'a noun'],
              answer: 0,
              why: { en: 'A place can be one word, with no preposition in front of it.', zh: '地點可以只有一個字，前面不加介系詞。' },
            },
            {
              text: 'Dan and I are nurses. → are + ___',
              options: ['a noun', 'an adjective', 'a place'],
              answer: 0,
              why: { en: 'Nurses is a noun, and the plural subject takes are.', zh: 'nurses 是名詞，複數主詞搭配 are。' },
            },
            {
              text: 'We aren’t homesick. → are + ___',
              options: ['an adjective', 'a noun', 'a place'],
              answer: 0,
              why: { en: 'Making a sentence negative does not change its shape — homesick is still an adjective.', zh: '把句子變否定不會改變句型——homesick 還是形容詞。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          hintEn: 'One of each shape. Decide what follows be before you start placing words.',
          hintZh: '三種句型各一題。開始排之前，先想好 be 後面要接什麼。',
          items: [
            {
              cue: '我是學生。（名詞）',
              answer: ['I', 'am', 'a', 'student.'],
              why: { en: 'Subject, be, noun — and a singular noun keeps its article.', zh: '主詞、be、名詞——單數名詞要留著冠詞。' },
            },
            {
              cue: '他在家。（地點）',
              answer: ['He', 'is', 'at', 'home.'],
              why: { en: 'Subject, be, a place. At home is fixed — it never takes the.', zh: '主詞、be、地點。at home 是固定用法——不加 the。' },
            },
            {
              cue: '他們不是護理師。（名詞，否定）',
              answer: ['They', 'aren’t', 'nurses.'],
              why: { en: 'The negative sits inside the verb and the shape is unchanged.', zh: '否定藏在動詞裡面，句型完全沒變。' },
            },
          ],
        },
      ],
    },
  ],
};

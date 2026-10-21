/* Unit 1 — Am, Is, Are.

   The same grammar as Chapter 1 of the adult course, for a ten- to
   twelve-year-old. What changed is not the content but the telling.

   Nine sections became seven. The adult chapter splits singular pronouns from
   plural pronouns and singular nouns from plural nouns, which is the right
   way to lay out a reference. For a child it is four sections saying "look at
   the subject" four times, so the pronouns are one section and the nouns are
   two — one for a and an, one for plurals.

   Sentences are shorter and the examples come from school, a bedroom and a
   lunchbox rather than from an office. Explanations are two lines, never a
   paragraph: at this age a wall of text is skipped, and the form chart and
   the drills do the teaching.

   The notes a ten-year-old does not need are gone — no apostrophe-versus-
   comma, no its against it's, no aside about titles not showing gender. Two
   are kept because a child meets them immediately: 很 is not very, and you
   is both 你 and 你們.
*/

const CHAPTER = {
  id: 'unit01',

  intro: {
    en: 'Be is the first verb you need and the easiest one to forget. In Chinese you can say 我很累 with no verb at all. In English there has to be one: I am tired. This unit is that one small word, in every shape it takes.',
    zh: 'be 動詞是你最先需要、也最容易忘記的動詞。中文可以說「我很累」，完全不用動詞；英文一定要有一個：I am tired。這個單元就是在講這個小小的字，以及它的各種樣子。',
  },

  opening: [
    {
      t: 'lead',
      en: 'Eight sentences. Some are right and some are wrong. Guess first — getting one wrong now costs nothing.',
      zh: '八個句子，有些對、有些錯。先猜猜看——現在猜錯完全沒關係。',
    },
    {
      t: 'judge',
      en: 'Right or wrong?',
      zh: '對還是錯？',
      hintEn: 'Each answer tells you which section it comes from.',
      hintZh: '每個答案都會告訴你它是哪一節的內容。',
      items: [
        {
          text: 'My dog is big.',
          ok: true,
          why: { en: 'One dog, so is. See 1-1.', zh: '一隻狗，所以用 is。見 1-1。' },
        },
        {
          text: 'I tired.',
          ok: false,
          fix: 'I am tired.',
          why: { en: 'English always needs the verb, even when the meaning is clear. See 1-1.', zh: '就算意思很清楚，英文還是一定要有動詞。見 1-1。' },
        },
        {
          text: 'She is teacher.',
          ok: false,
          fix: 'She is a teacher.',
          why: { en: 'One job, one person — it needs a in front. See 1-2.', zh: '一個職業、一個人，前面要加 a。見 1-2。' },
        },
        {
          text: 'My brother is an artist.',
          ok: true,
          why: { en: 'Artist starts with a vowel sound, so an. See 1-2.', zh: 'artist 的開頭是母音，所以用 an。見 1-2。' },
        },
        {
          text: 'Cats and dogs is animals.',
          ok: false,
          fix: 'Cats and dogs are animals.',
          why: { en: 'More than one, so are. See 1-3.', zh: '不只一個，所以用 are。見 1-3。' },
        },
        {
          text: 'They are student.',
          ok: false,
          fix: 'They are students.',
          why: { en: 'More than one student, so the word needs its -s. See 1-3.', zh: '不只一個學生，所以那個字要加 -s。見 1-3。' },
        },
        {
          text: 'He no happy.',
          ok: false,
          fix: 'He isn’t happy.',
          why: { en: 'To say no in a sentence, use not after be. See 1-5.', zh: '句子裡要說「不」，是在 be 後面加 not。見 1-5。' },
        },
        {
          text: 'My bag is under the desk.',
          ok: true,
          why: { en: 'Be often tells you where something is. See 1-6.', zh: 'be 很常用來說東西在哪裡。見 1-6。' },
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
          en: 'One verb, three shapes. The word in front of it tells you which one to use.',
          zh: '一個動詞，三種樣子。前面那個字會告訴你要用哪一個。',
        },
        {
          t: 'rule',
          en: 'Am goes with I. Is goes with he, she and it. Are goes with you, we and they.',
          zh: 'am 配 I；is 配 he、she、it；are 配 you、we、they。',
        },
        {
          t: 'forms',
          en: 'The three shapes of be',
          zh: 'be 的三種樣子',
          rows: [
            { sub: 'I', verb: 'am', rest: 'hungry.', zh: '我餓了。', mark: true },
            { sub: 'You', verb: 'are', rest: 'hungry.', zh: '你餓了。' },
            { sub: 'He', verb: 'is', rest: 'hungry.', zh: '他餓了。' },
            { sub: 'She', verb: 'is', rest: 'hungry.', zh: '她餓了。' },
            { sub: 'It', verb: 'is', rest: 'hungry.', zh: '牠餓了。' },
            { sub: 'We', verb: 'are', rest: 'hungry.', zh: '我們餓了。' },
            { sub: 'They', verb: 'are', rest: 'hungry.', zh: '他們餓了。' },
          ],
        },
        {
          t: 'note',
          en: 'Am belongs to I only',
          zh: 'am 只配 I',
          bodyEn: 'There is one word in English that goes with am, and it is I. Nothing else, ever.',
          bodyZh: '英文裡只有一個字會配 am，就是 I。其他的都不會。',
          good: ['I am ten.', 'She is ten.'],
          bad: ['She am ten.', 'I is ten.'],
        },
        {
          t: 'note',
          en: 'Never leave the verb out',
          zh: '動詞不能不見',
          bodyEn: 'In Chinese, 我很累 has no verb. In English you cannot do that — the am has to be there, even though the sentence makes sense without it.',
          bodyZh: '中文的「我很累」沒有動詞。英文不能這樣——am 一定要在，就算少了它意思也看得懂。',
          good: ['I am tired.'],
          bad: ['I tired.', 'I very tired.'],
        },
        {
          t: 'note',
          en: '很 is not very',
          zh: '「很」不是 very',
          bodyEn: '我很累 is I am tired. The 很 turns into am, not into very. Save very for when you really mean it.',
          bodyZh: '「我很累」是 I am tired。那個「很」變成的是 am，不是 very。真的要強調的時候再用 very。',
          good: ['I am tired.', 'I am very tired. (when you really are!)'],
          bad: ['I very tired.'],
        },
        {
          t: 'note',
          en: 'You means 你 and 你們',
          zh: 'you 是「你」也是「你們」',
          bodyEn: 'English uses the same word for one person and for a whole group, and it is are both times.',
          bodyZh: '英文對一個人和一群人用同一個字，而且兩種都搭配 are。',
          good: ['You are late. (one friend)', 'You are late. (the whole class)'],
        },
        {
          t: 'egs',
          en: 'Sentences',
          zh: '例句',
          items: [
            { en: 'I am in Grade 5.', zh: '我五年級。' },
            { en: 'You are my best friend.', zh: '你是我最好的朋友。' },
            { en: 'He is at school.', zh: '他在學校。' },
            { en: 'It is cold today.', zh: '今天很冷。' },
            { en: 'They are my classmates.', zh: '他們是我的同學。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose am, is or are',
          zh: '選 am、is 還是 are',
          hintEn: 'Only look at the word in front of the blank.',
          hintZh: '只要看空格前面那個字。',
          items: [
            {
              text: 'I ___ hungry.',
              options: ['am', 'is', 'are'],
              answer: 0,
              why: { en: 'I always takes am.', zh: 'I 永遠搭配 am。' },
            },
            {
              text: 'She ___ my sister.',
              options: ['is', 'am', 'are'],
              answer: 0,
              why: { en: 'He, she and it take is.', zh: 'he、she、it 搭配 is。' },
            },
            {
              text: 'They ___ in the playground.',
              options: ['are', 'is', 'am'],
              answer: 0,
              why: { en: 'You, we and they take are.', zh: 'you、we、they 搭配 are。' },
            },
            {
              text: 'It ___ hot today.',
              options: ['is', 'are', 'am'],
              answer: 0,
              why: { en: 'The weather is an it, so is.', zh: '天氣是 it，所以用 is。' },
            },
            {
              text: 'We ___ ready.',
              options: ['are', 'is', 'am'],
              answer: 0,
              why: { en: 'We means more than one person, so are.', zh: 'we 代表不只一個人，所以用 are。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Build the sentence',
          zh: '把句子排出來',
          hintEn: 'Tap the words in order. Tap a word you put down to take it back.',
          hintZh: '依序點選單字。點已經放上去的字可以收回來。',
          items: [
            {
              cue: '我今天很累。',
              answer: ['I', 'am', 'tired', 'today.'],
              why: { en: 'The 很 becomes am.', zh: '「很」變成 am。' },
            },
            {
              cue: '她是我姐姐。',
              answer: ['She', 'is', 'my', 'sister.'],
              why: { en: 'One person, so is.', zh: '一個人，所以用 is。' },
            },
            {
              cue: '他們是我的同學。',
              answer: ['They', 'are', 'my', 'classmates.'],
              why: { en: 'More than one, so are — and classmates takes an -s.', zh: '不只一個，所以用 are——而且 classmates 要加 -s。' },
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
          en: 'When you talk about one thing, English puts a little word in front of it. Chinese does not, so it is easy to forget.',
          zh: '講「一個東西」的時候，英文會在前面放一個小字。中文沒有這個字，所以很容易忘記。',
        },
        {
          t: 'rule',
          en: 'Use a or an in front of one thing. They mean the same. Use an when the next word starts with a vowel sound: a, e, i, o, u.',
          zh: '講一個東西時，前面要放 a 或 an，兩個意思一樣。下一個字的開頭是母音（a、e、i、o、u）的時候用 an。',
        },
        {
          t: 'forms',
          en: 'A and an',
          zh: 'a 與 an',
          rows: [
            { sub: 'It', verb: 'is', rest: 'a cat.', zh: '那是一隻貓。' },
            { sub: 'It', verb: 'is', rest: 'a book.', zh: '那是一本書。' },
            { sub: 'It', verb: 'is', rest: 'an apple.', zh: '那是一顆蘋果。', mark: true },
            { sub: 'It', verb: 'is', rest: 'an egg.', zh: '那是一顆蛋。', mark: true },
            { sub: 'She', verb: 'is', rest: 'a teacher.', zh: '她是老師。' },
            { sub: 'He', verb: 'is', rest: 'an artist.', zh: '他是藝術家。', mark: true },
          ],
        },
        {
          t: 'note',
          en: 'One thing always needs a or an',
          zh: '一個東西一定要有 a 或 an',
          bodyEn: 'This is the mistake almost everyone makes, because Chinese does not need it. The sentence still makes sense without it — it is just not English.',
          bodyZh: '幾乎每個人都會犯這個錯，因為中文不需要這個字。少了它句子還是看得懂——只是不像英文。',
          good: ['She is a teacher.', 'It is an apple.'],
          bad: ['She is teacher.', 'It is apple.'],
        },
        {
          t: 'table',
          en: 'Which one to use',
          zh: '該用哪一個',
          head: [
            { en: 'Use', zh: '用' },
            { en: 'When the word starts with', zh: '當下一個字的開頭是' },
            { en: 'Examples', zh: '例子' },
          ],
          rows: [
            ['a', 'b, c, d, f, g, h …', 'a cat, a dog, a book, a teacher'],
            ['an', 'a, e, i, o, u', 'an apple, an egg, an ice cream, an orange'],
          ],
          rowsZh: [
            ['', '子音：b、c、d、f、g、h …', ''],
            ['', '母音：a、e、i、o、u', ''],
          ],
        },
        {
          t: 'egs',
          en: 'Sentences',
          zh: '例句',
          items: [
            { en: 'It is a pencil.', zh: '那是一枝鉛筆。' },
            { en: 'It is an eraser.', zh: '那是一塊橡皮擦。' },
            { en: 'My mother is a nurse.', zh: '我媽媽是護理師。' },
            { en: 'Taiwan is an island.', zh: '台灣是一座島。' },
            { en: 'That is an easy question.', zh: '那是一題簡單的題目。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose a or an',
          zh: '選 a 還是 an',
          hintEn: 'Say the word first. Listen to how it starts.',
          hintZh: '先把那個字唸出來，聽聽看它的開頭。',
          items: [
            {
              text: 'It is ___ apple.',
              options: ['an', 'a', '—'],
              answer: 0,
              why: { en: 'Apple starts with a, so an.', zh: 'apple 的開頭是 a，所以用 an。' },
            },
            {
              text: 'It is ___ dog.',
              options: ['a', 'an', '—'],
              answer: 0,
              why: { en: 'Dog starts with d, so a.', zh: 'dog 的開頭是 d，所以用 a。' },
            },
            {
              text: 'She is ___ teacher.',
              options: ['a', 'an', '—'],
              answer: 0,
              why: { en: 'One teacher, so it needs a. Never leave it out.', zh: '一位老師，所以要有 a。不可以省略。' },
            },
            {
              text: 'Taiwan is ___ island.',
              options: ['an', 'a', '—'],
              answer: 0,
              why: { en: 'Island starts with i, so an.', zh: 'island 的開頭是 i，所以用 an。' },
            },
            {
              text: 'That is ___ orange.',
              options: ['an', 'a', '—'],
              answer: 0,
              why: { en: 'Orange starts with o, so an.', zh: 'orange 的開頭是 o，所以用 an。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Build the sentence',
          zh: '把句子排出來',
          items: [
            {
              cue: '我媽媽是護理師。',
              answer: ['My', 'mother', 'is', 'a', 'nurse.'],
              why: { en: 'Do not forget the a before the job.', zh: '職業前面的 a 不要忘記。' },
            },
            {
              cue: '那是一顆蛋。',
              answer: ['It', 'is', 'an', 'egg.'],
              why: { en: 'Egg starts with e, so an.', zh: 'egg 的開頭是 e，所以用 an。' },
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
          en: 'Two or more changes two things: the verb becomes are, and the thing itself gets an -s.',
          zh: '兩個以上會改變兩個地方：動詞變成 are，東西本身要加 -s。',
        },
        {
          t: 'rule',
          en: 'More than one takes are. The noun takes an -s, and a and an disappear — they are only for one thing.',
          zh: '不只一個就用 are。名詞要加 -s，而 a 和 an 會消失——它們只用在一個東西上。',
        },
        {
          t: 'forms',
          en: 'One and more than one',
          zh: '一個與很多個',
          rows: [
            { sub: 'A cat', verb: 'is', rest: 'an animal.', zh: '貓是動物。' },
            { sub: 'Cats', verb: 'are', rest: 'animals.', zh: '貓是動物。（複數）', mark: true },
            { sub: 'My brother', verb: 'is', rest: 'a student.', zh: '我哥哥是學生。' },
            { sub: 'My brothers', verb: 'are', rest: 'students.', zh: '我哥哥們是學生。', mark: true },
            { sub: 'Taipei and Tokyo', verb: 'are', rest: 'cities.', zh: '台北和東京是城市。', mark: true },
          ],
        },
        {
          t: 'note',
          en: 'Two things joined by and are more than one',
          zh: '用 and 連起來的兩個東西就是「不只一個」',
          bodyEn: 'Each one on its own is just one — but put them together with and and the verb becomes are.',
          bodyZh: '它們各自都只有一個——但用 and 連在一起，動詞就要變成 are。',
          good: ['Cats and dogs are animals.'],
          bad: ['Cats and dogs is animals.'],
        },
        {
          t: 'note',
          en: 'Do not forget the -s',
          zh: '不要忘記 -s',
          bodyEn: 'Chinese does not change the word when there is more than one. English does, every single time.',
          bodyZh: '中文不管幾個，那個字都一樣。英文每一次都會變。',
          good: ['They are students.'],
          bad: ['They are student.'],
        },
        {
          t: 'table',
          en: 'Making the plural',
          zh: '變成複數',
          head: [
            { en: 'One', zh: '一個' },
            { en: 'More than one', zh: '很多個' },
            { en: 'What happened', zh: '怎麼變的' },
          ],
          rows: [
            ['a cat', 'cats', 'add -s'],
            ['a book', 'books', 'add -s'],
            ['a city', 'cities', 'the y becomes ies'],
            ['a country', 'countries', 'the y becomes ies'],
            ['a boy', 'boys', 'just add -s — there is a vowel before the y'],
          ],
          rowsZh: [
            ['', '', '加 -s'],
            ['', '', '加 -s'],
            ['', '', 'y 變成 ies'],
            ['', '', 'y 變成 ies'],
            ['', '', '只加 -s——y 前面是母音'],
          ],
        },
        {
          t: 'egs',
          en: 'Sentences',
          zh: '例句',
          items: [
            { en: 'Cats and dogs are animals.', zh: '貓和狗是動物。' },
            { en: 'My friends are in Grade 5.', zh: '我的朋友都在五年級。' },
            { en: 'Taipei and Tokyo are cities.', zh: '台北和東京是城市。' },
            { en: 'These books are mine.', zh: '這些書是我的。' },
          ],
        },
        {
          t: 'mcq',
          en: 'One or more than one?',
          zh: '一個還是很多個？',
          items: [
            {
              text: 'Cats ___ animals.',
              options: ['are', 'is', 'am'],
              answer: 0,
              why: { en: 'More than one cat, so are.', zh: '不只一隻貓，所以用 are。' },
            },
            {
              text: 'They are ___.',
              options: ['students', 'student', 'a students'],
              answer: 0,
              why: { en: 'More than one student, so the word takes an -s and loses the a.', zh: '不只一個學生，所以要加 -s，也不用 a。' },
            },
            {
              text: 'Taipei and Tokyo are ___.',
              options: ['cities', 'citys', 'city'],
              answer: 0,
              why: { en: 'The y turns into ies.', zh: 'y 要變成 ies。' },
            },
            {
              text: 'My brother ___ a student.',
              options: ['is', 'are', 'am'],
              answer: 0,
              why: { en: 'Only one brother here, so is — and the a stays.', zh: '這裡只有一個哥哥，所以用 is——而且 a 要留著。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Build the sentence',
          zh: '把句子排出來',
          items: [
            {
              cue: '貓和狗是動物。',
              answer: ['Cats', 'and', 'dogs', 'are', 'animals.'],
              why: { en: 'Three words take an -s in this one sentence.', zh: '這一句裡有三個字加了 -s。' },
            },
            {
              cue: '我的朋友都在五年級。',
              answer: ['My', 'friends', 'are', 'in', 'Grade', '5.'],
              why: { en: 'Friends is more than one, so are.', zh: 'friends 不只一個，所以用 are。' },
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
          en: 'When we talk, we squash the two words together. This is what you will hear and what you should write.',
          zh: '我們說話的時候，會把兩個字擠在一起。這就是你會聽到、也應該要會寫的形式。',
        },
        {
          t: 'rule',
          en: 'A short form puts the pronoun and be together with a little mark called an apostrophe. You can use short forms when you speak and when you write.',
          zh: '縮寫是把代名詞和 be 動詞合在一起，中間用一個叫「撇號」的小符號。說話和寫字都可以用縮寫。',
        },
        {
          t: 'table',
          en: 'The seven short forms',
          zh: '七個縮寫',
          head: [
            { en: 'Long', zh: '完整' },
            { en: 'Short', zh: '縮寫' },
            { en: 'Example', zh: '例句' },
          ],
          rows: [
            ['I am', 'I’m', 'I’m hungry.'],
            ['you are', 'you’re', 'You’re late.'],
            ['he is', 'he’s', 'He’s my brother.'],
            ['she is', 'she’s', 'She’s my teacher.'],
            ['it is', 'it’s', 'It’s hot today.'],
            ['we are', 'we’re', 'We’re ready.'],
            ['they are', 'they’re', 'They’re my friends.'],
          ],
        },
        {
          t: 'note',
          en: 'The mark goes above the line',
          zh: '那個符號在上面',
          bodyEn: 'An apostrophe sits up high. A comma sits down on the line. They are not the same mark.',
          bodyZh: '撇號在字的上方，逗號在下面的線上。它們不是同一個符號。',
          good: ['I’m hungry.'],
          bad: ['I,m hungry.'],
        },
        {
          t: 'egs',
          en: 'Sentences',
          zh: '例句',
          items: [
            { en: 'I’m in Grade 5.', zh: '我五年級。' },
            { en: 'He’s my best friend.', zh: '他是我最好的朋友。' },
            { en: 'It’s cold today.', zh: '今天很冷。' },
            { en: 'We’re late for class.', zh: '我們上課要遲到了。' },
            { en: 'They’re in the playground.', zh: '他們在操場。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the short form',
          zh: '選出正確的縮寫',
          items: [
            {
              text: 'I am → ___',
              options: ['I’m', 'Im', 'I,m'],
              answer: 0,
              why: { en: 'The mark replaces the missing a.', zh: '那個符號取代了不見的 a。' },
            },
            {
              text: 'she is → ___',
              options: ['she’s', 'shes', 'she’re'],
              answer: 0,
              why: { en: 'She goes with is, so she’s.', zh: 'she 配 is，所以是 she’s。' },
            },
            {
              text: 'they are → ___',
              options: ['they’re', 'their', 'theyre'],
              answer: 0,
              why: { en: 'They’re is they are. Their is a different word.', zh: 'they’re 是 they are。their 是另一個字。' },
            },
            {
              text: '___ cold today.',
              options: ['It’s', 'Its', 'It’re'],
              answer: 0,
              why: { en: 'It goes with is, so it’s.', zh: 'it 配 is，所以是 it’s。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Build the sentence',
          zh: '把句子排出來',
          items: [
            {
              cue: '他是我最好的朋友。',
              answer: ['He’s', 'my', 'best', 'friend.'],
              why: { en: 'He’s is one word on the page but two words of grammar.', zh: 'he’s 看起來是一個字，文法上是兩個字。' },
            },
            {
              cue: '我們上課要遲到了。',
              answer: ['We’re', 'late', 'for', 'class.'],
              why: { en: 'We are, squashed together.', zh: 'we are 擠在一起。' },
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
          en: 'To say something is not true, add one word — and put it in the right place.',
          zh: '要說「不是」，只要加一個字——而且要放對位置。',
        },
        {
          t: 'rule',
          en: 'Put not straight after am, is or are. Nothing else in the sentence changes.',
          zh: '把 not 直接放在 am、is、are 後面。句子其他地方都不用改。',
        },
        {
          t: 'forms',
          en: 'Be + not',
          zh: 'be ＋ not',
          rows: [
            { sub: 'I', verb: 'am not', rest: 'hungry.', zh: '我不餓。', mark: true },
            { sub: 'He', verb: 'is not', rest: 'here.', zh: '他不在這裡。' },
            { sub: 'It', verb: 'is not', rest: 'cold.', zh: '天氣不冷。' },
            { sub: 'We', verb: 'are not', rest: 'late.', zh: '我們沒有遲到。' },
            { sub: 'They', verb: 'are not', rest: 'my friends.', zh: '他們不是我的朋友。' },
          ],
        },
        {
          t: 'table',
          en: 'The short forms',
          zh: '縮寫',
          head: [
            { en: 'Long', zh: '完整' },
            { en: 'Short', zh: '縮寫' },
          ],
          rows: [
            ['I am not', 'I’m not'],
            ['he is not', 'he isn’t'],
            ['she is not', 'she isn’t'],
            ['it is not', 'it isn’t'],
            ['you are not', 'you aren’t'],
            ['we are not', 'we aren’t'],
            ['they are not', 'they aren’t'],
          ],
        },
        {
          t: 'note',
          en: 'There is no amn’t',
          zh: '沒有 amn’t 這個字',
          bodyEn: 'Every other one can squash into isn’t or aren’t. I am not cannot. Say I’m not.',
          bodyZh: '其他的都可以變成 isn’t 或 aren’t，只有 I am not 不行。要說 I’m not。',
          good: ['I’m not hungry.'],
          bad: ['I amn’t hungry.'],
        },
        {
          t: 'note',
          en: 'Use not, not no',
          zh: '用 not，不是 no',
          bodyEn: 'No is for answering a question. Inside a sentence you need not, and it goes after be.',
          bodyZh: 'no 是用來回答問題的。句子裡面要用 not，而且放在 be 後面。',
          good: ['He isn’t happy.'],
          bad: ['He no happy.', 'He not is happy.'],
        },
        {
          t: 'egs',
          en: 'Sentences',
          zh: '例句',
          items: [
            { en: 'I’m not hungry.', zh: '我不餓。' },
            { en: 'She isn’t at school today.', zh: '她今天沒來學校。' },
            { en: 'It isn’t cold.', zh: '天氣不冷。' },
            { en: 'We aren’t late.', zh: '我們沒有遲到。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Say no',
          zh: '說「不是」',
          items: [
            {
              text: 'She ___ at school today.',
              options: ['isn’t', 'amn’t', 'no is'],
              answer: 0,
              why: { en: 'She goes with is, and is + not is isn’t.', zh: 'she 配 is，is ＋ not 就是 isn’t。' },
            },
            {
              text: 'I ___ hungry.',
              options: ['’m not', 'amn’t', 'aren’t'],
              answer: 0,
              why: { en: 'I am not has only one short form: I’m not.', zh: 'I am not 只有一種縮寫：I’m not。' },
            },
            {
              text: 'They ___ my friends.',
              options: ['aren’t', 'isn’t', 'not are'],
              answer: 0,
              why: { en: 'They goes with are, and are + not is aren’t.', zh: 'they 配 are，are ＋ not 就是 aren’t。' },
            },
            {
              text: 'It ___ cold today.',
              options: ['isn’t', 'aren’t', 'amn’t'],
              answer: 0,
              why: { en: 'It goes with is.', zh: 'it 配 is。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Build the sentence',
          zh: '把句子排出來',
          items: [
            {
              cue: '我不餓。',
              answer: ['I’m', 'not', 'hungry.'],
              why: { en: 'Not comes after the verb.', zh: 'not 放在動詞後面。' },
            },
            {
              cue: '他今天不在學校。',
              answer: ['He', 'isn’t', 'at', 'school', 'today.'],
              why: { en: 'Isn’t already has the not inside it.', zh: 'isn’t 裡面已經有 not 了。' },
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
          en: 'Be is also how you say where something is.',
          zh: 'be 也可以用來說東西在哪裡。',
        },
        {
          t: 'rule',
          en: 'After be you can put a place. Some places are one word. Most need a small word first, like in, on or under.',
          zh: 'be 後面可以接地點。有些地點只要一個字，大部分前面要先放一個小字，例如 in、on、under。',
        },
        {
          t: 'table',
          en: 'Where things are',
          zh: '位置的說法',
          head: [
            { en: 'Word', zh: '字' },
            { en: 'Meaning', zh: '中文' },
          ],
          rows: [
            ['in', '在…裡面'],
            ['on', '在…上面（有碰到）'],
            ['under', '在…下面'],
            ['next to', '在…旁邊'],
            ['behind', '在…後面'],
            ['in front of', '在…前面'],
            ['between', '在…中間'],
          ],
          zhCol: 1,
        },
        {
          t: 'table',
          en: 'Places that are just one word',
          zh: '只要一個字的地點',
          head: [
            { en: 'Word', zh: '字' },
            { en: 'Meaning', zh: '中文' },
          ],
          rows: [
            ['here', '這裡'],
            ['there', '那裡'],
            ['upstairs', '樓上'],
            ['downstairs', '樓下'],
            ['outside', '外面'],
            ['inside', '裡面'],
          ],
          zhCol: 1,
        },
        {
          t: 'note',
          en: 'One-word places need nothing in front',
          zh: '一個字的地點前面什麼都不加',
          bodyEn: 'These words already mean a place all by themselves.',
          bodyZh: '這些字本身就已經是地點了。',
          good: ['She is upstairs.', 'My dog is outside.'],
          bad: ['She is at upstairs.', 'My dog is at outside.'],
        },
        {
          t: 'contrast',
          en: 'On and under, in and next to',
          zh: 'on 與 under、in 與 next to',
          hintEn: 'Picture the box and the ball.',
          hintZh: '想像一個盒子和一顆球。',
          pairs: [
            {
              a: { en: 'The ball is on the box.', zh: '球在盒子上面。' },
              b: { en: 'The ball is under the box.', zh: '球在盒子下面。' },
            },
            {
              a: { en: 'The ball is in the box.', zh: '球在盒子裡面。' },
              b: { en: 'The ball is next to the box.', zh: '球在盒子旁邊。' },
            },
          ],
        },
        {
          t: 'egs',
          en: 'Sentences',
          zh: '例句',
          items: [
            { en: 'My bag is under the desk.', zh: '我的書包在桌子下面。' },
            { en: 'The cat is on my bed.', zh: '貓在我的床上。' },
            { en: 'My pencil is in my pencil case.', zh: '我的鉛筆在鉛筆盒裡。' },
            { en: 'My mum is downstairs.', zh: '我媽媽在樓下。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Where is it?',
          zh: '它在哪裡？',
          items: [
            {
              text: 'My bag is ___ the desk. (下面)',
              options: ['under', 'on', 'in'],
              answer: 0,
              why: { en: 'Under means below it.', zh: 'under 是在下面。' },
            },
            {
              text: 'My pencil is ___ my pencil case. (裡面)',
              options: ['in', 'on', 'under'],
              answer: 0,
              why: { en: 'Inside something is in.', zh: '在東西裡面用 in。' },
            },
            {
              text: 'She is ___.',
              options: ['upstairs', 'at upstairs', 'in upstairs'],
              answer: 0,
              why: { en: 'Upstairs is a place all by itself.', zh: 'upstairs 本身就是地點。' },
            },
            {
              text: 'The cat is ___ my bed. (上面，有碰到)',
              options: ['on', 'in', 'above'],
              answer: 0,
              why: { en: 'Touching the top of something is on.', zh: '碰到東西的上面是 on。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Build the sentence',
          zh: '把句子排出來',
          items: [
            {
              cue: '我的書包在桌子下面。',
              answer: ['My', 'bag', 'is', 'under', 'the', 'desk.'],
              why: { en: 'Subject, be, then where it is.', zh: '主詞、be，然後是在哪裡。' },
            },
            {
              cue: '我媽媽在樓下。',
              answer: ['My', 'mum', 'is', 'downstairs.'],
              why: { en: 'One word is enough — nothing goes in front of it.', zh: '一個字就夠了，前面什麼都不加。' },
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
          en: 'Everything in this unit is the same shape. Only the ending changes, and there are three endings.',
          zh: '這個單元的所有句子都是同一個形狀。只有結尾不一樣，而結尾只有三種。',
        },
        {
          t: 'rule',
          en: 'Every sentence here starts with who or what you are talking about, then a form of be. After be comes one of three things: a thing, a describing word, or a place.',
          zh: '這裡每個句子都先說「誰」或「什麼」，接著是 be 動詞。be 後面只會出現三種東西：一個東西、一個形容的字，或一個地點。',
        },
        {
          t: 'forms',
          en: 'The three endings',
          zh: '三種結尾',
          rows: [
            { sub: 'I', verb: 'am', rest: 'a student.', zh: '一個東西：我是學生。' },
            { sub: 'He', verb: 'is', rest: 'happy.', zh: '形容的字：他很開心。', mark: true },
            { sub: 'We', verb: 'are', rest: 'in class.', zh: '地點：我們在教室。' },
            { sub: 'My bag', verb: 'is', rest: 'under the desk.', zh: '地點：我的書包在桌子下面。' },
          ],
        },
        {
          t: 'note',
          en: 'A describing word never changes',
          zh: '形容的字永遠不變',
          bodyEn: 'One person or ten people, the word happy stays exactly the same. Only the verb changes.',
          bodyZh: '一個人或十個人，happy 這個字完全一樣。只有動詞會變。',
          good: ['He is happy.', 'They are happy.'],
          bad: ['They are happys.'],
        },
        {
          t: 'steps',
          en: 'Building a sentence with be',
          zh: '用 be 造句的步驟',
          items: [
            { en: 'Say who or what you are talking about.', zh: '先說你在講誰或什麼。' },
            { en: 'Choose am, is or are to match it.', zh: '選出對應的 am、is 或 are。' },
            { en: 'Finish with a thing, a describing word, or a place.', zh: '最後接上一個東西、一個形容的字，或一個地點。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Which ending is it?',
          zh: '這是哪一種結尾？',
          hintEn: 'Three answers every time. Say the sentence, then look at the last part.',
          hintZh: '每次都只有三個答案。把句子唸一次，再看最後那一段。',
          items: [
            {
              text: 'I am a student. → a ___',
              options: ['thing', 'describing word', 'place'],
              answer: 0,
              why: { en: 'A student is a thing you can be.', zh: 'a student 是一個「身分」，算東西。' },
            },
            {
              text: 'He is happy. → a ___',
              options: ['describing word', 'thing', 'place'],
              answer: 0,
              why: { en: 'Happy tells you what he is like.', zh: 'happy 告訴你他怎麼樣。' },
            },
            {
              text: 'My bag is under the desk. → a ___',
              options: ['place', 'thing', 'describing word'],
              answer: 0,
              why: { en: 'Under the desk tells you where.', zh: 'under the desk 告訴你在哪裡。' },
            },
            {
              text: 'They are my classmates. → a ___',
              options: ['thing', 'describing word', 'place'],
              answer: 0,
              why: { en: 'Classmates is a thing — people are things here too.', zh: 'classmates 算東西——人在這裡也算東西。' },
            },
            {
              text: 'We are outside. → a ___',
              options: ['place', 'thing', 'describing word'],
              answer: 0,
              why: { en: 'Outside is a one-word place.', zh: 'outside 是一個字的地點。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Build one of each',
          zh: '三種各造一句',
          items: [
            {
              cue: '我是學生。（東西）',
              answer: ['I', 'am', 'a', 'student.'],
              why: { en: 'Do not forget the a.', zh: '不要忘記 a。' },
            },
            {
              cue: '他們很開心。（形容的字）',
              answer: ['They', 'are', 'happy.'],
              why: { en: 'No -s on happy, ever.', zh: 'happy 永遠不加 -s。' },
            },
            {
              cue: '貓在我的床上。（地點）',
              answer: ['The', 'cat', 'is', 'on', 'my', 'bed.'],
              why: { en: 'One cat, so is — then where it is.', zh: '一隻貓，所以用 is——然後說在哪裡。' },
            },
          ],
        },
      ],
    },
  ],
};

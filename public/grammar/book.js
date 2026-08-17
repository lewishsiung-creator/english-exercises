/* Basic English Grammar — the map of the whole book.

   One file, loaded by the hub and by every chapter page. It holds nothing but
   structure: the fifteen chapters, their 133 numbered sections, the five
   appendices and the gathered irregular-verb list.

   `built: true` on a chapter means its folder exists and its page is written.
   The hub links those and dims the rest, so the contents page doubles as the
   to-do list — the same trick the campaign-speech Q&A uses for its nine
   unanswered questions. Adding a chapter is: write ch07/content.js, copy the
   thin ch07/index.html, flip `built` here. Nothing else changes.

   The section titles follow the syllabus of Basic English Grammar (Azar &
   Hagen, 4th edition), which is the order Lewis teaches in. The explanations,
   examples and practice on each chapter page are written for this site — the
   book's own charts and exercises are not reproduced.
*/

const BOOK = {
  title: 'Basic English Grammar',
  titleZh: '基礎英文文法',
  kicker: '成人基礎文法',

  /* Printed at the foot of every chapter cover. The syllabus is the book's;
     the explanations, examples and practice on these pages are written for
     this site, and the book's own charts and exercises are not reproduced. */
  sourceNote: {
    en: 'Chapter and section headings follow the syllabus of Basic English Grammar (Azar & Hagen, 4th edition). The explanations, examples and practice here are written for this page.',
    zh: '章節標題依《Basic English Grammar》（Azar & Hagen，第四版）的編排順序；本頁的說明、例句與練習皆為本站自行撰寫。',
  },

  chapters: [
    {
      n: 1,
      id: 'ch01',
      en: 'Using Be',
      zh: '使用 be 動詞',
      built: true,
      sections: [
        { n: '1-1', en: 'Singular pronouns + be', zh: '單數代名詞 ＋ be' },
        { n: '1-2', en: 'Plural pronouns + be', zh: '複數代名詞 ＋ be' },
        { n: '1-3', en: 'Singular nouns + be', zh: '單數名詞 ＋ be' },
        { n: '1-4', en: 'Plural nouns + be', zh: '複數名詞 ＋ be' },
        { n: '1-5', en: 'Contractions with be', zh: 'be 動詞的縮寫' },
        { n: '1-6', en: 'Negative with be', zh: 'be 動詞的否定' },
        { n: '1-7', en: 'Be + adjective', zh: 'be ＋ 形容詞' },
        { n: '1-8', en: 'Be + a place', zh: 'be ＋ 地點' },
        { n: '1-9', en: 'Summary: basic sentence patterns with be', zh: '總整理：be 動詞的基本句型' },
      ],
    },
    {
      n: 2,
      id: 'ch02',
      en: 'Using Be and Have',
      zh: '使用 be 與 have',
      built: false,
      sections: [
        { n: '2-1', en: 'Yes/no questions with be', zh: 'be 動詞的 yes/no 問句' },
        { n: '2-2', en: 'Short answers to yes/no questions', zh: 'yes/no 問句的簡答' },
        { n: '2-3', en: 'Questions with be: using where', zh: '用 where 提問（be 動詞）' },
        { n: '2-4', en: 'Using have and has', zh: 'have 與 has 的用法' },
        { n: '2-5', en: 'Using my, your, her, his, our, their', zh: '所有格形容詞' },
        { n: '2-6', en: 'Using this and that', zh: 'this 與 that' },
        { n: '2-7', en: 'Using these and those', zh: 'these 與 those' },
        { n: '2-8', en: 'Asking questions with what and who + be', zh: '用 what 與 who ＋ be 提問' },
      ],
    },
    {
      n: 3,
      id: 'ch03',
      en: 'Using the Simple Present',
      zh: '現在簡單式',
      built: false,
      sections: [
        { n: '3-1', en: 'Form and basic meaning of the simple present tense', zh: '現在簡單式的形式與基本意義' },
        { n: '3-2', en: 'Frequency adverbs', zh: '頻率副詞' },
        { n: '3-3', en: 'Position of frequency adverbs', zh: '頻率副詞的位置' },
        { n: '3-4', en: 'Spelling and pronunciation of final -es', zh: '字尾 -es 的拼寫與發音' },
        { n: '3-5', en: 'Adding final -s/-es to words that end in -y', zh: '字尾 -y 加 -s/-es' },
        { n: '3-6', en: 'Irregular singular verbs: has, does, goes', zh: '不規則單數動詞：has, does, goes' },
        { n: '3-7', en: 'Like to, want to, need to', zh: 'like to, want to, need to' },
        { n: '3-8', en: 'Simple present tense: negative', zh: '現在簡單式：否定句' },
        { n: '3-9', en: 'Simple present tense: yes/no questions', zh: '現在簡單式：yes/no 問句' },
        { n: '3-10', en: 'Information questions with where and what', zh: '用 where 與 what 提問' },
        { n: '3-11', en: 'Information questions with when and what time', zh: '用 when 與 what time 提問' },
      ],
    },
    {
      n: 4,
      id: 'ch04',
      en: 'Using the Present Progressive',
      zh: '現在進行式',
      built: false,
      sections: [
        { n: '4-1', en: 'Be + -ing: the present progressive', zh: 'be ＋ -ing：現在進行式' },
        { n: '4-2', en: 'Spelling of -ing', zh: '-ing 的拼寫規則' },
        { n: '4-3', en: 'Present progressive: negatives', zh: '現在進行式：否定句' },
        { n: '4-4', en: 'Present progressive: questions', zh: '現在進行式：問句' },
        { n: '4-5', en: 'Simple present tense vs. the present progressive', zh: '現在簡單式 vs. 現在進行式' },
        { n: '4-6', en: 'Non-action verbs not used in the present progressive', zh: '不用進行式的狀態動詞' },
        { n: '4-7', en: 'See, look at, watch, hear, and listen to', zh: 'see, look at, watch, hear, listen to' },
        { n: '4-8', en: 'Think about and think that', zh: 'think about 與 think that' },
      ],
    },
    {
      n: 5,
      id: 'ch05',
      en: 'Talking About the Present',
      zh: '談論現在',
      built: false,
      sections: [
        { n: '5-1', en: 'Using it to talk about time', zh: '用 it 談時間' },
        { n: '5-2', en: 'Prepositions of time', zh: '時間介系詞' },
        { n: '5-3', en: 'Using it and what to talk about the weather', zh: '用 it 與 what 談天氣' },
        { n: '5-4', en: 'There + be', zh: 'there ＋ be' },
        { n: '5-5', en: 'There + be: yes/no questions', zh: 'there ＋ be：yes/no 問句' },
        { n: '5-6', en: 'There + be: asking questions with how many', zh: '用 how many 提問' },
        { n: '5-7', en: 'Prepositions of place', zh: '地方介系詞' },
        { n: '5-8', en: 'More prepositions of place: a list', zh: '更多地方介系詞' },
        { n: '5-9', en: 'Would like', zh: 'would like' },
        { n: '5-10', en: 'Would like vs. like', zh: 'would like vs. like' },
      ],
    },
    {
      n: 6,
      id: 'ch06',
      en: 'Nouns and Pronouns',
      zh: '名詞與代名詞',
      built: false,
      sections: [
        { n: '6-1', en: 'Nouns: subjects and objects', zh: '名詞：主詞與受詞' },
        { n: '6-2', en: 'Nouns as objects of prepositions', zh: '名詞作介系詞的受詞' },
        { n: '6-3', en: 'Adjectives with nouns', zh: '形容詞與名詞' },
        { n: '6-4', en: 'Subject pronouns and object pronouns', zh: '主格與受格代名詞' },
        { n: '6-5', en: 'Nouns: singular and plural forms', zh: '名詞：單數與複數' },
        { n: '6-6', en: 'Nouns: irregular plural forms', zh: '名詞：不規則複數' },
        { n: '6-7', en: 'Possessive pronouns: mine, yours, his, hers, ours, theirs', zh: '所有格代名詞' },
        { n: '6-8', en: 'Possessive nouns', zh: '名詞所有格' },
        { n: '6-9', en: 'Questions with whose', zh: '用 whose 提問' },
        { n: '6-10', en: 'Possessive: irregular plural nouns', zh: '不規則複數名詞的所有格' },
      ],
    },
    {
      n: 7,
      id: 'ch07',
      en: 'Count and Noncount Nouns',
      zh: '可數與不可數名詞',
      built: false,
      sections: [
        { n: '7-1', en: 'Nouns: count and noncount', zh: '可數與不可數名詞' },
        { n: '7-2', en: 'Using a vs. an', zh: 'a 與 an' },
        { n: '7-3', en: 'Using a/an vs. some', zh: 'a/an 與 some' },
        { n: '7-4', en: 'Measurements with noncount nouns', zh: '不可數名詞的量詞' },
        { n: '7-5', en: 'Using many, much, a few, a little', zh: 'many, much, a few, a little' },
        { n: '7-6', en: 'Using the', zh: 'the 的用法' },
        { n: '7-7', en: 'Using Ø (no article) to make generalizations', zh: '零冠詞與泛指' },
        { n: '7-8', en: 'Using some and any', zh: 'some 與 any' },
      ],
    },
    {
      n: 8,
      id: 'ch08',
      en: 'Expressing Past Time, Part 1',
      zh: '表達過去時間（一）',
      built: false,
      sections: [
        { n: '8-1', en: 'Using be: past time', zh: 'be 動詞的過去式' },
        { n: '8-2', en: 'Simple past tense of be: negative', zh: 'be 動詞過去式：否定' },
        { n: '8-3', en: 'Past of be: questions', zh: 'be 動詞過去式：問句' },
        { n: '8-4', en: 'Simple past tense: using -ed', zh: '過去簡單式：-ed' },
        { n: '8-5', en: 'Past time words: yesterday, last, and ago', zh: '過去時間用語' },
        { n: '8-6', en: 'Simple past tense: irregular verbs (Group 1)', zh: '不規則動詞（第一組）' },
        { n: '8-7', en: 'Simple past tense: negative', zh: '過去簡單式：否定句' },
        { n: '8-8', en: 'Simple past tense: yes/no questions', zh: '過去簡單式：yes/no 問句' },
        { n: '8-9', en: 'Simple past tense: irregular verbs (Group 2)', zh: '不規則動詞（第二組）' },
        { n: '8-10', en: 'Simple past tense: irregular verbs (Group 3)', zh: '不規則動詞（第三組）' },
        { n: '8-11', en: 'Simple past tense: irregular verbs (Group 4)', zh: '不規則動詞（第四組）' },
      ],
    },
    {
      n: 9,
      id: 'ch09',
      en: 'Expressing Past Time, Part 2',
      zh: '表達過去時間（二）',
      built: false,
      sections: [
        { n: '9-1', en: 'Simple past tense: using where, why, when, and what time', zh: '過去簡單式：疑問詞問句' },
        { n: '9-2', en: 'Questions with what', zh: '用 what 提問' },
        { n: '9-3', en: 'Questions with who and whom', zh: '用 who 與 whom 提問' },
        { n: '9-4', en: 'Simple past tense: irregular verbs (Group 5)', zh: '不規則動詞（第五組）' },
        { n: '9-5', en: 'Simple past tense: irregular verbs (Group 6)', zh: '不規則動詞（第六組）' },
        { n: '9-6', en: 'Simple past tense: irregular verbs (Group 7)', zh: '不規則動詞（第七組）' },
        { n: '9-7', en: 'Before and after in time clauses', zh: '時間子句中的 before 與 after' },
        { n: '9-8', en: 'When in time clauses', zh: '時間子句中的 when' },
        { n: '9-9', en: 'Present progressive and past progressive', zh: '現在進行式與過去進行式' },
        { n: '9-10', en: 'Using while with past progressive', zh: '過去進行式與 while' },
        { n: '9-11', en: 'Simple past tense vs. past progressive', zh: '過去簡單式 vs. 過去進行式' },
      ],
    },
    {
      n: 10,
      id: 'ch10',
      en: 'Expressing Future Time, Part 1',
      zh: '表達未來時間（一）',
      built: false,
      sections: [
        { n: '10-1', en: 'Future time: using be going to', zh: '未來式：be going to' },
        { n: '10-2', en: 'Using present progressive to express future time', zh: '用現在進行式表未來' },
        { n: '10-3', en: 'Words used for past time and future time', zh: '過去與未來的時間用語' },
        { n: '10-4', en: 'Using a couple of or a few with ago (past) and in (future)', zh: 'a couple of / a few 搭配 ago 與 in' },
        { n: '10-5', en: 'Using today, tonight, and this + morning, afternoon, evening, week, month, year', zh: 'today, tonight 與 this ＋ 時間' },
        { n: '10-6', en: 'Future time: using will', zh: '未來式：will' },
        { n: '10-7', en: 'Asking questions with will', zh: '用 will 提問' },
        { n: '10-8', en: 'Verb summary: present, past, and future', zh: '動詞總整理：現在、過去、未來' },
        { n: '10-9', en: 'Verb summary: forms of be', zh: '動詞總整理：be 的各種形式' },
      ],
    },
    {
      n: 11,
      id: 'ch11',
      en: 'Expressing Future Time, Part 2',
      zh: '表達未來時間（二）',
      built: false,
      sections: [
        { n: '11-1', en: 'May/might vs. will', zh: 'may/might vs. will' },
        { n: '11-2', en: 'Maybe (one word) vs. may be (two words)', zh: 'maybe 與 may be' },
        { n: '11-3', en: 'Future time clauses with before, after, and when', zh: '未來的時間子句' },
        { n: '11-4', en: 'Clauses with if', zh: 'if 子句' },
        { n: '11-5', en: 'Expressing future and habitual present with time clauses and if-clauses', zh: '時間子句與 if 子句：未來與習慣' },
        { n: '11-6', en: 'Using what + a form of do', zh: 'what ＋ do 的用法' },
      ],
    },
    {
      n: 12,
      id: 'ch12',
      en: 'Modals, Part 1: Expressing Ability',
      zh: '助動詞（一）：表達能力',
      built: false,
      sections: [
        { n: '12-1', en: 'Using can', zh: 'can 的用法' },
        { n: '12-2', en: "Pronunciation of can and can't", zh: "can 與 can't 的發音" },
        { n: '12-3', en: 'Using can: questions', zh: 'can 的問句' },
        { n: '12-4', en: 'Using know how to', zh: 'know how to' },
        { n: '12-5', en: 'Using could: past of can', zh: 'could：can 的過去式' },
        { n: '12-6', en: 'Using be able to', zh: 'be able to' },
        { n: '12-7', en: 'Using very and too + adjective', zh: 'very 與 too ＋ 形容詞' },
      ],
    },
    {
      n: 13,
      id: 'ch13',
      en: 'Modals, Part 2: Advice, Necessity, Requests, Suggestions',
      zh: '助動詞（二）：建議、必要、請求、提議',
      built: false,
      sections: [
        { n: '13-1', en: 'Using should', zh: 'should 的用法' },
        { n: '13-2', en: 'Using have + infinitive (have to/has to/had to)', zh: 'have to / has to / had to' },
        { n: '13-3', en: 'Using must, have to/has to, and should', zh: 'must, have to 與 should' },
        { n: '13-4', en: 'Polite questions: may I, could I, and can I', zh: '禮貌問句：may I, could I, can I' },
        { n: '13-5', en: 'Polite questions: could you and would you', zh: '禮貌請求：could you, would you' },
        { n: '13-6', en: 'Imperative sentences', zh: '祈使句' },
        { n: '13-7', en: 'Modal auxiliaries', zh: '情態助動詞' },
        { n: '13-8', en: 'Summary chart: modal auxiliaries and similar expressions', zh: '總整理：情態助動詞與類似用法' },
        { n: '13-9', en: "Using let's", zh: "let's 的用法" },
      ],
    },
    {
      n: 14,
      id: 'ch14',
      en: 'Nouns and Modifiers',
      zh: '名詞與修飾語',
      built: false,
      sections: [
        { n: '14-1', en: 'Modifying nouns with adjectives and nouns', zh: '用形容詞與名詞修飾名詞' },
        { n: '14-2', en: 'Word order of adjectives', zh: '形容詞的順序' },
        { n: '14-3', en: 'Linking verbs + adjectives', zh: '連綴動詞 ＋ 形容詞' },
        { n: '14-4', en: 'Adjectives and adverbs', zh: '形容詞與副詞' },
        { n: '14-5', en: 'Expressions of quantity: all of, most of, some of, almost all of', zh: '數量表達' },
        { n: '14-6', en: 'Expressions of quantity: subject-verb agreement', zh: '數量表達：主詞動詞一致' },
        { n: '14-7', en: 'Using every, everyone, everybody, everything', zh: 'every 系列的用法' },
        { n: '14-8', en: 'Indefinite pronouns: something, someone, somebody, anything, anyone, anybody', zh: '不定代名詞' },
      ],
    },
    {
      n: 15,
      id: 'ch15',
      en: 'Making Comparisons',
      zh: '比較的說法',
      built: false,
      sections: [
        { n: '15-1', en: 'The comparative: using -er and more', zh: '比較級：-er 與 more' },
        { n: '15-2', en: 'The superlative: using -est and most', zh: '最高級：-est 與 most' },
        { n: '15-3', en: 'Using one of + superlative + plural noun', zh: 'one of ＋ 最高級 ＋ 複數名詞' },
        { n: '15-4', en: 'Making comparisons with adverbs', zh: '用副詞做比較' },
        { n: '15-5', en: 'Comparisons: using the same (as), similar (to), and different (from)', zh: 'the same as, similar to, different from' },
        { n: '15-6', en: 'Comparisons: using like and alike', zh: 'like 與 alike' },
        { n: '15-7', en: 'Using but', zh: 'but 的用法' },
        { n: '15-8', en: 'Using verbs after but', zh: 'but 後面的動詞' },
      ],
    },
  ],

  /* The reference shelf. Not chapters — things a learner looks up mid-sentence
     rather than works through, so they sit apart from the fifteen. */
  extras: [
    {
      id: 'verbs',
      en: 'Irregular Verbs',
      zh: '不規則動詞總表',
      built: false,
      note: {
        en: 'The seven groups of Chapters 8 and 9, gathered into one searchable list that speaks.',
        zh: '第八、九章分成七組的不規則動詞，整理成一份可搜尋、可發音的清單。',
      },
    },
    {
      id: 'appendix',
      en: 'Appendices 1–5',
      zh: '附錄一至五',
      built: false,
      note: {
        en: 'Handwriting, numbers, telling the time, days and months, capitalisation, and the -s and -ed pronunciation charts.',
        zh: '書寫、數字、時間說法、星期與月份、大寫規則，以及 -s 與 -ed 的發音表。',
      },
    },
  ],
};

/* Flat list of the built chapters, in order — what prev/next walks. */
BOOK.built = BOOK.chapters.filter((c) => c.built);

BOOK.count = BOOK.chapters.reduce((n, c) => n + c.sections.length, 0);

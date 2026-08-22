/* Sentence Upgrades — the 2026/07/25 homework, as a lesson.

   Seven sentences the student wrote, each with the revision from the class
   handout and the collocations that came with it. The handout gives the two
   sentences and the phrase list and nothing else; the note under each revision
   — what changed and why — is written for this page, because on a page nobody
   is standing there to explain it.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for, either line by line
   or with the 中文 switch in the top bar. The sentences themselves have no
   Chinese: the student wrote them, so she already knows what she meant.

   ── The change markers ──────────────────────────────────────────────────
   `original` and `revised` mark what changed with [[double brackets]]:

     original: 'It is [[a difficult task to train]] our employees ...'
     revised:  'It is [[challenging to help]] our employees ...'

   The two strings must carry the same number of marks, in the same order —
   mark 1 in the original became mark 1 in the revision, and tapping either
   lights up both. The renderer throws if the counts disagree, which is the
   error you want: a mismatch means the pairing is wrong, not that the page is
   slightly untidy. Everything outside the brackets is text both versions
   share, so keep it identical or the sentences stop lining up.

   Block types are not needed here — every item has the same four parts, so the
   shape is fixed: original, revised, why, phrases.
*/

const LESSON = {
  title: 'Sentence Upgrades',
  titleZh: '句子升級',
  kicker: '2026/07/25 課後複習',

  intro: {
    en: 'These are your own seven sentences from the class on 25 July, each with the version we ended up with. Most of them are not wrong so much as slightly off — a fixed phrase pulled apart, a word that claims more than you meant. Read your sentence first and say what you would change; then open the revision.',
    zh: '這是你 7/25 課堂上的七個句子，以及最後改出來的版本。它們多半不是錯，而是差了一點──固定搭配被拆開了，或某個字說得比你的本意更滿。先讀自己的句子，說說看你會怎麼改，再打開修改後的版本。',
    goalsEn: 'By the end of this review you will be able to:',
    goalsZh: '複習完這一份後，你將能夠：',
    goals: [
      { en: 'say what changed between your sentence and the revision, and why it matters', zh: '說出原句與修改後的差異，以及為什麼要這樣改' },
      { en: 'use 37 collocations on self-efficacy, confidence, growth and productivity', zh: '運用 37 個關於自我效能、自信、成長與生產力的搭配詞' },
      { en: 'keep a fixed phrase whole instead of translating it word by word', zh: '把固定搭配整組留住，而不是逐字翻譯' },
      { en: 'choose the word that carries your real meaning — tension or conflict, a key driver or the key driver', zh: '選出真正符合你意思的字：tension 還是 conflict、a key driver 還是 the key driver' },
    ],
  },

  source: {
    en: 'From the class handout of 25 July 2026. The original sentences are reproduced as written and the revisions and collocation lists are the handout’s. The note under each revision was written for this page — the handout gives the two sentences and leaves the explaining to the session.',
    zh: '出自 2026 年 7 月 25 日的課堂講義。原句照錄，修改後的版本與搭配詞清單皆來自講義；每則修改下方「改了什麼、為什麼」的說明則是為這個頁面另外寫的──講義只給兩個句子，解釋留在課堂上進行。',
  },

  items: [
    // ================================================================ 1
    {
      id: 'self-efficacy',
      n: 1,
      en: 'Self-efficacy in the workplace',
      zh: '職場中的自我效能',

      original: 'It is [[a difficult task to train]] our employees [[with high]] self-efficacy in the workplace.',
      revised: 'It is [[challenging to help]] our employees [[develop a strong sense of]] self-efficacy in the workplace.',

      why: {
        en: '“Train employees with self-efficacy” treats it as something you install in someone. “Help employees develop a strong sense of self-efficacy” puts the growth in the employee, which is what the word means — and it keeps the collocation whole: develop … a sense of … self-efficacy. “It is challenging” also sounds like a problem worth working on, where “it is a difficult task” sounds like a complaint.',
        zh: '「train employees with self-efficacy」把自我效能當成可以直接裝進別人身上的東西。「help employees develop a strong sense of self-efficacy」則把成長放回員工身上，這才是這個字的意思，也保住了完整的搭配：develop … a sense of … self-efficacy。另外，It is challenging 聽起來是值得投入的難題，It is a difficult task 比較像抱怨。',
      },

      phrases: [
        { en: 'develop self-efficacy', zh: '培養自我效能' },
        { en: 'a strong sense of self-efficacy', zh: '強烈的自我效能感' },
        { en: 'build employees’ confidence', zh: '建立員工的自信' },
        { en: 'perform effectively at work', zh: '在工作中有效地發揮' },
        { en: 'overcome workplace challenges', zh: '克服職場挑戰' },
      ],
    },

    // ================================================================ 2
    {
      id: 'believe',
      n: 2,
      en: 'Believe in one’s ability',
      zh: '相信自己的能力',

      original: 'Parents should [[build up children’s confidence to]] believe in their ability to do [[chores]].',
      revised: 'Parents should [[build their children’s confidence and encourage them to]] believe in their ability to do [[household chores]].',

      why: {
        en: 'Written as one clause, “build up confidence to believe” makes the confidence do the believing. Splitting it into two verbs — build their confidence, then encourage them to believe — says who is doing what, and both halves are collocations in their own right. “Chores” on its own can be any dull job, including one at work; “household chores” is the one you mean.',
        zh: '寫成一個子句時，「build up confidence to believe」會讓 confidence 變成「相信」的主體。拆成兩個動詞──先 build their confidence，再 encourage them to believe──誰做什麼就清楚了，而且兩半本身都是固定搭配。另外，chores 單獨用可以指任何雜事，包括工作上的；household chores 才是你要說的家事。',
      },

      phrases: [
        { en: 'believe in one’s ability', zh: '相信自己的能力' },
        { en: 'build someone’s confidence', zh: '建立某人的自信' },
        { en: 'encourage children to do something', zh: '鼓勵孩子做某事' },
        { en: 'do household chores', zh: '做家事' },
        { en: 'take responsibility for chores', zh: '負責做家事' },
      ],
    },

    // ================================================================ 3
    {
      id: 'potential',
      n: 3,
      en: 'Complete a task successfully',
      zh: '成功完成任務',

      original: 'Everyone has [[his]] potential to complete a task [[successfully depending on his willingness]].',
      revised: 'Everyone has [[the]] potential to complete a task [[successfully, depending on their willingness to make an effort]].',

      why: {
        en: 'The fixed phrase is “have the potential to”, not “have his potential” — the article is part of the expression. “Everyone … their” is standard modern English and does not assume the person is a man. The comma matters too: without it, “depending on his willingness” attaches itself to “successfully”, and willingness is left hanging — willingness to do what?',
        zh: '固定用法是 have the potential to，不是 have his potential──the 是這個說法的一部分。everyone 後面接 their 是現代英文的標準用法，也不會預設對方是男性。逗號同樣重要：少了它，depending on his willingness 會黏到 successfully 上，而且 willingness 沒說完──願意做什麼？',
      },

      phrases: [
        { en: 'complete a task successfully', zh: '成功完成任務' },
        { en: 'have the potential to do something', zh: '有潛力做某事' },
        { en: 'make an effort', zh: '努力' },
        { en: 'show willingness to learn', zh: '展現學習意願' },
        { en: 'achieve the desired result', zh: '達成預期成果' },
      ],
    },

    // ================================================================ 4
    {
      id: 'boost',
      n: 4,
      en: 'Boost self-efficacy',
      zh: '提升自我效能',

      original: '[[Use]] different [[ways]] to boost employees’ self-efficacy [[base on]] their [[different]] personalities.',
      revised: '[[We should use]] different [[approaches]] to boost employees’ self-efficacy [[based on]] their [[individual]] personalities.',

      why: {
        en: '“Base on” is the one that has to be fixed: the phrase is “based on”, a past participle, and it never loses the -d. The rest is precision. “Approaches” suggests a considered method where “ways” is neutral; “individual” avoids using “different” twice in one sentence; and “We should use” gives the sentence a subject — as written it is an instruction to whoever is reading it.',
        zh: 'base on 是一定要改的：正確寫法是 based on，它是過去分詞，-d 不會掉。其餘是精準度的問題。approaches 帶有「經過思考的做法」，ways 只是中性的方式；individual 避免一句話裡出現兩個 different；加上 We should，句子才有主詞──原句是祈使句，等於在指示讀的人。',
      },

      phrases: [
        { en: 'boost self-efficacy', zh: '提升自我效能' },
        { en: 'use different approaches', zh: '採用不同方法' },
        { en: 'based on individual personalities', zh: '根據個人性格' },
        { en: 'provide personalized support', zh: '提供個人化支持' },
        { en: 'recognize individual differences', zh: '認識個體差異' },
      ],
    },

    // ================================================================ 5
    {
      id: 'growth',
      n: 5,
      en: 'Continuous business growth',
      zh: '持續的企業成長',

      original: 'A company culture shaped by [[the]] owner [[is the key driver for continuous]] business growth.',
      revised: 'A company culture shaped by [[its]] owner [[can be a key driver of sustainable]] business growth.',

      why: {
        en: '“The key driver” says it is the only one, which is hard to defend; “a key driver” says it is one of the important ones, which is what you mean. The preposition belongs to the noun — a driver of growth, never for growth — and “sustainable growth” is the business term for growth a company can keep up, where “continuous” only means it does not stop. “Its owner” ties the owner to that company rather than to owners in general.',
        zh: 'the key driver 等於說「唯一的關鍵」，很難站得住；a key driver 是「重要因素之一」，才是你的意思。介系詞跟著名詞走──a driver of growth，不會是 for growth；sustainable growth 是商業上「撐得下去的成長」，continuous 只表示「不中斷」。its owner 則把老闆綁回這家公司，而不是泛指所有老闆。',
      },

      phrases: [
        { en: 'sustainable business growth', zh: '永續的企業成長' },
        { en: 'a key driver of growth', zh: '成長的關鍵驅動力' },
        { en: 'shape company culture', zh: '塑造企業文化' },
        { en: 'promote long-term growth', zh: '促進長期成長' },
        { en: 'build a strong organizational culture', zh: '建立強健的組織文化' },
      ],
    },

    // ================================================================ 6
    {
      id: 'productive',
      n: 6,
      en: 'Become more productive',
      zh: '變得更有生產力',

      original: 'There [[is a conflict]] between employees and supervisors over [[becoming more productive, because]] employees [[think they will be given more duties]].',
      revised: 'There [[may be tension]] between employees and supervisors over [[productivity because]] employees [[fear that becoming more productive will lead to additional responsibilities]].',

      why: {
        en: '“Conflict” is an open dispute; “tension” is the unspoken strain you are describing, and “may be” leaves room for the workplaces where it is not true. “Fear” says why people resist, where “think” is neutral. The rest is tidying: “over productivity” is shorter than “over becoming more productive”, and putting the cause and its effect in one clause — becoming more productive will lead to additional responsibilities — makes the worry easy to follow.',
        zh: 'conflict 是攤開來的衝突，tension 才是你描述的那種說不出口的緊繃；may be 也給「不是每個職場都這樣」留了餘地。fear 說明了他們為什麼抗拒，think 太中性。其餘是修整：over productivity 比 over becoming more productive 精簡，而把原因與結果收進同一個子句──becoming more productive will lead to additional responsibilities──讓這份擔心一看就懂。',
      },

      phrases: [
        { en: 'become more productive', zh: '變得更有生產力' },
        { en: 'improve workplace productivity', zh: '提升職場生產力' },
        { en: 'lead to additional responsibilities', zh: '導致額外責任' },
        { en: 'increase employees’ workload', zh: '增加員工工作量' },
        { en: 'cause tension between employees and supervisors', zh: '造成員工與主管之間的緊張關係' },
      ],
    },

    // ================================================================ 7
    {
      id: 'support',
      n: 7,
      en: 'Support one another',
      zh: '互相支持',

      original: '[[I noticed]] that the younger generation is [[weak at]] supporting one another. I often tell my son, “If we have the [[talent]] to help others, we should [[do it; we will get benefit from it]] without expecting [[any return]].”',
      revised: '[[I have noticed]] that the younger generation is [[not always good at]] supporting one another. I often tell my son, “If we have the [[ability]] to help others, we should [[do so. We can benefit from helping others]] without expecting [[anything in return]].”',

      why: {
        en: '“I have noticed” is something you still think; “I noticed” closes it into one finished moment. “Not always good at” leaves room in a judgement about a whole generation, and “ability” is the ordinary word where “talent” means a rare gift most people do not have. The last two are fixed: “benefit” is already the verb, so “get benefit from” is not English, and the set phrase is “without expecting anything in return”.',
        zh: 'I have noticed 表示你到現在仍這麼覺得；I noticed 會把它關進過去的某一刻。not always good at 讓「整個世代」這樣的評語留有餘地；ability 是一般人的能力，talent 指的是多數人沒有的天分。最後兩處是固定用法：benefit 本身就是動詞，get benefit from 不是英文的說法，而完整的片語是 without expecting anything in return。',
      },

      phrases: [
        { en: 'support one another', zh: '互相支持' },
        { en: 'have the ability to help others', zh: '有能力幫助他人' },
        { en: 'offer help to someone', zh: '向某人提供幫助' },
        { en: 'benefit from helping others', zh: '從幫助他人中受益' },
        { en: 'expect something in return', zh: '期待得到回報' },
        { en: 'without expecting anything in return', zh: '不求任何回報' },
        { en: 'develop a supportive attitude', zh: '培養互助的態度' },
      ],
    },
  ],

  /* The closing section. Both halves are the material again rather than
     anything new: the seven revised sentences to read aloud in one go, and
     every collocation in one list with the Chinese covered. */
  review: {
    id: 'review',
    en: 'All together',
    zh: '總複習',

    leadEn: 'The seven sentences as they now stand, and every phrase in one place.',
    leadZh: '七個句子最後的樣子，以及所有搭配詞集中在一處。',

    readEn: 'Read them aloud',
    readZh: '朗讀',
    readHintEn: 'One after another, without stopping. Tap 🔊 to hear a line first.',
    readHintZh: '一句接一句讀完，中間不要停。想先聽一次就點 🔊。',

    listEn: 'All 37 collocations',
    listZh: '全部 37 個搭配詞',
    listHintEn: 'The Chinese is covered. Say it before you tap the row — then go back the other way, covering the English and saying the phrase.',
    listHintZh: '中文是蓋住的。先自己說一次再點開該列；然後反過來，蓋住英文，把片語說出來。',

    headN: { en: '#', zh: '句' },
    headEn: { en: 'Collocation', zh: '搭配詞' },
    headZh: { en: 'Meaning', zh: '中文' },
  },
};

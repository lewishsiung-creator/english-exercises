/* Describe a Person — IELTS Speaking Part 2, adult one-to-one.

   WRITTEN FOR THIS SITE. The cards, the model answer, the language and all the
   Chinese are the site's.

   Teach the-one-minute-plan first.

   The commonest card family, and the one where candidates produce a list of
   adjectives and run dry at fifty seconds. Adjectives are not a minute of
   speech — they are a sentence. The lesson's whole move is to replace them
   with one scene.
*/

const LESSON = {
  id: 'describe-a-person',
  title: 'Describe a Person',
  titleZh: '描述一個人',

  intro: {
    en: 'Nearly every candidate answers this card with adjectives: kind, hard-working, generous, patient. Four adjectives is about eight seconds and then there is nothing left. One scene — a single time this person did something — is a minute and a half and cannot be memorised.',
    zh: '幾乎每個考生都用形容詞回答這類卡片：善良、努力、慷慨、有耐心。四個形容詞大約八秒，然後就沒了。而「一個場景」——這個人做過某件事的某一次——可以撐一分半，而且背不起來。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'replace a list of adjectives with one remembered scene', zh: '用一個記得的場景，取代一串形容詞' },
      { en: 'prove a quality instead of naming it', zh: '證明一個特質，而不是說出它的名字' },
      { en: 'describe a relationship in natural spoken English', zh: '用自然口語描述一段關係' },
      { en: 'answer any “describe a person” card with one prepared person', zh: '用同一個人，應付任何「描述一個人」的卡片' },
    ],
  },

  source: {
    en: 'Written for this page. The cards, the answer, the language and the Chinese are the site’s.',
    zh: '本頁為本站自行撰寫。卡片、答案、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'one-scene',
      n: 1,
      en: 'One scene beats five adjectives',
      zh: '一個場景勝過五個形容詞',
      blocks: [
        {
          t: 'cue',
          en: 'Describe a person who has influenced you.',
          zh: '描述一個影響過你的人。',
          bullets: [
            { en: 'who the person is', zh: '這個人是誰' },
            { en: 'how you know them', zh: '你怎麼認識他們的' },
            { en: 'what kind of person they are', zh: '他們是什麼樣的人' },
          ],
          closeEn: 'and explain how they have influenced you.',
          closeZh: '並說明他們如何影響了你。',
        },
        {
          t: 'upgrade',
          en: 'The adjectives, and the scene',
          zh: '形容詞，與場景',
          hintEn: 'Both describe the same person. One of them lasts two minutes.',
          hintZh: '兩段描述的是同一個人。其中一段能撐兩分鐘。',
          beforeTag: 'About twenty seconds', beforeTagZh: '大約二十秒',
          beforeEn: 'The person who has influenced me most is my former manager. She is a very kind and patient person, and she is also hard-working and responsible. She always helps her colleagues and she has a positive attitude. I admire her very much and she has influenced me a lot.',
          beforeZh: '影響我最深的人是我以前的主管。她是個非常善良、有耐心的人，也很努力、有責任感。她總是幫助同事，態度正向。我非常欽佩她，她對我影響很大。',
          adds: [
            { en: 'one time she did something — a day, a room, a problem', zh: '她做過某件事的「那一次」——哪一天、哪個場合、什麼問題' },
            { en: 'what she actually said', zh: '她實際說了什麼' },
            { en: 'what you do differently now because of it', zh: '因為那件事，你現在做法有什麼不同' },
          ],
          afterTag: 'Over a minute, and unmemorisable', afterTagZh: '超過一分鐘，而且背不來',
          afterEn: 'The person who’s influenced me most is probably my first manager, Hsiao-fen. I worked under her for about three years when I joined the company. I could say she was patient, but what I actually remember is one afternoon when I’d made a fairly expensive mistake — I’d signed off a batch that had to be scrapped. I went to her office expecting to be taken apart. She listened to the whole thing, and then she asked me one question: what would you check next time? That was it. No lecture. And the thing is, I have checked it every time since — which is more than any telling-off would have achieved.',
          afterZh: '影響我最深的人大概是我的第一位主管，小芬。我剛進公司時在她底下做了大約三年。我可以說她很有耐心，但我真正記得的是某個下午——我犯了一個代價不小的錯，簽核了一批後來必須報廢的貨。我走進她辦公室，以為會被罵得很慘。她把整件事聽完，然後只問了我一個問題：下次你會檢查什麼？就這樣。沒有訓話。而重點是，從那之後我每一次都檢查了——這是任何一頓罵都達不到的效果。',
        },
        {
          t: 'note',
          en: 'Notice the adjective is still there',
          zh: '注意那個形容詞其實還在',
          bodyEn: '“I could say she was patient, but what I actually remember is…” keeps the word and then earns it. That one sentence is worth copying exactly — it works on every describe-a-person card, it sounds like thinking rather than reciting, and it buys you the three seconds you need to find the scene.',
          bodyZh: '「我可以說她很有耐心，但我真正記得的是……」——形容詞留著，然後用事實把它掙回來。這一句值得原封不動學起來：它適用於每一張「描述一個人」的卡片，聽起來像在思考而不是在背，而且替你爭取到找出場景所需的那三秒。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'the-language',
      n: 2,
      en: 'The language a person card needs',
      zh: '人物卡片需要的語言',
      blocks: [
        {
          t: 'frames',
          en: 'How you know them',
          zh: '你怎麼認識他們的',
          hintEn: 'The second bullet is usually one sentence. These are the sentences.',
          hintZh: '第二個提示通常一句話就夠。就是這些句子。',
          items: [
            { en: 'I worked under her for about three years.', zh: '我在她底下工作了大約三年。' },
            { en: 'We’ve known each other since school.', zh: '我們從學生時代就認識了。' },
            { en: 'She’s a friend of my sister’s, originally.', zh: '她原本是我姐姐的朋友。' },
            { en: 'We met through work, and we stayed in touch.', zh: '我們因為工作認識，後來一直有聯絡。' },
            { en: 'I’ve never actually met him — I just follow his work.', zh: '我其實沒見過他本人——只是一直在看他的作品。' },
          ],
        },
        {
          t: 'bank',
          en: 'Describing what someone is like',
          zh: '描述一個人是什麼樣的人',
          hintEn: 'These do more work than an adjective, because each one implies a scene.',
          hintZh: '這些比形容詞更有用，因為每一個背後都藏著一個場景。',
          rows: [
            { en: 'she doesn’t say much, but when she does', zh: '她話不多，但只要一開口' },
            { en: 'he’s the first person I’d call if', zh: '如果……，他是我第一個會打電話的人' },
            { en: 'she has a way of making people feel ________', zh: '她有一種讓人覺得 ________ 的本事' },
            { en: 'he never made me feel stupid for asking', zh: '他從不讓我覺得問問題是件蠢事' },
            { en: 'she’s completely unflappable', zh: '她遇事從來不慌' },
            { en: 'he takes people seriously', zh: '他認真看待別人' },
            { en: 'she’s generous with her time, which is rarer', zh: '她願意給別人時間，而那更難得' },
            { en: 'the kind of person who ________', zh: '那種會 ________ 的人' },
            { en: 'I’ve never once heard her ________', zh: '我一次都沒聽過她 ________' },
            { en: 'it rubbed off on me', zh: '這點感染了我' },
          ],
        },
        {
          t: 'note',
          en: 'One person covers the whole family',
          zh: '一個人就能應付整個題型家族',
          bodyEn: 'The cards vary — someone you admire, someone who influenced you, an older person you respect, a good teacher, a person who helped you — but they all want the same thing. Prepare one person properly and one scene about them, and adapt the opening sentence to whatever the card actually says. That is preparation, not memorisation, because the scene is told fresh each time.',
          bodyZh: '卡片有很多種——你欽佩的人、影響你的人、你尊敬的長輩、一位好老師、幫助過你的人——但它們要的是同一樣東西。把一個人、一個場景好好準備起來，再依照卡片實際的措辭調整第一句就行。這是「準備」而不是「背誦」，因為那個場景每次都是現講的。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'practice',
      n: 3,
      en: 'Practice',
      zh: '練習',
      blocks: [
        {
          t: 'cue',
          en: 'Describe an older person you respect.',
          zh: '描述一位你尊敬的長輩。',
          bullets: [
            { en: 'who they are', zh: '他們是誰' },
            { en: 'how long you have known them', zh: '你認識他們多久了' },
            { en: 'what they are like', zh: '他們是什麼樣的人' },
          ],
          closeEn: 'and explain why you respect them.',
          closeZh: '並說明你為什麼尊敬他們。',
        },
        {
          t: 'pad',
          en: 'Plan it in sixty seconds',
          zh: '用六十秒規劃',
          hintEn: 'Key words only. Plan the “why” first, as always.',
          hintZh: '只寫關鍵字。一如往常，先想「為什麼」。',
          rows: [
            {
              en: 'Why you respect them — the ending',
              zh: '你尊敬他們的原因——結尾',
              ideas: [
                { en: 'never made me feel stupid for asking', zh: '從不讓我覺得問問題很蠢' },
                { en: 'carried on long after anyone would have stopped', zh: '在任何人都會放棄之後，他還繼續做' },
              ],
            },
            {
              en: 'The scene — one time, one place',
              zh: '場景——某一次，某個地方',
              ideas: [
                { en: 'the afternoon I made the expensive mistake', zh: '我犯下那個昂貴錯誤的那個下午' },
                { en: 'the summer she taught me to ________', zh: '她教我 ________ 的那個夏天' },
              ],
            },
            {
              en: 'Who · how long · what they are like',
              zh: '是誰 · 多久 · 什麼樣的人',
              ideas: [
                { en: 'first manager / three years / says little', zh: '第一位主管／三年／話很少' },
                { en: 'my grandmother / all my life / unflappable', zh: '我外婆／一輩子／遇事不慌' },
              ],
            },
          ],
        },
        {
          t: 'clock',
          en: 'The real thing',
          zh: '完整實戰',
        },
        {
          t: 'task',
          en: 'Say it',
          zh: '說出來',
          instructionEn: 'One minute to plan, then speak until you are stopped. Record it and listen back.',
          instructionZh: '一分鐘規劃，然後一直說到被喊停。錄下來回聽。',
          checklist: [
            { en: 'You told one scene, not a list of qualities', zh: '你講了一個場景，不是一串特質' },
            { en: 'Something they actually said', zh: '有他們實際說過的話' },
            { en: 'You said what you do differently now', zh: '你說出了自己現在做法有什麼不同' },
            { en: 'No more than two adjectives in the whole answer', zh: '整段回答裡形容詞不超過兩個' },
            { en: 'You were still talking at 1:30', zh: '一分半時你還在說' },
          ],
        },
      ],
    },
  ],
};

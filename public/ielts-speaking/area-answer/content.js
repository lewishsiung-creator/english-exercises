/* The A.R.E.A. Answer — IELTS Speaking Part 3, adult one-to-one.

   The default answer shape for the whole course: one structure that works on
   most Part 3 questions, so a candidate who freezes still has somewhere to go.
   Teach it before answer-shapes, which refines it into four question-specific
   structures, and before ninety-seconds, which stretches it to a long answer.

   All of the material — the formula, the phrases, the worked answer, the
   upgrade and P.E.E.L. — comes from the A.R.E.A. strategy document, in both
   languages. Two editorial decisions were made in bringing it onto the page:

   - The document's per-step phrase lists and its separate table of Band 7
     connectors overlap heavily — "The main reason is that…" appears in both.
     They are merged here into one list per move, so each move has a single
     bank rather than two lists a teacher has to reconcile mid-session.
   - The formula is four letters but the document's walkthrough has five steps,
     the fifth being the closing judgment. That is kept and named as what it
     is: A.R.E.A., plus the sentence that lands it.
*/

const LESSON = {
  id: 'area-answer',
  title: 'The A.R.E.A. Answer',
  titleZh: 'A.R.E.A. 四步回答法',

  intro: {
    en: 'One shape that fits most Part 3 questions. It is not clever and it is not meant to be — its job is to be the thing you can still do when the question surprises you.',
    zh: '一個適用於大部分 Part 3 題目的架構。它不花俏，也不需要花俏——它的任務是：當題目出乎你意料時，你仍然做得出來。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'answer directly in your first sentence instead of warming up', zh: '第一句就直接回答，而不是先暖身' },
      { en: 'give one strong reason rather than three weak ones', zh: '給一個有力的理由，而不是三個薄弱的理由' },
      { en: 'reach for a concrete example without pausing to invent one', zh: '不必停下來想，就能舉出具體的例子' },
      { en: 'add the balancing sentence that makes an answer sound considered', zh: '加上讓回答顯得成熟的那一句平衡補充' },
      { en: 'close on a judgment instead of trailing off', zh: '以一個判斷收尾，而不是逐漸消音' },
      { en: 'fall back on P.E.E.L. when your mind goes blank', zh: '在腦中一片空白時，退回 P.E.E.L. 這個備案' },
    ],
  },

  source: {
    en: 'The formula, phrases, worked answer and examples on this page are taken from the A.R.E.A. strategy material for this course, in both languages.',
    zh: '本頁的架構、句型、示範答案與例句取自本課程的 A.R.E.A. 策略教材，中英文皆依教材原文。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'four-moves',
      n: 1,
      en: 'Four moves, in order',
      zh: '四個動作，照順序',
      blocks: [
        {
          t: 'lead',
          en: 'Most weak Part 3 answers fail in one of three ways: too short, too obviously memorised, or all on one side. A.R.E.A. is built to make all three hard to do.',
          zh: 'Part 3 的弱回答，多半敗在三件事之一：太短、太明顯是背的，或者只講一面。A.R.E.A. 就是為了讓這三件事都難以發生而設計的。',
        },
        {
          t: 'shapes',
          en: 'The formula',
          zh: '架構本身',
          hintEn: 'Tap the card to see the four moves and how each one starts.',
          hintZh: '點卡片可看四個動作，以及每個動作的開頭方式。',
          items: [
            {
              tag: 'A',
              name: 'A.R.E.A.',
              nameZh: '四步回答法',
              whenEn: 'The default. Use it on any discussion question you have no better plan for.',
              whenZh: '預設架構。任何你沒有更好計畫的討論題，都可以用它。',
              buckets: [
                { en: 'A — Answer directly', zh: 'A — 直接回答問題' },
                { en: 'R — Reason', zh: 'R — 給原因' },
                { en: 'E — Example', zh: 'E — 給例子' },
                { en: 'A — Add balance', zh: 'A — 補充另一面' },
              ],
              lines: [
                { en: 'Yes, I think so, especially when ________.', zh: '是的，我認為是，特別是當 ________。' },
                { en: 'The main reason is that ________.', zh: '主要原因是 ________。' },
                { en: 'For example, ________.', zh: '例如，________。' },
                { en: 'That said, ________.', zh: '話雖如此，________。' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'The second A is the one that moves a score',
          zh: '第二個 A 才是拉分的關鍵',
          bodyEn: 'Answer, reason and example are what most candidates already do. What separates a Band 7 answer is the sentence that concedes the other side without abandoning your position — it is the only part of the formula that shows you can hold two ideas at once.',
          bodyZh: '回答、原因、例子，多數考生本來就會做。真正把 Band 7 分出來的，是那一句「承認另一面但不放棄立場」的補充——它是整個架構裡唯一能顯示你同時掌握兩個想法的部分。',
        },
        {
          t: 'note',
          en: 'Four letters, five sentences',
          zh: '四個字母，五句話',
          bodyEn: 'A.R.E.A. names four moves, but a finished answer needs a fifth: the short judgment that closes it. Without it an answer stops rather than ends, and the balancing sentence is left standing as your final word — which reads as indecision.',
          bodyZh: 'A.R.E.A. 只點出四個動作，但完整的回答還需要第五句：收尾的簡短判斷。少了它，回答只是「停住」而不是「講完」，而且平衡那一句會變成你的最後一句話——聽起來就像沒有主見。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'move-by-move',
      n: 2,
      en: 'What each move sounds like',
      zh: '每個動作怎麼說',
      blocks: [
        {
          t: 'lead',
          en: 'Five short banks, one per move. Pick one phrase from each and you have a whole answer’s skeleton before you have thought about the topic at all.',
          zh: '五個小字庫，每個動作一個。從每一個裡各挑一句，你就在還沒想主題之前，先有了整個回答的骨架。',
        },
        {
          t: 'frames',
          en: '1 · Answer directly',
          zh: '1 · 直接回答',
          hintEn: 'Start with a clear opinion. Tap 🔊 to hear one.',
          hintZh: '一開口就給明確立場。點 🔊 可聽一次。',
          items: [
            { en: 'I think it depends on the situation.', zh: '我認為這要看情況。' },
            { en: 'Yes, I think so, especially when ________.', zh: '是的，我認為是，特別是當 ________。' },
            { en: 'No, not always. I think ________.', zh: '不，不一定。我認為 ________。' },
            { en: 'In general, I would say yes, but there are some exceptions.', zh: '一般來說我會說是，但也有一些例外。' },
            { en: 'To a large extent, yes.', zh: '很大程度上，是的。' },
            { en: 'Not necessarily.', zh: '不一定。' },
            { en: 'I tend to think that ________.', zh: '我傾向認為 ________。' },
            { en: 'In my view, ________.', zh: '在我看來，________。' },
          ],
        },
        {
          t: 'frames',
          en: '2 · One clear reason',
          zh: '2 · 一個清楚的理由',
          hintEn: 'One strong reason beats three weak ones. Do not stack them.',
          hintZh: '一個有力的理由勝過三個薄弱的理由。不要一直疊加。',
          items: [
            { en: 'The main reason is that ________.', zh: '主要原因是 ________。' },
            { en: 'One reason is that ________.', zh: '一個原因是 ________。' },
            { en: 'This is because ________.', zh: '這是因為 ________。' },
            { en: 'This is mainly because ________.', zh: '這主要是因為 ________。' },
            { en: 'The problem is that ________.', zh: '問題是 ________。' },
            { en: 'One possible explanation is that ________.', zh: '一個可能的解釋是 ________。' },
            { en: 'This can lead to ________.', zh: '這可能導致 ________。' },
            { en: 'As a result, ________.', zh: '因此，________。' },
          ],
        },
        {
          t: 'frames',
          en: '3 · A specific example',
          zh: '3 · 一個具體的例子',
          hintEn: 'An answer with a real example in it sounds unmemorised, because a memorised answer rarely has one.',
          hintZh: '帶有真實例子的回答，聽起來就不像背的——因為背出來的答案很少有例子。',
          items: [
            { en: 'For example, ________.', zh: '例如，________。' },
            { en: 'For instance, ________.', zh: '舉例來說，________。' },
            { en: 'A good example would be ________.', zh: '一個好的例子是 ________。' },
            { en: 'This is especially true for ________.', zh: '這對 ________ 尤其如此。' },
            { en: 'In my country, ________.', zh: '在我的國家，________。' },
          ],
        },
        {
          t: 'frames',
          en: '4 · Add balance',
          zh: '4 · 補充另一面',
          hintEn: 'Concede, then stay where you were. This is the Band 7 move.',
          hintZh: '先讓步，然後守住原本的立場。這就是 Band 7 的關鍵動作。',
          items: [
            { en: 'That said, ________.', zh: '話雖如此，________。' },
            { en: 'However, this does not mean that ________.', zh: '然而，這不代表 ________。' },
            { en: 'On the other hand, ________.', zh: '另一方面，________。' },
            { en: 'At the same time, ________.', zh: '同時，________。' },
            { en: 'There are some exceptions.', zh: '也有一些例外。' },
          ],
        },
        {
          t: 'frames',
          en: '5 · Final judgment',
          zh: '5 · 收尾的判斷',
          hintEn: 'Short. One sentence, and stop talking.',
          hintZh: '要短。一句話，然後停下來。',
          items: [
            { en: 'So overall, I would say ________.', zh: '所以整體來說，我會說 ________。' },
            { en: 'In the end, the key is to ________.', zh: '最後，關鍵是要 ________。' },
            { en: 'So I think the best approach is ________.', zh: '所以我認為最好的做法是 ________。' },
            { en: 'It depends on how ________.', zh: '這取決於如何 ________。' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'one-answer',
      n: 3,
      en: 'One answer, built move by move',
      zh: '一個回答，逐步搭出來',
      blocks: [
        {
          t: 'lead',
          en: 'The same question, answered with one phrase taken from each bank. Try it yourself before opening the model.',
          zh: '同一道題，用每個字庫各挑一句話組成。先自己試一次，再打開示範。',
        },
        {
          t: 'question',
          en: 'Should companies be allowed to delete negative reviews?',
          zh: '公司應該被允許刪除負面評論嗎？',
          shape: 'A.R.E.A.',
          shapeZh: '四步回答法',
        },
        {
          t: 'model',
          en: 'A Band 7 answer, in five parts',
          zh: 'Band 7 的回答，分成五個部分',
          hintEn: 'Each part does exactly one job. Listen to the whole thing first, then part by part.',
          hintZh: '每一部分只做一件事。先整段聽一次，再一部分一部分聽。',
          parts: [
            {
              tag: 'Answer', tagZh: '直接回答',
              en: 'Yes, I think companies should be allowed to delete negative reviews, but only under certain conditions.',
              zh: '是的，我認為公司應該被允許刪除負面評論，但僅限於特定情況下。',
            },
            {
              tag: 'Reason', tagZh: '原因',
              en: 'The main reason is that some reviews may be fake, offensive, or completely unrelated to the actual customer experience.',
              zh: '主要原因是，有些評論可能是假的、帶有攻擊性，或者和實際的顧客經驗完全無關。',
            },
            {
              tag: 'Example', tagZh: '例子',
              en: 'For example, if someone writes a false review about a restaurant’s hygiene, it could seriously damage the business, especially if it is a small company that depends heavily on word-of-mouth.',
              zh: '例如，如果有人寫了一則關於某家餐廳衛生的不實評論，可能會嚴重傷害這門生意，特別是當它是一間高度仰賴口碑的小公司。',
            },
            {
              tag: 'Balance', tagZh: '另一面',
              en: 'That said, companies should not delete honest negative reviews just because they make the company look bad. If customers had a genuinely bad experience, they should have the right to share it.',
              zh: '話雖如此，公司不應該只因為負面評論讓自己難看，就刪掉誠實的評論。如果顧客確實有過不好的經驗，他們應該有權利說出來。',
            },
            {
              tag: 'Judgment', tagZh: '判斷',
              en: 'So overall, the key is to protect honest criticism while preventing abuse.',
              zh: '所以整體來說，關鍵是要保護誠實的批評，同時防止濫用。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'upgrade',
      n: 4,
      en: 'The Band 7 upgrade',
      zh: 'Band 7 升級',
      blocks: [
        {
          t: 'lead',
          en: 'Most candidates already produce the first version below. The gap between it and the second is not vocabulary — it is three missing moves.',
          zh: '多數考生已經說得出下面第一個版本。它和第二個版本之間的差距不在字彙，而在三個缺席的動作。',
        },
        {
          t: 'upgrade',
          en: 'Same opinion, two answers',
          zh: '同樣的立場，兩種回答',
          hintEn: 'Read the thin version, decide what you would add, then open the upgrade.',
          hintZh: '先讀薄的版本，想想你會加什麼，再打開升級版。',
          beforeTag: 'Too simple', beforeTagZh: '太簡單',
          beforeEn: 'Yes, I agree. Online reviews are useful because they help people.',
          beforeZh: '是的，我同意。線上評論很有用，因為它們幫助人們。',
          adds: [
            { en: 'a specific reason', zh: '一個具體的理由' },
            { en: 'a realistic example', zh: '一個真實的例子' },
            { en: 'a balanced view', zh: '一個平衡的觀點' },
          ],
          afterTag: 'Band 7', afterTagZh: 'Band 7 版本',
          afterEn: 'Yes, I agree to a large extent. Online reviews are useful because they reduce uncertainty before people spend money. For example, before booking a hotel, customers can check whether previous guests complained about noise, cleanliness, or poor service. However, people should not trust every review blindly because some reviews may be fake or exaggerated. So overall, reviews are helpful, but only if people read them critically.',
          afterZh: '是的，我很大程度上同意。線上評論很有用，因為它們能在人們花錢之前降低不確定性。例如，在訂飯店之前，顧客可以查看之前的房客是否抱怨過噪音、清潔或服務不佳。然而，人們不應該盲目相信每一則評論，因為有些可能是假的或誇大的。所以整體來說，評論是有幫助的，但前提是人們用批判性的方式閱讀它們。',
        },
        {
          t: 'note',
          en: 'Longer is not the point',
          zh: '重點不是講得更長',
          bodyEn: 'The upgraded answer is longer, but length is a side effect. What the examiner hears is that you gave a reason someone could disagree with, an example that could be checked, and a limit on your own claim. Padding the thin answer to the same length would score the same as the thin answer.',
          bodyZh: '升級後的回答比較長，但長度只是副產物。考官聽到的是：你給了一個別人可以反駁的理由、一個可以被檢驗的例子，以及對自己主張設下的界線。把薄的版本灌水到同樣長度，分數還是跟薄的版本一樣。',
        },
      ],
    },

    // ------------------------------------------------------------ step 5
    {
      id: 'peel',
      n: 5,
      en: 'When you freeze: P.E.E.L.',
      zh: '腦中空白時：P.E.E.L.',
      blocks: [
        {
          t: 'lead',
          en: 'A shorter emergency version, for the question that empties your head. Four moves, no balancing sentence to worry about.',
          zh: '一個更短的緊急版本，給那種讓你腦中一片空白的題目。四個動作，不必煩惱平衡那一句。',
        },
        {
          t: 'shapes',
          en: 'The emergency formula',
          zh: '緊急架構',
          hintEn: 'Tap the card to see the four moves, with one worked answer.',
          hintZh: '點卡片可看四個動作，以及一個完整示範。',
          items: [
            {
              tag: 'P',
              name: 'P.E.E.L.',
              nameZh: '四步應急法',
              whenEn: 'For when your mind goes blank. Simple, stable and IELTS-safe.',
              whenZh: '腦中一片空白時使用。簡單、穩定，而且在 IELTS 裡不會出錯。',
              buckets: [
                { en: 'P — Point', zh: 'P — 給立場' },
                { en: 'E — Explain', zh: 'E — 說明原因' },
                { en: 'E — Example', zh: 'E — 給例子' },
                { en: 'L — Link back', zh: 'L — 扣回題目' },
              ],
              lines: [
                { en: 'I think online reviews are useful.', zh: '我認為線上評論很有用。' },
                { en: 'They help customers reduce risk before spending money.', zh: '它們幫助顧客在花錢之前降低風險。' },
                { en: 'For example, people can check hotel reviews before booking.', zh: '例如，人們可以在訂房前查看飯店評論。' },
                { en: 'So overall, reviews play an important role in buying decisions.', zh: '所以整體來說，評論在購買決定中扮演重要角色。' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Boring structure beats beautiful silence',
          zh: '無聊的結構，勝過美麗的沉默',
          bodyEn: 'P.E.E.L. will never sound impressive, and it is not supposed to. It is the thing you can still execute when the question is unfamiliar and the room has gone quiet — and a plain answer delivered fluently scores far better than an elegant one that never arrives.',
          bodyZh: 'P.E.E.L. 永遠不會聽起來很厲害，它也不該。它是當題目陌生、現場安靜下來時，你仍然做得出來的東西——而一個流暢說完的樸素回答，分數遠高於一個始終沒出現的漂亮回答。',
        },
      ],
    },
  ],
};

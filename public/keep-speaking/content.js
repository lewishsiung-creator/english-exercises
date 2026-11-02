/* Keep Speaking — the practice version of the 學員複習手冊 for the cross-cultural
   communication course. The 35-page handbook is the reference; this page is
   where a trainee rehearses it.

   WHAT IS THE HANDBOOK'S AND WHAT IS NOT
   --------------------------------------
   Every dialogue line, phrase, email, principle and reflection question is the
   handbook's, word for word. Three things were written for this page:

   - the 中譯 of English lines the handbook leaves untranslated,
   - the `sit` prompts (the situation you answer in a drill) and every `fill`
     (a [slot] or "..." completed, so the machine voice has a sentence to say),
   - the weaker options in a choice, marked `added: true`, and Tanaka's replies
     in Scenario E, which only restate facts from Scenario B and Email 2.

   A few practice lines are the handbook's sentences shortened or joined (the
   say-it version of Vivian's answer in Scenario C, the Tone Scale items), and
   the English `ctx` lines stop before the part a scenario then plays out.

   The weak options run long on purpose. The handbook's answers are specific,
   so they tended to be the longest line on offer, and the longest line was
   the right one in 13 of 16 choices. Keep the lengths mixed when adding one.

   Those fixes to the source are deliberate:

   - A phrase's level follows Card A, not the Part 1 table, where three phrases
     carry a different label.
   - The doubled quotes in the Scenario E and F tables are dropped.
   - The word counts on the emails are dropped: they do not match the text
     (Email 1's "180 字" is 122 words).
   - Email 1's "結論在第 4 段" is left out, since its own reasons say paragraph 3,
     which is where the sentence is.

   WHO IS NAMED
   ------------
   No company, on Lewis's instruction (2026-11-02): the handbook names its
   client throughout and this repo is public. Where a line needed a subject it
   became "we", "us", "your" or 公司. The handbook's character names stay. Keep
   the client's name out of anything added here, comments included.

   ADDING TO IT
   ------------
   A scenario is a list of `steps`, played in order; the types are documented
   beside `playStep()` in render.js. A choice needs exactly one `ok: true`.
   A sort item's `no` gives the reason for each bucket that is not its answer.
   An email's `flaws` are matched to its text by `hot` on a sentence. */

const COURSE = {
  title: 'Keep Speaking',
  titleZh: '繼續開口',
  kicker: '跨文化溝通課程 · 學員練習',
  motto: {
    zh: '你的英文不需要完美。需要的是繼續開口。',
    en: "Your English doesn't need to be perfect. What matters is that you keep speaking.",
  },
  promise: {
    zh: '這裡沒有分數，也沒有人看得到你的紀錄。這一頁只算一件事：你開口了幾次。',
    en: 'No scores here, and nobody sees your record. This page counts one thing: how many times you spoke.',
  },
};

// Shown once, before the first thing the page asks anyone to say out loud.
const INTRO = {
  title: '開始之前',
  points: [
    '沒有分數，也沒有人看得到你的紀錄。紀錄只存在這台裝置。',
    '只算一件事：你開口了幾次。說錯也算數。',
    '先開口，再看答案。簡單的句子就夠了。',
  ],
  go: '開始練習',
  quiet: '現在不方便出聲',
  note: '之後可以在 ⚙ 設定裡更改。',
};

// The handbook's three ways of using it, as the three doors on the first screen.
const DOORS = [
  { to: 'email/write', zh: '寫 Email', en: 'Before writing',
    note: '套用 BLUF 模板，寄出前先做健檢' },
  { to: 'phrases/mine', zh: '要開會', en: 'Before a meeting',
    note: '挑 2–3 句放進小抄，先說一次' },
  { to: 'phrases/upgrade', zh: '卡住了', en: 'When stuck',
    note: '把剛剛說的話換成更強的版本' },
];

// ---------------------------------------------------------------- phrases

const FUNCTIONS = [
  {
    id: 'interject', n: 1, zh: '切入', en: 'Interject',
    phrases: [
      { id: 'f1a', lv: 'A2', en: 'Can I add something?', zh: '我可以補充一點嗎？',
        sit: '大家在討論開幕日期，你有一件事想補充。' },
      { id: 'f1b', lv: 'B1', en: 'Can I jump in here?', zh: '我可以在這裡插句話嗎？',
        sit: 'Jason 講到一個段落，你想趁這裡切進去。' },
      { id: 'f1c', lv: 'B1', en: "I'd like to add something to that.", zh: '關於這點，我想再補充一下。',
        sit: 'Kevin 剛講完數字，你想接著這點往下說。' },
      { id: 'f1d', lv: 'B1+', en: 'Before we move on, I want to flag something.', zh: '在進到下一項之前，我想提醒一件事。',
        sit: '會議要跳到下一個議題了，但有個風險還沒有人提。' },
    ],
  },
  {
    id: 'disagree', n: 2, zh: '不同意', en: 'Disagree',
    phrases: [
      { id: 'f2a', lv: 'A2', en: 'I think differently.', zh: '我的想法不一樣。',
        sit: '你不同意，一時只想得出最簡單的說法。' },
      { id: 'f2b', lv: 'B1', en: 'I see it a bit differently.', zh: '我的看法有點不一樣。',
        sit: 'Kevin 認為不該核准預算，你有不同的看法。' },
      { id: 'f2c', lv: 'B1', en: "That's a fair point, and I'd also consider...", zh: '你說得有道理，我也會考慮⋯⋯',
        fill: "That's a fair point, and I'd also consider the supplier penalty.",
        fillZh: '你說得有道理，我也會考慮供應商的違約金。',
        sit: '對方說得有理，但還有一個因素沒被提到：供應商違約金。' },
      { id: 'f2d', lv: 'B1+', en: "I understand the logic, but I'm concerned about...", zh: '我懂這個邏輯，但我擔心⋯⋯',
        fill: "I understand the logic, but I'm concerned about the Q3 window.",
        fillZh: '我懂這個邏輯，但我擔心 Q3 的時間窗口。',
        sit: '主管的決定有道理，但你擔心會錯過 Q3。' },
    ],
  },
  {
    id: 'buytime', n: 3, zh: '爭取時間', en: 'Buy Time',
    phrases: [
      { id: 'f3a', lv: 'A2', en: 'One moment, please.', zh: '請稍等一下。',
        sit: 'Marcus 突然問你一個數字，你需要幾秒鐘。' },
      { id: 'f3b', lv: 'B1', en: 'Let me think about that for a moment.', zh: '這個問題讓我想一下。',
        sit: '客戶丟來一個你沒想過的問題。' },
      { id: 'f3c', lv: 'B1+', en: "That's a good question — I want to give you a proper answer.", zh: '這個問題問得好，我想給你一個確實的答案。',
        sit: '你不想隨便回答，想先爭取一點時間。' },
      { id: 'f3d', lv: 'B1+', en: "I'll need to check on that — can I get back to you by [time]?", zh: '這點我需要確認一下，我 [時間] 前回覆你可以嗎？',
        fill: "I'll need to check on that — can I get back to you by Friday?",
        fillZh: '這點我需要確認一下，我週五前回覆你可以嗎？',
        sit: 'Tanaka 問到施工規格，你手邊沒有資料，週五前可以查清楚。' },
    ],
  },
  {
    id: 'confirm', n: 4, zh: '確認', en: 'Confirm',
    phrases: [
      { id: 'f4a', lv: 'A2', en: 'So we agree on X?', zh: '所以我們同意 X，對嗎？',
        fill: 'So we agree on the Q4 move?',
        fillZh: '所以我們同意延到 Q4，對嗎？',
        sit: '討論快結束了，你想確認大家同意延到 Q4。' },
      { id: 'f4b', lv: 'B1', en: 'Just to confirm — are we saying that...?', zh: '確認一下，我們的意思是⋯⋯嗎？',
        fill: 'Just to confirm — are we saying that the opening moves to Q4?',
        fillZh: '確認一下，我們的意思是開幕延到 Q4 嗎？',
        sit: '你不確定會議的結論是不是「開幕延到 Q4」。' },
      { id: 'f4c', lv: 'B1', en: 'So the action item here is X by [date], right?', zh: '所以這裡的待辦事項是 [日期] 前完成 X，對嗎？',
        fill: 'So the action item here is a revised timeline by Friday, right?',
        fillZh: '所以這裡的待辦事項是週五前交出修訂版時間表，對嗎？',
        sit: '會議結束前，你想確認：週五前要交出修訂版時間表。' },
      { id: 'f4d', lv: 'B1+', en: "To summarize what we've agreed on...", zh: '總結一下我們的共識⋯⋯',
        sit: '你主持這場會議，要開始收尾了。' },
    ],
  },
];

// Tool 2. "When you catch yourself saying the left side, stop and say the right."
const UPGRADES = [
  { id: 'u1', weak: "I don't know.", weakZh: '我不知道。',
    strong: "I'll need to check on that — can I follow up by tomorrow?",
    zh: '這點我需要確認一下，我明天前回覆你可以嗎？', effect: '專業・有承諾' },
  { id: 'u2', weak: 'I agree.', weakZh: '我同意。',
    strong: "I agree, and I'd also add that [your point].",
    fill: "I agree, and I'd also add that we should check the supplier contract.",
    zh: '我同意，而且我想補充：[你的觀點]。', effect: '有貢獻・不只附和' },
  { id: 'u3', weak: 'Maybe we can try...', weakZh: '也許我們可以試試看⋯⋯',
    strong: 'I suggest we [specific action].',
    fill: 'I suggest we do a soft opening.',
    zh: '我建議我們 [具體行動]。', effect: '有立場・具體' },
  { id: 'u4', weak: "I think it's okay.", weakZh: '我覺得還可以。',
    strong: 'I support this. [One reason.]',
    fill: 'I support this. It keeps the Q3 window open.',
    zh: '我支持這個做法。[一個理由。]', effect: '有根據・不模糊' },
  { id: 'u5', weak: 'Sorry, but...', weakZh: '不好意思，但是⋯⋯',
    strong: 'I see it differently. [Your position.]',
    fill: 'I see it differently. I recommend we approve.',
    zh: '我的看法不同。[你的立場。]', effect: '直接・不道歉' },
];

// The Scenario E table: what to say the moment you are told "no".
const CLARIFY = [
  { id: 'c1', lv: 'A2', en: 'Which part — A or B?', zh: '哪個部分——A 還是 B？' },
  { id: 'c2', lv: 'A2', en: 'Can you give me an example?', zh: '你能舉個例子嗎？' },
  { id: 'c3', lv: 'B1', en: 'Could you help me understand which specific parts concern you?', zh: '能幫我了解哪些具體部分讓你擔心嗎？' },
  { id: 'c4', lv: 'B1', en: 'Just to clarify — are there parts of the proposal that work for you?', zh: '確認一下——有哪些部分是可以接受的？' },
  { id: 'c5', lv: 'B1+', en: 'I want to make sure I understand your concern correctly before we revise.', zh: '修改之前，我想確認我正確理解了你的顧慮。' },
];

// The third kind of drill item: a moment from a scenario, answered in full.
const MOMENTS = [
  { id: 'm1', sit: 'Marcus 問香港門市能不能如期開幕。裝潢商說還要 6 週，你週五前會給修訂版時間表。用 BLUF 回答。',
    en: 'The opening is at risk — contractor needs 6 more weeks. I\'ll send a revised timeline by Friday.',
    zh: '開幕有風險——裝潢商需要再六週。我週五前會寄出修訂版時間表。' },
  { id: 'm2', sit: 'Tanaka 說「這個設計不適合我們的市場」。不要沉默，追問是哪個部分。',
    en: "Could you tell me which specific parts don't fit? Is it the overall size, the design style, or the layout?",
    zh: '可以告訴我具體是哪些部分不適合嗎？是整體尺寸、設計風格，還是配置？' },
  { id: 'm3', sit: 'Marcus 要求出貨提前。先表達理解，還不要提方案。',
    en: 'I hear you — losing stock at peak weekend is critical.',
    zh: '我明白——週末高峰期斷貨是很嚴重的事。' },
  { id: 'm4', sit: '主管提議延後開幕，你要反對：延後損失 NT$800K，並提出軟開幕。',
    en: 'I disagree. We lose NT$800K if we delay. Can we do a soft opening instead?',
    zh: '我不同意。延後的話我們會損失 NT$80 萬。可以改成軟開幕嗎？' },
  { id: 'm5', sit: '日本的問題可能影響香港 Q4，你要在會議中切入提出顧慮。',
    en: 'Can I add something? What about Hong Kong Q4? Will our plan be affected?',
    zh: '我可以補充一點嗎？香港的 Q4 怎麼辦？我們的計畫會受影響嗎？' },
  { id: 'm6', sit: '大家都在討論時程，沒有人提到供應商合約。提醒大家：違約金可能到 NT$1.2M。',
    en: 'Wait. What about the supplier contract? Penalty could be NT$1.2M.',
    zh: '等一下。供應商合約怎麼辦？違約金可能到 NT$120 萬。' },
  { id: 'm7', sit: '你附和 Kevin 的數據，但要加上自己的觀點：錯過 Q3，代價不只是預算。',
    en: "I agree with Kevin's data, and I'd also add: from a marketing perspective, if we miss Q3 our brand awareness campaign loses ~30% of its planned reach.",
    zh: '我同意 Kevin 的數據，我也想補充：從行銷的角度看，如果錯過 Q3，品牌知名度活動的預期觸及會少大約 30%。' },
];

// ---------------------------------------------------------------- concepts

const CONTEXT = {
  cards: [
    { key: 'high', zh: '高語境', who: '台灣 Taiwan',
      points: '說話留有餘地 · 重視關係 · 對方應該理解言外之意',
      en: 'Leaves room for interpretation · Relationship-focused · Listener should infer' },
    { key: 'low', zh: '低語境', who: 'Marcus · 美國／香港商業',
      points: '直接、要明確的承諾 · 不能容忍模糊 · 講者要說清楚',
      en: 'Direct · Demands explicit commitments · Speaker must be explicit' },
    { key: 'mixed', zh: '混合', who: 'Tanaka · 日本商業',
      points: '表面禮貌但要專業判斷 · 期待主動追問',
      en: 'Surface politeness with professional judgment · Expects active inquiry' },
  ],
  sort: {
    id: 'context',
    ask: '這句話描述的是哪一種？',
    buckets: [
      { key: 'high', zh: '高語境', en: '台灣' },
      { key: 'low', zh: '低語境', en: 'Marcus' },
      { key: 'mixed', zh: '混合', en: 'Tanaka' },
    ],
    items: [
      { q: '「應該可以，我們還在努力。」說這句話的人，以為對方聽得出言外之意。', a: 'high',
        why: '留有餘地、等對方自己理解——這是高語境的習慣。',
        no: {
          low: '低語境的人不會這樣說。他們會直接給明確的答案和日期。',
          mixed: '混合型是對方等你追問。這句是說話的人把話留白，等對方自己體會。',
        } },
      { q: '對方要的是明確的承諾。模糊的回答，會被當成「沒問題」。', a: 'low',
        why: 'Marcus 把 Vivian 的模糊當成確認，開始安排宣傳。',
        no: {
          high: '高語境的聽者會試著聽出言外之意。這裡只看字面上說了什麼。',
          mixed: '混合型會期待你主動說明。這裡直接把模糊當成確認，沒有再問。',
        } },
      { q: '對方說「不適合」，其實在等你主動問：是哪一部分？', a: 'mixed',
        why: '表面強硬，但只要主動追問，Tanaka 願意合作。',
        no: {
          high: '高語境是話留餘地、等人意會。這裡的話很直接，只是後面還有沒說完的部分。',
          low: '低語境的人會自己把理由講清楚。這裡對方沒有說明，是在看你會不會問。',
        } },
      { q: '說清楚是講者的責任，不是聽者的。', a: 'low',
        why: '低語境裡，講者要說清楚。',
        no: {
          high: '高語境正好相反：聽者要自己理解言外之意。',
          mixed: '混合型期待的是你主動追問，責任不全在講者身上。',
        } },
      { q: '關係比把話講滿更重要，話不用說得太白。', a: 'high',
        why: '高語境重視關係，對方應該理解言外之意。',
        no: {
          low: '低語境要的是直接、明確，不能容忍模糊。',
          mixed: '混合型重視專業判斷和主動追問。這句講的是留餘地、顧關係。',
        } },
      { q: '要的不是道歉，是聽懂之後做出專業回應。', a: 'mixed',
        why: 'Tanaka 期待的是「聽懂他的話、做出專業回應」。',
        no: {
          high: '高語境的重點是留餘地、顧關係。這句要的是專業回應。',
          low: '低語境的重點是把話說明確。這句的重點是聽懂對方，再展現專業判斷。',
        } },
    ],
  },
};

// The three layers, in the order `order` exercises expect them.
const BLUF_PARTS = [
  { key: 'c', zh: '結論', en: 'Conclusion' },
  { key: 'r', zh: '原因', en: 'Reason' },
  { key: 'a', zh: '行動', en: 'Action' },
];

const BLUF_SETS = [
  { zh: '日本展店要延後，你要告訴主管。',
    c: 'The Japan launch needs to be delayed.',
    r: 'The permit requires 6 more weeks.',
    a: "I'll send a revised timeline by Friday." },
  { zh: 'Marcus 問香港門市是否如期開幕。',
    c: 'The opening is at risk.',
    r: 'Contractor needs 6 more weeks.',
    a: "I'll send a revised timeline by Friday." },
  { zh: '通知 Marcus：6 月 1 日的出貨要延後。',
    c: 'The June 1 shipment will move to June 15.',
    r: 'The Taiwan supplier needs additional quality verification on the current batch.',
    a: 'Please confirm by Thursday (May 30) so I can lock in the emergency shipping schedule.' },
  { zh: '向 Linda 報告日本第二間門市的風險。',
    c: 'Japan Store #2 cannot open in Q3.',
    r: 'The permit will land 6 weeks late.',
    a: 'I recommend we move the opening to Q4.' },
];

const TONE = {
  scale: [
    { n: 1, zh: '太軟弱', en: 'Too soft', note: '聲音很小 · 用很多「也許」· 結論在最後或沒有' },
    { n: 2, zh: '偏軟弱', en: 'Slightly soft', note: '有立場但很多緩衝詞 · 像在問問題' },
    { n: 3, zh: '目標', en: 'Target', note: '清楚說立場 · 有根據 · 穩定友好但堅定', target: true },
    { n: 4, zh: '目標', en: 'Target', note: '直接自信 · 有數據支撐 · 不道歉', target: true },
    { n: 5, zh: '太強硬', en: 'Too direct', note: '沒有緩衝 · 沒有同理 · 像在攻擊' },
  ],
  sort: {
    id: 'tone',
    ask: '這句話落在量尺的哪裡？',
    english: true,
    buckets: [
      { key: 'soft', zh: '太軟', en: '1–2' },
      { key: 'target', zh: '目標', en: '3–4' },
      { key: 'hard', zh: '太硬', en: '5' },
    ],
    items: [
      { q: "It should be fine. We're still working on it.", a: 'soft',
        zh: '應該可以，我們還在努力。', why: '沒有結論，也沒有根據。Marcus 聽到的是「沒問題」。',
        no: {
          target: '聽起來很穩，但沒有立場也沒有根據。Q2 到底開不開得了？',
          hard: '這句沒有攻擊性。問題不是太強，是什麼都沒說清楚。',
        } },
      { q: 'The opening is at risk — contractor needs 6 more weeks.', a: 'target',
        zh: '開幕有風險——裝潢商需要再六週。', why: '清楚說立場，也有根據。',
        no: {
          soft: '這句沒有「也許」，也沒有道歉。壞消息不等於語氣軟。',
          hard: '直接不等於攻擊。這句只說事實和原因，沒有指責任何人。',
        } },
      { q: "Um... I'm not sure. Kevin knows the numbers better than I do.", a: 'soft',
        zh: '嗯⋯⋯我不確定。Kevin 比我更清楚數字。', why: '把決定推給別人，自己沒有立場。',
        no: {
          target: '目標要有清楚的立場。這句連自己怎麼想都沒說。',
          hard: '這句一點也不強硬，它把發言權讓給了別人。',
        } },
      { q: "That's wrong. You didn't think about Q3 at all.", a: 'hard', added: true,
        zh: '這是錯的。你根本沒想到 Q3。', why: '沒有緩衝，也沒有同理，聽起來像在攻擊。',
        no: {
          soft: '這句沒有任何緩衝，絕對不軟。',
          target: '有立場是對的，但「You didn\'t think」在指責人，不是在談問題。',
        } },
      { q: "I understand the logic, but I'm concerned about the Q3 window.", a: 'target',
        zh: '我懂這個邏輯，但我擔心 Q3 的時間窗口。', why: '先承認對方有道理，再說自己的立場。穩定友好但堅定。',
        no: {
          soft: '「I understand」是同理，不是退讓。後面的立場很清楚。',
          hard: '這句先承認對方有道理，不是在攻擊。',
        } },
      { q: 'Sorry, but maybe we can try something else?', a: 'soft', added: true,
        zh: '不好意思，也許我們可以試試別的？', why: '又道歉、又「也許」，還像在問問題。',
        no: {
          target: '目標要說出具體立場。「something else」是什麼？',
          hard: '開頭就道歉，離強硬很遠。',
        } },
      { q: 'I recommend we approve. Without this budget, we lose the Q3 window.', a: 'target',
        zh: '我建議核准。沒有這筆預算，我們就會失去 Q3 的時間窗口。', why: '直接自信，有根據，不道歉。',
        no: {
          soft: '「I recommend」是明確的立場，沒有緩衝詞。',
          hard: '它給了理由，也沒有否定任何人。直接，但不是攻擊。',
        } },
      { q: 'No. Your numbers mean nothing. Just approve it.', a: 'hard', added: true,
        zh: '不對。你的數字沒有意義。核准就對了。', why: '有立場，但沒有同理。這是量尺的另一端。',
        no: {
          soft: '這句完全沒有緩衝，不可能算軟。',
          target: '目標要有根據和同理。「mean nothing」否定了對方，也沒有給理由。',
        } },
    ],
  },
};

const BEHAVIOR = {
  people: [
    { key: 'kevin', name: 'Kevin', good: true, tag: '做對的',
      obs: '結論在第一句 · 有數據支撐 · 語氣 4 · 完全沒有道歉 · 提出替代方案',
      lesson: '直接不等於無禮。有立場＋有理由＝最有說服力的溝通方式。',
      lessonEn: 'Direct does not equal rude. Position + reason = most persuasive communication.' },
    { key: 'vivian', name: 'Vivian', tag: '需要改善',
      obs: '結論在第 5 句之後 · 把決定推給別人 · 過度道歉 · 會議結束後才知道自己沒說清楚',
      lesson: '知道答案但沒說出來的代價：對方失去信心，會議做出錯誤決定。',
      lessonEn: 'The cost of knowing the answer but not saying it: lost trust, wrong decisions.' },
    { key: 'amy', name: 'Amy', tag: '需要改善',
      obs: '「I agree with what Kevin said.」一句話結束 · 沒有加入自己的觀點 · 主管眼中：你沒有獨立判斷能力',
      lesson: '附和不等於參與。每次發言都需要加入你自己的一個觀點。',
      lessonEn: 'Agreement does not equal participation. Every response needs at least one original point from you.' },
  ],
  table: [
    { row: '結論位置', kevin: '第 1 句', vivian: '第 5 句後', amy: '只說「我同意」' },
    { row: '語氣', kevin: '清楚＋穩定 (3–4)', vivian: '軟弱 (1–2)', amy: '中性但空洞' },
    { row: '數據', kevin: '有具體數字', vivian: '沒有', amy: '引用別人的' },
    { row: '有建議嗎', kevin: '提出替代方案', vivian: '把決定推給別人', amy: '附和' },
    { row: '結果', kevin: '會議做對決定', vivian: '會議做錯決定', amy: '主管覺得你沒判斷力' },
  ],
  sort: {
    id: 'behavior',
    ask: '這句話最像誰？',
    english: true,
    buckets: [
      { key: 'kevin', zh: 'Kevin' },
      { key: 'vivian', zh: 'Vivian' },
      { key: 'amy', zh: 'Amy' },
    ],
    items: [
      { q: 'I agree with what Kevin said.', a: 'amy', zh: '我同意 Kevin 說的。',
        why: '附和不等於參與。這句話裡沒有你自己的觀點。',
        no: {
          kevin: 'Kevin 會加上數據和自己的立場。這句兩樣都沒有。',
          vivian: 'Vivian 的問題是繞圈，又把決定推給別人。這句很短，只是沒有內容。',
        } },
      { q: 'I disagree. We lose NT$800K if we delay. Can we do a soft opening instead?', a: 'kevin',
        zh: '我不同意。延後的話我們會損失 NT$80 萬。可以改成軟開幕嗎？',
        why: '結論在第一句，有數據，提出替代方案，沒有道歉。',
        no: {
          vivian: 'Vivian 的結論會出現得很晚。這句第一個字就是立場。',
          amy: 'Amy 只附和。這句有自己的立場，還提出替代方案。',
        } },
      { q: "Um... yes, so Marcus has been supportive and I think maybe the investment could be beneficial, but Kevin knows the numbers better than I do so... I'm not sure.", a: 'vivian',
        zh: '嗯⋯⋯對，Marcus 一直很支持，我覺得這筆投資也許有幫助，但 Kevin 比我更清楚數字，所以⋯⋯我不確定。',
        why: '結論不見了，決定也推給了別人。',
        no: {
          kevin: 'Kevin 的結論在第一句。這句到最後都沒有結論。',
          amy: 'Amy 一句話就結束。這句說了很多，只是不敢下結論。',
        } },
      { q: "I think Kevin's numbers are right, so yes, same here.", a: 'amy', added: true,
        zh: '我覺得 Kevin 的數字是對的，所以我也一樣。', why: '引用別人的數據，然後就結束了。',
        no: {
          kevin: '有提到數字，但那是別人的數字，自己沒有多說什麼。',
          vivian: 'Vivian 會猶豫、繞圈。這句很乾脆，只是沒有自己的觀點。',
        } },
      { q: 'I recommend we approve. Without this budget, we lose the Q3 window.', a: 'kevin',
        zh: '我建議核准。沒有這筆預算，我們就會失去 Q3 的時間窗口。', why: '第一句就是立場，第二句就是理由。',
        no: {
          vivian: 'Vivian 會把決定推給別人。這句自己做了建議。',
          amy: '這句不是附和別人，是自己提出建議和理由。',
        } },
      { q: "I'm so sorry, maybe it's just me, but I wonder if we could perhaps think about it?", a: 'vivian', added: true,
        zh: '真的很抱歉，也許只是我的想法，不知道我們能不能再想一想？', why: '過度道歉，而且聽不出結論是什麼。',
        no: {
          kevin: 'Kevin 完全沒有道歉，結論也在第一句。',
          amy: 'Amy 是附和別人。這句沒有附和誰，是自己講得很不確定。',
        } },
    ],
  },
};

// ---------------------------------------------------------------- scenarios

const SCENES = [
  {
    id: 'a', letter: 'A', zh: '香港展店時間線', en: 'HK Store Opening Timeline',
    keep: { en: "The opening is at risk — contractor needs 6 more weeks. I'll send a revised timeline by Friday.", zh: '開幕有風險——裝潢商需要再六週。我週五前會寄出修訂版時間表。' },
    pair: 'Vivian / Marcus', unit: 'Unit 1 案例分析', you: 'Vivian',
    focus: '文化動態：高語境（Vivian）vs 低語境期待（Marcus）',
    ctx: {
      zh: 'Marcus 想確認香港門市是否如期 Q2 開幕。你（Vivian）知道實際裝潢進度落後 6 週。',
      en: 'Marcus wants to confirm Q2 opening on track. Vivian knows the contractor is 6 weeks behind.',
    },
    steps: [
      { t: 'line', who: 'Marcus', en: 'Vivian, is the HK store opening still on track for Q2?', zh: 'Vivian，香港門市還能如期在 Q2 開幕嗎？' },
      { t: 'think', who: 'Vivian', zh: '其實裝潢商說需要再多六週⋯⋯', en: 'Actually the contractor said 6 more weeks...' },
      { t: 'choice', ask: '你現在會怎麼回？',
        options: [
          { en: "It should be fine. We're still working on it.", zh: '應該可以，我們還在努力。',
            why: 'Marcus 把模糊當成「沒問題」，已經開始安排媒體宣傳。',
            then: [
              { who: 'Marcus', en: "Great — I'll start promoting the opening on our social media.", zh: '太好了，我開始在社群上宣傳開幕。' },
              { who: 'Marcus', en: "Wait — you're saying the store won't be ready? We've already done promotions!", zh: '等等，你是說門市來不及嗎？我們已經宣傳了！' },
            ] },
          { en: "We've been working closely with the contractor for some time now, and there have been some delays along the way, but everyone is doing their best and we're staying positive.", added: true,
            zh: '我們和裝潢商合作了一段時間，過程中有一些延誤，但大家都盡力了，我們也保持樂觀。',
            why: '先講背景，結論一直沒出現。Marcus 還是不知道 Q2 開不開得了。' },
          { en: "The opening is at risk — contractor needs 6 more weeks. I'll send a revised timeline by Friday.", ok: true,
            zh: '開幕有風險——裝潢商需要再六週。我週五前會寄出修訂版時間表。',
            why: '結論、原因、行動，一句話就講完了。' },
        ] },
      { t: 'parts', parts: [
        { tag: '結論', en: 'The opening is at risk', note: '開幕有風險' },
        { tag: '原因', en: 'contractor needs 6 more weeks', note: '裝潢商需要 6 週' },
        { tag: '行動', en: "I'll send a revised timeline by Friday", note: '週五前發修訂版時間表' },
      ] },
      { t: 'say', ask: '現在換你說一次。',
        lines: [{ en: "The opening is at risk — contractor needs 6 more weeks. I'll send a revised timeline by Friday.", zh: '開幕有風險——裝潢商需要再六週。我週五前會寄出修訂版時間表。' }] },
    ],
    reflect: {
      zh: '回想你最近一次給 Marcus 類型的客戶回信。第一句話是結論嗎？還是先寫了背景？',
      en: 'Recall your most recent email to a Marcus-type client. Was your first sentence a conclusion, or context?',
    },
  },
  {
    id: 'b', letter: 'B', zh: '日本門市設計', en: 'Japan Store Design',
    keep: { en: 'Just to clarify — are there parts of the proposal that work for you?', zh: '確認一下——有哪些部分是可以接受的？' },
    pair: 'Kevin / Tanaka', unit: 'Unit 1 案例分析', you: 'Kevin',
    focus: '文化動態：高語境（Kevin）vs 直接否定（Tanaka）',
    ctx: {
      zh: '你（Kevin）提交了日本門市設計提案，Tanaka 直接說「不適合我們的市場」。',
      en: 'Kevin submits a Japan store proposal. Tanaka rejects it: "doesn\'t fit our market."',
    },
    steps: [
      { t: 'line', who: 'Kevin', you: true, en: "Here's the proposed layout for the Japan stores. We think it's a strong design.", zh: '這是日本門市的配置提案。我們覺得這個設計很好。' },
      { t: 'line', who: 'Tanaka', en: 'This design does not fit our market.', zh: '這個設計不適合我們的市場。' },
      { t: 'think', who: 'Kevin', zh: '到底哪裡不對？', en: 'What exactly is wrong?' },
      { t: 'choice', ask: '你現在會怎麼回？',
        options: [
          { en: 'Oh... I see. We will reconsider.', zh: '哦⋯⋯好的，我們會重新考慮。',
            why: '因為沒問清楚到底什麼不對，3 週後交了類似的版本，Tanaka 更不滿意了。',
            then: [
              { narr: '3 週後，Kevin 交了同樣的配置。' },
              { who: 'Tanaka', en: 'I see you kept the same layout. This is not what I expected.', zh: '我看到你們保留了同樣的配置。這不是我預期的。' },
            ] },
          { en: "I'm very sorry about that. We understand, and our team will take another look and fix everything right away, as soon as we possibly can.", added: true,
            zh: '非常抱歉。我們了解了，團隊會再看一次，盡快全部修改好。',
            why: '只道歉 → 繼續強硬。Tanaka 還是不知道你聽懂了什麼。',
            then: [{ who: 'Tanaka', en: 'Please revise and resubmit.', zh: '請修改後重新提交。' }] },
          { en: "Could you tell me which specific parts don't fit? Is it the overall size, the design style, or the layout?", ok: true,
            zh: '可以告訴我具體是哪些部分不適合嗎？是整體尺寸、設計風格，還是配置？',
            why: '沉默接受＝雙方都輸。追問本身就是一種專業。' },
        ] },
      { t: 'reveal', label: '揭曉：Tanaka 真正的意思',
        zh: '「台灣門市的坪數和風格在日本很難複製，我希望我們能一起調整出適合日本市場的版本。」',
        en: "The Taiwan store format is hard to replicate in Japan. I want us to adapt it together — I'm invested in making this work.",
        note: '日本商業文化的特點：表面強硬，但只要 Kevin 主動追問，Tanaka 願意合作。沉默＝失去合作機會。' },
      { t: 'say', ask: '三句追問，都說一次。',
        lines: [
          { en: "Could you tell me which specific parts don't fit? Is it the overall size, the design style, or the layout?", zh: '可以告訴我具體是哪些部分不適合嗎？是整體尺寸、設計風格，還是配置？' },
          { en: 'Just to clarify — are there parts of the proposal that work for you?', zh: '確認一下——有哪些部分是可以接受的？' },
          { en: 'I want to make sure I understand your concern correctly before we revise.', zh: '修改之前，我想確認我正確理解了你的顧慮。' },
        ] },
      { t: 'principle', zh: '沉默接受＝雙方都輸。追問本身就是一種專業。', en: 'Silent acceptance = both sides lose. Asking clarifying questions IS professionalism.' },
    ],
    reflect: {
      zh: '你最近一次被客戶或主管否定時，你問了具體的「哪一部分」嗎？還是只說「好，我會再看看」？',
      en: 'The last time a client or manager rejected your work, did you ask "which specific parts"? Or did you just say "OK, I\'ll look into it"?',
    },
  },
  {
    id: 'c', letter: 'C', zh: '內部會議劇本', en: 'Internal Meeting Script',
    keep: { en: "I see Kevin's concern, and I see it a bit differently.", zh: '我理解 Kevin 的顧慮，但我的看法有點不一樣。' },
    pair: 'James / Kevin / Vivian / Amy', unit: 'Unit 3 模擬會議', you: 'Vivian，然後 Amy',
    focus: '觀察重點：Vivian 知道答案但沒說出來，會議因此做出錯誤決定',
    ctx: {
      zh: 'James 主持會議，討論是否核准 HK$500,000 額外預算給 Marcus。Kevin 用財務數據強烈反對。你（Vivian）知道 Marcus 急需這筆預算保住 Q3 進度。',
      en: 'James leads a meeting on whether to approve HK$500K extra budget. Kevin opposes strongly with data. Vivian actually knows Marcus desperately needs this for Q3.',
    },
    steps: [
      { t: 'line', who: 'James', role: '主管 Manager', en: 'Okay everyone — we need to decide today whether to approve the additional HK$500,000 budget for Q3. Kevin, what do the numbers look like?', zh: '各位，我們今天要決定是否核准 Q3 額外的 HK$500,000 預算。Kevin，數字看起來怎麼樣？' },
      { t: 'line', who: 'Kevin', role: '財務 Finance', en: "The current budget is already 15% over projection. Adding another 500K puts us at 28% over. I don't think it's advisable.", zh: '目前的預算已經超出預估 15%。再加 50 萬會超出 28%。我認為不太妥當。' },
      { t: 'line', who: 'James', role: '主管 Manager', en: "Vivian, you've been working closely with Marcus on this. What's your take?", zh: 'Vivian，你一直和 Marcus 密切合作。你怎麼看？' },
      { t: 'choice', ask: '輪到你（Vivian）。你會怎麼說？',
        options: [
          { en: "Um... yes, so Marcus has been supportive and I think maybe the investment could be beneficial, but Kevin knows the numbers better than I do so... I'm not sure.",
            zh: '我不確定，Kevin 比我更清楚數字⋯⋯也許可以考慮看看⋯⋯',
            why: '會議否決了預算。這是錯誤決定，而你其實知道答案。',
            then: [
              { who: 'Amy', role: '行銷 Marketing', en: 'I agree with what Kevin said.', zh: '我同意 Kevin 說的。' },
              { who: 'James', role: '主管 Manager', en: "Alright — let's hold off on the budget for now. Meeting adjourned.", zh: '好，預算先暫緩。散會。' },
              { think: 'Vivian', en: "Wait — that's not what I meant. Marcus NEEDS this budget or we'll lose the Q3 window. Why didn't I say that?", zh: '等等，我不是這個意思。Marcus 需要這筆預算，不然我們會失去 Q3 的時間窗口。我為什麼沒說出來？' },
            ] },
          { en: "Kevin's numbers are right, and I respect that, so I think I'll go with Kevin on this one. Marcus has been very supportive and the relationship is important, but maybe we can talk about it again some other time if that's okay with everyone.", added: true,
            zh: 'Kevin 的數字是對的，我尊重這一點，所以這次我跟 Kevin 一樣。Marcus 一直很支持，這段關係也很重要，但如果大家都可以，也許我們改天再談。',
            why: '你知道 Marcus 需要這筆預算，卻沒有說出來。' },
          { en: "I see Kevin's concern, and I see it a bit differently. Without this budget, we lose the Q3 window entirely — Marcus has been clear about this. The 28% over-budget is real, but losing Q3 has a bigger downstream cost. I recommend we approve.", ok: true,
            zh: '我理解 Kevin 的顧慮，但我的看法有點不一樣。沒有這筆預算，我們會完全失去 Q3 的時間窗口——Marcus 講得很清楚。超支 28% 是事實，但失去 Q3 的後續代價更大。我建議核准。',
            why: '功能 2 不同意＋BLUF 結論先行＋量化原因＋明確建議。' },
        ] },
      { t: 'parts', parts: [
        { tag: '不同意', en: 'I see it a bit differently', note: '功能 2' },
        { tag: '原因', en: 'we lose the Q3 window entirely', note: '量化原因' },
        { tag: '建議', en: 'I recommend we approve', note: '明確建議' },
      ] },
      { t: 'say', ask: '在會議裡，說出來才算數。',
        lines: [{ en: "I see Kevin's concern, and I see it a bit differently. Without this budget, we lose the Q3 window entirely. I recommend we approve.", zh: '我理解 Kevin 的顧慮，但我的看法有點不一樣。沒有這筆預算，我們會完全失去 Q3 的時間窗口。我建議核准。' }] },
      { t: 'choice', ask: '現在你是 Amy（行銷）。你也同意 Kevin 的數據，但怎麼說才算參與？',
        options: [
          { en: 'I agree with what Kevin said.', zh: '我同意 Kevin 說的。',
            why: '附和不等於參與。主管眼中：你沒有獨立判斷能力。' },
          { en: "I agree with Kevin. His numbers are really clear and he explained everything very well, so I don't have anything else to add. Whatever everyone decides is fine with me, and I'm happy to support the team on this.", added: true,
            zh: '我同意 Kevin。他的數字很清楚，也解釋得很好，所以我沒有什麼要補充的。大家決定什麼我都可以，我很樂意配合團隊。',
            why: '話變多了，但還是附和。裡面沒有任何一個你自己的觀點。' },
          { en: "I agree with Kevin's data, and I'd also add: from a marketing perspective, if we miss Q3 our brand awareness campaign loses ~30% of its planned reach. So the question isn't just budget — it's also brand cost.", ok: true,
            zh: '我同意 Kevin 的數據，我也想補充：從行銷的角度看，如果錯過 Q3，品牌知名度活動的預期觸及會少大約 30%。所以問題不只是預算，還有品牌代價。',
            why: '先附和，再加入自己的一個觀點。' },
        ] },
      { t: 'principle', zh: '附和不等於參與。每次發言都需要加入你自己的一個觀點。', en: 'Agreement does not equal participation. Every response needs at least one original point from you.' },
    ],
    reflect: {
      zh: '在會議中，你比較像 Kevin、Vivian、還是 Amy？這個觀察沒有對錯——但下次開口前，你想成為誰？',
      en: 'In meetings, are you more like Kevin, Vivian, or Amy? No right or wrong — but next time you speak, who do you want to be?',
    },
  },
  {
    id: 'd', letter: 'D', zh: '香港出貨壓力', en: 'HK Shipment Pressure',
    keep: { en: 'I hear you — losing stock at peak weekend is critical.', zh: '我明白——週末高峰期斷貨是很嚴重的事。' },
    pair: 'Vivian / Marcus', unit: 'Unit 3 配對練習', you: 'Vivian',
    focus: '整合技巧：功能 3（爭取時間）＋功能 4（確認）',
    ctx: {
      zh: 'Marcus 要求把四週後的茶葉出貨提前到下週。對物流團隊幾乎不可能，但你知道 Marcus 的香港門市庫存快見底了。你的折衷方案：先緊急出貨 30%，其餘維持原定時間。',
      en: "Marcus demands moving a 4-week shipment to next week. Nearly impossible logistically, but you know Marcus's HK store inventory is critically low. Your compromise: rush-ship 30% as emergency stock; remaining 70% on original schedule.",
    },
    steps: [
      { t: 'line', who: 'Marcus', en: 'Vivian, we cannot wait four weeks. Our stores will run out of stock by week three.', zh: 'Vivian，我們不能等四週。我們的門市第三週就會斷貨。' },
      { t: 'choice', ask: '步驟 1：你的第一句話是什麼？',
        options: [
          { en: "No, that's not possible. Four weeks is the schedule.", added: true, zh: '不行，這不可能。時程就是四週。',
            why: '直接拒絕。對方的問題沒有被聽見。' },
          { en: "OK... we'll try to ship everything next week.", added: true, zh: '好⋯⋯我們試試看下週全部出貨。',
            why: '勉強答應。物流幾乎不可能做到，這個承諾會變成下一次的壞消息。' },
          { en: 'I hear you — losing stock at peak weekend is critical.', ok: true, zh: '我明白——週末高峰期斷貨是很嚴重的事。',
            why: '先表達理解，再提折衷。' },
        ] },
      { t: 'choice', ask: '步驟 2：提出折衷方案，然後確認。',
        options: [
          { en: "Maybe we could send a little earlier? I'm not sure how much yet, but I'll talk to the team, see what I can do and get back to you when I know more.", added: true,
            zh: '也許我們可以早一點寄？我還不確定能寄多少，但我會跟團隊談談，看看能做什麼，有消息再回覆你。',
            why: '沒有數字、沒有日期。Marcus 什麼都不能安排。' },
          { en: "Here's what I can do: 30% emergency ship next week, the rest in 4 weeks as planned. Just to confirm — does this cover your peak weekend?", ok: true,
            zh: '我能做的是：下週緊急出貨 30%，其餘依原定四週後出貨。確認一下——這樣能撐過週末高峰嗎？',
            why: '折衷方案有具體數字，最後用功能 4 確認。' },
        ] },
      { t: 'say', ask: '兩個步驟連起來說一次。A2 版也完全可以。',
        lines: [
          { lv: 'B1', en: "I hear you — losing stock at peak weekend is critical. Here's what I can do: 30% emergency ship next week, the rest in 4 weeks as planned. Just to confirm — does this cover your peak weekend?", zh: '我明白——週末高峰期斷貨是很嚴重的事。我能做的是：下週緊急出貨 30%，其餘依原定四週後出貨。確認一下——這樣能撐過週末高峰嗎？' },
          { lv: 'A2', en: 'One moment. I can send 30% now. The rest — 4 weeks. OK?', zh: '請稍等。我現在可以寄 30%。其他的——四週後。可以嗎？' },
        ] },
      { t: 'roles', label: '找同事對練：角色卡',
        roles: [
          { name: 'Vivian', job: '海外業務專員', task: '不能答應四週變一週。提出折衷方案：先緊急出貨 30%，其餘維持原定時間。' },
          { name: 'Marcus', job: '香港代理商負責人', task: '你的三間香港門市庫存只剩兩週的量。如果下週沒有補貨，週末高峰期會斷貨。' },
        ] },
    ],
    reflect: {
      zh: '當客戶提出不合理的要求時，你的本能是直接拒絕、勉強答應、還是先表達理解再提折衷？',
      en: 'When a client makes an unreasonable demand, is your instinct to refuse outright, reluctantly agree, or acknowledge first then propose a compromise?',
    },
  },
  {
    id: 'e', letter: 'E', zh: '日本設計被拒', en: 'Design Rejection (with Hidden Mechanic)',
    keep: { en: 'Could you help me understand which specific parts concern you?', zh: '能幫我了解哪些具體部分讓你擔心嗎？' },
    pair: 'Kevin / Tanaka', unit: 'Unit 3 配對練習', you: 'Kevin',
    focus: '整合技巧：功能 2（不同意）＋功能 3（爭取時間）＋追問技巧',
    ctx: {
      zh: '你（Kevin）的團隊花了三週設計日本新門市。你不能沉默接受。Tanaka 表面強硬，內心其實想合作——關鍵是你能不能問對問題。',
      en: "You (Kevin) spent 3 weeks on the Japan store proposal. Don't silently accept. Tanaka appears firm while actually wanting collaboration — the key is whether you ask the right questions.",
    },
    steps: [
      { t: 'line', who: 'Tanaka', en: 'This proposal does not fit our market. Please revise and resubmit.', zh: '這份提案不適合我們的市場。請修改後重新提交。' },
      { t: 'quest',
        ask: '點一句話回應 Tanaka，看看會發生什麼。',
        need: 2,
        meter: ['表面強硬', '願意說明', '願意合作'],
        good: [
          { lv: 'A2', en: 'Which part — A or B?', zh: '哪個部分——A 還是 B？',
            reply: { en: 'The size. The footprint is too large.', zh: '尺寸。門市坪數太大。' } },
          { lv: 'A2', en: 'Can you give me an example?', zh: '你能舉個例子嗎？',
            reply: { en: 'The visual style is too bold.', zh: '視覺風格太鮮豔。' } },
          { lv: 'B1', en: 'Could you help me understand which specific parts concern you?', zh: '能幫我了解哪些具體部分讓你擔心嗎？',
            reply: { en: 'Two things. The footprint is too large, and the visual style is too bold.', zh: '兩件事。坪數太大，視覺風格太鮮豔。' } },
          { lv: 'B1', en: 'Just to clarify — are there parts of the proposal that work for you?', zh: '確認一下——有哪些部分是可以接受的？',
            reply: { en: 'The Taiwan store format is hard to replicate in Japan.', zh: '台灣門市的坪數和風格在日本很難複製。' } },
          { lv: 'B1+', en: 'I want to make sure I understand your concern correctly before we revise.', zh: '修改之前，我想確認我正確理解了你的顧慮。',
            reply: { en: 'Thank you. The footprint is too large, and the visual style is too bold.', zh: '謝謝。坪數太大，視覺風格太鮮豔。' } },
        ],
        weak: [
          { en: "I'm very sorry. We will revise it.", added: true, zh: '非常抱歉，我們會修改。',
            reply: { en: 'Please revise and resubmit.', zh: '請修改後重新提交。' },
            why: '只道歉 → 繼續強硬。' },
          { en: "OK, I'll look into it.", zh: '好，我會再看看。',
            reply: { en: 'Please revise and resubmit.', zh: '請修改後重新提交。' },
            why: '沉默接受的客氣版本。Tanaka 沒有理由多說。' },
        ],
      },
      { t: 'reveal', label: '隱藏機制：Tanaka 內心的真實想法',
        zh: '「台灣門市的坪數和風格在日本很難複製，我希望我們能一起調整出適合日本市場的版本。」',
        en: 'The Taiwan store format is hard to replicate in Japan. I want us to adapt it together.',
        note: '日本商業夥伴的合作意願，取決於你怎麼回應。問對了 → 合作。只道歉 → 繼續強硬。' },
      { t: 'say', ask: '挑你最順口的兩句，說出來。',
        lines: CLARIFY.map((c) => ({ lv: c.lv, en: c.en, zh: c.zh })) },
    ],
    reflect: {
      zh: '想想最近一次被客戶或主管否定。你是「沉默接受」型還是「主動追問」型？兩者的長期結果差很多。',
      en: 'Recall a recent rejection from a client or manager. Were you the "silent acceptance" type or the "active inquiry" type? The long-term outcomes diverge dramatically.',
    },
  },
  {
    id: 'f', letter: 'F', zh: '日本展店風險五角色會議', en: 'Japan Store Risk — Five-Role Mock Meeting',
    pair: '五個角色', unit: 'Unit 3 模擬會議', you: '你選一個角色',
    focus: '整合技巧：BLUF＋全部四大功能＋語氣 3–4',
    ctx: {
      zh: '日本第二間門市建築許可審批比預期慢六週，Q3 開幕幾乎不可行。延後到 Q4 → 行銷計劃損失 NT$80 萬，但供應商違約金 NT$120 萬。Linda 已向董事會承諾 Q3 開幕。會議目標：12 分鐘內達成清楚結論。',
      en: 'Japan Store #2 permit is 6 weeks behind. Q3 nearly infeasible. Delay to Q4 → NT$800K marketing loss + NT$1.2M supplier penalty. Linda has committed Q3 to the board. Goal: clear decision in 12 minutes.',
    },
    steps: [
      { t: 'meeting',
        ask: '你要演哪一個角色？',
        roles: [
          { name: 'Linda', job: '海外拓展總監（主持人）', jobEn: 'International Expansion Director (Facilitator)',
            task: '用 BLUF 開場 · 確保每人都發言 · 最後 3 分鐘推動結論', fn: null,
            en: 'Thank you all. One item today: delay Japan Store #2 from Q3 to Q4? I need a decision now.',
            zh: '謝謝各位。今天只有一件事：日本第二間門市要不要從 Q3 延到 Q4？我現在需要一個決定。' },
          { name: 'Kevin', job: '海外業務主任', jobEn: 'Overseas Sales Manager',
            task: '強烈反對延後 · 提出替代方案（軟開幕）· 用功能 2 不同意', fn: 'disagree',
            en: 'I disagree. We lose NT$800K if we delay. Can we do a soft opening instead?',
            zh: '我不同意。延後的話我們會損失 NT$80 萬。可以改成軟開幕嗎？' },
          { name: 'Jason', job: '財務分析師', jobEn: 'Finance Analyst',
            task: '提出財務數據 · 用功能 4 確認供應商合約細節', fn: 'confirm',
            en: 'Wait. What about the supplier contract? Penalty could be NT$1.2M.',
            zh: '等一下。供應商合約怎麼辦？違約金可能到 NT$120 萬。' },
          { name: 'Marcus', job: '香港代理商', jobEn: 'HK Distributor Director',
            task: '擔心日本問題影響香港 Q4 · 用功能 1 切入提出顧慮', fn: 'interject',
            en: 'Can I add something? What about Hong Kong Q4? Will our plan be affected?',
            zh: '我可以補充一點嗎？香港的 Q4 怎麼辦？我們的計畫會受影響嗎？' },
          { name: 'Tanaka', job: '日本代理商展店負責人', jobEn: 'Japan Distributor Expansion Lead',
            task: '支持延後但有隱藏資訊：施工規格不符合日本法規', fn: null,
            en: 'I support delay. But the real issue is the spec. Japan regulations require different standards.',
            zh: '我支持延後。但真正的問題是規格。日本法規要求不同的標準。' },
        ],
      },
      { t: 'reveal', label: 'Tanaka 的隱藏炸彈',
        zh: '「其實貴公司的施工規格不符合日本法規要求——這是根本問題，不只是時間問題。」',
        en: "Your construction specs don't meet Japan's building regulations — this is a fundamental issue, not just a timeline one.",
        note: '當這個訊息被揭露，整個會議的討論方向會完全改變——從「時程之爭」變成「規格修正之必要」。' },
    ],
    reflect: {
      zh: '在你最近的跨部門會議中，有沒有「沒被說出口的真正問題」？是誰應該說出來？為什麼沒說？',
      en: 'In your recent cross-team meetings, was there a "real issue that wasn\'t voiced"? Who should have raised it? Why wasn\'t it raised?',
    },
  },
];

// ---------------------------------------------------------------- emails

/* In `before`, a paragraph is an array of sentences; a sentence with `hot`
   belongs to the flaw of that id. Everything in a Before and an After is the
   handbook's text unchanged. */
const EMAILS = [
  {
    id: '1', to: 'Marcus', role: '香港代理商', task: '通知出貨延誤', challenge: '低語境 · 壞消息＋解決方案',
    zh: '通知 Marcus 出貨延誤', en: 'Notifying Marcus of a Shipment Delay',
    brief: 'Marcus 已排好行銷活動，但 6 月 1 日的出貨要延到 6 月 15 日。',
    ctx: {
      zh: '公司下個月要出貨給香港的茶葉原料，因為台灣供應商品質檢測延遲，原訂的 6 月 1 日出貨日期需要延後到 6 月 15 日。Marcus 已經在香港門市排了行銷活動配合這批原料到貨。',
      en: 'We are shipping tea leaves to HK next month. Quality inspection delay means original June 1 shipment must move to June 15. Marcus has already scheduled HK marketing activities around the original date.',
    },
    before: {
      subject: { s: 'Update on June shipment', hot: 'subject' },
      body: [
        [{ s: 'Hi Marcus,' }],
        [{ s: 'I hope you are doing well.' }, { s: 'I wanted to reach out about the June shipment of our tea leaves.' }],
        [{ s: 'As you may know, we have been working closely with our supplier in Taiwan, and they have been doing extensive quality testing on the latest batch.' },
         { s: 'The testing process has taken longer than originally expected because there were some unusual readings that needed additional verification.' }],
        [{ s: 'Because of this, the shipment timeline has been affected.' },
         { s: 'We will not be able to ship on June 1 as we originally planned.', hot: 'buried' },
         { s: 'The new date will be June 15.', hot: 'buried' }],
        [{ s: 'I understand this may impact your marketing activities.' },
         { s: 'We are sorry about this.', hot: 'sorry' },
         { s: 'Let me know if you have any questions or concerns.', hot: 'passive' }],
        [{ s: 'Best regards,' }, { s: 'Vivian' }],
      ],
    },
    flaws: [
      { id: 'buried', zh: 'Marcus 讀到第 3 段才知道發生了什麼事——他是忙碌的人', en: 'Marcus has to read 3 paragraphs to find out what happened' },
      { id: 'sorry', zh: '只說「sorry」沒提解決方案——讓 Marcus 自己想辦法', en: 'Just an apology with no solution — leaves Marcus to figure it out' },
      { id: 'passive', zh: '沒有具體的下一步——「let me know」太被動', en: 'No specific next step — "let me know" is too passive' },
      { id: 'subject', zh: '主旨太模糊——Marcus 收到時不知道要不要立刻打開', en: "Subject too vague — Marcus doesn't know if it's urgent" },
    ],
    picks: [
      { ask: '主旨要怎麼寫？',
        options: [
          { en: 'Update on June shipment', why: '太模糊，Marcus 不知道要不要立刻打開。' },
          { en: '[FYI] Some changes to the June shipment and your HK activities', added: true, why: '[FYI] 代表不用處理，但這封信需要 Marcus 回覆。' },
          { en: '[Action needed] June shipment delayed to June 15 — proposed mitigation inside', ok: true, why: '主旨清楚標示 [Action needed]＋結論，Marcus 立刻知道要打開。' },
        ] },
      { ask: '第一句要寫什麼？',
        options: [
          { en: 'I hope you are doing well.', why: '寒暄不是結論。這句話可以不要。' },
          { en: 'As you may know, we have been working closely with our supplier in Taiwan.', why: '這是背景。Marcus 還是不知道發生了什麼事。' },
          { en: 'The June 1 shipment will move to June 15 — a 14-day delay.', ok: true, why: '第一句直接說延誤天數，對 Marcus 這種忙人最有效率。' },
        ] },
      { ask: '怎麼收尾？',
        options: [
          { en: 'I understand this may impact your marketing activities, so let me know if you have any questions or concerns.', added: true, why: '太被動，沒有具體的下一步。' },
          { en: 'We are sorry about this.', why: '只有道歉，沒有解決方案。' },
          { en: 'Please confirm by Thursday (May 30) so I can lock in the emergency shipping schedule.', ok: true, why: '明確的截止日期，讓 Marcus 容易回應。' },
        ] },
    ],
    after: {
      subject: '[Action needed] June shipment delayed to June 15 — proposed mitigation inside',
      body: [
        { p: 'Hi Marcus,' },
        { p: 'The June 1 shipment will move to June 15 — a 14-day delay. The Taiwan supplier needs additional quality verification on the current batch.', key: true },
        { p: 'To minimize impact on your HK activations, I propose:' },
        { ol: [
          'Emergency partial shipment: 30% of the order ships from existing stock on June 5 (4-day delay only). This covers your week-1 marketing launch.',
          'Main shipment: remaining 70% ships June 15 as confirmed.',
          'Cost: emergency shipping cost (estimated NT$45,000) absorbed by us.',
        ] },
        { p: 'Please confirm by Thursday (May 30) so I can lock in the emergency shipping schedule.' },
        { p: "Happy to jump on a call if you'd prefer to discuss." },
        { p: 'Best,' },
        { p: 'Vivian' },
      ],
    },
    works: [
      { zh: '主旨清楚標示 [Action needed]＋結論——Marcus 立刻知道要打開', en: 'Subject flags [Action needed] + the conclusion — Marcus opens immediately' },
      { zh: '第一句直接說延誤天數——對 Marcus 這種忙人最有效率', en: 'First sentence states the delay length — most efficient for a busy Marcus' },
      { zh: '提出 3 個具體方案＋公司主動承擔成本——展現夥伴責任感', en: '3 concrete options + we absorb the cost — shows partnership accountability' },
      { zh: '明確截止日期 (Thursday)＋替代溝通方式 (call)——讓 Marcus 容易回應', en: 'Clear deadline + alternative comms — makes it easy for Marcus to respond' },
    ],
    reflect: {
      zh: '把你最近三封寄出的英文 Email 拿出來——主旨欄有標示 [Action needed] / [FYI] 之類的提示嗎？第一句是結論還是寒暄？',
      en: 'Look at your last 3 sent English emails. Do the subjects flag [Action needed] / [FYI]? Is the first sentence a conclusion or a greeting?',
    },
    template: 1,
  },
  {
    id: '2', to: 'Tanaka', role: '日本代理商', task: '修改後設計提案重送', challenge: '高語境商業 · 專業立場',
    zh: '回應 Tanaka 的設計修改要求', en: 'Resubmitting a Revised Design Proposal to Tanaka',
    brief: 'Tanaka 上週退回了設計。你們已縮小坪數 30%、改用內斂色調，現在要重新提交。',
    ctx: {
      zh: '上週 Tanaka 拒絕了你的日本門市設計提案。經過追問你發現具體問題是：(1) 門市坪數太大 (2) 視覺風格太鮮豔。你的團隊已經做了修改：縮小坪數 30%、改成更內斂的色調。現在要重新提交。',
      en: 'Last week Tanaka rejected your design saying "doesn\'t fit our market." Through follow-up questions: (1) footprint too large, (2) visual style too bold. Your team has revised: 30% smaller footprint, more restrained color palette. Now you need to resubmit.',
    },
    before: {
      subject: { s: 'Revised design', hot: 'subject' },
      body: [
        [{ s: 'Dear Tanaka-san,' }],
        [{ s: 'I hope this email finds you well.' }],
        [{ s: 'I am very sorry about the previous design proposal.', hot: 'sorry' },
         { s: 'We understand that it was not suitable for the Japanese market, and we sincerely apologize for not understanding your needs better the first time.', hot: 'sorry' }],
        [{ s: 'Our team has been working hard to make changes based on your feedback.' },
         { s: 'We tried to address the issues you mentioned.' },
         { s: 'The new design has some adjustments to the size and style.', hot: 'vague' },
         { s: 'Please find the revised proposal attached.' }],
        [{ s: 'We hope this version will be more suitable.' },
         { s: 'If there is anything that is still not right, please let us know and we will adjust again.', hot: 'again' }],
        [{ s: 'Thank you very much for your patience and guidance.' }],
        [{ s: 'Best regards,' }, { s: 'Kevin' }],
      ],
    },
    flaws: [
      { id: 'sorry', zh: '過度道歉讓你聽起來不夠專業——Tanaka 重視能力，不需要你卑躬屈膝', en: 'Over-apologizing sounds unprofessional — Tanaka values competence over deference' },
      { id: 'vague', zh: '「some adjustments」沒說清楚改了什麼', en: '"Some adjustments" hides the changes — Tanaka still has to open the attachment' },
      { id: 'again', zh: '「if not right, we will adjust again」聽起來像沒信心', en: '"Will adjust again" sounds like you expect rejection — undermines confidence' },
      { id: 'subject', zh: '主旨「Revised design」太簡略——Tanaka 不知道是哪個版本', en: 'Subject "Revised design" too sparse — Tanaka doesn\'t know which version' },
    ],
    picks: [
      { ask: '主旨要怎麼寫？',
        options: [
          { en: 'Revised design', why: '太簡略，Tanaka 不知道是哪個版本。' },
          { en: 'Our apologies — the new design is attached, with some adjustments to the size and style', added: true, why: '主旨在道歉，不是在說這封信要對方做什麼。' },
          { en: '[Review needed] Japan store design v2 — revised per your June 3 feedback', ok: true, why: '主旨直接說「v2＋具體日期」，Tanaka 立刻看出這是回應他的回饋。' },
        ] },
      { ask: '第一句要寫什麼？',
        options: [
          { en: 'I am very sorry about the previous design proposal.', why: '過度道歉。Tanaka 重視能力，不需要你卑躬屈膝。' },
          { en: 'The revised Japan store design (v2) is attached for your review.', ok: true, why: '第一句說重點，接著兩個具體變更，展現你認真聽進去了。' },
          { en: 'I hope this email finds you well.', why: '寒暄不是結論。' },
        ] },
      { ask: '怎麼說改了什麼？',
        options: [
          { en: 'The new design has some adjustments to the size and style.', why: '「some adjustments」沒說清楚改了什麼，Tanaka 還是得打開附件。' },
          { en: 'Footprint reduced from 85㎡ to 60㎡ (-30%) — matching the typical Tokyo specialty cafe scale you noted.', ok: true, why: '具體數字，而且回應了 Tanaka 自己說過的話。' },
          { en: 'If there is anything that is still not right, please let us know and we will adjust again.', why: '聽起來像沒信心，好像你已經預期會被退回。' },
        ] },
      { ask: '怎麼收尾？',
        options: [
          { en: 'We hope this version will be more suitable. Thank you very much for your patience and guidance, and please let us know if anything is still not right.', added: true, why: '空洞的感謝，而且聽起來像沒信心。' },
          { en: 'I appreciate your detailed feedback last time — it was exactly what we needed to make the design fit the Japanese market.', ok: true, why: '結尾感謝具體 (detailed feedback)，不是空洞的「謝謝您的耐心」。' },
        ] },
    ],
    after: {
      subject: '[Review needed] Japan store design v2 — revised per your June 3 feedback',
      body: [
        { p: 'Dear Tanaka-san,' },
        { p: 'The revised Japan store design (v2) is attached for your review. Two specific changes based on your June 3 feedback:', key: true },
        { ol: [
          'Footprint reduced from 85㎡ to 60㎡ (-30%) — matching the typical Tokyo specialty cafe scale you noted.',
          'Color palette refined: deep wood + warm cream replacing the brighter teal accents. Sample renders on pages 4-5.',
        ] },
        { p: "Three points where I'd value your judgment:" },
        { ul: [
          'Does the revised footprint align with your target neighborhoods (Shibuya / Ginza)?',
          'Are the seating configurations (8 seats indoor + 4 outdoor) appropriate for Japanese customer expectations?',
          'Would you prefer to discuss in our June 18 call, or via email?',
        ] },
        { p: 'I appreciate your detailed feedback last time — it was exactly what we needed to make the design fit the Japanese market.' },
        { p: 'Best regards,' },
        { p: 'Kevin' },
      ],
    },
    works: [
      { zh: '主旨直接說「v2＋具體日期」——Tanaka 立刻看出這是回應他的回饋', en: 'Subject says "v2 + specific date" — Tanaka sees this is responding to his input' },
      { zh: '第一句說重點＋兩個具體變更——展現你認真聽進去了', en: 'First sentence + 2 concrete changes show you listened carefully' },
      { zh: '提出三個具體問題——展現專業判斷而非被動等指示', en: 'Three specific questions show professional judgment, not passive waiting' },
      { zh: '結尾感謝具體 (detailed feedback)——非空洞的「謝謝您的耐心」', en: 'Final thanks names specific value, not generic "thank you for patience"' },
    ],
    note: {
      label: '文化敏感度提醒',
      zh: '日本商業文化重視專業能力與細節。BLUF 不等於粗魯——只要你的專業判斷有具體根據，並對對方的回饋表達認真聆聽，BLUF 在日本商業情境完全適用。Tanaka 期待的是「聽懂他的話、做出專業回應」，不是「不停道歉」。',
      en: 'Japanese business culture values competence and detail. BLUF is not rude — as long as your judgment has specific basis and you show genuine listening, BLUF works in Japanese business contexts.',
    },
    template: 2,
  },
  {
    id: '3', to: 'Linda', role: '海外拓展總監', task: '日本展店風險升級', challenge: '內部 · 量化選項＋建議',
    zh: '向 Linda 報告日本展店風險', en: 'Escalating Japan Store Risk to Linda',
    brief: '日本第二間門市的許可慢了 6 週，Q3 開幕幾乎不可行，而 Linda 已向董事會承諾 Q3。',
    ctx: {
      zh: '日本第二間門市的建築許可審批比預期慢了 6 週，Q3 開幕幾乎不可行。如果延後到 Q4，行銷活動會損失 NT$80 萬，但供應商合約有違約金 NT$120 萬。Linda 已經向董事會承諾 Q3 開幕，這個延誤她需要立刻知道。',
      en: 'Japan Store #2 permit is 6 weeks behind. Q3 opening nearly infeasible. Q4 delay = NT$800K marketing loss but NT$1.2M supplier penalty. Linda has committed Q3 to the board. She needs to know immediately.',
    },
    before: {
      subject: { s: 'Japan project update' },
      body: [
        [{ s: 'Hi Linda,' }],
        [{ s: 'Hope you had a good weekend.' }],
        [{ s: 'I wanted to give you an update on the Japan Store #2 situation.' },
         { s: 'I have been in touch with the local team and there have been some developments that we should probably discuss.', hot: 'vague' }],
        [{ s: 'The permit office has been processing things, but it seems like the timeline is taking longer than originally expected.', hot: 'numbers' },
         { s: 'There might be some implications for the Q3 opening date that we had planned.', hot: 'numbers' },
         { s: "The team is looking into options but it's not entirely clear yet what the best path forward would be." }],
        [{ s: 'There are also some financial considerations to think about, like the supplier contract and marketing budget.' },
         { s: 'We probably need to weigh different scenarios.', hot: 'push' }],
        [{ s: 'When you have time, maybe we could set up a call to discuss?', hot: 'urgency' },
         { s: "I'm happy to walk through the details." }],
        [{ s: 'Thanks,' }, { s: 'Kevin' }],
      ],
    },
    flaws: [
      { id: 'vague', zh: 'Linda 讀完不知道嚴重程度——「some developments」太模糊', en: 'Linda can\'t gauge severity — "some developments" is too vague' },
      { id: 'numbers', zh: '沒有具體數字或日期——主管無法做決策', en: "No specific numbers or dates — director can't make decisions" },
      { id: 'push', zh: '「we probably need to weigh scenarios」＝把工作推回給 Linda', en: '"We probably need to weigh scenarios" = pushing the work back to Linda' },
      { id: 'urgency', zh: '結尾沒有時間迫切感——這是要向董事會報告的事', en: "No urgency at the end — affects board commitments, can't wait" },
    ],
    picks: [
      { ask: '主旨要怎麼寫？',
        options: [
          { en: 'Japan project update', why: '看不出嚴重程度，也看不出要 Linda 做什麼。' },
          { en: '[Decision needed by Wed] Japan Store #2 — Q3 at risk, recommending Q4 move', ok: true, why: '主旨直接說 [Decision needed by Wed]，Linda 立刻知道優先順序。' },
          { en: '[FYI] Some developments on Japan Store #2 that we should probably discuss', added: true, why: '[FYI] 代表不用處理，但這件事 Linda 必須決定。' },
        ] },
      { ask: '第一句要寫什麼？',
        options: [
          { en: 'Hope you had a good weekend.', why: '寒暄。Linda 還不知道出了什麼事。' },
          { en: 'I wanted to give you an update on the Japan Store #2 situation.', why: '這是在宣布你要講話，不是在講重點。' },
          { en: 'Japan Store #2 cannot open in Q3.', ok: true, why: '第一句說「不能 Q3 開幕」——主管最痛的點先說，不躲。' },
        ] },
      { ask: '怎麼收尾？',
        options: [
          { en: 'We probably need to weigh different scenarios.', why: '把工作推回給 Linda。' },
          { en: "When you have time, maybe we could set up a call to discuss? I'm happy to walk through the details.", why: '沒有時間迫切感。這是要向董事會報告的事。' },
          { en: 'I recommend Option A. Available for a 30-min call any time today or Tuesday.', ok: true, why: '推薦其中一個選項，並主動提出時間和形式。' },
        ] },
    ],
    after: {
      subject: '[Decision needed by Wed] Japan Store #2 — Q3 at risk, recommending Q4 move',
      body: [
        { p: 'Hi Linda,' },
        { p: 'Japan Store #2 cannot open in Q3. The permit will land 6 weeks late. I recommend we move the opening to Q4 (target Oct 15) and need your decision by Wednesday so I can re-negotiate with the supplier before their contract deadline.', key: true },
        { p: 'Situation:' },
        { ul: [
          'Permit approved date: now Aug 20 (was Jun 30) — confirmed by local architect today.',
          'Supplier contract deadline: Jul 5. Penalty for cancellation: NT$1.2M.',
          'Current Q3 marketing commitments: NT$800K (refundable if we cancel by Jun 20).',
        ] },
        { p: "Three options I've evaluated:" },
        { al: [
          'Move to Q4 (recommended): Cancel Q3 marketing (-NT$800K), renegotiate supplier (~NT$300K). Total: ~NT$1.1M, but preserves brand quality.',
          'Push for Q3 with rushed permit: 30% success rate per local lawyer. Failure = same as A but with public credibility loss.',
          'Cancel Japan #2 entirely: Worst case. Sunk cost NT$2.1M + lost market position.',
        ] },
        { p: 'I recommend Option A. I can send you the full analysis (one-pager) before our Wednesday call if helpful.' },
        { p: 'Available for a 30-min call any time today or Tuesday.' },
        { p: 'Kevin' },
      ],
    },
    works: [
      { zh: '主旨直接說 [Decision needed by Wed]——Linda 立刻知道優先順序', en: 'Subject states [Decision needed by Wed] — Linda knows priority instantly' },
      { zh: '第一句說「不能 Q3 開幕」——主管最痛的點先說，不躲', en: 'First sentence says "cannot open Q3" — leads with worst news, no hiding' },
      { zh: '3 個量化選項＋推薦其中一個——展現分析能力', en: '3 quantified options + recommendation shows analysis, not punting to boss' },
      { zh: '主動提出時間和形式——「30 分鐘 call 今天或週二」', en: 'Proactively offers time + format — "30-min call today or Tuesday" actionable' },
    ],
    note: {
      label: '對主管溝通的關鍵原則',
      zh: '主管最珍貴的是時間。BLUF 對主管不是「沒禮貌」——它是「尊重你的時間，幫你做決策」。永遠記住：主管要的是「我可以決定的選項」，不是「需要我自己分析的問題」。',
      en: 'A director\'s most precious resource is time. BLUF isn\'t rude to leadership — it\'s respect for their time. Always: directors want "options I can decide on," not "problems I need to analyze myself."',
    },
    template: 1,
  },
];

const COMPARE = {
  lead: '第一句話＝你最想讓對方知道的那件事。',
  rows: ['主旨關鍵字', '第一句重點', '結尾行動', '文化調整', '不變的核心'],
  cols: [
    { name: 'Marcus', vals: ['[Action needed]', '延誤 14 天＋主動方案', '週四前確認方案', '直接、量化、主動承擔', '結論第 1 句'] },
    { name: 'Tanaka', vals: ['[Review needed]', '修改版＋兩個具體變更', '提三個具體問題', '專業＋具體感謝具體回饋', '結論第 1 句'] },
    { name: 'Linda', vals: ['[Decision needed by Wed]', 'Q3 不可行＋建議 Q4', '提供 30 分鐘 call', '量化選項＋主動推薦', '結論第 1 句'] },
  ],
};

// Card B. The bracketed slots are left in the draft for the trainee to overwrite.
const TEMPLATES = [
  { id: 0, zh: '進度更新', en: 'Progress Update',
    when: '當你需要主動告知對方某項工作的最新狀態。',
    subject: '[FYI] [Project name] — Update [Date]',
    body: '[Project/item] is [status: on track / delayed / complete]. [One reason if needed.]\n\nNext step: [action] by [date]. No response needed unless you have concerns.' },
  { id: 1, zh: '問題報告＋建議', en: 'Problem + Recommendation',
    when: '當你需要報告問題並請對方做決定。',
    subject: '[Decision needed] [Issue] — Response by [Date]',
    body: '[Problem statement in one sentence.] This is caused by [one reason].\n\nI recommend [solution]. Please confirm by [date] so I can [next action].' },
  { id: 2, zh: '跨文化跟進', en: 'Cross-cultural Follow-up',
    when: '會議或對話結束後，書面確認雙方共識。',
    subject: 'Following up on [topic] — [Action needed / FYI]',
    body: 'Just to confirm our discussion on [date]: [one-sentence BLUF of what was agreed or what you need].\n\nPlease let me know if this is correct / if you need anything from my side by [date].' },
];

// ---------------------------------------------------------------- the week

const WEEKLY = {
  note: '每週五下午花 5 分鐘，回答這四個問題。',
  checks: [
    { id: 'q1', zh: '本週我有沒有用 BLUF 結構寫至少一封英文 Email？', en: 'Did I use BLUF structure in at least one English email this week?',
      yes: '很好。這封信的第一句，就是你最想讓對方知道的那件事。', no: '下週挑一封就好。', go: 'email/write', goLabel: '去寫一封' },
    { id: 'q2', zh: '本週我有沒有在英文會議中至少主動開口一次？', en: 'Did I speak up at least once in an English meeting this week?',
      yes: '開口了就算數，不需要完美。', no: '下週先挑一句放進小抄。', go: 'phrases/mine', goLabel: '挑一句' },
    { id: 'q3', zh: '遇到模糊的否定時，我有沒有主動追問？', en: 'When facing vague rejection, did I actively ask clarifying questions?',
      yes: '追問本身就是一種專業。', no: '先把一句追問句練熟。', go: 'phrases/clarify', goLabel: '看追問句' },
  ],
  q4: {
    zh: '本週我說過最像 Vivian 或 Amy 的話是什麼？下次怎麼說會更像 Kevin？',
    en: "What's the most \"Vivian/Amy-like\" thing I said this week? How would I say it more like Kevin next time?",
  },
};

// Shown once each, at exactly this many times spoken. They count attempts, so
// nothing here may praise accuracy.
const MILESTONES = [
  { n: 1, zh: '第一句說出來了。最難的就是這一句。' },
  { n: 10, zh: '開口 10 次了。這樣的節奏，已經可以帶進會議了。' },
  { n: 25, zh: '25 次了。這些句子開始變成你自己的了。' },
  { n: 50, zh: '50 次。下次會議，你不用再想第一個字要說什麼。' },
  { n: 100, zh: '100 次。繼續開口，就是這麼回事。' },
  { n: 200, zh: '200 次了。把這個數字記下來，下一次被否定時想想它。' },
  { n: 500, zh: '500 次。Vivian 的那場會議，換成你一定不一樣了。' },
];

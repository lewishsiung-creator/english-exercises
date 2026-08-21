/* Riva & Rex — the practice half of the page.

   This file appends to the SAME `NOTEBOOK.sessions` array that content.js
   defines, so /riva-rex/ is one page with one contents list. It is a separate
   file only because the two halves are edited for different reasons: a session
   is added after a lesson, an exercise is added when new material arrives, and
   nobody should have to scroll past a Cambridge reading paper to add last
   week's vocabulary.

   Load order matters. index.html loads content.js first, because that is where
   NOTEBOOK is declared; this file only pushes onto it.

   WHAT IS IN HERE
   ---------------
   The material that is worked THROUGH rather than looked back on: five
   Cambridge Movers reading papers, a present simple vs present progressive
   worksheet, and one topic reading. Seventy-five multiple-choice questions,
   133 word-box blanks, twenty grammar gaps.

   These entries carry no date. `dateEn` holds the source tag ("Cambridge
   Movers", "Grammar", "Reading") where a session holds a day, and `n` is a
   string — 'P1' rather than 1 — so the two kinds of entry can share a
   contents list without two things being numbered 1.

   The first entry carries `group`, which is what draws the "Practice" band
   across the document and the contents list. Only the first one should have
   it; a second `group` would start a second band.

   THE READING PASSAGES HAVE NO CHINESE, and that is deliberate. Everywhere
   else on this page an English line has its Traditional Chinese one tap away.
   Here the questions underneath are comprehension practice, so a translation
   would answer them before they are asked. The Chinese in this file lives in
   the instructions, the labels, the word-box notes and the contents list —
   scaffolding, never the text being tested. The one exception is the last
   exercise, a topic reading rather than a test, which is bilingual throughout
   because it came that way.

   BLOCK TYPES USED HERE
   ---------------------
   All of the notebook's blocks still work. Four more are defined in render.js
   for the shapes a test paper needs:

     passage   an English-only reading text, each paragraph with its own 🔊
     mcq       a question with three options; the right one locks, wrong ones
               fade but stay, so the teacher can see what was guessed
     wordbox   the Cambridge Part 5 shape — a text with several blanks and a
               box of words, SOME OF WHICH ARE SPARE. Pick a word, then pick
               its blank. The number spare is not always one — across these
               five papers it ranges from one to three — so the renderer counts
               and says how many rather than assuming.
     answers   a prompt with the answer held behind a tap, for the "make it
               negative" and "make it a question" drills. There is no box to
               type into anywhere on this page.

   ADDING AN EXERCISE
   ------------------
   Copy the last entry, change `id`, `n` and the titles, rewrite the blocks,
   and put it at the bottom. Unlike the sessions in content.js, these are NOT
   reversed for display — they have no dates, so there is no newest among them
   and P1 is genuinely where a person should start. Bottom of the array is
   bottom of the page. `id` becomes the anchor: /riva-rex/#p3.
*/

/* Traditional Chinese for every word that appears in a word box.

   The phrase cards on this page carry their own `zh` and `egZh`, so they were
   never the gap. The word boxes were: 175 word slots, 135 distinct words, and
   exactly one of them ("broom") appears on a phrase card anywhere on the page.
   A child meeting "queue", "apron" or "knitting" in a Cambridge paper had
   nowhere on the page to look it up.

   One shared map rather than a gloss per box, because the same word turns up
   in several papers — "cold" is in four — and two boxes glossing it two
   different ways would be worse than not glossing it at all.

   Singular and plural are separate keys where both appear, because the English
   differs even though the Chinese does not; likewise "lamp" (a small one on a
   table) and "lamps" (the ones over a street), which are genuinely different
   things in the two texts they come from.

   These stay hidden until asked for, like every other Chinese line here — the
   button under each box opens that box, and the 中文 switch in the bar opens
   the lot. */
NOTEBOOK.glossary = {
  // people and places
  'teacher': '老師', 'driver': '司機', 'cashier': '收銀員', 'friends': '朋友',
  'school': '學校', 'library': '圖書館', 'market': '市場', 'kitchen': '廚房',
  'garden': '花園', 'garage': '車庫', 'zoo': '動物園', 'club': '社團',
  'street': '街道', 'road': '馬路', 'floor': '地板',

  // things in a house
  'desk': '書桌', 'lamp': '檯燈', 'lamps': '路燈', 'window': '窗戶',
  'windows': '窗戶', 'mirror': '鏡子', 'blanket': '毯子', 'boxes': '箱子',
  'broom': '掃把', 'dust': '灰塵', 'fire': '爐火', 'radio': '收音機',
  'plate': '盤子', 'plates': '盤子', 'glass': '玻璃杯', 'spoon': '湯匙',
  'tray': '餐盤', 'knife': '刀子', 'basket': '籃子',

  // school things
  'book': '書', 'books': '書', 'pencil': '鉛筆', 'pencil case': '鉛筆盒',
  'bag': '書包', 'homework': '功課', 'story': '故事', 'guitar': '吉他',
  'camera': '相機', 'ticket': '門票',

  // clothes
  'coat': '外套', 'jacket': '夾克', 'scarf': '圍巾', 'boots': '靴子',
  'shoes': '鞋子', 'apron': '圍裙', 'helmet': '安全帽', 'raincoat': '雨衣',
  'umbrella': '雨傘', 'towel': '毛巾',

  // food and drink
  'breakfast': '早餐', 'lunch': '午餐', 'picnic': '野餐', 'sandwich': '三明治',
  'cake': '蛋糕', 'cookies': '餅乾', 'banana': '香蕉', 'apple': '蘋果',
  'apples': '蘋果', 'eggs': '蛋', 'milk': '牛奶', 'juice': '果汁',
  'water': '水', 'coffee': '咖啡', 'soup': '湯', 'salad': '沙拉',
  'vegetables': '蔬菜', 'toothpaste': '牙膏',

  // outside
  'sand': '沙子', 'sky': '天空', 'snow': '雪', 'rainbow': '彩虹',
  'stars': '星星', 'moon': '月亮', 'puddles': '水窪', 'flowers': '花',
  'kite': '風箏', 'birds': '鳥', 'animals': '動物', 'lions': '獅子',
  'cat': '貓', 'dog': '狗', 'noise': '噪音',

  // getting about
  'bus': '公車', 'train': '火車', 'bicycle': '腳踏車', 'queue': '排隊的隊伍',
  'money': '錢', 'coins': '硬幣', 'alarm': '鬧鐘', 'Monday': '星期一',

  // how something is
  'happy': '開心的', 'angry': '生氣的', 'nervous': '緊張的', 'tired': '累的',
  'sleepy': '想睡的', 'hungry': '餓的', 'quiet': '安靜的', 'ready': '準備好的',
  'cold': '冷的', 'hot': '熱的', 'wet': '濕的', 'sunny': '晴朗的',
  'bright': '明亮的', 'purple': '紫色', 'fast': '快的', 'early': '早',

  // things you do
  'read': '讀', 'write': '寫', 'draw': '畫', 'sing': '唱歌',
  'play': '玩', 'swim': '游泳', 'run': '跑', 'ride': '騎',
  'walk': '走路', 'sleep': '睡覺', 'dream': '夢', 'study': '讀書',
  'practise': '練習', 'clean': '打掃', 'wash': '洗', 'cook': '煮',
  'buy': '買', 'pay': '付錢', 'find': '找到', 'hurry': '趕快',
  'brush': '刷', 'brushes': '刷（他／她）', 'paint': '顏料', 'knitting': '織毛線',
};

NOTEBOOK.sessions.push(
    // ---------------------------------------------------------------- P1
    {
      id: 'p1',
      n: 'P1',
      group: {
        en: 'Practice',
        zh: '練習題',
        noteEn: 'Reading papers and grammar — worked through rather than looked back on. These have no date: do them in any order, more than once.',
        noteZh: '閱讀考卷與文法練習——這些是用來「做」的，不是用來回顧的。它們沒有日期：可以照任何順序做，也可以重複做。',
      },
      date: '2025-11-01',
      dateEn: 'Cambridge Movers',
      dateZh: '劍橋 Movers',
      en: 'Reading exercise 1 — Tom, Lucy and a puppy',
      zh: '閱讀練習 1——Tom、Lucy 和一隻小狗',

      focus: [
        { en: 'Part 4 · Reading for meaning', zh: '第四部分 · 閱讀理解' },
        { en: 'Part 5 · Gap-fill', zh: '第五部分 · 克漏字' },
        { en: '15 questions', zh: '15 題' },
        { en: '5 word boxes', zh: '5 個單字框' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Three short texts, five questions each, then five gap-fills. Read the whole text before you look at the questions — all of the answers are in it, and none of them need anything you already know.',
          zh: '三篇短文，每篇五題，接著是五個克漏字。先把整篇讀完再看題目——所有答案都在文章裡，沒有一題需要用到你原本就知道的知識。',
        },

        {
          t: 'passage',
          n: '1',
          en: 'Tom’s Weekend',
          paras: [
            'On Saturday morning, Tom played football in the park with his friends.',
            'After lunch, he helped his dad wash the car.',
            'On Sunday, Tom stayed at home because it rained.',
            'He watched a movie and ate popcorn with his family.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about Tom’s weekend',
          zh: '關於 Tom 週末的問題',
          items: [
            { q: 'Where did Tom play football?', options: ['At school', 'In the park', 'In the garden'], answer: 1 },
            { q: 'What did Tom do after lunch on Saturday?', options: ['He washed the car.', 'He went shopping.', 'He visited his grandma.'], answer: 0 },
            { q: 'Why did Tom stay at home on Sunday?', options: ['He was tired.', 'It was raining.', 'He had homework.'], answer: 1 },
            { q: 'What did Tom eat while watching the movie?', options: ['Cake', 'Popcorn', 'Ice cream'], answer: 1 },
            { q: 'Who did Tom watch the movie with?', options: ['His dog', 'His friends', 'His family'], answer: 2 },
          ],
        },

        {
          t: 'passage',
          n: '2',
          en: 'Lucy’s Birthday',
          paras: [
            'Yesterday was Lucy’s birthday.',
            'She got a big pink cake from her parents and a book from her grandmother.',
            'Her friends came to her house and they played games in the garden.',
            'Everyone sang and danced until the evening.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about Lucy’s birthday',
          zh: '關於 Lucy 生日的問題',
          items: [
            { q: 'What did Lucy’s grandmother give her?', options: ['A toy', 'A book', 'A dress'], answer: 1 },
            { q: 'Where did Lucy and her friends play?', options: ['In the park', 'In the garden', 'In the living room'], answer: 1 },
            { q: 'Who gave Lucy a cake?', options: ['Her parents', 'Her teacher', 'Her friend'], answer: 0 },
            { q: 'What colour was the cake?', options: ['Blue', 'Pink', 'White'], answer: 1 },
            { q: 'What did they do in the evening?', options: ['They watched a movie.', 'They sang and danced.', 'They went shopping.'], answer: 1 },
          ],
        },

        {
          t: 'passage',
          n: '3',
          en: 'The New Puppy',
          paras: [
            'Emma’s family has a new puppy called Max.',
            'Max is small and brown.',
            'He likes running in the garden and sleeping on the sofa.',
            'Every morning, Emma gives him milk and takes him for a walk.',
            'In the evening, he likes to play with a ball.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about Max',
          zh: '關於 Max 的問題',
          items: [
            { q: 'What is the puppy’s name?', options: ['Max', 'Ben', 'Leo'], answer: 0 },
            { q: 'What colour is Max?', options: ['Black', 'White', 'Brown'], answer: 2 },
            { q: 'Where does Max like to sleep?', options: ['On the sofa', 'In the garden', 'In Emma’s bed'], answer: 0 },
            { q: 'What does Emma give Max every morning?', options: ['Water', 'Milk', 'Bread'], answer: 1 },
            { q: 'What does Max play with in the evening?', options: ['A stick', 'A ball', 'A cat'], answer: 1 },
          ],
        },

        {
          t: 'wordbox',
          en: 'Gap-fill 1 — At the Beach',
          zh: '克漏字 1——在海邊',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['sand', 'swim', 'sunny', 'picnic', 'happy', 'snow', 'towel'],
          text: 'It’s a ___ day, so my family goes to the beach. My sister and I play in the ___. We ___ in the sea and eat our ___ under a big umbrella. Everyone feels ___ and tired at the end of the day.',
          answers: ['sunny', 'sand', 'swim', 'picnic', 'happy'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 2 — Jack’s Morning',
          zh: '克漏字 2——Jack 的早晨',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['brushes', 'breakfast', 'shoes', 'bus', 'school', 'sleepy', 'cat'],
          text: 'Jack wakes up at seven o’clock. He washes his face and ___ his teeth. Then he eats ___ and puts on his ___. He runs to the ___ because he doesn’t want to be late for ___.',
          answers: ['brushes', 'breakfast', 'shoes', 'bus', 'school'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 3 — The Picnic in the Park',
          zh: '克漏字 3——公園野餐',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['blanket', 'juice', 'birds', 'kite', 'Monday', 'play', 'banana'],
          text: 'On Sunday, my friends and I have a picnic in the park. We sit on a ___ and drink ___. Some ___ sing in the trees, and we ___ with a ___. We eat a ___, and everyone laughs a lot.',
          answers: ['blanket', 'juice', 'birds', 'play', 'kite', 'banana'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 4 — My Classroom',
          zh: '克漏字 4——我的教室',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['teacher', 'desk', 'write', 'draw', 'happy', 'milk', 'window'],
          text: 'This is my classroom. Our ___ is very kind. I sit near the ___, so I can see the trees outside. We like to ___ stories and ___ pictures in our notebooks. All the students feel ___.',
          answers: ['teacher', 'window', 'write', 'draw', 'happy'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 5 — Rainy Afternoon',
          zh: '克漏字 5——下雨的午後',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['umbrella', 'hot', 'books', 'puddles', 'coat', 'run', 'sandwich'],
          text: 'It is raining today. I wear my ___ and take an ___. My brother and I like to jump in the ___. After playing outside, we go home, eat a ___ and read our ___.',
          answers: ['coat', 'umbrella', 'puddles', 'sandwich', 'books'],
        },
      ],
    },

    // ---------------------------------------------------------------- P2
    {
      id: 'p2',
      n: 'P2',
      date: '2025-11-08',
      dateEn: 'Cambridge Movers',
      dateZh: '劍橋 Movers',
      en: 'Reading exercise 2 — Camping, a new classmate, the library',
      zh: '閱讀練習 2——露營、新同學、圖書館',

      focus: [
        { en: 'Part 4 · Reading for meaning', zh: '第四部分 · 閱讀理解' },
        { en: 'Part 5 · Gap-fill', zh: '第五部分 · 克漏字' },
        { en: 'Guessing from the text', zh: '從文章推測' },
        { en: 'Choosing a title', zh: '選標題' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'This one has two questions that are different from the rest: one asks what you can GUESS about Emma, and one asks for the best TITLE. Neither answer is written in the text — you have to work them out from the whole thing.',
          zh: '這一份裡有兩題和其他題不一樣：一題問你可以「推測」出 Emma 什麼，另一題問最好的「標題」是什麼。這兩題的答案都沒有寫在文章裡——你必須從整篇去推敲。',
        },

        {
          t: 'passage',
          n: '1',
          en: 'The Camping Trip',
          paras: [
            'Last Saturday, Emma and her parents went camping in the mountains.',
            'They put up their tent near a small lake and collected wood for a fire.',
            'At night, they cooked sausages and told stories under the stars.',
            'It was cold, but Emma did not mind because the fire was warm.',
            'In the morning, they heard birds singing and packed their things to go home.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about the camping trip',
          zh: '關於露營的問題',
          items: [
            { q: 'Where did Emma and her family go camping?', options: ['In a forest', 'On a mountain', 'Next to a lake'], answer: 2 },
            { q: 'What did they use the wood for?', options: ['To make a fire', 'To build a tent', 'To cook breakfast'], answer: 0 },
            { q: 'Why was Emma not cold at night?', options: ['She had a thick coat', 'She was near the fire', 'She slept in the car'], answer: 1 },
            { q: 'What did they do in the morning?', options: ['Cooked sausages', 'Went swimming', 'Packed their things'], answer: 2 },
            { q: 'What can you guess about Emma?', options: ['She likes being outside.', 'She is afraid of animals.', 'She does not like cold weather.'], answer: 0 },
          ],
        },

        {
          t: 'passage',
          n: '2',
          en: 'The New Classmate',
          paras: [
            'On Monday, Mr Lee introduced a new student to the class.',
            'Her name was Mia, and she had just moved from Canada.',
            'At first, she was quiet because she didn’t know anyone.',
            'At break time, Sophie invited her to play basketball, and soon everyone joined them.',
            'By the end of the day, Mia was laughing and talking like she had always been there.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about Mia',
          zh: '關於 Mia 的問題',
          items: [
            { q: 'Where is Mia from?', options: ['The UK', 'Canada', 'Australia'], answer: 1 },
            { q: 'Why was Mia quiet at first?', options: ['She was new.', 'She was sick.', 'She didn’t like sports.'], answer: 0 },
            { q: 'Who asked Mia to play basketball?', options: ['Mr Lee', 'Sophie', 'Her brother'], answer: 1 },
            { q: 'When did Mia start talking more?', options: ['After break time', 'Before class', 'The next day'], answer: 0 },
            { q: 'What is the best title for this story?', options: ['A Rainy School Day', 'Making a New Friend', 'Playing Sports with Family'], answer: 1 },
          ],
        },

        {
          t: 'passage',
          n: '3',
          en: 'The Library Visit',
          paras: [
            'Every Thursday after school, Leo goes to the town library.',
            'He likes the quiet there and always sits by the window.',
            'Last week, he borrowed a book about space and planets.',
            'At home, he read about astronauts who work in space for months.',
            'One day, Leo hopes to be a scientist and visit a space centre himself.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about Leo',
          zh: '關於 Leo 的問題',
          items: [
            { q: 'When does Leo go to the library?', options: ['On Monday', 'On Thursday', 'On Saturday'], answer: 1 },
            { q: 'Where does he sit?', options: ['By the door', 'Next to the window', 'Near the desk'], answer: 1 },
            { q: 'What book did Leo borrow last week?', options: ['A book about animals', 'A book about space', 'A book about music'], answer: 1 },
            { q: 'What does Leo want to do in the future?', options: ['Become a scientist', 'Work in a library', 'Teach English'], answer: 0 },
            { q: 'What word best describes Leo?', options: ['Curious', 'Lazy', 'Forgetful'], answer: 0 },
          ],
        },

        {
          t: 'wordbox',
          en: 'Gap-fill 1 — At the Supermarket',
          zh: '克漏字 1——在超市',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['basket', 'cashier', 'buy', 'milk', 'eggs', 'queue', 'coins'],
          text: 'Mum and I went to the supermarket after school. We put some ___ and ___ into our ___. There were many people waiting in the ___ to pay. When it was our turn, Mum gave the ___ some ___.',
          answers: ['milk', 'eggs', 'basket', 'queue', 'cashier', 'coins'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 2 — After the Storm',
          zh: '克漏字 2——暴風雨過後',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['wet', 'sky', 'broom', 'rainbow', 'windows', 'clean', 'boots'],
          text: 'The storm finally stopped, and everything was ___. I put on my ___ and went outside with a ___ to ___ the yard. The sun came out, and a beautiful ___ appeared in the ___.',
          answers: ['wet', 'boots', 'broom', 'clean', 'rainbow', 'sky'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 3 — Sunday at Grandma’s House',
          zh: '克漏字 3——在奶奶家的星期天',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['cookies', 'radio', 'story', 'knitting', 'garden', 'plates', 'flowers'],
          text: 'Every Sunday afternoon, we visit Grandma. She likes listening to the ___ and telling us a ___ while she’s ___. After tea, we bring fresh ___ from her ___ to the table and eat her sweet ___.',
          answers: ['radio', 'story', 'knitting', 'flowers', 'garden', 'cookies'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 4 — The Art Class',
          zh: '克漏字 4——美術課',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['paint', 'brush', 'apron', 'clean', 'purple', 'water', 'draw'],
          text: 'In art class today, we used a ___ to ___ a picture of a castle. My friend spilled some ___ on her ___, so we had to ___ it. I mixed red and blue to make a nice ___ colour.',
          answers: ['brush', 'paint', 'water', 'apron', 'clean', 'purple'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 5 — Morning Routine',
          zh: '克漏字 5——早晨的例行活動',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['alarm', 'mirror', 'toothpaste', 'hurry', 'bag', 'bus', 'raincoat'],
          text: 'My ___ rings at 6:30 every morning. I look in the ___ and brush my teeth with ___. Then I pack my ___ and ___ to catch the ___ to school.',
          answers: ['alarm', 'mirror', 'toothpaste', 'bag', 'hurry', 'bus'],
        },
      ],
    },

    // ---------------------------------------------------------------- P3
    {
      id: 'p3',
      n: 'P3',
      date: '2025-11-15',
      dateEn: 'Cambridge Movers',
      dateZh: '劍橋 Movers',
      en: 'Reading exercise 3 — A volcano, a squirrel, a concert',
      zh: '閱讀練習 3——火山、松鼠、音樂會',

      focus: [
        { en: 'Part 4 · Reading for meaning', zh: '第四部分 · 閱讀理解' },
        { en: 'Part 5 · Gap-fill', zh: '第五部分 · 克漏字' },
        { en: 'How someone felt', zh: '某人的感受' },
        { en: 'What we can learn', zh: '可以看出什麼' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Watch the questions that ask HOW someone felt. The text rarely uses the same word as the options, so you have to match a feeling to a description of it — proud to “worked hard all week”, happy to “everyone clapped”.',
          zh: '注意那些問「某人有什麼感受」的題目。文章通常不會用和選項一樣的字，所以你必須把「感受」和「描述」對起來——把 proud 對到 worked hard all week，把 happy 對到 everyone clapped。',
        },

        {
          t: 'passage',
          n: '1',
          en: 'The Science Project',
          paras: [
            'This week, Oliver’s class had to make a science project.',
            'Oliver and his friend Kate built a volcano using a bottle and some red paint.',
            'When they poured vinegar and baking soda inside, the “lava” came out slowly and looked real!',
            'Their teacher was very impressed and took a photo for the school website.',
            'Oliver felt proud because they had worked hard all week.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about the science project',
          zh: '關於自然科展的問題',
          items: [
            { q: 'What did Oliver and Kate make?', options: ['A rocket', 'A volcano', 'A robot'], answer: 1 },
            { q: 'What did they use inside the bottle?', options: ['Water and soap', 'Milk and sugar', 'Vinegar and baking soda'], answer: 2 },
            { q: 'Why did the teacher take a photo?', options: ['She liked their project.', 'She wanted to fix it.', 'She needed a new poster.'], answer: 0 },
            { q: 'How did Oliver feel after the project?', options: ['Worried', 'Proud', 'Bored'], answer: 1 },
            { q: 'What can we learn about Oliver and Kate?', options: ['They are lazy.', 'They worked hard together.', 'They don’t like science.'], answer: 1 },
          ],
        },

        {
          t: 'passage',
          n: '2',
          en: 'The Trip to the Forest',
          paras: [
            'Last Sunday, Tom and his family went for a walk in the forest.',
            'They saw tall trees and a river that was shining in the sunlight.',
            'Tom’s dad showed him how to use a map and a compass.',
            'When they stopped for lunch, a squirrel came close and looked at their sandwiches!',
            'Everyone laughed and took pictures before going home.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about the forest',
          zh: '關於森林的問題',
          items: [
            { q: 'Where did Tom and his family go?', options: ['To the mountain', 'To the forest', 'To the beach'], answer: 1 },
            { q: 'What did Tom’s dad teach him?', options: ['How to use a map', 'How to cook', 'How to swim'], answer: 0 },
            { q: 'What animal did they see during lunch?', options: ['A bird', 'A rabbit', 'A squirrel'], answer: 2 },
            { q: 'Why did the family laugh?', options: ['The squirrel was funny.', 'Tom fell in the river.', 'It started to rain.'], answer: 0 },
            { q: 'What did they do before going home?', options: ['Cleaned the forest', 'Took pictures', 'Fed the animals'], answer: 1 },
          ],
        },

        {
          t: 'passage',
          n: '3',
          en: 'The Concert at School',
          paras: [
            'The music club at Sunny School had a concert on Friday evening.',
            'Students played different instruments like the guitar, drums, and violin.',
            'Lisa sang a song that she had practised for two weeks, and everyone clapped loudly.',
            'After the show, the principal gave the students small certificates to thank them.',
            'Lisa felt a little nervous at first but very happy at the end.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about the concert',
          zh: '關於音樂會的問題',
          items: [
            { q: 'When did the concert take place?', options: ['On Thursday', 'On Friday evening', 'On Saturday morning'], answer: 1 },
            { q: 'What did Lisa do in the concert?', options: ['Played the guitar', 'Sang a song', 'Danced'], answer: 1 },
            { q: 'How long did Lisa practise her song?', options: ['Two days', 'Two weeks', 'Two months'], answer: 1 },
            { q: 'Who gave certificates to the students?', options: ['The teacher', 'The principal', 'Lisa’s parents'], answer: 1 },
            { q: 'How did Lisa feel after the concert?', options: ['Nervous', 'Sad', 'Happy'], answer: 2 },
          ],
        },

        {
          t: 'wordbox',
          en: 'Gap-fill 1 — The Lost Pencil Case',
          zh: '克漏字 1——不見的鉛筆盒',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['pencil case', 'desk', 'library', 'teacher', 'angry', 'find', 'draw'],
          text: 'Mia couldn’t see her ___ on the ___ this morning. She looked in her bag and under her chair, but it wasn’t there. After class, her ___ told her to check the ___, and she was so glad to ___ it again!',
          answers: ['pencil case', 'desk', 'teacher', 'library', 'find'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 2 — Winter Morning',
          zh: '克漏字 2——冬天的早晨',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['cold', 'window', 'fire', 'blanket', 'coffee', 'snow', 'cook'],
          text: 'The wind blew through the ___ early in the morning. Mum made some hot ___ while Dad started a small ___ in the fireplace. I wrapped myself in a warm ___ and watched the ___ fall outside.',
          answers: ['window', 'coffee', 'fire', 'blanket', 'snow'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 3 — Cleaning Day',
          zh: '克漏字 3——打掃日',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['broom', 'garage', 'boxes', 'dust', 'floor', 'wash', 'happy'],
          text: 'On Saturday, we cleaned the ___ together. Mum used a ___ to sweep the ___, and I moved old ___ to the corner. When we finished, everything looked clean and we felt ___.',
          answers: ['garage', 'broom', 'floor', 'boxes', 'happy'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 4 — Lunch at School',
          zh: '克漏字 4——學校午餐',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['salad', 'spoon', 'tray', 'sandwich', 'hungry', 'apple', 'glass'],
          text: 'Today I was very ___ at lunchtime. I took a ___ and put a ___, a ___, and an ___ on it. I ate everything quickly because it was so delicious!',
          answers: ['hungry', 'tray', 'sandwich', 'salad', 'apple'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 5 — Evening Walk',
          zh: '克漏字 5——傍晚散步',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['street', 'lamps', 'quiet', 'dog', 'stars', 'run', 'coat'],
          text: 'After dinner, I took our ___ for a walk along the ___. The sky was dark but full of ___, and the ___ shone softly above us. Everything was peaceful and ___ as we walked home slowly.',
          answers: ['dog', 'street', 'stars', 'lamps', 'quiet'],
        },
      ],
    },

    // ---------------------------------------------------------------- P4
    {
      id: 'p4',
      n: 'P4',
      date: '2025-12-27',
      dateEn: 'Cambridge Movers',
      dateZh: '劍橋 Movers',
      en: 'Reading exercise 4 — Sports day, a rainy afternoon, a library monitor',
      zh: '閱讀練習 4——運動會、下雨的午後、圖書股長',

      focus: [
        { en: 'Part 4 · Reading for meaning', zh: '第四部分 · 閱讀理解' },
        { en: 'Part 5 · Gap-fill', zh: '第五部分 · 克漏字' },
        { en: 'Words that describe a person', zh: '描述一個人的字' },
        { en: 'Tired but happy', zh: '又累又開心' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Three texts about ordinary days. The last question of each one asks you to sum somebody up in a single word — careful, cosy, helpful. Those are the questions worth slowing down for.',
          zh: '三篇關於平凡日子的短文。每一篇的最後一題，都要你用一個字總結一個人——careful、cosy、helpful。這幾題值得放慢速度想一想。',
        },

        {
          t: 'passage',
          n: '1',
          en: 'The School Sports Day',
          paras: [
            'Sunny School had its sports day on a warm Friday morning.',
            'All the students wore sports clothes and met on the playground.',
            'Some children ran races, while others played football or jumped rope.',
            'Emma was nervous before her race, but her friends cheered loudly for her.',
            'At the end of the day, everyone received a small medal and went home tired but happy.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about sports day',
          zh: '關於運動會的問題',
          items: [
            { q: 'When did the sports day take place?', options: ['On Thursday afternoon', 'On Friday morning', 'On Saturday morning'], answer: 1 },
            { q: 'Where did the students meet?', options: ['In the classroom', 'At the playground', 'In the gym'], answer: 1 },
            { q: 'What activity did some students do?', options: ['Painted pictures', 'Ran races', 'Watched videos'], answer: 1 },
            { q: 'Why was Emma nervous?', options: ['She lost her medal', 'She had a race', 'She was late'], answer: 1 },
            { q: 'How did the students feel at the end of the day?', options: ['Angry and bored', 'Tired but happy', 'Cold and sleepy'], answer: 1 },
          ],
        },

        {
          t: 'passage',
          n: '2',
          en: 'A Rainy Winter Afternoon',
          paras: [
            'It was a cold and rainy afternoon in December.',
            'Jack stayed at home because the weather was bad.',
            'He helped his mum bake cookies and cleaned his room.',
            'Later, he sat by the window, drank warm milk, and watched the rain fall.',
            'Jack felt calm and cosy, even though he couldn’t play outside.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about Jack’s afternoon',
          zh: '關於 Jack 的午後的問題',
          items: [
            { q: 'Why did Jack stay at home?', options: ['He was sick', 'The weather was bad', 'He had homework'], answer: 1 },
            { q: 'What did Jack help his mum do?', options: ['Cook dinner', 'Bake cookies', 'Wash clothes'], answer: 1 },
            { q: 'Where did Jack sit later?', options: ['On the sofa', 'At the table', 'By the window'], answer: 2 },
            { q: 'What did Jack drink?', options: ['Tea', 'Juice', 'Warm milk'], answer: 2 },
            { q: 'How did Jack feel in the afternoon?', options: ['Bored', 'Angry', 'Cosy'], answer: 2 },
          ],
        },

        {
          t: 'passage',
          n: '3',
          en: 'The Class Library Monitor',
          paras: [
            'Every week, one student becomes the class library monitor.',
            'This week, it was Noah’s turn.',
            'He helped his classmates choose books and put them back on the shelf.',
            'When someone couldn’t find a book, Noah showed them where to look.',
            'His teacher thanked him because he was careful and helpful.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about Noah',
          zh: '關於 Noah 的問題',
          items: [
            { q: 'What job did Noah have this week?', options: ['Cleaner', 'Library monitor', 'Class leader'], answer: 1 },
            { q: 'What did Noah help his classmates do?', options: ['Write stories', 'Choose books', 'Draw pictures'], answer: 1 },
            { q: 'Where did Noah put the books?', options: ['On the desk', 'In the bag', 'On the shelf'], answer: 2 },
            { q: 'Why did the teacher thank Noah?', options: ['He was fast', 'He was quiet', 'He was helpful'], answer: 2 },
            { q: 'Which word best describes Noah?', options: ['Careful', 'Lazy', 'Noisy'], answer: 0 },
          ],
        },

        {
          t: 'wordbox',
          en: 'Gap-fill 1 — Winter Morning at Home',
          zh: '克漏字 1——家裡的冬日早晨',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['cold', 'scarf', 'breakfast', 'window', 'boots', 'snow', 'sunny'],
          text: 'It was very ___ when I woke up. I looked out of the ___ and saw white ___ everywhere. After eating ___, I put on my ___ and ___ before going outside.',
          answers: ['cold', 'window', 'snow', 'breakfast', 'boots', 'scarf'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 2 — Preparing for a Test',
          zh: '克漏字 2——準備考試',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['study', 'desk', 'pencil', 'nervous', 'ready', 'book', 'hungry'],
          text: 'Before the test, I sat at my ___ and opened my ___. I checked my ___ and read my notes carefully. I felt a little ___, but soon I was ___ to start.',
          answers: ['desk', 'book', 'pencil', 'nervous', 'ready'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 3 — After-School Club',
          zh: '克漏字 3——課後社團',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['club', 'practise', 'guitar', 'teacher', 'early', 'sing', 'homework'],
          text: 'On Tuesday afternoons, I go to a music ___. We ___ songs and play the ___. Our ___ helps us a lot, so I always finish my ___ early that day.',
          answers: ['club', 'sing', 'guitar', 'teacher', 'homework'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 4 — Shopping with Dad',
          zh: '克漏字 4——和爸爸去買東西',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['market', 'basket', 'apples', 'money', 'cashier', 'cake', 'pay'],
          text: 'Dad and I went to the ___ after school. We put some ___ and bread into the ___. At the end, Dad gave the ___ some ___ and we went home.',
          answers: ['market', 'apples', 'basket', 'cashier', 'money'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 5 — A Quiet Evening',
          zh: '克漏字 5——安靜的夜晚',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['lamp', 'story', 'blanket', 'tired', 'stars', 'read', 'noise'],
          text: 'In the evening, I ___ a book under a small ___. I covered myself with a warm ___ and listened to the quiet night. There was no ___, and I felt very ___.',
          answers: ['read', 'lamp', 'blanket', 'noise', 'tired'],
        },
      ],
    },

    // ---------------------------------------------------------------- P5
    {
      id: 'p5',
      n: 'P5',
      date: '2026-03-14',
      dateEn: 'Cambridge Movers',
      dateZh: '劍橋 Movers',
      en: 'Reading exercise 5 — A school garden, a busy Saturday, an art competition',
      zh: '閱讀練習 5——學校菜園、忙碌的星期六、美術比賽',

      focus: [
        { en: 'Part 4 · Reading for meaning', zh: '第四部分 · 閱讀理解' },
        { en: 'Part 5 · Gap-fill', zh: '第五部分 · 克漏字' },
        { en: 'What will probably happen', zh: '接下來可能會發生什麼' },
        { en: 'Reading to the end', zh: '讀到最後一句' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'The hardest questions here ask what someone will PROBABLY do next. The answer is never stated — it is always hiding in the last sentence of the text, so read all the way to the end before you choose.',
          zh: '這份裡最難的題目，是問某人「接下來可能會做什麼」。答案從來不會直接寫出來——它總是藏在文章的最後一句，所以選之前一定要讀到最後。',
        },

        {
          t: 'passage',
          n: '1',
          en: 'The School Garden',
          paras: [
            'Last month, the students at Green Hill School started a small garden behind their classroom.',
            'They planted flowers, tomatoes, and carrots.',
            'Every afternoon, two students water the plants and pull out the weeds.',
            'After a few weeks, the tomatoes began to grow, and everyone was excited.',
            'The teacher said they would make salad when the vegetables were ready.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about the garden',
          zh: '關於菜園的問題',
          items: [
            { q: 'Where is the garden?', options: ['Behind the classroom', 'Near the playground', 'In front of the school gate'], answer: 0 },
            { q: 'What vegetables did the students plant?', options: ['Potatoes and corn', 'Tomatoes and carrots', 'Beans and onions'], answer: 1 },
            { q: 'What do two students do every afternoon?', options: ['Water the plants', 'Pick the vegetables', 'Paint the garden'], answer: 0 },
            { q: 'Why were the students excited?', options: ['The flowers were colourful', 'The tomatoes started growing', 'They finished their homework'], answer: 1 },
            { q: 'What will the class probably do later?', options: ['Sell the vegetables', 'Make a salad', 'Plant more trees'], answer: 1 },
          ],
        },

        {
          t: 'passage',
          n: '2',
          en: 'Ben’s Busy Saturday',
          paras: [
            'Ben had a busy Saturday last weekend.',
            'In the morning, he helped his mother carry groceries from the car.',
            'After lunch, he went to the park to ride his bicycle with his cousin.',
            'They rode around the lake three times and stopped to watch the ducks.',
            'In the evening, Ben felt tired but happy after such an active day.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about Ben’s Saturday',
          zh: '關於 Ben 星期六的問題',
          items: [
            { q: 'What did Ben do in the morning?', options: ['Cleaned his room', 'Carried groceries', 'Walked the dog'], answer: 1 },
            { q: 'Who did Ben go to the park with?', options: ['His cousin', 'His brother', 'His friend'], answer: 0 },
            { q: 'What did they ride?', options: ['Skateboards', 'Bicycles', 'Scooters'], answer: 1 },
            { q: 'What did they see near the lake?', options: ['Fish', 'Ducks', 'Boats'], answer: 1 },
            { q: 'How did Ben feel in the evening?', options: ['Excited and noisy', 'Tired but happy', 'Angry and hungry'], answer: 1 },
          ],
        },

        {
          t: 'passage',
          n: '3',
          en: 'The Art Competition',
          paras: [
            'Lucy loves drawing and painting.',
            'One day, her teacher told the class about an art competition in the city.',
            'Lucy spent several evenings drawing a picture of a colourful market.',
            'When the results came out, Lucy won second place and received a small prize.',
            'She was proud and decided to keep practising her art.',
          ],
        },
        {
          t: 'mcq',
          en: 'Questions about Lucy',
          zh: '關於 Lucy 的問題',
          items: [
            { q: 'What does Lucy enjoy doing?', options: ['Drawing and painting', 'Playing football', 'Singing songs'], answer: 0 },
            { q: 'Who told the class about the competition?', options: ['Lucy’s friend', 'The teacher', 'The principal'], answer: 1 },
            { q: 'What picture did Lucy draw?', options: ['A forest', 'A market', 'A beach'], answer: 1 },
            { q: 'What prize did Lucy win?', options: ['First place', 'Second place', 'Third place'], answer: 1 },
            { q: 'What will Lucy probably do next?', options: ['Stop drawing', 'Practise more', 'Sell her picture'], answer: 1 },
          ],
        },

        {
          t: 'wordbox',
          en: 'Gap-fill 1 — Morning at the Bus Stop',
          zh: '克漏字 1——公車站的早晨',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['bus', 'jacket', 'cold', 'friends', 'umbrella', 'driver', 'sandwich'],
          text: 'It was very ___ this morning. I wore my warm ___ and waited for the ___. Some of my ___ were already there. When the bus arrived, the ___ smiled and said good morning.',
          answers: ['cold', 'jacket', 'bus', 'friends', 'driver'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 2 — Helping in the Kitchen',
          zh: '克漏字 2——在廚房幫忙',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['kitchen', 'vegetables', 'knife', 'soup', 'hungry', 'plate', 'wash'],
          text: 'Yesterday evening, I helped my mother in the ___. She asked me to ___ the carrots and cut the ___. Soon the ___ was ready, and everyone felt very ___.',
          answers: ['kitchen', 'wash', 'vegetables', 'soup', 'hungry'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 3 — The New Bicycle',
          zh: '克漏字 3——新腳踏車',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['bicycle', 'helmet', 'road', 'ride', 'fast', 'basket', 'train'],
          text: 'For my birthday, I received a new ___. Before I go out, I always wear my ___. My dad says I should ride carefully on the ___. Sometimes I ___ around the park and enjoy the fresh air.',
          answers: ['bicycle', 'helmet', 'road', 'ride'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 4 — A Visit to the Zoo',
          zh: '克漏字 4——參觀動物園',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['zoo', 'animals', 'camera', 'lions', 'walk', 'lunch', 'ticket'],
          text: 'Our class visited the ___ last week. We saw many ___ and took photos with our ___. My favourite were the ___. After a long ___, we ate our ___ near the entrance.',
          answers: ['zoo', 'animals', 'camera', 'lions', 'walk', 'lunch'],
        },
        {
          t: 'wordbox',
          en: 'Gap-fill 5 — A Quiet Night',
          zh: '克漏字 5——寧靜的夜',
          hintEn: 'Tap a word, then tap the blank it belongs in.',
          hintZh: '先點一個單字，再點它要放進去的空格。',
          words: ['moon', 'stars', 'bright', 'sleep', 'window', 'noise', 'dream'],
          text: 'The sky was clear and full of ___. The ___ looked big and ___. I looked out of my ___ before going to ___. Soon I closed my eyes and had a peaceful ___.',
          answers: ['stars', 'moon', 'bright', 'window', 'sleep', 'dream'],
        },
      ],
    },

    // ---------------------------------------------------------------- P6
    {
      id: 'p6',
      n: 'P6',
      date: '2026-07-04',
      dateEn: 'Grammar',
      dateZh: '文法',
      en: 'Simple present vs present progressive',
      zh: '簡單現在式 vs. 現在進行式',

      focus: [
        { en: 'Habits and facts', zh: '習慣與事實' },
        { en: 'Happening now', zh: '現在正在發生' },
        { en: 'Negatives and questions', zh: '否定句與問句' },
        { en: 'The signal words', zh: '關鍵提示字' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Two tenses that both talk about the present, and the whole difference is whether you mean “generally” or “right now”. Almost every question below can be answered from one signal word in the sentence.',
          zh: '兩個都在講「現在」的時態，而全部的差別只在於你指的是「一般來說」還是「此時此刻」。下面幾乎每一題，都可以從句子裡的一個提示字判斷出來。',
        },

        {
          t: 'note',
          en: 'Simple present — habits, routines and general facts',
          zh: '簡單現在式——習慣、例行活動與一般事實',
          bodyEn: 'Use it for what happens again and again, and for what is always true. I get up at seven every day. She goes to school by bus. Birds fly. Water boils at 100°C. The only shape to remember is the third person: I / you / we / they play, but he / she / it plays. Negatives take don’t and doesn’t — I don’t like fish, he doesn’t play tennis — and questions take Do and Does: Do you like English? Does she walk to school? Notice that once you have used does or doesn’t, the main verb loses its -s. It has already been said once, and English does not say it twice.',
          bodyZh: '用在「一再重複發生的事」，以及「一直都是真的事」。I get up at seven every day.／She goes to school by bus.／Birds fly.／Water boils at 100°C. 唯一要記的變化是第三人稱：I / you / we / they play，但 he / she / it plays。否定句用 don’t 和 doesn’t——I don’t like fish、he doesn’t play tennis——問句用 Do 和 Does：Do you like English?／Does she walk to school? 注意：一旦用了 does 或 doesn’t，主要動詞就不再加 -s。那個 -s 已經說過一次了，英文不會說兩次。',
        },

        {
          t: 'note',
          en: 'Present progressive — happening right now',
          zh: '現在進行式——此刻正在發生',
          bodyEn: 'Use am / is / are + V-ing for an action happening at this moment. I am doing my homework now. They are playing soccer right now. Negatives just add not — I am not watching TV, she isn’t sleeping, they aren’t running — and questions swap the first two words round: Are you listening? Is he eating lunch? The signal words are the giveaway. now, right now, at the moment, Look!, Listen! and Be quiet! all point to the progressive. usually, every day, every morning, always and often all point to the simple present.',
          bodyZh: '用 am / is / are + V-ing 表示「此刻正在發生的動作」。I am doing my homework now.／They are playing soccer right now. 否定句只要加 not——I am not watching TV、she isn’t sleeping、they aren’t running——問句則把前兩個字對調：Are you listening?／Is he eating lunch? 提示字是最大的線索：now、right now、at the moment、Look!、Listen!、Be quiet! 都指向進行式；usually、every day、every morning、always、often 都指向簡單現在式。',
        },

        {
          t: 'gap',
          en: 'Part 2 — Choose the correct answer',
          zh: '第二部分——選出正確答案',
          hintEn: 'Find the signal word first, then choose. The reason appears after you choose.',
          hintZh: '先找出提示字，再選答案。選完之後會出現理由。',
          items: [
            {
              text: 'Tom usually ___ to school.',
              textZh: 'Tom 通常走路上學。',
              options: ['walks', 'is walking'],
              answer: 0,
              why: { en: '“Usually” means it happens again and again, so it is a habit — simple present.', zh: 'usually 表示這件事一再發生，所以是習慣——用簡單現在式。' },
            },
            {
              text: 'Look! The baby ___.',
              textZh: '你看！那個寶寶正在哭。',
              options: ['is crying', 'cries'],
              answer: 0,
              why: { en: '“Look!” means it is happening in front of you at this moment — progressive.', zh: 'Look! 表示這件事就在眼前、此刻正在發生——用進行式。' },
            },
            {
              text: 'My sister ___ books every night.',
              textZh: '我姊姊每天晚上都看書。',
              options: ['reads', 'is reading'],
              answer: 0,
              why: { en: '“Every night” is a routine, so it takes the simple present — and “sister” is he/she/it, so the verb takes -s.', zh: 'every night 是例行活動，所以用簡單現在式——而 sister 屬於 he/she/it，所以動詞要加 -s。' },
            },
            {
              text: 'We ___ dinner right now.',
              textZh: '我們現在正在吃晚餐。',
              options: ['are eating', 'eat'],
              answer: 0,
              why: { en: '“Right now” is the clearest signal there is for the progressive.', zh: 'right now 是進行式最明顯的提示字。' },
            },
            {
              text: 'Birds ___ in the sky.',
              textZh: '鳥在天空中飛。',
              options: ['fly', 'are flying'],
              answer: 0,
              why: { en: 'This is a general fact about birds, not about any particular bird at this moment.', zh: '這是關於「鳥」的一般事實，不是在講此刻某一隻鳥。' },
            },
            {
              text: 'Dad ___ coffee every morning.',
              textZh: '爸爸每天早上都喝咖啡。',
              options: ['drinks', 'is drinking'],
              answer: 0,
              why: { en: '“Every morning” is a habit. Dad is he, so the verb takes -s.', zh: 'every morning 是習慣。Dad 是 he，所以動詞要加 -s。' },
            },
            {
              text: 'Be quiet! The students ___ a test.',
              textZh: '安靜！學生正在考試。',
              options: ['are taking', 'take'],
              answer: 0,
              why: { en: '“Be quiet!” tells you it is happening right now — that is why you have to be quiet.', zh: 'Be quiet! 就是在告訴你這件事正在發生——這正是必須安靜的原因。' },
            },
            {
              text: 'It ___ in Thailand very often.',
              textZh: '泰國不常下雪。',
              options: ['doesn’t snow', 'isn’t snowing'],
              answer: 0,
              why: { en: '“Very often” is about how frequently it happens in general, not about the weather at this moment.', zh: 'very often 講的是「一般來說多常發生」，而不是此刻的天氣。' },
            },
            {
              text: 'Listen! Someone ___.',
              textZh: '你聽！有人正在唱歌。',
              options: ['is singing', 'sings'],
              answer: 0,
              why: { en: '“Listen!” works exactly like “Look!” — it points at this moment.', zh: 'Listen! 的作用和 Look! 完全一樣——它指向此時此刻。' },
            },
            {
              text: 'Jenny ___ her homework now.',
              textZh: 'Jenny 現在正在做功課。',
              options: ['is doing', 'does'],
              answer: 0,
              why: { en: '“Now” is the signal. Note the verb is “doing” — the -ing form of do, not “does”.', zh: 'now 就是提示字。注意動詞是 doing——do 的 -ing 形，不是 does。' },
            },
          ],
        },

        {
          t: 'gap',
          en: 'Part 3 — Fill in the blanks',
          zh: '第三部分——填空練習',
          hintEn: 'Both options use the right verb. Only one uses the right tense.',
          hintZh: '兩個選項用的都是正確的動詞，但只有一個時態正確。',
          items: [
            {
              text: 'My brother usually ___ breakfast at 7:30. (eat)',
              textZh: '我哥哥通常在七點半吃早餐。',
              options: ['eats', 'is eating'],
              answer: 0,
              why: { en: '“Usually” — a habit. Brother is he, so eats.', zh: 'usually——習慣。brother 是 he，所以用 eats。' },
            },
            {
              text: 'Shh! The teacher ___ now. (speak)',
              textZh: '噓！老師現在正在說話。',
              options: ['is speaking', 'speaks'],
              answer: 0,
              why: { en: '“Shh!” and “now” both point at this moment.', zh: 'Shh! 和 now 都指向此時此刻。' },
            },
            {
              text: 'They ___ soccer every Saturday. (play)',
              textZh: '他們每個星期六都踢足球。',
              options: ['play', 'are playing'],
              answer: 0,
              why: { en: '“Every Saturday” is a routine. “They” takes no -s.', zh: 'every Saturday 是例行活動。they 後面的動詞不加 -s。' },
            },
            {
              text: 'I ___ my room right now. (clean)',
              textZh: '我現在正在打掃我的房間。',
              options: ['am cleaning', 'clean'],
              answer: 0,
              why: { en: '“Right now” — progressive. With “I” the be verb is “am”.', zh: 'right now——進行式。主詞是 I 的時候，be 動詞用 am。' },
            },
            {
              text: 'She ___ milk every morning. (drink)',
              textZh: '她每天早上都喝牛奶。',
              options: ['drinks', 'is drinking'],
              answer: 0,
              why: { en: '“Every morning” — a habit, and “she” takes -s.', zh: 'every morning——習慣，而且 she 後面動詞要加 -s。' },
            },
            {
              text: 'Look! The dog ___ under the table. (sleep)',
              textZh: '你看！那隻狗正睡在桌子底下。',
              options: ['is sleeping', 'sleeps'],
              answer: 0,
              why: { en: '“Look!” — happening right in front of you.', zh: 'Look!——就在你眼前正在發生。' },
            },
            {
              text: 'We ___ English on Mondays. (study)',
              textZh: '我們每個星期一上英文。',
              options: ['study', 'are studying'],
              answer: 0,
              why: { en: '“On Mondays” means every Monday — a routine.', zh: 'on Mondays 表示「每個星期一」——例行活動。' },
            },
            {
              text: 'He ___ TV at the moment. (watch)',
              textZh: '他此刻正在看電視。',
              options: ['is watching', 'watches'],
              answer: 0,
              why: { en: '“At the moment” means the same as “right now”.', zh: 'at the moment 和 right now 意思一樣。' },
            },
            {
              text: 'My mom ___ to work by car. (go)',
              textZh: '我媽媽開車去上班。',
              options: ['goes', 'is going'],
              answer: 0,
              why: { en: 'This is how she gets to work in general. Note the spelling: go becomes goes, not gos.', zh: '這是在講她「平常」怎麼去上班。注意拼法：go 變成 goes，不是 gos。' },
            },
            {
              text: 'The children ___ in the park now. (run)',
              textZh: '孩子們現在正在公園裡跑來跑去。',
              options: ['are running', 'run'],
              answer: 0,
              why: { en: '“Now” — progressive. Note the spelling: run doubles its n before -ing.', zh: 'now——進行式。注意拼法：run 加 -ing 之前要重複 n。' },
            },
          ],
        },

        {
          t: 'answers',
          en: 'Part 4 — Make it negative',
          zh: '第四部分——改成否定句',
          hintEn: 'Say the negative out loud first, then tap to check.',
          hintZh: '先把否定句念出來，再點開對答案。',
          items: [
            { q: 'I play basketball every day.', a: 'I don’t play basketball every day.' },
            { q: 'She is eating lunch now.', a: 'She isn’t eating lunch now.' },
            { q: 'They go to school by bus.', a: 'They don’t go to school by bus.' },
            { q: 'He is watching TV right now.', a: 'He isn’t watching TV right now.' },
            { q: 'My dad drinks tea every morning.', a: 'My dad doesn’t drink tea every morning.' },
            { q: 'We are studying English now.', a: 'We aren’t studying English now.' },
          ],
        },

        {
          t: 'answers',
          en: 'Part 5 — Make it a question',
          zh: '第五部分——改成問句',
          hintEn: 'Say the question out loud first, then tap to check.',
          hintZh: '先把問句念出來，再點開對答案。',
          items: [
            { q: 'You like pizza.', a: 'Do you like pizza?' },
            { q: 'She plays the piano.', a: 'Does she play the piano?' },
            { q: 'They are swimming now.', a: 'Are they swimming now?' },
            { q: 'He is reading a comic book.', a: 'Is he reading a comic book?' },
            { q: 'Your brother goes to school by bike.', a: 'Does your brother go to school by bike?' },
            { q: 'The students are writing now.', a: 'Are the students writing now?' },
          ],
        },

        {
          t: 'note',
          en: 'The trap in Parts 4 and 5',
          zh: '第四、第五部分的陷阱',
          bodyEn: 'Watch what happens to the -s. “My dad drinks tea” becomes “My dad doesn’t drink tea” — not “doesn’t drinks”. “She plays the piano” becomes “Does she play the piano?” — not “Does she plays”. The -s moves onto does and leaves the main verb, because English marks the third person once and only once. This is the single most common mistake at this level, and it is worth saying the wrong version out loud once so you can hear how it sounds.',
          bodyZh: '注意 -s 發生了什麼事。My dad drinks tea 變成 My dad doesn’t drink tea——不是 doesn’t drinks。She plays the piano 變成 Does she play the piano?——不是 Does she plays。那個 -s 移到了 does 上面，離開了主要動詞，因為英文的第三人稱只標記「一次」，而且只能一次。這是這個階段最常見的錯誤，值得把錯的版本念出來一次，聽聽看它有多不對勁。',
        },

        {
          t: 'answers',
          en: 'Part 6 — Read and choose',
          zh: '第六部分——讀短文並選出正確動詞',
          hintEn: 'Read each paragraph and say it with the right verbs. Then tap to check the whole paragraph.',
          hintZh: '先讀每一段，並用正確的動詞把它念出來。再點開核對整段。',
          items: [
            {
              q: 'Every day, Ben gets up / is getting up at seven o’clock. He eats / is eating breakfast with his family. Then he goes / is going to school by bus.',
              a: 'Every day, Ben gets up at seven o’clock. He eats breakfast with his family. Then he goes to school by bus.',
            },
            {
              q: 'Today is Saturday. Ben is at home now. He doesn’t go / isn’t going to school today. He plays / is playing with his dog in the garden. His sister reads / is reading a book in the living room. Their parents cook / are cooking lunch in the kitchen.',
              a: 'Today is Saturday. Ben is at home now. He isn’t going to school today. He is playing with his dog in the garden. His sister is reading a book in the living room. Their parents are cooking lunch in the kitchen.',
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Part 7 — Speaking practice',
          zh: '第七部分——口說練習',
          items: [
            {
              en: 'What do you usually do after school?',
              zh: '你放學後通常做什麼？',
              starters: [
                { en: 'After school, I usually ___.', zh: '放學後我通常＿＿＿。' },
                { en: 'On Mondays I ___, but on Fridays I ___.', zh: '星期一我＿＿＿，但星期五我＿＿＿。' },
              ],
            },
            {
              en: 'What are you doing now?',
              zh: '你現在正在做什麼？',
              starters: [
                { en: 'Right now, I am ___.', zh: '我現在正在＿＿＿。' },
                { en: 'At the moment, I am ___ and ___.', zh: '此刻我正在＿＿＿，也正在＿＿＿。' },
              ],
            },
            {
              en: 'What does your mother or father usually do in the morning?',
              zh: '你爸爸或媽媽早上通常做什麼？',
              starters: [
                { en: 'My mother usually ___ in the morning.', zh: '我媽媽早上通常＿＿＿。' },
                { en: 'My father goes to work by ___.', zh: '我爸爸搭＿＿＿去上班。' },
              ],
            },
            {
              en: 'What is your best friend doing now? What about your classmates?',
              zh: '你最好的朋友現在正在做什麼？你的同學呢？',
              starters: [
                { en: 'I think my best friend is ___ right now.', zh: '我想我最好的朋友現在正在＿＿＿。' },
                { en: 'My classmates are probably ___.', zh: '我的同學可能正在＿＿＿。' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Part 8 — Look, think, and say',
          zh: '第八部分——想一想，說出來',
          instructionEn: 'Make six sentences out loud: three in the simple present about things you do again and again, and three in the present progressive about what is happening in this room right now. Say each one, then say which tense it is and why. Tick each signal word as you use it.',
          instructionZh: '用說的造六個句子：三句簡單現在式，講你一再重複做的事；三句現在進行式，講此刻這個房間裡正在發生的事。每說完一句，再說出那是哪一個時態、以及為什麼。每用到一個提示字就打一個勾。',
          prompts: [
            { en: 'Three things you do every week', zh: '三件你每週都會做的事' },
            { en: 'Three things happening in this room now', zh: '三件此刻這個房間裡正在發生的事' },
            { en: 'Now say which tense each one is, and why', zh: '接著說出每一句是哪個時態，以及為什麼' },
          ],
          checklist: [
            { en: 'usually', zh: '通常' },
            { en: 'every day', zh: '每天' },
            { en: 'often', zh: '常常' },
            { en: 'always', zh: '總是' },
            { en: 'now', zh: '現在' },
            { en: 'right now', zh: '此刻' },
            { en: 'at the moment', zh: '目前' },
            { en: 'Look! / Listen!', zh: '你看！／你聽！' },
          ],
          frames: [
            { en: 'I usually ___ on ___.', zh: '我通常在＿＿＿（時間）＿＿＿。' },
            { en: 'My ___ always ___ before dinner.', zh: '我的＿＿＿總是在晚餐前＿＿＿。' },
            { en: 'Right now, ___ is ___.', zh: '此刻，＿＿＿正在＿＿＿。' },
            { en: 'Look! ___ are ___.', zh: '你看！＿＿＿正在＿＿＿。' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- P7
    {
      id: 'p7',
      n: 'P7',
      date: '2026-07-25',
      dateEn: 'Reading',
      dateZh: '閱讀',
      en: 'The escape room at Taipei Children’s Amusement Park',
      zh: '臺北市立兒童新樂園的密室逃脫',

      focus: [
        { en: 'Three game themes', zh: '三種遊戲主題' },
        { en: 'Teamwork', zh: '團隊合作' },
        { en: 'Language for playing', zh: '玩遊戲時用的句子' },
        { en: 'Rules and tickets', zh: '規則與票務' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'The one bilingual reading on this page. It is not a test, so the Chinese is right there behind the 中 chip as usual — this is something to understand before you go, not something to be examined on.',
          zh: '這是本頁唯一一篇雙語閱讀。它不是測驗，所以中文一如往常就放在「中」的按鈕後面——這是出發前要看懂的東西，不是要拿來考你的。',
        },

        {
          t: 'summary',
          en: 'The escape room is a short team game at Taipei Children’s Amusement Park. Players enter a special room and look for clues. They need to solve puzzles and finish the mission before time is up. Each game is about 12 minutes long, which is shorter than many other escape rooms, so it is good for beginners.',
          zh: '密室逃脫是臺北市立兒童新樂園裡的一種短時間團隊遊戲。玩家會進入一個特別的房間並尋找線索。他們需要在時間結束前解開謎題並完成任務。每場遊戲大約是 12 分鐘，比許多其他密室逃脫短，因此很適合初學者。',
        },

        {
          t: 'phrases',
          en: 'The three themes',
          zh: '三種主題',
          items: [
            {
              en: 'Pharaoh’s Tomb ★★☆☆☆',
              zh: '法老之墓（難度 ★★☆☆☆）',
              eg: 'Players enter an old Egyptian tomb and need to find three special objects to open the exit.',
              egZh: '玩家會進入一座古老的埃及陵墓，需要找到三個特別的物品才能打開出口。',
            },
            {
              en: 'Magic Candy House ★★★☆☆',
              zh: '魔幻糖果屋（難度 ★★★☆☆）',
              eg: 'A witch has put traps inside a colourful candy house, and players must solve the puzzles to find a way out.',
              egZh: '一位巫婆在色彩繽紛的糖果屋裡設下了陷阱，玩家必須解開謎題才能找到出口。',
            },
            {
              en: 'Haunted Prison ★★★★☆',
              zh: '獄到鬼（難度 ★★★★☆）',
              eg: 'This one is darker and more difficult, and it may have scary sounds — better for children who are not afraid of the dark.',
              egZh: '這個比較黑暗也比較困難，可能會有可怕的聲音——比較適合不怕黑的孩子。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Is it good for an eleven-year-old?',
          zh: '適合 11 歲的孩子嗎？',
          bodyEn: 'Usually yes. Children at this age can understand simple clues, numbers, pictures and patterns, and they can work with other players and share ideas. Four questions are worth asking first, though: Is the child afraid of the dark? Does the child like solving puzzles? Can the child stay calm under time pressure? Can the child follow the staff’s instructions? For a first-time player, the best order is Pharaoh’s Tomb, then Magic Candy House, then Haunted Prison.',
          bodyZh: '通常是的。這個年齡的孩子可以理解簡單的線索、數字、圖片和圖案，也可以和其他玩家合作並分享想法。不過有四個問題值得先想一想：孩子怕黑嗎？孩子喜歡解謎嗎？孩子可以在時間壓力下保持冷靜嗎？孩子可以遵守工作人員的指示嗎？對第一次玩的人來說，建議順序是法老之墓、魔幻糖果屋，最後才是獄到鬼。',
        },

        {
          t: 'phrases',
          en: 'What to say inside the room',
          zh: '在密室裡可以說的話',
          items: [
            { en: 'I found a clue.', zh: '我找到一個線索。', eg: 'I found a clue — look at this number.', egZh: '我找到一個線索——看看這個數字。' },
            { en: 'Maybe this is the password.', zh: '這可能是密碼。', eg: 'Maybe this is the password. Let’s try it.', egZh: '這可能是密碼，我們來試試看。' },
            { en: 'Let’s try this key.', zh: '我們來試試這把鑰匙。', eg: 'Let’s try this key on the small door.', egZh: '我們用這把鑰匙試試那扇小門。' },
            { en: 'We need to work together.', zh: '我們需要一起合作。', eg: 'We only have five minutes left — we need to work together.', egZh: '我們只剩五分鐘了——需要一起合作。' },
            { en: 'Can we ask for a hint?', zh: '我們可以要求提示嗎？', eg: 'This is too hard. Can we ask for a hint?', egZh: '這太難了，我們可以要求提示嗎？' },
            { en: 'I think this picture is important.', zh: '我覺得這張圖片很重要。', eg: 'I think this picture is important — it has the same symbol.', egZh: '我覺得這張圖片很重要——它有一樣的符號。' },
          ],
        },

        {
          t: 'note',
          en: 'The one rule that decides whether you get out',
          zh: '決定你們出不出得去的那一條規則',
          bodyEn: 'Teamwork is the whole game. During the game, players look for hidden objects, find numbers and symbols, open locks, put things in the correct order and connect different clues — and none of that works if the clues stay inside one person’s head. When you find a clue, tell your teammates. Do not keep all the information to yourself. Twelve minutes is not long enough for one person to solve everything alone.',
          bodyZh: '團隊合作就是這個遊戲的全部。在遊戲中，玩家要尋找隱藏的物品、找出數字和符號、打開鎖、把東西按正確順序排列、連結不同的線索——而如果線索只留在一個人的腦袋裡，這些都行不通。當你找到線索時，要告訴隊友，不要把所有資訊都留給自己。十二分鐘，不足以讓一個人獨自解開全部的謎題。',
        },

        {
          t: 'note',
          en: 'Before you go',
          zh: '出發前',
          bodyEn: 'The escape room is usually an extra-paid activity, and the price may depend on the number of players — some tickets and park passes do not include it, so check the latest official information before your visit. Players should arrive early, because late players may not be able to join. You may need to take off your shoes. Food and drinks are not allowed inside, and taking photos or videos may not be allowed either. Anyone who is afraid of small spaces should think carefully before joining.',
          bodyZh: '密室逃脫通常是需要另外付費的活動，價格可能依玩家人數而不同——有些門票或遊樂園套票並不包含這項活動，所以出發前請查看最新的官方資訊。玩家應該提早到達，因為遲到的玩家可能無法參加。你可能需要脫鞋。裡面不能攜帶食物和飲料，也可能禁止拍照或錄影。害怕狹小空間的人，參加前應該仔細考慮。',
        },

        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '聊聊看',
          items: [
            {
              en: 'Which escape room theme do you want to try, and why?',
              zh: '你想嘗試哪一個密室主題？為什麼？',
              starters: [
                { en: 'I want to try ___ because ___.', zh: '我想試＿＿＿，因為＿＿＿。' },
                { en: 'It is a good choice for ___.', zh: '它很適合＿＿＿。' },
                { en: 'I don’t want to try ___ because ___.', zh: '我不想試＿＿＿，因為＿＿＿。' },
              ],
            },
            {
              en: 'Are you afraid of dark rooms? Would that change which theme you choose?',
              zh: '你害怕黑暗的房間嗎？這會改變你選哪一個主題嗎？',
              starters: [
                { en: 'I am / am not afraid of the dark, so ___.', zh: '我怕／不怕黑，所以＿＿＿。' },
                { en: 'It may have scary sounds, but ___.', zh: '裡面可能有可怕的聲音，但是＿＿＿。' },
                { en: 'At first I would be scared, but ___.', zh: '一開始我會害怕，但是＿＿＿。' },
              ],
            },
            {
              en: 'What should you do the moment you find a clue — and why is that the rule?',
              zh: '找到線索的那一刻你應該做什麼——為什麼這是規則？',
              starters: [
                { en: 'When you find a clue, you should ___.', zh: '當你找到線索時，你應該＿＿＿。' },
                { en: 'Do not keep all the information to yourself, because ___.', zh: '不要把所有資訊都留給自己，因為＿＿＿。' },
                { en: 'We only have twelve minutes, so ___.', zh: '我們只有十二分鐘，所以＿＿＿。' },
              ],
            },
            {
              en: 'Do you prefer easy games or difficult games? Has that always been true?',
              zh: '你喜歡簡單的遊戲還是困難的遊戲？你一直都是這樣嗎？',
              starters: [
                { en: 'I prefer ___ games because ___.', zh: '我比較喜歡＿＿＿的遊戲，因為＿＿＿。' },
                { en: 'A difficult game is better when ___.', zh: '＿＿＿的時候，困難的遊戲比較好。' },
                { en: 'I used to prefer ___, but now ___.', zh: '我以前比較喜歡＿＿＿，但現在＿＿＿。' },
              ],
            },
          ],
        },
      ],
    },
);

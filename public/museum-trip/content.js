/* Museum Trip — content for a Grade 1 field trip to 國立臺灣歷史博物館 (Tainan).

   Built 2026-11-12 for a class visit on Friday 13 November 2026.
   No child, no school and no teacher is named anywhere on this page.

   Where the facts come from (read 2026-11-12, official site unless noted):
   - Building ideas 渡海／鯤鯓／雲牆／融合, the solar 光電雲牆 that spells the
     English name, the public art (感恩樹, 跳躍時光的旅程 with its frog, deer
     and whale): https://www.nmth.gov.tw/cp.aspx?n=4810
   - 斯土斯民：臺灣的故事, seven units, prehistory → today:
     https://www.nmth.gov.tw/cp.aspx?n=4113
   - 兒童廳 zones (火車劇場, 我會做衣服, 我來蓋房子, 乘船追飛魚, 我愛玩聲音,
     一起去種田, 山林找腳印, 老三輪車): https://www.nmth.gov.tw/cp.aspx?n=4109
   - Hours and visitor rules: cp.aspx?n=4088 and cp.aspx?n=4090

   The "Story of Taiwan" pages are a six-year-old's retelling of those seven
   units, not the museum's own wording. The official exhibition page names no
   individual objects, so the I Spy list only asks for things that are sure
   to be there (the wall, the pool, the public art, the Children's Hall).

   Page fields:
     ch     chapter id (see CHAPTERS)
     kind   story | hall | manners | spy | words | quiz | end
     art    emoji string, or 'svg:cover' / 'svg:wall'
     lines  [{en, zh}] — read aloud, English then Chinese
     tag    optional small label above the lines {en, zh}
     talk   optional grown-up question {en, zh}, behind 💬
*/

const CHAPTERS = [
  { id: 'go',      icon: '🎒', en: 'Get ready',    zh: '出發前' },
  { id: 'story',   icon: '📜', en: 'Story',        zh: '故事' },
  { id: 'hall',    icon: '🧸', en: 'Kids’ Hall',   zh: '兒童廳' },
  { id: 'manners', icon: '🤫', en: 'Manners',      zh: '規矩' },
  { id: 'spy',     icon: '🔍', en: 'I spy',        zh: '找一找' },
  { id: 'words',   icon: '🔤', en: 'Words',        zh: '單字' },
  { id: 'quiz',    icon: '⭐', en: 'Quiz',         zh: '考考你' },
];

const PAGES = [
  // ── Get ready ───────────────────────────────────────────────
  { ch: 'go', kind: 'story', art: 'svg:cover',
    tag: { en: 'Friday, November 13, 2026', zh: '2026 年 11 月 13 日（星期五）' },
    lines: [
      { en: "It's field trip day!", zh: '校外教學日到了！' },
      { en: 'We are going to the National Museum of Taiwan History in Tainan.',
        zh: '我們要去台南的國立臺灣歷史博物館。' },
    ],
    talk: { en: 'What do you think we will see there?', zh: '你覺得我們會在那裡看到什麼？' } },

  { ch: 'go', kind: 'story', art: '🏛️',
    lines: [
      { en: 'A museum is a big house for special old things.', zh: '博物館是一棟大房子，裡面放著特別的老東西。' },
      { en: 'We go there to look and learn.', zh: '我們去那裡看一看、學一學。' },
    ],
    talk: { en: 'Have you been to a museum before? What did you see?', zh: '你以前去過博物館嗎？看到了什麼？' } },

  { ch: 'go', kind: 'story', art: '⏳📜',
    lines: [
      { en: 'History is the story of long, long ago.', zh: '歷史，就是很久很久以前的故事。' },
      { en: 'This museum tells the story of Taiwan.', zh: '這座博物館說的是台灣的故事。' },
    ],
    talk: { en: 'What was life like when Grandma and Grandpa were little?', zh: '爺爺奶奶小時候，生活是什麼樣子？' } },

  { ch: 'go', kind: 'story', art: 'svg:wall',
    lines: [
      { en: 'Look at the big wall. It looks like clouds in the sky.', zh: '看看那面大牆，它好像天上的雲。' },
      { en: 'It has solar panels. They make power from the sun.', zh: '牆上有太陽能板，可以用太陽光來發電。' },
      { en: "Can you find the museum's name on the wall?", zh: '你能在牆上找到博物館的英文名字嗎？' },
    ],
    talk: { en: 'What else can sunshine do for us?', zh: '太陽除了讓我們暖暖的，還能幫我們做什麼？' } },

  { ch: 'go', kind: 'story', art: '🌊⛵',
    lines: [
      { en: 'In front of the museum, there is a big pool of water.', zh: '博物館前面有一大片水池。' },
      { en: 'It is like the sea.', zh: '它就像大海。' },
      { en: 'Long ago, people came to Taiwan by boat.', zh: '很久以前，人們坐船來到台灣。' },
    ],
    talk: { en: 'How would you feel in a small boat on a big sea?', zh: '如果坐小船在大海上，你會有什麼感覺？' } },

  { ch: 'go', kind: 'story', art: '🏝️',
    lines: [
      { en: 'Taiwan is an island. The sea is all around it.', zh: '台灣是一個島，四周都是大海。' },
      { en: "Many different people came here. Together, they made Taiwan's story.", zh: '很多不同的人來到這裡，一起寫下台灣的故事。' },
    ],
    talk: { en: 'Can you find Taiwan on a map or a globe?', zh: '你能在地圖或地球儀上找到台灣嗎？' } },

  // ── The Story of Taiwan (斯土斯民：臺灣的故事) ──────────────────
  { ch: 'story', kind: 'story', art: '🏹🏺🦌',
    tag: { en: 'In the big exhibition: The Story of Taiwan', zh: '常設展「斯土斯民：臺灣的故事」' },
    lines: [
      { en: 'The first people came to Taiwan long, long ago.', zh: '最早的人，在很久很久以前就來到台灣。' },
      { en: 'They hunted, fished and made clay pots. This was before people wrote books.', zh: '他們打獵、捕魚、做陶罐。那時候還沒有人寫書。' },
    ],
    talk: { en: 'If there were no shops, what would you make yourself?', zh: '如果沒有商店，你會自己做什麼東西？' } },

  { ch: 'story', kind: 'story', art: '⛵🧭📦',
    lines: [
      { en: 'Later, big ships sailed here from far away.', zh: '後來，大船從很遠很遠的地方開到這裡。' },
      { en: 'People came to buy and sell things, like deer skins and sugar.', zh: '人們來這裡買東西、賣東西，像是鹿皮和糖。' },
    ],
    talk: { en: 'If you could trade one toy, what would you trade it for?', zh: '如果可以拿一個玩具去交換，你想換什麼？' } },

  { ch: 'story', kind: 'story', art: '👨‍👩‍👧🌾',
    lines: [
      { en: 'Many families crossed the sea to live here.', zh: '很多家庭渡過大海，搬到這裡住。' },
      { en: 'They planted rice and sugar cane on their farms.', zh: '他們在田裡種稻米和甘蔗。' },
    ],
    talk: { en: 'Where does the rice we eat come from?', zh: '我們吃的米是從哪裡來的？' } },

  { ch: 'story', kind: 'story', art: '🚂🏫🏙️',
    lines: [
      { en: 'Then came trains, new schools and busy streets.', zh: '後來，有了火車、新的學校和熱鬧的街道。' },
      { en: 'Life changed a lot.', zh: '大家的生活改變了很多。' },
    ],
    talk: { en: 'How do you get to school? How did children go long ago?', zh: '你怎麼去上學？以前的小朋友呢？' } },

  { ch: 'story', kind: 'story', art: '🗳️🤝❤️',
    lines: [
      { en: 'Today, people in Taiwan choose their leaders together.', zh: '現在，台灣的人一起投票，選出自己的領導人。' },
      { en: "The museum is for everyone. Your story is part of Taiwan's story, too!", zh: '博物館是大家的。你的故事，也是台灣故事的一部分！' },
    ],
    talk: { en: 'What is a story from our family?', zh: '我們家有什麼故事可以說？' } },

  // ── Children's Hall (兒童廳) ───────────────────────────────────
  { ch: 'hall', kind: 'hall', art: '🧸🚂',
    lines: [
      { en: "The museum has a Children's Hall. You can play and learn there!", zh: '博物館裡有一個兒童廳，可以在那裡邊玩邊學！' },
    ],
    note: { en: 'Ask your teacher: will our class go there?', zh: '問問老師：我們班會去兒童廳嗎？' },
    tiles: [
      { art: '🚂', en: 'Ride the little train and watch a cartoon.', zh: '坐小火車，看卡通。' },
      { art: '👘', en: 'Dress up in clothes from long ago.', zh: '穿上以前的衣服。' },
      { art: '🧱', en: 'Build old houses with giant blocks.', zh: '用大積木蓋老房子。' },
      { art: '🚣', en: 'Row a boat and look for flying fish.', zh: '划小船，找飛魚。' },
      { art: '🍦', en: 'Play the sounds of an old street, like an ice cream cart.', zh: '玩老街的聲音，像是賣冰淇淋的車。' },
      { art: '🌾', en: 'Help bring in the rice with rolling marbles.', zh: '用滾來滾去的彈珠，幫忙收稻米。' },
      { art: '🐾', en: 'Find animal footprints in the forest.', zh: '在森林裡找動物的腳印。' },
      { art: '🛺', en: 'Take a photo on an old tricycle.', zh: '坐上老三輪車拍照。' },
    ] },

  // ── Museum manners ─────────────────────────────────────────────
  { ch: 'manners', kind: 'manners', art: '🚌',
    lines: [
      { en: 'On the bus: is it OK? Tap thumbs up or thumbs down.', zh: '坐遊覽車時，這樣可以嗎？請按 👍 或 👎。' },
    ],
    done: { en: 'You know the bus rules!', zh: '你知道坐遊覽車的規矩了！' },
    items: [
      { art: '🔒', ok: true,  en: 'Wear your seat belt.', zh: '繫好安全帶。',
        why: { en: 'Seat belts keep us safe on the bus.', zh: '安全帶讓我們在車上很安全。' } },
      { art: '🧍', ok: false, en: 'Stand up and walk around while the bus is moving.', zh: '車子開的時候，站起來走來走去。',
        why: { en: 'Stay in your seat until the bus stops.', zh: '車子停好之前，都要坐在位子上。' } },
      { art: '🤢', ok: true,  en: 'Tell your teacher if you feel sick.', zh: '不舒服的時候，告訴老師。',
        why: { en: 'Your teacher can help you feel better.', zh: '老師可以幫助你。' } },
      { art: '📢', ok: false, en: 'Shout and play loudly on the bus.', zh: '在車上大聲吵鬧。',
        why: { en: 'The driver needs a quiet bus to drive safely.', zh: '司機需要安靜，才能安全開車。' } },
      { art: '🗑️', ok: false, en: 'Leave your trash on the seat.', zh: '把垃圾留在座位上。',
        why: { en: 'Take your trash with you.', zh: '垃圾要自己帶走。' } },
      { art: '🙋', ok: true,  en: 'Wait for your teacher before you get off.', zh: '等老師說可以，再下車。',
        why: { en: 'We get off together, one by one.', zh: '大家一起、一個一個下車。' } },
    ] },

  { ch: 'manners', kind: 'manners', art: '🤫',
    lines: [
      { en: 'In the museum: is it OK? Tap thumbs up or thumbs down.', zh: '在博物館裡，這樣可以嗎？請按 👍 或 👎。' },
    ],
    done: { en: 'You know the museum rules!', zh: '你知道博物館的規矩了！' },
    items: [
      { art: '🚶', ok: true,  en: 'Walk slowly.', zh: '慢慢走。',
        why: { en: 'We walk slowly, so everyone is safe.', zh: '我們慢慢走，大家才安全。' } },
      { art: '🏃', ok: false, en: 'Run and play chase.', zh: '跑來跑去、玩追追。',
        why: { en: 'No running in the museum. Save it for the playground!', zh: '博物館裡不跑步，留到操場再跑！' } },
      { art: '👀', ok: true,  en: 'Look with your eyes.', zh: '用眼睛看。',
        why: { en: 'Our eyes do the looking.', zh: '用眼睛好好看就對了。' } },
      { art: '✋', ok: false, en: 'Touch the things in the glass boxes.', zh: '摸展覽品、趴在玻璃上。',
        why: { en: 'Only touch when a sign says you can.', zh: '只有標示「可以摸」的，才可以摸。' } },
      { art: '🤫', ok: true,  en: 'Use a quiet voice.', zh: '小聲說話。',
        why: { en: 'A quiet voice helps everyone look and listen.', zh: '小聲說話，大家才能好好看、好好聽。' } },
      { art: '🍪', ok: false, en: 'Eat snacks in the exhibition room.', zh: '在展覽室裡吃零食。',
        why: { en: 'No food inside. Snacks wait for snack time.', zh: '展覽室裡不吃東西，零食等點心時間再吃。' } },
      { art: '🧑‍🏫', ok: true,  en: 'Stay with your teacher and class.', zh: '跟著老師和同學。',
        why: { en: 'We stay together, so nobody gets lost.', zh: '大家待在一起，才不會走丟。' } },
      { art: '📸', ok: false, en: 'Take photos with the flash on.', zh: '拍照時開閃光燈。',
        why: { en: 'No flash. Bright light can hurt old things.', zh: '不開閃光燈，強光會傷害老東西。' } },
      { art: '🚻', ok: true,  en: 'Tell your teacher before you go to the bathroom.', zh: '要上廁所，先告訴老師。',
        why: { en: 'Then your teacher always knows where you are.', zh: '這樣老師才知道你在哪裡。' } },
    ] },

  // ── I spy ──────────────────────────────────────────────────────
  { ch: 'spy', kind: 'spy', art: '🔍',
    lines: [
      { en: 'At the museum, can you find these? Tap each one you see.', zh: '到了博物館，你找得到這些嗎？看到了就按一下。' },
    ],
    items: [
      { id: 'wall',  art: '☁️', en: 'the cloud wall', zh: '像雲的大牆' },
      { id: 'name',  art: '🔤', en: "the museum's name on the wall", zh: '牆上的博物館英文名字' },
      { id: 'pool',  art: '🌊', en: 'the big pool', zh: '大水池' },
      { id: 'tree',  art: '🌳', en: 'a big silver tree', zh: '一棵銀色的大樹' },
      { id: 'whale', art: '🐋', en: 'a whale', zh: '一隻鯨魚' },
      { id: 'frog',  art: '🐸', en: 'a frog', zh: '一隻青蛙' },
      { id: 'deer',  art: '🦌', en: 'a deer', zh: '一隻鹿' },
      { id: 'boat',  art: '⛵', en: 'a boat', zh: '一艘船' },
      { id: 'pot',   art: '🏺', en: 'an old clay pot', zh: '一個古老的陶罐' },
      { id: 'house', art: '🏠', en: 'an old house', zh: '一間老房子' },
    ] },

  // ── Words ──────────────────────────────────────────────────────
  { ch: 'words', kind: 'words', art: '🔤',
    lines: [
      { en: 'Museum words. Tap a card to hear it.', zh: '博物館單字。按一下卡片聽聽看。' },
    ],
    items: [
      { art: '🏛️', en: 'museum',    zh: '博物館' },
      { art: '📜', en: 'history',   zh: '歷史' },
      { art: '⏳', en: 'long ago',  zh: '很久以前' },
      { art: '📖', en: 'story',     zh: '故事' },
      { art: '🏝️', en: 'island',    zh: '島' },
      { art: '🌊', en: 'sea',       zh: '海' },
      { art: '⛵', en: 'boat',      zh: '船' },
      { art: '☁️', en: 'cloud',     zh: '雲' },
      { art: '☀️', en: 'sun',       zh: '太陽' },
      { art: '🌾', en: 'rice',      zh: '稻米' },
      { art: '👩‍🌾', en: 'farmer',    zh: '農夫' },
      { art: '🚂', en: 'train',     zh: '火車' },
    ] },

  // ── Quiz ───────────────────────────────────────────────────────
  { ch: 'quiz', kind: 'quiz', art: '⭐',
    lines: [
      { en: 'Quiz time! Tap the right picture.', zh: '考考你！按下正確的圖片。' },
    ],
    items: [
      { q: { en: 'What does the big wall look like?', zh: '那面大牆看起來像什麼？' },
        opts: [ { art: '☁️', en: 'clouds', zh: '雲' }, { art: '🐘', en: 'an elephant', zh: '大象' }, { art: '🍕', en: 'a pizza', zh: '披薩' } ] },
      { q: { en: 'Long ago, how did people come to Taiwan?', zh: '很久以前，人們怎麼來到台灣？' },
        opts: [ { art: '⛵', en: 'by boat', zh: '坐船' }, { art: '🚀', en: 'by rocket', zh: '坐火箭' }, { art: '🚲', en: 'by bike', zh: '騎腳踏車' } ] },
      { q: { en: 'What is all around Taiwan?', zh: '台灣的四周是什麼？' },
        opts: [ { art: '🌊', en: 'the sea', zh: '大海' }, { art: '🏜️', en: 'sand', zh: '沙漠' }, { art: '❄️', en: 'snow', zh: '雪' } ] },
      { q: { en: 'What did the families plant on their farms?', zh: '以前的家庭在田裡種什麼？' },
        opts: [ { art: '🌾', en: 'rice', zh: '稻米' }, { art: '🍭', en: 'lollipops', zh: '棒棒糖' }, { art: '🧸', en: 'teddy bears', zh: '泰迪熊' } ] },
      { q: { en: 'In the museum, we…', zh: '在博物館裡，我們要⋯' },
        opts: [ { art: '🚶', en: 'walk slowly', zh: '慢慢走' }, { art: '🏃', en: 'run fast', zh: '跑很快' }, { art: '📢', en: 'shout', zh: '大叫' } ] },
      { q: { en: "What can you do in the Children's Hall?", zh: '在兒童廳可以做什麼？' },
        opts: [ { art: '🚣', en: 'row a boat', zh: '划小船' }, { art: '🏊', en: 'go swimming', zh: '游泳' }, { art: '😴', en: 'take a nap', zh: '睡午覺' } ] },
    ] },  // the first option is always the answer; the page shuffles them

  { ch: 'quiz', kind: 'end', art: '🎉⭐🎒',
    lines: [
      { en: 'You are ready for the museum!', zh: '你已經準備好去博物館了！' },
      { en: 'Have a great trip!', zh: '祝你校外教學玩得開心！' },
    ],
    talk: { en: 'After the trip, ask: what was your favorite thing?', zh: '回來以後問問孩子：你最喜歡什麼？' } },
];

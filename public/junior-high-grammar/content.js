/* 國中英語文法精熟 — 七、八、九年級的文法單元。

   資料來源是路老師的《康軒版國中英語文法精熟講義》PDF，轉檔程式在 tools/：
   parse_grammar_pdf.py 讀 PDF 吐 JSON，build_grammar_content.py 把 JSON 變成
   下面 units 的樣子。八、九年級的 PDF 到了就再跑一次。

   一個單元：
     id        u1…u14，也是網址上的 #錨點
     code      講義上的「文法 1」，標題左邊那個章節牌
     title     文法點本身
     lessons   對應課次，例如 ['B1 GR', 'B1 L1']。這是跟單字頁的連結：
               'B1 GR' → ../junior-high-words/#b1-gr（轉小寫、空白換連字號）。
               單字頁反過來連進來時用的是 #for-b1-gr，render.js 會找出
               lessons 裡含有那一課的單元再捲過去——對照表只存在這裡一份。
     key       講義的「一句話重點」
     rules     核心規則，一條一個 bullet
     patterns  句型對照 { label, en, zh }
     mistakes  常見錯誤 { bad, good, why }

   還沒拿到的年級寫 ready: false，units 留空陣列——年級頁籤還是會出現，
   只是點進去是一段「還沒進來」的說明。

   練習題不寫在這裡：改錯題是從該單元的 mistakes 現場出的（render.js 的
   makeDrill），所以修一條常見錯誤，練習就跟著變，不必維護第二份。 */

const COURSE = {
  title: '國中英語文法精熟',
  titleEn: 'Junior High Grammar',
  source: '康軒版 · 路老師講義',
  wordsHref: '../junior-high-words/',

  grades: [
    {
      id: 'g7',
      label: 'Grade 7',
      zh: '七年級',
      ready: true,
      source: '康軒版 · 路老師講義',
      note: '十四個文法主題，對應第一冊、第二冊全部課次',
      units: [
      {
        id: 'u1', code: '文法 1',
        title: 'be 動詞 am / is / are',
        lessons: ['B1 GR', 'B1 L1'],
        key: 'be 動詞只看主詞決定，不看後面的字。',
        rules: [
          'be 動詞的中文意思是「是」，用來把主詞和後面的身分、狀態連起來。',
          '三種變化只看主詞：I → am、he / she / it 或單數名詞 → is、you / we / they 或複數名詞 → are。',
          '口訣：我用 am，你用 are，is 連著他她它；單數 is，複數 are。',
          '縮寫在口語與寫作都很常見：I\'m、you\'re、he\'s、she\'s、it\'s、we\'re、they\'re。',
        ],
        patterns: [
          { label: '肯定', en: 'I am a student.', zh: '我是學生。' },
          { label: '否定', en: 'She is not (isn\'t) my sister.', zh: '她不是我姊姊。' },
          { label: '疑問', en: 'Are you from Taiwan?', zh: '你來自台灣嗎？' },
          { label: '肯定答', en: 'Yes, I am.', zh: '是的，我是。' },
          { label: '否定答', en: 'No, I\'m not.', zh: '不，我不是。' },
        ],
        mistakes: [
          { bad: 'I is a teacher.', good: 'I am a teacher.', why: '主詞是 I，一定配 am。' },
          { bad: 'My parents is nice.', good: 'My parents are nice.', why: 'parents 是複數，要用 are。' },
          { bad: 'Are you a student? Yes, you are.', good: 'Are you a student? Yes, I am.', why: '答句主詞要換回 I，不能照抄問句。' },
          { bad: 'She isn\'t is happy.', good: 'She isn\'t happy.', why: '否定只加 not，不能留兩個 be 動詞。' },
        ],
      },
      {
        id: 'u2', code: '文法 2',
        title: '人稱代名詞與所有格',
        lessons: ['B1 L1'],
        key: '所有格後面沒有名詞，句子就是錯的。',
        rules: [
          '人稱代名詞有兩種用法：主格放在動詞前面當主詞，受格放在動詞或介系詞後面。',
          '所有格表示「誰的」，後面一定要接名詞，不能單獨使用。',
          '主格 / 受格 / 所有格對照：I–me–my、you–you–your、he–him–his、she–her–her、it–it–its、we–us–our、 they–them–their。',
          '名詞的所有格加 \'s：Amy\'s bag（Amy 的包包）、my father\'s car（我爸的車）。',
        ],
        patterns: [
          { label: '主格', en: 'She is my cousin.', zh: '她是我表姐。' },
          { label: '受格', en: 'Please help her.', zh: '請幫幫她。' },
          { label: '所有格', en: 'Her name is Amy.', zh: '她的名字是 Amy。' },
          { label: '名詞所有格', en: 'This is Amy\'s gift.', zh: '這是 Amy 的禮物。' },
          { label: '介系詞後用受 格', en: 'This gift is for me.', zh: '這個禮物是給我的。' },
        ],
        mistakes: [
          { bad: 'Me am a student.', good: 'I am a student.', why: '當主詞要用主格 I。' },
          { bad: 'This is she bag.', good: 'This is her bag.', why: '「她的」是所有格 her。' },
          { bad: 'Please help she.', good: 'Please help her.', why: '動詞後面要用受格 her。' },
          { bad: 'It\'s my.', good: 'It\'s mine. / It\'s my bag.', why: '所有格 my 後面一定要接名詞。' },
        ],
      },
      {
        id: 'u3', code: '文法 3',
        title: '名詞單複數',
        lessons: ['B1 L2'],
        key: '看到數字或 many，名詞就要檢查有沒有變複數。',
        rules: [
          '一般名詞加 -s：dog → dogs、book → books。',
          '字尾 s、x、ch、sh、o 加 -es：bus → buses、box → boxes、watch → watches、dish → dishes、potato → potatoes。',
          '「子音 + y」結尾改 y 為 i 再加 es：city → cities、baby → babies。「母音 + y」直接加 s：boy → boys。',
          '字尾 f、fe 改 ves：leaf → leaves、knife → knives。',
          '不規則變化要單獨背：man → men、woman → women、child → children、tooth → teeth、foot → feet、 mouse → mice。',
          '單複數同形：sheep、deer、fish（指同種魚時）。',
        ],
        patterns: [
          { label: '單數', en: 'There is a dog in the yard.', zh: '院子裡有一隻狗。' },
          { label: '複數', en: 'There are three dogs in the yard.', zh: '院子裡有三隻狗。' },
          { label: '不規則', en: 'Two men are waiting outside.', zh: '兩個男人在外面等。' },
          { label: '同形', en: 'I see ten sheep on the hill.', zh: '我看到山上有十隻綿羊。' },
        ],
        mistakes: [
          { bad: 'two childs', good: 'two children', why: 'child 是不規則變化。' },
          { bad: 'three citys', good: 'three cities', why: '子音 + y 要改 i 再加 es。' },
          { bad: 'many sheeps', good: 'many sheep', why: 'sheep 單複數同形，不加 s。' },
          { bad: 'a books', good: 'a book / books', why: 'a 後面只能接單數名詞。' },
        ],
      },
      {
        id: 'u4', code: '文法 4',
        title: 'This / That / These / Those',
        lessons: ['B1 L2'],
        key: '先看名詞單複數，再決定用哪一個指示詞。',
        rules: [
          'this（這個）與 that（那個）接單數名詞，動詞用 is。',
          'these（這些）與 those（那些）接複數名詞，動詞用 are。',
          '距離判斷：this / these 指近的，that / those 指遠的。',
          '電話中自我介紹用 this：This is Amy speaking.（我是 Amy）',
        ],
        patterns: [
          { label: '單數近', en: 'This is my pet rabbit.', zh: '這是我養的兔子。' },
          { label: '單數遠', en: 'That animal is a koala.', zh: '那隻動物是無尾熊。' },
          { label: '複數近', en: 'These pictures are beautiful.', zh: '這些照片很漂亮。' },
          { label: '複數遠', en: 'Those are my classmates.', zh: '那些人是我同學。' },
          { label: '疑問', en: 'What is this?', zh: '這是什麼？' },
        ],
        mistakes: [
          { bad: 'This are my books.', good: 'These are my books.', why: '複數要用 These + are。' },
          { bad: 'These is a dog.', good: 'This is a dog.', why: '單數要用 This + is。' },
          { bad: 'Those book is new.', good: 'That book is new.', why: 'Those 後面必須接複數名詞。' },
        ],
      },
      {
        id: 'u5', code: '文法 5',
        title: 'There is / There are',
        lessons: ['B1 L3', 'B1 L4'],
        key: '動詞看 there 後面第一個名詞，不是看句尾。',
        rules: [
          '句型意思是「（某處）有某物」，重點在存在，不是「擁有」。',
          '動詞單複數看 there 後面第一個名詞：單數或不可數用 is，複數用 are。',
          '否定：There is not (isn\'t) / There are not (aren\'t)。',
          '疑問：把 is / are 移到 there 前面 —— Is there...? / Are there...?',
          '疑問句與否定句中，a 通常換成 any：Are there any students?',
        ],
        patterns: [
          { label: '肯定單數', en: 'There is a screen in the classroom.', zh: '教室裡有一個螢幕。' },
          { label: '肯定複數', en: 'There are two libraries on campus.', zh: '校園裡有兩間圖書館。' },
          { label: '否定', en: 'There aren\'t any fish in the pond.', zh: '池塘裡沒有魚。' },
          { label: '疑問', en: 'Is there a restroom near the gate?', zh: '大門附近有廁所嗎？' },
          { label: '答句', en: 'Yes, there is. / No, there isn\'t.', zh: '有。／沒有。' },
        ],
        mistakes: [
          { bad: 'There have a book.', good: 'There is a book.', why: '「有」用 There is，不是 have。' },
          { bad: 'There is two chairs.', good: 'There are two chairs.', why: '後面是複數，要用 are。' },
          { bad: 'There are a lot of water.', good: 'There is a lot of water.', why: 'water 不可數，用 is。' },
          { bad: 'Is there some pens?', good: 'Are there any pens?', why: '疑問句用 any，複數用 Are。' },
        ],
      },
      {
        id: 'u6', code: '文法 6',
        title: '位置介系詞',
        lessons: ['B1 L3'],
        key: 'in 是裡面、on 是貼著、under 是下面，先分清這三個。',
        rules: [
          'in 在……裡面 on 在……上面（接觸） under 在……下面',
          'behind 在……後面 in front of 在……前面 between 在（兩者）之間',
          'next to 在……旁邊 near 在……附近 around 圍繞著 outside 在外面',
          'between 用於兩者之間，三者以上用 among。',
          '回答位置問句時，介系詞片語通常放句尾：It\'s on the desk.',
        ],
        patterns: [
          { label: 'in', en: 'My cellphone is in my bag.', zh: '我的手機在我包包裡。' },
          { label: 'on', en: 'The newspaper is on the table.', zh: '報紙在桌上。' },
          { label: 'between', en: 'The lamp is between the two beds.', zh: '檯燈在兩張床中間。' },
          { label: 'in front of', en: 'A tree is in front of the house.', zh: '房子前面有一棵樹。' },
          { label: '疑問', en: 'Where is the cat?', zh: '貓在哪裡？' },
        ],
        mistakes: [
          { bad: 'The book is in the table.', good: 'The book is on the table.', why: '接觸桌面用 on。' },
          { bad: 'She sits next me.', good: 'She sits next to me.', why: 'next 後面一定要有 to。' },
          { bad: 'It is in front the door.', good: 'It is in front of the door.', why: '片語是 in front of，不能少 of。' },
          { bad: 'between the three boxes', good: 'among the three boxes', why: '三者以上用 among。' },
        ],
      },
      {
        id: 'u7', code: '文法 7',
        title: '祈使句與 Let\'s',
        lessons: ['B1 L5'],
        key: '祈使句和 Let\'s 後面永遠是原形動詞。',
        rules: [
          '祈使句用來命令、請求或提醒，主詞 you 省略，句子直接用原形動詞開頭。',
          '否定祈使句：Don\'t + 原形動詞。',
          '加上 please 語氣會客氣很多，放句首或句尾都可以（放句尾要加逗號）。',
          'Let\'s + 原形動詞 表示「我們一起……吧」，是 Let us 的縮寫，包含說話者自己。',
          'Let\'s 的否定是 Let\'s not + 原形動詞。',
        ],
        patterns: [
          { label: '肯定', en: 'Stand in line, everyone.', zh: '各位請排隊。' },
          { label: '否定', en: 'Don\'t make any noise.', zh: '不要製造噪音。' },
          { label: '客氣', en: 'Please take a seat.', zh: '請就座。' },
          { label: 'Let\'s', en: 'Let\'s go to the museum.', zh: '我們去博物館吧。' },
          { label: 'Let\'s 否定', en: 'Let\'s not talk about it now.', zh: '我們現在先別談這個。' },
        ],
        mistakes: [
          { bad: 'You stand up.', good: 'Stand up.', why: '祈使句不需要主詞。' },
          { bad: 'Don\'t to run here.', good: 'Don\'t run here.', why: 'Don\'t 後面直接接原形動詞。' },
          { bad: 'Let\'s to go.', good: 'Let\'s go.', why: 'Let\'s 後面也是原形動詞，不加 to。' },
          { bad: 'Not talk in the library.', good: 'Don\'t talk in the library.', why: '否定祈使句要用 Don\'t 開頭。' },
        ],
      },
      {
        id: 'u8', code: '文法 8',
        title: '時間表達與 What time',
        lessons: ['B1 L6'],
        key: 'at 時刻、on 星期、in 時段，這三個先分清楚。',
        rules: [
          'at 接確切時刻：at seven o\'clock、at noon、at night。',
          'on 接星期或特定某天：on Monday、on my birthday、on Sunday morning。',
          'in 接較長時段：in the morning / afternoon / evening、in May、in 2026。',
          '問時間用 What time...?，問星期用 What day...?，問日期用 What\'s the date...?',
          'a.m. 指上午（凌晨到中午前），p.m. 指下午與晚上。',
        ],
        patterns: [
          { label: 'at', en: 'The class starts at eight o\'clock.', zh: '八點開始上課。' },
          { label: 'on', en: 'We have a test on Monday.', zh: '我們星期一有考試。' },
          { label: 'in', en: 'I read in the evening.', zh: '我晚上看書。' },
          { label: '問時刻', en: 'What time is it now?', zh: '現在幾點？' },
          { label: '問星期', en: 'What day is it today?', zh: '今天星期幾？' },
        ],
        mistakes: [
          { bad: 'in Monday', good: 'on Monday', why: '星期用 on。' },
          { bad: 'on the morning', good: 'in the morning', why: '早上、下午、晚上這類時段用 in。' },
          { bad: 'at night 說成 in night', good: 'at night', why: 'at night 是固定用法，要背。' },
          { bad: 'What time is today?', good: 'What day is it today?', why: '問星期幾要用 What day。' },
        ],
      },
      {
        id: 'u9', code: '文法 9',
        title: '助動詞 can 與 must',
        lessons: ['B2 L1'],
        key: '助動詞後面永遠是原形動詞，這條規則沒有例外。',
        rules: [
          'can 表示「會、能夠、可以」，must 表示「必須、一定」。',
          '助動詞後面一律接原形動詞，不管主詞是誰都不加 s。',
          '否定：cannot (can\'t)、must not (mustn\'t)。注意 mustn\'t 是「不可以」，不是「不必」。',
          '疑問：把 can 移到句首 —— Can you swim?（must 較少用於疑問句）',
          '「不必」要用 don\'t have to，不是 mustn\'t。',
        ],
        patterns: [
          { label: '肯定', en: 'She can play the guitar.', zh: '她會彈吉他。' },
          { label: '否定', en: 'I can\'t run very fast.', zh: '我跑不太快。' },
          { label: '疑問', en: 'Can you help me?', zh: '你可以幫我嗎？' },
          { label: '答句', en: 'Yes, I can. / No, I can\'t.', zh: '可以。／不行。' },
          { label: 'must', en: 'You must follow the rules.', zh: '你必須遵守規定。' },
        ],
        mistakes: [
          { bad: 'She cans swim.', good: 'She can swim.', why: '助動詞不隨主詞變化。' },
          { bad: 'He can swims.', good: 'He can swim.', why: '助動詞後接原形動詞。' },
          { bad: 'Do you can swim?', good: 'Can you swim?', why: '有助動詞就不再用 Do。' },
          { bad: 'You mustn\'t come.（想表達不必來）', good: 'You don\'t have to come.', why: 'mustn\'t 是禁止，不是不必。' },
        ],
      },
      {
        id: 'u10', code: '文法 10',
        title: '現在簡單式與第三人稱單數',
        lessons: ['B2 L2'],
        key: '一句話裡 -s 只能出現一次：不是在 does 上，就是在動詞上。',
        rules: [
          '現在簡單式用來描述習慣、事實、固定行程，常搭配 every day、usually、always。',
          '主詞是第三人稱單數（he、she、it、單數名詞）時，動詞要加 -s。',
          '加 -es 的情況：字尾 s、x、ch、sh、o —— go → goes、watch → watches、do → does。',
          '「子音 + y」改 ies：study → studies、fly → flies。',
          '特殊變化：have → has。',
          '否定與疑問要用助動詞 do / does，一旦出現 does，後面的動詞就變回原形。',
        ],
        patterns: [
          { label: '一般主詞', en: 'I get up at six every day.', zh: '我每天六點起床。' },
          { label: '第三人稱單數', en: 'She gets up at six every day.', zh: '她每天六點起床。' },
          { label: '否定', en: 'He doesn\'t play the guitar.', zh: '他不會彈吉他。' },
          { label: '疑問', en: 'Does she like music?', zh: '她喜歡音樂嗎？' },
          { label: '答句', en: 'Yes, she does. / No, she doesn\'t.', zh: '喜歡。／不喜歡。' },
        ],
        mistakes: [
          { bad: 'She go to school by bus.', good: 'She goes to school by bus.', why: '第三人稱單數要加 -es。' },
          { bad: 'He don\'t like it.', good: 'He doesn\'t like it.', why: '第三人稱單數的否定用 doesn\'t。' },
          { bad: 'Does she likes music?', good: 'Does she like music?', why: '有 does 之後動詞回原形。' },
          { bad: 'My brother have two dogs.', good: 'My brother has two dogs.', why: 'have 遇到第三人稱單數改成 has。' },
        ],
      },
      {
        id: 'u11', code: '文法 11',
        title: '序數、日期與疑問詞',
        lessons: ['B2 L3'],
        key: '有明確日期用 on，只有月份用 in。',
        rules: [
          '序數表示「第幾」，多數是基數 + th：four → fourth、six → sixth。',
          '特殊三個要背：one → first、two → second、three → third。另有 five → fifth、eight → eighth、nine → ninth、twelve → twelfth、twenty → twentieth。',
          '日期寫法：月份 + 序數 —— May 2nd，讀作 May second。',
          '日期前面用介系詞 on：on May 2nd。月份前面用 in：in May。',
          '疑問詞：When 問時間、Whose 問所有者、Which 問選擇、What 問事物。',
        ],
        patterns: [
          { label: '序數', en: 'He is the first runner.', zh: '他是第一位跑者。' },
          { label: '日期', en: 'My birthday is on May 2nd.', zh: '我的生日是五月二日。' },
          { label: '月份', en: 'The race is in March.', zh: '比賽在三月。' },
          { label: 'When', en: 'When is the school trip?', zh: '校外教學是什麼時候？' },
          { label: 'Whose', en: 'Whose bike is this?', zh: '這是誰的腳踏車？' },
        ],
        mistakes: [
          { bad: 'the one runner', good: 'the first runner', why: '「第一」要用序數 first。' },
          { bad: 'My birthday is in May 2nd.', good: 'My birthday is on May 2nd.', why: '有明確日期用 on。' },
          { bad: 'Who\'s bike is this?', good: 'Whose bike is this?', why: 'Who\'s 是 who is，問「誰的」要用 Whose。' },
          { bad: 'the twelveth', good: 'the twelfth', why: 'twelve 的序數不規則。' },
        ],
      },
      {
        id: 'u12', code: '文法 12',
        title: '可數與不可數名詞、量詞',
        lessons: ['B2 GR', 'B2 L4'],
        key: '不可數名詞永遠不加 s，要加就加在量詞上。',
        rules: [
          '可數名詞可以數，有單複數：an egg、three eggs。',
          '不可數名詞不能直接加 s，常見的有 water、rice、milk、bread、flour、salt、money、time、homework。',
          '問數量：可數用 How many + 複數名詞；不可數用 How much。',
          '不可數名詞要靠量詞來數：a glass of water、a bowl of rice、a piece of cake、a bottle of milk、a cup of tea、a can of juice。',
          '量詞的複數變在量詞本身，不是後面的名詞：two glasses of water。',
          'some 用於肯定句，any 用於否定與疑問句。',
        ],
        patterns: [
          { label: '可數', en: 'How many eggs do we need?', zh: '我們需要幾顆蛋？' },
          { label: '不可數', en: 'How much water do you drink?', zh: '你喝多少水？' },
          { label: '量詞單數', en: 'I want a piece of cake.', zh: '我想要一塊蛋糕。' },
          { label: '量詞複數', en: 'We have two bottles of water.', zh: '我們有兩瓶水。' },
          { label: '否定', en: 'There isn\'t any milk in the fridge.', zh: '冰箱裡沒有牛奶了。' },
        ],
        mistakes: [
          { bad: 'two rices', good: 'two bowls of rice', why: 'rice 不可數，要用量詞。' },
          { bad: 'How much apples?', good: 'How many apples?', why: 'apple 可數，用 How many。' },
          { bad: 'three piece of cake', good: 'three pieces of cake', why: '複數變在量詞 piece 上。' },
          { bad: 'Do you have some money?', good: 'Do you have any money?', why: '疑問句用 any。' },
        ],
      },
      {
        id: 'u13', code: '文法 13',
        title: '頻率副詞與 How often',
        lessons: ['B2 L5'],
        key: 'be 動詞後、一般動詞前 —— 這條規則一路用到會考。',
        rules: [
          '頻率副詞由高到低：always（100%）→ usually → often → sometimes → seldom → never（0%）。',
          '位置規則：be 動詞後面、一般動詞前面。',
          '有助動詞時放在助動詞後面：He can always finish on time.',
          '問頻率用 How often，回答用 once / twice / three times + a day / a week / a month。',
          'seldom 和 never 本身已含否定意思，不能再加 not。',
        ],
        patterns: [
          { label: 'be 動詞後', en: 'She is always on time.', zh: '她總是很準時。' },
          { label: '一般動詞前', en: 'He often cleans his room.', zh: '他常打掃房間。' },
          { label: 'How often', en: 'How often do you exercise?', zh: '你多久運動一次？' },
          { label: '回答', en: 'Three times a week.', zh: '一週三次。' },
          { label: 'never', en: 'I never drink coffee at night.', zh: '我晚上從不喝咖啡。' },
        ],
        mistakes: [
          { bad: 'She always is late.', good: 'She is always late.', why: 'be 動詞後面才對。' },
          { bad: 'He cleans often his room.', good: 'He often cleans his room.', why: '一般動詞前面才對。' },
          { bad: 'I don\'t never eat it.', good: 'I never eat it.', why: 'never 已是否定，不再加 don\'t。' },
          { bad: 'two times a week', good: 'twice a week', why: '兩次習慣用 twice。' },
        ],
      },
      {
        id: 'u14', code: '文法 14',
        title: 'be 動詞過去式 was / were',
        lessons: ['B2 L6'],
        key: 'was / were 的選擇規則和 is / are 完全一樣，只是換成過去。',
        rules: [
          '過去式表示過去某個時間點的狀態，常搭配 yesterday、last week、two years ago、then。',
          'am / is → was，are → were。主詞判斷方式跟現在式一樣。',
          '否定：was not (wasn\'t)、were not (weren\'t)。',
          '疑問：把 was / were 移到句首 —— Was it sunny yesterday?',
          'There is → There was；There are → There were。',
        ],
        patterns: [
          { label: '肯定單數', en: 'I was in Tokyo last week.', zh: '我上週在東京。' },
          { label: '肯定複數', en: 'They were very happy.', zh: '他們當時非常開心。' },
          { label: '否定', en: 'It wasn\'t rainy yesterday.', zh: '昨天沒有下雨。' },
          { label: '疑問', en: 'Were you at home last night?', zh: '你昨晚在家嗎？' },
          { label: 'There was', en: 'There was a factory near the river.', zh: '河邊以前有一間工廠。' },
        ],
        mistakes: [
          { bad: 'They was happy.', good: 'They were happy.', why: '複數主詞用 were。' },
          { bad: 'I were tired.', good: 'I was tired.', why: 'I 的過去式是 was。' },
          { bad: 'Was you at home?', good: 'Were you at home?', why: 'you 一律用 were。' },
          { bad: 'There was many people.', good: 'There were many people.', why: '後面是複數，用 were。' },
        ],
      },
      ],
    },

    {
      id: 'g8',
      label: 'Grade 8',
      zh: '八年級',
      ready: false,
      note: '八年級',
      units: [],
    },

    {
      id: 'g9',
      label: 'Grade 9',
      zh: '九年級',
      ready: false,
      note: '九年級',
      units: [],
    },
  ],
};

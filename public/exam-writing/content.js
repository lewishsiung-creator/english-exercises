/* 學測英文寫作 — 109–115 學年度的作文題目、趨勢與範文。

   這一頁和 /robot-helper/ 的方向相反。那一頁把「113 學年度」一題拆開來練，
   中文是題目、英文是答案；這一頁是七年的地圖，中文是說明語言，英文是要看懂
   並學起來的材料。

   兩種語言層在這裡的規則：

   - 講解、分析、段落計畫都是中文，永遠顯示（class 用 zh-fixed）。
   - 範文的英文永遠顯示，它就是要讀的東西；每一句的中譯藏在 中譯 開關後面
     （class 用 zh）。
   - 句型卡與句庫卡反過來：中文在正面，英文翻開才看得到，因為那是要「產出」
     的東西，不是要「讀懂」的東西。

   parts 陣列的每一項都有一個 kind，render.js 裡各對應一個 build 函式。
*/

// ---------------------------------------------------------------- 七篇範文

/* 每一句的 job 用同一套「動作」詞彙（定調開場、描述圖片、舉例說明、轉折……），
   跨年份都用同樣的名字，這樣學生才看得出來：題目每年換，動作不換。 */

const ESSAYS = [
  {
    id: 'e115',
    year: '115',
    title: 'Pets and Their Changing Role',
    aim: '養寵物風氣與寵物角色改變',
    type: '社會現象分析',
    pictures: 3,
    words: 169,
    keyZh: '第一段描述寵物被當成家人；第二段分析原因：孤單、壓力、經濟負擔、生育率下降。',
    caution: '結構可以學，這個論點不要照抄。「養寵物害生育率下降」是 115 那年最多人寫的一條，閱卷時看到會膩。同樣的骨架換一個影響去填——飼主的心理健康、寵物醫療與棄養、公共空間該怎麼調整——分數會比跟著大家走好看得多。',
    takeawayEn: 'Prove the picture with two or three everyday examples, use a “not just X — instead Y” turn to say what the phenomenon really means, then push your personal reason outward into one social consequence before you close.',
    takeawayZh: '先用兩三個日常例子把圖片講實，再用「不再只是⋯⋯，而是⋯⋯」的轉折點出現象的真正意義，最後把個人層面的原因推到一個社會層面的影響再收尾。',
    paras: [
      {
        label: 'Describe',
        labelZh: '第一段：描述圖片',
        noteZh: '定調開場 → 描述圖片 → 舉例說明 → 排除錯誤想法 → 轉折。',
        sentences: [
          {
            en: 'In recent years, pets have played a much more important role in people’s lives.',
            zh: '近年來，寵物在人們生活中扮演的角色比以往重要得多。',
            jobEn: 'Sets the topic as a recent trend',
            jobZh: '定調開場：用 In recent years 把題目拉成「近年的趨勢」，先給大方向，還不碰圖片細節。',
          },
          {
            en: 'In the pictures, we can see that many people treat their pets almost like family members.',
            zh: '從圖片中我們可以看到，許多人幾乎把寵物當成家人一樣對待。',
            jobEn: 'Points at the picture, states one key fact',
            jobZh: '描述圖片：用 In the pictures, we can see that... 講出圖片裡最關鍵的一句話，不細數畫面上每個東西。',
          },
          {
            en: 'Some people take their dogs to restaurants, buy them special food, or even celebrate their birthdays.',
            zh: '有些人會帶狗狗上餐廳、買專屬的食物給牠們，甚至幫牠們慶生。',
            jobEn: 'Three quick everyday examples as proof',
            jobZh: '舉例說明：一口氣丟三個具體例子（上餐廳、買特製食物、慶生），把抽象的「當成家人」變成看得到的畫面。',
          },
          {
            en: 'These examples show that pets are no longer just animals kept at home.',
            zh: '這些例子顯示，寵物已經不只是養在家裡的動物。',
            jobEn: 'Rules out the shallow reading first',
            jobZh: '排除錯誤想法：先用 no longer just 把最表面的答案排掉，讓下一句的真正答案更有力。',
          },
          {
            en: 'Instead, they have become companions who bring comfort, joy, and emotional support to their owners.',
            zh: '相反地，牠們成了陪在身邊的夥伴，為飼主帶來安慰、快樂與情感上的支持。',
            jobEn: 'Delivers the real answer after Instead',
            jobZh: '轉折：用 Instead 接上真正的答案，說出寵物現在的新身分，替第一段收尾。',
          },
        ],
      },
      {
        label: 'Explain',
        labelZh: '第二段：說明原因與影響',
        noteZh: '說明原因 → 補充細節 → 說明原因 → 轉折 → 說明影響 → 結論收尾。',
        sentences: [
          {
            en: 'I think this trend has become common because modern people often feel lonely and stressed.',
            zh: '我認為這股趨勢之所以普遍，是因為現代人常常感到孤單、又有壓力。',
            jobEn: 'Gives the main reason for the trend',
            jobZh: '說明原因：用 this trend 接住第一段，再用 because 直接給出第一個原因——現代人孤單又有壓力。',
          },
          {
            en: 'Some young adults may not be ready to raise children because of financial pressure, long working hours, or personal choices.',
            zh: '有些年輕人可能因為經濟壓力、工時太長，或是個人選擇，還沒準備好生養小孩。',
            jobEn: 'Adds who, and why, in detail',
            jobZh: '補充細節：把原因說得更細，指名是哪一群人、卡在哪些現實條件，用三個並列名詞把句子拉長。',
          },
          {
            en: 'For them, keeping a pet is a way to feel loved and needed.',
            zh: '對他們來說，養寵物是一種感覺被愛、被需要的方式。',
            jobEn: 'Links that group back to pets',
            jobZh: '說明原因：用 For them 把上一句的處境接回寵物，說明養寵物對這群人的真正意義。',
          },
          {
            en: 'However, this trend may also have some social effects.',
            zh: '然而，這股趨勢可能也會帶來一些社會影響。',
            jobEn: 'Turns from causes to social effects',
            jobZh: '轉折：用 However 把文章從「原因」轉到「影響」，是第二段的分水嶺，一句話就換軌。',
          },
          {
            en: 'For example, if more people choose pets instead of children, the birth rate may become even lower.',
            zh: '舉例來說，如果越來越多人選擇養寵物而不是生小孩，生育率可能會變得更低。',
            jobEn: 'Names one concrete social consequence',
            jobZh: '說明影響：這裡的 For example 帶出的是「後果」而不是「例子」——同一個信號詞，換了位置就換了工作。生育率可能更低，讓「影響」不會只停在空話。',
          },
          {
            en: 'Therefore, while pets can enrich our lives, society should also think seriously about why people are less willing to start families.',
            zh: '因此，寵物雖然能豐富我們的生活，社會也應該認真思考：為什麼人們越來越不願意成家。',
            jobEn: 'Closes with a balanced final judgment',
            jobZh: '結論收尾：用 Therefore + while 讓步句作結，一手肯定寵物、一手把問題丟回社會，順勢帶出建議。',
          },
        ],
      },
    ],
  },
  {
    id: 'e114',
    year: '114',
    title: 'Typhoon Day',
    aim: '颱風假兩種不同情境＋個人看法',
    type: '問題解決型',
    pictures: 2,
    words: 173,
    keyZh: '第一段對比「大家開心放假」與「真的危險」；第二段表達立場：安全優先，不要把颱風假只當休假。',
    takeawayEn: 'Announce the two-sided situation in your second sentence, let one pivot sentence carry the whole contrast, then in paragraph two back your position with a single short personal experience, rule out the easy view, and close on a ten-word punchline.',
    takeawayZh: '第二句就先預告「會有兩種不同情況」，整個對比只交給一個轉折句（In the other picture, however,）去扛；第二段先表明立場，再用一次自己的小經驗當證據，接著否定最直覺的錯誤想法，最後用一句十個英文字左右的短對比句收尾——這套骨架換任何一年的題目都能直接套。',
    paras: [
      {
        label: 'Contrast',
        labelZh: '第一段：對比兩種情境',
        noteZh: '定調開場 → 點出現象 → 描述圖片 → 說明原因 → 轉折 → 說明影響。',
        sentences: [
          {
            en: 'When a typhoon approaches Taiwan, local governments often have to decide whether to cancel work and school.',
            zh: '每當颱風接近台灣，地方政府常常必須決定要不要停班停課。',
            jobEn: 'Sets the scene before touching the pictures',
            jobZh: '定調開場：先把颱風來襲、政府要不要放假的大背景講清楚，這句還完全沒碰圖片細節。',
          },
          {
            en: 'However, a typhoon day may lead to two very different situations.',
            zh: '然而，颱風假可能造成兩種非常不同的情況。',
            jobEn: 'Names the two-sided phenomenon in one line',
            jobZh: '點出現象：一句話預告「同一個颱風假，會有兩種完全不同的樣子」，等於先幫整段搭好骨架。這裡的 However 只是輕轉語氣，真正的轉折在下面那句 In the other picture, however。',
          },
          {
            en: 'In one picture, many people seem to be enjoying their unexpected holiday in a crowded indoor place, such as a shopping mall or movie theater.',
            zh: '在其中一張圖片裡，很多人似乎正在擁擠的室內場所享受這個突如其來的假期，像是購物中心或電影院。',
            jobEn: 'Describes picture one with concrete places',
            jobZh: '描述圖片：具體寫出第一張圖看到的畫面，並用 such as 補上購物中心、電影院這種看得見的細節。',
          },
          {
            en: 'The weather may not be as serious as expected, so people treat the day as a chance to relax.',
            zh: '天氣可能沒有想像中那麼嚴重，所以大家把這一天當成放鬆的機會。',
            jobEn: 'Explains why they can relax that day',
            jobZh: '說明原因：解釋第一張圖的人為什麼那麼輕鬆——因為風雨沒有預期中大，補上圖片沒畫出來的理由。',
          },
          {
            en: 'In the other picture, however, people are struggling in heavy rain and strong wind.',
            zh: '然而，在另一張圖片裡，人們卻在大雨和強風中苦撐。',
            jobEn: 'Pivots to the opposite picture',
            jobZh: '轉折：用 In the other picture, however 把畫面直接翻到相反情境，是全段的分水嶺，也是這種對比圖題型最該背的一句。',
          },
          {
            en: 'Motorcyclists and drivers face dangerous road conditions, which shows why a typhoon day can be necessary.',
            zh: '騎機車的人和開車的人得面對危險的路況，這說明了為什麼颱風假有其必要。',
            jobEn: 'Names who is hurt, then draws the point',
            jobZh: '說明影響：先點出真正受影響的人（騎士、駕駛），再用 which shows... 把畫面收成一個結論，讓第一段不只是流水帳。',
          },
        ],
      },
      {
        label: 'Position',
        labelZh: '第二段：個人看法',
        noteZh: '表明立場 → 個人經驗 → 說明原因 → 排除錯誤想法 → 轉折 → 結論收尾。',
        sentences: [
          {
            en: 'In my opinion, safety should always come first.',
            zh: '在我看來，安全永遠應該擺在第一位。',
            jobEn: 'States the writer\'s position in one line',
            jobZh: '表明立場：第二段第一句就把自己的看法講死，八個英文字就結束，不繞圈子也不鋪陳。',
          },
          {
            en: 'I once had a typhoon day when the weather looked calm in the morning, but it became dangerous in the afternoon.',
            zh: '我曾經遇過一次颱風假，早上天氣看起來很平靜，到了下午卻變得很危險。',
            jobEn: 'Brings in one short personal experience',
            jobZh: '個人經驗：用自己真的碰過的一次颱風假當證據，讓立場不只是喊口號；注意只寫一件事、兩個時間點就夠。',
          },
          {
            en: 'This experience taught me that weather can change quickly.',
            zh: '這次經驗讓我明白，天氣說變就變。',
            jobEn: 'Draws the lesson that supports the position',
            jobZh: '說明原因：把上一句的經驗收成一句道理——天氣說變就變，這正是「安全優先」站得住腳的理由。立場前一句已經講過了，所以這句只負責給理由，不必再表態一次——112 同樣的句型放在還沒表態的位置，做的就是表明立場。',
          },
          {
            en: 'People should not see a typhoon day simply as a free holiday.',
            zh: '人們不該把颱風假單純當成一天免費的假期。',
            jobEn: 'Rules out the easy view of typhoon days',
            jobZh: '排除錯誤想法：先否定「颱風假就是放爽假」這個最直覺的想法，先把錯的答案掃掉，下一句的建議才有力道。',
          },
          {
            en: 'Instead, they should stay alert, prepare supplies, and avoid unnecessary trips.',
            zh: '相反地，他們應該保持警覺、準備好物資，並且避免不必要的外出。',
            jobEn: 'Proposes three concrete actions',
            jobZh: '轉折：用 Instead 承接上一句的否定，給出真正該做的事——保持警覺、備好物資、少出門。三件事一組最好寫也最好看。',
          },
          {
            en: 'A day off is nice, but staying safe matters more.',
            zh: '放一天假固然很好，但保持安全更重要。',
            jobEn: 'Closes on a short contrast punchline',
            jobZh: '結論收尾：用一句十個英文字的短對比句作結，同時呼應段首的 safety should always come first，收得乾淨有力。',
          },
        ],
      },
    ],
  },
  {
    id: 'e113',
    year: '113',
    title: 'Teenage Problems and a Robot Helper',
    aim: '選一個青少年困擾，設計機器人小幫手',
    type: '問題解決型',
    pictures: 3,
    words: 170,
    keyZh: '選 mood swings；第一段說明問題影響；第二段描述 robot 的特質與功能。這篇很適合練「問題解決型作文」。',
    takeawayEn: 'Commit to your choice in the very first sentence, spend the rest of paragraph one proving the problem hurts real people, and in paragraph two name the easy useless answer before pivoting to your real one.',
    takeawayZh: '第一句就把選擇講死，第一段其餘部分只負責證明「這個問題真的會傷到人」；第二段則先把最容易想到卻沒用的答案排除掉，再用 Instead 轉折端出真正的解法——這樣的提案讀起來才像想過，而不是隨口說說。',
    paras: [
      {
        label: 'Problem',
        labelZh: '第一段：選定問題、說明影響',
        noteZh: '回答題目 → 點出現象 → 舉例說明 → 補充細節 → 說明影響 → 說明影響。',
        sentences: [
          {
            en: 'Among the three problems shown in the pictures, I would choose mood swings as the problem I want my robot helper to solve.',
            zh: '在圖片中呈現的三個問題裡，我會選擇「情緒起伏」作為我希望機器人小幫手替我解決的問題。',
            jobEn: 'Answers the prompt: picks mood swings',
            jobZh: '回答題目：第一句就直接把題目要的選擇講清楚，不繞路、不鋪陳。',
          },
          {
            en: 'Many teenagers experience sudden changes in emotion.',
            zh: '許多青少年都會經歷情緒突然轉變的狀況。',
            jobEn: 'Names the problem in general terms',
            jobZh: '點出現象：把個人的選擇放大成一個普遍存在的青少年現象。',
          },
          {
            en: 'They may feel happy in the morning but become angry, anxious, or sad later in the day.',
            zh: '他們可能早上還很開心，過沒幾個小時卻變得生氣、焦慮或難過。',
            jobEn: 'Shows what a mood swing looks like',
            jobZh: '舉例說明：用「早上開心、稍晚生氣」的具體畫面，讓抽象名詞看得見。',
          },
          {
            en: 'Sometimes, they do not even know why they feel that way.',
            zh: '有時候，他們甚至不知道自己為什麼會有那樣的感覺。',
            jobEn: 'Adds that teens often can\'t explain it',
            jobZh: '補充細節：再加一句「連自己都不知道原因」，把問題寫得更棘手。',
          },
          {
            en: 'Mood swings can affect their relationships with family members, classmates, and teachers.',
            zh: '情緒起伏會影響他們和家人、同學以及老師之間的關係。',
            jobEn: 'Names who the problem touches',
            jobZh: '說明影響：從自己身上擴到家人、同學、老師，說明這件事會波及誰。',
          },
          {
            en: 'If they cannot manage their emotions well, they may say hurtful things or make poor decisions.',
            zh: '如果他們無法好好管理自己的情緒，就可能說出傷人的話，或做出不好的決定。',
            jobEn: 'Spells out the worst-case consequence',
            jobZh: '說明影響：把後果推到最壞的情況，替第二段的「需要幫手」鋪好理由。',
          },
        ],
      },
      {
        label: 'Solution',
        labelZh: '第二段：機器人的特質與做法',
        noteZh: '提出建議 → 排除錯誤想法 → 轉折 → 補充細節 → 結論收尾。',
        sentences: [
          {
            en: 'My robot helper should be calm, patient, and good at listening.',
            zh: '我的機器人小幫手應該要冷靜、有耐心，而且很會傾聽。',
            jobEn: 'Proposes the robot\'s three key traits',
            jobZh: '提出建議：用三個形容詞一次講完機器人該有的特質，開門見山。',
          },
          {
            en: 'It should not simply tell me to “cheer up,” because that usually does not help.',
            zh: '它不該只是叫我「振作一點」，因為那通常沒什麼用。',
            jobEn: 'Rules out the useless easy advice',
            jobZh: '排除錯誤想法：先把最容易想到卻沒用的答案否定掉，讓後面的解法更有份量。',
          },
          {
            en: 'Instead, it could ask simple questions, help me understand my feelings, and suggest practical actions, such as taking a walk, writing in a journal, or talking to a trusted person.',
            zh: '相反地，它可以問一些簡單的問題，幫我理解自己的感受，並建議一些實際可行的做法，例如去散散步、寫日記，或是找一個信任的人聊聊。',
            jobEn: 'Pivots to what the robot actually does',
            jobZh: '轉折：用 Instead 接住上一句的否定，端出真正的做法，還附上三個具體例子。',
          },
          {
            en: 'It could also remind me to sleep enough and take breaks from my phone.',
            zh: '它也可以提醒我要睡飽，還有放下手機休息一下。',
            jobEn: 'Adds two more everyday reminders',
            jobZh: '補充細節：用 also 再補一項日常功能，讓機器人的能力不只一種。',
          },
          {
            en: 'With this kind of support, teenagers could learn to manage their emotions more wisely.',
            zh: '有了這樣的支持，青少年就能學會更聰明地管理自己的情緒。',
            jobEn: 'Closes on the result for teenagers',
            jobZh: '結論收尾：收在「結果」而不是重述，並回頭呼應第一段的 teenagers 與 manage their emotions。',
          },
        ],
      },
    ],
  },
  {
    id: 'e112',
    year: '112',
    title: 'Emoji Use',
    aim: '表情符號的使用＋可能造成的誤會',
    type: '社會現象分析',
    pictures: 4,
    words: 165,
    keyZh: '第一段寫 emoji 的好處；第二段寫誤會經驗與解決方式。最後一句有一點 punchline，適合考場結尾。',
    takeawayEn: 'Give the second paragraph to one small personal story told in order — what I did, how it was read, what it cost, what I learned — and then close on a short sentence built from a contrast.',
    takeawayZh: '第二段不要列一堆空泛的道理，改成把一個小小的親身經驗按順序講完（我做了什麼 → 對方怎麼想 → 後果是什麼 → 我學到什麼），最後用一句有對比的短句收尾；這個公式換成任何一年的題目都照樣能用。',
    paras: [
      {
        label: 'Explain',
        labelZh: '第一段：說明 emoji 為何受歡迎',
        noteZh: '定調開場 → 說明原因 → 舉例說明 → 對比 → 補充細節。',
        sentences: [
          {
            en: 'Emojis have become a common part of online communication.',
            zh: '表情符號已經成為網路溝通中很常見的一部分。',
            jobEn: 'Opens with the general situation',
            jobZh: '定調開場：用一句廣泛的事實，把主題放進「網路溝通」這個大背景，先不給細節。',
          },
          {
            en: 'People like using them because they are simple, colorful, and expressive.',
            zh: '大家喜歡用表情符號，因為它們簡單、色彩繽紛，又很有表達力。',
            jobEn: 'Answers why people use emojis',
            jobZh: '說明原因：直接回答題目問的「為什麼喜歡用」，用三個形容詞一次把理由列完。',
          },
          {
            en: 'For example, a smiling face can make a message sound friendlier, while a crying face can show sadness or disappointment quickly.',
            zh: '舉例來說，一個微笑的表情可以讓訊息聽起來更友善，而一個哭臉則能很快地表達難過或失望。',
            jobEn: 'Gives two concrete emoji examples',
            jobZh: '舉例說明：用微笑臉和哭臉兩個具體例子，把上一句抽象的理由變成看得到的畫面。',
          },
          {
            en: 'Compared with plain words, emojis can sometimes make feelings easier to understand.',
            zh: '和單純的文字相比，表情符號有時候能讓情緒更容易被理解。',
            jobEn: 'Contrasts emojis with plain words',
            jobZh: '對比：把表情符號和純文字放在一起比較，好處才顯得明顯。',
          },
          {
            en: 'They are especially useful when people want to make a short message warmer or more personal.',
            zh: '當人們想讓一則簡短的訊息更溫暖、更有人情味時，表情符號特別好用。',
            jobEn: 'Adds when emojis work best',
            jobZh: '補充細節：再加一個使用時機（想讓短訊息更溫暖），把第一段的字數與內容收滿。',
          },
        ],
      },
      {
        label: 'Experience',
        labelZh: '第二段：誤會經驗與解決方法',
        noteZh: '轉折 → 個人經驗 → 對比 → 說明影響 → 表明立場 → 提出建議 → 結論收尾。',
        sentences: [
          {
            en: 'However, emojis may also cause misunderstandings.',
            zh: '然而，表情符號也可能造成誤會。',
            jobEn: 'Pivots from benefits to problems',
            jobZh: '轉折：用 However 一句話翻面，從好處轉到誤會，第二段要寫什麼立刻清楚。',
          },
          {
            en: 'I once sent a laughing emoji to a friend after he told me about an embarrassing mistake he had made.',
            zh: '有一次，朋友跟我說了他做過的一件糗事之後，我傳了一個大笑的表情符號給他。',
            jobEn: 'Opens the writer\'s own anecdote',
            jobZh: '個人經驗：用 I once... 帶出自己的一段真實小故事，正好回應題目要的「個人或親友經驗」。',
          },
          {
            en: 'I only wanted to make the conversation feel lighter, but he thought I was laughing at him.',
            zh: '我只是想讓對話的氣氛輕鬆一點，但他卻以為我在嘲笑他。',
            jobEn: 'Contrasts intention with how it landed',
            jobZh: '對比：用「我只是想…，但他以為…」把我的用意和對方的解讀擺在一起，誤會就被說清楚了。',
          },
          {
            en: 'Later, I had to explain my real meaning and apologize.',
            zh: '後來我必須解釋我真正的意思，並且向他道歉。',
            jobEn: 'Shows what the mistake cost',
            jobZh: '說明影響：交代這個誤會帶來的後果——我得去解釋，還得道歉。',
          },
          {
            en: 'From this experience, I learned that emojis should support our words, not replace them completely.',
            zh: '從這次經驗中，我學到表情符號應該用來輔助我們的文字，而不是完全取代文字。',
            jobEn: 'States the lesson learned',
            jobZh: '表明立場：用 I learned that... 把一則小故事升級成一個可以主張的看法。',
          },
          {
            en: 'When the topic is serious or sensitive, it is better to use clear sentences.',
            zh: '當話題比較嚴肅或敏感時，用清楚的句子表達會比較好。',
            jobEn: 'Proposes a practical rule',
            jobZh: '提出建議：給出一條照著做就行的原則（嚴肅話題就用清楚的句子），回應題目要的解決方法。',
          },
          {
            en: 'A small picture may look cute, but it can still create a big problem.',
            zh: '一個小小的圖案看起來也許很可愛，卻仍然可能惹出大麻煩。',
            jobEn: 'Closes with a short punchline',
            jobZh: '結論收尾：用 small 對 big 的反差造一句短句收尾，好記又有力，考場最後一句就該長這樣。',
          },
        ],
      },
    ],
  },
  {
    id: 'e111',
    year: '111',
    title: 'My Ideal Park',
    aim: '比較兩種公園＋描述理想中的公園',
    type: '圖片比較＋理想設計',
    pictures: 2,
    words: 168,
    keyZh: '第一段比較圖 A、圖 B；第二段寫理想公園：兒童、老人、自然、無障礙。這篇結構很穩。',
    takeawayEn: 'Give each picture the same shape — what is in it, how it feels, who it suits — then open paragraph two by answering the prompt in one plain sentence and proving it with a single "For example" list.',
    takeawayZh: '兩張圖用同一種寫法處理——先寫「有什麼」，再寫「感覺如何」，最後寫「對誰有意義」；接著第二段第一句就直接回答題目，再用一組 For example 的具體清單把它撐起來。',
    paras: [
      {
        label: 'Contrast',
        labelZh: '第一段：比較兩張圖片',
        noteZh: '定調開場 → 描述圖片 → 補充細節 → 說明影響 → 轉折 → 描述圖片 → 說明影響。',
        sentences: [
          {
            en: 'The two pictures show two very different types of parks.',
            zh: '這兩張圖片呈現兩種非常不同的公園。',
            jobEn: 'Frames both pictures in one opening line',
            jobZh: '定調開場：一句話交代「兩張圖、兩種公園」，先把整段的比較架構立好，讀者馬上知道接下來要看什麼。',
          },
          {
            en: 'In Picture A, the park has many playground facilities, such as slides and climbing structures.',
            zh: '在圖 A 中，公園裡有許多遊樂設施，例如溜滑梯和攀爬架。',
            jobEn: 'Lists what Picture A literally contains',
            jobZh: '描述圖片：只寫圖 A 裡看得到的東西，並用 such as 帶出兩個具體例子，不加任何感想。',
          },
          {
            en: 'It looks lively and exciting, especially for young children.',
            zh: '它看起來熱鬧又有趣，尤其是對年紀小的孩子來說。',
            jobEn: 'Adds how Picture A feels',
            jobZh: '補充細節：不再列東西，改補上圖 A 給人的整體感覺（lively and exciting），讓描述有溫度。',
          },
          {
            en: 'Families may enjoy spending time there because children can play, run, and make friends.',
            zh: '一家人可能會很喜歡待在那裡，因為孩子可以在那裡玩耍、奔跑，還能交朋友。',
            jobEn: 'Says who benefits, and why',
            jobZh: '說明影響：說明這種公園對誰有意義——家庭與小孩，並用 because 一次交代理由，把圖 A 收乾淨。',
          },
          {
            en: 'In Picture B, the park is quieter and more natural.',
            zh: '在圖 B 中，公園比較安靜，也比較貼近自然。',
            jobEn: 'Turns to Picture B and contrasts it',
            jobZh: '轉折：用 In Picture B 把鏡頭轉到第二張圖，和 114 的 In the other picture, however 是同一個動作。對比圖題型的分水嶺就是這一句。',
          },
          {
            en: 'There are trees, grass, and open space.',
            zh: '那裡有樹木、草地和開闊的空間。',
            jobEn: 'Names the three things in B',
            jobZh: '描述圖片：和圖 A 用同一種寫法，列出圖 B 裡看得到的三樣東西，句子短但整齊。',
          },
          {
            en: 'It seems like a good place for people to relax, take a walk, or escape from the noise of the city.',
            zh: '那裡似乎是個適合人們放鬆、散步，或逃離城市喧囂的好地方。',
            jobEn: 'Says what Picture B is good for',
            jobZh: '說明影響：說明圖 B 適合誰、能帶來什麼，和第四句形成對稱，第一段就此收尾。',
          },
        ],
      },
      {
        label: 'Propose',
        labelZh: '第二段：描述理想中的公園',
        noteZh: '回答題目 → 補充細節 → 表明立場 → 舉例說明 → 結論收尾。',
        sentences: [
          {
            en: 'My ideal park would combine the advantages of both pictures.',
            zh: '我理想中的公園會結合這兩張圖片的優點。',
            jobEn: 'Answers the prompt in one sentence',
            jobZh: '回答題目：第二段第一句就正面回答「你理想中的公園」，不繞路、不鋪陳，同時把第一段的比較接了起來。',
          },
          {
            en: 'It should have safe playgrounds for children, but it should also include many trees, flowers, and quiet walking paths.',
            zh: '它應該要有讓孩子安全遊玩的遊樂場，但同時也要有許多樹木、花草和安靜的散步步道。',
            jobEn: 'Spells out what combine actually means',
            jobZh: '補充細節：把上一句的 combine 拆成具體內容，用 but also 把 A 圖和 B 圖的元素實際接在一起。',
          },
          {
            en: 'In addition, I think a good park should be friendly to people of all ages.',
            zh: '此外，我認為一座好的公園應該對各個年齡層的人都友善。',
            jobEn: 'Adds a second standard: all ages',
            jobZh: '表明立場：用 In addition 再加一個標準——公園要對所有年齡層友善，並以 I think 明確表態。',
          },
          {
            en: 'For example, there should be benches for older people, open areas for exercise, and clean paths for wheelchair users.',
            zh: '舉例來說，公園裡應該要有給長輩坐的長椅、可以運動的開放空間，以及方便輪椅使用者通行的乾淨步道。',
            jobEn: 'Backs the claim with three concrete items',
            jobZh: '舉例說明：用 For example 帶出三個具體設施，讓上一句「對所有年齡層友善」的主張站得住腳，也順便拉高字數。',
          },
          {
            en: 'A park should not only be beautiful; it should help people feel connected to nature and to one another.',
            zh: '公園不該只是漂亮而已；它應該讓人感覺與自然、也與彼此產生連結。',
            jobEn: 'Closes on a bigger idea than looks',
            jobZh: '結論收尾：用 not only... 把公園從「漂亮」拉高到「人與自然、人與人的連結」，一句話結束全文。',
          },
        ],
      },
    ],
  },
  {
    id: 'e110',
    year: '110',
    title: 'Visitors Damaging a Flower Garden',
    aim: '遊客賞花時不遵守規定＋感受或建議',
    type: '圖片描述＋感受反思',
    pictures: 1,
    words: 162,
    keyZh: '第一段描述破壞行為；第二段從園主角度寫感受與建議。最後用「照片 vs 花園」的對比收尾，很適合學測作文。',
    takeawayEn: 'Zoom out from the picture to a general problem at the end of paragraph one, then close paragraph two with a single contrast sentence that carries the lesson.',
    takeawayZh: '第一段結尾要從圖片「拉遠」到一個普遍現象，第二段則用一句對比句收尾，把道理講完就停。',
    paras: [
      {
        label: 'Describe',
        labelZh: '第一段：描述圖片',
        noteZh: '描述圖片 → 轉折 → 舉例說明 → 說明影響 → 點出現象。',
        sentences: [
          {
            en: 'In the picture, many visitors are enjoying a beautiful flower garden.',
            zh: '圖片中，許多遊客正在欣賞一座美麗的花園。',
            jobEn: 'Opens with the literal, pleasant scene',
            jobZh: '描述圖片：先講圖片裡看得到的、最和平的那一面——遊客在賞花，還沒提到問題。',
          },
          {
            en: 'However, some of them are not following the rules.',
            zh: '然而，其中有些人並沒有遵守規定。',
            jobEn: 'Pivots from the pleasant scene to trouble',
            jobZh: '轉折：用 However 一句話把畫面翻面，從「大家在賞花」轉到「有人沒守規矩」。',
          },
          {
            en: 'Although there is a sign telling people not to enter the flower area, a few visitors still step into the garden to take pictures.',
            zh: '雖然現場立了告示牌，要大家不要進入花圃，還是有幾位遊客走進花園裡拍照。',
            jobEn: 'Gives the concrete rule-breaking detail',
            jobZh: '舉例說明：把「沒遵守規定」講成看得見的具體畫面——有告示牌，卻還是有人踩進去拍照。',
          },
          {
            en: 'Some flowers may be damaged because people care more about getting good photos than protecting the environment.',
            zh: '有些花可能因此受損，因為比起保護環境，人們更在意能不能拍到好看的照片。',
            jobEn: 'States the damage and the motive behind it',
            jobZh: '說明影響：先講後果（花被弄壞），再用 because 補上背後的心態，一句同時交代結果與原因。',
          },
          {
            en: 'This scene shows a common problem: when people travel, they sometimes forget that public places should be respected.',
            zh: '這個畫面點出了一個常見的問題：人們在旅遊時，有時候會忘記公共場所也應該被尊重。',
            jobEn: 'Zooms out to name the general problem',
            jobZh: '點出現象：段尾把鏡頭拉遠，從這一座花園升級成「大家出遊時的通病」，替第二段鋪路。',
          },
        ],
      },
      {
        label: 'React',
        labelZh: '第二段：感受與建議',
        noteZh: '表明立場 → 說明原因 → 說明影響 → 提出建議 → 提出建議 → 結論收尾。',
        sentences: [
          {
            en: 'If I were the owner of the garden, I would feel both angry and disappointed.',
            zh: '如果我是這座花園的主人，我會覺得又生氣又失望。',
            jobEn: 'Takes a stance from the owner\'s viewpoint',
            jobZh: '表明立場：選定一個角度（園主）並直接說出感受，兩個形容詞就把立場定住。',
          },
          {
            en: 'It takes a lot of time and effort to grow and maintain flowers.',
            zh: '要種出並照顧好這些花，得花上很多時間和心力。',
            jobEn: 'Explains why the owner feels that way',
            jobZh: '說明原因：交代為什麼會生氣——花不是自己長出來的，是花時間和心力養出來的。',
          },
          {
            en: 'One careless action can destroy the hard work of many people.',
            zh: '一個不小心的舉動，就可能毀掉許多人的心血。',
            jobEn: 'Shows how far one careless act reaches',
            jobZh: '說明影響：把「一個人的小動作」對上「許多人的心血」，用落差把嚴重性放大。',
          },
          {
            en: 'To solve this problem, the garden should put up clearer signs and create special photo spots for visitors.',
            zh: '為了解決這個問題，花園應該立更清楚的告示牌，並且為遊客規劃專門的拍照區。',
            jobEn: 'Proposes what the garden should do',
            jobZh: '提出建議：先給園方能做的具體辦法，一句裡放兩個做法（更清楚的告示＋拍照區）。',
          },
          {
            en: 'More importantly, visitors should learn to be responsible.',
            zh: '更重要的是，遊客應該學會負起責任。',
            jobEn: 'Adds the more important duty on visitors',
            jobZh: '提出建議：用 More importantly 換對象，把責任從園方推回遊客身上，語氣往上加一層。',
          },
          {
            en: 'A beautiful photo may last for a few years, but a beautiful garden should be protected for everyone.',
            zh: '一張美麗的照片也許能留存幾年，但一座美麗的花園應該為所有人好好守護。',
            jobEn: 'Closes on a photo-versus-garden contrast',
            jobZh: '結論收尾：用「照片 vs 花園」的對比句收尾，短暫的個人好處對上長久的共同利益，講完就停。',
          },
        ],
      },
    ],
  },
  {
    id: 'e109',
    year: '109',
    title: 'Department Store Anniversary Sale',
    aim: '賣場週年慶，看圖想像一個事件或故事',
    type: '看圖說故事',
    pictures: 2,
    words: 180,
    keyZh: '這是看圖說故事型。第一段建立場景與衝突；第二段寫行動與結局。故事不要太複雜，考場時間有限，不要寫成 Netflix 影集第一季。',
    takeawayEn: 'Narrow from the whole crowded scene down to one small concrete incident, then let a single character\'s one decision — and what it cost him — deliver the ending.',
    takeawayZh: '先把鏡頭從整個大場面縮到一個小小的具體事件，再讓一個人的一個決定（以及他為此付出的代價）來收尾——考場故事只需要一個選擇，不需要複雜劇情。',
    paras: [
      {
        label: 'Scene',
        labelZh: '第一段：場景與事件開端',
        noteZh: '定調開場 → 描述圖片 → 說明原因 → 描述圖片 → 補充細節。',
        sentences: [
          {
            en: 'Last weekend, a department store held a big anniversary sale, and the whole place was packed with shoppers.',
            zh: '上個週末，一家百貨公司舉辦了盛大的週年慶，整個賣場擠滿了購物人潮。',
            jobEn: 'Opens with time, place and situation',
            jobZh: '定調開場：用「上個週末＋地點＋事件」一句話把時間、地點、場面一次交代完，故事馬上有舞台。',
          },
          {
            en: 'People were standing in long lines, holding shopping bags, and rushing from one counter to another.',
            zh: '人們排著長長的隊伍，手上提著購物袋，從一個櫃位衝到另一個櫃位。',
            jobEn: 'Lists what the picture literally shows',
            jobZh: '描述圖片：把圖上看得到的動作列出來——排隊、提袋子、來回衝——用三個 V-ing 串成一句。',
          },
          {
            en: 'Everyone wanted to get the best discount before the products were sold out.',
            zh: '每個人都想在商品賣完之前搶到最好的折扣。',
            jobEn: 'Explains why the crowd behaves this way',
            jobZh: '說明原因：解釋大家為什麼這麼拚，把畫面裡的混亂變成有理由的行為，不是只在寫景。',
          },
          {
            en: 'In the middle of the crowd, an elderly woman accidentally dropped her wallet while she was trying to carry several bags at the same time.',
            zh: '在人群之中，一位年長的女士同時想提好幾袋東西，不小心把皮夾掉在地上。',
            jobEn: 'Zooms in on one specific incident',
            jobZh: '描述圖片：鏡頭從整個賣場推到一個人身上。這句是事件的起點，也還在圖片裡——看圖說故事的「事件」就是這樣長出來的。',
          },
          {
            en: 'She did not notice it at first and continued walking toward the elevator.',
            zh: '她一開始沒有發現，繼續往電梯的方向走去。',
            jobEn: 'Adds the detail that creates suspense',
            jobZh: '補充細節：再補一個細節「她沒發現」，把問題懸在那裡，第二段才有戲可以演。',
          },
        ],
      },
      {
        label: 'Resolution',
        labelZh: '第二段：後續發展與結局',
        noteZh: '描述圖片 → 排除錯誤想法 → 轉折 → 補充細節 → 說明影響 → 結論收尾。',
        sentences: [
          {
            en: 'A teenage boy saw the wallet on the floor and picked it up.',
            zh: '一個青少年看見地上的皮夾，把它撿了起來。',
            jobEn: 'Introduces the character who acts',
            jobZh: '描述圖片：第二段第一句就讓主角登場並且動起來。故事型作文不用鋪陳，直接接上上一段的東西。',
          },
          {
            en: 'At first, his friends told him to ignore it because they were in a hurry to buy a popular pair of shoes.',
            zh: '一開始，他的朋友叫他不要理，因為他們正急著要去買一雙很熱門的鞋子。',
            jobEn: 'Puts up the easy wrong choice first',
            jobZh: '排除錯誤想法：先寫出最省事的那個錯誤選項（不要理它），後面的正確決定才有份量。',
          },
          {
            en: 'However, the boy decided to take the wallet to the information desk.',
            zh: '然而，這個男孩還是決定把皮夾拿到服務台。',
            jobEn: 'Pivots on However to the right choice',
            jobZh: '轉折：用 However 一轉，主角做出相反的決定，這一句就是整篇故事的轉捩點。',
          },
          {
            en: 'A few minutes later, the elderly woman came back anxiously, looking for it.',
            zh: '幾分鐘後，那位年長的女士焦急地回來找皮夾。',
            jobEn: 'Moves the story to the payoff',
            jobZh: '補充細節：補上「幾分鐘後」的時間推進，把失主帶回現場，故事才收得回來。',
          },
          {
            en: 'When she got her wallet back, she thanked the boy again and again.',
            zh: '當她拿回皮夾時，她一次又一次地向男孩道謝。',
            jobEn: 'Shows the effect on the other person',
            jobZh: '說明影響：寫出這個決定對別人造成的結果——她拿回皮夾、不停道謝，善意有了回音。',
          },
          {
            en: 'The boy did not get the shoes he wanted, but he gained something more valuable: the pride of doing the right thing.',
            zh: '男孩沒有買到他想要的那雙鞋，但他得到了更珍貴的東西：做對的事情所帶來的驕傲。',
            jobEn: 'Closes on the lesson with a contrast',
            jobZh: '結論收尾：用「失去 vs 得到」的對比收尾，把故事升級成一句道理，講完就停，不再多寫。',
          },
        ],
      },
    ],
  },
];

// ------------------------------------------------------------------ 全頁內容

const LESSON = {
  kicker: '109–115 學年度',
  title: '學測英文寫作',
  titleEn: 'Seven years of the exam essay, taken apart',

  intro: {
    zh: '七年的學測英文作文攤開來看：考過什麼、怎麼考、五種題型、七篇範文的逐句結構，以及不管題目換成什麼都用得上的句型。題目每年都不一樣，要學的東西其實一直是同一組——這一頁就是把那一組數出來。',
    en: 'Seven years of the exam essay, side by side: what was asked, how it is really marked, the five question types, the sentence-by-sentence structure of seven model answers, and the frames that work whatever the topic turns out to be.',
  },

  goals: {
    lead: '看完這一頁，你應該可以：',
    items: [
      '看到一個新題目，馬上判斷它屬於五種類型的哪一種。',
      '說出範文裡每一句在做什麼事，而不只是看得懂它的意思。',
      '用四個必練句型，把「圖片—現象—原因—建議」四段話寫出來。',
      '在考場上，用固定的開頭句和結尾句把時間留給中間的內容。',
    ],
  },

  source: {
    zh: '題目與範文整理自〈學測英文寫作〉講義。七個題目都已考過（115 學年度學測於 2026 年 1 月舉行），題目方向依大考中心公布試題與評分原則。七篇範文是模擬範文而非官方佳作，實際字數 162–180 字（講義寫的 130–170 是低估）。「跨年共通模式」一節講義沒有，是把八十個句子逐句標記後統計出來的。',
  },

  // 深入練習的連結：113 那一年在本站有一整頁的逐句翻譯練習。
  practice: {
    year: '113',
    href: '../robot-helper/',
    label: 'Robot Helper：113 學年度逐句練習',
    note: '這一題在本站另有一整頁：十八句中翻英、整段挑戰、句型、單字，以及自己寫一篇。',
  },

  parts: [

    // ------------------------------------------------------------- 題目一覽

    {
      id: 'years',
      kind: 'years',
      n: '一',
      title: '七年題目一覽',
      titleEn: 'What has been asked',
      lead: '109 到 115 學年度，七個題目，都已經考過了。先看「寫作任務重點」那一欄——那是題目真正要你做的事，不是題目的主題。',
      note: '「圖」欄是考卷上給了幾張圖。描述圖片本身就是評分項目，所以圖幾張、要不要全部寫到，是進考場前就該知道的事。',
      head: { year: '學年度', topic: '主題', form: '題型', pics: '圖', task: '寫作任務重點' },
      rows: [
        {
          year: '115',
          pics: 3,
          topic: '養寵物風氣與寵物角色改變',
          form: '圖片＋現象分析',
          task: '第一段描述圖片中的現象；第二段根據自身經驗或觀察，說明原因與可能影響。',
          essay: 'e115',
        },
        {
          year: '114',
          pics: 2,
          topic: '颱風假',
          form: '對比圖片＋個人看法',
          task: '第一段描述颱風假可能出現的兩種不同情景；第二段說明自己對放颱風假的看法與經驗。',
          essay: 'e114',
        },
        {
          year: '113',
          pics: 3,
          topic: '青少年生活困擾與機器人小幫手',
          form: '圖片＋問題解決',
          task: '從 first heartbreak／caring what others think／mood swings 選一個想解決的問題；第二段說明機器人應具備的特質、能力與分工方式。',
          essay: 'e113',
        },
        {
          year: '112',
          pics: 4,
          topic: '表情符號 emoji 的使用',
          form: '圖片＋生活經驗',
          task: '第一段從考卷上的四個表情符號中挑一到兩個，說明人們為何喜歡用它、以及它的溝通功能；第二段以個人或親友經驗討論可能造成的誤會或困擾，並提出解決方法。',
          trap: '這一年的離題陷阱就在「四個裡挑一到兩個」——只泛泛談表情符號好用，沒有扣住考卷上的那幾個圖，就會被判離題。',
          essay: 'e112',
        },
        {
          year: '111',
          pics: 2,
          topic: '理想中的公園',
          form: '圖片比較＋個人觀點',
          task: '比較兩種公園：一種有遊樂設施，一種偏自然景觀；第二段描述自己理想中的公園特色。',
          essay: 'e111',
        },
        {
          year: '110',
          pics: 1,
          topic: '遊客賞花時踐踏草皮／破壞花園',
          form: '看圖敘事＋觀點',
          task: '第一段描述遊客無視告示、進入未開放區域、拍照或破壞花草；第二段可從遊客或園主角度表達感受與建議。',
          essay: 'e110',
        },
        {
          year: '109',
          pics: 2,
          topic: '賣場週年慶事件或故事',
          form: '看圖說故事',
          task: '根據賣場週年慶新聞報導圖片想像事件或故事；第一段描述場景與正在發生的狀況，第二段敘述後續發展與結果。',
          essay: 'e109',
        },
      ],
    },

    // ----------------------------------------------------------------- 趨勢

    {
      id: 'trends',
      kind: 'trends',
      n: '二',
      title: '題型趨勢',
      titleEn: 'What is really being tested',
      lead: '七年看下來，方向很清楚。',
      items: [
        {
          h: '圖片引導幾乎是核心題型',
          body: '學生不能只會寫抽象想法，還要能描述圖片細節、比較情境、推論背後現象。這不是單純作文，是「觀察力＋英文表達力」的混合測驗。',
        },
        {
          h: '多半要求兩段式結構',
          body: '常見安排是——第一段：描述圖片／現象／問題；第二段：個人經驗、看法、原因、影響或解決方法。',
          extra: '近年作文通常要求至少 120 words，英文作文占 20 分；大考中心評分重點包含內容、組織、文法句構、字彙拼字等面向。',
        },
        {
          h: '主題越來越生活化，但思考要求更高',
          body: '題目看起來很生活：寵物、颱風假、emoji、公園、青少年困擾。但真正要考的是——',
          punch: 'Can students explain a social phenomenon clearly?',
          punchZh: '學生能不能把一個社會現象講清楚？',
        },
      ],
    },

    // ------------------------------------------------------------- 五大類型

    {
      id: 'types',
      kind: 'types',
      n: '三',
      title: '五大作文類型',
      titleEn: 'The five question types',
      lead: '七個題目可以歸成五類。拿到新題目時，先判斷它是哪一類，該練的能力就定下來了。',
      note: '這五類是教學上的分法，不是大考中心的官方分類；界線本來就會重疊。112 放在「社會現象分析」，但它也要求提出解決方法，同時算得上「問題解決型」——真正重要的是看出題目要你做哪幾件事，而不是把它歸進哪一格。',
      items: [
        { name: '看圖說故事', years: ['109'], skill: '場景描寫、事件發展、結局設計' },
        { name: '圖片描述＋感受反思', years: ['110'], skill: '描述行為、表達立場、提出建議' },
        { name: '圖片比較＋理想設計', years: ['111'], skill: '比較、偏好、說明理由' },
        { name: '社會現象分析', years: ['112', '115'], skill: '說明原因、影響、個人觀察' },
        { name: '問題解決型', years: ['113', '114'], skill: '描述問題、提出解方、連結經驗' },
      ],
    },

    // --------------------------------------------------------------- 七篇範文

    {
      id: 'essays',
      kind: 'essays',
      n: '四',
      title: '七篇範文',
      titleEn: 'Seven model answers',
      lead: '每篇先讀英文，再打開「逐句結構」看第二次。要背的不是這些字，是每一句在做的事——那個東西換了題目還在。',
      structureLabel: '顯示每句在做什麼',
      structureLabelEn: 'Show what each sentence is doing',

      /* 這一段一定要留著。講義把範文放在「依據大考中心公布試題、評分原則與佳作
         說明整理」這句話後面，很容易被當成官方佳作；它們不是。寫清楚才不會讓
         學生拿模擬稿當標準答案。 */
      provenance: {
        h: '這七篇不是大考中心佳作',
        body: '是照著各年題目寫出來的模擬範文，難度約 B1–B2，每篇 162–180 字，寫成方便拆解結構的樣子。真正的官方佳作（附閱卷老師評語）在大考中心網站上每一年都有，那才是最終標準——這一頁教的是骨架，佳作給的是標竿，兩個都要看。',
        link: 'https://www.ceec.edu.tw/',
        linkLabel: '大考中心 ceec.edu.tw',
      },

      items: ESSAYS,
    },

    // --------------------------------------------------------- 跨年共通模式

    /* 這一節講義裡沒有，是把七篇範文的 80 個句子逐句標完之後數出來的。
       分母都是七篇，所以「7/7」就是七年都出現。 */

    {
      id: 'patterns',
      kind: 'patterns',
      n: '五',
      title: '跨年共通模式',
      titleEn: 'What all seven have in common',
      lead: '把七篇範文的八十個句子逐句標完之後，數出來的東西。這些不是猜的，是七年都真的出現的做法——換句話說，這就是你進考場前該有的那份清單。',
      always: {
        h: '七年都出現',
        items: [
          {
            name: '結論收尾',
            body: '七篇的最後一句，全部都是。沒有例外。寫作文最安全的一句話就是：最後一句一定要收結論，不要停在舉例。',
          },
          {
            name: '說明影響',
            body: '七篇全有，全套八十句裡出現十次，是使用率最高的內文動作。規則很簡單：任何描述或例子之後，下一個問題永遠是「這會影響到誰、造成什麼」。',
          },
          {
            name: '轉折',
            body: '七篇全有，而且只靠兩個字扛：However 和 Instead。把這兩個字練熟，等於拿到七分之七的轉折句。',
          },
        ],
      },
      often: {
        h: '五到七年之間出現',
        items: [
          { name: '定調開場', hit: '5/7', body: '第一句先講大背景，不碰圖片細節。另外兩篇：113 第一句直接回答題目，110 第一句直接描述圖片——所以第一句其實只有這三種選擇。' },
          { name: '描述圖片', hit: '5/7', body: '講圖片時只挑最關鍵的一句話，不要把畫面上每樣東西都數一遍。' },
          { name: '舉例說明', hit: '5/7', body: '訊號詞很固定：For example，或直接丟三件事並列（上餐廳／買食物／慶生）。' },
          { name: '說明原因', hit: '5/7', body: '靠 because、so，或 It takes... 這類解釋句撐起來。' },
          { name: '補充細節', hit: '5/7', body: '永遠接在描述或舉例後面，從來不放在段落開頭。' },
          { name: '排除錯誤想法', hit: '4/7', body: '先否定最直覺的答案，下一句的正解才有力道。' },
          { name: '表明立場', hit: '4/7', body: '第二段開頭一句話講死自己的看法，不鋪陳。' },
        ],
      },
      pairs: {
        h: '兩個最值得整組背起來的組合',
        items: [
          {
            name: '排除錯誤想法 → 轉折',
            hit: '4/7',
            body: '七篇裡有四篇用了，而且這四篇裡兩句永遠緊鄰：先一句 not／should not／told him to ignore，下一句立刻 Instead 或 However 給出真正的答案。這是整組資料裡最值得整組背下來的東西。',
            egs: [
              { en: 'These examples show that pets are no longer just animals kept at home. Instead, they have become companions…', y: '115' },
              { en: 'People should not see a typhoon day simply as a free holiday. Instead, they should stay alert…', y: '114' },
              { en: 'It should not simply tell me to “cheer up,” because that usually does not help. Instead, it could ask simple questions…', y: '113' },
            ],
          },
          {
            name: '最後一句寫成短對比',
            hit: '5/7',
            body: '七篇裡有五篇的最後一句都是「A 很好，但 B 更重要」這種短對比句。句子短、有轉折、有評價——考場上最有效率的收尾方式。',
            egs: [
              { en: 'A day off is nice, but staying safe matters more.', y: '114' },
              { en: 'A small picture may look cute, but it can still create a big problem.', y: '112' },
              { en: 'A beautiful photo may last for a few years, but a beautiful garden should be protected for everyone.', y: '110' },
              { en: 'The boy did not get the shoes he wanted, but he gained something more valuable: the pride of doing the right thing.', y: '109' },
            ],
          },
        ],
      },
      close: '把上面這些合起來，一篇作文的最低骨架其實只有五步：開場定調 → 描述圖片 → 舉例並說出影響 → 用 However／Instead 轉一次 → 用一句短對比收尾。剩下的都是把這五步填滿。',
    },

    // ------------------------------------------------------------- 必練句型

    {
      id: 'frames',
      kind: 'frames',
      n: '六',
      title: '四種必練句型',
      titleEn: 'Four frames to drill',
      lead: '四句話，就能撐起一篇兩段式作文的骨架：這是什麼圖 → 這是什麼現象 → 為什麼會這樣 → 那該怎麼辦。先自己想英文，再翻開來對。',
      items: [
        {
          name: '圖片描述句',
          zh: '這張圖片顯示幾個人在擁擠的地方排隊。',
          en: 'The picture shows several people waiting in line at a crowded place.',
          note: 'The picture shows + 名詞 + 現在分詞。用 shows 不用 is showing，圖片是靜止的。',
        },
        {
          name: '現象說明句',
          zh: '近年來，這個現象在台灣變得更常見。',
          en: 'This phenomenon has become more common in Taiwan in recent years.',
          note: 'in recent years 搭配現在完成式 has become，講的是「到現在為止的變化」。',
        },
        {
          name: '原因分析句',
          zh: '一個可能的原因是人們比以前承受更多壓力。',
          en: 'One possible reason is that people are under more pressure than before.',
          note: 'One possible reason is that + 完整子句。加上 possible 語氣才不會太滿，閱卷老師喜歡這種留餘地的說法。',
        },
        {
          name: '影響／建議句',
          zh: '如果我們想解決這個問題，我們需要在行動前更仔細思考。',
          en: 'If we want to solve this problem, we need to think more carefully before taking action.',
          note: 'If 子句用現在式，主要子句用 need to／should。before 後面接動名詞 taking。',
        },
      ],
    },

    // --------------------------------------------------------------- 共用句庫

    {
      id: 'toolkit',
      kind: 'toolkit',
      n: '七',
      title: '共用句庫',
      titleEn: 'Sentences that work every year',
      lead: '開頭、立場、結尾——這三處每年都要寫，而且每年都可以用同樣的句子。背起來，考場上的時間就能全部留給中間的內容。先看中文想英文，再翻卡片。',
      groups: [
        {
          name: '圖片描述',
          items: [
            {
              zh: '圖片呈現了與這個議題有關的兩種不同情況。',
              en: 'The pictures show two different situations related to this issue.',
              note: '對比型題目（111、114）的第一句就可以用這句。',
            },
            {
              zh: '在圖片中，我們可以看到幾個人正在做某件事，反映出一個常見的社會現象。',
              en: 'In the picture, we can see several people doing something that reflects a common social phenomenon.',
              note: '現象分析型（112、115）好用。that reflects 帶出「這不只是圖，是現象」。',
            },
          ],
        },
        {
          name: '個人看法',
          items: [
            {
              zh: '我認為這個議題不應該只從單一角度來看。',
              en: 'In my opinion, this issue should not be viewed from only one side.',
              note: '第二段開場用。被動 should not be viewed 比 we should not view 更穩重。',
            },
            {
              zh: '根據我的經驗，我學到小小的行為可能造成嚴重結果。',
              en: 'From my own experience, I have learned that small actions can lead to serious results.',
              note: '題目要求「個人經驗」時（112、114）直接接上自己的故事。',
            },
          ],
        },
        {
          name: '結尾句',
          items: [
            {
              zh: '因此，我們在行動前應該更仔細思考。',
              en: 'Therefore, we should think more carefully before taking action.',
              note: '最安全的收尾。寫不完的時候，這一句能把文章收乾淨。',
            },
            {
              zh: '只有當人們更有責任感時，我們才能為每個人創造更好的環境。',
              en: 'Only when people become more responsible can we create a better environment for everyone.',
              note: 'Only when 放句首要倒裝：can we，不是 we can。寫對了是加分句，寫錯了很顯眼——有把握再用。',
            },
          ],
        },
      ],
    },

    // ----------------------------------------------------------------- 怎麼練

    {
      id: 'method',
      kind: 'method',
      n: '八',
      title: '怎麼練',
      titleEn: 'How to practise',
      lead: '學測英文作文已經不是背幾篇範文就能穩穩過關。',
      steps: [
        { name: '圖片觀察', note: '先看懂圖：誰、在哪、在做什麼、有什麼不對勁。' },
        { name: '句型輸出', note: '用四個必練句型，把看到的東西變成英文句子。' },
        { name: '兩段式組織', note: '第一段描述，第二段看法——先決定哪句放哪段。' },
        { name: '個人經驗套用', note: '找一件真的發生過的小事，接進第二段。' },
        { name: '原因與影響分析', note: '最後補上「為什麼會這樣」和「會造成什麼」。' },
      ],
      close: '先看懂圖，再產出英文，最後組織文章。順序反了，就會變成硬背範文。',
    },
  ],
};

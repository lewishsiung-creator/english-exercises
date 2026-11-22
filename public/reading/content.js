/* High School Reading — 高中英文閱讀. Rendered by render.js.

   One object per article in `passages`; the page grows by adding one and
   nothing else. The contents list, the colours and the numbering follow.

   THE TEXT IS THE SOURCE'S, WORD FOR WORD. `en` and `zh` on a paragraph are the
   handout's own. Nothing is marked up in them, with two exceptions the handout
   itself has: *asterisks* for its italics, and __11.__ for a numbered blank.
   A glossed word is not marked in the text at all — render.js finds it by
   searching for `find` (or `w`), so the paragraph stays pasteable and an edit
   to a word list cannot damage the English. If a `find` stops matching, the
   console says so.

   TWO WORD LISTS, ON PURPOSE. `words` is the tap-to-gloss layer inside the
   passage and is this page's own. `vocab` is the teacher's list, shown in the
   字彙表 part after the questions, and its wording should not be "improved".

   KEEP A TESTED WORD OUT OF `words`. A word a question asks about (ploy, a
   strong grip, uneventful) would be handed over by its own gloss. In `vocab`,
   `after: 11` keeps a row shut until blank 11 is solved, for the same reason.

   THE REVIEW AT THE END. In a `pick` item the right answer comes first in
   `options`; the page shuffles them. Every sentence there is new rather than
   one of the teacher's examples, because recognising a sentence is not
   remembering a word. With `wrong: 'gloss'` every option must be a headword in
   a `vocab`, so a wrong tap can say what that word means; `key` names the list
   entry to show once it is solved, when that is not the first option.

   Questions, notes and discussion prompts are this page's own. In a question, `answer` is an index into `options`, `no` gives the reason for
   each wrong option by that same index, and `why` shows once it is solved.
   Explanations are in Chinese only: the reader is a Taiwanese student, the same
   decision /exam-writing/ made. */

const RD = {
  kicker: 'High School Reading',
  titleZh: '高中英文閱讀',
  title: 'Texts, Read Closely',
  intro: {
    zh: '一次讀一篇。先試著直接讀英文，點虛線字看字義，整段卡住再點「中」。前三篇後面有寫作句型和四關單字複習；Unit 13 的三篇是學測題型練習：綜合測驗、文意選填和混合題。',
    en: 'One text at a time. Read the English first, tap a dotted word for its meaning, and open the 中 only when a whole paragraph has stopped you. The first three texts are followed by writing patterns and a word review; the three Unit 13 texts practise exam question types.',
  },
  /* What a student can do after this page, and how to pace it. Shown on the
     cover as three short columns, like the word pages' plan. */
  plan: [
    { k: '讀完以後', v: '你會更會抓文章的主旨、判斷作者的立場、從上下文猜生字——這些正是學測閱讀測驗和克漏字在考的能力。' },
    { k: '每次讀多久', v: '一篇大約 30 分鐘：先讀英文、做閱讀測驗，看不懂再看中譯。最後的四關複習大約 20 分鐘。' },
    { k: '要多久', v: '前三篇加上複習，一週內就能做完。隔幾天再回來做一次四關複習，答錯過的字會記得更牢。Unit 13 的三篇每篇約 15 分鐘。' },
  ],


  /* The two word-list subpages, linked from the cover. */
  vocab: [
    { href: 'vocab/', zh: '高中單字：大考中心參考詞彙表 →', en: 'The CEEC word list, Levels 1–6' },
    { href: 'junior-vocab/', zh: '國中單字：教育部 2,000 字 →', en: 'The junior-high curriculum list' },
  ],
  sourceNote: {
    zh: '前三篇文章的英文與中譯、字彙表和寫作句型來自老師提供的資料，第二篇的原文在第二段中途中斷。閱讀測驗、第三篇的選項、筆記與單字複習是本頁另外編寫的，不是原出處的題目。Unit 13 三篇的英文和題目來自老師提供的練習本；標題、中譯、答案與解說、字彙表和討論題是本頁編寫的。',
    en: 'The English and Chinese of the first three texts, the word tables and the writing patterns come from material supplied by the teacher; the second text breaks off partway through its second paragraph. The questions, the choices for the third text, the notes and the review were written for this page. In Unit 13, the English and the questions come from a workbook supplied by the teacher; the titles, translations, answers, explanations, word lists and discussion prompts were written for this page.',
  },

  /* A 文意選填 text's blanks all share one set of choices, named by `bank`. */
  banks: {
    mandala: ['cope', 'examining', 'positive', 'manage', 'achieving', 'noticed', 'feature', 'relaxed', 'indicate', 'focus'],
  },

  passages: [
    // ---------------------------------------------------------------- 1
    {
      id: 'dire-wolves',
      icon: '🐺',
      en: 'Colossal Biosciences and Dire Wolves',
      zh: 'Colossal Biosciences 與恐狼',
      sub: '一家公司說它讓恐狼復活了。作者為什麼不買帳？',
      words: [
        { w: 'hype', pos: 'n.', zh: '炒作；大肆宣傳' },
        { w: 'de-extinction', pos: 'n.', zh: '滅絕物種復生' },
        { w: 'conservation-washing', pos: 'n.', zh: '保育漂綠（借保育之名美化形象）' },
        { w: 'extract', find: 'extracted', pos: 'v.', zh: '萃取；提取' },
        { w: 'fossilized', pos: 'adj.', zh: '化石化的' },
        { w: 'isolate', find: 'isolated', pos: 'v.', zh: '分離出；單獨取出' },
        { w: 'genetic marker', find: 'genetic markers', pos: 'n.', zh: '基因標記' },
        { w: 'genome', find: 'genomes', pos: 'n.', zh: '基因組' },
        { w: 'embryo', find: 'embryos', pos: 'n.', zh: '胚胎' },
        { w: 'implant', find: 'implanted', pos: 'v.', zh: '植入' },
        { w: 'surrogate', pos: 'adj.', zh: '代理孕母的；代理的' },
        { w: 'exhibit', pos: 'v.', zh: '展現；顯示出' },
        { w: 'feat', pos: 'n.', zh: '了不起的成就' },
        { w: 'hybrid', find: 'hybrids', pos: 'n.', zh: '混種生物' },
        { w: 'misleading', pos: 'adj.', zh: '誤導的' },
        { w: 'rodent', pos: 'n.', zh: '齧齒動物' },
        { w: 'pelt', find: 'pelts', pos: 'n.', zh: '毛皮' },
        { w: 'grounded', pos: 'adj.', zh: '務實的；腳踏實地的' },
        { w: 'biodiversity', pos: 'n.', zh: '生物多樣性' },
        { w: 'reversible', pos: 'adj.', zh: '可逆的；可挽回的' },
        { w: 'distraction', pos: 'n.', zh: '讓人分心的事物' },
        { w: 'cite', find: 'cited', pos: 'v.', zh: '援引；引用' },
        { w: 'marvel', find: 'marvels', pos: 'v.', zh: '驚嘆' },
        { w: 'snowball', find: 'snowballing', pos: 'v.', zh: '如滾雪球般擴大' },
        { w: 'safeguard', pos: 'v.', zh: '保護；維護' },
      ],
      vocab: {
        themeEn: 'Wildlife Conservation',
        themeZh: '野生動物保育',
        words: [
          { w: 'extinct', pos: 'adj.', zh: '已滅絕的', use: 'extinct species', useZh: '已滅絕的物種', star: true },
          { w: 'conservation', pos: 'n.', zh: '保育；保護', use: 'wildlife conservation', useZh: '野生動物保育', star: true },
          { w: 'remains', pos: 'n.', zh: '遺骸；殘骸', use: 'fossilized remains', useZh: '化石遺骸' },
          { w: 'genetic', pos: 'adj.', zh: '基因的；遺傳的', use: 'genetic differences', useZh: '基因差異' },
          { w: 'trait', pos: 'n.', zh: '特徵；特性', use: 'physical traits', useZh: '身體特徵' },
          { w: 'hybrid', pos: 'n.', zh: '混種生物', use: 'a hybrid animal', useZh: '混種動物' },
          { w: 'misleading', pos: 'adj.', zh: '誤導的', use: 'misleading information', useZh: '誤導性的資訊', star: true },
          { w: 'restore', pos: 'v.', zh: '恢復；修復', use: 'restore a damaged ecosystem', useZh: '修復受損的生態系', star: true },
          { w: 'biodiversity', pos: 'n.', zh: '生物多樣性', use: 'biodiversity loss', useZh: '生物多樣性的流失' },
          { w: 'safeguard', pos: 'v.', zh: '保護；維護', use: 'safeguard natural resources', useZh: '保護自然資源', star: true },
        ],
        phrases: [
          { w: 'spark great hype', zh: '引發熱烈炒作與關注', eg: 'The announcement sparked great hype online.' },
          { w: 'a handful of', zh: '少數幾個；少量的', eg: 'Only a handful of students knew the answer.', star: true },
          { w: 'at best', zh: '充其量；往最好處說', eg: 'The plan is, at best, a temporary solution.', star: true },
          { w: 'make a misleading claim', zh: '提出誤導性的說法', eg: 'Companies should not make misleading claims about their products.', star: true },
          { w: 'emotional appeal', zh: '情感訴求', eg: 'The advertisement relies on emotional appeal.' },
          { w: 'restore ecological balance', zh: '恢復生態平衡', eg: 'Protecting forests can help restore ecological balance.', star: true },
          { w: 'endangered species', zh: '瀕危物種', eg: 'We must take action to protect endangered species.', star: true },
          { w: 'distract A from B', zh: '使 A 分心而無法專注於 B', eg: 'Constant notifications distract students from their studies.', star: true },
          { w: 'cite A as an excuse to V', zh: '援引 A 作為做某事的藉口', eg: 'The company cited rising costs as an excuse to cut services.', star: true },
          { w: 'give priority to', zh: '優先考慮；優先處理', eg: 'Governments should give priority to environmental protection.', star: true },
        ],
        terms: [
          { w: 'de-extinction', zh: '讓已滅絕物種復生' },
          { w: 'conservation-washing', zh: '保育漂綠；以保育之名包裝實際效益有限的行動' },
          { w: 'genome-editing technology', zh: '基因組編輯技術' },
          { w: 'environmental DNA', zh: '環境 DNA' },
        ],
      },
      parts: [
        {
          id: 'dire-text',
          zh: '原文',
          en: 'The text',
          blocks: [
            {
              t: 'text',
              paras: [
                {
                  en: 'In 2024, Colossal Biosciences announced the births of three dire wolves, extinct since the last ice age. While the young wolves have sparked great hype on social media, what Colossal did is not genuine de-extinction, but a case of conservation-washing. Its scientists extracted dire wolf DNA from ancient fossilized remains. After careful analysis, they isolated a handful of genes by identifying key genetic markers. They then edited those into the genomes of modern grey wolves. The modified cells were used to create embryos, which were implanted into surrogate dogs. The pups exhibit some traits of dire wolves: broader shoulders, larger bodies and pale coats. Impressive as this technological feat is, these pups are, at best, hybrids. Colossal’s claim that it has brought back a once-eradicated species for the first time in human history is misleading. It’s simply a ploy of clever marketing and emotional appeal.',
                  zh: '2024 年，Colossal Biosciences 宣布三隻恐狼誕生，而這個物種早在上一次冰河時期結束後便已滅絕。雖然這些幼狼在社群媒體上引發熱烈關注，但 Colossal 所做的並不是真正的「滅絕物種復生」，而是一種「保育漂綠」行為。該公司的科學家從古代化石遺骸中萃取恐狼的 DNA。經過仔細分析，他們透過辨識關鍵的基因標記，分離出少數幾個基因，接著將這些基因編輯進現代灰狼的基因組中。經過修改的細胞被用來製造胚胎，再植入代理孕母犬體內。這些幼狼展現出恐狼的部分特徵：較寬的肩膀、較大的體型，以及淡色的毛皮。這項技術成就固然令人印象深刻，但這些幼狼充其量只是混種。Colossal 宣稱自己在人類歷史上首次讓一個已經滅絕的物種重返世界，這種說法具有誤導性。這不過是結合巧妙行銷與情感訴求的宣傳手法。',
                },
                {
                  en: 'Before the dire wolf project, Colossal used a similar technique to engineer a “woolly mouse” — a rodent genetically modified to have mammoth-like pelts. As the leading company in the growing de-extinction movement in the US, it promises that its technologies will help restore ecological balance and bring back other extinct creatures. Meanwhile, in Europe, a group of startups is applying technology in more grounded, practical ways. For instance, Stream Ocean from Switzerland has developed facial recognition software to monitor fish species, and Germany’s Soilytix tracks soil health using environmental DNA. This is where technology can genuinely support biodiversity restoration — not through Frankensteinian genetic manipulations.',
                  zh: '在恐狼計畫之前，Colossal 曾使用類似技術，培育出一種「長毛鼠」——透過基因改造，使這種齧齒動物長出類似猛獁象的毛皮。身為美國日益蓬勃的滅絕物種復生運動中的領導企業，該公司承諾，其技術將有助於恢復生態平衡，並讓其他已滅絕的生物重返世界。與此同時，歐洲有一群新創公司正以更務實、更具實際用途的方式運用科技。例如，瑞士的 Stream Ocean 開發了臉部辨識軟體，用來監測魚類物種；德國的 Soilytix 則利用環境 DNA 追蹤土壤健康。這才是科技真正能協助恢復生物多樣性的方向，而不是透過如同《科學怪人》般的基因操弄。',
                },
                {
                  en: 'Colossal has broadcast the message that extinction is reversible, but it’s not. This may create a dangerous distraction from proven solutions to the biodiversity crisis. The Trump administration has already cited Colossal’s claims as an excuse to reduce endangered species protections. While the public marvels at the adorable “dire-ish” wolves, biodiversity loss is snowballing. Instead of playing God with long-extinct creatures, humanity’s true priority should be to safeguard existing biodiversity and restore what’s been damaged.',
                  zh: 'Colossal 大力傳播「物種滅絕可以逆轉」的訊息，但事實並非如此。這可能造成危險的注意力轉移，使人們忽略那些已證實能應對生物多樣性危機的方法。川普政府已經援引 Colossal 的說法，作為削弱瀕危物種保護措施的藉口。當大眾驚嘆於這些可愛的「貌似恐狼」的幼狼時，生物多樣性的流失卻正如滾雪球般持續加劇。人類真正應該優先做的，是保護現存的生物多樣性，並修復已遭破壞的生態，而不是扮演上帝，操弄早已滅絕的生物。',
                },
              ],
            },
            {
              t: 'note',
              zh: '查證：年份',
              en: 'Fact check',
              bodyZh: '原文第一句的 2024 年說得不夠精確。Colossal 是在 2025 年 4 月才對外公布；三隻幼狼中，兩隻出生於 2024 年 10 月，第三隻出生於 2025 年 1 月。讀時事文章時，日期值得再查一次。',
            },
          ],
        },
        {
          id: 'dire-quiz',
          zh: '閱讀測驗',
          en: 'Questions',
          blocks: [
            {
              t: 'mcq',
              items: [
                {
                  en: 'What is the main idea of the passage?',
                  zh: '這篇文章的主旨是什麼？',
                  options: [
                    'Gene editing should be banned around the world.',
                    'Colossal’s dire wolves are good marketing but distract from real conservation.',
                    'European startups earn more money than American ones.',
                    'Dire wolves should be released back into the wild.',
                  ],
                  answer: 1,
                  no: {
                    0: '作者批評的是 Colossal 的說法，並沒有主張全面禁止基因編輯。',
                    2: '文章比較的是做法，不是獲利。',
                    3: '文中完全沒有提到野放。',
                  },
                  why: '三段都指向同一件事：第一段說這是行銷，第二段舉出更務實的科技，第三段說它讓人忽略真正的保育工作。',
                  ev: [
                    'what Colossal did is not genuine de-extinction, but a case of conservation-washing.',
                    'This is where technology can genuinely support biodiversity restoration',
                    'This may create a dangerous distraction from proven solutions to the biodiversity crisis.',
                  ],
                },
                {
                  en: 'According to the passage, what are the pups, biologically speaking?',
                  zh: '根據本文，就生物學而言，這些幼狼是什麼？',
                  options: [
                    'Dire wolves cloned directly from fossils',
                    'Dogs with a few wolf-like traits',
                    'Grey wolves with a handful of edited genes',
                    'A cross between two living wolf species',
                  ],
                  answer: 2,
                  no: {
                    0: '文中說的是把少數基因編輯進灰狼的基因組，不是從化石複製。',
                    1: '狗只是代理孕母，幼狼本身來自灰狼的細胞。',
                    3: '被編輯的只有灰狼，沒有第二種現存的狼。',
                  },
                  why: '線索是 “edited those into the genomes of modern grey wolves”，所以作者才說 at best, hybrids。',
                  ev: [
                    'They then edited those into the genomes of modern grey wolves.',
                    'these pups are, at best, hybrids.',
                  ],
                },
                {
                  en: 'Which shows the correct order of what Colossal’s scientists did?',
                  zh: '下列哪一項正確呈現了 Colossal 科學家的操作順序？',
                  options: [
                    'Isolate genes → extract DNA → create embryos → edit wolf genomes → implant in dogs',
                    'Extract DNA → edit wolf genomes → isolate genes → implant in dogs → create embryos',
                    'Extract DNA → create embryos → isolate genes → implant in dogs → edit wolf genomes',
                    'Extract DNA → isolate genes → edit wolf genomes → create embryos → implant in dogs',
                  ],
                  answer: 3,
                  no: {
                    0: '基因要先從 DNA 裡找出來，所以萃取一定在分離之前。',
                    1: '要先分離出基因，才有東西可以編輯進去。',
                    2: '胚胎是用「修改過的細胞」做的，所以編輯要在胚胎之前。',
                  },
                  why: '留意文中的順序標記：After careful analysis、then、The modified cells were used to create、which were implanted。',
                  ev: [
                    'Its scientists extracted dire wolf DNA from ancient fossilized remains. After careful analysis, they isolated a handful of genes by identifying key genetic markers. They then edited those into the genomes of modern grey wolves. The modified cells were used to create embryos, which were implanted into surrogate dogs.',
                  ],
                },
                {
                  en: 'What does the word “ploy” in the first paragraph mean?',
                  zh: '第一段的 ploy 是什麼意思？',
                  options: [
                    'A clever trick to gain an advantage',
                    'A careful scientific study',
                    'A serious technical mistake',
                    'A promise made to the public',
                  ],
                  answer: 0,
                  no: {
                    1: '後面接的是 clever marketing and emotional appeal，與科學研究無關。',
                    2: '作者不是說技術出錯。他才剛稱讚這項技術 impressive。',
                    3: '前面的 simply 帶著貶意，說的是手段，不是承諾。',
                  },
                  why: 'ploy 指為了占便宜而用的計謀。simply a ploy 的語氣是「不過是一種手段」。',
                  ev: [
                    'It’s simply a ploy of clever marketing and emotional appeal.',
                  ],
                },
                {
                  en: 'Why does the author mention Stream Ocean and Soilytix?',
                  zh: '作者為什麼提到 Stream Ocean 和 Soilytix？',
                  options: [
                    'To show that Europe is copying Colossal',
                    'To warn that facial recognition can be dangerous',
                    'To give examples of technology that truly helps biodiversity',
                    'To suggest that fish and soil matter more than wolves',
                  ],
                  answer: 2,
                  no: {
                    0: '文中用 Meanwhile 把兩者對比，是不同的路，不是模仿。',
                    1: '作者對這項軟體是肯定的。',
                    3: '重點在科技的用法，不是比較哪種生物重要。',
                  },
                  why: '例子後面緊接著 This is where technology can genuinely support biodiversity restoration，這句就是舉例的目的。',
                  ev: [
                    'This is where technology can genuinely support biodiversity restoration — not through Frankensteinian genetic manipulations.',
                  ],
                },
                {
                  en: 'Which word best describes the author’s attitude toward Colossal?',
                  zh: '哪個字最能形容作者對 Colossal 的態度？',
                  options: [
                    'Admiring',
                    'Critical',
                    'Neutral',
                    'Amused',
                  ],
                  answer: 1,
                  no: {
                    0: '作者只在 Impressive as this technological feat is 這裡讓一步，隨即轉為批評。',
                    2: 'misleading、ploy、playing God 都不是中立的用字。',
                    3: '“dire-ish” 有一點諷刺，但作者談的是 dangerous distraction，態度是認真的。',
                  },
                  why: '判斷態度時看作者挑的字。下一節就來看這些字。',
                  ev: [
                    'misleading',
                    'a ploy of clever marketing and emotional appeal',
                    'dangerous distraction',
                    'playing God',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'dire-words',
          zh: '作者的用字',
          en: 'How the author takes a side',
          blocks: [
            {
              t: 'lead',
              zh: '作者沒有寫「我反對」，立場是藏在用字裡的。同一件事換個說法，語氣就不同。遮住右邊，想想看：如果要寫得中立，你會怎麼說？',
              en: 'The author never writes “I disagree”. The position sits in the choice of words.',
            },
            {
              t: 'loaded',
              items: [
                { w: 'conservation-washing', plain: 'a genetic engineering project', zh: '仿照 greenwashing（漂綠）造的字，暗示「保育」只是一層包裝。' },
                { w: 'a ploy of clever marketing', plain: 'a marketing strategy', zh: 'ploy 暗示別有用心，strategy 只是策略。' },
                { w: 'Frankensteinian genetic manipulations', plain: 'genetic editing', zh: '讓人聯想到失控的怪物實驗；manipulation 也比 editing 負面。' },
                { w: 'playing God', plain: 'trying to revive species', zh: '暗指人類做了不該由人做的事。' },
                { w: '“dire-ish” wolves', plain: 'gene-edited wolves', zh: '-ish 是「有點像」，引號更帶著嘲諷：牠們只是有點像恐狼。' },
              ],
            },
            {
              t: 'note',
              zh: '句型：先讓步，再反駁',
              en: 'Pattern: concede, then reverse',
              bodyZh: 'Impressive as this technological feat is, these pups are, at best, hybrids. 這裡的「形容詞 + as + 主詞 + be 動詞」等於 Although this technological feat is impressive。作者先承認對方的優點，再提出真正要說的話，論點會顯得更公允。',
              good: ['Tired as she was, she finished the report.'],
            },
          ],
        },
        {
          id: 'dire-list',
          zh: '字彙表',
          en: 'Word list',
          blocks: [{ t: 'vocab' }],
        },
        {
          id: 'dire-talk',
          zh: '說說看',
          en: 'Talk about it',
          blocks: [
            {
              t: 'talk',
              items: [
                { en: 'If a company could bring back one extinct animal, should it? Which one, and what could go wrong?', zh: '如果一家公司能讓一種已滅絕的動物復生，它應該這麼做嗎？你會選哪一種？可能出什麼問題？' },
                { en: 'Colossal’s side of the story is missing from this text. What do you think they would say in reply?', zh: '這篇文章沒有 Colossal 那一方的說法。你覺得他們會怎麼回應？' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 2
    {
      id: 'queen-letter',
      icon: '✉️',
      en: 'Queen Elizabeth I’s Letter to the Emperor of China',
      zh: '伊莉莎白一世致中國皇帝的信',
      sub: '一封從倫敦寄往中國的信，走的是一條沒有人走通過的路。',
      words: [
        { w: 'trade route', pos: 'n.', zh: '貿易航線' },
        { w: 'entrust', find: 'entrusted', pos: 'v.', zh: '託付；委託' },
        { w: 'passage', find: 'northwest passage', pos: 'n.', zh: '通道；航道（northwest passage 西北航道）' },
        { w: 'alternative', pos: 'adj.', zh: '替代的；另一個可選的' },
        { w: 'accompanied by', pos: 'phr.', zh: '附帶；伴隨' },
        { w: 'set off', find: 'set off', pos: 'phr.', zh: '出發' },
        { w: 'crossing', pos: 'n.', zh: '橫渡' },
        { w: 'prove', find: 'proved', pos: 'v.', zh: '結果是；證明是' },
        { w: 'sheet of ice', find: 'sheets of ice', pos: 'n.', zh: '大片浮冰' },
      ],
      vocab: {
        themeEn: 'Exploration and Trade',
        themeZh: '探險與貿易',
        words: [
          { w: 'entrust', pos: 'v.', zh: '託付；委託', use: 'entrust a task to someone', useZh: '將任務託付給某人', star: true },
          { w: 'seek', pos: 'v.', zh: '尋找；尋求', use: 'seek opportunities', useZh: '尋找機會', star: true },
          { w: 'passage', pos: 'n.', zh: '通道；航道', use: 'a sea passage', useZh: '海上航道' },
          { w: 'alternative', pos: 'adj./n.', zh: '替代的；替代選項', use: 'an alternative route', useZh: '替代路線', star: true },
          { w: 'accompany', pos: 'v.', zh: '陪同；伴隨', use: 'be accompanied by', useZh: '附有；由……陪同' },
          { w: 'aboard', pos: 'adv./prep.', zh: '在船、飛機或火車上', use: 'passengers aboard the ship', useZh: '船上的乘客' },
          { w: 'uneventful', pos: 'adj.', zh: '平靜無事的', use: 'an uneventful journey', useZh: '平安無事的旅程' },
          { w: 'challenging', pos: 'adj.', zh: '具有挑戰性的', use: 'a challenging task', useZh: '具有挑戰性的任務', star: true },
        ],
        phrases: [
          { w: 'in the hope of + V-ing', zh: '希望能夠……', eg: 'She joined the club in the hope of making new friends.', star: true },
          { w: 'open up a trade route', zh: '開闢貿易航線', eg: 'The voyage aimed to open up a new trade route.' },
          { w: 'establish friendly relations', zh: '建立友好關係', eg: 'The two countries hoped to establish friendly relations.', star: true },
          { w: 'entrust A to B', zh: '將 A 託付給 B', eg: 'The teacher entrusted the project to our team.', star: true },
          { w: 'make an effort to V', zh: '努力做某事', eg: 'We should make an effort to understand different cultures.', star: true },
          { w: 'hold a strong grip on', zh: '牢牢掌控', eg: 'A few companies hold a strong grip on the market.' },
          { w: 'as planned', zh: '按照計畫', eg: 'The event went ahead as planned.', star: true },
          { w: 'set off from', zh: '從某地出發', eg: 'They set off from the harbor early in the morning.', star: true },
          { w: 'heavy fog', zh: '濃霧', eg: 'Heavy fog delayed several flights.' },
          { w: 'block someone’s path', zh: '擋住某人的去路', eg: 'A fallen tree blocked our path.', star: true },
        ],
      },
      parts: [
        {
          id: 'queen-text',
          zh: '原文',
          en: 'The text',
          blocks: [
            {
              t: 'text',
              paras: [
                {
                  en: 'In 1602, Queen Elizabeth I of England wrote a letter to the Emperor of China in the hope of opening up a trade route and starting friendly relations. She entrusted the letter to George Weymouth, who had been hired by the East India Company to seek a northwest passage to the Far East. This was part of England’s broader effort to find an alternative trade route to the east, where the Portuguese and Dutch held a strong grip on trade. Weymouth carried the letter in English, accompanied by copies in Latin, Spanish and Italian.',
                  zh: '1602 年，英格蘭女王伊莉莎白一世寫了一封信給中國皇帝，希望開闢貿易航線，並建立友好關係。她將這封信託付給喬治・韋茅斯。當時，韋茅斯受東印度公司僱用，負責尋找一條通往遠東的西北航道。英格蘭當時正積極尋找另一條通往東方的貿易航線，以突破葡萄牙人與荷蘭人對當地貿易的牢固掌控，而這次任務便是其中的一環。韋茅斯攜帶了這封信的英文版本，以及拉丁文、西班牙文和義大利文的譯本。',
                },
                {
                  en: 'However, the letter did not arrive as planned. Weymouth, with 35 men aboard, set off from Ratcliffe on 2nd May 1602. The westward crossing of the Atlantic was uneventful, but the waters beyond proved far more challenging. Heavy fog and sheets of ice near southern Greenland blocked their path, but …',
                  zh: '然而，這封信並未按計畫送達。1602 年 5 月 2 日，韋茅斯與船上的 35 名人員從拉特克利夫出發。向西橫渡大西洋的航程平安無事，但接下來的海域卻充滿了更嚴峻的挑戰。格陵蘭南部附近的濃霧與大片浮冰擋住了他們的去路，但是……',
                },
              ],
            },
            {
              t: 'stop',
              zh: '原文到這裡中斷',
              en: 'The text breaks off here',
              bodyZh: '句子停在 but 之後。先別查答案，想想看：濃霧和浮冰擋路，但是……接下來可能發生什麼事？',
            },
          ],
        },
        {
          id: 'queen-quiz',
          zh: '閱讀測驗',
          en: 'Questions',
          blocks: [
            {
              t: 'mcq',
              items: [
                {
                  en: 'Why did Queen Elizabeth I write to the Emperor of China?',
                  zh: '伊莉莎白一世為什麼寫信給中國皇帝？',
                  options: [
                    'To ask for help against Portugal',
                    'To invite him to visit England',
                    'To open trade and build friendly relations',
                    'To announce the founding of the East India Company',
                  ],
                  answer: 2,
                  no: {
                    0: '葡萄牙只是競爭對手，文中沒有說要請中國幫忙對付它。',
                    1: '文中沒有提到邀請訪問。',
                    3: '東印度公司只是僱用韋茅斯的單位，不是信的內容。',
                  },
                  why: '第一句就說了：in the hope of opening up a trade route and starting friendly relations。',
                  ev: [
                    'in the hope of opening up a trade route and starting friendly relations',
                  ],
                },
                {
                  en: 'Which language was NOT among the copies Weymouth carried?',
                  zh: '韋茅斯攜帶的版本中，沒有哪一種語言？',
                  options: [
                    'Chinese',
                    'Latin',
                    'Spanish',
                    'Italian',
                  ],
                  answer: 0,
                  no: {
                    1: '文中列出了 Latin。',
                    2: '文中列出了 Spanish。',
                    3: '文中列出了 Italian。',
                  },
                  why: '一封寫給中國皇帝的信，卻沒有中文版本。這點可以留到「說說看」討論。',
                  ev: [
                    'Weymouth carried the letter in English, accompanied by copies in Latin, Spanish and Italian.',
                  ],
                },
                {
                  en: 'What does “held a strong grip on trade” most nearly mean?',
                  zh: 'held a strong grip on trade 最接近什麼意思？',
                  options: [
                    'Were trying to end trade',
                    'Controlled most of the trade',
                    'Depended on English trade',
                    'Shared trade fairly with others',
                  ],
                  answer: 1,
                  no: {
                    0: 'grip 是「緊緊抓住」，不是放手或終止。',
                    2: '英格蘭才是想擠進去的一方。',
                    3: '正因為對方抓得緊，英格蘭才要另找航線。',
                  },
                  why: 'grip 是緊握。英格蘭要找 alternative route，就是因為舊路掌握在別人手裡。',
                  ev: [
                    'This was part of England’s broader effort to find an alternative trade route to the east, where the Portuguese and Dutch held a strong grip on trade.',
                  ],
                },
                {
                  en: 'The Atlantic crossing was “uneventful”. What does this tell us?',
                  zh: '橫渡大西洋的航程是 uneventful。這告訴我們什麼？',
                  options: [
                    'The crew found it boring and wanted to go home.',
                    'The ships had to stop several times for repairs.',
                    'The crew saw many unusual events at sea.',
                    'Nothing went wrong during that part of the voyage.',
                  ],
                  answer: 3,
                  no: {
                    0: 'uneventful 說的是沒發生事，不是船員的感受。',
                    1: '這正好相反：停下來修船算是出事。',
                    2: 'un- 表示否定，所以是沒有 event。',
                  },
                  why: '後面的 but the waters beyond proved far more challenging 形成對比，可見前半段很順利。',
                  ev: [
                    'The westward crossing of the Atlantic was uneventful, but the waters beyond proved far more challenging.',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'queen-list',
          zh: '字彙表',
          en: 'Word list',
          blocks: [{ t: 'vocab' }],
        },
        {
          id: 'queen-talk',
          zh: '說說看',
          en: 'Talk about it',
          blocks: [
            {
              t: 'talk',
              items: [
                { en: 'The text stops at “but …”. How do you think the sentence ended, and what happened to the letter?', zh: '文章停在 but……。你覺得這句話怎麼結束？那封信後來怎麼了？' },
                { en: 'The letter had no Chinese copy. What does that tell you about how much England knew about China in 1602?', zh: '這封信沒有中文版本。這透露出 1602 年的英格蘭對中國了解多少？' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 3
    {
      id: 'frequency-illusion',
      icon: '🧠',
      en: 'The Baader-Meinhof Phenomenon',
      zh: '巴德爾－邁因霍夫現象（頻率錯覺）',
      sub: '學了一個新單字，突然到處都看得到它。真的變多了嗎？',
      words: [
        { w: 'be tempted to', find: 'be tempted to', pos: 'phr.', zh: '忍不住想要' },
        { w: 'occurrence', pos: 'n.', zh: '發生的事情；事件' },
        { w: 'far-left', pos: 'adj.', zh: '極左派的' },
        { w: 'relate', find: 'related', pos: 'v.', zh: '有同感；有共鳴' },
        { w: 'clinical', pos: 'adj.', zh: '（用語）正式客觀的；臨床的' },
        { w: 'frequency illusion', pos: 'n.', zh: '頻率錯覺' },
        { w: 'cognitive', pos: 'adj.', zh: '認知的' },
        { w: 'selective attention', pos: 'n.', zh: '選擇性注意' },
        { w: 'prioritize', find: 'prioritizes', pos: 'v.', zh: '優先處理；優先考慮' },
        { w: 'confirmation bias', find: 'Confirmation bias', pos: 'n.', zh: '確認偏誤' },
        { w: 'unchecked', pos: 'adj.', zh: '不受控制的' },
        { w: 'diagnose', find: 'diagnosed', pos: 'v.', zh: '診斷' },
        { w: 'mechanism', pos: 'n.', zh: '機制' },
        { w: 'perception', pos: 'n.', zh: '感知；看法' },
        { w: 'objective', pos: 'adj.', zh: '客觀的' },
      ],
      vocab: {
        themeEn: 'Attention and Perception',
        themeZh: '注意力與感知',
        words: [
          { w: 'phenomenon', pos: 'n.', zh: '現象', use: 'a common phenomenon', useZh: '常見現象', star: true },
          { w: 'coincidence', pos: 'n.', zh: '巧合', use: 'a strange coincidence', useZh: '奇怪的巧合', star: true, after: 11 },
          { w: 'interpret', pos: 'v.', zh: '解讀；詮釋', use: 'interpret someone’s words', useZh: '解讀某人的話', star: true },
          { w: 'occurrence', pos: 'n.', zh: '發生的事情；事件', use: 'a frequent occurrence', useZh: '經常發生的事' },
          { w: 'cognitive', pos: 'adj.', zh: '認知的', use: 'cognitive processes', useZh: '認知歷程' },
          { w: 'awareness', pos: 'n.', zh: '意識；察覺', use: 'raise public awareness', useZh: '提高大眾意識', star: true },
          { w: 'prioritize', pos: 'v.', zh: '優先處理；優先考慮', use: 'prioritize important tasks', useZh: '優先處理重要任務', star: true },
          { w: 'subsequent', pos: 'adj.', zh: '隨後的；後來的', use: 'subsequent events', useZh: '後續事件', after: 14 },
          { w: 'perception', pos: 'n.', zh: '感知；看法', use: 'public perception', useZh: '大眾的看法', star: true },
          { w: 'objective', pos: 'adj.', zh: '客觀的', use: 'an objective assessment', useZh: '客觀的評估', star: true },
        ],
        phrases: [
          { w: 'be tempted to V', zh: '忍不住想做某事', eg: 'You may be tempted to check your phone while studying.', star: true },
          { w: 'interpret A as B', zh: '將 A 解讀為 B', eg: 'We should not interpret silence as agreement.', star: true },
          { w: 'be traced back to', zh: '可追溯至', eg: 'The tradition can be traced back to the nineteenth century.', star: true },
          { w: 'selective attention', zh: '選擇性注意', eg: 'Selective attention helps us focus in a noisy room.', star: true },
          { w: 'have a tendency to V', zh: '有做某事的傾向', eg: 'People have a tendency to notice information that supports their views.', star: true },
          { w: 'tune out', zh: '不去注意；忽略', eg: 'She tried to tune out the noise and focus on her work.', star: true, after: 13 },
          { w: 'confirmation bias', zh: '確認偏誤', eg: 'Confirmation bias can lead us to ignore opposing evidence.', star: true },
          { w: 'strengthen one’s belief', zh: '強化某人的信念', eg: 'The experience strengthened her belief in teamwork.', star: true },
          { w: 'if left unchecked', zh: '如果放任不管', eg: 'Small problems can become serious if left unchecked.' },
          { w: 'remind someone that…', zh: '提醒某人……', eg: 'The story reminds us that first impressions can be wrong.', star: true },
        ],
        terms: [
          { w: 'frequency illusion', zh: '頻率錯覺；剛注意到某件事後，便覺得它突然頻繁出現' },
          { w: 'over-report symptoms', zh: '過度回報症狀' },
          { w: 'turn off a mechanism', zh: '關閉某種機制' },
        ],
      },
      parts: [
        {
          id: 'freq-text',
          zh: '原文與克漏字',
          en: 'The text, with five blanks',
          blocks: [
            {
              t: 'lead',
              zh: '每段下面就是這一段的空格。先讀完整段再選，答對了，答案會填回英文和中譯裡。',
              en: 'The choices sit under the paragraph they belong to. Read the whole paragraph first.',
            },
            {
              t: 'text',
              paras: [
                {
                  en: 'Have you ever heard a new song or learned a new word, and suddenly it seems that you’re hearing or seeing it everywhere? You might be tempted to call it __11.__, or even interpret it as some sign from the universe, but there’s actually a term for this occurrence: the Baader-Meinhof phenomenon.',
                  zh: '你是否曾經聽到一首新歌，或學到一個新單字，接著突然覺得到處都能聽見或看見它？你可能會忍不住把這稱為 __11.__，甚至將它解讀為宇宙傳來的某種訊號，但這種情況其實有一個專有名稱：巴德爾－邁因霍夫現象。',
                  blanks: [
                    {
                      n: 11,
                      zhFill: '巧合',
                      options: ['consequence', 'coincidence', 'convenience', 'confidence'],
                      answer: 1,
                      no: {
                        0: 'consequence 是「後果」，前面並沒有提到原因。',
                        2: 'convenience 是「方便」，與到處看見新單字無關。',
                        3: 'confidence 是「信心」，不是用來解釋這種現象的詞。',
                      },
                      why: '後面的 or even interpret it as some sign from the universe 是另一種解釋。人們的兩種直覺反應就是：只是巧合，或是冥冥中的訊號。',
                    },
                  ],
                },
                {
                  en: 'The name can be traced back to 1994, when someone noticed the German far-left group “Baader-Meinhof” mentioned twice within a single day shortly after first hearing of it. He wrote in to a newspaper, many others related, and the unusual label __12.__. Now, the Baader-Meinhof phenomenon has a more clinical term: frequency illusion.',
                  zh: '這個名稱可以追溯至 1994 年。當時，有人在第一次聽說德國極左派團體「巴德爾－邁因霍夫」後不久，竟然在同一天內兩度聽到有人提及它。他寫信向一家報社分享這段經歷，許多其他人也表示有同感，而這個不尋常的名稱就 __12.__。如今，巴德爾－邁因霍夫現象有了一個更正式的學術名稱：頻率錯覺。',
                  blanks: [
                    {
                      n: 12,
                      zhFill: '流傳了下來',
                      options: ['slipped', 'split', 'stuck', 'shrank'],
                      answer: 2,
                      no: {
                        0: 'slip 是「滑落」，說不通。',
                        1: 'split 是「分裂」，一個名稱不會因此分裂。',
                        3: 'shrink 是「縮小」，與名稱無關。',
                      },
                      why: 'stick 在這裡是「固定下來、沿用下去」，常見於 the name stuck。下一句說這個名稱到現在還在用，就是線索。',
                    },
                  ],
                },
                {
                  en: 'Two cognitive processes are at work in creating the illusion. The first is *selective attention*: the brain’s tendency to focus on something newly learned and __13.__ everything else. Once it enters our awareness, the brain prioritizes it even though it has always been there. *Confirmation bias* then strengthens this effect. As we expect to see the new thing more often, each __14.__ sighting confirms our belief that the world is suddenly filled with what has caught our eye.',
                  zh: '這種錯覺是由兩種認知歷程共同造成的。第一種是「選擇性注意」：大腦傾向將注意力集中在剛學到的事物上，並 __13.__ 其他一切。一旦某件事進入我們的意識，大腦便會優先注意它，即使它其實一直都存在。接著，「確認偏誤」會進一步強化這種效果。由於我們預期會更常看見這個新事物，每一次 __14.__ 看見它，都會讓我們更加確信：世界突然到處都是那個引起我們注意的東西。',
                  blanks: [
                    {
                      n: 13,
                      zhFill: '不去理會',
                      options: ['tune out', 'figure out', 'carry out', 'hand out'],
                      answer: 0,
                      no: {
                        1: 'figure out 是「想出、弄懂」，大腦並不是要弄懂其他一切。',
                        2: 'carry out 是「執行」，後面要接任務或計畫。',
                        3: 'hand out 是「分發」，說不通。',
                      },
                      why: 'selective（選擇性的）是線索：專注於一件事，就要把其他的擋掉。and 兩邊是一收一放的關係。',
                    },
                    {
                      n: 14,
                      zhFill: '再',
                      options: ['preceding', 'deliberate', 'imaginary', 'subsequent'],
                      answer: 3,
                      no: {
                        0: 'preceding 是「先前的」，方向相反：這裡談的是之後看見的每一次。',
                        1: 'deliberate 是「刻意的」，文中說的是不經意注意到。',
                        2: 'imaginary 是「想像的」，但那些東西一直都在，真的看見了。',
                      },
                      why: 'subsequent 是「隨後的」。As we expect to see the new thing more often 說的是未來，所以是之後的每一次看見。',
                    },
                  ],
                },
                {
                  en: 'The Baader-Meinhof phenomenon may grow troubling if left unchecked. For instance, a newly diagnosed patient may over-report symptoms they have always had. To be frank, __15.__ to turn off this mechanism, as it is a part of how the brain operates. But understanding this can remind us that our perception is rarely objective. Next time the world seems to echo back what you’ve just learned, pause: the frequency hasn’t changed. Your attention has.',
                  zh: '如果未加以察覺並調整，巴德爾－邁因霍夫現象可能會帶來困擾。例如，剛被診斷出某種疾病的病人，可能會過度回報自己原本就一直有的症狀。坦白說，__15.__ 關閉這個機制，因為它是大腦運作方式的一部分。不過，了解這一點可以提醒我們：我們的感知很少是完全客觀的。下次當世界似乎不斷呼應你剛學到的事物時，先停一下：改變的不是它出現的頻率，而是你的注意力。',
                  blanks: [
                    {
                      n: 15,
                      zhFill: '根本不可能',
                      options: ['it’s perfectly safe', 'there’s no way', 'it’s never too late', 'we should all try'],
                      answer: 1,
                      no: {
                        0: '前一句才說這個現象會帶來困擾，而且這裡要的是做不做得到，不是安不安全。',
                        2: '後面的 as 子句說它是大腦運作的一部分，等於關不掉，談不上太不太晚。',
                        3: '如果都該試著關掉，就接不上後面 But 的轉折。',
                      },
                      why: 'To be frank 預告一句不太討喜的實話；as it is a part of how the brain operates 說明為什麼關不掉；But 再轉到我們還能做什麼。',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'freq-notes',
          zh: '讀懂結構',
          en: 'How the text is built',
          blocks: [
            {
              t: 'note',
              zh: '克漏字：線索常在空格後面',
              en: 'Cloze: read past the blank',
              bodyZh: '這五題裡，第 11、12、15 題的線索都在空格之後。看到空格不要馬上選，先把句子讀完，甚至讀完下一句。',
            },
            {
              t: 'note',
              zh: '句型：省略重複的部分',
              en: 'Pattern: leaving out what is repeated',
              bodyZh: 'the frequency hasn’t changed. Your attention has. 第二句省略了 changed，因為前一句剛說過。這種短句放在結尾特別有力，也是作者收尾的手法。',
              good: ['Prices haven’t gone up. Our spending has.'],
            },
          ],
        },
        {
          id: 'freq-list',
          zh: '字彙表',
          en: 'Word list',
          blocks: [{ t: 'vocab' }],
        },
        {
          id: 'freq-talk',
          zh: '說說看',
          en: 'Talk about it',
          blocks: [
            {
              t: 'talk',
              items: [
                { en: 'What is something you started noticing everywhere after you first learned about it?', zh: '有什麼事物是你第一次知道之後，就開始到處都注意到的？' },
                { en: 'How could this illusion change what someone believes after seeing a rumor online several times?', zh: '有人在網路上多次看到同一則傳言，這種錯覺可能如何影響他的想法？' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------- writing
    {
      id: 'writing',
      label: 'Writing',
      icon: '✍️',
      en: 'Patterns for Your Own Writing',
      zh: '可直接運用於高中寫作的句型',
      sub: '三篇文章裡都讀得到這些句型，把它們用到自己的句子裡。',
      parts: [
        {
          id: 'writing-patterns',
          zh: '五個句型',
          en: 'Five patterns',
          blocks: [
            {
              t: 'patterns',
              items: [
                { pat: 'Adj. + as + S + V, S + V.', en: 'Impressive as the technology is, it has limitations.', zh: '這項技術雖然令人印象深刻，卻仍有其限制。' },
                { pat: 'Instead of + V-ing, S + should + V.', en: 'Instead of ignoring the problem, we should take action.', zh: '我們應該採取行動，而不是忽視問題。' },
                { pat: 'Once + S + V, S + V.', en: 'Once we form a habit, it can be difficult to change.', zh: '一旦我們養成習慣，就可能很難改變。' },
                { pat: 'Even though + S + V, S + V.', en: 'Even though the information is popular, it may not be accurate.', zh: '即使這項資訊廣為流傳，也未必正確。' },
                { pat: 'By + V-ing, S + can + V.', en: 'By considering different viewpoints, we can make better decisions.', zh: '透過考慮不同觀點，我們可以做出更好的決定。' },
              ],
            },
          ],
        },
      ],
    },

    // ----------------------------------------------------------- review
    {
      id: 'review',
      label: 'Review',
      icon: '🔁',
      en: 'Review the Words',
      zh: '單字、片語、搭配詞複習',
      sub: '三篇都讀完再來練。句子都是新的，三篇的內容混在一起考。',
      parts: [
        {
          id: 'review-words',
          zh: '第一關：單字',
          en: 'Round 1: Words',
          blocks: [
            {
              t: 'pick',
              wrong: 'gloss',
              items: [
                { text: 'The dodo has been ___ for more than 300 years.', zh: '渡渡鳥已經滅絕三百多年了。', options: ['extinct', 'objective', 'challenging', 'genetic'] },
                { text: 'This national park is a success story for wildlife ___.', zh: '這座國家公園是野生動物保育的成功案例。', options: ['conservation', 'perception', 'phenomenon', 'occurrence'] },
                { text: 'The ad was ___: the “free” gift cost NT$500 to ship.', zh: '這則廣告有誤導之嫌：那份「免費」贈品要付 500 元運費。', options: ['misleading', 'cognitive', 'uneventful', 'extinct'] },
                { text: 'Students who feel stressed should ___ help from a counselor.', zh: '覺得壓力大的學生應該向輔導老師尋求協助。', options: ['seek', 'restore', 'interpret', 'accompany'] },
                { text: 'Cycling is a cheap ___ to driving.', zh: '騎腳踏車是開車以外的便宜選擇。', options: ['alternative', 'trait', 'hybrid', 'remains'] },
                { text: 'Climbing Yushan was the most ___ thing I have ever done.', zh: '爬玉山是我做過最有挑戰性的事。', options: ['challenging', 'misleading', 'genetic', 'extinct'] },
                { text: 'A rainbow is a natural ___ caused by light and water.', zh: '彩虹是由光和水形成的自然現象。', options: ['phenomenon', 'perception', 'remains', 'trait'] },
                { text: 'What a ___! We both wore the same shirt today.', zh: '真是太巧了！我們今天穿了同一件上衣。', options: ['coincidence', 'awareness', 'conservation', 'perception'], after: 11 },
                { text: 'How do you ___ the ending of this novel?', zh: '你怎麼解讀這本小說的結局？', options: ['interpret', 'safeguard', 'entrust', 'accompany'] },
                { text: 'With only an hour left, we need to ___ the most important questions.', zh: '只剩一小時，我們得優先處理最重要的題目。', options: ['prioritize', 'accompany', 'safeguard', 'entrust'] },
                { text: 'A judge must stay ___ and not take sides.', zh: '法官必須保持客觀，不偏袒任何一方。', options: ['objective', 'extinct', 'cognitive', 'genetic'] },
                { text: 'Social media has changed public ___ of the sport.', zh: '社群媒體改變了大眾對這項運動的看法。', options: ['perception', 'occurrence', 'remains', 'trait'] },
              ],
            },
          ],
        },
        {
          id: 'review-phrases',
          zh: '第二關：片語',
          en: 'Round 2: Phrases',
          blocks: [
            {
              t: 'pick',
              wrong: 'gloss',
              items: [
                { text: 'Only ___ people showed up, so the meeting ended early.', zh: '只來了少數幾個人，所以會議提早結束。', options: ['a handful of', 'at best', 'as planned', 'in the hope of + V-ing'], fill: 'a handful of' },
                { text: 'This old laptop is, ___, good enough for typing.', zh: '這台舊筆電充其量只能拿來打字。', options: ['at best', 'as planned', 'a handful of', 'if left unchecked'], fill: 'at best' },
                { text: 'The school trip went ___, and everyone was home by five.', zh: '校外教學按照計畫進行，大家五點前都回到家了。', options: ['as planned', 'at best', 'set off from', 'be traced back to'], fill: 'as planned' },
                { text: 'We ___ Taipei at 6 a.m. and reached Hualien before noon.', zh: '我們清晨六點從台北出發，中午前抵達花蓮。', options: ['set off from', 'give priority to', 'be tempted to V', 'remind someone that…'], fill: 'set off from' },
                { text: 'This temple festival can ___ the Qing dynasty.', zh: '這個廟會可以追溯到清朝。', options: ['be traced back to', 'set off from', 'have a tendency to V', 'block someone’s path'], fill: 'be traced back to' },
                { text: 'A fallen rock ___ on the mountain road.', zh: '一塊落石在山路上擋住了我們的去路。', options: ['block someone’s path', 'open up a trade route', 'set off from', 'as planned'], fill: 'blocked our path' },
                { text: 'I know I should study, but I ___ watch one more video.', zh: '我知道該讀書，但還是忍不住想再看一部影片。', options: ['be tempted to V', 'in the hope of + V-ing', 'as planned', 'at best'], fill: 'am tempted to' },
                { text: 'People ___ believe news that matches their own views.', zh: '人們往往傾向相信符合自己看法的新聞。', options: ['have a tendency to V', 'set off from', 'block someone’s path', 'be traced back to'], fill: 'have a tendency to' },
                { text: 'She moved to Taipei ___ finding a better job.', zh: '她搬到台北，希望能找到更好的工作。', options: ['in the hope of + V-ing', 'a handful of', 'at best', 'have a tendency to V'], fill: 'in the hope of' },
                { text: 'This poster ___ every small habit counts.', zh: '這張海報提醒我們，每個小習慣都很重要。', options: ['remind someone that…', 'be traced back to', 'interpret A as B', 'set off from'], fill: 'reminds us that' },
                { text: 'I wear earplugs to ___ the noise from the street.', zh: '我戴耳塞，好忽略街上的噪音。', options: ['tune out', 'set off from', 'as planned', 'at best'], fill: 'tune out', after: 13 },
              ],
            },
          ],
        },
        {
          id: 'review-collocations',
          zh: '第三關：搭配詞',
          en: 'Round 3: Collocations',
          blocks: [
            {
              t: 'lead',
              zh: '搭配詞要整組記：哪個動詞配哪個名詞、後面接哪個小字。',
              en: 'Learn these as chunks: which verb goes with which noun, and which small word comes next.',
            },
            {
              t: 'pick',
              wrong: 'colloc',
              items: [
                { text: '___ ecological balance', options: ['restore', 'raise', 'block', 'tune'], key: 'restore ecological balance' },
                { text: '___ public awareness', options: ['raise', 'block', 'entrust', 'tune'], key: 'raise public awareness' },
                { text: '___ friendly relations', options: ['establish', 'distract', 'block', 'cite'], key: 'establish friendly relations' },
                { text: '___ natural resources', options: ['safeguard', 'interpret', 'tune', 'distract'], key: 'safeguard natural resources' },
                { text: '___ priority to', options: ['give', 'open', 'hold', 'block'], key: 'give priority to' },
                { text: '___ an effort to', options: ['make', 'do', 'hold', 'block'], key: 'make an effort to V' },
                { text: '___ a misleading claim', options: ['make', 'do', 'open', 'set'], key: 'make a misleading claim' },
                { text: '___ one’s belief', options: ['strengthen', 'tune', 'set', 'open'], key: 'strengthen one’s belief' },
                { text: '___ species', options: ['endangered', 'selective', 'objective', 'heavy'], key: 'endangered species' },
                { text: '___ bias', options: ['confirmation', 'heavy', 'endangered', 'extinct'], key: 'confirmation bias' },
                { text: '___ attention', options: ['selective', 'extinct', 'heavy', 'endangered'], key: 'selective attention' },
                { text: 'distract students ___ their studies', options: ['from', 'to', 'as', 'of'], key: 'distract A from B' },
                { text: 'entrust the project ___ a friend', options: ['to', 'from', 'as', 'of'], key: 'entrust A to B' },
                { text: 'interpret a smile ___ agreement', options: ['as', 'from', 'to', 'of'], key: 'interpret A as B' },
                { text: 'cite the weather ___ an excuse to cancel', options: ['as', 'from', 'to', 'of'], key: 'cite A as an excuse to V' },
              ],
            },
          ],
        },
        {
          id: 'review-spell',
          zh: '第四關：自己拼出來',
          en: 'Round 4: Spell it yourself',
          blocks: [
            {
              t: 'lead',
              zh: '看中文，把英文打出來。第一個字母已經給你了，想不起來可以再要一個字母。',
              en: 'Read the Chinese and type the English. The first letter is given, and you can ask for another.',
            },
            {
              t: 'spell',
              items: [
                { zh: '這則廣告裡的說法具有誤導性。', text: 'The claim in this ad is ___.', answer: 'misleading', key: 'misleading' },
                { zh: '森林有助於恢復生態平衡。', text: 'Forests help ___ ecological balance.', answer: 'restore', key: 'restore ecological balance' },
                { zh: '手機通知讓我無法專心讀書。', text: 'Phone notifications ___ me from my studies.', answer: 'distract', key: 'distract A from B' },
                { zh: '老師把這項任務託付給我。', text: 'The teacher ___ the task to me.', answer: 'entrusted', key: 'entrust A to B' },
                { zh: '比賽按照計畫舉行。', text: 'The game went ahead as ___.', answer: 'planned', key: 'as planned' },
                { zh: '別把他的微笑解讀為同意。', text: 'Don’t ___ his smile as agreement.', answer: 'interpret', key: 'interpret A as B' },
                { zh: '只有少數幾位朋友知道這個祕密。', text: 'Only a ___ of friends knew the secret.', answer: 'handful', key: 'a handful of' },
                { zh: '確認偏誤會讓我們忽略事實。', text: '___ bias can make us ignore the facts.', answer: 'confirmation', key: 'confirmation bias' },
                { zh: '我們應該優先處理重要的工作。', text: 'We should ___ important work.', answer: 'prioritize', key: 'prioritize' },
                { zh: '這次旅行強化了她對自己的信心。', text: 'The trip ___ her belief in herself.', answer: 'strengthened', key: 'strengthen one’s belief' },
              ],
            },
          ],
        },
      ],
    },
    // ======================================================= Unit 13 (2026-11-22)
    /* Three texts from a workbook's Unit 13, sent by Lewis as photos, with
       neither a translation nor an answer key: the English and the questions
       are the workbook's, word for word; the titles, every 中譯, the answers,
       the explanations, the glossed words, the word lists and the discussion
       prompts are this page's own.

       Their blanks are numbered 1301–1315 so they cannot collide with the
       other texts' 11–15; `show` is the number the workbook prints. In the
       文意選填 text every blank has the same ten choices (`bank`), and a
       choice already used greys out in the others. */

    // ---------------------------------------------------- Unit 13 · 綜合測驗
    {
      id: 'herorats',
      label: 'Unit 13 · 綜合測驗',
      icon: '🐀',
      en: 'HeroRATs: The Rats That Find Landmines',
      zh: '英雄鼠：會找地雷的老鼠',
      sub: '老鼠和非洲的地雷有什麼關係？一位以前養過寵物鼠的人給了答案。',
      words: [
        { w: 'landmine', find: 'landmines', pos: 'n.', zh: '地雷' },
        { w: 'more than its fair share of', pos: 'phr.', zh: '多得超乎尋常的……' },
        { w: 'deadly', pos: 'adj.', zh: '致命的' },
        { w: 'device', find: 'devices', pos: 'n.', zh: '裝置' },
        { w: 'come across', find: 'came across', pos: 'phr.', zh: '偶然發現' },
        { w: 'gerbil', find: 'gerbils', pos: 'n.', zh: '沙鼠' },
        { w: 'rodent', find: 'rodents', pos: 'n.', zh: '齧齒動物' },
        { w: 'trainability', pos: 'n.', zh: '容易訓練的程度' },
        { w: 'giant pouched rat', find: 'giant pouched rats', pos: 'n.', zh: '非洲巨頰囊鼠' },
        { w: 'sniff out', pos: 'phr.', zh: '嗅出；聞出來' },
        { w: 'trigger', find: 'triggering', pos: 'v.', zh: '引發；觸發' },
        { w: 'Mozambique', pos: 'n.', zh: '莫三比克（非洲東南部國家）' },
        { w: 'pose', pos: 'v.', zh: '構成（威脅、問題）' },
        { w: 'heroic', pos: 'adj.', zh: '英勇的' },
      ],
      vocab: {
        themeEn: 'Animals That Help',
        themeZh: '幫助人類的動物',
        words: [
          { w: 'landmine', pos: 'n.', zh: '地雷', use: 'clear landmines', useZh: '清除地雷' },
          { w: 'deadly', pos: 'adj.', zh: '致命的', use: 'a deadly disease', useZh: '致命的疾病', star: true },
          { w: 'device', pos: 'n.', zh: '裝置；設備', use: 'an electronic device', useZh: '電子裝置', star: true },
          { w: 'detect', pos: 'v.', zh: '偵測；察覺', use: 'detect danger', useZh: '察覺危險', star: true, after: 1302 },
          { w: 'inspire', pos: 'v.', zh: '啟發；激勵', use: 'inspire young people', useZh: '啟發年輕人', star: true },
          { w: 'intelligence', pos: 'n.', zh: '智力；聰明才智', use: 'artificial intelligence', useZh: '人工智慧', star: true },
          { w: 'trigger', pos: 'v.', zh: '引發；觸發', use: 'trigger an explosion', useZh: '引發爆炸', star: true },
          { w: 'threat', pos: 'n.', zh: '威脅', use: 'a major threat', useZh: '重大威脅', star: true },
          { w: 'estimate', pos: 'v.', zh: '估計', use: 'It is estimated that…', useZh: '據估計……', star: true, after: 1305 },
        ],
        phrases: [
          { w: 'have to do with', zh: '和……有關', eg: 'What does this question have to do with me?', star: true },
          { w: 'thanks to', zh: '多虧了；由於', eg: 'Thanks to your help, we finished on time.', star: true, after: 1301 },
          { w: 'come across', zh: '偶然遇到；偶然發現', eg: 'I came across an old photo of my parents.', star: true },
          { w: 'sniff out', zh: '嗅出；查出', eg: 'The dog sniffed out the hidden food.' },
          { w: 'be free of', zh: '沒有……的', eg: 'The streets are free of traffic on Sunday mornings.', star: true, after: 1303 },
          { w: 'pose a threat to', zh: '對……構成威脅', eg: 'Plastic waste poses a threat to sea animals.', star: true },
          { w: 'for years to come', zh: '在未來許多年', eg: 'This bridge will be used for years to come.' },
        ],
        terms: [
          { w: 'giant pouched rat', zh: '非洲巨頰囊鼠' },
          { w: 'HeroRAT', zh: '英雄鼠；APOPO 訓練來偵測地雷的老鼠' },
        ],
      },
      parts: [
        {
          id: 'rats-text',
          zh: '原文與綜合測驗',
          en: 'The text, with five blanks',
          blocks: [
            {
              t: 'lead',
              zh: '綜合測驗：每段下面就是這一段的空格。先讀完整段再選，答對了，答案會填回英文和中譯裡。',
              en: 'The choices sit under the paragraph they belong to. Read the whole paragraph first.',
            },
            {
              t: 'text',
              paras: [
                {
                  en: 'What do rats have to do with landmines in Africa, a place with more than its fair share of these deadly devices? __1301.__ a man named Bart Weetjens, who used to keep rats as pets, the answer is “a lot.” When Weetjens later began researching the problem of landmines on the African continent, he came across some research that examined how gerbils could use their sense of smell to __1302.__ landmines. This inspired him to explore whether other small rodents could perform similar tasks. Recalling the intelligence and trainability of his pet rats, Weetjens decided to form an organization called APOPO, which trains giant pouched rats to sniff out landmines. These rats, often called “HeroRATs,” are lightweight enough to avoid triggering explosions while detecting buried mines.',
                  zh: '老鼠和非洲的地雷有什麼關係？非洲這片土地上，這種致命裝置多得超乎尋常。__1301.__ 一位名叫巴特‧維金斯（Bart Weetjens）、以前養過老鼠當寵物的男子，答案是「關係可大了」。後來維金斯開始研究非洲大陸的地雷問題時，偶然讀到一項研究，探討沙鼠如何利用嗅覺來 __1302.__ 地雷。這啟發他去探索其他小型齧齒動物是否也能做類似的工作。想起自己的寵物鼠既聰明又好訓練，維金斯決定成立一個名為 APOPO 的組織，訓練非洲巨頰囊鼠嗅出地雷。這些老鼠常被稱為「英雄鼠」（HeroRATs），牠們的體重夠輕，在偵測埋在地下的地雷時不會引爆。',
                  blanks: [
                    {
                      n: 1301, show: 1,
                      zhFill: '多虧了',
                      options: ['In addition to', 'Thanks to', 'In terms of', 'Apart from'],
                      answer: 1,
                      no: {
                        0: 'in addition to 是「除了……之外，還有」，後面接的是另一件事，不是原因。',
                        2: 'in terms of 是「就……而言」，「就這個人而言，答案是關係很大」說不通。',
                        3: 'apart from 是「除了……以外」，意思不合。',
                      },
                      why: '前一句問老鼠和地雷有什麼關係，這一句說答案是「關係可大了」，而原因就是這個人。thanks to + 人／事 ＝ 多虧了、由於。',
                    },
                    {
                      n: 1302, show: 2,
                      zhFill: '偵測',
                      options: ['depress', 'endure', 'interpret', 'detect'],
                      answer: 3,
                      no: {
                        0: 'depress 是「使沮喪」，和地雷無關。',
                        1: 'endure 是「忍受」，沙鼠不是在忍受地雷。',
                        2: 'interpret 是「解讀、詮釋」，對象通常是話語、資料或作品。',
                      },
                      why: '用嗅覺來「偵測」地雷。這一段的最後一句 while detecting buried mines 也是線索。',
                    },
                  ],
                },
                {
                  en: 'APOPO began operating in 2003, and since then, it has greatly helped the African country of Mozambique become __1303.__. Despite the good work __1304.__ by APOPO, landmines still pose a major threat to many people. It has been __1305.__ that millions of landmines still exist in more than sixty countries. Hopefully, APOPO and its heroic rats will continue to fight this deadly problem for many years to come.',
                  zh: 'APOPO 從 2003 年開始運作，從那時起，它大大幫助了非洲國家莫三比克成為 __1303.__ 的國家。儘管 APOPO __1304.__ 了這麼多好事，地雷仍然對許多人構成重大威脅。據 __1305.__，目前仍有數百萬顆地雷存在於六十多個國家。希望 APOPO 和牠英勇的老鼠們，在未來許多年都能繼續對抗這個致命的問題。',
                  blanks: [
                    {
                      n: 1303, show: 3,
                      zhFill: '沒有地雷',
                      options: ['free of landmines', 'full of explosives', 'rid of protection', 'clear of controversies'],
                      answer: 0,
                      no: {
                        1: '幫助一個國家變成「充滿炸藥」，方向完全相反。',
                        2: 'rid of protection 是「擺脫保護」，說不通。',
                        3: 'clear of controversies 是「沒有爭議」，和地雷無關。',
                      },
                      why: 'APOPO 是清除地雷的組織，所以是幫莫三比克變成「沒有地雷」：be free of + N. ＝ 沒有……的。（莫三比克在 2015 年宣布境內已無已知的地雷區。）',
                    },
                    {
                      n: 1304, show: 4,
                      zhFill: '正在做',
                      options: ['to do', 'doing', 'is done', 'being done'],
                      answer: 3,
                      no: {
                        0: 'to do 是「將要做的」，但這裡說的是 APOPO 已經在做的事。',
                        1: 'doing 是主動。好工作不會自己做事，是「被」APOPO 做。',
                        2: 'is done 是完整的動詞。放在名詞 the good work 後面，這個子句就有兩個動詞了。',
                      },
                      why: 'the good work (that is) being done by APOPO：工作「被」APOPO 做，而且還在進行，所以用被動進行的分詞 being done 修飾前面的名詞。',
                    },
                    {
                      n: 1305, show: 5,
                      zhFill: '估計',
                      options: ['puzzled', 'persisted', 'estimated', 'raised'],
                      answer: 2,
                      no: {
                        0: 'puzzle 是「使困惑」，It has been puzzled that… 不是正確的說法。',
                        1: 'persist 是不及物動詞，不能用被動。',
                        3: 'It has been raised that… 不是常見的說法。',
                      },
                      why: 'It has been estimated that… ＝ 據估計……。後面的 millions of landmines 是一個數字，正是「估計」出來的。',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'rats-notes',
          zh: '讀懂題型',
          en: 'How the questions work',
          blocks: [
            {
              t: 'note',
              zh: '綜合測驗：五題考五種能力',
              en: 'Five blanks, five skills',
              bodyZh: '第 1 題考轉承語（前後的因果）、第 2 題考單字、第 3 題考搭配（be free of）、第 4 題考文法（分詞修飾名詞）、第 5 題考句型（It is estimated that）。做錯的時候，先想想這一題考的是哪一種，下次就知道要看哪裡。',
            },
          ],
        },
        {
          id: 'rats-list',
          zh: '字彙表',
          en: 'Word list',
          blocks: [{ t: 'vocab' }],
        },
        {
          id: 'rats-talk',
          zh: '想一想、說說看',
          en: 'Talk about it',
          blocks: [
            {
              t: 'talk',
              items: [
                { en: 'Besides finding landmines, what other jobs could trained animals do to help people?', zh: '除了找地雷，經過訓練的動物還能做哪些幫助人的工作？' },
                { en: 'Would you feel comfortable working with rats? Why or why not?', zh: '你願意和老鼠一起工作嗎？為什麼？' },
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------- Unit 13 · 文意選填
    {
      id: 'mandalas',
      label: 'Unit 13 · 文意選填',
      icon: '🎨',
      en: 'Mandala Coloring Books',
      zh: '曼陀羅著色本',
      sub: '大人也愛塗色？曼陀羅著色本為什麼能讓人放鬆，又能看出一個人的心情。',
      words: [
        { w: 'associate', pos: 'v.', zh: '把……聯想在一起' },
        { w: 'mandala', find: 'mandala', pos: 'n.', zh: '曼陀羅（圓形對稱的宗教圖案）' },
        { w: 'supposedly', find: 'Supposedly', pos: 'adv.', zh: '據說；據稱' },
        { w: 'encircled', pos: 'adj.', zh: '圍成圓形的' },
        { w: 'geometric', pos: 'adj.', zh: '幾何的' },
        { w: 'spiritual awakening', pos: 'n.', zh: '心靈的覺醒' },
        { w: 'reveal', pos: 'v.', zh: '顯露；透露' },
        { w: 'state of mind', pos: 'n.', zh: '心理狀態' },
        { w: 'experiment with', pos: 'phr.', zh: '嘗試；實驗' },
        { w: 'dull', find: 'Dull', pos: 'adj.', zh: '暗沉的；不鮮豔的' },
        { w: 'In contrast', pos: 'phr.', zh: '相反地' },
        { w: 'psychoanalyst', pos: 'n.', zh: '精神分析學家' },
        { w: 'symmetrical', pos: 'adj.', zh: '對稱的' },
        { w: 'than meets the eye', pos: 'phr.', zh: '（there is more to … than meets the eye）比表面看起來更有深意' },
      ],
      vocab: {
        themeEn: 'Art and the Mind',
        themeZh: '藝術與心靈',
        words: [
          { w: 'associate', pos: 'v.', zh: '把……聯想在一起', use: 'associate A with B', useZh: '把 A 和 B 聯想在一起', star: true },
          { w: 'feature', pos: 'v.', zh: '以……為特色；有……', use: 'feature bright colors', useZh: '以鮮豔的色彩為特色', star: true, after: 1306 },
          { w: 'spiritual', pos: 'adj.', zh: '心靈的；精神上的', use: 'spiritual growth', useZh: '心靈成長', star: true },
          { w: 'reveal', pos: 'v.', zh: '顯露；透露', use: 'reveal the truth', useZh: '揭露真相', star: true },
          { w: 'cope', pos: 'v.', zh: '應付；處理', use: 'cope with stress', useZh: '應付壓力', star: true, after: 1307 },
          { w: 'experiment', pos: 'v.', zh: '嘗試；做實驗', use: 'experiment with new ideas', useZh: '嘗試新點子', star: true },
          { w: 'indicate', pos: 'v.', zh: '顯示；表明', use: 'indicate a problem', useZh: '顯示出問題', star: true, after: 1312 },
          { w: 'psychology', pos: 'n.', zh: '心理學', use: 'modern psychology', useZh: '現代心理學', star: true },
          { w: 'symmetrical', pos: 'adj.', zh: '對稱的', use: 'a symmetrical design', useZh: '對稱的設計' },
        ],
        phrases: [
          { w: 'be seen as', zh: '被視為', eg: 'Reading is often seen as a quiet hobby.', star: true },
          { w: 'state of mind', zh: '心理狀態', eg: 'Music can change your state of mind.', star: true },
          { w: 'find out about', zh: '了解；查明', eg: 'I want to find out about summer camps.', star: true },
          { w: 'tell a lot about', zh: '透露很多關於……的事', eg: 'Your shoes can tell a lot about you.' },
          { w: 'in contrast', zh: '相反地；對比之下', eg: 'My sister is quiet. In contrast, I talk all the time.', star: true },
          { w: 'more than meets the eye', zh: '比表面看起來更複雜、更有深意', eg: 'There is more to this story than meets the eye.', star: true },
        ],
        terms: [
          { w: 'mandala', zh: '曼陀羅；源自印度宗教、圓形對稱的圖案' },
          { w: 'psychoanalyst', zh: '精神分析學家' },
        ],
      },
      parts: [
        {
          id: 'mandala-text',
          zh: '原文與文意選填',
          en: 'The text, with ten blanks',
          blocks: [
            {
              t: 'lead',
              zh: '文意選填：十個空格共用同一組十個選項，每個字只用一次。先看空格前後需要什麼詞性，再從同一類裡挑意思通的。已經用掉的字會變灰。',
              en: 'Ten blanks share one set of ten choices, and each is used once. Decide what kind of word the blank needs first.',
            },
            {
              t: 'text',
              paras: [
                {
                  en: 'People usually associate coloring books with children; however, mandala coloring books have become popular among adults. Supposedly pictures of the universe, mandalas __1306.__ a variety of encircled geometric patterns and, according to many Indian religions, are seen as a spiritual awakening. They are believed to assist people to __1307.__ with the emotional issues of everyday life and, through the coloring of them, reveal their state of mind.',
                  zh: '人們通常把著色本和小孩聯想在一起；然而，曼陀羅著色本卻在大人之間流行了起來。曼陀羅據說是宇宙的圖像，__1306.__ 各式各樣圍成圓形的幾何圖案；在許多印度宗教中，它被視為一種心靈的覺醒。人們相信，曼陀羅能幫助人 __1307.__ 日常生活中的情緒問題，而透過替它們著色，也能顯露出一個人的心理狀態。',
                  blanks: [
                    { n: 1306, show: 6, bank: 'mandala', zhFill: '有著', need: '空格前是主詞 mandalas，後面是受詞 a variety of…：這裡需要一個現在式的動詞。', answer: 6,
                      why: 'feature 當動詞是「以……為特色、有……」：曼陀羅的特色是各式各樣圍成圓形的幾何圖案。' },
                    { n: 1307, show: 7, bank: 'mandala', zhFill: '應付', need: '空格前有 to、後面接 with：需要一個原形動詞，而且能和 with 搭配。', answer: 0,
                      why: 'cope with ＝ 應付、處理：幫助人們應付日常生活中的情緒問題。' },
                  ],
                },
                {
                  en: 'For people who need help to __1308.__ stress or who want to find out about their feelings, mandala coloring books have proven to be useful. By letting people experiment with different colors within a range of black-and-white designs, for example, they help people feel __1309.__. It’s also interesting to note that you can tell a lot about how a person is feeling by __1310.__ the colors that he or she chooses. Dull colors are said to express negative emotions while bright colors suggest a person is experiencing more __1311.__ emotions. For example, a bright red might __1312.__ that the person is feeling confident. In contrast, a dull red suggests that he or she is experiencing fear.',
                  zh: '對於需要幫忙 __1308.__ 壓力，或想了解自己感受的人來說，曼陀羅著色本已被證明很有用。例如，讓人們在各種黑白圖案裡嘗試不同的顏色，能幫助他們感到 __1309.__。另一件有趣的事是，__1310.__ 一個人選的顏色，就能看出很多他當下的感受。據說暗沉的顏色表達負面情緒，明亮的顏色則代表這個人正感受到比較 __1311.__ 的情緒。例如，鮮紅色可能 __1312.__ 這個人感到自信；相反地，暗紅色則表示他或她正感到恐懼。',
                  blanks: [
                    { n: 1308, show: 8, bank: 'mandala', zhFill: '紓解', need: '空格前是 to，後面接受詞 stress：需要一個原形的及物動詞。', answer: 3,
                      why: 'manage stress ＝ 管理、紓解壓力。cope 也和壓力有關，但它要接 with，已經用在第 7 題了。' },
                    { n: 1309, show: 9, bank: 'mandala', zhFill: '放鬆', need: 'feel 後面要接形容詞，描述一種感覺。', answer: 7,
                      why: 'feel relaxed ＝ 感到放鬆。這段一開始就說它幫助需要紓解壓力的人。' },
                    { n: 1310, show: 10, bank: 'mandala', zhFill: '藉由觀察', need: '介系詞 by 後面要接動名詞（V-ing）。', answer: 1,
                      why: 'by examining the colors ＝ 藉由仔細看他選的顏色。另一個 V-ing（achieving）意思不通：「達成顏色」說不過去。' },
                    { n: 1311, show: 11, bank: 'mandala', zhFill: '正面', need: 'more ___ emotions：需要一個修飾 emotions 的形容詞，而且和前面的 negative 相反。', answer: 2,
                      why: 'dull colors 表達 negative emotions，bright colors 表示 more positive emotions，一負一正，while 就是對比的線索。' },
                    { n: 1312, show: 12, bank: 'mandala', zhFill: '顯示', need: '助動詞 might 後面接原形動詞，而且後面還接了 that 子句。', answer: 8,
                      why: 'indicate that… ＝ 顯示、表明……：鮮紅色可能顯示這個人很有自信。下一句的 suggests that 意思一樣。' },
                  ],
                },
                {
                  en: 'Some believe that mandalas can help people __1313.__ their minds, and these designs have become part of modern psychology. One of those people was the famous psychoanalyst Carl Jung, who lived from 1875 to 1961. It was during times of his own personal growth that Jung __1314.__ that he drew mandalas. He associated mandalas with his mind gaining new understanding as well as __1315.__ peace. As you can see, there is a lot more to these symmetrical designs than meets the eye!',
                  zh: '有些人相信曼陀羅能幫助人們 __1313.__ 心思，這些圖案也已經成為現代心理學的一部分。其中一位就是著名的精神分析學家卡爾‧榮格（Carl Jung），他生於 1875 年，卒於 1961 年。榮格 __1314.__，自己正是在個人成長的時期會畫曼陀羅。他把曼陀羅和自己的心靈獲得新的理解、以及 __1315.__ 平靜聯想在一起。由此可見，這些對稱的圖案遠比表面看起來的更有深意！',
                  blanks: [
                    { n: 1313, show: 13, bank: 'mandala', zhFill: '集中', need: 'help people ___ their minds：help 後面接原形動詞，受詞是 minds。', answer: 9,
                      why: 'focus their minds ＝ 集中心思、專注。' },
                    { n: 1314, show: 14, bank: 'mandala', zhFill: '注意到', need: '主詞 Jung 後面需要一個過去式動詞，而且後面接 that 子句。', answer: 5,
                      why: 'It was during … that Jung noticed that he drew mandalas：榮格注意到自己在個人成長的時期會畫曼陀羅。選項裡唯一的過去式就是 noticed。' },
                    { n: 1315, show: 15, bank: 'mandala', zhFill: '達到', need: 'as well as 前面是 gaining，後面也要是 V-ing，兩邊對稱。', answer: 4,
                      why: 'gaining new understanding as well as achieving peace：獲得新的理解，也達到內心的平靜。achieve peace 是常見的搭配。' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'mandala-notes',
          zh: '讀懂題型',
          en: 'How the questions work',
          blocks: [
            {
              t: 'note',
              zh: '文意選填：先把十個選項分類',
              en: 'Sort the ten choices first',
              bodyZh: '動作之前先分類：原形動詞 cope、manage、indicate、focus（feature 也能當動詞）；V-ing examining、achieving；過去式 noticed；形容詞 positive、relaxed。看到空格，先判斷需要哪一類，通常只剩兩三個可選，再看意思。最後剩下的那一兩題，用刪去法也能完成。',
            },
          ],
        },
        {
          id: 'mandala-list',
          zh: '字彙表',
          en: 'Word list',
          blocks: [{ t: 'vocab' }],
        },
        {
          id: 'mandala-talk',
          zh: '想一想、說說看',
          en: 'Talk about it',
          blocks: [
            {
              t: 'talk',
              items: [
                { en: 'What do you do when you feel stressed? Does it help you focus?', zh: '你覺得有壓力的時候會做什麼？它能幫你專心嗎？' },
                { en: 'Do you agree that the colors people choose can show how they feel? Give an example.', zh: '你同意一個人選的顏色能看出他的心情嗎？舉個例子。' },
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------ Unit 13 · 混合題
    {
      id: 'datan-reef',
      label: 'Unit 13 · 混合題',
      icon: '🪸',
      en: 'The Datan Algal Reef: Four Opinions',
      zh: '大潭藻礁：四種看法',
      sub: '要保護七千五百年的藻礁，還是蓋天然氣接收站？四個人，四種立場，其中兩個人改變了想法。',
      words: [
        { w: 'algal reef', pos: 'n.', zh: '藻礁' },
        { w: 'referendum', pos: 'n.', zh: '公民投票；公投' },
        { w: 'liquefied natural gas', pos: 'n.', zh: '液化天然氣' },
        { w: 'terminal', pos: 'n.', zh: '接收站；（交通的）總站' },
        { w: 'fascinating', pos: 'adj.', zh: '迷人的；令人著迷的' },
        { w: 'eel', find: 'eels', pos: 'n.', zh: '鰻魚' },
        { w: 'campaign', find: 'campaigned', pos: 'v.', zh: '從事（社會）運動；奔走' },
        { w: 'deliberate', pos: 'adj.', zh: '蓄意的；故意的' },
        { w: 'wreck', pos: 'v.', zh: '毀壞；破壞' },
        { w: 'marvel', pos: 'n.', zh: '奇觀；令人驚嘆的事物' },
        { w: 'dependence', pos: 'n.', zh: '依賴' },
        { w: 'energy security', pos: 'n.', zh: '能源安全' },
        { w: 'sympathize with', find: 'sympathized with', pos: 'v.', zh: '同情；認同' },
        { w: 'mankind', pos: 'n.', zh: '人類' },
        { w: 'reliance', pos: 'n.', zh: '依賴' },
        { w: 'carbon emissions', pos: 'n.', zh: '碳排放' },
        { w: 'the lesser of two evils', pos: 'phr.', zh: '兩害相權取其輕' },
        { w: 'biodiversity', pos: 'n.', zh: '生物多樣性' },
        { w: 'concede', pos: 'v.', zh: '（不情願地）承認' },
        { w: 'compromise', pos: 'n.', zh: '折衷方案；妥協' },
        { w: 'kill two birds with one stone', find: 'kills two birds with one stone', pos: 'phr.', zh: '一石二鳥' },
        { w: 'boost', find: 'boosting', pos: 'v.', zh: '提升；增強' },
      ],
      vocab: {
        themeEn: 'Energy and the Environment',
        themeZh: '能源與環境',
        words: [
          { w: 'referendum', pos: 'n.', zh: '公民投票', use: 'hold a referendum', useZh: '舉行公投' },
          { w: 'construction', pos: 'n.', zh: '建造；工程', use: 'under construction', useZh: '施工中', star: true },
          { w: 'deliberate', pos: 'adj.', zh: '蓄意的；故意的', use: 'a deliberate act', useZh: '蓄意的行為', star: true },
          { w: 'dependence', pos: 'n.', zh: '依賴', use: 'dependence on coal', useZh: '對燃煤的依賴', star: true },
          { w: 'sympathize', pos: 'v.', zh: '同情；認同', use: 'sympathize with someone', useZh: '同情、認同某人', star: true },
          { w: 'urgently', pos: 'adv.', zh: '迫切地', use: 'urgently need help', useZh: '迫切需要幫助', star: true },
          { w: 'emission', pos: 'n.', zh: '排放；排放物', use: 'carbon emissions', useZh: '碳排放', star: true },
          { w: 'concede', pos: 'v.', zh: '（不情願地）承認；讓步', use: 'concede defeat', useZh: '認輸' },
          { w: 'compromise', pos: 'n.', zh: '妥協；折衷方案', use: 'reach a compromise', useZh: '達成妥協', star: true },
          { w: 'boost', pos: 'v.', zh: '提升；增強', use: 'boost the economy', useZh: '提振經濟', star: true },
        ],
        phrases: [
          { w: 'take part in', zh: '參加', eg: 'Over 200 students took part in the debate.', star: true },
          { w: 'campaign against', zh: '發起運動反對……', eg: 'The students campaigned against plastic straws.' },
          { w: 'reduce one’s dependence on', zh: '減少對……的依賴', eg: 'We should reduce our dependence on our phones.', star: true },
          { w: 'come to realize', zh: '漸漸明白', eg: 'I came to realize that my parents were right.', star: true },
          { w: 'the lesser of two evils', zh: '兩害相權取其輕', eg: 'Taking the bus in the rain was the lesser of two evils.' },
          { w: 'kill two birds with one stone', zh: '一石二鳥', eg: 'Biking to school kills two birds with one stone: it saves money and keeps me fit.', star: true },
          { w: 'give up the fight', zh: '放棄抗爭', eg: 'The villagers refused to give up the fight for their river.' },
        ],
        terms: [
          { w: 'algal reef', zh: '藻礁；由殼狀珊瑚藻長時間堆積而成的礁體' },
          { w: 'liquefied natural gas (LNG)', zh: '液化天然氣' },
          { w: 'energy security', zh: '能源安全' },
        ],
      },
      parts: [
        {
          id: 'datan-text',
          zh: '原文',
          en: 'The text',
          blocks: [
            {
              t: 'lead',
              zh: '混合題：先讀完四個人的意見，邊讀邊記下每個人是支持還是反對、有沒有改變想法。',
              en: 'Read all four opinions first. Note who is for the terminal, who is against it, and who has changed their mind.',
            },
            {
              t: 'text',
              paras: [
                {
                  en: 'The Datan algal reef is located in Taoyuan. Taiwanese citizens took part in a referendum on whether to allow the construction of a liquefied natural gas (LNG) terminal to continue at this location. Here are four people’s opinions on the matter.',
                  zh: '大潭藻礁位於桃園。台灣民眾曾參加一場公投，決定是否讓液化天然氣（LNG）接收站在這個地點繼續興建。以下是四個人對這件事的看法。',
                },
                {
                  who: 'Ms. Li',
                  en: 'The Datan algal reef is a fascinating natural wonder that is full of fish, eels, crabs, and even sea turtles. That’s why I campaigned strongly against the construction of the LNG terminal. It’s a deliberate act of environmental damage that will wreck a 7,500-year-old marvel. People argue that continuing to use coal will be bad for this country. I understand that we need to reduce our dependence on it, but in my opinion, destroying the reef would be far worse.',
                  zh: '大潭藻礁是令人著迷的自然奇景，裡面有許多魚、鰻魚、螃蟹，甚至還有海龜。所以我強烈反對興建液化天然氣接收站。這是蓄意破壞環境的行為，會毀掉一個已有七千五百年歷史的奇觀。有人說繼續使用燃煤對這個國家不好。我了解我們需要減少對燃煤的依賴，但我認為，摧毀藻礁會糟糕得多。',
                },
                {
                  who: 'Mr. Wang',
                  en: 'I have worked with the government on the Datan project for many years. I realize the issue is a hot potato that many people disagree about, but I can honestly say we have tried our best to limit the impact the LNG terminal will have on the algal reef. By building the terminal 1.2 kilometers out to sea, we will protect 90% of the reef environment from any effects at all. The simple fact is that we need to strengthen our energy security, and this is the way to do it.',
                  zh: '我和政府合作推動大潭計畫已經很多年了。我知道這個議題是個燙手山芋，很多人意見不同，但我可以誠實地說，我們已經盡力降低接收站對藻礁的影響。把接收站蓋在離岸 1.2 公里的海上，就能讓 90% 的藻礁環境完全不受影響。事實很簡單：我們必須加強能源安全，而這就是做法。',
                },
                {
                  who: 'Ms. Bai',
                  en: 'For many years, I strongly sympathized with those who want to save the wonderful algal reef and all the beautiful creatures that call it home. However, I have come to realize that global warming is the biggest threat that mankind faces. Therefore, I now know that solving the energy crisis is more important. We urgently need to reduce this island’s reliance on coal so that we can cut carbon emissions, and liquefied natural gas is the best way to achieve this goal. Quite simply, constructing the LNG terminal is the lesser of two evils.',
                  zh: '多年來，我非常認同那些想拯救這片美麗藻礁、以及所有以它為家的美麗生物的人。然而，我後來體認到，全球暖化才是人類面臨的最大威脅。因此，我現在明白解決能源危機更重要。我們迫切需要減少這座島嶼對燃煤的依賴，才能減少碳排放，而液化天然氣是達成這個目標最好的方法。簡單來說，興建液化天然氣接收站是兩害相權取其輕。',
                },
                {
                  who: 'Mr. Chen',
                  en: 'I campaigned hard against the government’s initial plans to build the LNG terminal at the Datan algal reef. I argued that the biodiversity of the reef was far more important than the need to produce electricity. However, given the revised plans to move the terminal further away from the coast, I concede that it is time to give up the fight. It’s a reasonable compromise that kills two birds with one stone: it allows us to protect the majority of the creatures in the reef while boosting Taiwan’s energy security.',
                  zh: '我曾努力反對政府最初在大潭藻礁興建液化天然氣接收站的計畫。我主張藻礁的生物多樣性遠比發電的需求重要。然而，既然修正後的計畫把接收站移到離海岸更遠的地方，我承認是時候放棄抗爭了。這是一個合理的折衷方案，可以一石二鳥：既能保護藻礁裡大多數的生物，又能提升台灣的能源安全。',
                },
              ],
            },
            {
              t: 'note',
              zh: '查證：公投結果',
              en: 'Fact check',
              bodyZh: '文中的公投是 2021 年 12 月 18 日的「珍愛藻礁」公投，結果沒有通過，接收站依照外推到離岸約 1.2 公里的修正方案繼續興建。四個人的意見是題目設計的人物，不是真實受訪者。',
            },
          ],
        },
        {
          id: 'datan-quiz',
          zh: '混合題',
          en: 'Questions 24–27',
          blocks: [
            {
              t: 'lead',
              zh: '第 24–25 題：從文章裡找出最適當的單字，必要時改變詞性，每格只填一個字。第 26 題寫出片語。第 27 題可以選不只一個。',
              en: '24–25: one word from the text, in the right form. 26: write the phrase. 27: choose all that apply.',
            },
            {
              t: 'mixed',
              items: [
                {
                  n: 24, type: 'word',
                  en: 'Both Mr. Wang and Mr. Chen acknowledge that constructing the LNG terminal further out to sea will ensure the ___ of most of the algal reef.',
                  zh: '王先生和陳先生都承認，把接收站蓋到更遠的海上，可以確保大部分藻礁的 ___。',
                  answer: ['protection'],
                  need: '兩個人都用了同一個動詞，找到它，再想想 the ___ of 中間要放什麼詞性。',
                  why: 'the ___ of 中間要放名詞：protect → protection。王先生說 we will protect 90% of the reef，陳先生說 it allows us to protect the majority of the creatures。',
                  ev: ['we will protect 90% of the reef environment from any effects at all', 'it allows us to protect the majority of the creatures in the reef'],
                },
                {
                  n: 25, type: 'word',
                  en: 'While both Ms. Li and Ms. Bai reference the need for a ___ in Taiwan’s use of coal, the latter believes that it is a more pressing concern.',
                  zh: '雖然李女士和白女士都提到台灣需要 ___ 燃煤的使用，但後者（白女士）認為這是更迫切的問題。',
                  answer: ['reduction'],
                  need: '兩位女士講到燃煤時用了同一個動詞，a ___ in 中間要放名詞。',
                  why: 'a reduction in + N. ＝ ……的減少：reduce → reduction。李女士說 we need to reduce our dependence on it，白女士說 We urgently need to reduce this island’s reliance on coal。',
                  ev: ['we need to reduce our dependence on it', 'We urgently need to reduce this island’s reliance on coal'],
                },
                {
                  n: 26, type: 'phrase',
                  en: 'Which phrase in the opinions means “a problem that is difficult to deal with and causes a lot of disagreement”?',
                  zh: '四段意見裡，哪一個片語的意思是「難以處理、又引起很多爭議的問題」？（簡答）',
                  answer: ['a hot potato', 'hot potato'],
                  need: '找「很多人意見不同」的那一句：後面緊接著 that many people disagree about。',
                  why: 'hot potato 字面是「燙的馬鈴薯」，拿在手上燙手、又丟不掉，就是中文的「燙手山芋」。後面的 that many people disagree about 正好在解釋它。',
                  ev: ['the issue is a hot potato that many people disagree about'],
                },
                {
                  n: 27, type: 'multi',
                  en: 'Who have changed their minds about the siting of the LNG terminal at the Datan algal reef?',
                  zh: '誰改變了自己對大潭藻礁接收站選址的看法？（多選）',
                  options: ['Ms. Li', 'Mr. Wang', 'Ms. Bai', 'Mr. Chen'],
                  answers: [2, 3],
                  no: {
                    0: '李女士從頭到尾都反對興建，沒有改變。',
                    1: '王先生一直都在推動這個計畫，沒有改變。',
                  },
                  why: '白女士和陳先生。兩人都用了「過去……，However, 現在……」的結構：白女士 For many years, I strongly sympathized… However, I have come to realize…；陳先生 I campaigned hard against… However, … I concede…。',
                  ev: ['However, I have come to realize that global warming is the biggest threat that mankind faces.', 'I concede that it is time to give up the fight'],
                },
              ],
            },
          ],
        },
        {
          id: 'datan-notes',
          zh: '讀懂結構',
          en: 'How the text is built',
          blocks: [
            {
              t: 'note',
              zh: '找「改變想法」：看 However',
              en: 'Spotting a change of mind',
              bodyZh: '改變想法的人通常先說過去（For many years…、I campaigned hard against…），再用 However 轉到現在。第 27 題就是在考這個轉折。另外，第 24、25 題都是「文中用動詞，題目要名詞」：protect → protection、reduce → reduction，這是混合題常見的改詞性。',
            },
          ],
        },
        {
          id: 'datan-list',
          zh: '字彙表',
          en: 'Word list',
          blocks: [{ t: 'vocab' }],
        },
        {
          id: 'datan-talk',
          zh: '想一想、說說看',
          en: 'Talk about it',
          blocks: [
            {
              t: 'talk',
              items: [
                { en: 'Which of the four people do you agree with most? Why?', zh: '四個人當中，你最同意誰？為什麼？' },
                { en: 'Is it ever right to damage nature to get cleaner energy? Give a reason.', zh: '為了更乾淨的能源而破壞自然，有可能是對的嗎？說出一個理由。' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

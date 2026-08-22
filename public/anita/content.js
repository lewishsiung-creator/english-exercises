/* Anita — a running notebook of one-to-one sessions.

   Unlike most pages in this repo, this one is not a lesson. It is a notebook
   that grows: every discussion adds one entry to `sessions` below and nothing
   else changes. No new files, no new folder, no renderer edit. It is the same
   machinery as /aaron/ and /anny/, with the same rules.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n`, `date` and the titles,
   and rewrite the blocks. Put it at the BOTTOM of the array — the page is
   chronological, oldest first, and opens with the newest session expanded and
   the earlier ones folded away. The contents list, the numbering and the
   anchors all come from the array, so there is nothing else to keep in step.

   `id` must be unique and URL-safe: it becomes the anchor, so
   /anita/#s2 opens session 2 with the rest folded.

   THE CHINESE LAYER
   -----------------
   Every visible English string has a Traditional Chinese counterpart. English
   is what shows; the Chinese waits behind a small 中 chip, or the 中文 switch
   in the top bar opens the lot. Instructions, task prompts, the contents list
   and anything already behind a deliberate reveal stay bilingual — those are
   scaffolding, not comprehension practice.

   A gap-fill translation is a COMPLETE Chinese sentence — the blank is filled
   in, and only the English keeps its ___. That is the notebook convention and
   it differs from the other pages in this repo, which leave ＿＿ in the Chinese
   so it cannot hand over the answer. Here the page is teacher-led and nothing
   is scored, so the Chinese is there to make the situation clear rather than to
   be a second puzzle — and it is still one tap away rather than on screen.

   Matching halves and answer chips stay in English; each is glossed on its own
   phrase card anyway.

   BLOCK TYPES
   -----------
     lead      a framing sentence in italics, opening a session
     link      a pointer to another page in this site
     quote     a short quote, with attribution
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one idea in more depth
     contrast  two columns compared. The tags default to "As it landed" / "As
               it could land"; set coldEn/coldZh and warmEn/warmZh for any other
               pairing — an instinct against a reframe, a habit against its
               replacement
     phrases   phrase cards — English face up, Chinese and an example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     fix       something Anita actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task with a tick-list of target phrases

   `fix` is the one block the other pages here do not have, and it is the reason
   a per-student notebook is worth keeping: it holds Anita's own sentences,
   corrected. Put real sentences in as they come up; do not reconstruct them
   from memory, or the most trustworthy part of the page becomes the least.

   Both sessions were written first from an organised summary, which is cleaned
   up and so carries no record of anyone's wording; the Zoom transcripts arrived
   afterwards and the corrections came from those. Work from the transcript
   whenever there is one. It is machine-generated and mishears freely, so take
   only the lines where the error is unmistakably hers — a missing verb, a
   tense, a preposition, a comparative — and leave the garbled ones out rather
   than tidying them into a sentence she may not have said. Roughly ten survive
   that filter per hour.

   SAMPLE BANNER
   -------------
   Setting `sample` puts a line across the top saying the content is a
   placeholder — on screen and in print, so a draft cannot be handed over by
   accident. Session 1 is real, so it is off.
*/

const NOTEBOOK = {
  student: 'Anita',
  title: 'Anita’s English Notebook',
  titleZh: 'Anita 的英文筆記',
  kicker: '職場英語 · 課堂筆記',

  intro: {
    en: 'This page is where our sessions are kept. Everything we work through together stays here, so you can come back to it between lessons — the language, the ideas, and the sentences worth keeping.',
    zh: '這一頁是我們課程的紀錄。每次上課討論過的內容都會留在這裡，方便你在課與課之間回來複習——包括語言、觀念，以及值得留下來的句子。',
    goalsEn: 'How to use it',
    goalsZh: '使用方式',
    goals: [
      {
        en: 'Tap any English line to see the Chinese. The 中文 switch at the top opens all of them at once.',
        zh: '點任何一句英文就會出現中文。上方的「中文」按鈕可以一次全部打開。',
      },
      {
        en: 'Tap 🔊 to hear a phrase or sentence read aloud, as many times as you like. The voice is good for pronunciation; for intonation, copy me in the lesson instead.',
        zh: '點 🔊 可以聽片語或句子的發音，想聽幾次都可以。這個聲音適合用來練發音；語調的部分，請在課堂上跟著我模仿。',
      },
      {
        en: 'Nothing is saved and nothing is scored. Reloading the page clears it for a fresh run.',
        zh: '這裡不會儲存也不會計分。重新整理頁面就會清空，可以重新練一次。',
      },
      {
        en: 'The newest session is open; earlier ones are folded. Tap a session heading to open or close it.',
        zh: '最新的一堂課是展開的，之前的則收合起來。點課程標題就能展開或收合。',
      },
    ],
  },

  sessions: [
    {
      id: 's1',
      n: 1,
      date: '2026-08-07',
      dateEn: '7 August 2026',
      dateZh: '2026 年 8 月 7 日',
      en: 'A specialist store, and what it asks of everyone in it',
      zh: '一家專門店，以及它對每個人的要求',

      focus: [
        { en: 'Running specialty store', zh: '跑步專門店' },
        { en: 'Niche positioning', zh: '利基定位' },
        { en: 'Manpower and layout', zh: '人力與店面配置' },
        { en: 'An internal AI agent', zh: '公司內部 AI 專案' },
        { en: 'AI literacy', zh: 'AI 素養' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'One hour that began with a five-day training programme for a new running store and ended on how a person actually learns anything — from shop assistants who have to become consultants, to a company trying to keep its own knowledge, to the question of what to do with a corrected English sentence once you have it.',
          zh: '這一個小時從一家新跑步門市的五天培訓開始，最後談到一個人到底是怎麼學會東西的——從必須變成顧問的門市人員，到一家想留住自身知識的公司，再到：拿到一句被改好的英文之後，你該拿它怎麼辦。',
        },

        {
          t: 'summary',
          en: 'Your company is opening a new kind of store — one that sells running shoes and nothing else — and running a five-day training programme for the staff who will work in it. Most of them are new. They have to learn what runners need, how running shoes differ, which shoe suits a beginner and which suits an experienced runner, and how to make a suitable recommendation for the customer in front of them. Because the store is a new business model, expectations from management are high, and the people being trained know it. So the training has a second job that is not on the schedule: to lower their anxiety enough that they will do their best without being afraid of making mistakes.',
          zh: '你們公司要開一種新型態的門市——只賣跑鞋——並且為將來在店裡工作的員工辦了五天的培訓。他們大多是新人。他們必須學會跑者需要什麼、跑鞋之間有什麼差異、初階跑者適合哪一雙、資深跑者又適合哪一雙，以及如何為眼前這位顧客提供合適的建議。因為這是全新的商業模式，管理層期待很高，受訓的人也感受得到。所以這場培訓還有一個沒有寫在課表上的任務：把他們的焦慮降下來，讓他們願意全力以赴，而不是害怕犯錯。',
        },

        {
          t: 'note',
          en: 'Why the company is trying this — three reasons',
          zh: '公司為什麼要試這個模式——三個理由',
          bodyEn: 'First, the model already exists elsewhere. Management has seen specialty stores of this kind in Japan, the United States and Hong Kong, and treats it as a retail trend worth testing in Taiwan. Second, and more strategically, the company wants its own brand influence. A traditional sports store is heavily influenced by the big manufacturers — customers walk in because they want Nike or Adidas, and the shop is only the shelf those brands sit on. The aim is that people come for Momentum: for the store’s selection and its recommendations. That is a select shop, and it is a real shift, because it means the store has to own its brand identity, its product selection and the experience of being advised. Third, running is simply a large market in Taiwan, and one where buyers genuinely need help choosing. So running goes first; tennis, volleyball or another category could follow later.',
          bodyZh: '第一，這個模式在別的地方已經存在。管理層在日本、美國與香港都看過這類專門店，把它視為值得在台灣測試的零售趨勢。第二，也更具策略性的是，公司想要自己的品牌影響力。傳統運動用品店深受大品牌影響——顧客走進來是因為想要 Nike 或 Adidas，店只是那些品牌陳列的架子。目標是讓人為了 Momentum 而來：為了這家店的選品與建議而來。這就是選品店的概念，而這是一個真正的轉變，因為店必須擁有自己的品牌識別、自己的選品能力，以及「被專業建議」的那段體驗。第三，跑步在台灣本來就是很大的市場，而且是消費者真的需要協助挑選的市場。所以先做跑步；網球、排球或其他品類可以之後再說。',
        },

        {
          t: 'contrast',
          en: 'A general sports shop, and a specialist one',
          zh: '一般運動用品店，與專門店',
          coldEn: 'The general store',
          coldZh: '一般店的說法',
          warmEn: 'The specialist',
          warmZh: '專門店的說法',
          hintEn: 'Three places where the new model changes what someone says. Both columns are good English — read them both aloud.',
          hintZh: '新模式改變了三個地方的說法。左右兩欄都是道地的英文，兩邊都請唸出聲。',
          items: [
            {
              caseEn: 'Why a customer walks in',
              caseZh: '顧客為什麼走進來',
              cold: {
                en: 'People come to us because they want a particular brand, so we stock whatever the big names are pushing this season.',
                zh: '大家來我們這裡是因為想要某個特定品牌，所以大品牌這一季主打什麼，我們就進什麼。',
              },
              warm: {
                en: 'We want people to come for our selection. If they trust what we put on the shelf, the brand on the shoe matters less.',
                zh: '我們希望大家是為了我們的選品而來。如果他們信任我們放上架的東西，鞋子上是哪個品牌就沒那麼重要了。',
              },
              whyEn: 'This is the whole argument for a select shop in two sentences. Notice that the second one does not attack the brands — it just moves the trust to a different place.',
              whyZh: '這兩句話就是選品店的完整論點。注意第二句並沒有攻擊那些品牌，它只是把「信任」放到了另一個地方。',
            },
            {
              caseEn: 'What the person on the floor is for',
              caseZh: '門市人員的角色是什麼',
              cold: {
                en: 'I can show you what we have in your size.',
                zh: '我可以拿你的尺寸有的款式給你看。',
              },
              warm: {
                en: 'Can I ask how long you have been running, and what you are training for? That changes which of these I would recommend.',
                zh: '我可以請教你跑多久了、目前是為了什麼在練嗎？這會影響我推薦哪一雙。',
              },
              whyEn: 'The salesperson becomes a consultant. The competitive advantage is not having many shoes — it is being able to answer “who is this shoe designed for, and is it right for you?”',
              whyZh: '銷售人員變成了顧問。競爭優勢不在於鞋款多，而在於能回答「這雙鞋是為誰設計的？它適不適合你？」',
            },
            {
              caseEn: 'What the layout says',
              caseZh: '店面配置在說什麼',
              cold: {
                en: 'We put the boxes out on the floor. It saves space and staff time.',
                zh: '我們把鞋盒直接放在地上，這樣省空間也省人力。',
              },
              warm: {
                en: 'That layout works at an outlet because it signals a discount. On full-price stock it would damage the perceived value.',
                zh: '那種陳列在 outlet 行得通，因為它傳達的是折扣。用在原價商品上，反而會傷害商品的感知價值。',
              },
              whyEn: 'Your own example, and the sharpest idea in the hour. A layout communicates price positioning, quality and brand image — not just where things are.',
              whyZh: '這是你自己舉的例子，也是這一小時裡最銳利的觀點。配置傳達的是價格定位、品質與品牌形象，而不只是東西放在哪裡。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'The store, and the strategy behind it',
          zh: '這家店，以及背後的策略',
          items: [
            {
              en: 'a running specialty store',
              zh: '跑步專門店',
              eg: 'It is a running specialty store, so everything in it is chosen for one kind of customer.',
              egZh: '這是一家跑步專門店，所以店裡每一樣東西都是為同一種顧客挑的。',
            },
            {
              en: 'a select shop',
              zh: '選品店',
              eg: 'Think of it as a select shop: people trust the buyer’s taste more than any single brand.',
              egZh: '把它想成選品店：比起任何單一品牌，人們更信任買手的眼光。',
            },
            {
              en: 'a niche market',
              zh: '利基市場',
              eg: 'Rather than competing with every sports retailer, we are going after a niche market.',
              egZh: '我們不跟每一家運動用品店競爭，而是鎖定一個利基市場。',
            },
            {
              en: 'brand influence',
              zh: '品牌影響力',
              eg: 'The long-term goal is to build our own brand influence, not to borrow someone else’s.',
              egZh: '長期目標是建立我們自己的品牌影響力，而不是借別人的。',
            },
            {
              en: 'to make a suitable recommendation',
              zh: '提供合適的建議',
              eg: 'The training is really about one skill: making a suitable recommendation for the customer in front of you.',
              egZh: '這場培訓真正要練的是一件事：為眼前這位顧客提供合適的建議。',
            },
            {
              en: 'personalized products and services',
              zh: '個人化產品與服務',
              eg: 'A smaller range lets us offer more personalized products and services.',
              egZh: '品項少一點，反而讓我們能提供更個人化的產品與服務。',
            },
            {
              en: 'a manpower shortage',
              zh: '人力短缺',
              eg: 'The whole industry is dealing with a manpower shortage, so the store has to work with fewer people.',
              egZh: '整個產業都在面對人力短缺，所以門市必須用更少的人運作。',
            },
            {
              en: 'store layout',
              zh: '店面配置',
              eg: 'The store layout should help customers find things on their own.',
              egZh: '店面配置應該要讓顧客自己找得到東西。',
            },
            {
              en: 'perceived value',
              zh: '感知價值',
              eg: 'Anything that looks like a clearance rack lowers the perceived value of the product.',
              egZh: '任何看起來像清倉架的東西，都會拉低商品的感知價值。',
            },
            {
              en: 'consumer behaviour',
              zh: '消費者行為',
              eg: 'The technology worked; consumer behaviour was the part that did not change.',
              egZh: '技術是可行的；沒有跟上的是消費者行為。',
            },
            {
              en: 'an unmanned store',
              zh: '無人商店',
              eg: 'There was an unmanned convenience store in Taipei, and it eventually closed.',
              egZh: '台北曾經有一家無人便利商店，最後收掉了。',
            },
            {
              en: 'to minimize unnecessary costs',
              zh: '降低不必要的成本',
              eg: 'We have to minimize unnecessary costs without making the store feel cheap.',
              egZh: '我們必須降低不必要的成本，又不能讓店看起來廉價。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Fewer staff, and the thing that decides whether it works',
          zh: '更少的人力，以及決定成敗的那件事',
          bodyEn: 'A specialty store costs more to build. In a single-brand or franchise store the brand company often pays for the fixtures; in the company’s own multi-brand stores, the company carries that cost itself. So the layout has to earn its space. At the same time the industry cannot recruit enough people, which turns the design question into a strategic one: how do you design a store that runs well with fewer employees? A layout can do some of the work a person would do — helping customers find products, understand the categories and move through the shop on their own. But your unmanned 7-Eleven example is the warning. The technology worked and the store still closed, because customers were not comfortable shopping with nobody there. Technology and design shape the experience; the experience shapes behaviour; and only if behaviour actually changes does the business model succeed. That leaves the real question of the hour open: how do you reduce manpower while keeping a store that customers accept and that still says these products are worth the price? Nobody has answered that one yet.',
          bodyZh: '專門店的建置成本比較高。單一品牌店或加盟店的裝修設備，往往由品牌方負擔；但在公司自己的多品牌門市裡，這筆成本得自己扛。所以每一寸空間都必須有它的價值。同時，整個產業都招不到足夠的人，於是「設計」這個問題變成了策略問題：要怎麼設計一家用更少員工也能順利運作的店？配置可以替人做掉一部分的事——幫顧客找到商品、看懂分類、自己走完購物流程。但你舉的無人 7-Eleven 就是警訊。技術是可行的，店還是收了，因為顧客沒辦法接受店裡沒有人的購物方式。技術與設計形塑體驗，體驗形塑行為；唯有行為真的改變，商業模式才會成立。這也讓這一小時真正的問題懸而未決：要如何在減少人力的同時，維持一個顧客願意接受、又仍然在告訴人「這些商品值這個價」的店？目前還沒有答案。',
        },

        {
          t: 'gap',
          en: 'Say it the way it came up',
          zh: '用課堂上出現的說法說一次',
          hintEn: 'One phrase fits each sentence. Tap 中 for the Chinese — the Chinese sentence is complete, so it tells you the situation rather than the answer.',
          hintZh: '每一句都有一個合適的片語。點「中」看中文——中文是完整的句子，它告訴你情境，而不是直接給答案。',
          items: [
            {
              text: 'Instead of competing with every sports retailer, we are focusing on a ___.',
              textZh: '我們不跟每一家運動用品店競爭，而是專注在一個利基市場。',
              options: ['niche market', 'mass market', 'grey market'],
              answer: 0,
              why: {
                en: 'A niche market is a small, well-defined group of buyers. That is exactly the bet: fewer customers, served far better.',
                zh: '利基市場是一群人數不多、輪廓清楚的買家。這正是這個賭注的內容：顧客更少，但服務得好得多。',
              },
            },
            {
              text: 'The retail industry is short of staff, so every chain is dealing with a ___.',
              textZh: '零售業缺人，所以每一家連鎖都在處理人力短缺的問題。',
              options: ['budget cut', 'manpower shortage', 'seasonal peak'],
              answer: 1,
              why: {
                en: 'Manpower shortage is the standard business-English term. In speech you will also hear “we are short-staffed”.',
                zh: 'manpower shortage 是商業英文裡的標準說法。口語上你也會聽到「we are short-staffed」。',
              },
            },
            {
              text: 'Putting boxes on the floor would lower the ___ of full-price shoes.',
              textZh: '把鞋盒放在地上，會拉低原價鞋款的感知價值。',
              options: ['production cost', 'market share', 'perceived value'],
              answer: 2,
              why: {
                en: 'Perceived value is what the customer believes something is worth — which is not the same as what it costs or what it is priced at.',
                zh: '感知價值是顧客「認為」某樣東西值多少，這跟它的成本或標價都不是同一件事。',
              },
            },
            {
              text: 'The AI project should free people from routine work so they can spend time on ___.',
              textZh: 'AI 專案應該把人從例行工作中釋放出來，好讓他們把時間花在更高價值的工作上。',
              options: ['higher-value work', 'longer hours', 'faster output'],
              answer: 0,
              why: {
                en: 'This is the distinction worth keeping. “Do more work” and “do more valuable work” sound similar and mean opposite things to the people doing it.',
                zh: '這個區別值得記下來。「做更多工作」和「做更有價值的工作」聽起來很像，但對執行的人來說意思恰恰相反。',
              },
            },
          ],
        },

        {
          t: 'summary',
          en: 'Your company is also building an internal AI agent, with a kickoff the following Monday. Before it, staff are preparing internal documents, company processes, product information and other data — and data security is a genuine concern, because the point is precisely that the system reaches the company’s own knowledge rather than only what is publicly available. There are two goals. The first is efficiency: routine tasks done faster, so that people move up to higher-value work — not simply so that more work gets done. The second is quieter and more interesting: keeping organizational knowledge inside the organization. Most of what a company knows sits in the heads of experienced staff, and it leaves when they leave, rotate or retire. An AI agent that has collected and organized that experience gives newcomers something to learn from, and makes job rotation and knowledge transfer far less painful.',
          zh: '你們公司同時也在建置內部的 AI agent，隔週一舉行專案啟動會議。在那之前，同仁正在準備內部文件、公司流程、產品資訊與其他資料——而資料安全是真正的顧慮，因為這件事的重點正是：讓系統能接觸到公司自己的知識，而不只是網路上查得到的東西。目標有兩個。第一是效率：例行工作更快完成，讓人往上走到更高價值的工作——而不只是為了做更多事。第二個目標比較安靜，但更有意思：把組織知識留在組織裡。一家公司知道的事，大多存在資深員工的腦袋裡，人走了、輪調了、退休了，知識也跟著離開。一個已經蒐集並整理好這些經驗的 AI agent，能讓新人有東西可學，也讓工作輪調與知識傳承不再那麼痛苦。',
        },

        {
          t: 'match',
          en: 'The AI project, in its own words',
          zh: '用 AI 專案自己的語言來說',
          hintEn: 'Click a phrase on the left, then the half that finishes it.',
          hintZh: '先點左邊的片語，再點右邊接得起來的那一半。',
          pairs: [
            { a: 'improve efficiency', b: 'so routine tasks take less time' },
            { a: 'higher-value work', b: 'the part of the job only a person can do' },
            { a: 'organizational knowledge', b: 'what the company knows, not just what one person knows' },
            { a: 'knowledge transfer', b: 'passing experience on before someone leaves' },
            { a: 'job rotation', b: 'moving staff between positions on purpose' },
            { a: 'data security', b: 'keeping internal information from leaking out' },
          ],
        },

        {
          t: 'phrases',
          en: 'AI at work, and AI at home',
          zh: '工作裡的 AI，家裡的 AI',
          items: [
            {
              en: 'an AI agent',
              zh: 'AI 智慧代理',
              eg: 'We are building an internal AI agent trained on our own documents.',
              egZh: '我們正在建置一個以自家文件訓練的內部 AI agent。',
            },
            {
              en: 'to preserve organizational knowledge',
              zh: '保存組織知識',
              eg: 'The second goal is to preserve organizational knowledge when experienced staff move on.',
              egZh: '第二個目標，是在資深員工離開時，把組織知識保存下來。',
            },
            {
              en: 'knowledge transfer',
              zh: '知識傳承',
              eg: 'Knowledge transfer usually fails because nobody has time to write anything down.',
              egZh: '知識傳承之所以常常失敗，是因為沒有人有時間把東西寫下來。',
            },
            {
              en: 'AI literacy',
              zh: 'AI 素養',
              eg: 'The workshop was about AI literacy for parents, not about the tools themselves.',
              egZh: '那場工作坊談的是家長的 AI 素養，而不是工具本身。',
            },
            {
              en: 'electronic devices',
              zh: '電子裝置',
              eg: 'In natural English we say electronic devices — “3C products” is used in Taiwan but rarely understood elsewhere.',
              egZh: '自然的英文會說 electronic devices；「3C 產品」在台灣通用，但在其他地方幾乎沒人聽得懂。',
            },
            {
              en: 'to create content rather than only consume it',
              zh: '創作內容，而不只是消費內容',
              eg: 'A laptop makes it easier to create content rather than only consume it.',
              egZh: '筆電讓人比較容易去創作內容，而不只是消費內容。',
            },
            {
              en: 'a global stage',
              zh: '全球舞台',
              eg: 'The question is not only what she is good at, but whether it has a global stage.',
              egZh: '問題不只是她擅長什麼，而是這件事有沒有一個全球舞台。',
            },
            {
              en: 'to document the learning process',
              zh: '記錄學習歷程',
              eg: 'He encouraged his children to document the learning process, not just the results.',
              egZh: '他鼓勵孩子記錄學習的歷程，而不只是結果。',
            },
          ],
        },

        {
          t: 'note',
          en: 'The workshop: three ideas worth keeping',
          zh: '那場工作坊：三個值得留下的觀念',
          bodyEn: 'The homework page came partly out of a one-day workshop on AI literacy and parenting — literacy meaning 素養, as in art literacy or reading literacy. The first idea is that a laptop may be a better first device for a child than a phone, because a laptop is built for making things — writing, programming, designing, editing video, building a project — while phones and tablets are mostly used for consuming what other people made. The second is that parents should not stop at what a child is good at, but ask whether that talent has a global stage. The lecturer’s daughter went into robotics; as the competitions became international she had real reasons to talk to teammates abroad and learn English, so English became a tool for something she cared about rather than a school subject. The third is documenting: she started blogging at about eleven or twelve, first about family trips, later about what she was learning and building. Blog, video, portfolio — the format matters less than the record. And running underneath all three: AI should not be an answering machine. It can be an assistant.',
          bodyZh: '那個作業網頁的靈感，有一部分來自一場關於 AI 素養與親子教育的一日工作坊——literacy 就是「素養」，像是藝術素養、閱讀素養。第一個觀念是：對孩子來說，筆電也許比手機更適合當第一台裝置，因為筆電是為了「做東西」而設計的——寫作、寫程式、設計、剪影片、做專案——而手機和平板多半用來消費別人做出來的東西。第二個觀念是：家長不該停在「孩子擅長什麼」，而要問這項才能有沒有一個全球舞台。講者的女兒走進了機器人領域；隨著比賽愈來愈國際化，她有了真實的理由去跟國外隊友溝通、去學英文，於是英文變成她在乎的事情的工具，而不是一門學科。第三個觀念是記錄：她大約十一、二歲就開始寫部落格，一開始寫家族旅行，後來寫自己在學什麼、在做什麼。部落格、影片、作品集——格式不重要，留下紀錄才重要。而貫穿這三點的是：AI 不該只是一台答案機，它可以是一個助手。',
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的看法是？',
          hintEn: 'No right answer. Pick one and say why in English — a sentence or two is enough.',
          hintZh: '沒有標準答案。選一個，然後用英文說說為什麼——一兩句就夠了。',
          items: [
            {
              en: 'A well-designed store can replace two members of staff.',
              zh: '設計得好的店面，可以取代兩名店員。',
            },
            {
              en: 'Taiwanese customers still want a person on the floor, even when they do not need one.',
              zh: '台灣顧客還是希望店裡有人，即使他們其實不需要。',
            },
            {
              en: 'The main value of a company AI agent is efficiency, not knowledge.',
              zh: '公司導入 AI agent，主要價值在效率，而不是知識。',
            },
            {
              en: 'A child should be given a laptop before a smartphone.',
              zh: '孩子應該先拿到筆電，再拿到智慧型手機。',
            },
          ],
        },

        /* From the recording of this hour. The transcript is machine-generated
           and mishears freely, so only lines where the error is unmistakably
           hers are used — a missing verb, a preposition, a comparative. The
           garbled ones were left out rather than tidied into a sentence she may
           not have said. */
        {
          t: 'fix',
          en: 'Your own sentences, from this session',
          zh: '這堂課裡，你自己的句子',
          hintEn: 'The sentence as it came out, and the version to keep. Read the first line and see if you can spot it before you tap.',
          hintZh: '當下說出口的版本，以及值得留下的版本。先讀第一行，看看能不能自己找出問題，再點開。',
          items: [
            {
              wrong: 'My coworkers told me, your lucky day has gone.',
              right: 'My coworkers told me my lucky days were over.',
              whyEn: 'Two things. Reporting what someone said moves the words into your own sentence — my, not your. And “has gone” means it went somewhere; a period of time that has finished is over.',
              whyZh: '兩件事。轉述別人的話時，那些字會變成你自己句子的一部分——要用 my，不是 your。另外，has gone 的意思是「去了某個地方」；一段時間結束了，要用 over。',
            },
            {
              wrong: 'The employees are almost newcomers.',
              right: 'Most of the employees are newcomers.',
              whyEn: 'This one is worth circling — “almost” for “most” came up three or four times in the hour. Almost means nearly, and it sits next to the thing it limits: almost all of them. When you mean the majority, it is most.',
              whyZh: '這一句值得圈起來——用 almost 代替 most，這個小時裡出現了三四次。almost 的意思是「幾乎、差一點」，而且要緊貼著它修飾的東西：almost all of them。你要表達「大多數」時，要用 most。',
            },
            {
              wrong: 'Which shoes suitable for beginners?',
              right: 'Which shoes are suitable for beginners?',
              whyEn: 'Chinese can put an adjective straight after the noun; English cannot. Between the thing and its description there has to be a verb — are.',
              whyZh: '中文可以把形容詞直接接在名詞後面，英文不行。名詞和描述之間一定要有一個動詞——are。',
            },
            {
              wrong: 'This new store type is very popular in abroad.',
              right: 'This kind of store is very popular overseas.',
              whyEn: 'Abroad and overseas already mean “in another country”, so the preposition is built in — no “in”. You can also say “in other countries”, but not both at once.',
              whyZh: 'abroad 和 overseas 本身就含有「在其他國家」的意思，介系詞已經內建，不需要再加 in。你也可以說 in other countries，但兩種說法不能疊在一起。',
            },
            {
              wrong: 'We just only one NBA store in Taipei.',
              right: 'We only have one NBA store in Taipei.',
              whyEn: 'The verb went missing. Chinese can leave “有” implied in a sentence like this; English always needs have.',
              whyZh: '動詞不見了。中文在這樣的句子裡可以省略「有」，英文則一定要把 have 說出來。',
            },
            {
              wrong: 'Even though the manpower is weak.',
              right: 'Even when we are short-staffed.',
              whyEn: 'Manpower is not weak or strong — there is either enough of it or not. Short-staffed is the word the industry actually uses, and it is what you will hear in a meeting.',
              whyZh: 'manpower 沒有「強弱」之分，只有「夠不夠」。short-staffed 才是這個產業實際在用的字，也是你在會議上會聽到的說法。',
            },
            {
              wrong: 'Did you went to the outlet store?',
              right: 'Have you ever been to an outlet store?',
              whyEn: 'You started this one right and then changed it — the first version was correct. After did, the verb stays plain: did you go. And for an experience at some point in your life, English prefers have you ever been.',
              whyZh: '這一句你本來說對了，後來又改掉——第一個版本才是對的。did 後面的動詞維持原形：did you go。另外，問「這輩子有沒有過這種經驗」，英文偏好用 have you ever been。',
            },
            {
              wrong: 'A lot of shoes just put on the ground.',
              right: 'A lot of the shoes are just left on the floor.',
              whyEn: 'The shoes did not put themselves anywhere — someone put them there, so the sentence needs the passive: are left, are placed, are stacked. Inside a building it is the floor; the ground is outdoors.',
              whyZh: '鞋子不會自己放到某個地方——是有人放的，所以句子要用被動：are left、are placed、are stacked。另外，室內是 floor，ground 指的是戶外的地面。',
            },
            {
              wrong: 'The customer will think it is very lower.',
              right: 'Customers will assume the product is cheap.',
              whyEn: 'Lower is a comparison and needs something to compare with, so “very lower” cannot stand. Here you meant the impression the layout gives — cheap, or worth less than it is.',
              whyZh: 'lower 是比較級，必須有比較的對象，所以 very lower 站不住。你這裡要說的是那種陳列給人的印象——cheap，或者 worth less than it is。',
            },
            {
              wrong: 'We want to use the AI to let our employees’ knowledge stay in the company.',
              right: 'We want AI to keep our employees’ knowledge inside the company.',
              whyEn: 'The idea is a good one and worth saying cleanly. “Let something stay” is permission — you are allowing it. What you mean is active: keep it, hold on to it. Also AI takes no “the” when you mean the technology in general.',
              whyZh: '這個想法很好，值得說得乾淨一點。let something stay 是「允許它留下」的意思。你要表達的是主動的：keep it、hold on to it。另外，泛指這項技術時，AI 前面不加 the。',
            },
            {
              wrong: 'I’m very frustrated in this week.',
              right: 'I’ve been frustrated this week.',
              whyEn: 'This week has not finished, so English uses have been — the feeling started earlier and is still going. And this week takes no preposition, the same as today and last month.',
              whyZh: '這一週還沒結束，所以英文用 have been——這個感覺從之前開始，到現在還在持續。另外，this week 前面不加介系詞，跟 today、last month 一樣。',
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Questions to talk through',
          zh: '可以聊的問題',
          items: [
            {
              en: 'If you could change one thing about the five-day training, what would it be?',
              zh: '如果你可以改五天培訓裡的一件事，你會改什麼？',
              starters: [
                { en: 'The part I would change is ___, because ___.', zh: '我會改的是＿＿，因為＿＿。' },
                { en: 'What the new staff actually need is less ___ and more ___.', zh: '新進員工真正需要的是少一點＿＿，多一點＿＿。' },
                { en: 'You cannot train confidence in five days, but you can ___.', zh: '五天沒辦法訓練出自信，但你可以＿＿。' },
              ],
            },
            {
              en: 'How would you design a store that works with fewer staff but still feels worth the price?',
              zh: '你會怎麼設計一家人力更少、但仍然讓人覺得「值這個價」的店？',
              starters: [
                { en: 'I would let the layout do the work of ___.', zh: '我會讓店面配置去承擔＿＿的工作。' },
                { en: 'The one thing I would not automate is ___.', zh: '唯一我不會自動化的是＿＿。' },
                { en: 'There is a difference between fewer staff and no staff.', zh: '「人少一點」和「完全沒有人」是兩回事。' },
              ],
            },
            {
              en: 'Whose knowledge in your company would be hardest to replace?',
              zh: '在你們公司，誰的知識最難被取代？',
              starters: [
                { en: 'The hardest to replace would be ___, because most of what they know was never written down.', zh: '最難取代的會是＿＿，因為他們知道的事大多從來沒被寫下來。' },
                { en: 'We would only find out what we had lost when ___.', zh: '我們大概要等到＿＿的時候，才會發現自己失去了什麼。' },
                { en: 'An AI agent could capture ___, but it could not capture ___.', zh: 'AI agent 抓得住＿＿，但抓不住＿＿。' },
              ],
            },
            {
              en: 'When you write in English and it comes out slowly, what is actually holding you up?',
              zh: '當你用英文寫東西卻寫得很慢，真正卡住你的是什麼？',
              starters: [
                { en: 'It is not that I do not know what to say. It is that ___.', zh: '不是我不知道要說什麼，而是＿＿。' },
                { en: 'I start from a Chinese sentence and then try to ___.', zh: '我會從一句中文開始，然後試著＿＿。' },
                { en: 'What I want is to reach for the English phrase directly, without ___.', zh: '我想要的是直接抓到那個英文說法，而不用＿＿。' },
              ],
            },
          ],
        },

        {
          t: 'note',
          en: 'What to do with a corrected sentence',
          zh: '拿到一句被改好的句子之後，該做什麼',
          bodyEn: 'You said listening has come along, and that writing is where the frustration is — writing to hotels and travel agents in Europe, knowing what you mean and not being able to say it naturally, because the Chinese sentence structure comes first and the English is built on top of it. The interactive page is built for exactly that, but only if you work it in five steps. One, compare: put the original sentence next to the revised one and ask what changed and why. Two, listen: play the revised sentence. Three, repeat it aloud several times. Four, produce: use the same structure or collocation to write a new sentence of your own. Five, write the improved sentence out by hand. That last one sounds old-fashioned and it is the step that does the most, because reading a correction feels like learning and is not. The correction is where the work starts, not where it finishes.',
          bodyZh: '你說聽力有進步，而挫折感在寫作——寫信給歐洲的旅館和旅行社，明明知道自己想表達什麼，卻沒辦法自然地說出來，因為腦中先出現的是中文句構，英文再蓋在上面。那個互動網頁正是為此而做的，但前提是你要用五個步驟去操作它。第一，比較：把原句和改過的句子放在一起，問「改了什麼、為什麼改」。第二，聽：播放修改後的句子。第三，跟著大聲唸幾次。第四，產出：用同樣的句構或搭配詞，自己造一個新句子。第五，把改好的句子用手抄一遍。最後這一步聽起來很老派，卻是效果最大的一步，因為「讀過訂正」感覺像在學習，但其實不是。訂正是工作的起點，不是終點。',
        },

        {
          t: 'link',
          href: '../sentence-upgrades/',
          en: 'Sentence Upgrades — your homework, with the revisions',
          zh: '句子升級——你的作業與修改後的版本',
          noteEn: 'The page shown in this session: your seven sentences from 25 July, each with the revision, a note on what changed and why, and the collocations that came with it. Tap a sentence to see the marked parts light up in both versions, and 🔊 to hear the revision read aloud. This is the page the five steps above are for.',
          noteZh: '這堂課上看到的那個頁面：你 7/25 寫的七個句子，每一句都附上修改後的版本、「改了什麼、為什麼」的說明，以及隨之而來的搭配詞。點句子可以看到標記的部分在兩個版本裡同時亮起來，點 🔊 可以聽修改後的句子。上面那五個步驟就是為這個頁面而設的。',
        },

        {
          t: 'task',
          en: 'Homework: the store, in your own words',
          zh: '作業：用你自己的話，說這家店',
          instructionEn: 'Write three to five sentences answering one of the prompts below, and send them on LINE — we will go over them next time. Then take whatever comes back corrected and run the five steps on it: compare, listen, repeat, produce, and write the improved sentence out by hand.',
          instructionZh: '請就下面其中一個題目寫三到五句，用 LINE 傳給我，下次一起檢討。收到訂正之後，把那五個步驟走一遍：比較、聽、跟讀、造新句，然後把改好的句子用手抄一遍。',
          prompts: [
            { en: 'Explain the new store to someone outside your industry, in a way that makes them understand why it is different.', zh: '向一個不在你這個產業的人解釋這家新門市，讓他聽得懂它為什麼不一樣。' },
            { en: 'Or argue the other side: why a specialty store might not work in Taiwan.', zh: '或者，說反面的立場：為什麼專門店在台灣可能行不通。' },
            { en: 'Or write the email you would actually send about the store to a supplier or a colleague overseas.', zh: '或者，直接寫一封你真的會寄出去的信，向供應商或海外同事介紹這家店。' },
          ],
          checklist: [
            { en: 'a niche market', zh: '利基市場' },
            { en: 'brand influence', zh: '品牌影響力' },
            { en: 'personalized products and services', zh: '個人化產品與服務' },
            { en: 'perceived value', zh: '感知價值' },
            { en: 'a manpower shortage', zh: '人力短缺' },
          ],
          frames: [
            { en: 'What makes it different is not ___, but ___.', zh: '它不一樣的地方不在於＿＿，而在於＿＿。' },
            { en: 'The risk we have not solved yet is ___.', zh: '我們還沒解決的風險是＿＿。' },
            { en: 'If it works, it will be because customers ___.', zh: '如果成功了，那會是因為顧客＿＿。' },
          ],
        },
      ],
    },

    {
      id: 's2',
      n: 2,
      date: '2026-08-14',
      dateEn: '14 August 2026',
      dateZh: '2026 年 8 月 14 日',
      en: 'Think first, then hand it over',
      zh: '先自己想，再交出去',

      focus: [
        { en: 'AI as an assistant', zh: 'AI 作為助手' },
        { en: 'Planning a group trip', zh: '規劃團體旅行' },
        { en: 'Training that has to earn its hours', zh: '必須值回時間的教育訓練' },
        { en: 'Autonomy and trust', zh: '自主權與信任' },
        { en: 'Judging the consequences', zh: '評估後果' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'The same shape turned up three times in this hour — in how you use AI, in how you plan a trip, and in how you hand a training programme over to someone else. In each case the question was not whether to let go, but what has to be in place first.',
          zh: '這一個小時裡，同一個形狀出現了三次——在你使用 AI 的方式裡、在你規劃旅行的方式裡，也在你把教育訓練交給別人的方式裡。每一次的問題都不是「要不要放手」，而是「放手之前，什麼必須先到位」。',
        },

        {
          t: 'note',
          en: 'AI as an interactive encyclopedia',
          zh: 'AI 就像一本互動式百科全書',
          bodyEn: 'A printed encyclopedia gives you information. AI lets you ask the next question — explain it again, make it harder, make it simpler, give me ten more like this, test me on it. That is what makes it useful for a child starting Grade 1: the material can be set to one particular learner rather than to the average of a whole class. The real gain is control over pace and depth. But the same tool that produces practice in seconds is the one that will produce the answer in seconds, and both of us landed in the same place on that: it can support the learning without taking over the thinking. So the maths still gets written out by hand.',
          bodyZh: '紙本百科全書給你資訊。AI 則讓你問下一個問題——再解釋一次、難一點、簡單一點、再給我十題類似的、考考我。這正是它對一個剛上小一的孩子有用的原因：教材可以為某一個特定的學習者設定，而不是為一整班的平均值。真正的收穫是對速度與深度的掌控權。但同一個能在幾秒內生出練習題的工具，也能在幾秒內生出答案，而我們兩個在這件事上的結論是一樣的：它可以支援學習，但不能接手思考。所以數學還是要用手寫出來。',
        },

        {
          t: 'summary',
          en: 'At work the gain is efficiency: drafting an email, tidying up a document, organizing information, preparing a set of slides — AI can streamline a work process and give back the time that repetitive, lower-value tasks were eating. The risk sits right next to the benefit. If every problem goes straight to the machine, people become overly dependent on it and slowly stop wanting to think for themselves; if every idea starts as an AI idea, originality goes the same way. So the interesting question is not whether AI will get smarter. It is whether we keep developing our own thinking while it does.',
          zh: '在工作上，好處是效率：起草一封信、整理一份文件、組織資訊、準備一份簡報——AI 可以簡化工作流程，把那些重複、低價值的事情吃掉的時間還給你。風險就緊挨著好處。如果每一個問題都直接丟給機器，人會變得過度依賴它，慢慢不再想自己思考；如果每一個點子一開始都是 AI 的點子，原創性也會走上同一條路。所以真正有意思的問題不是「AI 會不會變得更聰明」，而是「在它變聰明的同時，我們有沒有繼續發展自己的思考」。',
        },

        {
          t: 'contrast',
          en: 'Two ways to use the same tool',
          zh: '同一個工具的兩種用法',
          coldEn: 'AI first',
          coldZh: '先用 AI',
          warmEn: 'Thinking first',
          warmZh: '先自己想',
          hintEn: 'Three places the order matters. Both columns are good English — read them both aloud.',
          hintZh: '順序有影響的三個地方。左右兩欄都是道地的英文，兩邊都請唸出聲。',
          items: [
            {
              caseEn: 'Writing something in English',
              caseZh: '用英文寫東西',
              cold: {
                en: 'I ask it to write the message, then change a few words so it sounds like me.',
                zh: '我請它把訊息寫出來，再改幾個字，讓它聽起來像我寫的。',
              },
              warm: {
                en: 'I make the original version myself first, then ask AI to polish the language.',
                zh: '我會先自己寫出原始版本，再請 AI 把語言修得漂亮一點。',
              },
              whyEn: 'Your own method, and the better one. In the first version the English improves and you do not; in the second the correction has something of yours to work on.',
              whyZh: '這是你自己的做法，也是比較好的做法。第一種版本裡進步的是英文，不是你；第二種版本裡，訂正才有「你的東西」可以修。',
            },
            {
              caseEn: 'Preparing a training session',
              caseZh: '準備一場教育訓練',
              cold: {
                en: 'Generate me a one-day course on this topic and I will take it from there.',
                zh: '幫我生一份這個主題的一日課程，我再接手處理。',
              },
              warm: {
                en: 'I decide the objectives and the structure myself, and then use AI to sharpen the wording and build the slides.',
                zh: '課程目標和架構我自己決定，然後用 AI 把用字修得更準、把投影片做出來。',
              },
              whyEn: 'Objectives are a judgement about the people in the room. That is the part nobody outside the room can make for you — including the machine.',
              whyZh: '課程目標是對現場那群人的判斷。這正是房間外面的人替你做不了的部分——機器也一樣。',
            },
            {
              caseEn: 'Planning a trip',
              caseZh: '規劃旅行',
              cold: {
                en: 'It gave me the full itinerary, so that is what we are doing.',
                zh: '它給了我完整的行程，那我們就照這樣走。',
              },
              warm: {
                en: 'I use it to collect and organize the information, then check the opening hours and the train times on the actual websites.',
                zh: '我用它來蒐集和整理資訊，再到官方網站上確認開放時間和火車班次。',
              },
              whyEn: 'Also yours. Anything that can change — hours, schedules, tickets, prices — gets verified from a reliable source. The tool is good at gathering, not at being current.',
              whyZh: '這也是你的做法。任何會變動的東西——營業時間、班次、票務、價格——都要從可靠的來源再確認一次。這個工具擅長的是蒐集，不是「即時正確」。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Thinking, and the machine',
          zh: '思考，與那台機器',
          items: [
            {
              en: 'to streamline a work process',
              zh: '簡化／優化工作流程',
              eg: 'AI can help us streamline our work processes and save a lot of time.',
              egZh: 'AI 可以幫我們簡化工作流程，省下大量時間。',
            },
            {
              en: 'to become overly dependent on AI',
              zh: '變得過度依賴 AI',
              eg: 'My worry is that people become overly dependent on AI and stop thinking for themselves.',
              egZh: '我擔心的是，人會變得過度依賴 AI，然後不再自己思考。',
            },
            {
              en: 'to think for yourself',
              zh: '獨立思考',
              eg: 'He prefers to think for himself first and use AI afterwards.',
              egZh: '他偏好先自己思考，之後才用 AI。',
            },
            {
              en: 'fundamental thinking skills',
              zh: '基礎思考能力',
              eg: 'At his age, fundamental thinking skills matter more than getting the right answer quickly.',
              egZh: '在他這個年紀，基礎思考能力比快點得到正確答案更重要。',
            },
            {
              en: 'to turn an idea into reality',
              zh: '把想法實現出來',
              eg: 'People with real experience can use AI to turn their ideas into reality.',
              egZh: '有實務經驗的人，可以用 AI 把自己的想法實現出來。',
            },
            {
              en: 'sensitive information',
              zh: '敏感資訊',
              eg: 'We have to be careful about putting sensitive information into any system we do not control.',
              egZh: '把敏感資訊放進任何我們無法掌控的系統之前，都必須小心。',
            },
            {
              en: 'to verify information from a reliable source',
              zh: '從可靠來源查證資訊',
              eg: 'I use AI to draft the itinerary, then verify the details from a reliable source.',
              egZh: '我用 AI 草擬行程，再從可靠的來源查證細節。',
            },
            {
              en: 'to lose your originality',
              zh: '失去原創性',
              eg: 'If every idea starts with a prompt, you slowly lose your originality.',
              egZh: '如果每個想法都從一句提示開始，你會慢慢失去原創性。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Security did not start with AI — but it did get bigger',
          zh: '資安不是從 AI 才開始——但規模確實變大了',
          bodyEn: 'Your point on security was the right one to raise. These systems take in information from many sources at once, and some of it is personal, private, confidential or otherwise sensitive. The concern itself is not new: the same questions arrived with the Internet, with Gmail, with Facebook. What is different is how much more powerfully AI can connect one piece of information to another, which is exactly why companies and governments are now having to think about it deliberately rather than after the fact.',
          bodyZh: '你提出的資安問題問得很對。這些系統同時吸收來自許多來源的資訊，其中有些是個人的、私密的、機密的，或其他形式的敏感資訊。這個顧慮本身並不新：網際網路出現時、Gmail 出現時、Facebook 出現時，同樣的問題都來過。不同的是，AI 把一則資訊和另一則資訊連起來的能力強得多——這正是為什麼企業與政府現在必須事先審慎思考，而不是事後才處理。',
        },

        {
          t: 'summary',
          en: 'On the work side: you have been preparing materials for next week’s regular training programme, though you now deliver only one or two sessions a year yourself — the rest has been passed on to your coworkers. Two things have made the job harder than it used to be. Your own delivery has got a little rusty, which is what happens to any skill used twice a year. And the learners have changed: they arrive with websites, online courses, communities and AI already available to them, so simply presenting information is no longer worth their afternoon. Younger employees in particular are less willing to sit in a classroom for four to seven hours. The bar has moved — a session now has to be engaging, practical and interactive to earn the time it takes.',
          zh: '工作方面：你一直在準備下週例行教育訓練的教材，雖然現在你自己一年只講一到兩場——其餘的都交接給同事了。有兩件事讓這份工作比以前更難。你自己的授課有點生疏了，這是任何一年只用兩次的技能都會發生的事。另外，學習者也變了：他們身邊本來就有網站、線上課程、社群和 AI，所以「只是把資訊講一遍」已經不值得他們一個下午。年輕員工尤其不太願意在教室裡坐上四到七個小時。門檻已經往上移了——一堂課現在必須有吸引力、實用、而且能互動，才對得起它佔掉的時間。',
        },

        {
          t: 'phrases',
          en: 'Handing work over',
          zh: '把工作交出去',
          items: [
            {
              en: 'to pass something on to someone',
              zh: '把工作／責任交接給某人',
              eg: 'I have gradually passed the training responsibility on to my coworkers.',
              egZh: '我逐步把教育訓練的責任交接給同事了。',
            },
            {
              en: 'to get rusty',
              zh: '因為久沒用而變生疏',
              eg: 'I only conduct training once or twice a year, so my presentation skills have gotten a little rusty.',
              egZh: '我一年只做一兩場訓練，所以簡報技巧有點生疏了。',
            },
            {
              en: 'to conduct a training session',
              zh: '進行一場教育訓練',
              eg: 'She conducts the training session herself, and I only review the materials.',
              egZh: '課程由她自己主講，我只看教材。',
            },
            {
              en: 'to give a rehearsal',
              zh: '進行試講／彩排',
              eg: 'For the first year, I asked them to give a rehearsal before the real session.',
              egZh: '第一年，我會請他們在正式上場前先試講一次。',
            },
            {
              en: 'to give someone space',
              zh: '給某人發揮的空間',
              eg: 'You need to give people space to contribute their own skills and ideas.',
              egZh: '你必須給人空間，讓他們貢獻自己的能力和想法。',
            },
            {
              en: 'to micromanage',
              zh: '過度管理、事事插手',
              eg: 'A manager who micromanages never finds out what the team can actually do.',
              egZh: '一個事事插手的主管，永遠不會知道團隊其實做得到什麼。',
            },
            {
              en: 'to earn someone’s trust',
              zh: '贏得某人的信任',
              eg: 'I am willing to trust her, but she also has to earn that trust.',
              egZh: '我願意信任她，但她也得把這份信任賺到手。',
            },
            {
              en: 'the whole picture',
              zh: '全貌',
              eg: 'I was not saying no. I was asking for the whole picture.',
              egZh: '我不是在說不行，我是在要一個完整的全貌。',
            },
            {
              en: 'to take precautions',
              zh: '採取預防措施',
              eg: 'When the cost of a mistake is unbearable, you take precautions.',
              egZh: '當犯錯的代價無法承受時，你就得採取預防措施。',
            },
            {
              en: 'accountability',
              zh: '當責',
              eg: 'Asking what you are responsible for is a sign of accountability, not of doubt.',
              egZh: '主動問「我負責什麼」是當責的表現，不是心虛。',
            },
          ],
        },

        {
          t: 'note',
          en: 'The request, and the questions',
          zh: '那個請求，與那些問題',
          bodyEn: 'The leader of the training department asked to be released from normal duties to go and observe how employees were performing after training — and wanted to take a second person with her, which the original plan had not mentioned. You asked why the second person was needed, what exactly she wanted to do, what the purpose was, what result she expected, what the complete plan was. She was not happy about the number of questions. But you were not refusing; you were asking for the whole picture, because with it you would have said go ahead. That is the principle underneath: more autonomy requires more clarity. You are willing to trust her — and she still has to earn that trust by showing she has thought it through. Which, incidentally, is the same test you passed on the English homework: you messaged to check exactly what you were supposed to be doing, because you wanted to be sure the responsibility was actually met.',
          bodyZh: '教育訓練部門的主管提出要暫離原本的工作崗位，去觀察員工受訓後的表現——而且想帶第二個人一起去，這在原本的計畫裡並沒有提到。你問了：為什麼需要第二個人？你具體想做什麼？目的是什麼？預期得到什麼結果？完整的計畫是什麼？她對這麼多問題不太高興。但你並不是在拒絕，你要的是全貌——因為有了全貌，你就會說「去做吧」。底下的原則是這個：更多的自主權，需要更清楚的說明。你願意信任她——而她仍然必須用「我已經想清楚了」來把這份信任賺到。順帶一提，這也正是你在英文作業上通過的同一個測試：你主動傳訊息確認自己到底該做什麼，因為你想確保這份責任真的有被完成。',
        },

        {
          t: 'note',
          en: 'How much freedom — the test you offered',
          zh: '要給多少自由——你提出的判準',
          bodyEn: 'Complete freedom sounds generous, and sometimes it is not. The parenting example we used — a family who would not make their children brush their teeth, out of respect for the children’s choices, and the dental problems that followed — is not an argument against freedom. It is an argument for looking at what happens if you do not step in. Your own test is the cleanest thing to come out of the hour: ask what the consequences are if I leave this alone. If they are manageable, give more freedom. If they are serious or hard to recover from, give more guidance. Low risk, more autonomy; high risk, more oversight. And when the cost of a mistake would be unbearable, stepping in is not micromanaging — it is taking precautions. Control and risk management look alike from the outside and are not the same thing.',
          bodyZh: '完全的自由聽起來很大方，有時候卻不是。我們用的那個親子例子——一個家庭出於尊重孩子的選擇，不強迫孩子刷牙，後來出現了嚴重的牙齒問題——並不是在反對自由。它是在主張：要去看「如果你不介入，會發生什麼」。你自己提出的判準是這一小時裡最乾淨的東西：先問，如果我放著不管，後果是什麼？如果後果是可以承受的，就給更多自由；如果後果很嚴重、很難挽回，就給更多指導。風險低，自主權多；風險高，監督多。而當犯錯的代價無法承受時，介入就不是過度管理，而是預防措施。控制和風險管理從外面看起來很像，但它們不是同一件事。',
        },

        /* Anita's own sentences, from the recording of this hour.
           The transcript is machine-generated and mishears a good deal, so
           only lines where the error is unmistakably hers are used here — a
           tense, a pronoun, a singular for a plural. Anything the recogniser
           garbled was left out rather than tidied into a sentence she may not
           have said. Every one of these is a real slip from 14 August. */
        {
          t: 'fix',
          en: 'Your own sentences, from this session',
          zh: '這堂課裡，你自己的句子',
          hintEn: 'The sentence as it came out, and the version to keep. Read the first one and see if you can spot it before you tap.',
          hintZh: '當下說出口的版本，以及值得留下的版本。先讀第一行，看看能不能自己找出問題，再點開。',
          items: [
            {
              wrong: 'He did not depends on AI overly.',
              right: 'He is not overly dependent on AI.',
              whyEn: 'Two things. After “did not” the verb goes back to its plain form — did not depend. And English prefers the adjective here: be or become dependent on something. “Overly” wants an adjective to lean on.',
              whyZh: '兩件事。did not 後面的動詞要回到原形——did not depend。另外，英文在這裡偏好用形容詞：be／become dependent on something。overly 需要一個形容詞可以修飾。',
            },
            {
              wrong: 'I am already pass on all the classes to my co-workers.',
              right: 'I have already passed all the classes on to my coworkers.',
              whyEn: 'This is the one to watch — it came up three or four times in the hour. “I am” makes it a description of you; what you mean is a thing you did and that is still true, which is have + the past form: I have passed it on.',
              whyZh: '這一句要特別注意——這個小時裡出現了三四次。用 I am 會變成在描述「你這個人」；你要說的是一件已經做了、而且到現在仍然成立的事，那就是 have + 過去分詞：I have passed it on。',
            },
            {
              wrong: 'The training leader asked me. He would like to ask for duty leave.',
              right: 'The training leader asked me. She wanted to apply for duty leave.',
              whyEn: 'You corrected this one yourself mid-sentence, which is the right instinct. English forces the choice every time the person comes up again, so it is worth deciding at the start of the story: she.',
              whyZh: '你自己在句子中間就改過來了，這個直覺是對的。英文每次再提到這個人時都會逼你做選擇，所以在故事一開始就先決定好：she。',
            },
            {
              wrong: 'She say, why you ask me so many question?',
              right: 'She said, “Why are you asking me so many questions?”',
              whyEn: 'Three small things at once: said for the past, the question word order inside the quotation, and questions in the plural. Quoting someone is where all three tend to slip together.',
              whyZh: '三個小地方同時出現：過去式 said、引號裡面的疑問句語序，以及複數 questions。引述別人說的話時，這三個地方最容易一起出錯。',
            },
            {
              wrong: 'You need to give them the space to contribute their skill and their ideal.',
              right: 'You need to give them space to contribute their skills and their ideas.',
              whyEn: 'The sentence itself is excellent — it was the best line of the hour. Only three details: no “the” before space here, and both skills and ideas are plural. Ideal is a different word: a standard you aim at.',
              whyZh: '這個句子本身非常好——是這一小時裡最漂亮的一句。只有三個細節：這裡的 space 前面不加 the，skills 和 ideas 都要用複數。ideal 是另一個字，指的是你追求的理想標準。',
            },
            {
              wrong: 'If the consequence I can control, I will respect them to do.',
              right: 'If I can live with the consequences, I let them decide.',
              whyEn: 'Your idea was clear and the English was fighting it. English will not move the object to the front like Chinese does, so the condition has to be rebuilt around I. “Respect them to do” is not a pattern English has — let them decide is.',
              whyZh: '你的想法很清楚，是英文在跟它作對。英文不像中文可以把受詞提到前面，所以這個條件句必須用 I 重新組起來。respect somebody to do 不是英文的句型——let them decide 才是。',
            },
            {
              wrong: 'Their speaking is the totally the same.',
              right: 'They all sound exactly the same.',
              whyEn: 'The point you were making about the generated voice was a fair one. English says it with a verb rather than a noun: they sound the same, not their speaking is the same.',
              whyZh: '你對那個 AI 語音的評論是對的。英文會用動詞而不是名詞來說這件事：they sound the same，而不是 their speaking is the same。',
            },
            {
              wrong: 'I have watched and listened twice. And then I forgot I need to what I need to do.',
              right: 'I watched and listened to it twice, and then I forgot what I was supposed to do.',
              whyEn: 'Once the sentence has moved into the past with forgot, what follows moves with it: what I was supposed to do. Keeping “need” in the present makes it sound like you still do not know.',
              whyZh: '一旦句子用 forgot 進入過去，後面也要跟著走：what I was supposed to do。把 need 留在現在式，聽起來會像你到現在還不知道。',
            },
            {
              wrong: 'When we getting older, we cannot remember a lot of things.',
              right: 'As we get older, we can’t remember as much.',
              whyEn: 'A general truth takes the plain present: as we get older. And “cannot remember a lot of things” says you remember almost nothing — as much is the smaller, truer claim you meant.',
              whyZh: '講一個普遍的道理要用現在簡單式：as we get older。另外，cannot remember a lot of things 的意思是「幾乎什麼都記不住」；你要表達的是程度上的減少，用 as much 才準確。',
            },
          ],
        },

        {
          t: 'gap',
          en: 'Say it the way it came up',
          zh: '用課堂上出現的說法說一次',
          hintEn: 'One phrase fits each sentence. Tap 中 for the Chinese — the Chinese sentence is complete, so it tells you the situation rather than the answer.',
          hintZh: '每一句都有一個合適的片語。點「中」看中文——中文是完整的句子，它告訴你情境，而不是直接給答案。',
          items: [
            {
              text: 'I was not refusing. I just wanted to see ___ before I said yes.',
              textZh: '我不是在拒絕，我只是想在點頭之前看到全貌。',
              options: ['the whole picture', 'the bright side', 'the bottom line'],
              answer: 0,
              why: {
                en: 'The whole picture is the plan, the purpose and the people, all at once. It is the friendliest way to ask for a complete answer.',
                zh: '「全貌」指的是計畫、目的和人選，一次到齊。這是要求一個完整答案時最不帶刺的說法。',
              },
            },
            {
              text: 'I only run a session once a year now, so my delivery has ___.',
              textZh: '我現在一年只講一場，所以我的授課有點生疏了。',
              options: ['gone missing', 'got a little rusty', 'run out'],
              answer: 1,
              why: {
                en: 'Rusty is for a skill you still have but have not used lately. It is modest rather than self-critical, which is why it works well in a meeting.',
                zh: 'rusty 用在「還在、只是最近沒用」的技能上。它是謙虛，而不是自我批評，所以在會議上很好用。',
              },
            },
            {
              text: 'She is capable, but she still has to ___ by showing me a real plan.',
              textZh: '她有能力，但她仍然必須拿出一份真正的計畫，來贏得我的信任。',
              options: ['keep my trust', 'earn my trust', 'take my trust'],
              answer: 1,
              why: {
                en: 'Trust is earned, then kept. Using “earn” is what makes the demand sound fair rather than suspicious.',
                zh: '信任先是「賺來的」，然後才是「守住的」。用 earn，這個要求聽起來就是公平，而不是懷疑。',
              },
            },
            {
              text: 'If the cost of the mistake would be unbearable, we should ___.',
              textZh: '如果犯錯的代價無法承受，我們就應該採取一些預防措施。',
              options: ['take some precautions', 'take some chances', 'take some credit'],
              answer: 0,
              why: {
                en: 'Take precautions frames the intervention as protection rather than control — useful when you are about to get more involved than someone would like.',
                zh: 'take precautions 把「介入」框成保護，而不是控制——當你準備比對方希望的更插手時，這個說法很好用。',
              },
            },
          ],
        },

        {
          t: 'match',
          en: 'Delegation, in five moves',
          zh: '授權的五個步驟',
          hintEn: 'Click a step on the left, then the question it really asks.',
          hintZh: '先點左邊的步驟，再點它真正在問的那個問題。',
          pairs: [
            { a: 'assess capability', b: 'can this person actually handle it?' },
            { a: 'ask for clarity', b: 'do they know the objective, and is there a plan?' },
            { a: 'assess the consequences', b: 'what happens if they get it wrong?' },
            { a: 'decide the level of autonomy', b: 'how much room does the risk allow?' },
            { a: 'reduce supervision', b: 'have they shown good judgement often enough?' },
          ],
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的看法是？',
          hintEn: 'No right answer. Pick one and say why in English — a sentence or two is enough.',
          hintZh: '沒有標準答案。選一個，然後用英文說說為什麼——一兩句就夠了。',
          items: [
            {
              en: 'A younger trainer will always reach younger employees better than a senior one.',
              zh: '年輕講師永遠比資深講師更能打動年輕員工。',
            },
            {
              en: 'If someone gets annoyed at being asked for a plan, that is information about them.',
              zh: '如果有人因為被要求提出計畫而不高興，那本身就透露了一些關於他的訊息。',
            },
            {
              en: 'Four to seven hours in a classroom is simply too long for anyone.',
              zh: '在教室裡坐四到七個小時，對任何人來說都太久了。',
            },
            {
              en: 'It is better to let someone fail once than to supervise them into doing it right.',
              zh: '與其盯著一個人把事情做對，不如讓他失敗一次。',
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Questions to talk through',
          zh: '可以聊的問題',
          items: [
            {
              en: 'When you plan a group trip, why do you end up being the project manager?',
              zh: '規劃團體旅行的時候，為什麼最後專案經理總是你？',
              starters: [
                { en: 'I make a rough plan first, and then we can talk about the details.', zh: '我會先做出初步計畫，之後我們才有辦法談細節。' },
                { en: 'I assign tasks according to what each person is interested in.', zh: '我會依照每個人有興趣的部分來分配任務。' },
                { en: 'The point is not the itinerary. It is that everyone comes home with the same memories.', zh: '重點不是行程表，而是大家帶著同樣的回憶回家。' },
              ],
            },
            {
              en: 'What would make next week’s training worth four hours of someone’s day?',
              zh: '下週的課程要有什麼，才值得別人拿四個小時來換？',
              starters: [
                { en: 'They can find the information anywhere, so what we add has to be ___.', zh: '資訊他們到處都找得到，所以我們要加上的必須是＿＿。' },
                { en: 'I would cut the lecture down to ___ and spend the rest on ___.', zh: '我會把講述壓縮到＿＿，其餘時間花在＿＿。' },
                { en: 'The part they will remember a month later is ___.', zh: '一個月後他們還記得的部分會是＿＿。' },
              ],
            },
            {
              en: 'Think of someone you supervise. What would they have to show you before you stopped checking?',
              zh: '想一個你帶的人。他要拿出什麼，你才會停止檢查？',
              starters: [
                { en: 'Before I stop checking, I would need to see ___ two or three times.', zh: '在我停止檢查之前，我需要看到＿＿兩三次。' },
                { en: 'I am willing to trust her, but she also needs to ___.', zh: '我願意信任她，但她也需要＿＿。' },
                { en: 'What I am really asking for is not agreement, it is ___.', zh: '我真正要的不是同意，而是＿＿。' },
              ],
            },
            {
              en: 'Where in your own work would you rather use AI as an editor than as an author?',
              zh: '在你自己的工作裡，哪些地方你寧願把 AI 當編輯，而不是當作者？',
              starters: [
                { en: 'I would never let it start ___, but I would happily let it ___.', zh: '我絕不會讓它開始＿＿，但我很樂意讓它＿＿。' },
                { en: 'It is faster, but I would lose ___.', zh: '那樣比較快，但我會失去＿＿。' },
                { en: 'I make the original version myself, and then ___.', zh: '我會自己做出原始版本，然後＿＿。' },
              ],
            },
          ],
        },

        {
          t: 'link',
          href: '../sentence-upgrades/',
          en: 'Sentence Upgrades — the page we talked about again this week',
          zh: '句子升級——這週又談到的那個頁面',
          noteEn: 'Your seven sentences from 25 July, with the revisions and the collocations. Your note on it was right: the voice is flat, so use it for pronunciation and take the intonation from the lesson. The five steps are compare, listen, repeat, produce, and write the improved sentence out by hand.',
          noteZh: '你 7/25 的七個句子，附上修改後的版本與搭配詞。你的意見是對的：那個聲音很平，所以拿它練發音就好，語調從課堂上模仿。五個步驟是：比較、聽、跟讀、造新句，然後把改好的句子用手抄一遍。',
        },

        {
          t: 'task',
          en: 'Homework: seven sentences of your own choosing',
          zh: '作業：自己挑七句',
          instructionEn: 'Go back through this session and choose seven sentences you actually want to be able to say — from the phrase cards, the contrast columns, the gap-fills, anywhere. Write them out by hand, then send them to me on LINE. Choosing is half the work: what is worth keeping is what you would use this month, not what looks impressive.',
          instructionZh: '回頭把這堂課看一遍，挑出七句你真的希望自己能說出口的句子——字卡、對照欄、填空、哪裡都可以。用手抄一遍，然後用 LINE 傳給我。「挑」本身就是一半的工作：值得留下的是你這個月用得到的，而不是看起來很厲害的。',
          prompts: [
            { en: 'Pick sentences you could use at work next week, not ones you admire from a distance.', zh: '挑你下週在工作上用得到的句子，而不是遠遠看著覺得漂亮的那種。' },
            { en: 'At least two should be about people — trust, autonomy, handing something over.', zh: '其中至少兩句要跟「人」有關——信任、自主權、把事情交出去。' },
            { en: 'Take at least one from the corrections — those are your own sentences, so they are the ones you will need again.', zh: '至少從訂正區挑一句——那些是你自己的句子，所以也是你之後最會再用到的。' },
            { en: 'Write each one out by hand. Reading a good sentence is not the same as owning it.', zh: '每一句都用手抄。讀過一個好句子，跟擁有它，是兩回事。' },
          ],
          frames: [
            { en: 'I chose this one because I would actually say it when ___.', zh: '我選這句，是因為我在＿＿的時候真的會這樣說。' },
            { en: 'The one I find hardest to say naturally is ___.', zh: '我最難自然說出口的一句是＿＿。' },
          ],
        },
      ],
    },
  ],
};

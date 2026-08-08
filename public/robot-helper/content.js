/* Teenage Problems and a Robot Helper — the 113 學年度 writing practice.

   Everything on the page comes from this file. The source is a five-part
   handout (translate the sentences, a challenge paragraph, sentence patterns,
   key vocabulary, open questions) built around one sample essay, so the
   sections are kept in the handout's order and lettered the way it letters
   them.

   Two conventions worth knowing before editing:

   - In Part A the Chinese is the prompt, so it is always visible; the English
     is the answer and stays shut. That is the opposite of the other pages,
     where English leads and Chinese hides behind a chip.
   - `hint` is the thing a teacher says before giving the answer away — the
     word to reach for, the structure to copy, the mistake this sentence
     usually attracts. It is not a translation of the note.
*/

const LESSON = {
  kicker: '113 學年度 · 英文寫作練習',
  title: 'Teenage Problems and a Robot Helper',
  titleZh: '青少年的困擾與機器人小幫手',

  intro: {
    en: 'One writing task, taken apart. You get the sample essay and how it is built, then eighteen sentences to translate, the paragraph in one go, the patterns behind it, the words you need — and at the end, your own essay.',
    zh: '一個寫作題目，拆開來練。先看範文和它的結構，再翻譯十八個句子、整段挑戰、背後的句型、必備單字，最後寫出自己的一篇。',
    goalsEn: 'By the end of this page you should be able to:',
    goalsZh: '練完這一頁，你應該可以：',
    goals: [
      {
        en: 'Explain why the sample essay is two paragraphs — problem, then solution.',
        zh: '說出範文為什麼分成兩段：第一段講問題，第二段講解決方法。',
      },
      {
        en: 'Translate all eighteen sentences without looking at the English.',
        zh: '不看英文，把十八個句子翻譯出來。',
      },
      {
        en: 'Use the ten patterns in a sentence of your own.',
        zh: '用十個句型造出自己的句子。',
      },
      {
        en: 'Write your own 120-word answer to the same question.',
        zh: '針對同一題，寫出自己的 120 字作文。',
      },
    ],
  },

  task: {
    en: 'The exam question: three teenage problems are shown in pictures. Choose one, and describe the robot helper you would design to deal with it.',
    zh: '題目方向：圖片中有三個青少年的困擾，選一個，並描述你會設計什麼樣的機器人小幫手來解決它。',
    noteEn: 'The sample essay below chooses mood swings. Everything on this page follows that choice — but the patterns work for any of the three.',
    noteZh: '下面的範文選的是「情緒起伏」。整頁的練習都跟著這個選擇走，但句型換成另外兩個問題也一樣能用。',
  },

  source: {
    en: 'Built from the 113 學年度 writing practice handout: Teenage Problems and a Robot Helper. Nothing is uploaded — what you type stays in this browser.',
    zh: '取材自 113 學年度寫作練習講義〈Teenage Problems and a Robot Helper〉。你打的字只留在這台裝置的瀏覽器裡，不會上傳。',
  },

  parts: [

    // ---------------------------------------------------------------- essay

    {
      id: 'essay',
      kind: 'essay',
      n: '範',
      en: 'The Sample Essay',
      zh: '範文與結構',
      leadEn: 'Read it once for meaning. Then turn the structure on and read it again — every sentence in this essay is doing a job, and the jobs are what you copy into your own writing.',
      leadZh: '先讀一次抓意思，再打開「結構」讀第二次。範文裡每一句都有它的任務，你要學的是這些任務，不是這些字。',
      structureEn: 'Show what each sentence is doing',
      structureZh: '顯示每句的任務',
      proseEn: 'The whole thing, as it would appear on the page',
      proseZh: '整篇連起來的樣子',
      // {n} is filled in by the renderer from the sentences themselves, so the
      // number cannot drift out of step with the essay.
      proseNoteEn: 'A finished answer looks like this: two paragraphs, {n} words. The task asks for about 120, so the sample is generous — yours does not have to run this long.',
      proseNoteZh: '一篇完成的答案就是這個樣子：兩段、{n} 個英文單字。題目要求約 120 字，範文寫得比較寬裕，你不必寫這麼長。',
      paras: [
        {
          label: 'Problem',
          labelZh: '第一段：問題',
          noteEn: 'Name your choice, explain the problem, and show what it costs.',
          noteZh: '選定題目 → 說明問題 → 講出後果。',
          sentences: [
            {
              en: 'Among the three problems shown in the pictures, I would choose mood swings as the problem I want my robot helper to solve.',
              zh: '在圖片中顯示的三個問題中，我會選擇情緒起伏，作為我希望機器人小幫手解決的問題。',
              jobEn: 'Answer the question in sentence one',
              jobZh: '第一句就回答題目：選哪一個',
            },
            {
              en: 'Many teenagers experience sudden changes in emotion.',
              zh: '許多青少年會經歷突然的情緒變化。',
              jobEn: 'Say what the problem is',
              jobZh: '定義問題',
            },
            {
              en: 'They may feel happy in the morning but become angry, anxious, or sad later in the day.',
              zh: '他們可能早上很開心，但下午變得生氣、焦慮或難過。',
              jobEn: 'Make it concrete with an example',
              jobZh: '舉例，讓問題具體',
            },
            {
              en: 'Sometimes, they do not even know why they feel that way.',
              zh: '有時候，他們甚至不知道自己為什麼會有這種感覺。',
              jobEn: 'Add one more detail',
              jobZh: '補一個細節',
            },
            {
              en: 'Mood swings can affect their relationships with family members, classmates, and teachers.',
              zh: '情緒起伏可能會影響他們和家人、同學以及老師的關係。',
              jobEn: 'Widen it — who else it touches',
              jobZh: '擴大範圍：還影響到誰',
            },
            {
              en: 'If they cannot manage their emotions well, they may say hurtful things or make poor decisions.',
              zh: '如果他們不能好好管理自己的情緒，他們可能會說出傷人的話，或做出不好的決定。',
              jobEn: 'Close the paragraph on the consequence',
              jobZh: '用後果收尾，帶出下一段的需求',
            },
          ],
        },
        {
          label: 'Solution',
          labelZh: '第二段：解決方法',
          noteEn: 'What the robot is like, what it should not do, what it does instead, and the result.',
          noteZh: '機器人的特質 → 不該做什麼 → 該做什麼 → 結果。',
          sentences: [
            {
              en: 'My robot helper should be calm, patient, and good at listening.',
              zh: '我的機器人小幫手應該冷靜、有耐心，而且善於傾聽。',
              jobEn: 'Describe the robot — three adjectives, not one',
              jobZh: '描述機器人：一次給三個特質，不要只給一個',
            },
            {
              en: 'It should not simply tell me to “cheer up,” because that usually does not help.',
              zh: '它不應該只是叫我「開心一點」，因為那通常沒有幫助。',
              jobEn: 'Rule out the easy answer — this is what makes the essay sound thoughtful',
              jobZh: '先排除一個爛方法。這一句讓文章看起來有思考過',
            },
            {
              en: 'Instead, it could ask simple questions, help me understand my feelings, and suggest practical actions, such as taking a walk, writing in a journal, or talking to a trusted person.',
              zh: '相反地，它可以問一些簡單的問題、幫助我了解自己的感受，並提供實用的建議，例如散步、寫日記，或和一位值得信任的人聊天。',
              jobEn: 'The functions, with examples — the longest sentence, and the heart of the essay',
              jobZh: '功能加例子。全篇最長的一句，也是重點所在',
            },
            {
              en: 'It could also remind me to sleep enough and take breaks from my phone.',
              zh: '它也可以提醒我要睡得足夠，並且少滑手機、多休息。',
              jobEn: 'One more function, kept short',
              jobZh: '再補一個功能，句子放短，長短交替',
            },
            {
              en: 'With this kind of support, teenagers could learn to manage their emotions more wisely.',
              zh: '有了這樣的幫助，青少年可以更有智慧地管理自己的情緒。',
              jobEn: 'Close on the result, and echo the problem word',
              jobZh: '用結果收尾，並回頭呼應第一段的關鍵字',
            },
          ],
        },
      ],
    },

    // --------------------------------------------------------------- part A

    {
      id: 'part-a',
      kind: 'translate',
      n: 'A',
      en: 'Translate the Sentences',
      zh: '句子翻譯',
      leadEn: 'Eighteen sentences, in the order the essay uses them. Write yours first, take the hint if you are stuck, and only then open the answer.',
      leadZh: '十八個句子，順序跟範文一樣。先自己寫，卡住就看提示，最後才打開答案。',
      items: [
        {
          zh: '在圖片中顯示的三個問題中，我會選擇情緒起伏。',
          en: 'Among the three problems shown in the pictures, I would choose mood swings.',
          keys: ['among', 'shown in', 'would choose'],
          hint: '「在……之中」用 among（三個以上）不是 between。「圖片中顯示的」用過去分詞 shown 修飾前面的 problems，不用寫成 which are shown。',
        },
        {
          zh: '我希望我的機器人小幫手能解決這個問題。',
          en: 'I want my robot helper to solve this problem.',
          keys: ['want ... to ...', 'solve'],
          hint: '「希望某人做某事」是 want somebody to do，中間不加 that。寫 I hope my robot helper can solve 也對，但 want...to 比較簡潔。',
        },
        {
          zh: '許多青少年會經歷突然的情緒變化。',
          en: 'Many teenagers experience sudden changes in emotion.',
          keys: ['experience', 'sudden', 'changes in emotion'],
          hint: 'experience 在這裡是動詞「經歷」。講一般情況用現在簡單式，不要寫 are experiencing。',
        },
        {
          zh: '他們可能早上很開心，但下午變得生氣、焦慮或難過。',
          en: 'They may feel happy in the morning but become angry, anxious, or sad later in the day.',
          keys: ['may', 'feel / become', 'in the morning'],
          hint: 'feel 和 become 後面都接形容詞，不接副詞。三個形容詞並列用 A, B, or C。',
        },
        {
          zh: '有時候，他們甚至不知道自己為什麼會有這種感覺。',
          en: 'Sometimes, they do not even know why they feel that way.',
          keys: ['do not even know', 'why + S + V'],
          hint: '間接問句：why 後面要用直述句語序 they feel，不能寫成 why do they feel。',
        },
        {
          zh: '情緒起伏可能會影響他們和家人、同學以及老師的關係。',
          en: 'Mood swings can affect their relationships with family members, classmates, and teachers.',
          keys: ['affect', 'relationships with'],
          hint: 'affect 是動詞、effect 是名詞，這裡要動詞。「和某人的關係」是 relationship with somebody，不是 relationship to。',
        },
        {
          zh: '如果他們不能好好管理自己的情緒，他們可能會說出傷人的話。',
          en: 'If they cannot manage their emotions well, they may say hurtful things.',
          keys: ['if', 'manage', 'well', 'hurtful'],
          hint: 'if 子句用現在式，主要子句用 may／will。「好好地」用副詞 well 放句尾，不要寫 manage well their emotions。',
        },
        {
          zh: '他們也可能做出不好的決定。',
          en: 'They may also make poor decisions.',
          keys: ['make decisions', 'poor'],
          hint: '「做決定」是 make a decision，不是 do a decision。also 放在助動詞 may 後面。',
        },
        {
          zh: '我的機器人小幫手應該冷靜、有耐心，而且善於傾聽。',
          en: 'My robot helper should be calm, patient, and good at listening.',
          keys: ['should be', 'good at + V-ing'],
          hint: 'should 後面接原形 be。good at 後面接名詞或動名詞，所以是 listening 不是 listen。',
        },
        {
          zh: '它不應該只是叫我「開心一點」。',
          en: 'It should not simply tell me to “cheer up.”',
          keys: ['should not simply', 'tell me to'],
          hint: 'tell somebody to do something。cheer up 是「打起精神」，這裡整句當作引用放在引號裡。',
        },
        {
          zh: '因為那通常沒有幫助。',
          en: '…because that usually does not help.',
          keys: ['because', 'usually'],
          hint: '範文把這句和上一句合成一句：It should not simply tell me to “cheer up,” because that usually does not help. 頻率副詞 usually 放在一般動詞前面、助動詞後面。',
        },
        {
          zh: '相反地，它可以問一些簡單的問題。',
          en: 'Instead, it could ask simple questions.',
          keys: ['Instead,', 'could ask'],
          hint: 'Instead 單獨當轉折副詞放句首，後面要逗號；instead of 才接名詞。這裡用 could 表示「可以、有能力做」，語氣比 can 客氣。',
        },
        {
          zh: '它可以幫助我了解自己的感受。',
          en: 'It could help me understand my feelings.',
          keys: ['help me + 原形動詞', 'feelings'],
          hint: 'help 後面可以直接接原形動詞：help me understand（也可寫 help me to understand）。feeling 當「感受」時多用複數。',
        },
        {
          zh: '它也可以提供一些實用的建議。',
          en: 'It could also suggest practical actions.',
          keys: ['suggest', 'practical'],
          hint: 'suggest 本身就是「建議」，後面直接接名詞，不要寫 suggest me。範文用 practical actions（實際的做法）而不是 suggestions，因為下一句要舉的是動作。',
        },
        {
          zh: '例如散步、寫日記，或和一位值得信任的人聊天。',
          en: '…such as taking a walk, writing in a journal, or talking to a trusted person.',
          keys: ['such as', 'V-ing, V-ing, or V-ing'],
          hint: '這句是接在上一句後面的舉例。such as 後面三件事形式要一致，全部用 V-ing——這叫平行結構，是閱卷老師會看的地方。',
        },
        {
          zh: '它也可以提醒我要睡得足夠。',
          en: 'It could also remind me to sleep enough.',
          keys: ['remind me to'],
          hint: 'remind somebody to do something。enough 修飾動詞時放在動詞後面：sleep enough。',
        },
        {
          zh: '它也可以提醒我要少滑手機、多休息。',
          en: 'It could also remind me to take breaks from my phone.',
          keys: ['take breaks from'],
          hint: '「少滑手機、多休息」英文不必逐字翻，take breaks from my phone 一個片語就講完了。範文把這句和上一句合併：remind me to sleep enough and take breaks from my phone.',
        },
        {
          zh: '有了這樣的幫助，青少年可以更有智慧地管理自己的情緒。',
          en: 'With this kind of support, teenagers could learn to manage their emotions more wisely.',
          keys: ['With ...,', 'learn to', 'more wisely'],
          hint: 'With + 名詞放句首當條件，後面要逗號。wisely 是副詞，兩音節以上的副詞比較級用 more wisely，不是 wiselier。',
        },
      ],
    },

    // --------------------------------------------------------------- part B

    {
      id: 'part-b',
      kind: 'paragraph',
      n: 'B',
      en: 'Challenge Translation',
      zh: '整段挑戰',
      leadEn: 'The same sentences, now as one paragraph. Sentences 1, 2 and 7, 8 have been joined — that joining is the challenge.',
      leadZh: '同樣的句子，這次要一次寫成一段。第 1、2 句和第 7、8 句被合併了，怎麼合就是這題的重點。',
      zhText: '在圖片中顯示的三個問題中，我會選擇情緒起伏，因為我希望我的機器人小幫手能解決這個問題。許多青少年會經歷突然的情緒變化。他們可能早上很開心，但下午變得生氣、焦慮或難過。有時候，他們甚至不知道自己為什麼會有這種感覺。如果他們不能好好管理自己的情緒，他們可能會說出傷人的話，或做出不好的決定。',
      enLines: [
        'Among the three problems shown in the pictures, I would choose mood swings, because I want my robot helper to solve this problem.',
        'Many teenagers experience sudden changes in emotion.',
        'They may feel happy in the morning but become angry, anxious, or sad later in the day.',
        'Sometimes, they do not even know why they feel that way.',
        'If they cannot manage their emotions well, they may say hurtful things or make poor decisions.',
      ],
      hint: '兩個合併點：① 第一句用 because 把「我會選擇……」和「我希望機器人解決它」接起來。② 最後一句用 or 把「說出傷人的話」和「做出不好的決定」接起來，第二個動詞不必再寫一次主詞 they。',
      checkEn: 'Check yours for these',
      checkZh: '對照檢查',
      checks: [
        { en: 'Five sentences, not eight.', zh: '整段是五句，不是八句。' },
        { en: 'A comma before because in the first sentence.', zh: '第一句 because 前面有逗號。' },
        { en: 'The last sentence does not repeat they after or.', zh: '最後一句 or 後面沒有重複主詞 they。' },
        { en: 'Every verb in the present tense.', zh: '全段動詞都用現在式。' },
      ],
    },

    // --------------------------------------------------------------- part C

    {
      id: 'part-c',
      kind: 'patterns',
      n: 'C',
      en: 'Useful Sentence Patterns',
      zh: '常用句型',
      leadEn: 'Ten frames lifted out of the essay. These are the part worth memorising — the topic changes every year, the frames do not.',
      leadZh: '從範文抽出來的十個句型。這才是真正該背的東西：題目每年換，句型不換。',
      items: [
        {
          zh: '在 …… 之中，我會選擇 ……',
          en: 'Among ..., I would choose ...',
          egEn: 'Among the three problems, I would choose stress from schoolwork.',
          egZh: '在這三個問題中，我會選擇課業壓力。',
        },
        {
          zh: '我希望 …… 能 ……',
          en: 'I want ... to ...',
          egEn: 'I want my robot helper to listen without judging me.',
          egZh: '我希望我的機器人小幫手能傾聽，而不評斷我。',
        },
        {
          zh: '許多人會經歷 ……',
          en: 'Many people experience ...',
          egEn: 'Many students experience trouble sleeping before exams.',
          egZh: '許多學生在考試前會有睡不好的問題。',
        },
        {
          zh: '…… 可能會影響 ……',
          en: '... can affect ...',
          egEn: 'Too much screen time can affect their sleep and their mood.',
          egZh: '看太多螢幕可能會影響他們的睡眠和心情。',
        },
        {
          zh: '如果 …… 不能 ……，他們可能會 ……',
          en: 'If ... cannot ..., they may ...',
          egEn: 'If they cannot talk to anyone, they may keep everything inside.',
          egZh: '如果他們不能找人談，他們可能會把事情都悶在心裡。',
        },
        {
          zh: '…… 應該 ……',
          en: '... should be ...',
          egEn: 'My robot helper should be honest, gentle, and always available.',
          egZh: '我的機器人小幫手應該誠實、溫和，而且隨時都在。',
        },
        {
          zh: '它不應該只是 ……',
          en: 'It should not simply ...',
          egEn: 'It should not simply give me the answer to every question.',
          egZh: '它不應該只是把每一題的答案給我。',
        },
        {
          zh: '相反地，它可以 ……',
          en: 'Instead, it could ...',
          egEn: 'Instead, it could show me how to find the answer myself.',
          egZh: '相反地，它可以教我怎麼自己找到答案。',
        },
        {
          zh: '例如 ……',
          en: 'such as ...',
          egEn: 'such as reading, drawing, or going out for a run',
          egZh: '例如閱讀、畫畫，或出去跑步',
        },
        {
          zh: '有了 ……，人們可以 ……',
          en: 'With ..., people could ...',
          egEn: 'With this kind of help, students could enjoy learning again.',
          egZh: '有了這樣的幫助，學生可以重新享受學習。',
        },
      ],
    },

    // --------------------------------------------------------------- part D

    {
      id: 'part-d',
      kind: 'vocab',
      n: 'D',
      en: 'Key Vocabulary',
      zh: '必備單字',
      leadEn: 'Twenty-five words, grouped the way the essay uses them. Tap a card to turn it over.',
      leadZh: '二十五個單字，照範文的用法分成三組。點卡片翻面。',
      groups: [
        {
          en: 'The problem and the feelings',
          zh: '問題與情緒',
          words: [
            { zh: '青少年', en: 'teenager' },
            { zh: '情緒起伏', en: 'mood swings' },
            { zh: '情緒', en: 'emotion' },
            { zh: '情緒變化', en: 'changes in emotion' },
            { zh: '焦慮的', en: 'anxious' },
            { zh: '難過的', en: 'sad' },
            { zh: '生氣的', en: 'angry' },
            { zh: '傷人的', en: 'hurtful' },
          ],
        },
        {
          en: 'People, and what it costs them',
          zh: '人與影響',
          words: [
            { zh: '關係', en: 'relationship' },
            { zh: '家人', en: 'family members' },
            { zh: '同學', en: 'classmates' },
            { zh: '老師', en: 'teachers' },
            { zh: '管理', en: 'manage' },
            { zh: '決定', en: 'decision' },
          ],
        },
        {
          en: 'The robot, and what it offers',
          zh: '機器人與它的建議',
          words: [
            { zh: '冷靜的', en: 'calm' },
            { zh: '有耐心的', en: 'patient' },
            { zh: '善於傾聽', en: 'good at listening' },
            { zh: '打起精神、開心一點', en: 'cheer up' },
            { zh: '建議', en: 'suggest' },
            { zh: '實用的', en: 'practical' },
            { zh: '寫日記', en: 'write in a journal' },
            { zh: '值得信任的人', en: 'a trusted person' },
            { zh: '提醒', en: 'remind' },
            { zh: '休息一下', en: 'take breaks' },
            { zh: '更有智慧地', en: 'more wisely' },
          ],
        },
      ],
    },

    // --------------------------------------------------------------- part E

    {
      id: 'part-e',
      kind: 'open',
      n: 'E',
      en: 'Bonus Challenge',
      zh: '延伸思考',
      leadEn: 'No right answer here. Write two or three sentences for each, then compare with one possible version.',
      leadZh: '這三題沒有標準答案。每題寫兩三句，再和一個參考版本比較。',
      items: [
        {
          zh: '如果你可以設計一個機器人小幫手，你希望它幫助青少年解決什麼問題？',
          en: 'If you could design a robot helper, what problem would you want it to help teenagers solve?',
          starters: [
            'If I could design a robot helper, I would want it to help with ...',
            'Among the problems teenagers face, ... is the most serious, because ...',
          ],
          sample: 'If I could design a robot helper, I would want it to help teenagers with the pressure of schoolwork. Many students in Taiwan study until midnight and still feel that they are not ready. This pressure follows them to school the next morning.',
          sampleZh: '如果我可以設計一個機器人小幫手，我希望它幫助青少年面對課業壓力。台灣許多學生念到半夜，還是覺得自己沒準備好。這種壓力隔天早上又跟著他們到學校。',
        },
        {
          zh: '它應該有哪些功能？',
          en: 'What functions should it have?',
          starters: [
            'It should be able to ...',
            'It could also ..., such as ...',
            'It should not simply ..., because ...',
          ],
          sample: 'It should be able to plan a study schedule with me and remind me to rest before I get too tired. It could also ask me simple questions when I feel nervous, such as “What are you worried about?” It should not simply tell me to study harder, because that only makes me feel worse.',
          sampleZh: '它應該能和我一起安排讀書計畫，並在我太累之前提醒我休息。當我緊張時，它也可以問我一些簡單的問題，例如「你在擔心什麼？」它不應該只是叫我更用功，因為那只會讓我更難受。',
        },
        {
          zh: '你認為這樣的機器人真的能幫助青少年嗎？為什麼？',
          en: 'Do you think such a robot could really help teenagers? Why or why not?',
          starters: [
            'I think it could help, but only if ...',
            'In my opinion, a robot cannot ..., because ...',
            'For this reason, it should support people rather than replace them.',
          ],
          sample: 'I think it could help, but only a little. A robot can remind me, listen to me, and give me practical advice at three in the morning, when no one else is awake. However, it cannot understand my feelings the way a close friend can. For this reason, a robot helper should support people rather than replace them.',
          sampleZh: '我認為它能幫上忙，但只有一點。機器人可以提醒我、聽我說話，也可以在凌晨三點沒有人醒著的時候給我實用的建議。可是它無法像好朋友那樣了解我的感受。因此，機器人小幫手應該是支援人，而不是取代人。',
        },
      ],
    },

    // ---------------------------------------------------------------- write

    {
      id: 'write',
      kind: 'write',
      n: '✍',
      en: 'Write Your Own',
      zh: '自己寫一篇',
      leadEn: 'Same question, your answer. Two paragraphs, about 120 words: the problem you choose, then the robot you would design. Aim for the shape of the sample essay, not its words.',
      leadZh: '同一個題目，換你來寫。兩段、約 120 字：第一段寫你選的問題，第二段寫你設計的機器人。要模仿的是範文的結構，不是它的字。',
      target: 120,
      checkEn: 'Before you hand it in',
      checkZh: '交出去之前',
      checks: [
        { en: 'Sentence one names the problem I chose.', zh: '第一句就講出我選的問題。' },
        { en: 'Paragraph one says what the problem costs — who it affects, what goes wrong.', zh: '第一段講出後果：影響到誰、會發生什麼事。' },
        { en: 'Paragraph two describes the robot with at least three adjectives.', zh: '第二段用至少三個形容詞描述機器人。' },
        { en: 'There is a should not ... Instead, ... pair somewhere.', zh: '文中有一組「不應該……相反地……」。' },
        { en: 'One such as list, and everything in it has the same form.', zh: '有一個 such as 的舉例，而且列出的東西形式一致。' },
        { en: 'The last sentence gives the result, and uses my problem word again.', zh: '最後一句講結果，並再次用到我的關鍵字。' },
        { en: 'Every verb is present tense; would and could are spelled out, not gonna.', zh: '動詞全部現在式；would、could 拼完整。' },
      ],
    },
  ],
};

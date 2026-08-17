/* Chapter 14 — Nouns and Modifiers.

   All eight sections. Blocks only: the section titles live in ../book.js.

   Built from the eight charts of the chapter. What the charts state is all
   here — the patterns, the six adjective slots and their word lists, the
   linking verbs, the -ly rule and its exceptions, the quantity expressions and
   their determiner rule, the agreement rule, and the some-/any- split. The
   practice and the Chinese are written for this page, and the examples are
   this site's own.

   Five things are added and say so on the page, because they are the errors a
   Mandarin speaker actually makes and the charts do not raise them:
     14-2  a slot-counting procedure, since a six-column table is something you
           read and forget rather than something you can use mid-sentence
     14-3  a linking verb takes an adjective, not an adverb — the chart gives
           the pattern but never names the mistake
     14-4  hardly is not the adverb of hard
     14-6  the words all and some never decide the verb; look past of
     14-8  with a negative verb use any-, not no-

   14-2 leans on the order drill harder than any other section in the book so
   far. A list of six slots read off a page is forgotten by the next sentence;
   tapping "a kind old Chinese man" into place is the skill itself.
*/

const CHAPTER = {
  id: 'ch14',

  intro: {
    en: 'Everything in this chapter happens in front of a noun, or immediately after one. English packs its descriptions in a fixed order and Chinese does not, so this is the chapter where a sentence can be built out of correct words and still sound wrong. There is no meaning to get wrong here — only position.',
    zh: '這一章的內容都發生在名詞前面，或緊接在名詞後面。英文把修飾語照固定順序疊在名詞前，中文不是這樣，所以這一章會出現「每個字都對、聽起來卻不對」的句子。這裡沒有意思上的錯誤，只有位置上的錯誤。',
  },

  sections: [
    // ============================================================== 14-1
    {
      n: '14-1',
      blocks: [
        {
          t: 'lead',
          en: 'A noun can be described by an adjective, or by another noun doing an adjective’s job. Both go in front, and neither takes a plural.',
          zh: '名詞可以被形容詞修飾，也可以被另一個名詞修飾。兩者都放在前面，而且都不加複數。',
        },
        {
          t: 'rule',
          en: 'Adjectives can modify nouns. Nouns can also modify other nouns — a grammar book is a book about grammar, and grammar is doing the work of an adjective there. When both appear, the adjective comes first and the noun second.',
          zh: '形容詞可以修飾名詞。名詞也可以修飾另一個名詞——a grammar book 是「文法書」，這裡的 grammar 就在做形容詞的工作。兩者同時出現時，形容詞在前，名詞在後。',
        },
        {
          t: 'table',
          en: 'The three patterns',
          zh: '三種句型',
          head: [
            { en: 'Pattern', zh: '句型' },
            { en: 'Example', zh: '例句' },
          ],
          rows: [
            ['adjective + noun', 'I bought an expensive book.'],
            ['adjective + plural noun', 'I bought expensive books.'],
            ['noun + noun', 'I bought a grammar book.'],
            ['noun + plural noun', 'I bought grammar books.'],
            ['adjective + noun + noun', 'I bought an expensive grammar book.'],
          ],
          rowsZh: [
            ['形容詞 ＋ 名詞', ''],
            ['形容詞 ＋ 複數名詞', ''],
            ['名詞 ＋ 名詞', ''],
            ['名詞 ＋ 複數名詞', ''],
            ['形容詞 ＋ 名詞 ＋ 名詞', ''],
          ],
        },
        {
          t: 'note',
          en: 'An adjective has no plural form',
          zh: '形容詞沒有複數',
          bodyEn: 'However many books there are, the adjective stays as it is. Only the noun at the end of the phrase can be plural.',
          bodyZh: '不管有幾本書，形容詞都不變。只有詞組最後那個名詞可以是複數。',
          good: ['I bought expensive books.'],
          bad: ['I bought expensives books.'],
        },
        {
          t: 'note',
          en: 'A noun used as an adjective stays singular',
          zh: '當形容詞用的名詞維持單數',
          bodyEn: 'A shoe store sells shoes — plenty of them — and is still called a shoe store. The plural belongs to the last noun only, so the modifier drops its -s even when the meaning is plural.',
          bodyZh: 'a shoe store 賣的是很多雙鞋，但仍然叫 a shoe store。複數只屬於最後一個名詞，所以前面的修飾名詞即使意思是複數，也要去掉 -s。',
          good: ['He works at a shoe store.', 'She has three grammar books.'],
          bad: ['He works at a shoes store.', 'She has three grammars books.'],
        },
        {
          t: 'note',
          en: 'When both appear, the adjective goes first',
          zh: '兩者同時出現時，形容詞在前',
          bodyEn: 'The noun modifier sits closest to the noun it modifies, because the two together are effectively one thing — a grammar book — and the adjective then describes the whole of it.',
          bodyZh: '修飾名詞要緊貼被修飾的名詞，因為這兩個字合起來其實是一個東西——a grammar book——形容詞再去描述這整個東西。',
          good: ['I bought an expensive grammar book.'],
          bad: ['I bought a grammar expensive book.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'I need a new computer keyboard.', zh: '我需要一個新的電腦鍵盤。' },
            { en: 'She sent me a long email.', zh: '她寄了一封很長的信給我。' },
            { en: 'We had a short team meeting this morning.', zh: '我們今天早上開了一個短的團隊會議。' },
            { en: 'He works at a shoe store near the station.', zh: '他在車站附近的一家鞋店工作。' },
            { en: 'This is an important customer report.', zh: '這是一份重要的客戶報告。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          hintEn: 'Only the last noun in the phrase can be plural.',
          hintZh: '只有詞組裡最後一個名詞可以是複數。',
          items: [
            {
              text: 'She bought two ___.',
              options: ['grammar books', 'grammars books', 'grammar bookes'],
              answer: 0,
              why: { en: 'The modifier grammar stays singular; the -s goes on book, the last noun.', zh: '修飾語 grammar 維持單數；-s 加在最後那個名詞 book 上。' },
            },
            {
              text: 'He works at a ___.',
              options: ['shoe store', 'shoes store', 'store shoe'],
              answer: 0,
              why: { en: 'The store sells shoes but is called a shoe store. The modifier drops the -s.', zh: '店裡賣鞋，但叫做 a shoe store。修飾語要去掉 -s。' },
            },
            {
              text: 'I read two ___ articles last night.',
              options: ['interesting', 'interestings', 'interesting’s'],
              answer: 0,
              why: { en: 'Adjectives have no plural form at all, whatever follows them.', zh: '形容詞根本沒有複數形式，後面接什麼都一樣。' },
            },
            {
              text: 'I bought an ___.',
              options: ['expensive grammar book', 'grammar expensive book', 'expensive book grammar'],
              answer: 0,
              why: { en: 'Adjective, then noun modifier, then noun. Grammar has to touch book.', zh: '形容詞、修飾名詞、名詞。grammar 必須緊貼 book。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我買了一本很貴的文法書。',
              answer: ['I', 'bought', 'an', 'expensive', 'grammar', 'book.'],
              why: { en: 'An before expensive, because a or an listens to the word straight after it.', zh: 'expensive 前面用 an，因為 a／an 只聽緊接在它後面那個字。' },
            },
            {
              cue: '她需要一個新的電腦鍵盤。',
              answer: ['She', 'needs', 'a', 'new', 'computer', 'keyboard.'],
              why: { en: 'Two modifiers: the adjective new, then the noun computer, then the noun itself.', zh: '兩個修飾語：形容詞 new，然後名詞 computer，最後才是名詞本身。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 14-2
    {
      n: '14-2',
      blocks: [
        {
          t: 'lead',
          en: 'Two adjectives in front of one noun, and English has already decided which goes first. This is the section to drill rather than read.',
          zh: '兩個形容詞放在一個名詞前面，英文已經替你決定了誰在前面。這一節要練，不是要看。',
        },
        {
          t: 'rule',
          en: 'Adjectives follow a particular order. An adjective giving an opinion comes before all the others, and the factual ones then run in a fixed sequence: size, age, colour, nationality, material.',
          zh: '形容詞有固定順序。表達「看法」的形容詞排在所有其他形容詞前面，接著事實類的形容詞依固定順序排列：大小、新舊、顏色、國籍、材質。',
        },
        {
          t: 'table',
          en: 'The usual word order — six slots',
          zh: '慣用順序——六個位置',
          head: [
            { en: 'Slot', zh: '位置' },
            { en: 'What it describes', zh: '描述什麼' },
            { en: 'Examples', zh: '例字' },
          ],
          rows: [
            ['1', 'opinion', 'beautiful, delicious, kind, expensive, interesting'],
            ['2', 'size', 'large, tall, little, small'],
            ['3', 'age', 'young, old, middle-aged, new'],
            ['4', 'colour', 'red, blue, black, brown'],
            ['5', 'nationality', 'Greek, Chinese, Mexican, Japanese'],
            ['6', 'material', 'metal, glass, plastic, wooden'],
          ],
          rowsZh: [
            ['', '看法、評價', ''],
            ['', '大小', ''],
            ['', '新舊、年紀', ''],
            ['', '顏色', ''],
            ['', '國籍', ''],
            ['', '材質', ''],
          ],
        },
        {
          t: 'steps',
          en: 'How to use the table at speaking speed',
          zh: '講話的速度下怎麼用這張表',
          hintEn: 'Written for this page — a six-column table is something you read and forget, not something you can consult mid-sentence.',
          hintZh: '這一段是為本頁寫的——六欄的表格是「看過就忘」的東西，講到一半沒辦法查。',
          items: [
            { en: 'Ask first: is any of these words my opinion rather than a fact? That one goes in front.', zh: '先問：這些字裡面，有沒有哪個是我的看法而不是事實？那一個放最前面。' },
            { en: 'Then order the facts from the least permanent to the most permanent — size and age change, material does not.', zh: '再把事實類的形容詞從「最不固定」排到「最固定」——大小和新舊會變，材質不會。' },
            { en: 'The noun always comes last, and material sits closest to it.', zh: '名詞永遠在最後，材質緊貼著名詞。' },
          ],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'a large red car', zh: '一輛大紅車（大小在顏色前面）' },
            { en: 'a beautiful young woman', zh: '一位美麗的年輕女子（看法在年紀前面）' },
            { en: 'a beautiful Greek island', zh: '一座美麗的希臘島嶼（看法在國籍前面）' },
            { en: 'some delicious Mexican food', zh: '一些美味的墨西哥菜' },
            { en: 'a small glass vase', zh: '一個小玻璃花瓶' },
            { en: 'a kind old Chinese man', zh: '一位親切的中國老先生' },
          ],
        },
        {
          t: 'note',
          en: 'Opinion before everything',
          zh: '看法排在所有形容詞前面',
          bodyEn: 'Beautiful, delicious, kind, expensive and interesting are judgements rather than facts, and a judgement always opens the phrase. The wrong order is not ambiguous — it simply sounds foreign.',
          bodyZh: 'beautiful、delicious、kind、expensive、interesting 都是評價而不是事實，而評價永遠放在最前面。順序錯了不會造成誤解，只是聽起來很不像英文。',
          good: ['a beautiful red car', 'a large red car'],
          bad: ['a red beautiful car', 'a red large car'],
        },
        {
          t: 'note',
          en: 'Nationality adjectives take a capital letter',
          zh: '國籍形容詞要大寫',
          bodyEn: 'Greek, Chinese, Mexican, Korean, Venezuelan, Saudi Arabian — all capitalised, wherever they sit in the sentence. This is the one slot with a spelling rule attached.',
          bodyZh: 'Greek、Chinese、Mexican、Korean、Venezuelan、Saudi Arabian——不管出現在句子哪裡都要大寫。六個位置裡只有這一個附帶拼寫規則。',
          good: ['a beautiful Greek island', 'some delicious Mexican food'],
          bad: ['a beautiful greek island'],
        },
        {
          t: 'note',
          en: 'One or two adjectives, sometimes three, almost never more',
          zh: '一個或兩個形容詞，有時三個，幾乎不會更多',
          bodyEn: 'The six slots exist to settle the order, not to be filled. A beautiful small old brown Greek metal coin is grammatically perfect and nobody has ever said it. In real use, pick the one or two that matter.',
          bodyZh: '這六個位置的作用是「決定順序」，不是「要填滿」。a beautiful small old brown Greek metal coin 文法完全正確，但沒有人這樣說過。實際使用時，只挑那一兩個真正重要的。',
          good: ['a small glass vase', 'a kind old Chinese man'],
        },
        {
          t: 'mcq',
          en: 'Choose the order',
          zh: '選出正確順序',
          hintEn: 'Find the opinion word first. If there is one, it goes in front.',
          hintZh: '先找出「看法」那個字。如果有，它就放最前面。',
          items: [
            {
              text: 'He drives ___.',
              options: ['a large red car', 'a red large car', 'a car large red'],
              answer: 0,
              why: { en: 'Size before colour: slot 2 before slot 4.', zh: '大小在顏色前面：第 2 位在第 4 位前面。' },
            },
            {
              text: 'They stayed on ___.',
              options: ['a beautiful Greek island', 'a Greek beautiful island', 'a beautiful island Greek'],
              answer: 0,
              why: { en: 'Beautiful is an opinion, so it opens the phrase; Greek is nationality, slot 5.', zh: 'beautiful 是看法，放最前面；Greek 是國籍，第 5 位。' },
            },
            {
              text: 'She gave me ___.',
              options: ['a small glass vase', 'a glass small vase', 'a vase small glass'],
              answer: 0,
              why: { en: 'Size before material: slot 2 before slot 6. Material always ends up nearest the noun.', zh: '大小在材質前面：第 2 位在第 6 位前面。材質永遠最靠近名詞。' },
            },
            {
              text: 'We met ___.',
              options: ['a kind old Chinese man', 'an old kind Chinese man', 'a Chinese kind old man'],
              answer: 0,
              why: { en: 'Three slots in a row: opinion, age, nationality. Kind is the judgement, so it leads.', zh: '連續三個位置：看法、年紀、國籍。kind 是評價，所以領頭。' },
            },
            {
              text: 'Adjectives describing nationality are ___.',
              options: ['capitalised', 'always plural', 'placed after the noun'],
              answer: 0,
              why: { en: 'Greek, Chinese, Japanese — a capital letter, always.', zh: 'Greek、Chinese、Japanese——一律大寫。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          hintEn: 'This is the section the drill was built for. Say the phrase aloud once it lands — the order has to become something your mouth knows, not something you work out.',
          hintZh: '這一節就是這個練習存在的理由。排好之後把整句唸出來——這個順序要變成嘴巴記得的東西，不是每次現場推算的東西。',
          items: [
            {
              cue: '一輛大紅車',
              answer: ['a', 'large', 'red', 'car'],
              why: { en: 'Size, then colour.', zh: '先大小，再顏色。' },
            },
            {
              cue: '一座美麗的希臘島嶼',
              answer: ['a', 'beautiful', 'Greek', 'island'],
              why: { en: 'Opinion, then nationality.', zh: '先看法，再國籍。' },
            },
            {
              cue: '一個小玻璃花瓶',
              answer: ['a', 'small', 'glass', 'vase'],
              why: { en: 'Size, then material. Material touches the noun.', zh: '先大小，再材質。材質緊貼名詞。' },
            },
            {
              cue: '一位親切的中國老先生',
              answer: ['a', 'kind', 'old', 'Chinese', 'man'],
              why: { en: 'Opinion, age, nationality — three slots, and the hardest one to say at speed.', zh: '看法、年紀、國籍——三個位置，也是最難順口說出來的一種。' },
            },
            {
              cue: '一些美味的墨西哥菜',
              answer: ['some', 'delicious', 'Mexican', 'food'],
              why: { en: 'Opinion, then nationality. Some rather than a, because food is noncount.', zh: '先看法，再國籍。用 some 不用 a，因為 food 是不可數名詞。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 14-3
    {
      n: '14-3',
      blocks: [
        {
          t: 'lead',
          en: 'A handful of verbs behave like be: what follows them describes the subject, not the action.',
          zh: '有幾個動詞的行為和 be 一樣：後面接的東西描述主詞，不是描述動作。',
        },
        {
          t: 'rule',
          en: 'An adjective can follow be, and it describes the subject of the sentence. A few other verbs work the same way and are called linking verbs: look, smell, feel, taste and sound.',
          zh: '形容詞可以接在 be 後面，用來描述句子的主詞。另外有幾個動詞也是這樣運作的，叫做「連綴動詞」：look、smell、feel、taste、sound。',
        },
        {
          t: 'forms',
          en: 'Be or a linking verb + adjective',
          zh: 'be 或連綴動詞 ＋ 形容詞',
          rows: [
            { sub: 'The flowers', verb: 'were', rest: 'beautiful.', zh: '那些花很美。' },
            { sub: 'The flowers', verb: 'looked', rest: 'beautiful.', zh: '那些花看起來很美。', mark: true },
            { sub: 'The flowers', verb: 'smelled', rest: 'good.', zh: '那些花聞起來很香。', mark: true },
            { sub: 'I', verb: 'feel', rest: 'good.', zh: '我覺得很好。', mark: true },
            { sub: 'Candy', verb: 'tastes', rest: 'sweet.', zh: '糖果嚐起來是甜的。', mark: true },
            { sub: 'That book', verb: 'sounds', rest: 'interesting.', zh: '那本書聽起來很有趣。', mark: true },
          ],
        },
        {
          t: 'note',
          en: 'A linking verb takes an adjective, not an adverb',
          zh: '連綴動詞後面接形容詞，不是副詞',
          bodyEn: 'Written for this page, because the chart gives the pattern without naming the mistake. The word after these five verbs describes the subject, so it is an adjective — and an -ly form there is wrong however natural it feels after a verb.',
          bodyZh: '這一段是為本頁寫的，因為原表格只給句型，沒有指出錯誤在哪。這五個動詞後面的字是描述主詞的，所以要用形容詞——即使動詞後面接 -ly 感覺很自然，在這裡就是錯的。',
          good: ['The soup tastes good.', 'That sounds terrible.'],
          bad: ['The soup tastes well.', 'That sounds terribly.'],
        },
        {
          t: 'contrast',
          en: 'The same verb, two jobs',
          zh: '同一個動詞，兩種工作',
          hintEn: 'When the verb describes the subject, use an adjective. When it describes how an action was done, use an adverb — that is 14-4.',
          hintZh: '動詞在描述主詞時用形容詞；在描述動作怎麼進行時用副詞——那是 14-4 的內容。',
          pairs: [
            {
              a: { en: 'The soup tastes good.', zh: '這湯很好喝。（描述湯）' },
              b: { en: 'She sings well.', zh: '她唱得很好。（描述唱的動作）' },
            },
            {
              a: { en: 'He looked nervous.', zh: '他看起來很緊張。（描述他）' },
              b: { en: 'He looked at me nervously.', zh: '他緊張地看著我。（描述看的動作）' },
            },
          ],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'You look tired today.', zh: '你今天看起來很累。' },
            { en: 'That plan sounds expensive.', zh: '那個計畫聽起來很花錢。' },
            { en: 'The office smells like coffee.', zh: '辦公室聞起來像咖啡。' },
            { en: 'I feel better this morning.', zh: '我今天早上覺得好一點了。' },
            { en: 'This tea tastes strange.', zh: '這茶嚐起來很奇怪。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          items: [
            {
              text: 'The flowers smelled ___.',
              options: ['good', 'well', 'goodly'],
              answer: 0,
              why: { en: 'Smelled is a linking verb here, so the word describes the flowers: an adjective.', zh: '這裡的 smelled 是連綴動詞，所以那個字描述的是花：用形容詞。' },
            },
            {
              text: 'That idea sounds ___.',
              options: ['interesting', 'interestingly', 'interest'],
              answer: 0,
              why: { en: 'Sound is a linking verb: the adjective describes the idea, not the sounding.', zh: 'sound 是連綴動詞：形容詞描述的是這個想法，不是「聽」這個動作。' },
            },
            {
              text: 'You look ___ today.',
              options: ['tired', 'tiredly', 'tiring'],
              answer: 0,
              why: { en: 'Look here describes you, so tired. Tiredly would describe how you performed a look.', zh: '這裡的 look 描述的是你，所以用 tired。tiredly 會變成描述你「看」的方式。' },
            },
            {
              text: 'Which one is NOT a linking verb?',
              options: ['drive', 'taste', 'sound'],
              answer: 0,
              why: { en: 'Look, smell, feel, taste and sound are the five. Drive is an ordinary action verb and takes an adverb.', zh: '五個連綴動詞是 look、smell、feel、taste、sound。drive 是普通動作動詞，後面接副詞。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '那些花聞起來很香。',
              answer: ['The', 'flowers', 'smelled', 'good.'],
              why: { en: 'Subject, linking verb, adjective. No -ly anywhere.', zh: '主詞、連綴動詞、形容詞。整句沒有 -ly。' },
            },
            {
              cue: '那個計畫聽起來很花錢。',
              answer: ['That', 'plan', 'sounds', 'expensive.'],
              why: { en: 'Sounds describes the plan, so the adjective stays bare.', zh: 'sounds 描述的是這個計畫，所以形容詞不加任何字尾。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 14-4
    {
      n: '14-4',
      blocks: [
        {
          t: 'lead',
          en: 'Two words for one idea, and which you need depends on what is being described: the person, or the way they did it.',
          zh: '同一個意思有兩種形式，用哪一種取決於你在描述什麼：那個人，還是他做事的方式。',
        },
        {
          t: 'rule',
          en: 'An adjective describes a noun. An adverb describes the action of a verb. Most adverbs are made by adding -ly to the adjective.',
          zh: '形容詞描述名詞，副詞描述動詞的動作。大部分副詞是在形容詞後面加 -ly 形成的。',
        },
        {
          t: 'table',
          en: 'Add -ly',
          zh: '加 -ly',
          head: [
            { en: 'Adjective', zh: '形容詞' },
            { en: 'Adverb', zh: '副詞' },
          ],
          rows: [
            ['careful', 'carefully'],
            ['slow', 'slowly'],
            ['quick', 'quickly'],
            ['easy', 'easily'],
          ],
        },
        {
          t: 'table',
          en: 'The exceptions — no -ly at all',
          zh: '例外——完全不加 -ly',
          head: [
            { en: 'Adjective', zh: '形容詞' },
            { en: 'Adverb', zh: '副詞' },
          ],
          rows: [
            ['fast', 'fast'],
            ['hard', 'hard'],
            ['early', 'early'],
            ['late', 'late'],
            ['good', 'well'],
          ],
        },
        {
          t: 'contrast',
          en: 'Describing the person, describing the doing',
          zh: '描述人，描述動作',
          pairs: [
            {
              a: { en: 'Ann is a careful driver.', zh: 'Ann 是個小心的駕駛。（描述 Ann）' },
              b: { en: 'Ann drives carefully.', zh: 'Ann 開車很小心。（描述開車這件事）' },
            },
            {
              a: { en: 'John is a fast driver.', zh: 'John 是個開很快的駕駛。（描述 John）' },
              b: { en: 'John drives fast.', zh: 'John 開得很快。（同一個字，這裡是副詞）' },
            },
            {
              a: { en: 'Linda is a good writer.', zh: 'Linda 是個好的作者。（描述 Linda）' },
              b: { en: 'Linda writes well.', zh: 'Linda 寫得很好。（good 的副詞是 well）' },
            },
          ],
        },
        {
          t: 'note',
          en: 'Hardly is not the adverb of hard',
          zh: 'hardly 不是 hard 的副詞',
          bodyEn: 'Written for this page. The adverb of hard is hard: he works hard. Hardly is a different word meaning almost not — he hardly works means he barely works at all, which is close to the opposite of what you meant.',
          bodyZh: '這一段是為本頁寫的。hard 的副詞就是 hard：he works hard。hardly 是另一個字，意思是「幾乎不」——he hardly works 是「他幾乎不工作」，跟你想說的意思幾乎相反。',
          good: ['He works hard.'],
          bad: ['He works hardly.'],
        },
        {
          t: 'note',
          en: 'Well is also an adjective, meaning not sick',
          zh: 'well 也可以是形容詞，意思是「沒生病」',
          bodyEn: 'Usually well is the adverb of good, but after be it can be an adjective about health: Paul was sick last week, but now he is well.',
          bodyZh: '一般來說 well 是 good 的副詞，但在 be 後面它可以是關於健康的形容詞：Paul was sick last week, but now he is well.',
          good: ['Linda writes well.', 'He is well again.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'Please read the contract carefully.', zh: '請仔細閱讀合約。' },
            { en: 'She answered the question easily.', zh: '她輕鬆地回答了那個問題。' },
            { en: 'He arrived early and left late.', zh: '他很早到，很晚走。' },
            { en: 'They finished the report quickly.', zh: '他們很快就完成了報告。' },
            { en: 'My colleague speaks English well.', zh: '我同事英文說得很好。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          hintEn: 'Ask what the word is describing. A noun takes the adjective; an action takes the adverb.',
          hintZh: '問這個字在描述什麼。描述名詞用形容詞，描述動作用副詞。',
          items: [
            {
              text: 'Ann drives ___.',
              options: ['carefully', 'careful', 'carefuly'],
              answer: 0,
              why: { en: 'It describes how she drives, so the adverb — and it takes two l’s.', zh: '它描述的是她開車的方式，所以用副詞——而且是兩個 l。' },
            },
            {
              text: 'Linda writes ___.',
              options: ['well', 'good', 'goodly'],
              answer: 0,
              why: { en: 'Well is the adverb of good. Writes good is the single most common version of this mistake.', zh: 'well 是 good 的副詞。writes good 是這個錯誤最常見的形式。' },
            },
            {
              text: 'John drives ___.',
              options: ['fast', 'fastly', 'fastily'],
              answer: 0,
              why: { en: 'Fast, hard, early and late are the same as adjective and adverb. Fastly does not exist.', zh: 'fast、hard、early、late 的形容詞和副詞同形。fastly 這個字不存在。' },
            },
            {
              text: 'She is a ___ worker and she works ___.',
              options: ['hard … hard', 'hard … hardly', 'hardly … hard'],
              answer: 0,
              why: { en: 'Hard both times. Hardly would say she almost never works.', zh: '兩次都是 hard。用 hardly 會變成她幾乎不工作。' },
            },
            {
              text: 'They finished the report ___.',
              options: ['quickly', 'quick', 'quickily'],
              answer: 0,
              why: { en: 'It describes the finishing, so the -ly form.', zh: '它描述的是「完成」這個動作，所以用 -ly 形式。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '請仔細閱讀合約。',
              answer: ['Please', 'read', 'the', 'contract', 'carefully.'],
              why: { en: 'The adverb goes after the object here, not between the verb and the object.', zh: '這裡副詞放在受詞後面，不是放在動詞和受詞中間。' },
            },
            {
              cue: '我同事英文說得很好。',
              answer: ['My', 'colleague', 'speaks', 'English', 'well.'],
              why: { en: 'Well, not good — and after English, not before it.', zh: '用 well 不用 good——而且放在 English 後面，不是前面。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 14-5
    {
      n: '14-5',
      blocks: [
        {
          t: 'lead',
          en: 'Four ways to say how much of something, and two small words that cannot be left out.',
          zh: '四種表達「多少」的說法，以及兩個不能省略的小字。',
        },
        {
          t: 'rule',
          en: 'All of, most of and some of express quantities. All of is 100%, most of is a large part but not all, and some of is a small or medium part. Almost all of is close to 100%.',
          zh: 'all of、most of、some of 用來表達數量。all of 是 100%，most of 是大部分但不是全部，some of 是一小部分或一部分。almost all of 是接近 100%。',
        },
        {
          t: 'table',
          en: 'How much each one means',
          zh: '各自代表多少',
          head: [
            { en: 'Expression', zh: '用法' },
            { en: 'How much', zh: '多少' },
            { en: 'Example', zh: '例句' },
          ],
          rows: [
            ['all of', '100%', 'Rita ate all of the food on her plate.'],
            ['almost all of', 'close to 100%', 'Matt ate almost all of his food.'],
            ['most of', 'a large part, but not all', 'Mike ate most of his food.'],
            ['some of', 'a small or medium part', 'Susie ate some of her food.'],
          ],
          rowsZh: [
            ['', '百分之百', ''],
            ['', '接近百分之百', ''],
            ['', '大部分，但不是全部', ''],
            ['', '一小部分或一部分', ''],
          ],
        },
        {
          t: 'note',
          en: 'These expressions need a determiner after of',
          zh: 'of 後面必須有限定詞',
          bodyEn: 'Something has to say which food you mean: the, his, her, my, this. Most of food is not English, because most of asks for a portion of a specific thing.',
          bodyZh: '一定要有東西指明是「哪個食物」：the、his、her、my、this。most of food 不是英文，因為 most of 是要取「某個特定事物」的一部分。',
          good: ['Most of the food was cold.', 'Most of his food was cold.'],
          bad: ['Most of food was cold.'],
        },
        {
          t: 'note',
          en: 'Almost cannot swallow all',
          zh: 'almost 不能吃掉 all',
          bodyEn: 'Almost goes with all, and all stays. There is no almost of.',
          bodyZh: 'almost 要和 all 一起用，而 all 必須留著。沒有 almost of 這種說法。',
          good: ['Matt ate almost all of his food.'],
          bad: ['Matt ate almost of his food.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'All of the team came to the meeting.', zh: '團隊所有人都來開會了。' },
            { en: 'Almost all of my clients are in Taipei.', zh: '我幾乎所有的客戶都在台北。' },
            { en: 'Most of the report is finished.', zh: '報告大部分完成了。' },
            { en: 'Some of these files are old.', zh: '這些檔案有一些是舊的。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          items: [
            {
              text: 'Mike ate ___ his food.',
              options: ['most of', 'most', 'the most'],
              answer: 0,
              why: { en: 'Of is part of the expression when a determiner follows: most of his food.', zh: '後面有限定詞時，of 是這個用法的一部分：most of his food。' },
            },
            {
              text: 'Matt ate ___ his food.',
              options: ['almost all of', 'almost of', 'almost'],
              answer: 0,
              why: { en: 'Almost works with all, and all cannot be dropped.', zh: 'almost 要搭配 all，而 all 不能省略。' },
            },
            {
              text: '___ was cold by the time we sat down.',
              options: ['Most of the food', 'Most of food', 'Most food of'],
              answer: 0,
              why: { en: 'The determiner the says which food. Without it the phrase has nothing to take a portion of.', zh: '限定詞 the 指明是哪些食物。少了它，這個詞組就沒有東西可以「取一部分」。' },
            },
            {
              text: 'Some of ___ are old.',
              options: ['these files', 'files', 'file'],
              answer: 0,
              why: { en: 'These is the determiner. Some of files has nothing pointing at which files.', zh: 'these 就是限定詞。some of files 沒有任何字指明是哪些檔案。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我幾乎所有的客戶都在台北。',
              answer: ['Almost', 'all', 'of', 'my', 'clients', 'are', 'in', 'Taipei.'],
              why: { en: 'Almost, all, of, then the determiner my. Four words before the noun arrives.', zh: 'almost、all、of，然後限定詞 my。名詞出現前有四個字。' },
            },
            {
              cue: '報告大部分完成了。',
              answer: ['Most', 'of', 'the', 'report', 'is', 'finished.'],
              why: { en: 'Report is singular, so is — which is 14-6.', zh: 'report 是單數，所以用 is——這就是 14-6 的內容。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 14-6
    {
      n: '14-6',
      blocks: [
        {
          t: 'lead',
          en: 'The subject is now three or four words long, and only one of them decides the verb.',
          zh: '主詞現在有三四個字長，但只有其中一個字決定動詞。',
        },
        {
          t: 'rule',
          en: 'When a subject includes an expression of quantity, the verb agrees with the noun that immediately follows of. A singular noun takes a singular verb, a plural noun takes a plural verb.',
          zh: '當主詞包含數量表達時，動詞要和緊接在 of 後面的名詞一致。單數名詞配單數動詞，複數名詞配複數動詞。',
        },
        {
          t: 'forms',
          en: 'The noun after of decides',
          zh: '由 of 後面的名詞決定',
          rows: [
            { sub: 'All of my work', verb: 'is', rest: 'finished.', zh: '我的工作全部完成了。' },
            { sub: 'All of my friends', verb: 'are', rest: 'kind.', zh: '我的朋友都很親切。', mark: true },
            { sub: 'Some of my homework', verb: 'is', rest: 'finished.', zh: '我的作業有一部分完成了。' },
            { sub: 'Some of my friends', verb: 'are', rest: 'coming to the party.', zh: '我有幾個朋友會來派對。', mark: true },
            { sub: 'A lot of the work', verb: 'is', rest: 'done.', zh: '很多工作已經完成了。' },
            { sub: 'A lot of the files', verb: 'are', rest: 'missing.', zh: '很多檔案不見了。', mark: true },
          ],
        },
        {
          t: 'note',
          en: 'All and some never decide the verb — look past of',
          zh: 'all 和 some 從來不決定動詞——要看 of 後面',
          bodyEn: 'Written for this page. All feels plural and some feels vague, so the eye stops there. It should not: the word to read is the noun after of, and it is often two words further along than you looked.',
          bodyZh: '這一段是為本頁寫的。all 感覺像複數、some 感覺模糊，所以眼睛停在那裡。不該停：真正要看的是 of 後面那個名詞，而它通常比你看的位置再往後兩個字。',
          good: ['All of my work is finished.', 'All of my friends are kind.'],
          bad: ['All of my work are finished.', 'All of my friends is kind.'],
        },
        {
          t: 'table',
          en: 'The common expressions of quantity',
          zh: '常見的數量表達',
          head: [
            { en: 'Expression', zh: '用法' },
            { en: 'Meaning', zh: '意思' },
          ],
          rows: [
            ['all of', '全部'],
            ['almost all of', '幾乎全部'],
            ['most of', '大部分'],
            ['a lot of', '很多'],
            ['half of', '一半'],
            ['some of', '一部分'],
          ],
          zhCol: 1,
        },
        {
          t: 'mcq',
          en: 'Choose the verb',
          zh: '選出正確動詞',
          hintEn: 'Find the noun straight after of, and ignore everything before it.',
          hintZh: '找出 of 後面那個名詞，前面的全部忽略。',
          items: [
            {
              text: 'All of my work ___ finished.',
              options: ['is', 'are', 'be'],
              answer: 0,
              why: { en: 'Work is singular here, so is — even though all sounds plural.', zh: '這裡的 work 是單數，所以用 is——即使 all 聽起來像複數。' },
            },
            {
              text: 'All of my friends ___ kind.',
              options: ['are', 'is', 'was'],
              answer: 0,
              why: { en: 'Friends is plural, so are. The same all, a different verb.', zh: 'friends 是複數，所以用 are。同一個 all，動詞不同。' },
            },
            {
              text: 'Some of my homework ___ finished.',
              options: ['is', 'are', 'have'],
              answer: 0,
              why: { en: 'Homework is a noncount noun and counts as singular.', zh: 'homework 是不可數名詞，視為單數。' },
            },
            {
              text: 'A lot of the files ___ missing.',
              options: ['are', 'is', 'was'],
              answer: 0,
              why: { en: 'Files is plural. A lot of does not decide anything on its own.', zh: 'files 是複數。a lot of 本身不決定任何事。' },
            },
            {
              text: 'In a sentence like this, the verb agrees with ___.',
              options: ['the noun after of', 'the word all or some', 'the last noun in the sentence'],
              answer: 0,
              why: { en: 'The noun immediately after of, every time. That is the whole rule.', zh: '每次都是緊接在 of 後面的那個名詞。這就是全部的規則。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我的朋友都很親切。',
              answer: ['All', 'of', 'my', 'friends', 'are', 'kind.'],
              why: { en: 'Friends is plural, so are.', zh: 'friends 是複數，所以用 are。' },
            },
            {
              cue: '我的工作全部完成了。',
              answer: ['All', 'of', 'my', 'work', 'is', 'finished.'],
              why: { en: 'Work is singular, so is. Same opening, different verb.', zh: 'work 是單數，所以用 is。開頭一樣，動詞不同。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 14-7
    {
      n: '14-7',
      blocks: [
        {
          t: 'lead',
          en: 'Every means all of them, and then behaves as if it meant one of them.',
          zh: 'every 的意思是「全部」，但它的行為卻像「一個」。',
        },
        {
          t: 'rule',
          en: 'Every is followed by a singular noun and a singular verb. Every student has a book and All of the students have books mean essentially the same thing, but the two halves of the sentence have to match the word you chose.',
          zh: 'every 後面接單數名詞和單數動詞。Every student has a book 和 All of the students have books 意思基本相同，但整句的形式必須跟著你選的那個字。',
        },
        {
          t: 'forms',
          en: 'Every, everyone, everybody, everything — all singular',
          zh: 'every、everyone、everybody、everything——全部是單數',
          rows: [
            { sub: 'Every student', verb: 'has', rest: 'a book.', zh: '每個學生都有一本書。' },
            { sub: 'All of the students', verb: 'have', rest: 'books.', zh: '所有學生都有書。', mark: true },
            { sub: 'Everyone', verb: 'has', rest: 'a book.', zh: '每個人都有一本書。' },
            { sub: 'Everybody', verb: 'has', rest: 'a book.', zh: '每個人都有一本書。' },
            { sub: 'Everything', verb: 'is', rest: 'okay.', zh: '一切都好。' },
          ],
        },
        {
          t: 'note',
          en: 'Every takes no of, and no plural noun',
          zh: 'every 不接 of，也不接複數名詞',
          bodyEn: 'Two mistakes, both from thinking of every as a quantity like all of. It is not — every counts them one at a time, so the noun and the verb both stay singular.',
          bodyZh: '兩個錯誤，都來自把 every 當成 all of 那樣的數量詞。它不是——every 是一個一個算的，所以名詞和動詞都維持單數。',
          good: ['Every student has a book.', 'All of the students have books.'],
          bad: ['Every of the students has a book.', 'Every students have books.'],
        },
        {
          t: 'table',
          en: 'Everyone or everybody: the same meaning, different registers',
          zh: 'everyone 或 everybody：意思相同，場合不同',
          head: [
            { en: 'Word', zh: '用字' },
            { en: 'Where it is more common', zh: '較常出現的場合' },
          ],
          rows: [
            ['everyone', '書面'],
            ['everybody', '口語'],
          ],
          zhCol: 1,
        },
        {
          t: 'note',
          en: 'The -one and -body split runs through the whole family',
          zh: '-one 與 -body 的分工貫穿整個家族',
          bodyEn: 'In general the forms with one are more common in writing and the forms with body are more common in speaking. That holds for everyone and everybody here, and for someone and somebody in 14-8.',
          bodyZh: '一般來說，-one 結尾的形式較常用於書面，-body 結尾的形式較常用於口語。這裡的 everyone 與 everybody 如此，14-8 的 someone 與 somebody 也是。',
          good: ['Everyone has a book.', 'Everybody has a book.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'Every client gets a written summary.', zh: '每個客戶都會收到書面摘要。' },
            { en: 'Everyone in the team was at the meeting.', zh: '團隊裡每個人都在會議上。' },
            { en: 'Everybody knows about the new deadline.', zh: '每個人都知道新的期限。' },
            { en: 'I looked at everything in the museum.', zh: '我把博物館裡的每樣東西都看過了。' },
            { en: 'Everything is okay.', zh: '一切都好。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          items: [
            {
              text: '___ has a book.',
              options: ['Every student', 'Every students', 'Every of the students'],
              answer: 0,
              why: { en: 'Every plus a singular noun. No of, and no -s.', zh: 'every 加單數名詞。不加 of，也不加 -s。' },
            },
            {
              text: 'Everyone ___ a book.',
              options: ['has', 'have', 'are having'],
              answer: 0,
              why: { en: 'Everyone takes a singular verb, however many people it covers.', zh: 'everyone 配單數動詞，不管它指多少人。' },
            },
            {
              text: 'Everything ___ okay.',
              options: ['is', 'are', 'were'],
              answer: 0,
              why: { en: 'Everything means each thing and takes a singular verb.', zh: 'everything 的意思是「每樣東西」，配單數動詞。' },
            },
            {
              text: 'All of the students ___ books.',
              options: ['have', 'has', 'is having'],
              answer: 0,
              why: { en: 'This is the other way of saying it, and here students is plural — so have. Compare 14-6.', zh: '這是另一種說法，這裡 students 是複數——所以用 have。對照 14-6。' },
            },
            {
              text: 'In writing, the more common choice is ___.',
              options: ['everyone', 'everybody', 'every body'],
              answer: 0,
              why: { en: 'The -one forms lean written, the -body forms lean spoken. Every body as two words is something else entirely.', zh: '-one 形式偏書面，-body 形式偏口語。every body 分成兩個字是完全不同的意思。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '每個學生都有一本書。',
              answer: ['Every', 'student', 'has', 'a', 'book.'],
              why: { en: 'Singular all the way through: student, has, a book.', zh: '整句都是單數：student、has、a book。' },
            },
            {
              cue: '所有學生都有書。',
              answer: ['All', 'of', 'the', 'students', 'have', 'books.'],
              why: { en: 'The same meaning built the other way, and now everything is plural.', zh: '同樣的意思用另一種方式組成，現在全部變複數。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 14-8
    {
      n: '14-8',
      blocks: [
        {
          t: 'lead',
          en: 'One idea, six words, and the shape of the sentence chooses which one you get.',
          zh: '一個概念、六個字，由句子的形式決定你該用哪一個。',
        },
        {
          t: 'rule',
          en: 'In affirmative statements, use a form of some: something, someone, somebody. In negative statements, use a form of any: anything, anyone, anybody. In questions, either family is possible.',
          zh: '肯定句用 some 系列：something、someone、somebody。否定句用 any 系列：anything、anyone、anybody。問句兩個系列都可以。',
        },
        {
          t: 'table',
          en: 'Which family the sentence asks for',
          zh: '句型決定用哪一個系列',
          head: [
            { en: 'Sentence type', zh: '句型' },
            { en: 'Form used', zh: '使用形式' },
            { en: 'Example', zh: '例句' },
          ],
          rows: [
            ['affirmative statement', 'a form of some', 'Mari bought something.'],
            ['negative statement', 'a form of any', 'Joe didn’t buy anything.'],
            ['question', 'some or any', 'Did Sam buy anything?'],
          ],
          rowsZh: [
            ['肯定句', 'some 系列', ''],
            ['否定句', 'any 系列', ''],
            ['問句', 'some 或 any 皆可', ''],
          ],
        },
        {
          t: 'table',
          en: 'The six words, paired',
          zh: '六個字，成對排列',
          head: [
            { en: 'Affirmative', zh: '肯定' },
            { en: 'Negative', zh: '否定' },
            { en: 'Refers to', zh: '指的是' },
          ],
          rows: [
            ['something', 'anything', 'a thing'],
            ['someone', 'anyone', 'a person — written'],
            ['somebody', 'anybody', 'a person — spoken'],
          ],
          rowsZh: [
            ['', '', '東西'],
            ['', '', '人——書面較常用'],
            ['', '', '人——口語較常用'],
          ],
        },
        {
          t: 'note',
          en: 'With a negative verb, use any- and not no-',
          zh: '動詞已經否定時用 any-，不要用 no-',
          bodyEn: 'Written for this page. Didn’t has already made the sentence negative, so the pronoun must not negate it a second time. Nobody and nothing are correct English, but only where the verb is positive: I saw nobody.',
          bodyZh: '這一段是為本頁寫的。didn’t 已經讓句子變成否定了，所以代名詞不能再否定第二次。nobody 和 nothing 是正確的英文，但只用在動詞是肯定的時候：I saw nobody.',
          good: ['Joe didn’t see anybody.', 'Joe saw nobody.'],
          bad: ['Joe didn’t see nobody.', 'Joe didn’t buy nothing.'],
        },
        {
          t: 'note',
          en: 'In a question, both are possible — but they lean differently',
          zh: '問句兩者都可以，但語感不同',
          bodyEn: 'Did Sam buy something? and Did Sam buy anything? are both correct. The some- version quietly expects that he did; the any- version is genuinely open. Neither is a mistake, so this is a choice rather than a rule.',
          bodyZh: 'Did Sam buy something? 和 Did Sam buy anything? 都正確。some 系列隱含「他應該買了」的預期；any 系列則是真正的開放式提問。兩者都不算錯，所以這是選擇，不是規則。',
          good: ['Did Sam buy something?', 'Did Sam buy anything?'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'Mari bought something for the office.', zh: 'Mari 買了東西給辦公室。' },
            { en: 'Someone called while you were out.', zh: '你出去的時候有人打電話來。' },
            { en: 'Joe didn’t buy anything.', zh: 'Joe 什麼都沒買。' },
            { en: 'I didn’t see anyone in the meeting room.', zh: '我在會議室沒看到任何人。' },
            { en: 'Did anybody answer the phone?', zh: '有人接電話嗎？' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          hintEn: 'Look at the verb first. If it is already negative, the pronoun is any-.',
          hintZh: '先看動詞。如果動詞已經是否定，代名詞就用 any-。',
          items: [
            {
              text: 'Mari bought ___.',
              options: ['something', 'anything', 'nothing at all of'],
              answer: 0,
              why: { en: 'An affirmative statement takes a some- form.', zh: '肯定句用 some 系列。' },
            },
            {
              text: 'Joe didn’t buy ___.',
              options: ['anything', 'nothing', 'something'],
              answer: 0,
              why: { en: 'Didn’t has made it negative, so the pronoun is any-. Didn’t buy nothing negates twice.', zh: 'didn’t 已經是否定了，所以代名詞用 any-。didn’t buy nothing 否定了兩次。' },
            },
            {
              text: 'I didn’t see ___ in the meeting room.',
              options: ['anyone', 'someone', 'no one’s'],
              answer: 0,
              why: { en: 'Negative verb, any- form. Someone here would contradict the didn’t.', zh: '動詞否定，用 any 系列。這裡用 someone 會和 didn’t 互相矛盾。' },
            },
            {
              text: 'Did Sam see ___? (a genuinely open question)',
              options: ['anybody', 'nobody', 'everybody’s'],
              answer: 0,
              why: { en: 'Both families work in a question, but the any- form is the neutral, open one.', zh: '問句兩個系列都可以，但 any 系列是中性、開放的那一個。' },
            },
            {
              text: 'In speaking, the more common word for a person is ___.',
              options: ['somebody', 'someone', 'some person'],
              answer: 0,
              why: { en: 'The -body forms lean spoken and the -one forms lean written, as in 14-7.', zh: '-body 形式偏口語，-one 形式偏書面，和 14-7 一樣。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: 'Joe 什麼都沒買。',
              answer: ['Joe', 'didn’t', 'buy', 'anything.'],
              why: { en: 'One negative only: didn’t, then any-.', zh: '只否定一次：didn’t，然後 any 系列。' },
            },
            {
              cue: '你出去的時候有人打電話來。',
              answer: ['Someone', 'called', 'while', 'you', 'were', 'out.'],
              why: { en: 'Affirmative, so some-. And someone takes a singular verb, like everyone in 14-7.', zh: '肯定句，所以用 some 系列。someone 配單數動詞，和 14-7 的 everyone 一樣。' },
            },
          ],
        },
      ],
    },
  ],
};

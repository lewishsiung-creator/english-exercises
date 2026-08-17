/* Chapter 1 — Using Be.

   This file supplies blocks only. The chapter title, the section numbers and
   their titles all live in ../book.js, and the renderer walks that map — so a
   section listed there and missing here appears with its heading and a line
   saying the content is not written yet, rather than silently disappearing.

   Two sections are written: 1-1 and 1-6. Between them they use every block
   type the renderer has, which is what makes them worth reading first — 1-1
   is a plain teaching section, 1-6 is one with a real trap in it. The other
   seven are waiting for content.

   Block types: lead, rule, forms, table, egs, contrast, note, steps, mcq,
   order. The header comment of ../render.js describes each one; the shapes
   used below are the whole vocabulary.
*/

const CHAPTER = {
  id: 'ch01',

  intro: {
    en: 'Be is the first verb, and the one adult learners drop. Mandarin does not need a verb to join a subject to an adjective, so 我很忙 becomes “I busy” before it becomes “I am busy”. This chapter is that habit, unlearnt.',
    zh: 'be 動詞是第一個動詞，也是成人學習者最常漏掉的一個。中文的「我很忙」不需要動詞連接主詞與形容詞，所以英文常常先說成 I busy，才慢慢變成 I am busy。這一章就是把這個習慣改過來。',
  },

  sections: [
    // ============================================================== 1-1
    {
      n: '1-1',
      blocks: [
        {
          t: 'lead',
          en: 'Three forms of one verb, and which you use depends only on the subject in front of it.',
          zh: '同一個動詞有三種形式，用哪一個，只看它前面的主詞。',
        },
        {
          t: 'rule',
          en: 'A singular pronoun is one person or one thing: I, you, she, he, it. Each one takes its own form of be, and the form never changes for any other reason.',
          zh: '單數代名詞指一個人或一個東西：I、you、she、he、it。每一個都有自己搭配的 be 動詞形式，而且不會因為其他原因改變。',
        },
        {
          t: 'forms',
          en: 'Singular pronouns + be',
          zh: '單數代名詞 ＋ be',
          rows: [
            { sub: 'I', verb: 'am', rest: 'a manager.', zh: '我是主管。', mark: true },
            { sub: 'You', verb: 'are', rest: 'a manager.', zh: '你是主管。' },
            { sub: 'She', verb: 'is', rest: 'a manager.', zh: '她是主管。' },
            { sub: 'He', verb: 'is', rest: 'a manager.', zh: '他是主管。' },
            { sub: 'It', verb: 'is', rest: 'a good company.', zh: '這是一間好公司。' },
          ],
        },
        {
          t: 'note',
          en: 'am belongs to I and to nothing else',
          zh: 'am 只跟 I 走',
          bodyEn: 'am has exactly one subject in the whole language. If the subject is not I, the word is not am.',
          bodyZh: '整個英文裡，am 只有一個主詞。主詞不是 I，就不會是 am。',
          good: ['I am late.', 'She is late.'],
          bad: ['She am late.', 'I is late.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'I am in a meeting until three.', zh: '我要開會到三點。' },
            { en: 'You are the first person here.', zh: '你是第一個到的人。' },
            { en: 'She is our new colleague.', zh: '她是我們的新同事。' },
            { en: 'He is on the phone right now.', zh: '他現在在講電話。' },
            { en: 'It is a long report.', zh: '那是一份很長的報告。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          hintEn: 'Look only at the subject. Nothing after the blank changes the answer.',
          hintZh: '只看主詞。空格後面的字不會影響答案。',
          items: [
            {
              text: 'I ___ ready.',
              options: ['am', 'is', 'are'],
              answer: 0,
              why: { en: 'I takes am — always, and it is the only subject that does.', zh: 'I 搭配 am，而且只有 I 搭配 am。' },
            },
            {
              text: 'He ___ my supervisor.',
              options: ['am', 'is', 'are'],
              answer: 1,
              why: { en: 'he, she and it all take is.', zh: 'he、she、it 都搭配 is。' },
            },
            {
              text: 'You ___ early today.',
              options: ['am', 'is', 'are'],
              answer: 2,
              why: { en: 'you takes are, whether it means one person or several.', zh: 'you 搭配 are，不論指一個人還是很多人。' },
            },
            {
              text: 'It ___ a difficult question.',
              options: ['am', 'is', 'are'],
              answer: 1,
              why: { en: 'it is one thing, so is. A question is a thing, not a person.', zh: 'it 是一個東西，所以用 is。question 是東西，不是人。' },
            },
            {
              text: 'She ___ from Taichung.',
              options: ['am', 'is', 'are'],
              answer: 1,
              why: { en: 'she takes is. Where she is from does not affect the verb.', zh: 'she 搭配 is。她來自哪裡不影響動詞。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          hintEn: 'The subject comes first, then be, then the rest. Tap a word you have placed to take it back.',
          hintZh: '先主詞，再 be 動詞，最後其他部分。點已放上的字可以收回。',
          items: [
            {
              cue: '他是工程師。',
              answer: ['He', 'is', 'an', 'engineer.'],
              why: { en: 'Subject + be + a job. English needs a or an before a singular job.', zh: '主詞 ＋ be ＋ 職業。英文的單數職業前面一定要有 a 或 an。' },
            },
            {
              cue: '我今天很忙。',
              answer: ['I', 'am', 'busy', 'today.'],
              why: { en: 'Mandarin joins 我 to 忙 with 很; English joins them with am.', zh: '中文用「很」連接「我」和「忙」，英文用 am。' },
            },
            {
              cue: '她在辦公室。',
              answer: ['She', 'is', 'at', 'the', 'office.'],
              why: { en: 'be also says where someone is — 1-8 is the whole of that.', zh: 'be 也能表達人在哪裡——1-8 專講這個。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 1-6
    {
      n: '1-6',
      blocks: [
        {
          t: 'lead',
          en: 'To make a be sentence negative, one word goes in one place. There is nothing else to do.',
          zh: 'be 動詞的句子要變否定，只需要一個字放在一個位置。沒有別的動作。',
        },
        {
          t: 'rule',
          en: 'Put not directly after am, is or are. The verb does not change, the subject does not change, and no extra word is needed anywhere.',
          zh: '把 not 直接放在 am、is、are 後面。動詞不變、主詞不變，其他地方也不用加字。',
        },
        {
          t: 'forms',
          en: 'be + not',
          zh: 'be ＋ not',
          rows: [
            { sub: 'I', verb: 'am not', rest: 'available.', zh: '我沒空。' },
            { sub: 'You', verb: 'are not', rest: 'late.', zh: '你沒有遲到。' },
            { sub: 'She', verb: 'is not', rest: 'in the office.', zh: '她不在辦公室。' },
            { sub: 'They', verb: 'are not', rest: 'ready.', zh: '他們還沒準備好。' },
          ],
        },
        {
          t: 'steps',
          en: 'Making a be sentence negative',
          zh: '把 be 動詞句改成否定',
          items: [
            { en: 'Find the form of be: am, is or are.', zh: '找出 be 動詞：am、is 或 are。' },
            { en: 'Put not immediately after it.', zh: '把 not 直接放在它後面。' },
            { en: 'Leave everything else exactly as it was.', zh: '其他部分完全不動。' },
          ],
        },
        {
          t: 'table',
          en: 'The two short forms',
          zh: '兩種縮寫',
          head: [
            { en: 'Full', zh: '完整' },
            { en: 'Short form 1', zh: '縮寫一' },
            { en: 'Short form 2', zh: '縮寫二' },
          ],
          rows: [
            ['I am not', "I'm not", '—'],
            ['you are not', "you're not", "you aren't"],
            ['she is not', "she's not", "she isn't"],
            ['we are not', "we're not", "we aren't"],
            ['they are not', "they're not", "they aren't"],
          ],
        },
        {
          t: 'note',
          en: 'There is no amn’t',
          zh: '英文沒有 amn’t',
          bodyEn: 'Every other subject has two short forms; I has only one. The row above is not a gap in the table — the word simply does not exist.',
          bodyZh: '其他主詞都有兩種縮寫，只有 I 只有一種。上表那個「—」不是漏了，而是這個字根本不存在。',
          good: ["I'm not sure.", 'I am not sure.'],
          bad: ["I amn't sure."],
        },
        {
          t: 'contrast',
          en: 'not, and the word that is not not',
          zh: 'not 與那個不是 not 的字',
          hintEn: 'no answers a question or marks a quantity. not makes a verb negative. They are not interchangeable.',
          hintZh: 'no 用來回答問句或表示數量。not 用來否定動詞。兩者不能互換。',
          pairs: [
            {
              a: { en: 'He is not the manager.', zh: '他不是那位主管。' },
              b: { en: 'He is no longer the manager.', zh: '他已經不是那位主管了。' },
            },
            {
              a: { en: 'I am not free on Friday.', zh: '我星期五沒空。' },
              b: { en: 'I have no time on Friday.', zh: '我星期五沒有時間。' },
            },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the negative',
          zh: '選出正確的否定',
          items: [
            {
              text: 'She ___ in the meeting room.',
              options: ["isn't", "amn't", 'no is'],
              answer: 0,
              why: { en: 'she + is + not, shortened to isn’t. amn’t does not exist, and no cannot negate a verb.', zh: 'she ＋ is ＋ not，縮寫成 isn’t。amn’t 不存在，no 也不能否定動詞。' },
            },
            {
              text: 'I ___ ready yet.',
              options: ['am not', "amn't", 'not am'],
              answer: 0,
              why: { en: 'I takes am, and not follows it. There is no short form of am not.', zh: 'I 搭配 am，not 跟在後面。am not 沒有縮寫形式。' },
            },
            {
              text: 'They ___ our suppliers.',
              options: ["isn't", "aren't", 'not are'],
              answer: 1,
              why: { en: 'they takes are, and not goes after it: aren’t.', zh: 'they 搭配 are，not 放在後面：aren’t。' },
            },
            {
              text: 'It ___ a serious problem.',
              options: ["isn't", "aren't", "amn't"],
              answer: 0,
              why: { en: 'it takes is. One thing, one problem, isn’t.', zh: 'it 搭配 is。一個東西、一個問題，用 isn’t。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我今天不忙。',
              answer: ['I', 'am', 'not', 'busy', 'today.'],
              why: { en: 'not goes after am, not before it and not at the end.', zh: 'not 放在 am 後面，不是前面，也不是句尾。' },
            },
            {
              cue: '他們不是新來的。',
              answer: ['They', 'are', 'not', 'new.'],
              why: { en: 'Same shape with a plural subject: subject + are + not.', zh: '複數主詞也是同一個句型：主詞 ＋ are ＋ not。' },
            },
          ],
        },
      ],
    },
  ],
};

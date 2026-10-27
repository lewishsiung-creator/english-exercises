/* Describe a Place — IELTS Speaking Part 2, adult one-to-one.

   WRITTEN FOR THIS SITE. The cards, the model answer, the language and all the
   Chinese are the site's.

   Teach the-one-minute-plan first; describe-a-person is a useful companion,
   because the move is the same one applied to a different noun.

   Place cards invite a list — there is a this, and a that, and over there is
   another thing — and a list runs out at about forty seconds. The lesson
   teaches the two things that do not run out: movement through the place, and
   the person doing the looking.
*/

const LESSON = {
  id: 'describe-a-place',
  title: 'Describe a Place',
  titleZh: '描述一個地方',

  intro: {
    en: 'Places invite lists, and lists run out at forty seconds. What does not run out is movement — walking the examiner through it — and a reason for being there. Describe the place by what happens in it, not by what it contains.',
    zh: '地方題會誘人條列，而條列講到四十秒就沒了。不會沒有的是「移動」——帶著考官走過一遍——以及「你為什麼在那裡」。用「那裡會發生什麼」來描述一個地方，而不是用「那裡有什麼」。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'describe a place by moving through it rather than listing it', zh: '用「走過一遍」而不是「條列」來描述一個地方' },
      { en: 'use the language of location without repeating “there is”', zh: '使用位置相關的語言，而不一直重複 there is' },
      { en: 'bring people and sound into a description', zh: '把人和聲音帶進描述裡' },
      { en: 'fill two minutes about somewhere entirely ordinary', zh: '談一個完全平凡的地方，也能撐滿兩分鐘' },
    ],
  },

  source: {
    en: 'Written for this page. The cards, the answer, the language and the Chinese are the site’s.',
    zh: '本頁為本站自行撰寫。卡片、答案、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'walk-through-it',
      n: 1,
      en: 'Walk through it',
      zh: '走過一遍',
      blocks: [
        {
          t: 'cue',
          en: 'Describe a place in your city that you like to visit.',
          zh: '描述你的城市裡一個你喜歡去的地方。',
          bullets: [
            { en: 'where it is', zh: '它在哪裡' },
            { en: 'what you can see and do there', zh: '在那裡看得到什麼、可以做什麼' },
            { en: 'who you usually go with', zh: '你通常和誰一起去' },
          ],
          closeEn: 'and explain why you like it.',
          closeZh: '並說明你為什麼喜歡它。',
        },
        {
          t: 'upgrade',
          en: 'The list, and the walk',
          zh: '清單，與走一遍',
          hintEn: 'Same place. One of them has somebody in it.',
          hintZh: '同一個地方。其中一段裡面有人。',
          beforeTag: 'Runs out at forty seconds', beforeTagZh: '四十秒就沒了',
          beforeEn: 'I like to visit the night market near my house. There are many food stalls there. There are also shops selling clothes and games for children. It is very crowded and lively, and the food is delicious and cheap. Many tourists go there too. It is a famous place in my city.',
          beforeZh: '我喜歡去我家附近的夜市。那裡有很多小吃攤，也有賣衣服的店和小孩玩的遊戲。那裡非常擁擠、很熱鬧，食物又好吃又便宜。很多觀光客也會去。那是我們城市很有名的地方。',
          adds: [
            { en: 'move — go in at one end and come out at the other', zh: '移動起來——從一頭進去，從另一頭出來' },
            { en: 'one stall, one person, one smell', zh: '一個攤子、一個人、一種氣味' },
            { en: 'why YOU go, which is never “it is famous”', zh: '「你」為什麼去，而那絕不會是「它很有名」' },
          ],
          afterTag: 'Two minutes, easily', afterTagZh: '輕鬆兩分鐘',
          afterEn: 'The place I’d choose is the night market about five minutes’ walk from my flat. You come in from the main road, and the first thing that hits you is the smell — there’s a stall right at the entrance doing fried chicken, and the queue there is always about twenty people deep. Past that it narrows and gets louder; the clothes stalls are down the left side and there’s a row of games at the back where parents stand around while their kids throw rings at bottles. I usually go with my brother, maybe once a fortnight, and we always end up at the same noodle place near the far exit — the owner has been there longer than I’ve been alive, and she still gives us extra without being asked. That’s really why I go. It isn’t the food, which you can get anywhere. It’s that it’s the one place in the city where I recognise people.',
          afterZh: '我會選離我家走路大約五分鐘的那個夜市。你從大馬路那頭走進去，第一個衝上來的是味道——入口右邊有個炸雞攤，那裡的隊伍永遠排著二十個人左右。再往裡走，路變窄、聲音變大；左邊一整排是賣衣服的，最後面有一排遊戲攤，家長站在旁邊看小孩套圈圈。我通常和我弟一起去，大概兩週一次，而我們最後一定會走到靠近另一個出口的那家麵攤——老闆娘在那裡擺攤的時間比我的年紀還長，到現在還是不用開口就多給我們一些。那才是我真正會去的原因。不是食物，食物哪裡都買得到。而是整座城市裡，那是唯一一個我認得出人的地方。',
        },
        {
          t: 'note',
          en: 'Count the “there is” in each version',
          zh: '數一數兩個版本裡的 there is',
          bodyEn: 'The first has four and the second has one. “There is” is the sentence that makes a description sound like an inventory, and once a candidate starts, every sentence after it has the same shape. Walking through the place forces different verbs — you come in, it narrows, it gets louder, we end up — and different verbs are Grammatical Range, which is a quarter of your band.',
          bodyZh: '第一個版本有四個，第二個只有一個。there is 正是讓描述聽起來像盤點清單的那種句子，而考生一旦開始用，後面每一句都會長成同一個形狀。「走過一遍」會強迫你用不同的動詞——你走進去、路變窄、聲音變大、我們最後走到——而不同的動詞就是文法廣度，那佔了你總分的四分之一。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'the-language',
      n: 2,
      en: 'The language a place card needs',
      zh: '地方卡片需要的語言',
      blocks: [
        {
          t: 'bank',
          en: 'Moving through, not listing',
          zh: '用移動代替條列',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'you come in from ________', zh: '你從 ________ 那頭走進去' },
            { en: 'the first thing that hits you is ________', zh: '第一個衝上來的是 ________' },
            { en: 'past that it narrows', zh: '再過去路就變窄了' },
            { en: 'down the left side', zh: '左手邊一整排' },
            { en: 'right at the entrance', zh: '就在入口處' },
            { en: 'tucked away behind ________', zh: '藏在 ________ 後面' },
            { en: 'it opens out into ________', zh: '它會通到一片 ________' },
            { en: 'we always end up at ________', zh: '我們最後一定會走到 ________' },
            { en: 'about five minutes’ walk from ________', zh: '離 ________ 走路大約五分鐘' },
            { en: 'you’d walk straight past it', zh: '你會直接走過去沒注意到' },
          ],
        },
        {
          t: 'frames',
          en: 'Why you go — the ending',
          zh: '你為什麼去——結尾',
          hintEn: 'Never “because it is famous”. Tap 🔊 to hear one.',
          hintZh: '絕對不要說「因為它很有名」。點 🔊 可聽一次。',
          items: [
            { en: 'That’s really why I go. It isn’t ________, it’s ________.', zh: '那才是我真正會去的原因。不是 ________，而是 ________。' },
            { en: 'It’s the one place in the city where ________.', zh: '那是整座城市裡唯一一個 ________ 的地方。' },
            { en: 'I’ve been going since ________, so it’s partly habit.', zh: '我從 ________ 就開始去了，所以有一部分是習慣。' },
            { en: 'Nothing about it is special, which is sort of the point.', zh: '它沒有任何特別之處，而這某種程度上正是重點。' },
            { en: 'It’s the only place I ________.', zh: '那是我唯一會 ________ 的地方。' },
          ],
        },
        {
          t: 'note',
          en: 'Ordinary places are easier than famous ones',
          zh: '平凡的地方比有名的地方好講',
          bodyEn: 'A famous landmark pushes you into guidebook language, which you half remember and which has no “you” in it. The street you actually walk down has detail you cannot run out of, because you have been there two hundred times. Choose the ordinary one every time.',
          bodyZh: '有名的景點會把你推向導覽手冊式的語言——那是你只記得一半、而且裡面沒有「你」的語言。你真正會走的那條街，細節講不完，因為你去過兩百次。每次都選平凡的那個。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'practice',
      n: 3,
      en: 'Practice',
      zh: '練習',
      blocks: [
        {
          t: 'cue',
          en: 'Describe a building you like the look of.',
          zh: '描述一棟你喜歡其外觀的建築。',
          bullets: [
            { en: 'where it is', zh: '它在哪裡' },
            { en: 'what it looks like', zh: '它看起來如何' },
            { en: 'what it is used for', zh: '它的用途是什麼' },
          ],
          closeEn: 'and explain why you like the look of it.',
          closeZh: '並說明你為什麼喜歡它的外觀。',
        },
        {
          t: 'clock',
          en: 'The real thing',
          zh: '完整實戰',
        },
        {
          t: 'task',
          en: 'Say it',
          zh: '說出來',
          instructionEn: 'One minute to plan, then speak until you are stopped. Record it and listen back, counting your “there is” sentences.',
          instructionZh: '一分鐘規劃，然後一直說到被喊停。錄下來回聽，數一數你用了幾個 there is。',
          checklist: [
            { en: 'No more than one “there is” in the whole answer', zh: '整段回答裡 there is 不超過一個' },
            { en: 'You moved through the place', zh: '你帶著聽者走過了那個地方' },
            { en: 'At least one person appears in it', zh: '裡面至少出現一個人' },
            { en: 'Something you could only know by going there often', zh: '有一個只有常去才會知道的細節' },
            { en: 'The reason was not “it is famous”', zh: '理由不是「它很有名」' },
          ],
        },
      ],
    },
  ],
};

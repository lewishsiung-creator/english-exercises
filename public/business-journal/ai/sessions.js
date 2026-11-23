/* AI 實務應用交流 · AI in Practice — the map of the discussions.

   A sub-series of 國際商業期刊導讀, and not a series of lessons: these are the
   notes from the class's AI discussions, written up afterwards so the people
   who were in the room can read them again on their own.

   One file, loaded by the list page and by every write-up. Adding a discussion
   is three steps and nothing else changes:

     1. cp -r <the newest folder> <new id>
     2. write <id>/content.js, with `id: '<id>'` at the top of SESSION
     3. add an entry for it to `sessions` below, with `built: true`

   Newest LAST in this list. The list page reverses it, so the most recent
   discussion leads and no older one's number moves when a new one arrives.

   Unlike the readings, the body of a write-up is in Chinese and stays visible:
   nobody is sitting beside the reader to tap a 中 chip, and this is reading to
   remember what was said rather than comprehension practice. The English that
   matters here is the name of each idea — AI Think Tank, AI Handoff — which is
   what the class actually took away, so those lead their headings.
*/

const AI_NOTES = {
  title: 'AI in Practice',
  titleZh: 'AI 實務應用交流',
  kicker: '課堂記錄 · notes from the class',

  intro: {
    zh: '這裡放的是課堂上談 AI 的討論記錄，一次一篇。寫下來是為了讓當天在場的人可以自己回頭看：誰分享了什麼、怎麼做的、哪裡要小心。內容是當天參與者的使用經驗，不是經過獨立測試的結論。',
    en: 'What the class said about AI, one discussion at a time, written up so the people who were there can read it again on their own.',
  },

  sessions: [
    {
      id: '2026-11',
      dateZh: '2026 年 11 月',
      dateEn: 'November 2026',
      titleEn: 'From asking to delegating',
      titleZh: '從「問 AI」到「把事情交給 AI」',
      blurbZh: '三個人分享自己怎麼用 AI：做學習網站、整理會議筆記、讓五位 AI 專家互相挑戰、把工作習慣交接給另一個 AI。整理成八個應用重點、五個可以直接用的技巧、三段指令範例，以及三件要小心的事。',
      people: ['Lewis', 'Gary', 'Minnie'],
      minutes: 70,
      built: true,
      // A discussion may also have an English half, at <id>/english/: what each
      // person did well, their own sentences beside a natural version, and
      // practice. Leave it off when a discussion has no write-up of its English
      // yet — the list page and the write-up both check before linking.
      english: true,
    },
  ],
};

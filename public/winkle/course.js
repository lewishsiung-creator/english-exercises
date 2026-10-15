/* The map of Winkle's pages. The hub reads it; nothing else does.

   A page with `built: false` still gets a card — the hub is a map of the work,
   not a list of what happens to be finished, the same rule the IELTS contents
   page follows. `note` says what state a page is in, because these pages age
   differently: an interview that has happened is a record, a talk that is
   still ahead is live preparation.
*/

const COURSE = {
  title: "Winkle's pages",
  titleZh: "Winkle 的學習頁面",
  kicker: "Lewis Biz English · 一對一",
  intro: {
    en: "Everything built for Winkle, in one place. Each page stands on its own and keeps its own link.",
    zh: "為 Winkle 製作的所有頁面都在這裡。每一頁都是獨立的，也各自保留自己的連結。",
  },
  pages: [
    {
      id: "rpharma",
      href: "rpharma/",
      built: true,
      en: "R/Pharma 2026 APAC — the talk",
      zh: "R/Pharma 2026 講稿準備",
      blurbEn: "Upstream Detection of CDISC Compliance Issues: the script slide by slide, what to fix first, how to say the words, and the seven questions they are most likely to ask.",
      blurbZh: "講稿逐頁檢視、優先要修的五件事、發音清單，以及最可能被問到的七個問題。",
      noteEn: "Live preparation",
      noteZh: "進行中",
    },
    {
      id: "interview",
      href: "interview/",
      built: true,
      en: "Interview preparation — a UK role",
      zh: "面試準備：英國職缺",
      blurbEn: "Fourteen steps built over four handouts: the one-minute introduction, the story bank, conflict, explaining a study, submissions, the awkward questions, and a drill that asks them aloud.",
      blurbZh: "四份講義累積出的十四個步驟：一分鐘自介、故事庫、衝突題、說清楚一個研究、申報經驗、難答的問題，以及會把題目唸出來的隨機抽題練習。",
      noteEn: "A record of that process",
      noteZh: "過程紀錄",
    },
    {
      id: "newjob",
      built: false,
      en: "Starting the new job",
      zh: "新工作英語",
      blurbEn: "Self-introduction, progress updates, asking for clarification, explaining technical work to people who don't code, professional boundaries, small talk, and working with a US team.",
      blurbZh: "自我介紹、進度報告、確認與釐清、向非技術同事解釋、專業界線、small talk，以及與美國團隊合作的文化差異。",
      noteEn: "From 2 November",
      noteZh: "11 月 2 日開始",
    },
    {
      id: "cims",
      built: false,
      en: "CIMS Global — the screening call",
      zh: "CIMS Global 初次面談",
      blurbEn: "Defining the role rather than filling one: what to ask before you say what you want, the expectation statement, and what to say if the opening is junior.",
      blurbZh: "不是填一個現成的格子，而是定義角色：先問再講、期望陳述，以及對方只有 junior 缺時怎麼回應。",
      noteEn: "A record, if we build it",
      noteZh: "若要建，是紀錄",
    },
  ],
};

/* The map of Winkle's pages. The hub reads it; nothing else does.

   A page with `built: false` still gets a card — the hub is a map of the work,
   not a list of what happens to be finished, the same rule the IELTS contents
   page follows. `note` says what state a page is in, because these pages age
   differently: an interview that has happened is a record, a talk that is
   still ahead is live preparation.
*/

const COURSE = {
  title: "Winkle's Learning Notes",
  titleZh: "Winkle 的學習頁面",
  kicker: "Lewis Biz English · 一對一",
  pages: [
    {
      id: "notebook",
      href: "notebook/",
      built: true,
      en: "Notebook — one entry per lesson",
      zh: "上課筆記：一堂課一則",
      blurbEn: "What was said in each lesson, kept so it can be used again: what the conversation showed, your own English and what to say instead, the collocations, and the questions to answer again cold.",
      blurbZh: "每一堂課談過的內容：這次談話看見了什麼、你自己的英文與改法、搭配詞，以及可以重新冷答一次的題目。",
      noteEn: "Growing · newest at the bottom",
      noteZh: "持續累積",
    },
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
      id: "newjob",
      href: "newjob/",
      built: true,
      en: "Starting the new job",
      zh: "新工作的英語溝通架構",
      blurbEn: "Eleven steps for the first weeks: the two self-introductions, the three-step progress update, checking you've understood, explaining technical work to people who don't code, workload and boundaries, small talk, ten things about working with a US team, and eight situations to drill.",
      blurbZh: "前幾週要用的十一個步驟：兩種自我介紹、三步驟進度報告、確認與釐清、向非技術同事解釋、工作量與專業界線、small talk、與美國團隊合作的十件事，以及八個情境練習。",
      noteEn: "From 2 November",
      noteZh: "11 月 2 日開始",
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
      id: "cims",
      href: "cims/",
      built: true,
      en: "CIMS Global — the screening call",
      zh: "CIMS Global 初次面談",
      blurbEn: "Defining the role rather than filling one: what to ask before you say what you want, the expectation statement, what to say if the opening is junior, the Git answer, and the three sentences that close a call yourself.",
      blurbZh: "不是填一個現成的格子，而是定義角色：先問再講、期望陳述、對方只有 junior 缺時怎麼回應、Git 那一題，以及主動收尾的三句話。",
      noteEn: "A record · October 2026",
      noteZh: "紀錄 · 2026 年 10 月",
    },
  ],
};

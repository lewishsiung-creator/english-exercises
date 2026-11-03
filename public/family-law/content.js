/* Family Law English — the English of a Taiwan family-law practice.

   Written for one adult learner who works with family-law cases. There is no
   source document: every term, example sentence and 中譯 was written for this
   page. The terms follow Taiwan's own law — the Civil Code's Family and
   Succession parts (民法親屬編、繼承編), the Family Act (家事事件法) and the
   Domestic Violence Prevention Act (家庭暴力防治法) — in the English most
   often used to translate them, so a sentence describes how a case runs here,
   not in an American or British court. Where the English word and the Taiwan
   concept are not a perfect fit (custody / 親權), the gloss says so.

   It is language practice, not legal advice, and the cover says so.

   The page is the Fab English machinery with new content, so the same rules
   hold. Each English sentence contains its headword *verbatim* — no
   inflection — because the quiz blanks are cut from these sentences. If you
   edit a sentence, keep the headword in it unchanged.

   Everything Chinese — the gloss and the sentence's 中譯 — is one layer. 自學
   mode shows it, 教學 mode hides it behind a 中 chip.

   Fields per word:
     w     the headword
     p     part of speech (n. v. adj. ph.)
     zh    Traditional Chinese gloss
     ex    example sentence
     zhEx  its 中譯
     k     optional: the exact form used in ex, when it differs from w */

window.LAW = {

  intro: {
    en: "The words a family-law case is made of in Taiwan — marriage, divorce, property, children, protection orders, inheritance and the court — plus the phrases for talking with a client. The Practice tab has consultations, documents and emails from cross-border cases.",
    zh: "台灣家事案件會用到的英文：婚姻、離婚、財產、子女、保護令、繼承與法院程序，再加上與當事人溝通的常用句。「實務」分頁有涉外案件的諮詢對話、文件閱讀與英文書信。"
  },

  groups: [

  /* ---------------- 1 ---------------- */
  { id: "marriage",
    en: "Marriage and the couple",
    zh: "婚姻與夫妻關係",
    note: { en: "How a marriage is made, what it changes, and when it is not valid.",
            zh: "婚姻怎麼成立、會帶來哪些改變，以及什麼情況下婚姻無效或可撤銷。" },
    words: [
      { w:"marriage", p:"n.", zh:"婚姻", ex:"Their marriage was registered in Taipei in 2015.", zhEx:"他們的婚姻是 2015 年在台北登記的。" },
      { w:"spouse", p:"n.", zh:"配偶", ex:"Your spouse must also sign the form.", zhEx:"你的配偶也必須在這份書面上簽名。" },
      { w:"engagement", p:"n.", zh:"婚約；訂婚", ex:"An engagement does not create a legal duty to marry.", zhEx:"婚約不會產生必須結婚的法律義務。" },
      { w:"register", p:"v.", zh:"登記", ex:"The marriage is valid only after you register it.", zhEx:"婚姻要辦理登記後才生效。" },
      { w:"household registration office", p:"n.", zh:"戶政事務所", ex:"Bring both ID cards to the household registration office.", zhEx:"請帶雙方的身分證到戶政事務所。" },
      { w:"void", p:"adj.", zh:"無效的", ex:"A marriage that was never registered is void.", zhEx:"從未登記的婚姻是無效的。" },
      { w:"annul", p:"v.", zh:"撤銷（婚姻）", ex:"A court can annul a marriage if one side was forced into it.", zhEx:"如果一方是被脅迫結婚的，法院可以撤銷這段婚姻。" },
      { w:"bigamy", p:"n.", zh:"重婚", ex:"Bigamy makes the second marriage void.", zhEx:"重婚會使後面的那段婚姻無效。" },
      { w:"same-sex marriage", p:"n.", zh:"同性婚姻", ex:"Same-sex marriage has been legal in Taiwan since 2019.", zhEx:"台灣自 2019 年起同性婚姻合法。" },
      { w:"prenuptial agreement", p:"n.", zh:"婚前協議", ex:"They signed a prenuptial agreement before the wedding.", zhEx:"他們在婚禮前簽了婚前協議。" },
      { w:"marital property regime", p:"n.", zh:"夫妻財產制", ex:"Most couples never choose a marital property regime, so the statutory one applies.", zhEx:"大多數夫妻從未約定夫妻財產制，所以適用法定財產制。" },
      { w:"statutory regime", p:"n.", zh:"法定財產制", ex:"Under the statutory regime, each spouse owns and manages their own property.", zhEx:"在法定財產制下，夫妻各自擁有並管理自己的財產。" },
      { w:"separate property regime", p:"n.", zh:"分別財產制", ex:"Under a separate property regime, there is no claim on the other spouse's savings at divorce.", zhEx:"在分別財產制下，離婚時不能請求分配對方的存款。" },
      { w:"cohabit", p:"v.", zh:"同居", ex:"Spouses have a duty to cohabit unless there is a good reason not to.", zhEx:"夫妻互負同居義務，但有正當理由者不在此限。" },
      { w:"domicile", p:"n.", zh:"住所", ex:"The couple decide their domicile together.", zhEx:"夫妻的住所由雙方共同協議。" },
      { w:"in-laws", p:"n.", zh:"姻親（如公婆、岳父母）", ex:"Her in-laws live on the same floor.", zhEx:"她的公婆就住在同一層樓。" }
    ]
  },

  /* ---------------- 2 ---------------- */
  { id: "divorce",
    en: "Divorce",
    zh: "離婚",
    note: { en: "The two ways to end a marriage in Taiwan — by agreement or by the court — and the grounds a court will accept.",
            zh: "台灣結束婚姻的兩種方式（兩願離婚與裁判離婚），以及法院採認的離婚事由。" },
    words: [
      { w:"divorce", p:"n.", zh:"離婚", ex:"She first asked me about divorce two years ago.", zhEx:"她兩年前第一次來問我離婚的事。" },
      { w:"divorce by mutual consent", p:"n.", zh:"兩願離婚", ex:"A divorce by mutual consent needs a written agreement, two witnesses and registration.", zhEx:"兩願離婚需要書面協議、兩位證人，並辦理登記。" },
      { w:"judicial divorce", p:"n.", zh:"裁判離婚", ex:"If he will not agree, you can ask the court for a judicial divorce.", zhEx:"如果他不同意，你可以向法院請求裁判離婚。" },
      { w:"divorce agreement", p:"n.", zh:"離婚協議書", ex:"Read the divorce agreement carefully before you sign it.", zhEx:"簽名之前，請仔細看過離婚協議書。" },
      { w:"witness", p:"n.", zh:"證人", ex:"Each witness must sign the divorce agreement.", zhEx:"每一位證人都必須在離婚協議書上簽名。" },
      { w:"file for divorce", p:"ph.", zh:"訴請離婚", ex:"She plans to file for divorce next month.", zhEx:"她打算下個月訴請離婚。" },
      { w:"grounds", p:"n.", zh:"（離婚）事由；理由", ex:"What are the grounds for the divorce?", zhEx:"這件離婚的事由是什麼？" },
      { w:"irretrievable breakdown", p:"n.", zh:"婚姻破綻（難以維持婚姻之重大事由）", ex:"The court found an irretrievable breakdown of the marriage.", zhEx:"法院認定這段婚姻已有難以維持的重大事由。" },
      { w:"adultery", p:"n.", zh:"外遇（與配偶以外之人合意性交）", ex:"Adultery is no longer a crime in Taiwan, but it can still be a ground for divorce.", zhEx:"在台灣通姦已不是犯罪，但仍可以作為離婚事由。" },
      { w:"desertion", p:"n.", zh:"遺棄", ex:"Malicious desertion is one of the grounds in the Civil Code.", zhEx:"惡意遺棄是民法所列的離婚事由之一。" },
      { w:"maltreatment", p:"n.", zh:"虐待", ex:"Intolerable maltreatment is also a ground for divorce.", zhEx:"不堪同居之虐待也是離婚事由。" },
      { w:"separation", p:"n.", zh:"分居", ex:"A long separation can help show that the marriage has broken down.", zhEx:"長期分居有助於證明婚姻已經破裂。" },
      { w:"fault", p:"n.", zh:"過失；有責程度", ex:"The court may look at which spouse is more at fault.", zhEx:"法院可能會審酌哪一方的責任較重。" },
      { w:"plaintiff", p:"n.", zh:"原告", ex:"The plaintiff is asking for custody of both children.", zhEx:"原告請求兩名子女的親權。" },
      { w:"defendant", p:"n.", zh:"被告", ex:"The defendant did not come to the hearing.", zhEx:"被告沒有到庭。" },
      { w:"reconcile", p:"v.", zh:"和好；復合", ex:"The judge asked whether they could still reconcile.", zhEx:"法官問他們是否還有可能和好。" }
    ]
  },

  /* ---------------- 3 ---------------- */
  { id: "property",
    en: "Property and money",
    zh: "財產與金錢",
    note: { en: "What is shared when a marriage ends, what is not, and the money one spouse may owe the other.",
            zh: "婚姻結束時哪些財產要分、哪些不用分，以及一方可能要付給另一方的錢。" },
    words: [
      { w:"marital property", p:"n.", zh:"婚後財產", ex:"Only marital property is counted when the couple's assets are compared.", zhEx:"比較雙方財產時，只計算婚後財產。" },
      { w:"premarital property", p:"n.", zh:"婚前財產", ex:"His apartment is premarital property, so it is not shared.", zhEx:"他的公寓是婚前財產，所以不用分配。" },
      { w:"remaining property", p:"n.", zh:"剩餘財產", ex:"The spouse with less remaining property can claim half of the difference.", zhEx:"剩餘財產較少的一方，可以請求雙方差額的一半。" },
      { w:"claim", p:"n.", zh:"請求（權）", ex:"The claim expires two years after you learn there is a difference.", zhEx:"自知道有差額時起兩年內不行使，這項請求權就會消滅。" },
      { w:"gift", p:"n.", zh:"贈與；受贈的財物", ex:"A gift from your parents is not shared at divorce.", zhEx:"父母贈與你的財產，離婚時不用分配。" },
      { w:"asset", p:"n.", zh:"資產", ex:"Please list every asset in your name, including bank accounts.", zhEx:"請列出你名下的每一項資產，包括銀行帳戶。" },
      { w:"debt", p:"n.", zh:"債務", ex:"Any debt is subtracted before the two sides are compared.", zhEx:"比較雙方之前，會先扣除債務。" },
      { w:"mortgage", p:"n.", zh:"房貸", ex:"There is still a mortgage on the apartment.", zhEx:"這間公寓還有房貸。" },
      { w:"provisional attachment", p:"n.", zh:"假扣押", ex:"We applied for a provisional attachment of his bank account.", zhEx:"我們聲請假扣押他的銀行帳戶。" },
      { w:"security deposit", p:"n.", zh:"擔保金", ex:"The court usually orders a security deposit before it grants a provisional attachment.", zhEx:"法院准許假扣押之前，通常會命聲請人提供擔保金。" },
      { w:"valuation", p:"n.", zh:"估價；鑑價", ex:"We need a valuation of the house before the hearing.", zhEx:"開庭前我們需要先為房子估價。" },
      { w:"bank statement", p:"n.", zh:"銀行對帳單；交易明細", ex:"Ask the bank for a bank statement for the last five years.", zhEx:"請向銀行申請最近五年的交易明細。" },
      { w:"disclose", p:"v.", zh:"揭露；陳報", ex:"Both sides must disclose their income and property.", zhEx:"雙方都必須陳報自己的收入與財產。" },
      { w:"transfer", p:"v.", zh:"移轉；脫產", ex:"If he tries to transfer property to beat the claim, the court can add it back.", zhEx:"如果他為了減少分配而移轉財產，法院可以把那部分加回計算。" },
      { w:"maintenance", p:"n.", zh:"生活費；家庭生活費用", ex:"He stopped paying maintenance after he moved out.", zhEx:"他搬出去之後就不再付生活費了。" },
      { w:"alimony", p:"n.", zh:"贍養費", ex:"Alimony is paid only to a spouse who is not at fault and would face hardship after a court divorce.", zhEx:"贍養費只給付給無過失、且因判決離婚而陷於生活困難的一方。" },
      { w:"compensation", p:"n.", zh:"賠償", ex:"She may also ask for compensation for emotional harm.", zhEx:"她也可以請求精神上的損害賠償。" },
      { w:"damages", p:"n.", zh:"損害賠償（金）", ex:"The court ordered him to pay damages to his wife.", zhEx:"法院判他要賠償他太太。" }
    ]
  },

  /* ---------------- 4 ---------------- */
  { id: "children",
    en: "Children",
    zh: "子女",
    note: { en: "Who looks after the children, who pays for them, and who decides. Taiwan's law speaks of parental rights and duties; in English the everyday word is custody.",
            zh: "誰照顧子女、誰負擔費用、誰做決定。法條用語是「對於未成年子女權利義務之行使或負擔」（親權），英文日常的說法是 custody。" },
    words: [
      { w:"custody", p:"n.", zh:"親權（俗稱監護權）", ex:"Who will have custody of the children after the divorce?", zhEx:"離婚後孩子的親權歸誰？" },
      { w:"sole custody", p:"n.", zh:"單獨行使親權", ex:"The mother is asking for sole custody.", zhEx:"母親請求單獨行使親權。" },
      { w:"joint custody", p:"n.", zh:"共同行使親權", ex:"With joint custody, both parents make the big decisions together.", zhEx:"共同行使親權時，重大決定由父母一起做。" },
      { w:"primary caregiver", p:"n.", zh:"主要照顧者", ex:"The judge asked who has been the primary caregiver.", zhEx:"法官問誰一直是主要照顧者。" },
      { w:"best interests of the child", p:"n.", zh:"子女最佳利益", ex:"Every decision must be made in the best interests of the child.", zhEx:"每一項決定都必須以子女最佳利益為依歸。" },
      { w:"views", p:"n.", zh:"意見；意願", ex:"The judge will listen to the child's views in private.", zhEx:"法官會私下聽取孩子的意見。" },
      { w:"visitation", p:"n.", zh:"會面交往", ex:"The father will have visitation every other weekend.", zhEx:"父親每隔一個週末可以會面交往。" },
      { w:"change of custody", p:"n.", zh:"改定親權", ex:"She asked for a change of custody after he moved abroad.", zhEx:"他搬到國外後，她聲請改定親權。" },
      { w:"handover", p:"n.", zh:"交付（子女）", ex:"The handover of the child takes place at a supervised visitation center.", zhEx:"子女的交付在會面交往中心進行。" },
      { w:"child support", p:"n.", zh:"子女扶養費", ex:"Child support is usually paid every month until the child becomes an adult.", zhEx:"子女扶養費通常按月給付到孩子成年。" },
      { w:"minor", p:"n.", zh:"未成年人", ex:"A minor cannot sign this agreement alone.", zhEx:"未成年人不能自己簽這份協議。" },
      { w:"legal representative", p:"n.", zh:"法定代理人", ex:"As her legal representative, you sign for her.", zhEx:"你是她的法定代理人，由你替她簽名。" },
      { w:"guardian", p:"n.", zh:"監護人", ex:"The grandparents asked to be named as the children's guardian.", zhEx:"祖父母請求被選定為孩子的監護人。" },
      { w:"social worker", p:"n.", zh:"社工", ex:"A social worker will visit both homes and write a report.", zhEx:"社工會到雙方家中訪視並寫報告。" },
      { w:"relocate", p:"v.", zh:"遷居；搬遷", ex:"She wants to relocate abroad with the children.", zhEx:"她想帶孩子搬到國外。" },
      { w:"paternity", p:"n.", zh:"生父身分；親子關係", ex:"A DNA test can prove paternity.", zhEx:"DNA 檢測可以證明親子關係。" },
      { w:"acknowledge", p:"v.", zh:"認領", ex:"A father can acknowledge a child born outside marriage.", zhEx:"生父可以認領非婚生子女。" },
      { w:"adoption", p:"n.", zh:"收養", ex:"Every adoption must be approved by the court.", zhEx:"所有的收養都必須經法院認可。" }
    ]
  },

  /* ---------------- 5 ---------------- */
  { id: "violence",
    en: "Domestic violence",
    zh: "家庭暴力",
    note: { en: "Protection orders and the words around them. Taiwan has three kinds, and who may ask for each is different.",
            zh: "保護令與相關用語。台灣的保護令分三種，各自能聲請的人不一樣。" },
    words: [
      { w:"domestic violence", p:"n.", zh:"家庭暴力", ex:"Domestic violence includes threats and control, not only hitting.", zhEx:"家庭暴力不只是動手打人，也包括威脅和控制。" },
      { w:"economic abuse", p:"n.", zh:"經濟暴力；經濟控制", ex:"Economic abuse means using money to control a person.", zhEx:"經濟暴力是用金錢來控制一個人。" },
      { w:"protection order", p:"n.", zh:"保護令", ex:"You can apply for a protection order at the district court.", zhEx:"你可以向地方法院聲請保護令。" },
      { w:"ordinary protection order", p:"n.", zh:"通常保護令", ex:"An ordinary protection order can last up to two years and can be extended.", zhEx:"通常保護令的有效期間最長兩年，而且可以延長。" },
      { w:"temporary protection order", p:"n.", zh:"暫時保護令", ex:"A temporary protection order lasts until the court makes its final decision.", zhEx:"暫時保護令的效力持續到法院作出最終決定為止。" },
      { w:"emergency protection order", p:"n.", zh:"緊急保護令", ex:"Only the police, a prosecutor or the local authority can ask for an emergency protection order.", zhEx:"只有警察、檢察官或地方主管機關可以聲請緊急保護令。" },
      { w:"victim", p:"n.", zh:"被害人", ex:"The victim can be questioned without the abuser in the room.", zhEx:"被害人可以在施暴者不在場的情況下接受訊問。" },
      { w:"abuser", p:"n.", zh:"施暴者；加害人", ex:"The abuser was ordered to attend a treatment program.", zhEx:"加害人被命令完成處遇計畫。" },
      { w:"stay away", p:"ph.", zh:"遠離", ex:"He must stay away from her home and her office.", zhEx:"他必須遠離她的住處和工作場所。" },
      { w:"harass", p:"v.", zh:"騷擾", ex:"He was ordered not to harass her by phone or online.", zhEx:"他被命令不得以電話或網路騷擾她。" },
      { w:"threaten", p:"v.", zh:"威脅", ex:"Did he ever threaten to take the children away?", zhEx:"他有沒有威脅過要把孩子帶走？" },
      { w:"stalking", p:"n.", zh:"跟蹤", ex:"Stalking is now a crime under its own law.", zhEx:"跟蹤騷擾現在有專法規範，是犯罪行為。" },
      { w:"violate", p:"v.", zh:"違反", ex:"It is a crime to violate a protection order.", zhEx:"違反保護令是犯罪。" },
      { w:"medical certificate", p:"n.", zh:"驗傷診斷書", ex:"Ask the hospital for a medical certificate of your injuries.", zhEx:"請向醫院申請驗傷診斷書。" },
      { w:"shelter", p:"n.", zh:"庇護所", ex:"The social worker found her a place in a shelter.", zhEx:"社工幫她安排了庇護所。" },
      { w:"report", p:"v.", zh:"通報", ex:"Teachers and doctors must report suspected abuse.", zhEx:"老師和醫師疑似發現暴力時必須通報。" },
      { w:"hotline", p:"n.", zh:"專線", ex:"You can call the 113 hotline at any hour.", zhEx:"你隨時都可以打 113 保護專線。" }
    ]
  },

  /* ---------------- 6 ---------------- */
  { id: "inheritance",
    en: "Inheritance and later life",
    zh: "繼承與高齡",
    note: { en: "Who inherits, how a will is made, what heirs owe, and the court's role when a parent can no longer decide for themselves.",
            zh: "誰可以繼承、遺囑怎麼立、繼承人要負擔什麼，以及父母無法自己做決定時法院的角色。" },
    words: [
      { w:"inheritance", p:"n.", zh:"繼承；繼承所得", ex:"Inheritance is not counted as marital property.", zhEx:"繼承所得不列入婚後財產計算。" },
      { w:"estate", p:"n.", zh:"遺產", ex:"The estate includes the house, the savings and the debts.", zhEx:"遺產包括房子、存款和債務。" },
      { w:"deceased", p:"n.", zh:"死者；被繼承人", ex:"The deceased left no will.", zhEx:"被繼承人沒有留下遺囑。" },
      { w:"heir", p:"n.", zh:"繼承人", ex:"The spouse is always an heir.", zhEx:"配偶一定是繼承人。" },
      { w:"order of succession", p:"n.", zh:"繼承順序", ex:"Children are first in the order of succession, and the spouse shares with them.", zhEx:"子女是第一順位繼承人，配偶與他們共同繼承。" },
      { w:"intestate", p:"adj.", zh:"未立遺囑的", ex:"When someone dies intestate, the Civil Code decides who inherits.", zhEx:"一個人沒有立遺囑就過世時，由民法決定誰來繼承。" },
      { w:"will", p:"n.", zh:"遺囑", ex:"She wants to make a will while she is still healthy.", zhEx:"她想趁身體還健康時立遺囑。" },
      { w:"holographic will", p:"n.", zh:"自書遺囑", ex:"A holographic will must be written entirely by hand, dated and signed.", zhEx:"自書遺囑必須全文親筆書寫，並記明年月日、親自簽名。" },
      { w:"notarial will", p:"n.", zh:"公證遺囑", ex:"A notarial will is made before a notary with two witnesses.", zhEx:"公證遺囑是在公證人和兩位見證人面前作成的。" },
      { w:"executor", p:"n.", zh:"遺囑執行人", ex:"She named her brother as executor of her will.", zhEx:"她指定她的哥哥為遺囑執行人。" },
      { w:"bequest", p:"n.", zh:"遺贈", ex:"Her will includes a bequest to a charity.", zhEx:"她的遺囑裡有一筆給慈善機構的遺贈。" },
      { w:"compulsory portion", p:"n.", zh:"特留分", ex:"A will cannot take away an heir's compulsory portion.", zhEx:"遺囑不能剝奪繼承人的特留分。" },
      { w:"contest", p:"v.", zh:"爭執（遺囑效力）", ex:"His sisters want to contest the will.", zhEx:"他的姊妹想爭執這份遺囑的效力。" },
      { w:"partition of the estate", p:"n.", zh:"遺產分割", ex:"The heirs could not agree, so we filed for partition of the estate.", zhEx:"繼承人之間談不攏，所以我們提起遺產分割。" },
      { w:"claim for recovery of inheritance", p:"n.", zh:"繼承回復請求權", ex:"A claim for recovery of inheritance must be made within two years of learning that your rights were infringed.", zhEx:"繼承回復請求權，須在知悉繼承權被侵害時起兩年內行使。" },
      { w:"renounce", p:"v.", zh:"拋棄（繼承）", ex:"You can renounce the inheritance within three months of learning that you are an heir.", zhEx:"你可以在知道自己是繼承人後三個月內拋棄繼承。" },
      { w:"liable", p:"adj.", zh:"負有責任的", ex:"Heirs are liable for debts only up to the value of the estate.", zhEx:"繼承人只以所繼承的遺產為限，負擔債務。" },
      { w:"estate tax", p:"n.", zh:"遺產稅", ex:"The heirs must file an estate tax return within six months.", zhEx:"繼承人必須在六個月內申報遺產稅。" },
      { w:"guardianship", p:"n.", zh:"監護宣告", ex:"The family asked the court for guardianship of their father, who has dementia.", zhEx:"家人為失智的父親向法院聲請監護宣告。" }
    ]
  },

  /* ---------------- 7 ---------------- */
  { id: "court",
    en: "The court and the process",
    zh: "法院與程序",
    note: { en: "How a family case moves: most go to mediation first, and the court decides some matters by judgment and others by ruling.",
            zh: "家事案件怎麼進行：多數案件先進行調解，法院有些事項以判決決定，有些以裁定決定。" },
    words: [
      { w:"Family Court", p:"n.", zh:"家事法庭；少年及家事法院", ex:"The case will be heard at the Family Court.", zhEx:"這個案件會在家事法庭審理。" },
      { w:"mediation", p:"n.", zh:"調解", ex:"Most family cases go to mediation before a judge hears them.", zhEx:"大部分家事案件在法官審理前會先進行調解。" },
      { w:"mediator", p:"n.", zh:"調解委員", ex:"The mediator helps both sides find an agreement they can live with.", zhEx:"調解委員協助雙方找到彼此都能接受的協議。" },
      { w:"settlement", p:"n.", zh:"和解；調解成立", ex:"They reached a settlement on the second day.", zhEx:"他們在第二天達成和解。" },
      { w:"petition", p:"n.", zh:"聲請（狀）", ex:"The petition was filed on Monday.", zhEx:"聲請狀已在星期一遞出。" },
      { w:"petitioner", p:"n.", zh:"聲請人", ex:"The petitioner must attend the first hearing.", zhEx:"聲請人必須出席第一次開庭。" },
      { w:"respondent", p:"n.", zh:"相對人", ex:"The respondent did not reply to the petition.", zhEx:"相對人沒有回應這份聲請。" },
      { w:"hearing", p:"n.", zh:"開庭；審理期日", ex:"The next hearing is on March 5.", zhEx:"下一次開庭是 3 月 5 日。" },
      { w:"judgment", p:"n.", zh:"判決", ex:"The judgment will be sent to you by mail.", zhEx:"判決書會用郵寄送達給你。" },
      { w:"ruling", p:"n.", zh:"裁定", ex:"A protection order is made by a ruling, not a judgment.", zhEx:"保護令是以裁定核發，而不是判決。" },
      { w:"interim order", p:"n.", zh:"暫時處分", ex:"We asked for an interim order on visitation while the case is pending.", zhEx:"案件審理期間，我們聲請關於會面交往的暫時處分。" },
      { w:"appeal", p:"v.", zh:"上訴", ex:"You have twenty days to appeal a judgment.", zhEx:"你有二十天可以對判決提起上訴。" },
      { w:"serve", p:"v.", zh:"送達", ex:"The court will serve the papers on the other side.", zhEx:"法院會把文書送達給對方。" },
      { w:"evidence", p:"n.", zh:"證據", ex:"Keep every message as evidence.", zhEx:"每一則訊息都要留下來當證據。" },
      { w:"power of attorney", p:"n.", zh:"委任狀", ex:"Please sign this power of attorney so I can represent you.", zhEx:"請簽這份委任狀，我才能代理你。" },
      { w:"household registration transcript", p:"n.", zh:"戶籍謄本", ex:"Please bring a copy of your household registration transcript.", zhEx:"請帶一份你的戶籍謄本來。" },
      { w:"confidential", p:"adj.", zh:"不公開的；保密的", ex:"Family cases are confidential, so the hearing is closed to the public.", zhEx:"家事案件不公開，所以開庭時旁人不能旁聽。" },
      { w:"enforcement", p:"n.", zh:"強制執行", ex:"If he still does not pay, we can apply for enforcement.", zhEx:"如果他還是不付，我們可以聲請強制執行。" },
      { w:"legal aid", p:"n.", zh:"法律扶助", ex:"If you cannot afford a lawyer, you may qualify for legal aid.", zhEx:"如果你請不起律師，可能符合法律扶助的資格。" }
    ]
  },

  /* ---------------- 8 ----------------
     Added 2026-11-03 once Lewis said the learner is a lawyer who meets
     foreign clients and reads and writes English documents. Every sentence
     is Taiwan's side of a cross-border case: 涉外民事法律適用法, 家事事件法 §53
     (jurisdiction), 民事訴訟法 §402 (recognition), 入出國及移民法 (residence
     after divorce), 土地法 §18 (reciprocity). */
  { id: "crossborder",
    en: "Cross-border cases",
    zh: "涉外案件",
    note: { en: "When one side is a foreign national, lives abroad, or holds documents made abroad.",
            zh: "當事人一方是外國人、住在國外，或文件是在國外作成時會用到的詞彙。" },
    words: [
      { w:"foreign spouse", p:"n.", zh:"外籍配偶", ex:"As a foreign spouse, your right to stay in Taiwan is linked to the marriage.", zhEx:"身為外籍配偶，你在台灣的居留權與婚姻相連。" },
      { w:"nationality", p:"n.", zh:"國籍", ex:"Nationality is not a reason to give custody to one parent.", zhEx:"國籍不是把親權判給某一方的理由。" },
      { w:"jurisdiction", p:"n.", zh:"管轄權", ex:"Taiwan's courts have jurisdiction because your wife is a Taiwanese national.", zhEx:"因為你太太是中華民國國民，台灣的法院有管轄權。" },
      { w:"applicable law", p:"n.", zh:"準據法", ex:"Before anything else, we need to work out the applicable law.", zhEx:"我們首先要確認準據法。" },
      { w:"recognize", p:"v.", zh:"承認（外國判決）", ex:"A court may refuse to recognize a foreign judgment that goes against public order.", zhEx:"外國判決如果違背公共秩序，法院可以不予承認。" },
      { w:"marriage certificate", p:"n.", zh:"結婚證書", ex:"Bring the original marriage certificate from your home country.", zhEx:"請帶你本國的結婚證書正本來。" },
      { w:"notarize", p:"v.", zh:"公證；認證", ex:"Ask a local notary to notarize your power of attorney first.", zhEx:"請先找當地公證人為你的委任狀做公證。" },
      { w:"authentication", p:"n.", zh:"（駐外館處）驗證", ex:"Documents made abroad usually need authentication by a Taiwan overseas office.", zhEx:"在國外作成的文件，通常需要經我國駐外館處驗證。" },
      { w:"certified translation", p:"n.", zh:"經認證的翻譯", ex:"Please provide a Chinese translation; a certified translation is safer.", zhEx:"請提供中文譯本；附經認證的翻譯會更穩妥。" },
      { w:"interpreter", p:"n.", zh:"通譯；口譯", ex:"The court can provide an interpreter at the hearing.", zhEx:"開庭時法院可以提供通譯。" },
      { w:"residence permit", p:"n.", zh:"居留證", ex:"A foreign parent with custody of a Taiwanese child can usually keep the residence permit after a divorce.", zhEx:"對台灣籍子女有親權的外籍父母，離婚後通常可以保留居留證。" },
      { w:"reciprocity", p:"n.", zh:"平等互惠", ex:"A foreign heir can inherit land here only if there is reciprocity with their country.", zhEx:"外籍繼承人只有在其本國與我國平等互惠時，才能繼承台灣的土地。" },
      { w:"child abduction", p:"n.", zh:"（跨國）擄走子女", ex:"Taiwan is not a party to the Hague Convention on child abduction.", zhEx:"台灣不是海牙國際兒童誘拐公約的締約方。" }
    ]
  },

  /* ---------------- 9 ---------------- */
  { id: "client",
    en: "Talking with a client",
    zh: "與當事人溝通",
    note: { en: "Phrases for a first meeting: asking for the story, staying kind, and being clear about what comes next.",
            zh: "初次會談用得到的說法：請對方說明經過、表達同理，並清楚說明接下來的步驟。" },
    words: [
      { w:"walk me through", p:"ph.", zh:"從頭說明一遍", ex:"Could you walk me through what happened that night?", zhEx:"可以從頭跟我說一遍那天晚上發生了什麼事嗎？" },
      { w:"consultation", p:"n.", zh:"諮詢", ex:"The first consultation takes about an hour.", zhEx:"第一次諮詢大約一個小時。" },
      { w:"conflict check", p:"n.", zh:"利益衝突審查", ex:"Before we take the case, we run a conflict check.", zhEx:"接案之前，我們會先做利益衝突審查。" },
      { w:"engagement letter", p:"n.", zh:"委任契約", ex:"Please read the engagement letter carefully.", zhEx:"請仔細閱讀委任契約。" },
      { w:"take your time", p:"ph.", zh:"慢慢來，不用急", ex:"Take your time; we can stop whenever you need to.", zhEx:"慢慢來，你需要的話我們隨時可以暫停。" },
      { w:"must have been hard", p:"ph.", zh:"一定很不容易", ex:"That must have been hard for you and the children.", zhEx:"這對你和孩子來說一定很不容易。" },
      { w:"in confidence", p:"ph.", zh:"保密地", ex:"Everything you tell me is said in confidence.", zhEx:"你跟我說的每一件事都會保密。" },
      { w:"clarify", p:"v.", zh:"釐清；確認", ex:"Can I clarify one thing about the dates?", zhEx:"我可以確認一下日期的部分嗎？" },
      { w:"keep a record", p:"ph.", zh:"保留紀錄", ex:"Please keep a record of every payment he makes.", zhEx:"請把他每一筆付款都記錄下來。" },
      { w:"options", p:"n.", zh:"可以選擇的做法", ex:"Let me explain your options.", zhEx:"我來說明你有哪些選擇。" },
      { w:"realistic", p:"adj.", zh:"實際的", ex:"I want to be realistic about your chances.", zhEx:"我想實際地跟你談勝算。" },
      { w:"outcome", p:"n.", zh:"結果", ex:"I cannot promise any outcome, but I will explain the risks.", zhEx:"我無法保證任何結果，但我會說明風險。" },
      { w:"next step", p:"ph.", zh:"下一步", ex:"The next step is to file the petition.", zhEx:"下一步是遞出聲請狀。" },
      { w:"deadline", p:"n.", zh:"期限", ex:"The deadline is twenty days after you receive the judgment.", zhEx:"期限是收到判決後二十天。" },
      { w:"in writing", p:"ph.", zh:"以書面", ex:"Please send me their offer in writing.", zhEx:"請把對方的提議用書面寄給我。" },
      { w:"on your behalf", p:"ph.", zh:"代表你", ex:"I will speak to his lawyer on your behalf.", zhEx:"我會代表你跟他的律師談。" },
      { w:"consent", p:"n.", zh:"同意", ex:"We need your written consent before we contact your employer.", zhEx:"聯絡你的雇主之前，我們需要你的書面同意。" },
      { w:"fee", p:"n.", zh:"費用；律師費", ex:"Our fee covers the mediation and the first hearing.", zhEx:"我們的費用包含調解和第一次開庭。" }
    ]
  }

  ]
};

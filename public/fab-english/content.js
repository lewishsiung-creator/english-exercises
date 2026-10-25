/* Fab English — the 288 words on a semiconductor plant's own vocabulary sheet.

   Source: a bilingual word list handed over by a client, English term +
   part of speech + Traditional Chinese gloss, in alphabetical order. Two
   things were added here and are not in the source:

   - **Themes.** The sheet is A–Z, which is useless in a lesson: "acid" sits
     next to "active". The words are regrouped into eight areas of the plant
     so a teacher can take one area per session. The A–Z view is still one tap
     away, because that is the order the learner's printed copy is in.
   - **An example sentence for every word**, written for this page, with its
     中譯. Each English one is short, uses the word in its plant sense, and
     contains the headword *verbatim* — no inflection. That is deliberate: the
     quiz blanks are generated from these sentences, so an exact match is what
     makes a clean gap. If you edit a sentence, keep the headword in it
     unchanged.

   Everything Chinese — the gloss and the sentence's 中譯 — is one layer. 自學
   mode shows it, 教學 mode hides it behind a 中 chip. The English sentence is
   always visible: that is the part they should work out.

   Fields per word:
     w     the headword, as printed on the sheet
     p     part of speech, normalised (n. v. adj. adv. ph. prep.)
     zh    Traditional Chinese gloss, from the sheet
     ex    example sentence written for this page
     zhEx  its 中譯, written for this page (added when the page grew 自學 mode —
           self-study needs the sentence, not only the word)
     k     optional: the exact form used in ex, when it differs from w
           (e.g. w "Spec. / specification" appears as "spec"). The quiz uses
           this as the answer and the blank. */

window.FAB = {

  intro: {
    en: "Two hundred and eighty-eight words from the plant's own vocabulary sheet, grouped by where you meet them. Tap 中 on any line for the Chinese.",
    zh: "廠內常用單字表的 288 個字，依使用場合分成八組。點任一行的 中 可看中文。"
  },

  groups: [

  /* ---------------- 1 ---------------- */
  { id: "process",
    en: "Wafers, process and materials",
    zh: "晶圓、製程與材料",
    note: { en: "What is being made, what it is made of, and the steps it goes through.",
            zh: "做的是什麼、用什麼做，以及會經過哪些製程。" },
    words: [
      { w:"wafer", p:"n.", zh:"晶圓", ex:"One wafer can hold hundreds of chips.", zhEx:"一片晶圓上可以有好幾百顆晶片。" },
      { w:"chip", p:"n.", zh:"晶片", ex:"Every chip on this wafer must pass the same test.", zhEx:"這片晶圓上的每一顆晶片都要通過同樣的測試。" },
      { w:"semiconductor", p:"n.", zh:"半導體", ex:"She has worked in the semiconductor industry for ten years.", zhEx:"她在半導體業已經工作十年了。" },
      { w:"lithography", p:"n.", zh:"黃光／微影製程", ex:"The lot goes to lithography after cleaning.", zhEx:"這批貨清洗之後會送到黃光。" },
      { w:"etching", p:"n.", zh:"蝕刻製程", ex:"After etching, we measure the line width.", zhEx:"蝕刻之後，我們會量線寬。" },
      { w:"diffusion", p:"n.", zh:"擴散製程", ex:"The diffusion area runs at a very high temperature.", zhEx:"擴散區的溫度非常高。" },
      { w:"thin film", p:"n.", zh:"薄膜製程", ex:"The lot moves to thin film tomorrow morning.", zhEx:"這批貨明天早上會送到薄膜。" },
      { w:"EUV / extreme ultraviolet", p:"n.", zh:"極紫外光", k:"EUV", ex:"We use EUV for the smallest layers.", zhEx:"最小的層次我們用極紫外光。" },
      { w:"mask", p:"n.", zh:"光罩；口罩", ex:"Please put the mask on the stage carefully.", zhEx:"請小心把光罩放到載台上。" },
      { w:"recipe", p:"n.", zh:"處方程式；食譜", ex:"Check the recipe number before you start the run.", zhEx:"開始跑之前請先確認處方編號。" },
      { w:"process", p:"n.", zh:"過程、流程", ex:"Each process has its own set of rules.", zhEx:"每一道製程都有自己的規定。" },
      { w:"step", p:"n.", zh:"步驟", ex:"Do not skip any step in the procedure.", zhEx:"程序裡的每一個步驟都不可以跳過。" },
      { w:"stage", p:"n.", zh:"站別、階段", ex:"The wafer sits on the stage during exposure.", zhEx:"曝光的時候晶圓放在載台上。" },
      { w:"phase", p:"n.", zh:"階段", ex:"We are still in the first phase of the project.", zhEx:"這個專案我們還在第一階段。" },
      { w:"route", p:"n.", zh:"路線", ex:"The route tells you where the lot goes next.", zhEx:"流程路線會告訴你這批貨下一站去哪裡。" },
      { w:"beam", p:"n.", zh:"光束", ex:"The beam is too weak, so the image is not clear.", zhEx:"光束太弱，所以影像不清楚。" },
      { w:"light", p:"n.", zh:"光", ex:"Yellow light protects the material in the photo area.", zhEx:"黃光區的黃色燈光可以保護感光材料。" },
      { w:"acid", p:"n.", zh:"酸", ex:"Never touch the acid without gloves.", zhEx:"沒戴手套絕對不要碰酸液。" },
      { w:"chemical", p:"n.", zh:"化學、化學品", ex:"A new chemical arrived from the vendor this morning.", zhEx:"今天早上廠商送來一批新的化學品。" },
      { w:"gas", p:"n.", zh:"氣體", ex:"The gas line is checked every morning.", zhEx:"氣體管路每天早上都會檢查。" },
      { w:"liquid", p:"n.", zh:"液體", ex:"Wipe the liquid off the floor at once.", zhEx:"地上的液體要馬上擦掉。" },
      { w:"metal", p:"n.", zh:"金屬", ex:"The metal layer carries the current across the chip.", zhEx:"金屬層負責把電流傳送到晶片各處。" },
      { w:"glass", p:"n.", zh:"玻璃、鏡片", ex:"The glass in the door is cracked.", zhEx:"門上的玻璃裂掉了。" },
      { w:"material", p:"n.", zh:"原料", ex:"We are waiting for material from the warehouse.", zhEx:"我們在等倉庫送原料過來。" },
      { w:"oven", p:"n.", zh:"烤箱", ex:"Put the wafer in the oven for thirty minutes.", zhEx:"把晶圓放進烤箱烤三十分鐘。" },
      { w:"dry", p:"adj.", zh:"乾的", ex:"Make sure the surface is dry before the next step.", zhEx:"進到下一步之前要確認表面是乾的。" },
      { w:"wet", p:"adj.", zh:"濕的", ex:"The floor is still wet, so please walk slowly.", zhEx:"地板還是濕的，請走慢一點。" },
      { w:"temperature", p:"n.", zh:"溫度", ex:"The temperature is two degrees above the target.", zhEx:"溫度比目標值高兩度。" },
      { w:"thickness", p:"n.", zh:"厚度", ex:"The thickness is a little below the spec.", zhEx:"厚度比規格低了一點。" },
      { w:"pressure", p:"n.", zh:"壓力", ex:"The pressure inside the chamber must stay stable.", zhEx:"腔體裡的壓力必須保持穩定。" },
      { w:"align", p:"v.", zh:"對焦", ex:"Please align the wafer before you start.", zhEx:"開始之前請先對焦晶圓。" },
      { w:"focus", p:"n.", zh:"焦點", ex:"The focus is off, so the pattern looks blurry.", zhEx:"焦點跑掉了，所以圖案看起來很模糊。" },
      { w:"hole", p:"n.", zh:"孔、洞", ex:"There is a small hole in the glove.", zhEx:"手套上有一個小洞。" }
    ]
  },

  /* ---------------- 2 ---------------- */
  { id: "tool",
    en: "The tool: running it and fixing it",
    zh: "機台：操作與維修",
    note: { en: "Everything you say standing in front of a machine.",
            zh: "站在機台前會用到的字。" },
    words: [
      { w:"equipment", p:"n.", zh:"設備", ex:"This equipment needs service every three months.", zhEx:"這台設備每三個月要保養一次。" },
      { w:"machine", p:"n.", zh:"機器", ex:"The machine stopped in the middle of the run.", zhEx:"機器跑到一半停了。" },
      { w:"monitor", p:"n.", zh:"監視器、測機", ex:"Watch the monitor while the lot is running.", zhEx:"這批貨在跑的時候要盯著監視器。" },
      { w:"sorter", p:"n.", zh:"排序機、分類機", ex:"Take the cassette to the sorter first.", zhEx:"先把晶片盒拿去分類機。" },
      { w:"stocker", p:"n.", zh:"儲存櫃", ex:"The lot is waiting in the stocker.", zhEx:"這批貨在儲存櫃裡等。" },
      { w:"part", p:"n.", zh:"零件", ex:"The new part will arrive on Friday.", zhEx:"新零件星期五會到。" },
      { w:"switch", p:"n.", zh:"開關", ex:"The switch is on the left side of the machine.", zhEx:"開關在機器的左邊。" },
      { w:"power", p:"n.", zh:"力量、電源", ex:"Do not open the door while the power is on.", zhEx:"電源開著的時候不要打開門。" },
      { w:"function", p:"n.", zh:"功能", ex:"This function is not available in manual mode.", zhEx:"手動模式下不能用這個功能。" },
      { w:"parameter", p:"n.", zh:"參數", ex:"Do not change any parameter without approval.", zhEx:"沒有核准不可以改任何參數。" },
      { w:"automatic", p:"adj.", zh:"自動的", ex:"The tool is running in automatic mode now.", zhEx:"機台現在是自動模式。" },
      { w:"manual", p:"adj.", zh:"手動的", ex:"Go back to manual mode before you clean it.", zhEx:"清潔之前先切回手動模式。" },
      { w:"mechanical", p:"adj.", zh:"機械的", ex:"This looks like a mechanical problem, not a software one.", zhEx:"這看起來是機械問題，不是軟體問題。" },
      { w:"maintain", p:"v.", zh:"維護", ex:"We maintain this tool every Tuesday.", zhEx:"這台機台我們每個星期二保養。" },
      { w:"repair", p:"v.", zh:"修理", ex:"The vendor will repair it tomorrow.", zhEx:"廠商明天會來修。" },
      { w:"recover", p:"v.", zh:"復機", ex:"It took two hours to recover the tool.", zhEx:"這台機台花了兩個小時才復機。" },
      { w:"broken", p:"adj.", zh:"破掉的", ex:"The handle is broken, so do not use it.", zhEx:"把手壞掉了，不要用。" },
      { w:"reset", p:"v.", zh:"重設", ex:"Please reset the counter before the next lot.", zhEx:"下一批貨之前請先把計數器重設。" },
      { w:"run", p:"v.", zh:"運轉、跑", ex:"Let the tool run for another ten minutes.", zhEx:"讓機台再跑十分鐘。" },
      { w:"start", p:"n.", zh:"啟動", ex:"The start time is written on the log sheet.", zhEx:"啟動時間寫在工作紀錄上。" },
      { w:"standby", p:"n.", zh:"等待", ex:"The tool is on standby until the material arrives.", zhEx:"原料到之前機台先待機。" },
      { w:"hold", p:"v.", zh:"暫停", ex:"Please hold the lot until the engineer checks it.", zhEx:"這批貨先暫停，等工程師確認。" },
      { w:"freeze", p:"v.", zh:"凍結", ex:"The screen will freeze if you press too many keys.", zhEx:"按太多鍵畫面會當住。" },
      { w:"abort", p:"v.", zh:"中止", ex:"We had to abort the run after the alarm.", zhEx:"警報之後我們只好中止這次運行。" },
      { w:"purge", p:"v.", zh:"清除", ex:"Remember to purge the line before you change the gas.", zhEx:"換氣體之前記得先清管路。" },
      { w:"tune", p:"v.", zh:"調整", ex:"The engineer will tune the machine this afternoon.", zhEx:"工程師今天下午會調整機器。" },
      { w:"adjust", p:"v.", zh:"調整", ex:"Please adjust the pressure a little.", zhEx:"請把壓力調一下。" },
      { w:"press", p:"v.", zh:"按下", ex:"Do not press the button twice.", zhEx:"不要按兩次按鈕。" },
      { w:"execute", p:"v.", zh:"執行", ex:"The system will execute the commands in order.", zhEx:"系統會照順序執行指令。" },
      { w:"skip", p:"v.", zh:"跳過", ex:"Never skip a step to save time.", zhEx:"絕對不要為了省時間跳過步驟。" },
      { w:"lock", p:"v.", zh:"鎖住", ex:"Please lock the door after you leave.", zhEx:"離開之後請把門鎖上。" },
      { w:"release", p:"v.", zh:"釋放", ex:"The engineer will release the lot after the check.", zhEx:"確認完工程師會把這批貨放行。" },
      { w:"off-line", p:"adj.", zh:"離線的", ex:"The tool has been off-line since last night.", zhEx:"這台機台從昨天晚上就離線了。" },
      { w:"on-line", p:"adj.", zh:"在線的", ex:"The tool is back on-line now.", zhEx:"機台現在恢復上線了。" },
      { w:"available", p:"adj.", zh:"可使用的", ex:"No engineer is available at the moment.", zhEx:"現在沒有工程師有空。" },
      { w:"status", p:"n.", zh:"狀況", ex:"Check the status on the screen every hour.", zhEx:"每個小時看一次螢幕上的狀態。" }
    ]
  },

  /* ---------------- 3 ---------------- */
  { id: "move",
    en: "Moving material, and where things are",
    zh: "物料搬運與現場位置",
    note: { en: "Carrying a lot from one place to the next, and saying where it is.",
            zh: "把批貨從一站送到下一站，以及說明東西在哪裡。" },
    words: [
      { w:"lot", p:"n.", zh:"批貨", ex:"This lot has twenty-five wafers.", zhEx:"這批貨有二十五片晶圓。" },
      { w:"cassette", p:"n.", zh:"晶片專用盒", ex:"Put the wafers back in the cassette.", zhEx:"把晶圓放回晶片盒。" },
      { w:"pod", p:"n.", zh:"晶片傳送盒", ex:"Never open the pod outside the clean area.", zhEx:"絕對不要在潔淨區外面打開傳送盒。" },
      { w:"cart", p:"n.", zh:"手推車", ex:"Use the cart to move the boxes.", zhEx:"用手推車搬這些箱子。" },
      { w:"load", p:"v.", zh:"上貨、裝載", ex:"Please load the cassette into the tool.", zhEx:"請把晶片盒裝到機台上。" },
      { w:"unload", p:"v.", zh:"下貨、卸載", ex:"Do not unload the lot before the run finishes.", zhEx:"還沒跑完不要把這批貨卸下來。" },
      { w:"loading", p:"n.", zh:"負荷", ex:"The loading on this tool is heavy today.", zhEx:"這台機台今天負荷很重。" },
      { w:"move", p:"v. / n.", zh:"移動；產出", ex:"We move the lot to the next station at noon.", zhEx:"我們中午把這批貨送到下一站。" },
      { w:"lift", p:"v.", zh:"抬起、舉起", ex:"Two people should lift the box together.", zhEx:"這個箱子要兩個人一起抬。" },
      { w:"push", p:"v.", zh:"推進", ex:"Please push the cart slowly.", zhEx:"推車請推慢一點。" },
      { w:"handle", p:"v.", zh:"處理", ex:"Always handle a wafer with two hands.", zhEx:"拿晶圓一定要用兩隻手。" },
      { w:"remove", p:"v.", zh:"移開", ex:"Please remove the cover before you clean it.", zhEx:"清潔之前請先把蓋子移開。" },
      { w:"split", p:"n.", zh:"分帳、分批", ex:"We will split the lot into two groups.", zhEx:"我們會把這批貨分成兩組。" },
      { w:"merge", p:"v.", zh:"合併", ex:"Can we merge these two lots into one?", zhEx:"這兩批貨可以合併成一批嗎？" },
      { w:"bank", p:"n. / v.", zh:"銀行；暫存", ex:"We bank the lot here until the tool is free.", zhEx:"機台空出來之前這批貨先暫存在這裡。" },
      { w:"run-card", p:"n.", zh:"流程卡", ex:"The run-card travels with the lot.", zhEx:"流程卡跟著這批貨一起走。" },
      { w:"log sheet", p:"n.", zh:"工作紀錄", ex:"Write the time on the log sheet.", zhEx:"把時間寫在工作紀錄上。" },
      { w:"label", p:"n.", zh:"標籤", ex:"The label on the box is missing.", zhEx:"箱子上的標籤不見了。" },
      { w:"tag", p:"n. / v.", zh:"標籤；標註", ex:"Put a tag on the box before you send it.", zhEx:"送出去之前先在箱子上貼標籤。" },
      { w:"mark", p:"n.", zh:"記號", ex:"There is a mark on the back of the wafer.", zhEx:"晶圓背面有一個記號。" },
      { w:"tape", p:"n.", zh:"膠帶", ex:"Please seal the box with tape.", zhEx:"請用膠帶把箱子封好。" },
      { w:"bottle", p:"n.", zh:"瓶子", ex:"The bottle is almost empty.", zhEx:"這瓶快用完了。" },
      { w:"sheet", p:"n.", zh:"表單", ex:"Please sign the sheet when you finish.", zhEx:"做完之後請在表單上簽名。" },
      { w:"card", p:"n.", zh:"卡片", ex:"You need your card to open the door.", zhEx:"要用卡片才能開門。" },
      { w:"station", p:"n.", zh:"站", ex:"The lot is waiting at the next station.", zhEx:"這批貨在下一站等。" },
      { w:"location", p:"n.", zh:"位置", ex:"Write the location on the form.", zhEx:"把位置寫在表單上。" },
      { w:"position", p:"n.", zh:"位置", ex:"Put the tool back in its normal position.", zhEx:"把工具放回原來的位置。" },
      { w:"area", p:"n.", zh:"區域", ex:"This area is for trained staff only.", zhEx:"這個區域只有受過訓練的人員可以進入。" },
      { w:"center", p:"n.", zh:"中心", ex:"The training center is on the second floor.", zhEx:"訓練中心在二樓。" },
      { w:"line", p:"n.", zh:"直線", ex:"Please draw a line under the last row.", zhEx:"請在最後一列下面畫一條線。" },
      { w:"floor", p:"n.", zh:"地板", ex:"Please keep the floor clean and dry.", zhEx:"請保持地板乾淨乾燥。" },
      { w:"top", p:"n.", zh:"頂端", ex:"The date is printed at the top of the page.", zhEx:"日期印在這一頁的最上面。" },
      { w:"bottom", p:"n.", zh:"底部", ex:"Sign your name at the bottom of the sheet.", zhEx:"在表單最下面簽名。" },
      { w:"full", p:"adj.", zh:"滿的", ex:"The stocker is full, so we cannot store any more.", zhEx:"儲存櫃滿了，沒辦法再放。" },
      { w:"heavy", p:"adj.", zh:"重的", ex:"This box is too heavy for one person.", zhEx:"這個箱子一個人搬太重了。" }
    ]
  },

  /* ---------------- 4 ---------------- */
  { id: "quality",
    en: "Quality, measurement and yield",
    zh: "品質、量測與良率",
    note: { en: "The numbers the plant is judged on, and the words for checking them.",
            zh: "工廠被檢視的數字，以及檢查這些數字時用的字。" },
    words: [
      { w:"quality", p:"n.", zh:"品質", ex:"We never trade quality for speed.", zhEx:"我們絕對不會為了速度犧牲品質。" },
      { w:"yield", p:"n.", zh:"良率", ex:"The yield dropped by two percent last week.", zhEx:"上個星期良率掉了兩個百分點。" },
      { w:"defect", p:"n.", zh:"缺陷", ex:"The engineer found a defect on the surface.", zhEx:"工程師在表面發現一個缺陷。" },
      { w:"particle", p:"n.", zh:"微粒", ex:"One particle can ruin a whole wafer.", zhEx:"一顆微粒就可能毀掉一整片晶圓。" },
      { w:"contamination", p:"n.", zh:"污染", ex:"We check for contamination every shift.", zhEx:"我們每一班都會檢查有沒有污染。" },
      { w:"scrap", p:"n.", zh:"報廢", ex:"The whole lot went to scrap.", zhEx:"整批貨都報廢了。" },
      { w:"rework", p:"v.", zh:"重做", ex:"We will rework the lot instead of scrapping it.", zhEx:"這批貨我們重做，不報廢。" },
      { w:"scratch", p:"v.", zh:"刮傷", ex:"Do not scratch the surface with the tweezers.", zhEx:"不要用鑷子刮傷表面。" },
      { w:"inspect", p:"v.", zh:"檢查", ex:"Please inspect the wafer under the microscope.", zhEx:"請用顯微鏡檢查這片晶圓。" },
      { w:"inspection", p:"n.", zh:"檢驗", ex:"The inspection takes about ten minutes.", zhEx:"這道檢驗大概要十分鐘。" },
      { w:"measure", p:"v.", zh:"量測", ex:"We measure every wafer in the first lot.", zhEx:"第一批貨我們每一片都量。" },
      { w:"check", p:"v.", zh:"檢查", ex:"Please check the number before you sign.", zhEx:"簽名之前請先確認數字。" },
      { w:"audit", p:"v.", zh:"稽核、查核", ex:"The customer will audit our line next month.", zhEx:"客戶下個月會來稽核我們的產線。" },
      { w:"certify", p:"v.", zh:"證實、認證", ex:"The engineer must certify the tool after a repair.", zhEx:"維修之後工程師必須重新認證機台。" },
      { w:"re-certify", p:"v.", zh:"重新認證", ex:"We have to re-certify the tool every year.", zhEx:"這台機台每年都要重新認證。" },
      { w:"pass", p:"v.", zh:"合格", ex:"All the wafers pass the test.", zhEx:"所有晶圓都通過測試。" },
      { w:"Spec. / specification", p:"n.", zh:"規格", k:"spec", ex:"The result is inside the spec.", zhEx:"結果在規格範圍內。" },
      { w:"standard", p:"n.", zh:"標準", ex:"This is the standard for all our tools.", zhEx:"這是我們所有機台共同的標準。" },
      { w:"S.O.P / Standard Operating Procedures", p:"n.", zh:"標準作業程序", k:"SOP", ex:"Always follow the SOP step by step.", zhEx:"一定要照標準作業程序一步一步做。" },
      { w:"grade", p:"n.", zh:"等級", ex:"This material is a higher grade than the last one.", zhEx:"這批原料的等級比上一批高。" },
      { w:"level", p:"n.", zh:"程度", ex:"Her English level is good enough for a meeting.", zhEx:"她的英文程度開會夠用。" },
      { w:"rate", p:"n.", zh:"比率", ex:"The defect rate is very low this month.", zhEx:"這個月的不良率很低。" },
      { w:"average", p:"n.", zh:"平均", ex:"The average is about thirty lots a day.", zhEx:"平均一天大概三十批。" },
      { w:"count", p:"v.", zh:"計算", ex:"Please count the wafers before you close the box.", zhEx:"蓋上箱子之前請先數晶圓。" },
      { w:"quantity", p:"n.", zh:"數量", ex:"Write the quantity on the form.", zhEx:"把數量寫在表單上。" },
      { w:"number", p:"n.", zh:"號碼", ex:"The lot number is on the run-card.", zhEx:"批號寫在流程卡上。" },
      { w:"zero", p:"n.", zh:"零", ex:"We had zero accidents this year.", zhEx:"我們今年零事故。" },
      { w:"target", p:"n.", zh:"目標", ex:"We are still below the target.", zhEx:"我們還沒達到目標。" },
      { w:"benchmark", p:"n.", zh:"標竿學習", ex:"This line is the benchmark for the whole company.", zhEx:"這條線是全公司的標竿。" },
      { w:"trend", p:"n.", zh:"趨勢", ex:"The trend is going up week by week.", zhEx:"趨勢一週一週往上。" },
      { w:"turn rate", p:"n.", zh:"週轉率", ex:"A high turn rate means the tool is busy.", zhEx:"週轉率高表示機台很忙。" },
      { w:"improve", p:"v.", zh:"改善", ex:"We want to improve the cycle time.", zhEx:"我們想改善生產週期。" },
      { w:"enhance", p:"v.", zh:"增進", ex:"The new tool will enhance our capacity.", zhEx:"新機台可以增加我們的產能。" },
      { w:"decline", p:"v.", zh:"減少", ex:"Orders decline at the end of the year.", zhEx:"年底訂單會減少。" },
      { w:"impact", p:"n.", zh:"影響", ex:"The delay had a big impact on the schedule.", zhEx:"這次延遲對時程影響很大。" },
      { w:"perfect", p:"adj.", zh:"完美的", ex:"The result is not perfect, but it passes.", zhEx:"結果不算完美，但是有過。" },
      { w:"normal", p:"adj.", zh:"正常的", ex:"Everything looks normal on the screen.", zhEx:"螢幕上看起來一切正常。" },
      { w:"abnormal", p:"adj.", zh:"異常的", ex:"Report anything abnormal to your leader.", zhEx:"有任何異常都要回報給組長。" },
      { w:"same", p:"adj.", zh:"相同的", ex:"Both lots use the same recipe.", zhEx:"兩批貨用的是同一個處方。" },
      { w:"actual", p:"adj.", zh:"真實的", ex:"The actual number is higher than the plan.", zhEx:"實際的數字比計畫高。" }
    ]
  },

  /* ---------------- 5 ---------------- */
  { id: "safety",
    en: "Alarms, problems and safety",
    zh: "警報、異常與安全",
    note: { en: "When something goes wrong, and how you keep people safe.",
            zh: "出狀況的時候，以及如何維護人員安全。" },
    words: [
      { w:"alarm", p:"n.", zh:"警報", ex:"The alarm went off at three in the morning.", zhEx:"警報在凌晨三點響了。" },
      { w:"alert", p:"n.", zh:"警報", ex:"The system sent an alert to the engineer.", zhEx:"系統發了一個警報給工程師。" },
      { w:"warning", p:"n.", zh:"警告", ex:"There is a warning on the screen.", zhEx:"螢幕上有一個警告。" },
      { w:"error", p:"n.", zh:"錯誤", ex:"The error code is written in the handbook.", zhEx:"錯誤代碼寫在手冊裡。" },
      { w:"fault", p:"n.", zh:"錯誤", ex:"The fault was in the power supply.", zhEx:"問題出在電源供應器。" },
      { w:"event", p:"n.", zh:"事件", ex:"Write down every event in the log sheet.", zhEx:"每一個事件都要記在工作紀錄上。" },
      { w:"emergency", p:"n.", zh:"緊急情況", ex:"In an emergency, call your leader first.", zhEx:"緊急狀況時先打給組長。" },
      { w:"emergency stop", p:"n.", zh:"緊急停止", ex:"Use the emergency stop if someone is in danger.", zhEx:"有人有危險就按緊急停止。" },
      { w:"miss-operation", p:"n.", zh:"錯誤動作", ex:"A miss-operation can damage the whole lot.", zhEx:"一個錯誤動作可能毀掉整批貨。" },
      { w:"inhibition", p:"n.", zh:"禁止禁用", ex:"The tool is under inhibition until the check is done.", zhEx:"檢查完成之前這台機台禁用。" },
      { w:"safe", p:"adj.", zh:"安全的", ex:"It is safe to open the door now.", zhEx:"現在可以安全打開門了。" },
      { w:"protect", p:"v.", zh:"保護", ex:"Gloves protect the wafer from your hands.", zhEx:"手套可以保護晶圓不被手弄髒。" },
      { w:"helmet", p:"n.", zh:"安全帽", ex:"Always wear a helmet in the construction area.", zhEx:"在施工區一定要戴安全帽。" },
      { w:"gloves", p:"n.", zh:"手套", ex:"Please change your gloves before you touch a wafer.", zhEx:"碰晶圓之前請先換手套。" },
      { w:"clean chamber", p:"n.", zh:"潔淨室", ex:"No food is allowed in the clean chamber.", zhEx:"潔淨室裡不可以有食物。" },
      { w:"air shower", p:"n.", zh:"潔淨通道", ex:"Please stand in the air shower for thirty seconds.", zhEx:"請在潔淨通道裡站三十秒。" },
      { w:"clean", p:"v.", zh:"清潔", ex:"Please clean the table after every shift.", zhEx:"每一班結束都要清潔桌面。" },
      { w:"environment", p:"n.", zh:"環境", ex:"A stable environment keeps the yield high.", zhEx:"穩定的環境可以維持高良率。" },
      { w:"hot", p:"adj.", zh:"熱的", ex:"The surface is still hot, so do not touch it.", zhEx:"表面還很燙，不要碰。" },
      { w:"concern", p:"v.", zh:"擔憂", ex:"These numbers concern me a little.", zhEx:"這些數字讓我有點擔心。" },
      { w:"remind", p:"v.", zh:"提醒", ex:"Please remind the night shift about the change.", zhEx:"請提醒夜班這個異動。" },
      { w:"inform", p:"v.", zh:"通知", ex:"Please inform the engineer as soon as you see it.", zhEx:"一看到就請馬上通知工程師。" },
      { w:"notice", p:"n.", zh:"通知", ex:"There is a notice on the door about the training.", zhEx:"門上有一張訓練的通知。" },
      { w:"lose", p:"v.", zh:"遺失", ex:"Do not lose the run-card.", zhEx:"不要把流程卡弄丟。" },
      { w:"find", p:"v.", zh:"發現", ex:"We could not find the missing wafer.", zhEx:"我們找不到那片不見的晶圓。" },
      { w:"help", p:"v.", zh:"幫助", ex:"Can you help me lift this box?", zhEx:"可以幫我抬一下這個箱子嗎？" },
      { w:"support", p:"n.", zh:"支援", ex:"We need support from the day shift.", zhEx:"我們需要白班支援。" },
      { w:"backup", p:"n.", zh:"支援", ex:"Is there a backup tool for this step?", zhEx:"這一站有沒有備援機台？" },
      { w:"service", p:"n.", zh:"服務", ex:"The tool is out of service today.", zhEx:"這台機台今天停用。" }
    ]
  },

  /* ---------------- 6 ---------------- */
  { id: "system",
    en: "Computers and systems",
    zh: "電腦與系統",
    note: { en: "The screen in front of you, and what you do to it.",
            zh: "眼前的螢幕，以及在上面做的動作。" },
    words: [
      { w:"computer", p:"n.", zh:"電腦", ex:"The computer in the office is very slow.", zhEx:"辦公室那台電腦很慢。" },
      { w:"system", p:"n.", zh:"系統", ex:"The system will be down on Sunday.", zhEx:"系統星期天會停機。" },
      { w:"internet", p:"n.", zh:"網際網路", ex:"There is no internet inside the clean area.", zhEx:"潔淨區裡面沒有網路。" },
      { w:"keyboard", p:"n.", zh:"鍵盤", ex:"Please wipe the keyboard before you use it.", zhEx:"用之前請先把鍵盤擦一下。" },
      { w:"screen", p:"n.", zh:"螢幕", ex:"The message is on the screen.", zhEx:"訊息在螢幕上。" },
      { w:"window", p:"n.", zh:"視窗", ex:"Please close the window and open it again.", zhEx:"請把視窗關掉再重新打開。" },
      { w:"hard-disk", p:"n.", zh:"硬盤", ex:"The hard-disk is almost full.", zhEx:"硬碟快滿了。" },
      { w:"password", p:"n.", zh:"密碼", ex:"Please change your password every three months.", zhEx:"請每三個月換一次密碼。" },
      { w:"username", p:"n.", zh:"使用者名稱", ex:"Type your username and then your password.", zhEx:"先輸入使用者名稱，再輸入密碼。" },
      { w:"data", p:"n.", zh:"資料", ex:"The data is saved on the server every night.", zhEx:"資料每天晚上會存到伺服器。" },
      { w:"input", p:"n.", zh:"輸入", ex:"The input is wrong, so the result is wrong.", zhEx:"輸入錯了，所以結果也錯了。" },
      { w:"output", p:"n.", zh:"輸出", ex:"The output for this shift is higher than yesterday.", zhEx:"這一班的產出比昨天高。" },
      { w:"enter", p:"v.", zh:"進入", ex:"You need a card to enter the fab.", zhEx:"要有卡片才能進廠。" },
      { w:"exit", p:"n.", zh:"退出", ex:"The exit is at the end of the corridor.", zhEx:"出口在走廊盡頭。" },
      { w:"select", p:"v.", zh:"選擇", ex:"Please select the correct recipe from the list.", zhEx:"請從清單裡選出正確的處方。" },
      { w:"choose", p:"v.", zh:"挑選", ex:"You can choose any time before Friday.", zhEx:"星期五之前你可以挑任何時間。" },
      { w:"delete", p:"v.", zh:"刪除", ex:"Do not delete the old file.", zhEx:"不要刪掉舊檔案。" },
      { w:"clear", p:"v.", zh:"清除", ex:"Please clear the error before you start again.", zhEx:"重新開始之前請先清除錯誤。" },
      { w:"save", p:"v.", zh:"儲存", ex:"Remember to save the file before you close it.", zhEx:"關檔之前記得先儲存。" },
      { w:"copy", p:"n.", zh:"拷貝", ex:"Please send me a copy of the report.", zhEx:"請給我一份報告的副本。" },
      { w:"print", p:"n.", zh:"列印", ex:"The print is not clear enough to read.", zhEx:"列印出來不夠清楚，看不清楚。" },
      { w:"preview", p:"n.", zh:"預覽", ex:"Look at the preview before you print it.", zhEx:"列印之前先看預覽。" },
      { w:"page", p:"n.", zh:"頁數", ex:"The answer is on page three.", zhEx:"答案在第三頁。" },
      { w:"link", p:"n.", zh:"連結", ex:"The link does not work on my computer.", zhEx:"這個連結在我電腦上打不開。" },
      { w:"list", p:"n.", zh:"清單", ex:"Your name is not on the list.", zhEx:"清單上沒有你的名字。" },
      { w:"show", p:"v.", zh:"顯示", ex:"The chart will show the trend clearly.", zhEx:"這張圖可以清楚顯示趨勢。" },
      { w:"view", p:"v.", zh:"查看", ex:"You can view the record at any time.", zhEx:"你隨時都可以查看紀錄。" },
      { w:"track", p:"v.", zh:"追蹤", ex:"We track every lot through the system.", zhEx:"我們用系統追蹤每一批貨。" },
      { w:"collect", p:"v.", zh:"蒐集", ex:"We collect the data every hour.", zhEx:"我們每小時蒐集一次資料。" },
      { w:"AI", p:"n.", zh:"人工智慧", ex:"The team uses AI to find defects faster.", zhEx:"這個團隊用人工智慧更快找出缺陷。" },
      { w:"instruction", p:"n.", zh:"指令", ex:"Read the instruction on the screen carefully.", zhEx:"仔細看螢幕上的指令。" },
      { w:"cancel", p:"v.", zh:"取消", ex:"Please cancel the job and start again.", zhEx:"請取消這個工作重新開始。" },
      { w:"confirm", p:"v.", zh:"確認", ex:"Please confirm the number with the engineer.", zhEx:"請跟工程師確認這個數字。" },
      { w:"complete", p:"v.", zh:"完成", ex:"Please complete the form before you leave.", zhEx:"離開之前請把表單填完。" },
      { w:"continue", p:"v.", zh:"繼續", ex:"You can continue the run after the check.", zhEx:"確認完就可以繼續跑。" },
      { w:"control", p:"n.", zh:"控制", ex:"The control room is on the third floor.", zhEx:"控制室在三樓。" },
      { w:"use", p:"v.", zh:"使用", ex:"Always use two hands to carry the pod.", zhEx:"搬傳送盒一定要用兩隻手。" },
      { w:"add", p:"v.", zh:"增加", ex:"Please add your name to the list.", zhEx:"請把你的名字加到清單上。" },
      { w:"more", p:"adj.", zh:"更多的", ex:"We need more people on the night shift.", zhEx:"夜班需要更多人。" }
    ]
  },

  /* ---------------- 7 ---------------- */
  { id: "work",
    en: "Shifts, people and time",
    zh: "班務、同仁與時間",
    note: { en: "Who you work with, when you work, and how late something is.",
            zh: "和誰一起工作、什麼時候上班，以及事情延遲了多久。" },
    words: [
      { w:"job", p:"n.", zh:"工作", ex:"This job takes about two hours.", zhEx:"這個工作大概要兩個小時。" },
      { w:"shift", p:"n.", zh:"班次", ex:"My shift starts at eight in the morning.", zhEx:"我的班從早上八點開始。" },
      { w:"leader", p:"n.", zh:"組長", ex:"Ask your leader before you change anything.", zhEx:"要改任何東西之前先問組長。" },
      { w:"supervisor", p:"n.", zh:"監督者", ex:"The supervisor signs the form at the end.", zhEx:"最後由主管在表單上簽名。" },
      { w:"engineer", p:"n.", zh:"工程師", ex:"The engineer is on the way to the tool.", zhEx:"工程師正在前往機台的路上。" },
      { w:"technician", p:"n.", zh:"技術員", ex:"A technician will come after lunch.", zhEx:"技術員午餐後會過來。" },
      { w:"group", p:"n.", zh:"群組", ex:"Our group has twelve people.", zhEx:"我們這組有十二個人。" },
      { w:"company", p:"n.", zh:"公司", ex:"The company has plants in three countries.", zhEx:"公司在三個國家有廠。" },
      { w:"customer", p:"n.", zh:"客戶", ex:"The customer wants the lot by Friday.", zhEx:"客戶希望這批貨星期五前出。" },
      { w:"vendor", p:"n.", zh:"廠商", ex:"The vendor will send a new part.", zhEx:"廠商會寄新零件過來。" },
      { w:"office", p:"n.", zh:"辦公室", ex:"The meeting is in the office upstairs.", zhEx:"會議在樓上的辦公室。" },
      { w:"lobby", p:"n.", zh:"大廳", ex:"Please wait in the lobby.", zhEx:"請在大廳等。" },
      { w:"laboratory", p:"n.", zh:"實驗室", ex:"The sample went to the laboratory this morning.", zhEx:"樣品今天早上送到實驗室了。" },
      { w:"shuttle", p:"n.", zh:"接駁車", ex:"The shuttle leaves every twenty minutes.", zhEx:"接駁車每二十分鐘一班。" },
      { w:"telephone", p:"n.", zh:"電話", ex:"The telephone on the wall is for emergencies only.", zhEx:"牆上那支電話只能緊急時用。" },
      { w:"interview", p:"n.", zh:"面試", ex:"I have an interview on Monday.", zhEx:"我星期一有面試。" },
      { w:"training", p:"n.", zh:"訓練", ex:"The training takes two full days.", zhEx:"這個訓練要整整兩天。" },
      { w:"learn", p:"v.", zh:"學習", ex:"New staff learn the rules in the first week.", zhEx:"新進人員第一週要學規定。" },
      { w:"practice", p:"v.", zh:"練習", ex:"Please practice the words before the meeting.", zhEx:"開會之前請先練習這些單字。" },
      { w:"prepare", p:"v.", zh:"準備", ex:"Please prepare the report before Friday.", zhEx:"請在星期五之前把報告準備好。" },
      { w:"ability", p:"n.", zh:"能力", ex:"Language ability is important for this job.", zhEx:"語言能力對這份工作很重要。" },
      { w:"absence", p:"n.", zh:"缺席", ex:"Please report any absence to your leader.", zhEx:"缺席請向組長回報。" },
      { w:"take leave", p:"ph.", zh:"請假", ex:"I need to take leave next Wednesday.", zhEx:"我下星期三要請假。" },
      { w:"on time", p:"ph.", zh:"準時", ex:"The lot arrived on time.", zhEx:"這批貨準時到了。" },
      { w:"over time", p:"ph.", zh:"加班", ex:"We worked over time to finish the order.", zhEx:"我們加班把這張訂單做完。" },
      { w:"daily", p:"adj.", zh:"每日的", ex:"The daily report is due at six.", zhEx:"日報六點要交。" },
      { w:"weekly", p:"adv.", zh:"每週地", ex:"We meet weekly to review the yield.", zhEx:"我們每週開會檢討良率。" },
      { w:"monthly", p:"adj.", zh:"每月的", ex:"The monthly meeting is on the first Friday.", zhEx:"月會在每個月第一個星期五。" },
      { w:"annually", p:"adv.", zh:"每年的", ex:"The tool is checked annually.", zhEx:"這台機台每年檢查一次。" },
      { w:"time", p:"n.", zh:"時間", ex:"There is not enough time to finish today.", zhEx:"時間不夠，今天做不完。" },
      { w:"date", p:"n.", zh:"日期", ex:"Write the date at the top of the sheet.", zhEx:"把日期寫在表單最上面。" },
      { w:"cycle", p:"n.", zh:"週期", ex:"One cycle takes about four hours.", zhEx:"一個週期大概四個小時。" },
      { w:"cycle time", p:"n.", zh:"生產週期", ex:"We cut the cycle time by one day.", zhEx:"我們把生產週期縮短了一天。" },
      { w:"delay", p:"v.", zh:"延遲", ex:"One alarm can delay the whole lot.", zhEx:"一個警報就可能讓整批貨延遲。" },
      { w:"postpone", p:"v.", zh:"延期", ex:"We had to postpone the training.", zhEx:"我們只好把訓練延期。" },
      { w:"priority", p:"n.", zh:"優先順序", ex:"This lot has the highest priority.", zhEx:"這批貨的優先順序最高。" },
      { w:"super hot run", p:"n.", zh:"超級急件", ex:"The customer asked for a super hot run.", zhEx:"客戶要求做超級急件。" },
      { w:"waiting", p:"n.", zh:"等待", ex:"The waiting time is about two hours.", zhEx:"等待時間大概兩個小時。" },
      { w:"speed", p:"n.", zh:"速度", ex:"Do not increase the speed without approval.", zhEx:"沒有核准不可以提高速度。" },
      { w:"plan", p:"n.", zh:"計劃", ex:"The plan for next week is on the board.", zhEx:"下週的計畫貼在板子上。" },
      { w:"keep", p:"v.", zh:"保持", ex:"Please keep the door closed.", zhEx:"請保持門關著。" },
      { w:"follow", p:"v.", zh:"照做、跟隨", ex:"Please follow the steps exactly.", zhEx:"請完全照著步驟做。" },
      { w:"change", p:"v.", zh:"更換", ex:"Please change the filter every month.", zhEx:"請每個月更換濾網。" }
    ]
  },

  /* ---------------- 8 ---------------- */
  { id: "report",
    en: "Documents, reporting and the business",
    zh: "文件、回報與公司業務",
    note: { en: "Writing it down, passing it on, and talking about the company.",
            zh: "把事情寫下來、往上回報，以及談論公司。" },
    words: [
      { w:"document", p:"n.", zh:"文件", ex:"Every document must have a date.", zhEx:"每一份文件都要有日期。" },
      { w:"report", p:"n.", zh:"報告", ex:"Please send the report to your leader by five.", zhEx:"請在五點前把報告寄給組長。" },
      { w:"record", p:"n.", zh:"記錄", ex:"We keep a record of every run.", zhEx:"每一次運行我們都會留紀錄。" },
      { w:"note", p:"n.", zh:"註解", ex:"There is a note at the bottom of the page.", zhEx:"這一頁最下面有一條註解。" },
      { w:"remark", p:"n.", zh:"註記", ex:"Please add a remark if something looks strange.", zhEx:"覺得哪裡怪怪的請加註記。" },
      { w:"comment", p:"n.", zh:"評論", ex:"The engineer left a comment on the form.", zhEx:"工程師在表單上留了評論。" },
      { w:"message", p:"n.", zh:"訊息", ex:"I got your message this morning.", zhEx:"我今天早上收到你的訊息了。" },
      { w:"information", p:"n.", zh:"資訊", ex:"This information is only for our team.", zhEx:"這個資訊只限我們團隊。" },
      { w:"chart", p:"n.", zh:"圖表", ex:"The chart shows the yield for each week.", zhEx:"這張圖表顯示每一週的良率。" },
      { w:"title", p:"n.", zh:"標題", ex:"The title of the report is on the first page.", zhEx:"報告的標題在第一頁。" },
      { w:"paper", p:"n.", zh:"紙張", ex:"The printer is out of paper.", zhEx:"印表機沒紙了。" },
      { w:"photo", p:"n.", zh:"相片", ex:"Please take a photo of the defect.", zhEx:"請把缺陷拍照。" },
      { w:"color", p:"n.", zh:"顏色", ex:"The color of the light tells you the status.", zhEx:"燈的顏色會告訴你目前的狀態。" },
      { w:"green", p:"n.", zh:"綠色", ex:"When the light turns green, the tool is ready.", zhEx:"燈變綠色就表示機台好了。" },
      { w:"point", p:"n.", zh:"點", ex:"That is a good point for the meeting.", zhEx:"這一點很適合在會議上提。" },
      { w:"source", p:"n.", zh:"來源", ex:"We still do not know the source of the problem.", zhEx:"我們還不知道問題的來源。" },
      { w:"rule", p:"n.", zh:"規則", ex:"The rule is the same for everyone.", zhEx:"規則對每個人都一樣。" },
      { w:"issue", p:"v. / n.", zh:"發行；議題", ex:"We will discuss this issue tomorrow.", zhEx:"這個議題我們明天討論。" },
      { w:"confidential", p:"adj.", zh:"機密的", ex:"This file is confidential.", zhEx:"這份檔案是機密的。" },
      { w:"personal", p:"adj.", zh:"個人的", ex:"Personal phones are not allowed inside.", zhEx:"裡面不可以帶個人手機。" },
      { w:"positive", p:"adj.", zh:"正向的", ex:"The customer gave us positive feedback.", zhEx:"客戶給了我們正面的回饋。" },
      { w:"active", p:"adj.", zh:"主動的", ex:"Only one recipe is active at the moment.", zhEx:"目前只有一個處方在作用中。" },
      { w:"basic", p:"adj.", zh:"基礎的", ex:"Everyone learns the basic rules first.", zhEx:"每個人都先學基本規定。" },
      { w:"new", p:"adj.", zh:"新的", ex:"The new engineer starts on Monday.", zhEx:"新來的工程師星期一報到。" },
      { w:"super", p:"adj.", zh:"超級的", ex:"This is a super urgent case.", zhEx:"這是超級緊急的案子。" },
      { w:"success", p:"n.", zh:"成功", ex:"The trial was a success.", zhEx:"這次試作很成功。" },
      { w:"product", p:"n.", zh:"產品", ex:"This product goes to a car maker.", zhEx:"這個產品是要出給車廠的。" },
      { w:"manufacture", p:"v.", zh:"製造", ex:"We manufacture chips for customers all over the world.", zhEx:"我們為全世界的客戶製造晶片。" },
      { w:"operation", p:"n.", zh:"操作", ex:"The operation of this tool is very simple.", zhEx:"這台機台的操作非常簡單。" },
      { w:"price", p:"n.", zh:"價格", ex:"The price of the material went up.", zhEx:"原料的價格上漲了。" },
      { w:"plus", p:"prep.", zh:"加上", ex:"The team plus the engineer will be there.", zhEx:"這個團隊加上工程師都會到。" },
      { w:"automotive", p:"adj.", zh:"汽車的", ex:"Our automotive customers ask for a higher standard.", zhEx:"我們的汽車客戶要求更高的標準。" },
      { w:"attach", p:"v.", zh:"附上", ex:"Please attach the report to your email.", zhEx:"請把報告附在你的郵件裡。" }
    ]
  }

  ]
};

/* =========================================================
   Mellow Meow 專案資料檔（內容）
   之後 Claude 給你新版時，只要替換這個檔案即可。
   你在網站上勾選的進度與筆記存在瀏覽器裡，不會被覆蓋
   （對應方式是每個項目的 id，請不要隨意更改 id）。
   ========================================================= */
window.MM_DATA = {
  version: "2026.11.11-3",
  updated: "2026-11-11",

  rules: [
    "主力只經營 YouTube 和 Instagram，Threads 只用 IG 發文時的「分享到 Threads」順手帶過。",
    "一首歌，同一個平台最多 2 則：YT＝歌詞影片＋1 支 Short；IG＝1 支 Reel＋1 則歌詞互動輪播（7 張）。",
    "語氣像在超市後門一起放空的同事：不勵志、不雞湯、有點累但會笑。",
    "固定互動：「用一句話形容你今天」，每首歌挑幾則寫進下一首，並在說明欄標註。說到要做到。",
    "不講創作過程，不用藝術家口吻。我們都是普通上班族。"
  ],

  phases: [
    {
      id: "done",
      title: "已經搞定的",
      sub: "11/10 完成的頻道門面",
      tasks: [
        { id: "x1", title: "YT Handle 改成 @MellowMeow-Radio", done: true },
        { id: "x2", title: "YT、IG 頭像換成戴耳機的療癒黑貓", done: true },
        { id: "x3", title: "YT 橫幅（窗邊黑貓・安全區版）", done: true },
        { id: "x4", title: "YT 頻道關鍵字換成 lo-fi／下班相關", done: true },
        { id: "x5", title: "YT 浮水印（影片結尾顯示）", done: true },
        { id: "x6", title: "YT 連結名稱改成 Instagram", done: true },
        { id: "x7", title: "YT 上傳預設值：類別音樂", done: true },
        { id: "x8", title: "IG 名稱、帳號 mellowmeow.radio、簡介、YT 連結", done: true }
      ]
    },
    {
      id: "A",
      title: "頻道設定收尾",
      sub: "這週內，大約 15 分鐘",
      tasks: [
        {
          id: "a1",
          title: "YT 頻道名稱改成「Mellow Meow｜下班後的小陪伴」",
          tag: "11/11 以後",
          detail: "後台說要等 24 小時才能再改。改完 14 天內最好都不要再動。",
          steps: ["YouTube 工作室 → 自訂 → 基本資訊", "名稱欄位改成：Mellow Meow｜下班後的小陪伴", "右上角按「發布」"]
        },
        {
          id: "a2",
          title: "YT 頻道說明換成新語氣版（可選）",
          tag: "YT",
          detail: "現在線上那版也可以繼續用。新版語氣比較像上班族，也保留了「一句話變成下一首歌」，在「品牌」分頁的「頻道設定紀錄」裡。",
          steps: ["到「品牌」分頁複製「YT 頻道說明（新語氣版）」", "YouTube 工作室 → 自訂 → 基本資訊 → 說明，整段取代", "按「發布」"]
        },
        {
          id: "a3",
          title: "IG 簡介換成新語氣版（可選）",
          tag: "IG",
          detail: "現在的簡介可以繼續用。新版語氣更口語，也保留了「一句話變成下一首歌」，在「品牌」分頁。"
        },
        {
          id: "a4",
          title: "上傳預設值：標題和說明的語言改成中文（台灣）",
          tag: "YT",
          detail: "影片語言維持英文（歌詞是英文），但標題和說明是中文，這欄會影響 YouTube 把影片推給誰。",
          steps: ["YouTube 工作室 → 設定 → 上傳預設值 → 進階設定", "「影片標題和說明的語言」改成 中文（台灣）", "儲存"]
        }
      ]
    },
    {
      id: "E",
      ongoing: true,
      title: "長期節奏",
      sub: "有空再慢慢來",
      tasks: [
        {
          id: "e1",
          title: "每隔週五一首新歌，照「發布公式」走",
          tag: "固定",
          detail: "每首歌：YT 歌詞影片＋1 支 Short；IG 1 支 Reel＋1 則輪播。不多發。"
        },
        {
          id: "e2",
          title: "累積 4 首歌後，做一支 20–30 分鐘的「下班歌單」",
          tag: "長片",
          detail: "只用自己的歌，畫面用窗邊黑貓。長片能拉觀看時長，但不要做成無限循環的量產片。"
        },
        {
          id: "e3",
          title: "La La 上架 Spotify / Apple Music",
          tag: "串流",
          detail: "透過發行商上架。上架前先確認該發行商對 AI 輔助音樂的規定。"
        }
      ]
    }
  ],

  songs: [
    {
      id: "lala",
      title: "La La",
      subtitle: "sunny day, stay with me",
      date: "2026-11-13T21:00:00+08:00",
      schedule: [
        {
          day: "第 1 波",
          date: "11/13（五）21:00",
          items: [
            { platform: "YT", what: "歌詞影片首播＋置頂留言", task: "c1" },
            { platform: "IG", what: "Reel（順手分享到 Threads）", task: "c2" }
          ]
        },
        {
          day: "第 2 波",
          date: "11/16（一）21:00",
          items: [
            { platform: "YT", what: "Short（同一支短片）", task: "d1" },
            { platform: "IG", what: "歌詞填空輪播（7 張）", task: "d2" }
          ]
        }
      ],
      copy: [
        {
          label: "定案：方案 A｜下班那一刻",
          platform: "YT",
          text: `標題：La La｜打卡下班的那一刻 ☁️ Original Lo-fi
縮圖：下班了，這段時間是你的`
        },
        {
          label: "影片說明欄",
          platform: "YT",
          text: `下班後，給自己一首歌的時間，
誰的訊息都先不用回。

💬 留言用一句話形容你今天，可能會被寫進下一首歌。
🎧 新歌每隔週五上線｜https://www.youtube.com/@MellowMeow-Radio
📷 IG｜https://www.instagram.com/mellowmeow.radio/

音樂：Mellow Meow（AI 輔助創作）

#lofi #下班音樂 #原創歌曲`
        },
        {
          label: "縮圖 GPT Prompt（先上傳 La_La_YT-Cover.jpg）",
          platform: "YT",
          text: `Edit the attached YouTube thumbnail. Keep EVERYTHING exactly as it is: the record sleeve, the vinyl, the blurred sky background, the film grain, the colors, the "LO-FI SINGLE" label, the large script "La La", the line "sunny day, stay with me", the audio wave bars and "LYRIC VIDEO". Same positions, sizes and fonts.

Only add ONE line of Traditional Chinese text: 「下班了，這段時間是你的」
- Position: right side, between "sunny day, stay with me" and the audio wave bars, aligned with the other text on the right.
- Style: elegant Traditional Chinese serif (like Noto Serif TC), medium weight, cream white (#F4EEE3), matching the existing text color, with a very soft subtle shadow.
- Size: a bit larger than "sunny day, stay with me" so it is readable on a phone, but clearly smaller than "La La".
- If needed, move the audio wave bars and "LYRIC VIDEO" slightly down to keep balanced spacing.

Do not add any other text, emoji, stickers or decorations. Do not change any existing text. Keep 16:9.`
        },
        {
          label: "標籤（填在「標籤」欄位，不會顯示在說明欄）",
          platform: "YT",
          text: `La La, Mellow Meow, lofi, lo-fi music, chill lofi, 原創歌曲, 下班音樂, 上班族, 療癒音樂, 放鬆音樂, 珍奶, sunny day music, walking music, lyric video, 華語lofi, cozy music`
        },
        {
          label: "置頂留言",
          platform: "YT",
          text: `以前來看貓咪搞笑片的朋友，我還在，只是改成陪你下班了 🐈‍⬛

用一句話形容你今天 ☁️
我會挑幾則寫進下一首歌，被選到的會標在說明欄。`
        },
        {
          label: "Short 標題＋說明",
          platform: "YT",
          text: `標題：下班後，給自己一首歌的時間 ☁️
說明：完整版〈La La〉在頻道首頁。今天也辛苦了。`
        },
        {
          label: "Reel 文案（11/13 週五）",
          platform: "IG",
          text: `週五下班後的晚上，終於可以不用回訊息了 ☁️

Mellow Meow 第一首歌〈La La〉
完整版在 YouTube（主頁連結）`
        },
        {
          label: "歌詞填空輪播：7 張的內容（Figma 已完成）",
          platform: "IG",
          text: `01｜封面：La la, no more ＿＿／副歌缺一個字，換你來填。（黑貓：往右滑 →）
02｜原歌詞：La la, no more worries／La la，煩惱都先別管了 → 但週一晚上，這句好像不太夠用。
03｜上班族版本 1：no more 臨時會議／17:55，行事曆突然多了一個「快速對一下」。
04｜上班族版本 2：no more 下班後的群組訊息／手機一亮，就知道今晚又不是自己的了。
05｜上班族版本 3：no more 週一／這個應該不用解釋。
06｜換你填空：La la, no more ＿＿＿／換你了：你最想 no more 的是？（黑貓：我先：no more 臨時會議）
07｜頻道介紹：Mellow Meow／下班後，給自己一首歌的時間／每隔週五 21:00 新歌／收藏起來，週一晚上再聽一次`
        },
        {
          label: "歌詞填空輪播文案（11/16 週一）",
          platform: "IG",
          text: `〈La La〉原歌詞是 La la, no more worries

但週一晚上，你最想 no more 的應該是……
留言幫我填空，中文英文都可以 👇
我先：no more 臨時會議

我會挑幾則寫進下一首歌 ☁️

#週一 #下班 #工作日常 #上班族 #lofi #mellowmeow`
        }
      ],
      phases: [
    {
      id: "B",
      title: "La La 上線準備",
      sub: "11/13（五）之前",
      tasks: [
        {
          id: "b1",
          title: "標題已定案（方案 A：下班那一刻）",
          tag: "YT",
          detail: "標題：La La｜打卡下班的那一刻 ☁️ Original Lo-fi。在「發布」分頁複製，勾起來就好。"
        },
        {
          id: "b2",
          title: "用 GPT 在現有縮圖上加一行中文",
          tag: "YT",
          detail: "上傳原本的 La_La_YT-Cover.jpg 給 GPT，貼上「發布」分頁的「縮圖 GPT Prompt」（已經換成方案 A 的「下班了，這段時間是你的」）。中文出錯的話，改到 Canva 用思源宋體自己加。",
          steps: ["在 GPT 上傳 La_La_YT-Cover.jpg", "貼上「縮圖 GPT Prompt」", "檢查中文有沒有錯字、其他文字有沒有被改動", "沒問題就存成 1280×720 以上，上傳時當縮圖"]
        },
        {
          id: "b3",
          title: "檢查 Claude 做好的直式短片（Short 和 Reel 共用）",
          tag: "9:16",
          detail: "Claude 已經做好 LaLa_Short.mp4：21 秒、1080×1920，用最後一段副歌，結尾停在「Sunny day, stay with me」。字卡依序是「下班後」→「給自己一首歌的時間」→「好好放鬆」（不提珍奶，封面當意象就好）。",
          steps: ["用手機戴耳機看一次，確認聲音和歌詞對得上", "確認字卡沒有被 YT／IG 的按鈕擋住", "想換字卡文字就告訴 Claude，重新輸出很快"]
        },
        {
          id: "b4",
          title: "確認 Claude 在 Figma 做好的歌詞填空輪播（7 張），匯出 PNG",
          tag: "IG 4:5",
          detail: "已放在 Figma「Setting」頁的區塊「IG｜La La 歌詞填空輪播（7 張）」：https://www.figma.com/design/6ay6Esf1FewmSOFAs9QgiE/MellowMeow.radio?node-id=6022-36 。7 張共用同一個背景元件「MM/IG Sky BG」，改一次就全部更新。",
          steps: ["打開上面的 Figma 連結", "按住 Shift 依序點選 01～07 七個畫框", "右側 Export → PNG、1x → 匯出", "IG 發文時照 01→07 的順序選圖"]
        },
        {
          id: "b5",
          title: "上傳 La La，排定首播 11/13（五）21:00",
          tag: "YT",
          detail: "標題、說明欄、標籤都在「發布」分頁複製。",
          steps: ["YouTube 工作室 → 建立 → 上傳影片", "貼上標題、說明欄；上傳縮圖", "顯示更多 → 變造或合成內容：選「是」", "貼上標籤", "瀏覽權限 → 排定時間 → 勾「設為首播」→ 11/13 21:00"]
        },
        {
          id: "b6",
          title: "確認 IG 發文頁有沒有「分享到 Threads」",
          tag: "Threads",
          detail: "有的話，之後發 IG 時打開就好，Threads 等於零成本更新；沒有就直接跳過 Threads，不用另外寫。"
        }
      ]
    },
    {
      id: "C",
      title: "上線當天",
      sub: "11/13（五）晚上",
      tasks: [
        {
          id: "c1",
          title: "21:00 首播開始後，發置頂留言",
          tag: "YT",
          detail: "留言內容在「發布」分頁。發完後點留言旁的「⋮」→「置頂」。"
        },
        {
          id: "c2",
          title: "IG 發 Reel（打開分享到 Threads）",
          tag: "IG",
          detail: "用 b3 剪好的那支短片，文案在「發布」分頁。"
        },
        {
          id: "c3",
          title: "La La 設為頻道預告片和精選影片",
          tag: "YT",
          steps: ["YouTube 工作室 → 自訂 → 版面配置", "「為尚未訂閱的觀眾提供頻道預告片」→ 選 La La", "「為回訪訂閱者推薦的影片」→ 選 La La"]
        },
        {
          id: "c4",
          title: "舊貓咪影片設為私人",
          tag: "YT",
          detail: "設私人可以隨時恢復，數據也會保留，不要刪除。播放特別高的 1–3 支可以先留著。",
          steps: ["YouTube 工作室 → 內容 → Shorts 分頁", "勾選要隱藏的影片", "編輯 → 瀏覽權限 → 私人 → 更新"]
        }
      ]
    },
    {
      id: "D",
      title: "上線後",
      sub: "11/16（一）起",
      tasks: [
        {
          id: "d1",
          title: "週一 21:00 發 YT Short",
          tag: "YT",
          detail: "同一支短片，標題和說明在「發布」分頁。"
        },
        {
          id: "d2",
          title: "週一 21:00 發 IG 歌詞填空輪播",
          tag: "IG",
          detail: "週一晚上最多人想 no more 點什麼。文案在「發布」分頁，記得打開分享到 Threads。"
        },
        {
          id: "d3",
          title: "11/20 看一次數據，記在筆記",
          tag: "數據",
          detail: "只看三個數字就好：YT 平均觀看時長、Short 觀看數、IG 輪播收藏數。寫進「筆記」，下次跟 Claude 討論時貼給它。"
        },
        {
          id: "d4",
          title: "收集「一句話」留言，挑 3–5 則記進筆記",
          tag: "互動",
          detail: "YT 留言和 IG 留言都看。挑的時候留下帳號名稱，下一首歌的說明欄要標註「歌詞靈感來自 @某某」。這是讓觀眾願意再留言的關鍵。"
        }
      ]
    }
      ]
    },
    {
      id: "song2",
      title: "第 2 首（未命名）",
      subtitle: "歌名決定後告訴 Claude",
      date: "2026-11-27T21:00:00+08:00"
    }
  ],

  songTemplate: {
    phases: [
      {
        id: "B",
        title: "準備",
        sub: "{friShort} 之前",
        tasks: [
          { id: "b1", title: "從上一首的留言挑 1 句「一句話」，寫進這首歌", tag: "互動", detail: "這是對觀眾的承諾：說要寫進歌裡，就要真的寫。記下是誰的留言，說明欄要標註。" },
          { id: "b2", title: "歌曲完成，決定歌名", tag: "音樂" },
          { id: "b3", title: "做歌詞影片（16:9）", tag: "YT" },
          { id: "b4", title: "跟 Claude 一起想：標題＋縮圖字＋說明欄開頭", tag: "YT", detail: "到「發布」分頁按「複製請求給 Claude」，貼上歌詞一起產出。" },
          { id: "b5", title: "用 GPT 在縮圖上加一行中文", tag: "YT" },
          { id: "b6", title: "直式短片（Short 和 Reel 共用）", tag: "9:16", detail: "副歌 15–20 秒，0 秒就放字卡。可以請 Claude 直接做。" },
          { id: "b7", title: "IG 歌詞互動輪播 7 張", tag: "IG 4:5", detail: "照「發布」分頁的輪播固定架構。可以請 Claude 在 Figma 直接做，背景元件共用。" },
          { id: "b8", title: "上傳並排定首播 {fri}", tag: "YT", steps: ["YouTube 工作室 → 建立 → 上傳影片", "貼上標題、說明欄、標籤；上傳縮圖", "變造或合成內容：選「是」", "排定時間 → 設為首播 → {fri}"] }
        ]
      },
      {
        id: "C",
        title: "上線當天",
        sub: "{friShort} 晚上",
        tasks: [
          { id: "c1", title: "21:00 首播開始後，發置頂留言", tag: "YT" },
          { id: "c2", title: "IG 發 Reel（打開分享到 Threads）", tag: "IG" },
          { id: "c3", title: "設為頻道的精選影片", tag: "YT" }
        ]
      },
      {
        id: "D",
        title: "上線後",
        sub: "{mon} 起",
        tasks: [
          { id: "d1", title: "週一 21:00 發 YT Short", tag: "YT" },
          { id: "d2", title: "週一 21:00 發 IG 歌詞互動輪播", tag: "IG" },
          { id: "d3", title: "{check} 看一次數據，記在筆記", tag: "數據", detail: "只看三個數字：YT 平均觀看時長、Short 觀看數、IG 輪播收藏數。" },
          { id: "d4", title: "收集「一句話」留言，挑 3–5 則記進筆記", tag: "互動" }
        ]
      }
    ],
    schedule: [
      { day: "第 1 波", date: "{fri}", items: [ { platform: "YT", what: "歌詞影片首播＋置頂留言", task: "c1" }, { platform: "IG", what: "Reel（順手分享到 Threads）", task: "c2" } ] },
      { day: "第 2 波", date: "{mon}", items: [ { platform: "YT", what: "Short（同一支短片）", task: "d1" }, { platform: "IG", what: "歌詞互動輪播（7 張）", task: "d2" } ] }
    ]
  },

  carouselFormula: [
    "01 封面：一句 hook，大字、一眼看懂（例如：副歌缺一個字，換你來填）",
    "02 情境：交代原歌詞或背景，最後一句轉折，讓人想往下滑",
    "03–05 三個示範：同一個版型、一張只講一件事、編號 01／02／03，用上班族的真實小事；背景放符合情境的寫實照片＋壓暗",
    "06 換你：互動頁，明確告訴觀眾要留言什麼，黑貓先示範一個答案",
    "07 頻道介紹：Mellow Meow 是誰、什麼時候更新、提醒收藏",
    "易讀性：所有背景都要壓暗（深藍漸層），白字才看得清楚；共用背景元件已內建壓暗層",
    "文案：照輪播順序用口語寫一次，結尾放互動指令"
  ],

  formula: [
    "選一句上班族的真實小事當主題（週一、加班、第幾杯咖啡、等主管先走…）",
    "做歌＋歌詞影片（16:9）",
    "剪 1 支 15–20 秒直式短片，0 秒就放字卡",
    "做 1 則 IG 歌詞互動輪播（7 張，照下方固定架構）",
    "週五 21:00：YT 歌詞影片＋IG Reel",
    "下週一 21:00：YT Short＋IG 輪播",
    "從留言挑 3–5 則「一句話」，寫進下一首歌，並在說明欄標註",
    "隔週看一次數據，記在筆記"
  ],

  brand: {
    voice: {
      summary: "像在超市後門一起放空的同事：不勵志、不雞湯、有點累，但還會笑。",
      do: [
        "用具體的上班小事：打卡、週一、會議、第幾杯咖啡、等主管先走",
        "自嘲，但不厭世",
        "短句，像傳訊息給同事",
        "互動以「用一句話形容你今天」為主，簡單、三秒就能回答"
      ],
      dont: [
        "「療癒你的心靈」「擁抱每一天」這類雞湯",
        "過度美好的承諾和畫面",
        "講創作過程、靈感、藝術家口吻",
        "長篇大論"
      ],
      examples: [
        "下班後，給自己一首歌的時間。",
        "週五晚上 8 點，終於可以不用回訊息了。",
        "La la～ 明天的事明天再說。",
        "週一，撐住。"
      ]
    },
    questions: [
      "用一句話形容你今天（會挑幾則寫進下一首歌）",
      "今天想離職幾次？",
      "今天第幾杯咖啡了？",
      "你今天幾點下班？誠實回答",
      "下班第一件事做什麼？",
      "你們公司也要等主管先走嗎？",
      "週一最想請假的理由是？",
      "今天最想按掉的一則訊息是誰傳的？（不用說名字）"
    ],
    colors: [
      { name: "晴空藍", hex: "#6A94C4" },
      { name: "傍晚藍", hex: "#34507A" },
      { name: "奶油白", hex: "#F4EEE3" },
      { name: "黑貓黑", hex: "#1E1E24" },
      { name: "窗燈黃", hex: "#F2C84B" }
    ],
    fonts: [
      { use: "Logo「Mellow Meow」", name: "Great Vibes" },
      { use: "中文標題／字卡", name: "思源宋體 Noto Serif TC、霞鶩文楷" },
      { use: "英文副標", name: "Cormorant Garamond Italic" }
    ],
    specs: [
      { item: "YT 橫幅", size: "2560×1440，6MB 內；所有裝置可見區 1546×423（正中央）" },
      { item: "YT 頭像", size: "正方形，至少 98×98，4MB 內" },
      { item: "YT 影片縮圖", size: "1280×720 以上（16:9）" },
      { item: "Short / Reel", size: "1080×1920（9:16）" },
      { item: "IG 輪播", size: "1080×1350（4:5）" }
    ],
    prompts: [
      {
        label: "輪播情境照片（寫實，4:5）",
        text: `Realistic candid photograph, [情境：例如 late afternoon in a modern Taipei office / night inside a Taipei MRT train / rainy Monday morning near an MRT station]. Faces not visible (over-the-shoulder, from behind, or hands only). Soft natural light, cool blue tones with small warm highlights, shallow depth of field, soft film grain, slightly desaturated muted colors, quiet tired after-work mood, 35mm film photography look. No readable text, no logos, no visible faces. Portrait 4:5.`
      },
      {
        label: "角色頭像（扁平簡約）",
        text: `Minimalist flat illustration of a black cat wearing cream headphones, eyes gently closed, head tilted slightly upward as if enjoying music. Simple rounded shapes, cat drawn as a soft solid black silhouette with almost no fur detail, only a few simple lines for the face. Muted dusty sky-blue background, desaturated pastel palette, low contrast, lots of empty space. Mid-century children's book style, gouache texture, slightly uneven hand-drawn edges, subtle risograph grain. Calm, quiet, cozy. No text. Square 1:1.
avoid: detailed fur strands, sharp whiskers, glossy highlights, oil painting filter, hyperrealistic, high saturation, 3D render`
      },
      {
        label: "場景圖（窗邊背影，可用在影片或縮圖）",
        text: `A small black cat seen from behind, sitting on a cream windowsill, wearing cream headphones, quietly looking out at a soft late-afternoon sky with gentle clouds and a distant city skyline with a few warm lit windows. Simple flat shapes, solid black silhouette with minimal detail. Muted dusty sky-blue (#6A94C4) and warm cream (#F4EEE3) palette, low contrast, gouache and paper texture, subtle film grain. Calm after-work mood. No text.
avoid: detailed fur strands, sharp whiskers, glossy highlights, oil painting filter, 3D render, high saturation`
      }
    ],
    settings: [
      { label: "YT 頻道名稱", text: "Mellow Meow｜下班後的小陪伴" },
      { label: "YT Handle", text: "@MellowMeow-Radio" },
      { label: "IG 帳號", text: "mellowmeow.radio" },
      {
        label: "YT 頻道說明（新語氣版）",
        text: `下班了嗎？今天也辛苦了。

這裡不勵志、不雞湯，
只是一個陪你喘口氣的地方。
一隻黑貓、一首 lo-fi，配你的通勤、加班，
還有洗完澡不想睡、又不想面對明天的那段時間。

💬 留言用一句話形容你今天，可能會被寫進下一首歌。
🎧 新歌每隔週五上線
🎵 音樂為 AI 輔助創作

───────────
Off work? Same.
No pep talks here — just a black cat, some lo-fi,
and a few minutes to breathe before tomorrow happens again. 🐈‍⬛`
      },
      {
        label: "IG 簡介（新語氣版）",
        text: `下班了嗎？今天也辛苦了 ☁️
不勵志不雞湯，只陪你喘口氣
💬 留一句今天的心情，可能變成下一首歌
🎧 新歌在這裡 ↓`
      },
      {
        label: "YT 頻道關鍵字",
        text: "Mellow Meow, lofi, lo-fi music, chill music, 下班音樂, 療癒音樂, 放鬆音樂, 陪伴, 讀書音樂, 睡前音樂, 通勤音樂, 華語lofi, 原創歌曲, study music, relaxing music, lofi playlist, cozy music, healing music"
      }
    ]
  }
};

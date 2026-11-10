# Mellow Meow｜下班後的工作手帳

頻道經營用的專案網站。手機、電腦都能開。

## 檔案說明
| 檔案 | 內容 | 會不會常換 |
|---|---|---|
| `index.html` | 網站本體（外觀和功能） | 很少 |
| `data.js` | 待辦、發布計畫、文案、品牌手冊 | **Claude 更新計畫時只換這個** |

你勾選的進度、寫的筆記，存在瀏覽器裡，換掉 `data.js` 也不會不見。

## 第一次上傳到 GitHub（約 10 分鐘）
1. 登入 GitHub → 右上角「+」→ **New repository**
2. Repository name 填 `mellowmeow`，選 **Public** → Create repository
3. 在新頁面點 **uploading an existing file** → 把 `index.html`、`data.js`、`README.md` 拖進去 → **Commit changes**
4. 到 **Settings → Pages**
5. Source 選 **Deploy from a branch**，Branch 選 **main**、資料夾 **/(root)** → Save
6. 等 1–2 分鐘，網址會是：`https://你的GitHub帳號.github.io/mellowmeow/`
7. 手機用瀏覽器打開 →「分享」→「加入主畫面」，就像 App 一樣

## 之後更新計畫
1. 在網站右上角齒輪 →「複製進度摘要」或「下載備份檔」，貼／傳給 Claude
2. Claude 給你新的 `data.js`
3. GitHub repo → 點 `data.js` → 右上角鉛筆（或 Add file → Upload files 覆蓋）→ Commit
4. 1–2 分鐘後重新整理網站

## 注意
- Public repo 代表任何人都看得到這份計畫（不含你的進度和筆記，那些只在你的瀏覽器）。
- 不要把 API 金鑰寫進任何檔案。金鑰只在網站的設定裡填，會存在你自己的瀏覽器。
- 手機和電腦的進度不會自動同步，要靠「下載備份檔 → 匯入備份檔」搬過去。

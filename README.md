# YanChen 專案入口網站 🚀

一個使用 React 開發的完整專案入口網站，用於展示和導向我開發的各種專案，包括遊戲、應用系統和作品集。

## ✨ 特點

- 🎨 **現代化設計** - 精美的 UI/UX 設計，使用 Tailwind CSS
- 📱 **響應式布局** - 完美適配手機、平板和桌面設備
- 🎯 **智能分類** - 專案分為遊戲、應用、作品集三大類別
- 🔍 **強大搜尋** - 支持即時搜尋專案名稱、描述和標籤
- 🏷️ **標籤篩選** - 根據不同標籤快速過濾專案
- ✨ **流暢動畫** - 使用 Framer Motion 實現優雅的過渡效果
- 🔗 **直接連結** - 一鍵跳轉到專案線上演示和 GitHub 原始碼

## 📊 包含專案

### 🎮 遊戲類 (10個)
- 黑白棋/奧賽羅 - 經典策略棋類遊戲
- 試管倒球遊戲 - 益智解謎遊戲（2個版本）
- 自走棋對戰 - 策略卡牌遊戲（2個版本）
- 西洋棋系列 - 線上對戰和 AI 對手（2個版本）
- 風馳電掣 - 單車策略遊戲
- 殺戮尖塔 - Roguelike 卡牌遊戲
- Squash - 壁球休閒遊戲

### 💼 應用系統類 (6個)
- 禮物追蹤系統 - 禮物記錄管理
- 訂單管理系統 - 企業級 CRUD 應用
- SnackOverFlow - 餐飲產品管理系統
- 地址解析系統 - 地址格式轉換工具
- ChoiceLight - 決策輔助工具
- Workout - 健身追蹤應用

### 📸 作品集類 (2個)
- 攝影作品集 (新版) - 現代化設計
- 攝影作品集 (經典版)

**共計 19 個已部署且可訪問的專案！**

## 🛠 技術棧

- **前端框架**: React 18
- **路由**: React Router v6 (HashRouter)
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **構建工具**: Create React App
- **部署**: GitHub Pages

## 🌐 在線演示

訪問 [https://yanchen184.github.io/game-portal](https://yanchen184.github.io/game-portal) 查看在線演示。

## 📖 開發指南

### 1. 克隆此存儲庫
```bash
git clone https://github.com/yanchen184/game-portal.git
cd game-portal
```

### 2. 安裝依賴
```bash
npm install
```

### 3. 啟動開發伺服器
```bash
npm start
```
應用將在 http://localhost:3000 打開

### 4. 構建生產版本
```bash
npm run build
```

### 5. 部署到 GitHub Pages
```bash
npm run deploy
```

## 📁 項目結構

```
game-portal/
├── public/              # 靜態資源
├── src/
│   ├── components/      # React 組件
│   │   ├── GameCard.js        # 專案卡片組件
│   │   ├── GameFeatureList.js # 功能列表組件
│   │   ├── Header.js          # 頁首組件
│   │   └── Footer.js          # 頁尾組件
│   ├── data/
│   │   └── games.js     # 專案數據（20個專案）
│   ├── pages/
│   │   ├── HomePage.js         # 主頁
│   │   ├── GameDetailPage.js   # 專案詳情頁
│   │   └── NotFoundPage.js     # 404 頁面
│   ├── App.js           # 主應用組件
│   └── index.js         # 入口文件
├── package.json         # 依賴配置
└── tailwind.config.js   # Tailwind 配置
```

## 🎯 主要功能

### 分類篩選
- 全部專案
- 🎮 遊戲 (10個)
- 💼 應用 (6個)
- 📸 作品集 (2個)

### 搜尋功能
- 即時搜尋專案名稱
- 搜尋英文標題
- 搜尋專案描述
- 搜尋標籤關鍵字

### 標籤系統
根據選擇的分類動態顯示相關標籤，支持快速篩選。

## 🚀 新增專案

要新增專案，請編輯 `src/data/games.js` 並添加新的專案對象：

```javascript
{
  id: 'project-id',
  title: '專案標題',
  englishTitle: 'English Title',
  description: '專案簡短描述',
  longDescription: '專案詳細描述',
  repoUrl: 'https://github.com/yanchen184/repo-name',
  demoUrl: 'https://yanchen184.github.io/repo-name',
  category: 'games', // 或 'applications', 'portfolio'
  placeholderColor: '#3b82f6',
  placeholderIcon: '🎮',
  tags: ['標籤1', '標籤2', '標籤3'],
  features: ['功能1', '功能2', '功能3'],
  releaseDate: '2025-01-01',
}
```

## 📝 版本

當前版本: **v2.0.0**

### 更新日誌

**v2.0.0** (2025-11-16)
- ✨ 新增 19 個已測試可訪問的專案
- 🎯 實現分類篩選功能（遊戲/應用/作品集）
- 🔍 實現強大的搜尋功能
- 🏷️ 實現標籤篩選系統
- 🎨 全面優化 UI/UX 設計
- ✨ 增強動畫效果
- 📱 改進響應式設計
- ✅ 所有專案連結已測試驗證

**v1.0.1** (2025-04-21)
- 初始版本，包含 4 個遊戲專案

## 👨‍💻 作者

**YanChen** (yanchen184)
- GitHub: [@yanchen184](https://github.com/yanchen184)
- Email: bobchen184@gmail.com

## 📄 授權

MIT License

---

⭐ 如果這個專案對你有幫助，歡迎給個星星！

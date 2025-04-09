# 遊戲入口網站開發文檔

此文檔提供關於如何在本地開發和部署遊戲入口網站的說明。

## 本地開發

### 環境設置

1. 確保您已安裝 Node.js (推薦 v16 或更高版本)
2. 克隆此倉庫到您的本地機器:
   ```bash
   git clone https://github.com/yanchen184/game-portal.git
   cd game-portal
   ```

3. 安裝依賴:
   ```bash
   npm install
   ```

### 啟動開發服務器

運行以下命令啟動本地開發服務器:

```bash
npm start
```

這將在 [http://localhost:3000](http://localhost:3000) 啟動應用程序。

### 構建應用程序

要構建用於生產環境的應用程序，請運行:

```bash
npm run build
```

構建後的文件將位於 `build` 目錄中。

## 部署

### 使用 GitHub Pages 部署

本項目已配置為使用 GitHub Actions 自動部署到 GitHub Pages。

每次推送到 `main` 分支時，GitHub Actions 工作流會自動構建應用程序並部署到 `gh-pages` 分支。

您也可以手動運行部署:

```bash
npm run deploy
```

這將構建應用程序並將其推送到 `gh-pages` 分支。

### 訪問在線演示

部署後，您可以通過以下URL訪問在線演示:

[https://yanchen184.github.io/game-portal](https://yanchen184.github.io/game-portal)

## 添加新遊戲

要添加新的遊戲到入口網站:

1. 在 `src/data/games.js` 文件中添加新遊戲的數據
2. 將遊戲的圖片放在 `public/images` 目錄下
3. 更新版本號 (在 `public/index.html` 和 `src/components/Header.js` 中)

## 項目結構

```
game-portal/
├── .github/workflows/      # GitHub Actions 工作流配置
├── public/                 # 靜態資源
│   ├── images/             # 遊戲圖片
│   └── index.html          # HTML 模板
├── src/                    # 源代碼
│   ├── components/         # React 組件
│   ├── data/               # 數據文件
│   ├── pages/              # 頁面組件
│   ├── App.js              # 主應用組件
│   └── index.js            # 入口文件
├── package.json            # 項目依賴和腳本
└── README.md               # 項目說明
```

## 注意事項

- 本項目使用 React Router 進行路由管理
- 使用 Tailwind CSS 進行樣式設計
- 使用 Framer Motion 進行動畫效果

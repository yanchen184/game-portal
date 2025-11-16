# ✅ 已驗證可訪問的專案列表

**測試日期**: 2025-11-16
**測試結果**: 19/20 專案可正常訪問

---

## 🎮 遊戲類專案 (10個)

| 專案名稱 | 連結 | 狀態 |
|---------|------|------|
| 黑白棋/奧賽羅 | https://yanchen184.github.io/react-reversi-game | ✅ 可訪問 |
| 試管倒球遊戲 | https://yanchen184.github.io/ball-sort-puzzle | ✅ 可訪問 |
| 試管倒球遊戲 Plus | https://yanchen184.github.io/ball-sort-puzzle-game | ✅ 可訪問 |
| 自走棋對戰 V2 | https://yanchen184.github.io/auto-chess-battle-v2 | ✅ 可訪問 |
| 自走棋對戰 | https://yanchen184.github.io/auto-chess-battle | ✅ 可訪問 |
| 線上西洋棋 | https://yanchen184.github.io/firebase-chess-online | ✅ 可訪問 |
| 互動式西洋棋 | https://yanchen184.github.io/react-chess-game | ✅ 可訪問 |
| 風馳電掣 | https://yanchen184.github.io/cycling-tactics-game | ✅ 可訪問 |
| 殺戮尖塔 | https://yanchen184.github.io/react-slay-the-spire | ✅ 可訪問 |
| Squash 遊戲 | https://yanchen184.github.io/squash | ✅ 可訪問 |

---

## 💼 應用系統類專案 (6個)

| 專案名稱 | 連結 | 狀態 |
|---------|------|------|
| 禮物追蹤系統 | https://yanchen184.github.io/sent-gifts | ✅ 可訪問 |
| 訂單管理系統 | https://yanchen184.github.io/order-management-system | ✅ 可訪問 |
| SnackOverFlow | https://yanchen184.github.io/snack-overflow-refine | ✅ 可訪問 |
| 地址解析系統 | https://yanchen184.github.io/ars-frontend | ✅ 可訪問 |
| ChoiceLight | https://yanchen184.github.io/choiceLight | ✅ 可訪問 |
| Workout 健身追蹤 | https://yanchen184.github.io/workout | ✅ 可訪問 |

---

## 📸 作品集類專案 (2個)

| 專案名稱 | 連結 | 狀態 |
|---------|------|------|
| 攝影作品集 (新版) | https://yanchen184.github.io/photographer-portfolio-new | ✅ 可訪問 |
| 攝影作品集 | https://yanchen184.github.io/photographer-portfolio | ✅ 可訪問 |

---

## 🌐 入口網站 (1個)

| 專案名稱 | 連結 | 狀態 |
|---------|------|------|
| 遊戲入口網站 | https://yanchen184.github.io/game-portal | ✅ 可訪問 |

---

## ❌ 已移除的專案 (1個)

| 專案名稱 | 原因 | 錯誤碼 |
|---------|------|--------|
| 剪刀石頭布 | GitHub Pages 未正確部署 | HTTP 404 |

---

## 📋 測試方法

使用 cURL 測試所有專案連結：
```bash
curl -s -o /dev/null -w "%{http_code}" -L [project_url]
```

只有返回 `200` 的專案被保留在入口網站中。

---

## 🔄 定期驗證建議

建議每月運行一次驗證測試：
```bash
bash D:\claude\ mode\whoami\test_projects.sh
```

如果發現新的失效連結，請及時從 `src/data/games.js` 中移除。

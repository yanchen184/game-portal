/**
 * Data for all games in the portal
 */
const games = [
  {
    id: 'reversi',
    title: '黑白棋/奧賽羅',
    englishTitle: 'React Reversi Game',
    description: '一款用React開發的經典黑白棋（奧賽羅）遊戲，支持玩家對戰和AI模式。',
    longDescription: '黑白棋，也稱奧賽羅，是一種策略性棋盤遊戲。兩位玩家輪流在8×8的棋盤上放置己方顏色的棋子，當一枚棋子放置後，所有夾在該棋子和棋盤上已有的同色棋子之間的對手棋子會被翻轉為己方顏色。遊戲目標是在棋盤填滿時擁有最多己方顏色的棋子。這個React版本支持對抗AI或與朋友對戰。',
    repoUrl: 'https://github.com/yanchen184/react-reversi-game',
    demoUrl: 'https://yanchen184.github.io/react-reversi-game',
    imageUrl: null, // 暫時未提供圖片
    placeholderColor: '#3b82f6',
    tags: ['策略', '棋類', '雙人'],
    features: ['玩家對戰模式', 'AI對戰模式', '合法移動提示', '計分系統', '遊戲紀錄'],
    releaseDate: '2025-04-05',
  },
  {
    id: 'ball-sort',
    title: '試管倒球遊戲',
    englishTitle: 'Ball Sort Puzzle',
    description: '一個有趣的試管倒球遊戲，使用React實現。通過移動試管中的彩色球，將每根試管中的球都整理為同一顏色來獲勝。',
    longDescription: '試管倒球遊戲是一個休閒解謎遊戲，玩家需要通過在不同試管之間移動彩色小球，使每根試管中只包含同一顏色的小球。遊戲初始時，各種顏色的小球隨機分佈在不同的試管中，你需要通過策略性地移動它們來達成目標。每次只能移動試管頂部的小球，且只能移動到空試管或顏色相同的小球上方。',
    repoUrl: 'https://github.com/yanchen184/ball-sort-puzzle-game',
    demoUrl: 'https://yanchen184.github.io/ball-sort-puzzle-game',
    imageUrl: null, // 暫時未提供圖片
    placeholderColor: '#16a34a',
    tags: ['解謎', '休閒', '邏輯'],
    features: ['多關卡設計', '不限制移動次數', '重置功能', '關卡選擇'],
    releaseDate: '2025-04-03',
  },
  {
    id: 'auto-chess',
    title: '自走棋對戰',
    englishTitle: 'Auto Chess Battle',
    description: '一款基於React的自走棋對戰遊戲，具有Firebase後端支持，實現了實時在線對戰功能。',
    longDescription: '自走棋是一種將棋盤遊戲、卡牌收集和戰略元素相結合的遊戲。玩家可以從不同的角色池中招募角色，在棋盤上佈置陣容，與對手進行戰鬥。遊戲包含經濟系統、角色升級和陣容協同效果等策略元素。這個React版本使用Firebase實現了實時對戰、角色數據同步和排行榜系統。',
    repoUrl: 'https://github.com/yanchen184/auto-chess-battle',
    demoUrl: 'https://yanchen184.github.io/auto-chess-battle',
    imageUrl: null, // 暫時未提供圖片
    placeholderColor: '#dc2626',
    tags: ['策略', '卡牌', '在線對戰'],
    features: ['即時對戰', '角色升級系統', '陣容協同效果', '排行榜系統'],
    releaseDate: '2025-04-07',
  },
  {
    id: 'poker',
    title: '撲克遊戲',
    englishTitle: 'Poker Game',
    description: '傳統撲克遊戲的數字版本，包括多種流行的撲克玩法，支持單人和多人模式。',
    longDescription: '這個撲克遊戲應用程序包含了多種流行的撲克玩法，如德州撲克、奧馬哈和七張牌梭哈等。遊戲提供單人模式（對抗AI）和多人模式。遊戲界面直觀易用，適合撲克新手和老手。遊戲還包含詳細的規則說明和策略提示，幫助玩家提升自己的撲克技能。',
    repoUrl: 'https://github.com/yanchen184/pokerGame911',
    demoUrl: 'https://yanchen184.github.io/pokerGame911',
    imageUrl: null, // 暫時未提供圖片
    placeholderColor: '#9333ea',
    tags: ['卡牌', '策略', '經典'],
    features: ['多種撲克玩法', 'AI對手', '詳細規則說明', '籌碼系統'],
    releaseDate: '2023-09-11',
  },
];

export default games;
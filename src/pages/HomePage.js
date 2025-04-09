import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
import games from '../data/games';

/**
 * HomePage component displays the main landing page
 * @returns {JSX.Element} HomePage component
 */
const HomePage = () => {
  const [filter, setFilter] = useState('all');
  
  // Filter games based on selected tag
  const filteredGames = filter === 'all' 
    ? games 
    : games.filter(game => game.tags.includes(filter));
  
  // Get unique tags from all games
  const allTags = [...new Set(games.flatMap(game => game.tags))];
  
  return (
    <div>
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">歡迎來到遊戲入口網站</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          這裡收集了我開發的各種有趣遊戲，從策略、解謎到卡牌類遊戲應有盡有。
          選擇一款喜歡的遊戲，開始你的遊戲體驗吧！
        </p>
      </motion.div>
      
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-gray-200'}`}
          >
            全部
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full ${filter === tag ? 'bg-indigo-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-gray-200'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

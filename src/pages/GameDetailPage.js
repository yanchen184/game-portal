import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import GameFeatureList from '../components/GameFeatureList';
import games from '../data/games';

/**
 * GameDetailPage component displays detailed information about a specific game
 * @returns {JSX.Element} GameDetailPage component
 */
const GameDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the game by ID
  const game = games.find(game => game.id === id);
  
  useEffect(() => {
    // If game not found, redirect to 404 page
    if (!game) {
      navigate('/404');
    }
  }, [game, navigate]);
  
  if (!game) return null;
  
  return (
    <div>
      <div className="mb-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          返回遊戲列表
        </button>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:col-span-1">
          <div 
            className="h-80 rounded-lg flex items-center justify-center mb-4" 
            style={{ backgroundColor: game.placeholderColor }}
          >
            <span className="text-8xl">🎮</span>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">遊戲資訊</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-400">英文標題</h4>
                <p>{game.englishTitle}</p>
              </div>
              
              <div>
                <h4 className="text-gray-400">標籤</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {game.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-gray-400">發布日期</h4>
                <p>{game.releaseDate}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-4">{game.title}</h2>
          
          <p className="text-gray-300 mb-6">{game.longDescription}</p>
          
          <GameFeatureList features={game.features} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <a 
              href={game.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              開始遊戲
            </a>
            
            <a 
              href={game.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-center px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors"
            >
              查看原始碼
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameDetailPage;

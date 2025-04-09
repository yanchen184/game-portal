import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * GameCard component displays a game preview card
 * @param {Object} props - Component props
 * @param {Object} props.game - Game data object
 * @returns {JSX.Element} GameCard component
 */
const GameCard = ({ game }) => {
  return (
    <motion.div 
      className="bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="h-48 w-full flex items-center justify-center bg-opacity-80" 
        style={{ backgroundColor: game.placeholderColor }}
      >
        <span className="text-5xl">🎮</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{game.title}</h3>
        <p className="text-gray-300 mb-4">{game.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {game.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-slate-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <Link 
            to={`/game/${game.id}`}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            詳情
          </Link>
          <a 
            href={game.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-500 transition-colors"
          >
            開始遊戲
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;

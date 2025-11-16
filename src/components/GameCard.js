import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * GameCard component displays a project preview card
 * @param {Object} props - Component props
 * @param {Object} props.game - Project data object
 * @returns {JSX.Element} GameCard component
 */
const GameCard = ({ game }) => {
  // Get category badge info
  const getCategoryBadge = (category) => {
    const badges = {
      games: { text: '遊戲', color: 'bg-blue-500' },
      applications: { text: '應用', color: 'bg-green-500' },
      portfolio: { text: '作品集', color: 'bg-purple-500' },
    };
    return badges[category] || { text: '其他', color: 'bg-gray-500' };
  };

  // Get action button text based on category
  const getActionButtonText = (category) => {
    const buttons = {
      games: '🎮 開始遊戲',
      applications: '💼 打開應用',
      portfolio: '📸 查看作品',
    };
    return buttons[category] || '🚀 查看專案';
  };

  const categoryBadge = getCategoryBadge(game.category);
  const actionButtonText = getActionButtonText(game.category);

  return (
    <motion.div
      className="bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-600 hover:border-indigo-500"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Category Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`${categoryBadge.color} text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg`}>
          {categoryBadge.text}
        </span>
      </div>

      {/* Thumbnail */}
      <div
        className="h-52 w-full flex items-center justify-center bg-opacity-90 relative overflow-hidden"
        style={{ backgroundColor: game.placeholderColor }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-30"></div>
        <motion.span
          className="text-7xl z-10 filter drop-shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          {game.placeholderIcon || '🎮'}
        </motion.span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-1 text-white line-clamp-1">{game.title}</h3>
        <p className="text-sm text-gray-400 mb-3 italic">{game.englishTitle}</p>

        {/* Description */}
        <p className="text-gray-300 mb-4 text-sm line-clamp-2 min-h-[2.5rem]">{game.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
          {game.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-600 text-xs rounded-full hover:bg-slate-500 transition-colors"
            >
              {tag}
            </span>
          ))}
          {game.tags.length > 3 && (
            <span className="px-3 py-1 bg-slate-600 text-xs rounded-full text-gray-400">
              +{game.tags.length - 3}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <a
            href={game.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium shadow-md hover:shadow-xl transform hover:scale-105"
          >
            {actionButtonText}
          </a>
          <Link
            to={`/game/${game.id}`}
            className="flex-1 text-center px-4 py-2.5 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            📋 詳情
          </Link>
        </div>

        {/* GitHub Link */}
        <a
          href={game.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 text-center text-sm text-gray-400 hover:text-indigo-400 transition-colors"
        >
          📂 GitHub 原始碼
        </a>
      </div>
    </motion.div>
  );
};

export default GameCard;

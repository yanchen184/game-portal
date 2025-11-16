import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import GameFeatureList from '../components/GameFeatureList';
import projects from '../data/games';

/**
 * GameDetailPage component displays detailed information about a specific project
 * @returns {JSX.Element} GameDetailPage component
 */
const GameDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the project by ID
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    // If project not found, redirect to 404 page
    if (!project) {
      navigate('/404');
    }
  }, [project, navigate]);

  if (!project) return null;

  // Get category info
  const getCategoryInfo = (category) => {
    const categories = {
      games: { name: '遊戲', color: 'bg-blue-500', icon: '🎮' },
      applications: { name: '應用', color: 'bg-green-500', icon: '💼' },
      portfolio: { name: '作品集', color: 'bg-purple-500', icon: '📸' },
    };
    return categories[category] || { name: '其他', color: 'bg-gray-500', icon: '📱' };
  };

  const categoryInfo = getCategoryInfo(project.category);

  return (
    <div>
      <div className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors group"
        >
          <svg className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          返回專案列表
        </button>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:col-span-1">
          <motion.div
            className="h-80 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden shadow-2xl"
            style={{ backgroundColor: project.placeholderColor }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-30"></div>
            <motion.span
              className="text-9xl z-10 filter drop-shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {project.placeholderIcon || '🎮'}
            </motion.span>
            <div className={`absolute top-4 right-4 ${categoryInfo.color} text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg`}>
              {categoryInfo.icon} {categoryInfo.name}
            </div>
          </motion.div>

          <div className="bg-slate-700 rounded-xl p-6 mt-6 border border-slate-600">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-2">ℹ️</span>
              專案資訊
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-gray-400 text-sm mb-1">英文標題</h4>
                <p className="text-white font-medium">{project.englishTitle}</p>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm mb-2">標籤</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1.5 bg-slate-600 text-sm rounded-full hover:bg-slate-500 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm mb-1">發布日期</h4>
                <p className="text-white font-medium">📅 {project.releaseDate}</p>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm mb-1">類別</h4>
                <p className="text-white font-medium">{categoryInfo.icon} {categoryInfo.name}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {project.title}
            </h2>
            <p className="text-gray-400 text-lg mb-6 italic">{project.englishTitle}</p>

            <div className="bg-slate-700 border border-slate-600 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="mr-2">📖</span>
                專案描述
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="mr-2">✨</span>
                主要功能
              </h3>
              <GameFeatureList features={project.features} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-6 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 查看專案
              </motion.a>

              <motion.a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-6 py-4 bg-slate-600 text-white rounded-xl hover:bg-slate-500 transition-all font-medium shadow-lg hover:shadow-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📂 GitHub 原始碼
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameDetailPage;

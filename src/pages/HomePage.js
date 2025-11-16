import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
import projects from '../data/games';

/**
 * HomePage component displays the main landing page
 * @returns {JSX.Element} HomePage component
 */
const HomePage = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Category definitions
  const categories = {
    all: { name: '全部', icon: '📱', count: projects.length },
    games: { name: '遊戲', icon: '🎮', count: projects.filter(p => p.category === 'games').length },
    applications: { name: '應用', icon: '💼', count: projects.filter(p => p.category === 'applications').length },
    portfolio: { name: '作品集', icon: '📸', count: projects.filter(p => p.category === 'portfolio').length },
  };

  // Filter projects based on category, tag, and search query
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(project => project.category === categoryFilter);
    }

    // Filter by tag
    if (tagFilter !== 'all') {
      filtered = filtered.filter(project => project.tags.includes(tagFilter));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.englishTitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [categoryFilter, tagFilter, searchQuery]);

  // Get unique tags from filtered projects by category
  const availableTags = useMemo(() => {
    const projectsToScan = categoryFilter === 'all'
      ? projects
      : projects.filter(p => p.category === categoryFilter);
    return [...new Set(projectsToScan.flatMap(project => project.tags))];
  }, [categoryFilter]);

  return (
    <div>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          YanChen 的專案入口網站
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          這裡收集了我開發的各種專案，包括遊戲、應用系統和作品集。
          共有 <span className="font-bold text-indigo-400">{projects.length}</span> 個專案等你探索！
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        className="mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="搜尋專案名稱、描述或標籤..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 bg-slate-700 text-white rounded-full border-2 border-slate-600 focus:border-indigo-500 focus:outline-none transition-colors text-lg"
          />
          <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-2xl">
            🔍
          </span>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-center text-sm text-gray-400 mb-3 uppercase tracking-wider">分類</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {Object.entries(categories).map(([key, { name, icon, count }]) => (
            <button
              key={key}
              onClick={() => {
                setCategoryFilter(key);
                setTagFilter('all');
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                categoryFilter === key
                  ? 'bg-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-slate-700 hover:bg-slate-600 text-gray-200 hover:scale-105'
              }`}
            >
              <span className="mr-2">{icon}</span>
              {name}
              <span className="ml-2 text-sm opacity-75">({count})</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tag Filter */}
      {availableTags.length > 0 && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-center text-sm text-gray-400 mb-3 uppercase tracking-wider">標籤篩選</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setTagFilter('all')}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                tagFilter === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-700 hover:bg-slate-600 text-gray-200'
              }`}
            >
              全部標籤
            </button>
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => setTagFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                  tagFilter === tag
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Results Count */}
      <motion.div
        className="mb-6 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        顯示 <span className="font-bold text-white">{filteredProjects.length}</span> 個專案
      </motion.div>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <GameCard game={project} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-400 text-xl mb-4">😔 沒有找到符合條件的專案</p>
            <button
              onClick={() => {
                setCategoryFilter('all');
                setTagFilter('all');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              清除所有篩選
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default HomePage;

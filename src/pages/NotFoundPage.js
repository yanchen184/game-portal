import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFoundPage component displays a 404 error page
 * @returns {JSX.Element} NotFoundPage component
 */
const NotFoundPage = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-6xl font-bold text-indigo-500 mb-4">404</h2>
      <h3 className="text-2xl font-semibold mb-6">頁面未找到</h3>
      <p className="mb-8 text-gray-400">您要查找的頁面不存在或已被移除。</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        返回首頁
      </Link>
    </div>
  );
};

export default NotFoundPage;

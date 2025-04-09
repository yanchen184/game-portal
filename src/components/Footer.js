import React from 'react';

/**
 * Footer component displays site footer
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} 遊戲入口網站. 保留所有權利。</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/yanchen184/game-portal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              原始碼
            </a>
            <span>|</span>
            <a 
              href="https://github.com/yanchen184" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

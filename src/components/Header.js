import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header component displays the top navigation bar
 * @param {Object} props - Component props
 * @param {string} props.version - Current app version
 * @returns {JSX.Element} Header component
 */
const Header = ({ version }) => {
  return (
    <header className="bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">遊戲入口網站</h1>
            <span className="text-sm bg-indigo-700 text-white px-2 py-0.5 rounded-md">v{version}</span>
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">首頁</Link>
            </li>
            <li>
              <a 
                href="https://github.com/yanchen184/game-portal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { motion } from 'framer-motion';

/**
 * GameFeatureList component displays a list of game features
 * @param {Object} props - Component props
 * @param {Array} props.features - List of features
 * @returns {JSX.Element} GameFeatureList component
 */
const GameFeatureList = ({ features }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">特色功能</h3>
      <motion.ul 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-center space-x-2"
            variants={item}
          >
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default GameFeatureList;

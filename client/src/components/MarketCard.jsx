/* eslint-disable no-unused-vars */
// File: client/src/components/MarketCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const MarketCard = ({ market }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        <img 
          src={market.image} 
          alt={market.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/assets/placeholder-market.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6">
            <div className="bg-primary text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
              <i className={`fas fa-${market.icon}`}></i>
            </div>
            <h3 className="text-2xl font-bold text-white">{market.title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-4">{market.description}</p>
        
        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          {/* Clients */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-primary mb-2">Key Clients:</h4>
            <div className="flex flex-wrap gap-2">
              {market.clients.map((client, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
          
          {/* Featured Projects */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">Featured Projects:</h4>
            <ul className="space-y-1">
              {market.projects.map((project, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <button 
          className="mt-4 text-primary font-medium flex items-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`ml-1 h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

MarketCard.propTypes = {
  market: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default MarketCard;
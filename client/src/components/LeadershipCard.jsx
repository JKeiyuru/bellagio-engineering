// File: client/src/components/LeadershipCard.jsx
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LeadershipCard = ({ name, title, image, bio }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative pb-2/3">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover object-center"
          onError={(e) => {
            e.target.src = '/assets/placeholder-person.jpg';
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
        <p className="text-gray-600 font-medium mb-4">{title}</p>
        
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-12'}`}>
          <p className="text-gray-700">{bio}</p>
        </div>
        
        <button 
          className="mt-4 text-primary font-medium flex items-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
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

LeadershipCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default LeadershipCard;
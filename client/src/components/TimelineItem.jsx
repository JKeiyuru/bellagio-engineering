// File: client/src/components/TimelineItem.jsx
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TimelineItem = ({ year, title, description, isLeft }) => {
  const itemAnimations = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div 
      className={`flex items-center justify-center relative`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemAnimations}
    >
      {/* Year marker in the middle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-primary text-black font-bold py-2 px-4 rounded-full">
          {year}
        </div>
      </div>
      
      {/* Content box */}
      <div className={`w-5/12 ${isLeft ? 'mr-auto pr-12' : 'ml-auto pl-12'}`}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLeft: PropTypes.bool.isRequired
};

export default TimelineItem;
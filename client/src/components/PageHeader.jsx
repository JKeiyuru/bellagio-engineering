/* eslint-disable no-unused-vars */
// File: client/src/components/PageHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="relative bg-cover bg-center pt-40 pb-32 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto text-center relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      
      {/* Decorative angle at the bottom of the header */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full text-white" 
          style={{ height: '5vw', minHeight: '50px' }}
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M1200 120L0 16.48V0h1200v120z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string
};

PageHeader.defaultProps = {
  subtitle: '',
  backgroundImage: '/assets/headers/default-header.jpg'
};

export default PageHeader;
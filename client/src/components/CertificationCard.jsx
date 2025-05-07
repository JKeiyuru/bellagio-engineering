/* eslint-disable no-unused-vars */
// File: client/src/components/CertificationCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CertificationCard = ({ name, logo, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center p-6"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 h-24 flex items-center justify-center">
        <img 
          src={logo} 
          alt={`${name} certification logo`}
          className="max-h-full max-w-full"
          onError={(e) => {
            e.target.src = '/assets/placeholder-certification.png';
          }}
        />
      </div>
      
      <h3 className="text-lg font-bold text-primary mb-2 text-center">{name}</h3>
      <p className="text-gray-700 text-center text-sm">{description}</p>
    </motion.div>
  );
};

CertificationCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CertificationCard;
/* eslint-disable no-unused-vars */
// File: client/src/components/home/FeatureCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const FeatureCard = ({ title, icon, description, link, variants }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      variants={variants}
    >
      <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
        Learn More 
        <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
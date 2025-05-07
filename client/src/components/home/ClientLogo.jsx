/* eslint-disable no-unused-vars */
// File: client/src/components/home/ClientLogo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ClientLogo = ({ client, variants }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-24"
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <img 
        src={client.logo} 
        alt={client.name} 
        className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
      />
    </motion.div>
  );
};

export default ClientLogo;
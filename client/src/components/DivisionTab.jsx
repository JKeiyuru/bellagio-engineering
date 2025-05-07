/* eslint-disable no-unused-vars */
// File: client/src/components/DivisionTab.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const DivisionTab = ({ division, isActive }) => {
  if (!isActive) return null;
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={division.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="division-content"
      >
        {/* Overview Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">{division.name}</h2>
            <p className="text-gray-700 mb-6 text-lg">{division.description}</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Services Include:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
              {division.services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-lg h-64 md:h-auto">
            <img 
              src={division.image} 
              alt={division.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/assets/placeholder-division.jpg';
              }}
            />
          </div>
        </div>
        
        {/* Featured Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-6">Featured Projects</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {division.projects.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h4>
                <p className="text-primary font-medium mb-3">
                  <svg className="h-5 w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {project.location}
                </p>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Learn More Button */}
        <div className="text-center">
          <a 
            href="/projects" 
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300"
          >
            View All {division.name} Projects
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

DivisionTab.propTypes = {
  division: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    ).isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired
};

export default DivisionTab;
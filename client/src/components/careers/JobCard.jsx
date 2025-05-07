/* eslint-disable no-unused-vars */
// File: client/src/components/careers/JobCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const JobCard = ({ job, onApplyClick }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Format the posted date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <motion.div 
      layout
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {job.type}
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {job.department}
            </span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-1 text-blue-500" />
            {job.location}
          </div>
          <div className="flex items-center">
            <FaBriefcase className="mr-1 text-blue-500" />
            {job.department}
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1 text-blue-500" />
            Posted on {formatDate(job.postedDate)}
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-600">{job.description}</p>
        </div>
        
        <motion.div 
          layout
          className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="mt-4">
            <h4 className="font-medium text-gray-800 mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium text-gray-800 mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between">
          <button
            onClick={toggleExpanded}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium focus:outline-none"
          >
            {expanded ? (
              <>
                <FaChevronUp className="mr-1" /> 
                Show Less
              </>
            ) : (
              <>
                <FaChevronDown className="mr-1" /> 
                Show More
              </>
            )}
          </button>
          
          <button
            onClick={() => onApplyClick(job)}
            className="mt-4 sm:mt-0 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
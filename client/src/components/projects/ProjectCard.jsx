/* eslint-disable no-unused-vars */
// File: client/src/components/projects/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, variants }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg group"
      variants={variants}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Link 
            to={`/projects/${project._id}`}
            className="text-white font-medium flex items-center"
          >
            View Project <FaExternalLinkAlt className="ml-2" size={14} />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm text-blue-600 font-medium">{project.category}</span>
        <h3 className="text-lg font-bold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
        <div className="text-sm text-gray-500">
          {project.location} | {new Date(project.completionDate).getFullYear()}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
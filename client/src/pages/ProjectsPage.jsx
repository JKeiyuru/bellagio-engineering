/* eslint-disable no-unused-vars */
// File: client/src/pages/ProjectsPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/projects/ProjectCard';
import { useProjects } from '../hooks/useProjects';

const ProjectsPage = () => {
  const { projects = [], isLoading, error } = useProjects(); // Default to empty array
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter categories
  const categories = [
    'all', 
    'building', 
    'civil', 
    'plumbing', 
    'water & sanitation'
  ];

  useEffect(() => {
    if (!Array.isArray(projects)) {
      setFilteredProjects([]);
      return;
    }

    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.category && 
        typeof project.category === 'string' &&
        project.category.toLowerCase() === activeFilter
      );
      setFilteredProjects(filtered);
    }
  }, [projects, activeFilter]);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Our Projects" 
        subtitle="Explore our portfolio of completed and ongoing construction projects across Kenya"
        bgImage="/assets/images/projects-header.jpg"
      />
      
      {/* Filter Buttons */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('&', '& ')}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-500 py-10">
            Error loading projects. Please try again later.
          </div>
        )}

        {/* Success State */}
        {!isLoading && !error && (
          <>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project._id || project.id} 
                  project={project} 
                />
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-gray-700">
                  No projects found in this category
                </h3>
                <p className="text-gray-500 mt-2">
                  Please check back later or try another category
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
/* eslint-disable no-unused-vars */
// File: client/src/pages/ProjectDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaTasks } from 'react-icons/fa';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // This will be replaced with an actual API call once we set up the backend
    const fetchProject = async () => {
      try {
        setIsLoading(true);
        // Mock API call - will be replaced with actual fetch
        setTimeout(() => {
          // Mock data for now
          const mockProject = {
            id,
            title: "Kitengela Mall Development",
            client: "Savannah Properties Ltd.",
            category: "building",
            location: "Kitengela, Kajiado County",
            completionDate: "March 2023",
            description: "A modern 4-floor retail and office space development in the heart of Kitengela town. The project included structural engineering, interior finishes, parking facilities, and smart building systems integration.",
            scope: "Full construction from foundation to finishing, including mechanical, electrical, and plumbing systems.",
            challenges: "Working in a densely populated area with limited space for material storage and equipment movement.",
            solutions: "Implemented just-in-time delivery systems and used modular construction techniques to minimize on-site storage requirements.",
            images: [
              "/assets/images/projects/kitengela-mall-1.jpg",
              "/assets/images/projects/kitengela-mall-2.jpg",
              "/assets/images/projects/kitengela-mall-3.jpg",
              "/assets/images/projects/kitengela-mall-4.jpg",
            ]
          };
          setProject(mockProject);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load project details');
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Project</h2>
        <p className="text-gray-700 mb-6">{error || "Project not found"}</p>
        <Link to="/projects" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden"
        >
          {/* Project Gallery */}
          <div className="relative h-96 bg-gray-200">
            {project.images && project.images.length > 0 ? (
              <>
                <img 
                  src={project.images[activeImage]} 
                  alt={`${project.title} view ${activeImage + 1}`} 
                  className="w-full h-full object-cover"
                />
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`w-3 h-3 rounded-full ${
                          activeImage === index ? 'bg-blue-600' : 'bg-white bg-opacity-60'
                        }`}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No images available
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <div className="flex items-start mb-4">
                  <FaBuilding className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-500">Client</h3>
                    <p className="text-gray-800">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-500">Location</h3>
                    <p className="text-gray-800">{project.location}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start mb-4">
                  <FaCalendarAlt className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-500">Completion Date</h3>
                    <p className="text-gray-800">{project.completionDate}</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <FaTasks className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-500">Category</h3>
                    <p className="text-gray-800 capitalize">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Project Description</h2>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Scope of Work</h2>
              <p className="text-gray-700 leading-relaxed">{project.scope}</p>
            </div>

            {project.challenges && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Challenges & Solutions</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-700 mb-2">Challenges:</p>
                  <p className="text-gray-600 mb-4">{project.challenges}</p>
                  <p className="font-medium text-gray-700 mb-2">Solutions:</p>
                  <p className="text-gray-600">{project.solutions}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
/* eslint-disable no-unused-vars */
// File: client/src/pages/CareersPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import JobCard from '../components/careers/JobCard';
import ApplicationForm from '../components/careers/ApplicationForm';

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    // This will be replaced with actual API call
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        // Mock API call
        setTimeout(() => {
          const mockJobs = [
            {
              id: 1,
              title: "Senior Civil Engineer",
              location: "Nairobi, Kenya",
              type: "Full-time",
              department: "Civil Engineering",
              postedDate: "2025-04-15",
              description: "We are seeking an experienced Civil Engineer to join our team and lead projects in infrastructure development across Kenya.",
              responsibilities: [
                "Lead civil engineering projects from concept to completion",
                "Prepare detailed project plans, specifications, and cost estimates",
                "Ensure compliance with building codes and safety regulations",
                "Manage junior engineers and technicians",
                "Coordinate with clients, contractors, and government officials"
              ],
              requirements: [
                "Bachelor's degree in Civil Engineering, Master's preferred",
                "Minimum 7 years of experience in civil engineering projects",
                "Professional Engineer (PE) certification",
                "Strong knowledge of Kenyan building codes and regulations",
                "Experience with AutoCAD, Civil 3D, and project management software"
              ]
            },
            {
              id: 2,
              title: "Project Manager",
              location: "Mombasa, Kenya",
              type: "Full-time",
              department: "Project Management",
              postedDate: "2025-04-20",
              description: "Bellagio Engineering is looking for a skilled Project Manager to oversee construction projects in the Coastal region.",
              responsibilities: [
                "Plan, execute, and close construction projects",
                "Develop and manage project budgets and timelines",
                "Coordinate teams of engineers, contractors, and subcontractors",
                "Identify and mitigate project risks",
                "Report project status to senior management and clients"
              ],
              requirements: [
                "Bachelor's degree in Construction Management, Engineering, or related field",
                "5+ years of experience in construction project management",
                "PMP certification preferred",
                "Excellent problem-solving and communication skills",
                "Proficiency in project management software"
              ]
            },
            {
              id: 3,
              title: "Water Systems Engineer",
              location: "Kisumu, Kenya",
              type: "Full-time",
              department: "Water & Sanitation",
              postedDate: "2025-04-25",
              description: "Join our Water & Sanitation division to design and implement water supply and treatment systems across Kenya.",
              responsibilities: [
                "Design water supply, distribution, and treatment systems",
                "Conduct feasibility studies and environmental impact assessments",
                "Prepare technical specifications and drawings",
                "Supervise construction and installation of water systems",
                "Provide technical support to clients and field teams"
              ],
              requirements: [
                "Bachelor's degree in Environmental, Civil, or Water Resources Engineering",
                "3+ years of experience in water systems design and implementation",
                "Knowledge of water treatment processes and technologies",
                "Experience with hydraulic modeling software",
                "Familiarity with Kenyan water regulations and standards"
              ]
            }
          ];
          setJobs(mockJobs);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load job listings');
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleFormClose = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
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
        title="Careers" 
        subtitle="Join our team and build the future of construction in Kenya"
        bgImage="/assets/images/careers-header.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Company Culture Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Work With Us</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full">
                <img 
                  src="/assets/images/team-culture.jpg" 
                  alt="Bellagio Engineering Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Culture</h3>
                <p className="text-gray-700 mb-4">
                  At Bellagio Engineering, we believe in fostering a collaborative, innovative, and supportive work environment. 
                  Our team consists of dedicated professionals who are passionate about transforming Kenya's infrastructure.
                </p>
                <h3 className="text-xl font-semibold text-blue-600 mb-4 mt-6">Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Competitive Salary
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Health Insurance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Career Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Paid Leave
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Training Programs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Retirement Plan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Current Openings Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Current Openings</h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">
              Error loading job listings. Please try again later.
            </div>
          ) : (
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {jobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onApplyClick={() => handleApplyClick(job)} 
                />
              ))}
            </motion.div>
          )}
          
          {jobs.length === 0 && !isLoading && !error && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-700">No openings available at the moment</h3>
              <p className="text-gray-500 mt-2">Please check back later for future opportunities</p>
            </div>
          )}
        </div>
        
        {/* Application Form */}
        {showApplicationForm && selectedJob && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Apply for: {selectedJob.title}
            </h2>
            <ApplicationForm job={selectedJob} onClose={handleFormClose} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CareersPage;
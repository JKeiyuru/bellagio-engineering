/* eslint-disable no-unused-vars */
// File: client/src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBuilding, FaRoad, FaWrench, FaWater, FaArrowRight } from 'react-icons/fa';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';
import ProjectCard from '../components/projects/ProjectCard';
import ClientLogo from '../components/home/ClientLogo';
import { useProjects } from '../hooks/useProjects';
import KcbBank from '../assets/clients/kcb-bank.png';
import EquityBank from '../assets/clients/equity-bank.png';
import TwoRivers from '../assets/clients/two-rivers.png';
import GardenCity from '../assets/clients/garden-city.jpeg';
import NairobiCounty from '../assets/clients/nairobi-county.jpeg';
import Kenha from '../assets/clients/kenha.jpeg';
import BellagioTeam from '../assets/images/bellagio-team.png';
import InnovationImg from '../assets/images/innovation.jpg';




const HomePage = () => {
  const { projects, loading } = useProjects(4); // Fetch 4 featured projects
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const clients = [
    { name: 'Kenya Commercial Bank', logo: KcbBank},
    { name: 'Equity Bank', logo: EquityBank },
    { name: 'Two Rivers Mall', logo: TwoRivers },
    { name: 'Garden City Mall', logo: GardenCity },
    { name: 'Nairobi County', logo: NairobiCounty },
    { name: 'Kenya National Highways Authority', logo: Kenha }
  ];
  
  const services = [
    {
      title: 'Building Construction',
      icon: <FaBuilding size={32} className="text-blue-500" />,
      description: 'State-of-the-art commercial, residential, and institutional buildings with exceptional quality and safety standards.',
      link: '/divisions#building'
    },
    {
      title: 'Civil Engineering',
      icon: <FaRoad size={32} className="text-blue-500" />,
      description: 'Roads, bridges, dams, and other infrastructure projects built to last with cutting-edge engineering techniques.',
      link: '/divisions#civil'
    },
    {
      title: 'Plumbing Services',
      icon: <FaWrench size={32} className="text-blue-500" />,
      description: 'Complete plumbing solutions for commercial and residential properties with modern technology and expertise.',
      link: '/divisions#plumbing'
    },
    {
      title: 'Water & Sanitation',
      icon: <FaWater size={32} className="text-blue-500" />,
      description: 'Sustainable water supply and sanitation systems for communities, businesses, and institutions.',
      link: '/divisions#water'
    }
  ];
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* About Us Snapshot */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex-1">
              <h2 className="section-heading">Kenya's Premier <span className="text-blue-600">Engineering & Construction</span> Company</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2005, Bellagio Engineering has been at the forefront of Kenya's construction industry, 
                delivering world-class infrastructure projects across East Africa. Our commitment to quality, 
                innovation, and sustainable practices has established us as a trusted partner for both public 
                and private sector clients.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With a team of over 500 professionals and a state-of-the-art equipment fleet, we have the capacity 
                to handle projects of any scale and complexity while maintaining the highest standards of safety and quality.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center">
                Learn More About Us <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex-1">
              <div className="relative">
                <img 
                  src={BellagioTeam} 
                  alt="Bellagio Engineering Team" 
                  className="rounded-lg shadow-xl w-full" 
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 md:p-6 rounded-lg shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold">18+</div>
                  <div className="text-sm md:text-base font-medium">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Operating Divisions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-heading">Our Operating <span className="text-blue-600">Divisions</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions across four key divisions, each staffed with specialists 
              who bring decades of combined experience to every project.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => (
              <FeatureCard key={index} {...service} variants={fadeInUp} />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="section-heading">Featured <span className="text-blue-600">Projects</span></h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Our portfolio showcases landmark projects that have transformed Kenya's infrastructure landscape,
                from high-rise buildings to critical infrastructure.
              </p>
            </div>
            <Link to="/projects" className="btn-secondary mt-4 md:mt-0 inline-flex items-center">
              View All Projects <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
          
          // In your HomePage.jsx
<motion.div 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {loading ? (
    <div className="col-span-full text-center py-12">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
      <p className="mt-4 text-gray-600">Loading projects...</p>
    </div>
  ) : Array.isArray(projects) ? (
    projects.length > 0 ? (
      projects.map((project) => (
        <ProjectCard key={project._id} project={project} variants={fadeInUp} />
      ))
    ) : (
      <div className="col-span-full text-center py-12">
        <p className="text-gray-600">No projects found</p>
      </div>
    )
  ) : (
    <div className="col-span-full text-center py-12">
      <p className="text-gray-600">Projects data is not available</p>
    </div>
  )}
</motion.div>
        </div>
      </section>
      
      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-heading">Trusted By</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to work with Kenya's most respected organizations across banking, retail, 
              government, and private sectors.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {clients.map((client, index) => (
              <ClientLogo key={index} client={client} variants={fadeInUp} />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Innovation Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building the <span className="text-yellow-300">Future</span> of Kenya</h2>
              <p className="text-lg mb-6">
                At Bellagio Engineering, we're pioneering innovative construction methods and sustainable 
                practices that are transforming Kenya's infrastructure landscape. Our team leverages 
                cutting-edge technology and global best practices to deliver future-ready projects.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-500 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>BIM (Building Information Modeling) for all projects</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Green building and LEED certification expertise</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Drone surveying and AI-powered project management</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414L9 12.414l4.707-4.707z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Green, energy-efficient building practices</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414L9 12.414l4.707-4.707z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Digital project management systems</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414L9 12.414l4.707-4.707z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Robust safety and compliance standards</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Contact Us Today <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex-1">
              <img 
                src={InnovationImg} 
                alt="Innovation and Sustainability" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Optional: CTA Section or Footer */}
    </div>
  );
};

export default HomePage;

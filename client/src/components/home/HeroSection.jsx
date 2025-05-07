/* eslint-disable no-unused-vars */
// File: client/src/components/home/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlayCircle } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] bg-gray-900 overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="/images/hero-bg.jpg" 
          alt="Bellagio Engineering Construction" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-20 h-full flex items-center text-white">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building Kenya's <span className="text-blue-400">Future</span> with Excellence
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premier construction and civil engineering services delivering innovative infrastructure solutions across East Africa.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-center"
            >
              Get a Free Quote
            </Link>
            <Link 
              to="/projects" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition duration-300 flex items-center justify-center"
            >
              View Our Projects
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex items-center cursor-pointer group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FaPlayCircle className="text-blue-400 text-4xl mr-4 group-hover:text-blue-300 transition duration-300" />
            <span className="text-lg text-gray-200 group-hover:text-white transition duration-300">
              Watch Our Company Video
            </span>
          </motion.div>
        </div>
        
        {/* Animated stats */}
        <motion.div 
          className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md rounded-lg p-6 hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">18+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">1200+</div>
              <div className="text-sm text-gray-300">Employees</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-6 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
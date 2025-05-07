/* eslint-disable no-unused-vars */
// File: client/src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/bellagio-logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Operating Divisions', path: '/divisions' },
    { name: 'Markets', path: '/markets' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.img 
            src={logo} 
            alt="Bellagio Engineering" 
            className="h-12 md:h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-blue-600'
                  : scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {link.name}
              </motion.span>
              {location.pathname === link.path && (
                <motion.div
                  className="h-1 bg-blue-600 mt-1"
                  layoutId="underline"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`btn-primary ml-4 ${!scrolled && 'bg-blue-700 hover:bg-blue-800'}`}
          >
            Get a Quote
          </Link>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="lg:hidden text-2xl p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className={scrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <FaBars className={scrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="lg:hidden bg-white shadow-xl py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-4 font-medium ${
                  location.pathname === link.path
                    ? 'text-blue-600 bg-blue-50 rounded-md'
                    : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary mx-4 text-center"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
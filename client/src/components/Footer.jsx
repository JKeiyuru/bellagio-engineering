/* eslint-disable no-unused-vars */
// File: client/src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram 
} from 'react-icons/fa';
import logo from '../assets/images/bellagio-logo-white.jpg';

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          {/* Column 1: About */}
          <motion.div variants={fadeInUp}>
            <Link to="/">
              <img src={logo} alt="Bellagio Engineering" className="h-16 mb-4" />
            </Link>
            <p className="text-gray-300 mb-6">
              Bellagio Engineering is a premier Kenyan construction and civil engineering company 
              delivering excellence in infrastructure development since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/divisions" className="text-gray-300 hover:text-blue-400 transition-colors">Operating Divisions</Link></li>
              <li><Link to="/markets" className="text-gray-300 hover:text-blue-400 transition-colors">Markets</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </motion.div>
          
          {/* Column 3: Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-500 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li><Link to="/divisions" className="text-gray-300 hover:text-blue-400 transition-colors">Building Construction</Link></li>
              <li><Link to="/divisions" className="text-gray-300 hover:text-blue-400 transition-colors">Civil Engineering</Link></li>
              <li><Link to="/divisions" className="text-gray-300 hover:text-blue-400 transition-colors">Plumbing Services</Link></li>
              <li><Link to="/divisions" className="text-gray-300 hover:text-blue-400 transition-colors">Water & Sanitation</Link></li>
            </ul>
          </motion.div>
          
          {/* Column 4: Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-500 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" size={18} />
                <span className="text-gray-300">
                  Factory Street, Industrial Area, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" size={18} />
                <span className="text-gray-300">+254 722 123 456</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" size={18} />
                <a href="mailto:info@bellagio.co.ke" className="text-gray-300 hover:text-blue-400 transition-colors">
                  info@bellagio.co.ke
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Bellagio Engineering Ltd. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            {' | '}
            <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
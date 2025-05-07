/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// File: client/src/components/TestimonialCarousel.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const nextTestimonial = () => {
    setDirection(1);
    handleNext();
  };

  const prevTestimonial = () => {
    setDirection(-1);
    handlePrevious();
  };

  return (
    <div className="testimonial-carousel relative max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative overflow-hidden">
        {/* Quote icon */}
        <div className="absolute top-6 left-6 text-gray-200">
          <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8v6c0 3.314-2.686 6-6 6h-2c1.105 0 2 0.895 2 2v0c0 1.105-0.895 2-2 2h-0c-1.105 0-2-0.895-2-2v-0c0-3.314 2.686-6 6-6h0v-6c0-1.105 0.895-2 2-2h0c1.105 0 2 0.895 2 2zM30 8v6c0 3.314-2.686 6-6 6h-2c1.105 0 2 0.895 2 2v0c0 1.105-0.895 2-2 2h-0c-1.105 0-2-0.895-2-2v-0c0-3.314 2.686-6 6-6h0v-6c0-1.105 0.895-2 2-2h0c1.105 0 2 0.895 2 2z"/>
          </svg>
        </div>

        {/* Animated testimonial */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="text-center"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl italic text-gray-700 mb-6">
              "{testimonials[currentIndex].quote}"
            </p>
            <h4 className="text-lg font-semibold text-gray-900">
              {testimonials[currentIndex].author}
            </h4>
            <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          ‹
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

TestimonialCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      position: PropTypes.string,
    })
  ).isRequired,
};

export default TestimonialCarousel;

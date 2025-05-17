// File: server/controllers/testimonialController.js
const Testimonial = require('../models/Testimonial');
const asyncHandler = require('express-async-handler');

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
exports.getTestimonials = asyncHandler(async (req, res) => {
  const { featured } = req.query;
  const query = {};
  
  // Apply filters if provided
  if (featured === 'true') {
    query.featured = true;
  }
  
  const testimonials = await Testimonial.find(query)
    .sort({ createdAt: -1 })
    .populate({
      path: 'project',
      select: 'title category'
    });
    
  res.status(200).json({
    success: true,
    count: testimonials.length,
    data: testimonials
  });
});

// @desc    Get single testimonial
// @route   GET /api/testimonials/:id
// @access  Public
exports.getTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id)
    .populate({
      path: 'project',
      select: 'title category client'
    });
    
  if (!testimonial) {
    return res.status(404).json({
      success: false,
      message: 'Testimonial not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: testimonial
  });
});

// @desc    Create testimonial
// @route   POST /api/testimonials
// @access  Private (Admin)
exports.createTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.create(req.body);
  
  res.status(201).json({
    success: true,
    data: testimonial
  });
});

// @desc    Update testimonial
// @route   PUT /api/testimonials/:id
// @access  Private (Admin)
exports.updateTestimonial = asyncHandler(async (req, res) => {
  let testimonial = await Testimonial.findById(req.params.id);
  
  if (!testimonial) {
    return res.status(404).json({
      success: false,
      message: 'Testimonial not found'
    });
  }
  
  testimonial = await Testimonial.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  
  res.status(200).json({
    success: true,
    data: testimonial
  });
});

// @desc    Delete testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private (Admin)
exports.deleteTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);
  
  if (!testimonial) {
    return res.status(404).json({
      success: false,
      message: 'Testimonial not found'
    });
  }
  
  await testimonial.deleteOne();
  
  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Get featured testimonials
// @route   GET /api/testimonials/featured
// @access  Public
exports.getFeaturedTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({ featured: true })
    .sort({ createdAt: -1 })
    .limit(5)
    .populate({
      path: 'project',
      select: 'title category'
    });
    
  res.status(200).json({
    success: true,
    count: testimonials.length,
    data: testimonials
  });
});
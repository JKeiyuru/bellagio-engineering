// File: server/routes/testimonialRoutes.js
const express = require('express');
const {
  getTestimonials,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getFeaturedTestimonials
} = require('../controllers/testimonialController');

const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Get featured testimonials
router.get('/featured', getFeaturedTestimonials);

// Regular routes
router
  .route('/')
  .get(getTestimonials)
  .post(protect, authorize('admin'), createTestimonial);

router
  .route('/:id')
  .get(getTestimonial)
  .put(protect, authorize('admin'), updateTestimonial)
  .delete(protect, authorize('admin'), deleteTestimonial);

module.exports = router;
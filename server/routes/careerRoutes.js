// File: server/routes/careerRoutes.js
const express = require('express');
const {
  getCareers,
  getCareer,
  createCareer,
  updateCareer,
  deleteCareer,
  applyForCareer,
  getApplications,
  updateApplicationStatus
} = require('../controllers/careerController');

const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Application routes - admin access
router
  .route('/applications')
  .get(protect, authorize('admin', 'editor'), getApplications);

router
  .route('/applications/:id')
  .put(protect, authorize('admin'), updateApplicationStatus);

// Career application route
router.post('/:id/apply', applyForCareer);

// Regular career routes
router
  .route('/')
  .get(getCareers)
  .post(protect, authorize('admin'), createCareer);

router
  .route('/:id')
  .get(getCareer)
  .put(protect, authorize('admin'), updateCareer)
  .delete(protect, authorize('admin'), deleteCareer);

module.exports = router;
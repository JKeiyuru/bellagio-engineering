// File: server/routes/applicationRoutes.js

const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const { upload } = require('../middleware/uploadMiddleware'); 
// Import controller (we'll create it next)
const {
  getApplications,
  getApplicationById,
  createApplication,
  updateApplicationStatus,
  deleteApplication
} = require('../controllers/applicationController');



// Public routes
router.post(
  '/',
  upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'coverLetter', maxCount: 1 }
  ]),
  createApplication
);

// Admin routes
router.get('/', protect, authorize('admin'), getApplications);
router.get('/:id', protect, authorize('admin'), getApplicationById);
router.put('/:id/status', protect, authorize('admin'), updateApplicationStatus);
router.delete('/:id', protect, authorize('admin'), deleteApplication);

module.exports = router;
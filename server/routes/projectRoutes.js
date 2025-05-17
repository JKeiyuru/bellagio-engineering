// File: server/routes/projectRoutes.js
const express = require('express');
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getFeaturedProjects
} = require('../controllers/projectController');

const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Get featured projects
router.get('/featured', getFeaturedProjects);

// Regular routes
router
  .route('/')
  .get(getProjects)
  .post(protect, authorize('admin'), createProject);

router
  .route('/:id')
  .get(getProject)
  .put(protect, authorize('admin'), updateProject)
  .delete(protect, authorize('admin'), deleteProject);

module.exports = router;
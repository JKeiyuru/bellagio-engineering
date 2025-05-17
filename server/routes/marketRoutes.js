// File: server/routes/marketRoutes.js
const express = require('express');
const {
  getMarkets,
  getMarket,
  createMarket,
  updateMarket,
  deleteMarket,
  addClient,
  removeClient,
  addProject,
  removeProject
} = require('../controllers/marketController');

const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Client routes
router
  .route('/:id/clients')
  .post(protect, authorize('admin'), addClient);

router
  .route('/:id/clients/:clientId')
  .delete(protect, authorize('admin'), removeClient);

// Project routes
router
  .route('/:id/projects')
  .post(protect, authorize('admin'), addProject);

router
  .route('/:id/projects/:projectId')
  .delete(protect, authorize('admin'), removeProject);

// Main market routes
router
  .route('/')
  .get(getMarkets)
  .post(protect, authorize('admin'), createMarket);

router
  .route('/:id')
  .get(getMarket)
  .put(protect, authorize('admin'), updateMarket)
  .delete(protect, authorize('admin'), deleteMarket);

module.exports = router;
// File: server/routes/contactRoutes.js
const express = require('express');
const {
  submitContactForm,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact
} = require('../controllers/contactController');

const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router
  .route('/')
  .post(submitContactForm)
  .get(protect, authorize('admin', 'editor'), getContacts);

router
  .route('/:id')
  .get(protect, authorize('admin', 'editor'), getContact)
  .put(protect, authorize('admin'), updateContactStatus)
  .delete(protect, authorize('admin'), deleteContact);

module.exports = router;
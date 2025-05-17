// File: server/controllers/applicationController.js

const Application = require('../models/Application');
const Career = require('../models/Career');
const asyncHandler = require('../middleware/asyncHandler');
const AppError = require('../utils/appError');
const { deleteFile } = require('../utils/fileUtils');
const { sendApplicationConfirmation, sendAdminNotification } = require('../utils/emailSender');

// @desc    Get all applications
// @route   GET /api/applications
// @access  Private/Admin
const getApplications = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  
  const status = req.query.status;
  const position = req.query.position;
  
  let query = {};
  
  // Add filters if provided
  if (status) query.status = status;
  if (position) query.position = { $regex: position, $options: 'i' };
  
  const applications = await Application.find(query)
    .populate('career', 'title department')
    .sort({ createdAt: -1 })
    .skip(startIndex)
    .limit(limit);
  
  const count = await Application.countDocuments(query);
  
  res.status(200).json({
    success: true,
    count,
    pages: Math.ceil(count / limit),
    data: applications
  });
});

// @desc    Get application by ID
// @route   GET /api/applications/:id
// @access  Private/Admin
const getApplicationById = asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id)
    .populate('career', 'title department location');
  
  if (!application) {
    throw new AppError('Application not found', 404);
  }
  
  res.status(200).json({
    success: true,
    data: application
  });
});

// @desc    Create new application
// @route   POST /api/applications
// @access  Public
const createApplication = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    career: careerId,
    education,
    experience,
    skills
  } = req.body;
  
  // Check if career exists
  const career = await Career.findById(careerId);
  if (!career) {
    throw new AppError('Career position not found', 404);
  }
  
  // Handle file uploads
  if (!req.files || !req.files.resume) {
    throw new AppError('Resume file is required', 400);
  }
  
  const resumePath = `/${req.files.resume[0].path}`;
  let coverLetterPath = '';
  
  if (req.files.coverLetter) {
    coverLetterPath = `/${req.files.coverLetter[0].path}`;
  }
  
  // Create application
  const application = await Application.create({
    firstName,
    lastName,
    email,
    phone,
    position: career.title,
    career: careerId,
    resume: resumePath,
    coverLetter: coverLetterPath,
    education,
    experience,
    skills
  });
  
  // Send confirmation email to applicant
  await sendApplicationConfirmation(application);
  
  // Notify admin about new application
  await sendAdminNotification({
    subject: 'New Job Application Received',
    title: 'New Job Application',
    message: `A new application has been received for the ${career.title} position from ${firstName} ${lastName}.`
  });
  
  res.status(201).json({
    success: true,
    data: application
  });
});

// @desc    Update application status
// @route   PUT /api/applications/:id/status
// @access  Private/Admin
const updateApplicationStatus = asyncHandler(async (req, res) => {
  const { status, notes } = req.body;
  
  const application = await Application.findById(req.params.id);
  
  if (!application) {
    throw new AppError('Application not found', 404);
  }
  
  application.status = status || application.status;
  application.notes = notes || application.notes;
  
  const updatedApplication = await application.save();
  
  res.status(200).json({
    success: true,
    data: updatedApplication
  });
});

// @desc    Delete application
// @route   DELETE /api/applications/:id
// @access  Private/Admin
const deleteApplication = asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id);
  
  if (!application) {
    throw new AppError('Application not found', 404);
  }
  
  // Delete associated files
  if (application.resume) {
    await deleteFile(application.resume.substring(1)); // Remove leading slash
  }
  
  if (application.coverLetter) {
    await deleteFile(application.coverLetter.substring(1)); // Remove leading slash
  }
  
  await application.remove();
  
  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  getApplications,
  getApplicationById,
  createApplication,
  updateApplicationStatus,
  deleteApplication
};
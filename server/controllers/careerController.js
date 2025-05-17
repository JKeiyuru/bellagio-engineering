// File: server/controllers/careerController.js
const Career = require('../models/Career');
const Application = require('../models/Application');
const asyncHandler = require('express-async-handler');
const { uploadToS3 } = require('../utils/fileUpload');

// @desc    Get all active careers
// @route   GET /api/careers
// @access  Public
exports.getCareers = asyncHandler(async (req, res) => {
  const { department } = req.query;
  const query = { isActive: true };
  
  if (department) {
    query.department = department;
  }
  
  const careers = await Career.find(query).sort({ createdAt: -1 });
  
  res.status(200).json({
    success: true,
    count: careers.length,
    data: careers
  });
});

// @desc    Get single career
// @route   GET /api/careers/:id
// @access  Public
exports.getCareer = asyncHandler(async (req, res) => {
  const career = await Career.findById(req.params.id);
  
  if (!career) {
    return res.status(404).json({
      success: false,
      message: 'Career not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: career
  });
});

// @desc    Create career
// @route   POST /api/careers
// @access  Private (Admin)
exports.createCareer = asyncHandler(async (req, res) => {
  const career = await Career.create(req.body);
  
  res.status(201).json({
    success: true,
    data: career
  });
});

// @desc    Update career
// @route   PUT /api/careers/:id
// @access  Private (Admin)
exports.updateCareer = asyncHandler(async (req, res) => {
  let career = await Career.findById(req.params.id);
  
  if (!career) {
    return res.status(404).json({
      success: false,
      message: 'Career not found'
    });
  }
  
  career = await Career.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  
  res.status(200).json({
    success: true,
    data: career
  });
});

// @desc    Delete career
// @route   DELETE /api/careers/:id
// @access  Private (Admin)
exports.deleteCareer = asyncHandler(async (req, res) => {
  const career = await Career.findById(req.params.id);
  
  if (!career) {
    return res.status(404).json({
      success: false,
      message: 'Career not found'
    });
  }
  
  await career.deleteOne();
  
  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Apply for career
// @route   POST /api/careers/:id/apply
// @access  Public
exports.applyForCareer = asyncHandler(async (req, res) => {
  const career = await Career.findById(req.params.id);
  
  if (!career) {
    return res.status(404).json({
      success: false,
      message: 'Career not found'
    });
  }
  
  if (!career.isActive) {
    return res.status(400).json({
      success: false,
      message: 'This position is no longer accepting applications'
    });
  }
  
  // Check if CV file is included
  if (!req.files || !req.files.cv) {
    return res.status(400).json({
      success: false,
      message: 'Please upload your CV'
    });
  }
  
  try {
    // Upload CV to S3 or your storage service
    const cvUrl = await uploadToS3(req.files.cv);
    
    // Create application with CV URL
    const application = await Application.create({
      ...req.body,
      career: req.params.id,
      cvUrl
    });
    
    res.status(201).json({
      success: true,
      data: application
    });
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading file'
    });
  }
});

// @desc    Get all applications (Admin only)
// @route   GET /api/careers/applications
// @access  Private (Admin)
exports.getApplications = asyncHandler(async (req, res) => {
  const { status, careerId } = req.query;
  const query = {};
  
  if (status) {
    query.status = status;
  }
  
  if (careerId) {
    query.career = careerId;
  }
  
  const applications = await Application.find(query)
    .populate({
      path: 'career',
      select: 'title department'
    })
    .sort({ createdAt: -1 });
  
  res.status(200).json({
    success: true,
    count: applications.length,
    data: applications
  });
});

// @desc    Update application status (Admin only)
// @route   PUT /api/careers/applications/:id
// @access  Private (Admin)
exports.updateApplicationStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  
  if (!status) {
    return res.status(400).json({
      success: false,
      message: 'Please provide status'
    });
  }
  
  let application = await Application.findById(req.params.id);
  
  if (!application) {
    return res.status(404).json({
      success: false,
      message: 'Application not found'
    });
  }
  
  application = await Application.findByIdAndUpdate(
    req.params.id,
    { status },
    {
      new: true,
      runValidators: true
    }
  ).populate({
    path: 'career',
    select: 'title department'
  });
  
  res.status(200).json({
    success: true,
    data: application
  });
});
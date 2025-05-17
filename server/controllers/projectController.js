// File: server/controllers/projectController.js
const Project = require('../models/Project');
const asyncHandler = require('express-async-handler');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
exports.getProjects = asyncHandler(async (req, res) => {
  const { category, featured, market } = req.query;
  const query = {};
  
  // Apply filters if provided
  if (category) {
    query.category = category;
  }
  
  if (featured === 'true') {
    query.featured = true;
  }
  
  if (market) {
    query.markets = market;
  }
  
  const projects = await Project.find(query)
    .sort({ createdAt: -1 })
    .populate('testimonial');
    
  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects
  });
});

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
exports.getProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id)
    .populate('testimonial');
    
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: project
  });
});

// @desc    Create project
// @route   POST /api/projects
// @access  Private (Admin)
exports.createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);
  
  res.status(201).json({
    success: true,
    data: project
  });
});

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private (Admin)
exports.updateProject = asyncHandler(async (req, res) => {
  let project = await Project.findById(req.params.id);
  
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
  
  project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  
  res.status(200).json({
    success: true,
    data: project
  });
});

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private (Admin)
exports.deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
  
  await project.deleteOne();
  
  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Get featured projects
// @route   GET /api/projects/featured
// @access  Public
exports.getFeaturedProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ featured: true })
    .sort({ createdAt: -1 })
    .limit(6)
    .populate('testimonial');
    
  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects
  });
});
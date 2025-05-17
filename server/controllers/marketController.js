// File: server/controllers/marketController.js
const Market = require('../models/Market');
const asyncHandler = require('express-async-handler');

// @desc    Get all markets
// @route   GET /api/markets
// @access  Public
exports.getMarkets = asyncHandler(async (req, res) => {
  const markets = await Market.find()
    .sort({ order: 1 })
    .populate('featuredProjects');
    
  res.status(200).json({
    success: true,
    count: markets.length,
    data: markets
  });
});

// @desc    Get single market
// @route   GET /api/markets/:id
// @access  Public
exports.getMarket = asyncHandler(async (req, res) => {
  const market = await Market.findById(req.params.id)
    .populate('featuredProjects');
    
  if (!market) {
    return res.status(404).json({
      success: false,
      message: 'Market not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: market
  });
});

// @desc    Create market
// @route   POST /api/markets
// @access  Private (Admin)
exports.createMarket = asyncHandler(async (req, res) => {
  const market = await Market.create(req.body);
  
  res.status(201).json({
    success: true,
    data: market
  });
});

// @desc    Update market
// @route   PUT /api/markets/:id
// @access  Private (Admin)
exports.updateMarket = asyncHandler(async (req, res) => {
  let market = await Market.findById(req.params.id);
  
  if (!market) {
    return res.status(404).json({
      success: false,
      message: 'Market not found'
    });
  }
  
  market = await Market.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  
  res.status(200).json({
    success: true,
    data: market
  });
});

// @desc    Delete market
// @route   DELETE /api/markets/:id
// @access  Private (Admin)
exports.deleteMarket = asyncHandler(async (req, res) => {
  const market = await Market.findById(req.params.id);
  
  if (!market) {
    return res.status(404).json({
      success: false,
      message: 'Market not found'
    });
  }
  
  await market.deleteOne();
  
  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Add client to market
// @route   POST /api/markets/:id/clients
// @access  Private (Admin)
exports.addClient = asyncHandler(async (req, res) => {
  const { name, logo } = req.body;
  
  if (!name) {
    return res.status(400).json({
      success: false,
      message: 'Please provide client name'
    });
  }
  
  let market = await Market.findById(req.params.id);
  
  if (!market) {
    return res.status(404).json({
      success: false,
      message: 'Market not found'
    });
  }
  
  market.keyClients.push({ name, logo });
  await market.save();
  
  res.status(200).json({
    success: true,
    data: market
  });
});

// @desc    Remove client from market
// @route   DELETE /api/markets/:id/clients/:clientId
// @access  Private (Admin)
exports.removeClient = asyncHandler(async (req, res) => {
  const market = await Market.findById(req.params.id);
  
  if (!market) {
    return res.status(404).json({
      success: false,
      message: 'Market not found'
    });
  }
  
  // Remove client
  market.keyClients = market.keyClients.filter(
    client => client._id.toString() !== req.params.clientId
  );
  
  await market.save();
  
  res.status(200).json({
    success: true,
    data: market
  });
});

// @desc    Add featured project to market
// @route   POST /api/markets/:id/projects
// @access  Private (Admin)
exports.addProject = asyncHandler(async (req, res) => {
  const { projectId } = req.body;
  
  if (!projectId) {
    return res.status(400).json({
      success: false,
      message: 'Please provide project ID'
    });
  }
  
  let market = await Market.findById(req.params.id);
  
  if (!market) {
    return res.status(404).json({
      success: false,
      message: 'Market not found'
    });
  }
  
  // Check if project already exists
  if (market.featuredProjects.includes(projectId)) {
    return res.status(400).json({
      success: false,
      message: 'Project already added to market'
    });
  }
  
  market.featuredProjects.push(projectId);
  await market.save();
  
  res.status(200).json({
    success: true,
    data: market
  });
});

// @desc    Remove project from market
// @route   DELETE /api/markets/:id/projects/:projectId
// @access  Private (Admin)
exports.removeProject = asyncHandler(async (req, res) => {
  const market = await Market.findById(req.params.id);
  
  if (!market) {
    return res.status(404).json({
      success: false,
      message: 'Market not found'
    });
  }
  
  // Remove project
  market.featuredProjects = market.featuredProjects.filter(
    project => project.toString() !== req.params.projectId
  );
  
  await market.save();
  
  res.status(200).json({
    success: true,
    data: market
  });
});
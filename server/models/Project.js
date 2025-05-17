// File: server/models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required']
  },
  client: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Project location is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: ['Building Construction', 'Civil Engineering', 'Plumbing Services', 'Water & Sanitation']
  },
  completionDate: {
    type: Date,
    required: [true, 'Completion date is required']
  },
  images: [{
    type: String, // URLs to image files
    required: [true, 'At least one project image is required']
  }],
  featured: {
    type: Boolean,
    default: false
  },
  scope: {
    type: String,
    required: [true, 'Project scope is required']
  },
  markets: [{
    type: String,
    enum: ['Banking', 'Retail', 'Government', 'Residential', 'Industrial']
  }],
  testimonial: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Testimonial'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for improved query performance
ProjectSchema.index({ category: 1 });
ProjectSchema.index({ featured: 1 });
ProjectSchema.index({ markets: 1 });

module.exports = mongoose.model('Project', ProjectSchema);
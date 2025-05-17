// File: server/models/Career.js
const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Job location is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Job description is required']
  },
  responsibilities: [{
    type: String,
    required: [true, 'Job responsibilities are required']
  }],
  qualifications: [{
    type: String,
    required: [true, 'Job qualifications are required']
  }],
  experience: {
    type: String,
    required: [true, 'Experience requirement is required']
  },
  employmentType: {
    type: String,
    required: [true, 'Employment type is required'],
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship']
  },
  salary: {
    type: String,
    default: 'Competitive'
  },
  applicationDeadline: {
    type: Date,
    required: [true, 'Application deadline is required']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for improved query performance
CareerSchema.index({ isActive: 1 });
CareerSchema.index({ department: 1 });

module.exports = mongoose.model('Career', CareerSchema);
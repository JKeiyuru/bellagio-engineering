// File: server/models/Application.js
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  career: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Career',
    required: [true, 'Career ID is required']
  },
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  coverLetter: {
    type: String,
    required: [true, 'Cover letter is required']
  },
  cvUrl: {
    type: String,
    required: [true, 'CV URL is required']
  },
  status: {
    type: String,
    enum: ['Received', 'Under Review', 'Shortlisted', 'Rejected', 'Interviewed', 'Offered', 'Hired'],
    default: 'Received'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for improved query performance
ApplicationSchema.index({ career: 1 });
ApplicationSchema.index({ status: 1 });
ApplicationSchema.index({ email: 1 });

module.exports = mongoose.model('Application', ApplicationSchema);
// File: server/models/Testimonial.js
const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
    trim: true
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Testimonial message is required']
  },
  image: {
    type: String,
    default: '/assets/images/default-avatar.jpg'
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  featured: {
    type: Boolean,
    default: false
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for improved query performance
TestimonialSchema.index({ featured: 1 });

module.exports = mongoose.model('Testimonial', TestimonialSchema);
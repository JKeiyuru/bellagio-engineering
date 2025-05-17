// File: server/models/Market.js
const mongoose = require('mongoose');

const MarketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Market name is required'],
    trim: true,
    enum: ['Banking', 'Retail', 'Government', 'Residential', 'Industrial'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Market description is required']
  },
  image: {
    type: String,
    required: [true, 'Market image is required']
  },
  keyClients: [{
    name: {
      type: String,
      required: true
    },
    logo: {
      type: String
    }
  }],
  featuredProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  statistics: {
    projectsCompleted: {
      type: Number,
      default: 0
    },
    totalValue: {
      type: Number,
      default: 0
    },
    yearsExperience: {
      type: Number,
      default: 0
    }
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Market', MarketSchema);
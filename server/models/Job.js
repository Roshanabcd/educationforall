const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'internship'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: [String],
  salary: {
    min: Number,
    max: Number,
    currency: String,
  },
  skills: [String],
  applications: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'accepted', 'rejected'],
      default: 'pending',
    },
    appliedAt: {
      type: Date,
      default: Date.now,
    },
  }],
  postedAt: {
    type: Date,
    default: Date.now,
  },
  deadline: Date,
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Job', jobSchema);
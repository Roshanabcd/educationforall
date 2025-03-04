const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  issueDate: {
    type: Date,
    default: Date.now,
  },
  certificateNumber: {
    type: String,
    unique: true,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  grade: {
    type: String,
  },
});

module.exports = mongoose.model('Certificate', certificateSchema);
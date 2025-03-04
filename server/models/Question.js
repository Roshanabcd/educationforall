const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tags: [String],
  votes: {
    up: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    down: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
  },
  answers: [{
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    votes: {
      up: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }],
      down: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }],
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Question', questionSchema);
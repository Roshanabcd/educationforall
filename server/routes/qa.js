const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const auth = require('../middleware/auth');

// Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find()
      .populate('author', 'firstName lastName')
      .sort('-createdAt');
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a question
router.post('/', auth, async (req, res) => {
  try {
    const question = new Question({
      ...req.body,
      author: req.user.userId,
    });
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add an answer
router.post('/:id/answers', auth, async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    question.answers.push({
      content: req.body.content,
      author: req.user.userId,
    });

    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
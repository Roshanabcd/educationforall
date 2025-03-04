const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');
const auth = require('../middleware/auth');

// Get user certificates
router.get('/', auth, async (req, res) => {
  try {
    const certificates = await Certificate.find({ user: req.user.userId })
      .populate('course', 'title')
      .sort('-issueDate');
    res.json(certificates);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Generate certificate
router.post('/generate', auth, async (req, res) => {
  try {
    const { courseId, grade } = req.body;
    
    const certificate = new Certificate({
      user: req.user.userId,
      course: courseId,
      grade,
      certificateNumber: `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      completionDate: new Date(),
    });

    await certificate.save();
    res.status(201).json(certificate);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
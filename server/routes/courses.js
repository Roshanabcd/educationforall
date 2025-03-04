const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const auth = require('../middleware/auth');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find()
      .populate('instructor', 'firstName lastName')
      .sort('-createdAt');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'firstName lastName')
      .populate('reviews.user', 'firstName lastName');
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create course
router.post('/', auth, async (req, res) => {
  try {
    const course = new Course({
      ...req.body,
      instructor: req.user.userId,
    });

    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Enroll in course
router.post('/:id/enroll', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (course.enrolledStudents.includes(req.user.userId)) {
      return res.status(400).json({ message: 'Already enrolled' });
    }

    course.enrolledStudents.push(req.user.userId);
    await course.save();

    res.json({ message: 'Successfully enrolled' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update course progress
router.put('/:id/progress', auth, async (req, res) => {
  try {
    const { progress } = req.body;
    const user = await User.findById(req.user.userId);
    
    const courseIndex = user.enrolledCourses.findIndex(
      c => c.course.toString() === req.params.id
    );

    if (courseIndex === -1) {
      return res.status(400).json({ message: 'Not enrolled in course' });
    }

    user.enrolledCourses[courseIndex].progress = progress;
    if (progress === 100) {
      user.enrolledCourses[courseIndex].completed = true;
    }

    await user.save();
    res.json({ message: 'Progress updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
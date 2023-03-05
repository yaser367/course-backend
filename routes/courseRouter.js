const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router()

router.post('/addCourse', courseController.addCourse)
router.get('/getCourses', courseController.getCourses)

module.exports = router;
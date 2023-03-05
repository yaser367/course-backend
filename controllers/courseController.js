const courseData = require("../models/courseModel");

const addCourse = async (req, res) => {
  const { name, startDate, totalLesson, lessonCompleted, duration } =
    req.body;
  try {
    if (!name || !totalLesson || !lessonCompleted || !duration) {
      return res.status(401).json("fields required");
    }
    const course = new courseData({
      name,
      startDate,
      totalLesson,
      lessonCompleted,
      duration,
    });
    await course.save();
    res.status(200).json("Course added successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await courseData.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  addCourse,
  getCourses,
};

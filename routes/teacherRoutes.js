const express = require('express');
const router = express.Router();

module.exports = (teacherService) => {
  router.post('/', async (req, res) => {
    try {
      const { email, name } = req.body; 
      const teacher = await teacherService.addTeacher(email, name);
      res.status(201).json(teacher);
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error adding teacher' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const teachers = await teacherService.getTeachersWithStudents();
      res.status(200).json(teachers);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching teachers' });
    }
  });

  return router;
};

const express = require('express');
const router = express.Router();

module.exports = (studentService) => {
  router.post('/', async (req, res) => {
    try {
      const { email, name } = req.body;
      
      const student = await studentService.addStudent(email, name);
      res.status(201).json(student);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error adding student' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const { email, name } = req.body;
      
      const student = await studentService.getStudent(email, name);
      res.status(201).json(student);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error adding student' });
    }
  })

  return router;
};

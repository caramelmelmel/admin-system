const {getRegisterViaEmail,isEmptyEntry} = require('../helpers/objectUtils')
const express = require('express');
const router = express.Router();

module.exports = (teacherService) => {
  router.post('/', async (req, res) => {

      const { email, name } = req.body; 
      if (isEmptyEntry(email)&& isEmptyEntry(name)) {
        return res.status(400).json({ message: 'Bad request' });
    }
    const TeacherEmail = await getRegisterViaEmail(email,teacherService.teacherModel);
    console.log(`teacher email is ${TeacherEmail}`)
    if (TeacherEmail) {
        return res.status(409).json({ message: 'Teacher with this email already exists' });
    }
      const teacher = await teacherService.addTeacher(email, name);
      return res.status(201).json(teacher);
    
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

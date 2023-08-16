const express = require('express');
const { isEmptyEntry, isValidEmail, getRegisterViaEmail } = require('../helpers/objectUtils');
const router = express.Router();

module.exports = (studentService, teacherService) => {
  router.post('/register', async (req, res) => {
    try {
      const { teacher, students } = req.body;
      const studentList = Array.isArray(students) ? students : [students];
      let validStudentEmail = true;

      if (isEmptyEntry(teacher) || isEmptyEntry(studentList)) {
        return res.status(400).json({ message: 'Empty entries' });
      }
      studentList.forEach((value)=> {
        if (!isValidEmail(value)) {
            validStudentEmail = false;
        }
      })
      if (!isValidEmail(teacher) ||!validStudentEmail) {
        return res.status(400).json({ message: 'Enter only email addresses' });
      }
      
      const TeacherEmail = await getRegisterViaEmail(teacher,teacherService.teacherModel);
      if(!TeacherEmail|| !TeacherEmail.teacher_id) {
        return res.status(404).json({ message: 'Teacher cannot be found' });
      }
      const RegisteredStudents = await studentService.getRegisteredStudents(studentList);
      if (RegisteredStudents.length === 0) {
        return res.status(404).json({ message: 'No students found' });
      }
      studentService.addStudentLinks(RegisteredStudents,TeacherEmail.teacher_id);
      res.status(200).json({ message: 'successfully added students to teacher' });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error adding student' });
    }
  });

  return router;
};

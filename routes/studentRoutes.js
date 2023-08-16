const { isEmptyEntry, getRegisterViaEmail, isValidEmail } = require("../helpers/objectUtils");
const express = require('express');
const router = express.Router();

module.exports = (studentService) => {
  router.post('/', async (req, res) => {
      const { email, name } = req.body;
      if (isEmptyEntry(email)&& isEmptyEntry(name)) {
        return res.status(400).json({ message: 'Empty entries' });
    }
    if (!isValidEmail(email)) {
      return res.status(401).json({message: 'Email format should be name@example.com'})
    }
      const studentEmail = await getRegisterViaEmail(email,studentService.studentModel);
      
    if (studentEmail) {
        return res.status(409).json({ message: 'Student with this email already exists' });
    }

      const student = await studentService.addStudent(email, name);
      return res.status(201).json(student);
  });

  return router;
};

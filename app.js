const express = require('express');
const Teacher = require('./models/Teacher');
const Student = require('./models/Student');
const sequelize = require('./database');
const TeacherService = require('./services/TeacherService');
const StudentService = require('./services/StudentService');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const registrationRoutes = require('./routes/registrationRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Sequelize models
const teacherModel = Teacher;
const studentModel = Student;

// Initialize services with manual dependency injection
const teacherService = new TeacherService(teacherModel, studentModel);
const studentService = new StudentService(studentModel,teacherModel);

// Inject services into route handlers
app.use('/api/teachers', teacherRoutes(teacherService));
app.use('/api/students', studentRoutes(studentService));

app.use('/api', registrationRoutes(studentService,teacherService));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.sync({ force: true, alter:true }); // Sync database models
});

module.exports = server

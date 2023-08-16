class StudentService {
    constructor(studentModel) {
      this.studentModel = studentModel;
    }
  
    async addStudent(email, name) {
      return await this.studentModel.create({ email, name });
    }

    async getRegisteredStudents(studentEmails) {
        const student = await this.studentModel.findAll({where: {email: studentEmails}});
        return student;
    }

    async addStudentLinks(studentList,teacher_id) {
        this.studentModel.update({TeacherTeacherId: teacher_id }, {where: {id: studentList.map(student => student.id)}})
    }
  }
  
  module.exports = StudentService;
  
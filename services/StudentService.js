class StudentService {
    constructor(studentModel,teacherModel) {
        this.teacherModel = teacherModel;
        this.studentModel = studentModel;
        this.studentModel.belongsToMany(this.teacherModel, {through: 'TeacherStudent'});
    }
  
    async addStudent(email, name) {
      return await this.studentModel.create({ email, name });
    }

    async getRegisteredStudents(studentEmails) {
        const student = await this.studentModel.findAll({where: {email: studentEmails}});
        return student;
    }
  }
  
  module.exports = StudentService;
  
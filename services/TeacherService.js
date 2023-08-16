class TeacherService {
    constructor(teacherModel, studentModel) {
      this.teacherModel = teacherModel;
      this.studentModel = studentModel;
      this.teacherModel.belongsToMany(this.studentModel, {through: 'TeacherStudent'});
    }
    
    async addTeacher(email, name) {
      return await this.teacherModel.create({ email, name });
    }
  
    async getTeachersWithStudents() {
      return await this.teacherModel.findAll({ include: this.studentModel });
    }

    async getTeacherViaEmail(teacherEmail) {
        return await this.teacherModel.findOne({ where: { email: teacherEmail } });
    }
    async addStudentLinks(studentList,teacher) {
        return await teacher.setStudents(studentList)
    }
  }
  
  module.exports = TeacherService;
  
class TeacherService {
    constructor(teacherModel, studentModel) {
      this.teacherModel = teacherModel;
      this.studentModel = studentModel;
      this.teacherModel.hasMany(studentModel, {as: 'students'});
    }
    
    async addTeacher(email, name) {
      return await this.teacherModel.create({ email, name });
    }
  
    async getTeachersWithStudents() {
      return await this.teacherModel.findAll({ include: this.studentModel });
    }
  }
  
  module.exports = TeacherService;
  
class StudentService {
    constructor(studentModel) {
      this.studentModel = studentModel;
    }
  
    async addStudent(email, name) {
      return await this.studentModel.create({ email, name });
    }

    async getStudent() {
        const student = await this.studentModel.findAll();
        return student;
    }
  }
  
  module.exports = StudentService;
  
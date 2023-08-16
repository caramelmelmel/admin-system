class TeacherService {
    constructor(teacherModel, studentModel) {
      this.teacherModel = teacherModel;
      this.studentModel = studentModel;
      this.teacherModel.belongsToMany(this.studentModel, {through: 'TeacherStudent'});
    }
    
    getStudentEmailList(students) {
        let studentList = [];
        students.forEach(student => {
            studentList.push(student.email);
        })
        return studentList;
    }

    async addTeacher(email, name) {
      return await this.teacherModel.create({ email, name });
    }

    async getAllTeachersWithRespectiveStudents() {
        let classList = []
        let classRegistry = {}
        const teachers = await this.teacherModel.findAll({
            include: {
              model: this.studentModel,
              attributes: ['email'],
            },
          });
          teachers.forEach(teacher => {
            let teacherStudentMap = {}
            const students = this.getStudentEmailList(teacher.Students)
            teacherStudentMap["email"] = teacher.email;
            teacherStudentMap["students"] = students;
            classList.push(teacherStudentMap)
          });
          classRegistry["teachers"] = classList;
          return classRegistry;
    }

    async getTeacherViaEmail(teacherEmail) {
        return await this.teacherModel.findOne({ where: { email: teacherEmail } });
    }
    async addStudentLinks(studentList,teacher) {
        return await teacher.addStudent(studentList);
    }
    async removeStudentLink(student,teacher) {
        return await teacher.removeStudent(student);
    }

    async getCommonStudents(teacerEmails) {
        const teachers = await this.teacherModel.findAll({
            where: { email: teacerEmails },
            include: {
              model: this.studentModel,
              attributes: ['email'],
            },
          });
          if (teachers.length > 1) {
            const commonStudents = teachers[0].Students.filter((student) =>
              teachers.every((teacher) => teacher.Students.some((tStudent) => tStudent.email === student.email))
            );
            return commonStudents.map((student) => student.email);
          } else {
            return [];
          }
    }
  }
  
  module.exports = TeacherService;
  
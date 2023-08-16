const { expect } = require('chai');
const sinon = require('sinon');
const supertest = require('supertest');
const { createContainer, asFunction } = require('awilix');
const app = require('../app'); // Your Express app instance

describe('API Tests', () => {
  let container;
  let mockTeacherService;
  let mockStudentService;

  before(() => {
    container = createContainer();

    mockTeacherService = {
      addTeacher: sinon.stub(),
      
    };

    mockStudentService = {
      addStudent: sinon.stub(),
      
    };

    container.register({
      TeacherService: asFunction(() => mockTeacherService),
      StudentService: asFunction(() => mockStudentService),
      
    });
  });

  describe('POST /api/teachers', () => {
    it('should add a new teacher', async () => {
      const response = await supertest(app)
        .post('/api/teachers')
        .send({ email: 'teachermary@gmail.com', name: 'Mary' })
        .expect(201);

      expect(response.body.email).to.equal('teachermary@gmail.com');
      expect(response.body.name).to.equal('Mary');
    });

    it('should return an error for duplicate teacher', async() => {
      const response = await supertest(app)
      .post('/api/teachers')
      .send({ email: 'teachermary@gmail.com', name: 'Mary' })
      .expect(409);
    })
    }
  );
});

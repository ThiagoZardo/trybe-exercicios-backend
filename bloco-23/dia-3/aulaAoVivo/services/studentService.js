const studentModel = require('../models/studentModel');

const getStudent = async () => {
  const student = await studentModel.listAllStudents();
  return student;
}

module.exports = {
  getStudent,
}
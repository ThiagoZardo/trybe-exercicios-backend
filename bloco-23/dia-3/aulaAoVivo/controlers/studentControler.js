const studentService = require('../services/studentService');

listStudent = async (req, res, next) => {
  try {
    const students = await studentService.getStudent();
    return res.status(200).json(students);
  } catch (error) {
    console.log('Erro listStudent', error.message);
    next(error);
  }

}

module.exports = {
  listStudent,
}
const connection = require('./connection');

const getAll = async (req, res) => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return authors;
}

module.exports = {
  getAll,
}

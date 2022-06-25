const connection = require('./connection');

const validateUser = (firstName, lastName, email) => {
  if (!firstName || !lastName || !email) return false
  return true;
}

const validatePassword = (password) => {
  if (!password || password.lentgh < 6) return false
  return true;
}

const getUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users')
  return users;
}

const getUserById = async (id) => {
  const [user] = await connection.execute('SELECT * FROM users WHERE id=?', [id])
  if (user.length === 0) return null;

  return user;
}

const createUser = (firstName, lastName, email, password) => {
  connection.execute(
    `INSERT INTO users (first_name, last_name, email, password)
    VALUES (?, ?, ?, ?)`,
    [firstName, lastName, email, password]
  )
}


module.exports = {
  validateUser,
  validatePassword,
  createUser,
  getUsers,
  getUserById,
}
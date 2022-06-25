const connection = require('./connection');

const getAll = async (req, res) => {
  const [books]  = await connection.execute('SELECT id, title, author_id FROM books');
  return books;
}

const getById = async (idBook) => {
  const [books] = await connection.execute('SELECT * FROM model_example.books WHERE id=?', [idBook]);
  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    author_id,
  }))[0];
}

const getByAythorId = async (authorId) => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id=?', [authorId]
  );
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))
}

const isValidAuthor = (firstName, _middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const isValidBook = async (title, author_id) => {
  if (title.length === 0 || title.length < 3) return false;
  if (!author_id || typeof author_id !== 'number') return false;
}

const createNewAuthor = async (firstName, middleName, lastName) => {
  connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName]
  );
}

const createNewBook = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
  );

module.exports = {
  getAll,
  getByAythorId,
  getById,
  isValidAuthor,
  createNewAuthor,
  isValidBook,
  createNewBook,
}

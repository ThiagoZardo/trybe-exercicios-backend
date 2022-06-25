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

module.exports = {
  getAll,
  getByAythorId,
  getById,
}

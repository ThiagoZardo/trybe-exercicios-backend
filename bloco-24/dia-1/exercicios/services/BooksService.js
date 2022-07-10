const { Book } = require('../models');
/** @type {{ [key:string]: Sequelize.ModelStatic<Sequelize.Model<any, any>>}} */


const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const findById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const addNewBook = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const editBook = async (id, { title, author, pageQuantity }) => {
  const bookEdited = await Book.update({ title, author, pageQuantity },
    { where: { id } });
  return bookEdited;
};

const removeBook = async (id) => {
  const bookRemoved = await Book.destroy(
    {where: { id } },
  );
  return bookRemoved;
};

const searchBookByAuthor = async (author) => {
  const bookFound = await Book.findAll({ where: { author } });
  return bookFound;
}

module.exports = {
  getAll,
  findById,
  addNewBook,
  editBook,
  removeBook,
  searchBookByAuthor,
};
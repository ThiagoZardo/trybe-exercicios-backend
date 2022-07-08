const { Book } = require('../models');

const getAll = async () => {
  try {
    const books = await Book.findAll();
    console.log(books);
    return books;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAll,
}
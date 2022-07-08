const BookService = require('../services/BooksService');

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    res.status(200).json(books);
  } catch (error) {
    console.log('erro contrroler', error);    
  }
};

module.exports = {
  getAll,
};

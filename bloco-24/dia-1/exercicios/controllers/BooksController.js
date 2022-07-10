const res = require('express/lib/response');
const Book = require('../models/Book');
const BookService = require('../services/BooksService');

const getAll = async (req, res) => {
  const { author } = req.query;

  if(author) {
    const author = await BookService.searchBookByAuthor(author);
    return res.status(200).json(books);
  };
  const books = await BookService.getAll();
  return res.status(200).json(books);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.findById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(book);
};

const addNewBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BookService.addNewBook({ title, author, pageQuantity });
  if (!newBook) return res.status(400).json({ message: 'Book not add' });
  return res.status(201).json(newBook);
};

const editedBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const bookEdited = await BookService.editBook(id, { title, author, pageQuantity });
  if (!bookEdited) return res.status(400).json({ message: 'Book not found' });
  return res.status(201).json(bookEdited);
};

const removeBook = async (req, res) => {
  const { id } = req.params;
  const bookRemoved = await BookService.removeBook(id);
  if (!bookRemoved) return res.status(500).json({ message: 'Algo deu errado' });
  return res.status(201).json(bookRemoved);
};

module.exports = {
  getAll,
  findById,
  addNewBook,
  editedBook,
  removeBook,
};

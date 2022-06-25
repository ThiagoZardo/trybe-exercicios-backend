const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000

const Author = require('./models/Author');
const Books = require('./models/Book');

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id)
  if (!author) return res.status(404).json({ message: 'Not Found' });
  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValidAuthor(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.createNewAuthor(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso' });
})

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id) 
  ? await Books.getByAythorId(author_id)
  : await Books.getAll();
  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getById(id);
  if (!book) return res.status(404).json({ message: 'Not found' });
  return res.status(200).json(book);
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!Books.isValidBook(title, author_id)) {
    return res.status(400).json({ message: 'Dados Inválidos' });
  }
  const response = await Books.createNewBook(title, author_id);
  console.log(response);
  return res.status(200).json({ message: 'Livro cadastrado com sucesso!' })
})

app.listen(port, () => console.log(`Online na porta ${port}`));
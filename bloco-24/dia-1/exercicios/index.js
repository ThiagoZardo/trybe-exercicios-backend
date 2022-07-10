const express = require('express');
const BooksController = require('./controllers/BooksController');
/** @type {{ [key:string]: Sequelize.ModelStatic<Sequelize.Model<any, any>>}} */

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', BooksController.getAll);
app.get('/books/search', BooksController.getAll)
app.get('/books/:id', BooksController.findById);

app.post('/books', BooksController.addNewBook);

app.put('/books/:id', BooksController.editedBook);

app.delete('/books/:id', BooksController.removeBook);


app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = 3001

const Users = require('./models/Users');

app.use(bodyParser.json());

app.get('/user', async (req, res) => {
  const users = await Users.getUsers();
  res.status(200).json(users);
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const userById = await Users.getUserById(id)
  if (!userById) {
    return res.status(400).json({
      "error": true,
	    "message": "Usuário não encontrado"
    })
  }
  res.status(200).json(userById)
})

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!Users.validateUser(firstName, lastName, email)) {
    return res.status(400).json({
      "error": true,
	    "message": "Verifique os dados informados"
    })
  }
  if (!Users.validatePassword(password)) {
    return res.status(400).json({
      "error": true,
	    "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    })
  }
  await Users.createUser(firstName, lastName, email, password)
  res.status(200).json({ message: 'Dados inseridos com sucesso!' });
})

app.listen(port, () => console.log(`Online na porta ${port}`));

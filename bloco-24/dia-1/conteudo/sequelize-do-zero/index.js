const express = require('express');
const { Store } = require('./src/models');

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  Store.findAll().then(dados => {
    res.status(200).json(dados);
  }).catch(e => {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  })
});

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
});
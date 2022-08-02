const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  const response = 'Esta Vivo!!!';
  res.status(200).json(response);
});

app.listen(3000, () => {
  console.log(`Online na porta, ${PORT}`);
})
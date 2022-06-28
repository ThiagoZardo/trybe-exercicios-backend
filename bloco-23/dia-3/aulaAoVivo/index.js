const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 3000;

app.use(router);

app.listen(3000, () => console.log(`Online na porta ${port}`));


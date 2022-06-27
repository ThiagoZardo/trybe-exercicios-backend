const express = require('express');
const songsControler = require('./controlers/songsControler');
const artistValidator = require('./middlewares/artistValidator');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/musics', songsControler.listSongs)

app.post('/musics', artistValidator, songsControler.newSongs)


app.listen(port, console.log(`On line na porta ${port}`));
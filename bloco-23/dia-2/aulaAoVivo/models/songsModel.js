// A CAMADA DE MODEL DEVE SER RESPONSAVÉL POR SE CONECTAR AO BANCO DE DADOS E FAZER ALTERAÇÕES
const connection = require('./connection');
const getAllSongs = async () => {
  const [musics] = await connection
    .execute('SELECT * FROM musics.songs');
  
  return musics;
}

const createSongs = async (name, album) => {
  const [data] = await connection
    .execute('INSERT INTO musics.songs (name, album) VALUES (?, ?)',
    [name, album]);

    const newMusic = {
      id: data.insertId,
      name,
      album
    }
  
  return newMusic;
}

module.exports = {
  getAllSongs,
  createSongs,
}
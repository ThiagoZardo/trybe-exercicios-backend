// A CAMADA DE SERVIÇOS DEVE SER REPONSAVEL POR FAZER VALIDAÇÕES DE REGRAS DE NEGÓCIO
const songsModel = require('../models/songsModel');

const getAll = async () => {
  const musics = await songsModel.getAllSongs();
  return musics;
}

const newSongs = async (name, album) => {
if (name === undefined || name.length <= 3) 
  throw { message: 'DEU RUIM NO CADASTRO' }

  const newMusic = await songsModel.createSongs(name, album)
  
  return newMusic;
}

module.exports = {
  getAll,
  newSongs
}
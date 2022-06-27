// A CAMADA DE CONTROLER DEVE SER RESPONSÁVEL POR RECEBER A REQUISIÇÃO E RETORNAR A RESPOSTA PARA O CLIENTE
const songsService = require('../services/songsService');
const listSongs = async (req, res, _next) => {
  const musics = await songsService.getAll();
  return res.status(200).json(musics);
}

const newSongs = async (req, res, _next) => {
  try {
    const { name, album } = req.body;
    const newMusic = await songsService.newSongs(name, album);
    return res.status(201).json(newMusic)
    
  } catch (error) {
   console.log('Erro aio cadastrar musica', error.message)
   return res.status(400).json({ message: error.message });
  }
}

module.exports = {
  listSongs,
  newSongs
}
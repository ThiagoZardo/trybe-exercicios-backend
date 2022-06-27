// A CAMADA MIDDLEWARES DEVE SER RESPONSAVEL POR FAZER VALIDAÇÕES GLOBAIS
const artistValidator = (req, res, next) => {
const { authorization } = req.headers;
  if (!authorization) return res.status(401).end();

  next();
}

module.exports = artistValidator;
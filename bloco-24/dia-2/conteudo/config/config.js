module.exports = {
  development: {
    username: "root",
    password: "admin",
    database: "associations",
    host: "compose-dockerSQL-3306",
    dialect: "mysql",
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    logging: false
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  },
};

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'trybe',
  password: 'rewq987aa',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'admin',
  host: '127.0.0.1',
  port: '3305',
  database: 'musics',
  });

module.exports = connection;
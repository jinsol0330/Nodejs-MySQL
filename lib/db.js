var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: '111111',
    port: 3307,
    database: 'opentutorials_2'
  });
  db.connect();

  module.exports = db;
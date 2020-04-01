var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'queVeoHoyUser',
  password : 'acamica',
  database : 'QueVeoHoy'
});

module.exports = connection;


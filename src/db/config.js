const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

module.exports = () =>
  //Open é utilizado para abrir uma conexão
  open({
    //define o nome do arquivo do banco de dados
    filename: './src/db/rocketq.sqlite',
    //driver é quem comanda esse banco de dados
    driver: sqlite3.Database,
  });


const express = require('express');
const route = require('./route');
const path = require('path');

const server = express();

server.set('view engine', 'ejs');

server.use(express.static("public"));

//o __dirname se torna o SRC pois está dentro do arquivo server
//se estivesse dentro de outro arquivo, seria a pasta mãe daquele arquivo
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true }));

server.use(route);

server.listen(3000, () => console.log("RODANDO"));
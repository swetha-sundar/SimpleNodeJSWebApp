const express = require('express'); 
const app = express(); 
const server = require('http').createServer(app); 
const port = process.env.PORT || 3000;

server.listen(port);
// console.log(__dirname);
app.use(express.static(__dirname + '/public'));
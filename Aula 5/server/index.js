const express = require('express');
const server = express();
const routes = require('./routes');
const port = 8080;

server.use(express.json());
server.use('/', routes);

server.listen(port);
console.log(`HTTP Server started on port ${port}`);


require('dotenv').config({ quiet: true })
const http = require('node:http');
const createMessage = require('./utils/utils.js');

const hostname = process.env.APP_HOST;
const port = process.env.APP_PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(createMessage());
});

server.listen(port, hostname, () => {
  console.log(`Server running...`);
});

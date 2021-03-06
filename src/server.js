const http = require('http');

const port = process.env.PORT || 3030;
const router = require('./router');

const server = http.createServer(router);
server.listen(port);

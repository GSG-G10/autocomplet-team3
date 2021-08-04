const path = require('path');
const fs = require('fs');

const homeHandler = (req, res) => {
  const homePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(homePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('server err');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};
module.exports = homeHandler;

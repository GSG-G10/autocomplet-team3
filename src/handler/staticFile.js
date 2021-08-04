const path = require('path');
const fs = require('fs');

const ContentTypes = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'image/jpeg',
  png: 'image/png',
  js: 'application/javascript',
  ico: 'image/jpeg',
};

const mangeEndPoint = (response, filePath, ContentType) => {
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': ContentType });
      response.end('500 Erorr');
    } else {
      response.writeHead(200, { 'Content-Type': ContentType });
      response.end(file);
    }
  });
};

const handleStaticFile = (req, res) => {
  const endpoint = req.url;
  const fileextention = endpoint.split('.')[1];
  const filePath = path.join(__dirname, '..', '..', endpoint);
  mangeEndPoint(res, filePath, ContentTypes[fileextention]);
};
module.exports = handleStaticFile;

const { homeHandler, searchHandler, handleStaticFile } = require('./handler');

const publicFile = ['/public/main.js', '/public/style.css'];

const router = (req, res) => {
  const endPoint = req.url;
  if (endPoint === '/') {
    homeHandler(req, res);
  } else if (endPoint.includes('/search')) {
    searchHandler(req, res);
  } else if (publicFile.includes(endPoint)) {
    handleStaticFile(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>NOT FOUND</h1>');
  }
};
module.exports = router;

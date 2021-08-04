const { homeHandler, searchHandler } = require('./handler');

const router = (req, res) => {
  const endPoint = req.url;
  if (endPoint === '/') {
    homeHandler(req, res);
  } else if (endPoint === '/search') {
    searchHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>NOT FOUND</h1>');
  }
};
module.exports = router;

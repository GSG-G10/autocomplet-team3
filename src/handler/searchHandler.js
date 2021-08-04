const path = require('path');
const fs = require('fs');

const searchHandler = (req, res) => {
  const filePath = path.join(__dirname, 'data.json');
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(500, { 'content-Type': 'text/html' });
      res.write('<h1>Error Not Found</h1>');
      res.end();
    } else {
      const allTheData = req.url.split('q=')[1];
      const changeData = JSON.parse(data);
      const arr = [];
      changeData.filter((searchInput) => {
        const names = searchInput.name;

        if (names.includes(allTheData)) {
          arr.push(names);
        }
        return arr;
      });
      res.end(JSON.stringify(arr));
    }
  });
};
module.exports = searchHandler;

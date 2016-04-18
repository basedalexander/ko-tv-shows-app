var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('src'));

app.get('/api/list', function (req, res) {
  fs.readFile('/db/list.json', "utf8", function (err, data) {
    if (err) {
      return res.status(500).send({message: err.message});
    }


  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

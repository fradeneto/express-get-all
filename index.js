require('dotenv/config');
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use('/', function (req, res) {
  res.status(200).json({
    method: req.method,
    uri: req.url,
  })
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
require('dotenv/config');
const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.json());
  
app.use('/', function (req, res) {
  const { query, body } = req;
  res.status(200).json({
    method: req.method,
    uri: req.url,
    query,
    body,
  })
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

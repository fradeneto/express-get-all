require('dotenv/config');
const express = require('express');
const crypto = require('crypto');

const instanceHash = crypto.randomBytes(4).toString('hex');
var pjson = require('./package.json');

const app = express();
const port = process.env.PORT || 80;
app.use(express.json())
app.use('/', function (req, res) {
  const { query, body, headers } = req;
  const { remoteAddress } = req.connection;
  const socketRemoteAddress = req.socket.remoteAddress ? req.socket.remoteAddress : '';
  const connSckRemoteAddress = req.connection.socket ? req.connection.socket.remoteAddress : '';

  res.status(200).json({
    instanceHash,
    version: pjson.version,
    method: req.method,
    uri: req.url,
    query,
    body,
    headers,
    remoteAddress,
    socketRemoteAddress,
    connSckRemoteAddress,
  })
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
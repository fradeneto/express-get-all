require('dotenv/config');
const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.json())
app.use('/', function (req, res) {
  const { query, body, headers } = req;
  const { remoteAddress } = req.connection;
  const socketRemoteAddress = req.socket.remoteAddress ? req.socket.remoteAddress : '';
  const connSckRemoteAddress = req.connection.socket ? req.connection.socket.remoteAddress : '';

  res.status(200).json({
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
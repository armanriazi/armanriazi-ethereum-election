const express = require("express");
const app = express();

var server = app.listen("3000", () =>
  console.info(`Listening on port ${server.address().port}...`)
);

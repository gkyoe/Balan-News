const express = require("express");
const morgan = require("morgan");
const app = express();

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World!");
});

module.exports = app;

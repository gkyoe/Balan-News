const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("server is running");
});

module.exports = app;

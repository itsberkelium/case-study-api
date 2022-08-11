const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

const json = require("./ProductsWithFilter.json");

app.get("/", (req, res) => {
  res.send(json);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

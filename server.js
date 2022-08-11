const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const json = require("./ProductsWithFilter.json");

app.get("/", (req, res) => {
  res.send(json);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

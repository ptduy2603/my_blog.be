const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// set up extensions
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routing
app.get("/", (req, res) => {
  res.json("Hello world from my blog server");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

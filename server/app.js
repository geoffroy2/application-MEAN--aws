const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://geoffroy:Fleury1993@cluster0.lhe7e.mongodb.net/angulardyma?retryWrites=true&w=majority",
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Connexion opened to mongodb!");
    }
  }
);

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

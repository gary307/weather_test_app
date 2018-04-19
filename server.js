//import express and path for local server

const express = require("express");
const app = express();
var path = require("path");

app.set("view engine", "html"); //setup view engine to be static html
app.use("/", express.static("./dist")); //serves the index.html
app.use("/data", express.static("./city.list.min.json")); //serves the json data to look at for fetch

app.set("port", process.env.PORT || 3003); //configured port

//start listening to port
app.listen(3003, function() {
  console.log("node is running on 3003");
});

//server our index.html
app.get("/", function(req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

module.exports = app;

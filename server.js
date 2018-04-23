//Install express server
var express = require("express");
var bodyParser = require("body-parser");

// Serve only the static files form the dist directory
var app = express();
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

// Steven Sober
// 09/27/2017
// Homework: Friend Finder
// server.js

// Dependencies:
// ===========================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express:
// ===========================================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Router:
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or
// request data from various URLs.
// ===========================================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Port Listener: Starts the server to begin listening
// ===========================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

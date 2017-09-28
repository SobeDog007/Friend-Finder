// Steven Sober
// 09/27/2017
// Homework: Friend-Finder
// apiRoutes.js

// Data Load:
// ===========================================================================
var friendData = require("../data/friends");

// Routes:
// ===========================================================================
module.exports = function(app) {

  	// API GET Requests:
  	// Displays JSON on the current friend's entries.
  	app.get("/api/friendss", function(req, res) {
    	res.json(friendData);
  	});

  	// API POST Requests:
  	// Below code handles when the user submits a friend form and thus submits
  	// data to the server.
  	app.post("/api/tables", function(req, res) {

      friendData.push(req.body);
      res.json(true);
  	});
};

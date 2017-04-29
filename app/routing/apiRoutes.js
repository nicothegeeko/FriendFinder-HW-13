// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");
var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests

  app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
  });

}


var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  newBurg: function(burgName, cb) {
    orm.insert(burgName, function(res) {
      cb(res);
    })
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;

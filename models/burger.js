var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all(function(res) {
      cb(res);
    });
  },
  newBurg: function(burgName, cb) {
    orm.newBurg(burgName, function(res) {
      cb(res);
    })
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;

var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burgName, cb) {
    orm.insertOne(burgName, function(res) {
      cb(res);
    })
  },
  updateOne: function (burgStatus, burgId, cb) {
		orm.updateOne(burgStatus, burgId, function (res) {
			cb(res);
		});
	}
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;

// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("success")
      cb(result);
    });
  },
};

// Export the orm object for the model (burger.js).
module.exports = orm;

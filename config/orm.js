// Import MySQL connection.
const connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("success-all-function");
      cb(result);
    });
  },
  // fix this function
  newBurg: function(burgName, cb) {
    var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${burgName}", false)`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("success-newBurg-function");
      cb(result);
    })
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;

// Import MySQL connection.
const connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("success-all-function");
      cb(result);
    });
  },

  insertOne: function(burgName, cb) {
    var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${burgName}", false)`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("success-insertOne-function");
      cb(result);
    })
  },

  updateOne: function (burgStatus, burgId, cb) {
    var queryString = `UPDATE burgers SET devoured = "${burgStatus}" WHERE id = ${burgId}`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      console.log("success-updateOne-function");
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;

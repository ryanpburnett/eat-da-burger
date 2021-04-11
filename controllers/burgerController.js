const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, response) {
  burger.all(function(data) {
    response.render("index", { burgers: data });
  });
});

module.exports = router;
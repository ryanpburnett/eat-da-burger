const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burgName, function(data) {
    res.json({ id: data.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.body.devoured, req.params.id, function(data) {
    res.status(200).end();
  });
});

module.exports = router;
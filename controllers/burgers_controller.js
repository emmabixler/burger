var express = require("express");

var router = express.Router();

// Import the model
var burger = require("../models/burger.js");

//setting up logic
router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

//post routes

router.post("/api/burger", function(req, res) {
  burger.create(["name", "munch"], [req.body.name], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//PUT route
router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.update(
    {
      munch: req.body.munch
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
//delete route
router.delete("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

var express = require("express");

// Create the router for the App
var router = express.Router();

// Import the model (burger.js) to use its DB methods
var burger = require("../models/burger.js");

// Routes for the DB all,create and update methods
router.get("/", function(req,res){
  burger.all(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req,res){
  burgers.create([
    "burger_name","devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(){
    res.redirect("/");
  });
});

router.put("/burgers/update/:id", function (req,res){
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(){
    res.redirect("/");
  });
});

// Export the Router
module.exports = router;

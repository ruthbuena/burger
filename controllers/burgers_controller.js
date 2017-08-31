var express = require("express");

// Create the router for the App
var router = express.Router();

// Import the model (burger.js) to use its DB methods
var burger = require("../models/burger.js");

// Routes for the DB all,create and update methods
router.get("/", function(req,res){
    res.redirect("/index");
  });

router.get('/index', function (req, res) {
  burger.showAll(function(data) {
    var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post("/burger/create", function(req,res){
  burger.insertBurger(req.body.burger_name, function(){
    res.redirect("/index");
  });
});

router.post("/burger/update/:id", function (req,res){
  burger.updateBurger(req.params.id, function() {
    res.redirect("/index");
  });
});

// Export the Router
module.exports = router;

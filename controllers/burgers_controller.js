var express = require("express");

// Create the router for the App
var router = express.Router();

// Import the model (burger.js) to use its DB methods
var db = require("../models");

// Initial Route
router.get("/", function(req,res){
  res.redirect("/burgers");
});

// Routes for the DB all,create and update methods
router.get("/burgers", function(req,res){
  db.Burger.findAll({
    include: [db.Devourers],
    order: ["burger_name"]
  })
  .then(function(dbBurger){
    console.log(dbBurger);
    var hbsObject = {
      burger: dbBurger
    };
    return res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req,res){
  db.Burger.create({
      burger_name: req.body.burger_name
    })
    .then(function(dbBurger){
      console.log(dbBurger);
    res.redirect("/");
  });
});


router.put("/burger/update", function (req,res){
  if (req.body.devourers){
    db.Devourers.create({
      customer: req.body.customer,
      BurgerId: req.body.burger_id
    })
    .then(function(dbDevourers){
      return db.Burger.update({
        devoured: true
      },{
        where: {
          id: req.body.burger_id
        }
      });
    })
    .then(function(dbBurger){
      res.redirect("/");
    });
  }
  else {
  db.Burger.update({
    devoured: true
  },{
      where: {
        id: req.body.burger_id
    }
  })
.then(function(dbBurger){
    res.redirect("/");
  });
  }
});

// Export the Router
module.exports = router;

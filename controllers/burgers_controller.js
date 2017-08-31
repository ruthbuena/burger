var express = require("express");

// Create the router for the App
var router = express.Router();

var models=require("../models");

var sequelizeConnection = models.sequelize;

sequelizeConnection.sync();

// Routes for the DB all,create and update methods
router.get("/", function(req,res){
    res.redirect("/index");
  });

router.get('/index', function (req, res) {

  models.burgers.findAll({
    include: [{model: models.devoured}]
  }).then(function(data){

      var hbsObject = { burgers: data };

    res.render('index', hbsObject);
  })
});

router.post("/burger/create", function(req,res){
  models.burgers.create(
    {
      burger_name: req.body.burger_name,
      devoured: false
    }
  ).then(function(){
    res.redirect("/index");
  });
});

router.post("/burger/update/:id", function (req,res){
  if(req.body.burgerEat == "" || req.body.burgerEat == null){
    req.body.burgerEat = "John Doe";
  }

  models.devoured.create({
    devoured_name: req.body.burgerEat,
    burgerId: req.params.id
  })

  .then(function(newUser){

    models.burgers.findOne({ where: {id: req.params.id } } )

    .then(function(eatBurger){
      eatBurger.update({
        devoured: true,
      })

      .then(function(){
        res.redirect('/index');
      });
    });
  });
});

// Export the Router
module.exports = router;

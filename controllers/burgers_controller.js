var express = require("express");

// Create the router for the App
var router = express.Router();

var models = require("../models");

var sequelizeConnection = models.sequelize;

sequelizeConnection.sync();

// Routes for the DB all,create and update methods
router.get("/", function(req,res){
    res.redirect("/index");
  });

router.get('/index', function (req, res) {

  // models.devoured.belongsToMany(models.devoured, {
  //   as:'networks',
  //   foreignKey:"burgerId",
  //   through: models.burgers
  // });

  models.burgers.findAll({
    include: [{model: models.devourer}]
  }).then(function(data){

      var hbsObject = { burgers: data };

    res.render('index', hbsObject);
  })
});

router.post("/burger/create", function(req,res){
  models.burgers.create(
    {
      burger_name: req.body.burger_name,
      devourer: false
    }
  ).then(function(){
    res.redirect("/index");
  });
});

router.post("/burger/update/:id", function (req,res){
  if(req.body.burgerEat == "" || req.body.burgerEat == null){
    req.body.burgerEat = "John Doe";
  }

  models.devourer.create({
    devourer_name: req.body.burgerEat,
    burgerId: req.params.id
  })

  .then(function(newUser){

    models.burgers.findOne({ where: {id: req.params.id } } )

    .then(function(eatenBurger){
      eatenBurger.update({
        devourer: true,
      })

      .then(function(){
        res.redirect('/index');
      });
    });
  });
});

// Export the Router
module.exports = router;

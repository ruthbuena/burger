// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require ("method-override");

var db = require("./models");

var app = express();



// Info used to connect to public folder
app.use(express.static(__dirname + "/public"));

// Body Parser application
app.use(bodyParser.urlencoded({ extended: false }));

// methodOverride application
app.use(methodOverride("_method"));
var exphbs = require ("express-handlebars");

// Used to connect to handlebars files in views folder
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller.js");

app.use("/", router);
app.use("/update", router);
app.use("/create", router);

// Per documentation the below command is needed when connecting using Heroku
var port = process.env.PORT || 3000;
db.sequelize.sync().then(function(){
app.listen(port);
});

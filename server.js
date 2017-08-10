// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require ("method-override");

var app = express();

// Per documentation the below command is needed when connecting using Heroku
var PORT = process.env.PORT || 3000;

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

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(port, function(){
  console.log("We are listening on PORT: ", PORT);
});

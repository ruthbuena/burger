// Used to connect Node to the DB created in MySQL
var mysql = require("mysql");

var connection;

// Includes requirements for deploying MySQL dB to Heroku:

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});
}


// Export the connection
module.exports = connection;

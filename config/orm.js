// Import(require) connection file into this file
var connection = require ("../config/connection.js");

// Function used for SQL syntax
function printQuestionMarks(num){
  var arr = [];

  for (var i=0; i<num; i++){
    arr.push("?");
  }
  return arr.toString();
}

// Function used for SQL syntax
function objToString(ob){
  var arr =[];

  for (var key in ob) {
    if(Object.hasOwnProperty.call(ob,key)){
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

// Object used for SQL method
var orm = {

// Select all method
  all: function(tableInput, cb){
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err,result){
      if(err) {
        throw err;
      }
      cb(result);
    });
  },

// Create Method
  create: function(table, cols, vals, cb){
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString;

    connection.query(queryString, vals, function(err,result){
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

// Update Method
  update: function(table, objColVals, condition, cb){
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToString(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err,result){
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export ORM
module.exports = orm;

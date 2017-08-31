// Import the ORM functions
var orm = require("../config/orm.js");

var burger = {
  showAll: function(callback) {
    orm.showAll(function(res){
      callback(res);
    });
  },

  insertBurger: function(burger_name, callback) {
    orm.insertBurger(burger_name, function(res){
      callback(res);
    });
  },

  updateBurger: function(burger_id, callback) {
    orm.updateBurger(burger_id, function(res){
      callback(res);
    });
  }

};

// Export the DB methods
module.exports = burger;

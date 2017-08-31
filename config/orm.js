// Import(require) connection file into this file
var connection = require ("../config/connection.js");

// Connect to MySQL database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

//ORM
var orm = {

  showAll: function(callback) {
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  // insert burger
  insertBurger: function(burger_name, callback){

    var d = new Date();
    var timestamp = ''+ d.getFullYear() + '-';
    var month = '' + (d.getMonth() + 1);
      if(month.length == 1){
        month = '0' + month;
      }
    timestamp += month + '-';
    var day = '' + d.getDate();
      if(day.length == 1){
        day = '0' + day;
      }
    timestamp += day + ' ';
    var hour = '' + d.getHours();
      if(hour.length == 1){
        hour = '0' + hour;
      }
    timestamp += hour + ':';
    var minute = '' + d.getMinutes();
      if(minute.length == 1){
        minute = '0' + minute;
      }
    timestamp += minute + ':';
    var second = '' + d.getSeconds();
      if(second.length == 1){
        second = '0' + second;
      }
    timestamp += second;

    // Insert info into DB
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false,
      date: timestamp
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  // update function
  updateBurger: function(burgerID, callback){
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) throw err;
        callback(result);
      });
  }
};

// Export the ORM
module.exports = orm;


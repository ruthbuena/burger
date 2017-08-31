'use strict';

module.exports = function(sequelize, DataTypes) {
  var devoured = sequelize.define('devoured', {
    devoured_name: DataTypes.STRING,
    burgerId: DataTypes.INTEGER
});
  return devoured;
};

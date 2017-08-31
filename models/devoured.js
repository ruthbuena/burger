'use strict';

module.exports = function(sequelize, DataTypes) {
  var devourer = sequelize.define('devourer', {
    devourer_name: DataTypes.STRING,
    burgerId: DataTypes.INTEGER
});
  return devourer;
};

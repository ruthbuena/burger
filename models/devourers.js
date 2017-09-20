'use strict';

module.exports = function(sequelize, DataTypes) {
  var Devourers = sequelize.define("Devourers", {
      devourers: {
        type: DataTypes.STRING,
      allowNull: false
    }
    });


  return Devourers;
};

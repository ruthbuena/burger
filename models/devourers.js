'use strict';

module.exports = function(sequelize, DataTypes) {
  var Devourers = sequelize.define("Devourers", {
      devourers_name: DataTypes.STRING,
      burgerId: DataTypes.INTEGER
    },{
      classMethods: {
        associate: function(models){
      }
    }
});

  return Devourers;
};

'use strict';

module.exports = function(sequelize, DataTypes) {

  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
},{
  classMethods: {
    associate: function(models){
      Burger.hasOne(models.Devourers);
    }
  }
});

  return Burger;
};

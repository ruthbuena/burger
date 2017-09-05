'use strict';

module.exports = function(sequelize, DataTypes) {

  var burgers = sequelize.define('burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    devourersId: DataTypes.INTEGER
},{
  classMethods: {
    associate: function(models){
      burgers.belongsTo(models.devourers)
    }
  }
});

  return burgers;
};

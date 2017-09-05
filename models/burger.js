'use strict';

module.exports = function(sequelize, DataTypes) {

  var Burgers = sequelize.define('Burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    devourerId: DataTypes.INTEGER
});

Burgers.associate = function(models){
  Burgers.belongsTo(models.Devourer, {
    foreignKey: {
      allowNull: false
    }
  });
};
  return Burgers;
};

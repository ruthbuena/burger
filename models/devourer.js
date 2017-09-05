'use strict';

module.exports = function(sequelize, DataTypes) {
  var Devourer = sequelize.define('devourer', {
    devourer_name: DataTypes.STRING,
    burgerId: DataTypes.INTEGER
});

Devourer.associate= function(models){
  Devourer.hasMany(models.Burgers, {
    onDelete: "cascade"
  });
};


  return Devourer;
};

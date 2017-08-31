'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('devoured', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      devoured_name: {
        type: Sequelize.STRING
      },
      // Foreign key usage (added manually)
      burgerId: {
          type: Sequelize.INTEGER,
          references: {
              model: 'burgers',
              key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('devourers');
  }
};

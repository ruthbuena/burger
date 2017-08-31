'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // seed info for DB
    return queryInterface.bulkInsert('burgers', [
      {burger_name: "Double Double", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Triple Double", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Bleu Cheese", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Bacon Cheeseburger", devoured: false, createdAt: new Date(), updatedAt: new Date()}
    ], {});

  },

  down: function (queryInterface, Sequelize) {

    // Remove seed info
    return queryInterface.bulkDelete('burgers', null, {truncate : true});

  }

};

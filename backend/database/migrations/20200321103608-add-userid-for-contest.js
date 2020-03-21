'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contests', 'userid', {
      type: Sequelize.INTEGER,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contests', 'userid');
  }
};

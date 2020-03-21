'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'hash', {
        type: Sequelize.STRING,
      }).then(() => {
    return queryInterface.addColumn('Users', 'lastseen', {
        type: Sequelize.DATE
    })})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'hash').then(() => {
      return queryInterface.removeColumn('Users', 'lastseen');
    })
  }
};

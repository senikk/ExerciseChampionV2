module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserContests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contestid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contests',
          key: 'id',
          as: 'contestid'
        }
      },
      userid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'userid'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserContests')
  }
}
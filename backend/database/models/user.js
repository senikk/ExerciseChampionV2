'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hash: DataTypes.STRING,
    lastseen: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Contest, {
      through: models.UserContest,
      foreignKey: 'userid',
      as: 'joinedContests'
    });
  };
  return User;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserContest = sequelize.define('UserContest', {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contestid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  UserContest.associate = function(models) {
    // associations can be defined here
  };
  return UserContest;
};
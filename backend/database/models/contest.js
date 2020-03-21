'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contest = sequelize.define('Contest', {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rules: DataTypes.STRING
  }, {});
  Contest.associate = function(models) {
    Contest.belongsTo(models.User, {
      foreignKey: 'userid',
      as: 'user'
    });
    Contest.hasMany(models.Rehearsal, {
      foreignKey: 'contestid',
      as: 'rehearsals'
    });
  };
  return Contest;
};
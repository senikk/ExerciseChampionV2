'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rehearsal = sequelize.define('Rehearsal', {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contestid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minutes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Rehearsal.associate = function(models) {
    Rehearsal.belongsTo(models.User, {
      foreignKey: 'userid',
      as: 'user'
    });
    Rehearsal.belongsTo(models.Contest, {
      foreignKey: 'contestid',
      as: 'contest'
    });
  };
  return Rehearsal;
};
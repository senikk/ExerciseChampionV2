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
    rules: DataTypes.STRING,
    public: DataTypes.BOOLEAN
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
    Contest.belongsToMany(models.User, {
      through: models.UserContest,
      foreignKey: 'contestid',
      as: 'joinedUsers'
    })
  };
  return Contest;
};
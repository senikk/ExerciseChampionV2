'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invite = sequelize.define('Invite', {
    userid: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    entitytype: DataTypes.NUMBER,
    entityid: DataTypes.NUMBER,
    hash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Invite.associate = function(models) {
    // associations can be defined here
  };
  return Invite;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersFavoriteChannel = sequelize.define('usersFavoriteChannel', {
    user: DataTypes.INTEGER,
    favoriteChannel: DataTypes.INTEGER
  }, {});
  usersFavoriteChannel.associate = function(models) {
    // associations can be defined here
  };
  return usersFavoriteChannel;
};
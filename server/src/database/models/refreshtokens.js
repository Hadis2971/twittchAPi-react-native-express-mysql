'use strict';
module.exports = (sequelize, DataTypes) => {
  const refreshTokens = sequelize.define('refreshTokens', {
    refreshtoken: DataTypes.STRING,
    user: DataTypes.INTEGER,
    expires: DataTypes.DATE
  }, {});
  refreshTokens.associate = function (models) {
    // associations can be defined here
  };
  return refreshTokens;
};

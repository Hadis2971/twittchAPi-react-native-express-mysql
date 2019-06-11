'use strict';
module.exports = (sequelize, DataTypes) => {
  const favoriteChannels = sequelize.define('favoriteChannels', {
    user: DataTypes.INTEGER,
    channel: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  favoriteChannels.associate = function (models) {
    favoriteChannels.belongsToMany(models.User, { through: 'usersFavoriteChannels' });
  };
  return favoriteChannels;
};

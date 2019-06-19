const favoriteChannels = require('../../database/models').favoriteChannels;

class TwitchService {
  static async addChannelToFavorites (data) {
    try {
      const createFavoriteChanelResult = await favoriteChannels.create(data);
      return createFavoriteChanelResult;
    } catch (error) {
      return {
        error: error
      };
    }
  }

  static async getFavoriteChannels (userID, offset) {
    try {
      const channels = await favoriteChannels.findAll({
        attributes: ['id', 'channel', 'url', 'image'],
        offset: (offset - 0),
        limit: 5,
        where: {
          user: userID
        }
      });
      return channels;
    } catch (error) {
      return {
        error: error
      };
    }
  }
}

export default TwitchService;

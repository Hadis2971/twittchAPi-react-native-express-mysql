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
}

export default TwitchService;

import TwitchService from './twitchService';

class TwitchController {
  static async createNewFavoriteChannel (req, res, next) {
    const { body } = req;
    const result = await TwitchService.addChannelToFavorites(body);
    if (result.error) {
      next(result.error);
    } else {
      res.json(result);
    }
  }

  static async getAllFavoriteChannels (req, res, next) {
    const { userID, offset } = req.params;
    console.log(`offset => ${offset} type => ${typeof offset}`);
    const result = await TwitchService.getFavoriteChannels(userID, offset);
    if (result.error) {
      next(result.error);
    } else {
      res.json(result);
    }
  }
}

export default TwitchController;

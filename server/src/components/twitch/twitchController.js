import TwitchService from './twitchService';

class TwitchController {
  static async createNewFavoriteChannel (req, res, next) {
    console.log(req.body);
    const { body } = req;
    const result = await TwitchService.addChannelToFavorites(body);
    if (result.error) {
      next(result.error);
    } else {
      res.json(result);
    }
  }
}

export default TwitchController;

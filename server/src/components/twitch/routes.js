import AuthController from '../auth/authController';
import TwitchController from './twitchController';
const router = require('express').Router();

router.get('/:userID/:offset', TwitchController.getAllFavoriteChannels);

router.post('/', AuthController.verifyAuthToken, TwitchController.createNewFavoriteChannel);

export default router;

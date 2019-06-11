import AuthController from '../auth/authController';
import TwitchController from './twitchController';
const router = require('express').Router();

router.post('/', AuthController.verifyAuthToken, TwitchController.createNewFavoriteChannel);

export default router;

import AuthController from '../auth/authController';
import ProfileController from './profileController';
const router = require('express').Router();

router.post('/', AuthController.verifyAuthToken, ProfileController.updateUserProfile);

export default router;

import AuthController from './authController';
const router = require('express').Router();

router.post('/register',
  AuthController.validateRegisterNewUserInput,
  AuthController.checkIfUserExists,
  AuthController.registerNewUserController);

router.post('/login', AuthController.loginUser);

export default router;

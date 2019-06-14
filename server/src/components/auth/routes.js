import AuthController from './authController';
const router = require('express').Router();

router.post('/register',
  AuthController.sanitizeRegisterNewUserInput,
  AuthController.validateRegisterNewUserInput,
  AuthController.checkIfEmailAlreadyInUse,
  AuthController.registerNewUserController);

router.post('/login',
  AuthController.sanitizeLoginUserInput,
  AuthController.validateLoginUserInput,
  AuthController.loginUser);

export default router;

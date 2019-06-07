import AuthController from './authController';
const router = require('express').Router();

router.post('/register',
  AuthController.validateRegisterNewUserInput,
  AuthController.sanitizeRegisterNewUserInput,
  AuthController.checkIfEmailAlreadyInUse,
  AuthController.registerNewUserController);

router.post('/login',
  AuthController.validateLoginUserInput,
  AuthController.sanitizeLoginUserInput,
  AuthController.loginUser);

export default router;

import ForgotPasswordController from './forgotPassController';
const router = require('express').Router();

router.post('/',
  ForgotPasswordController.sanitizeForgotPassInput,
  ForgotPasswordController.validateForgotPasswordInput,
  ForgotPasswordController.resetPassword);

router.get('/:token', ForgotPasswordController.resetPasswordForm);

router.post('/reset/:email', ForgotPasswordController.resetUserPassword);

export default router;

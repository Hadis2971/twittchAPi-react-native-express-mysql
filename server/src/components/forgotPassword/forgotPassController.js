import ForgotPassService from './forgotPassService';
import forgotPassValidator from '../../validation/forgotPassword';
import forgotPassSanitize from '../../sanitize/forgotPassword';

class ForgotPasswordController {
  static resetPassword (req, res, next) {
    try {
      const { email } = req.body;
      ForgotPassService.sendResetPasswordEmail(email);
      res.json({
        Success: true
      });
    } catch (error) {
      next(error);
    }
  }

  static validateForgotPasswordInput (req, res, next) {
    const { errors, isValid } = forgotPassValidator(req.body);
    if (!isValid) {
      res.json({
        Error: errors
      });
    } else {
      next();
    }
  }

  static sanitizeForgotPassInput (req, res, next) {
    forgotPassSanitize(req.body);
    next();
  }

  static async resetPasswordForm (req, res, next) {
    const { token } = req.params;
    const tokenIsValidWithUserEmail = await ForgotPassService.checkToken(token);
    if (tokenIsValidWithUserEmail) {
      res.render('resetPassword', { email: tokenIsValidWithUserEmail.email });
    } else {
      res.render('resetPassInvalidToken');
    }
  }

  static async resetUserPassword (req, res, next) {
    const { email } = req.params;
    const { newPassword } = req.body;
    const changePasswordResult = await ForgotPassService.changePassword(email, newPassword);
    if (changePasswordResult.Error) {
      res.render('resetPassFail');
    } else {
      res.render('resetPassSuccess');
    }
  }
}

export default ForgotPasswordController;

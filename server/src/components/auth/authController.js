import passport from 'passport';
import AuthService from './authService';
import AuthApis from './authAPI';
import RefreshTokenService from './refreshTokenService';
import { secretForAuthToken } from '../../config';
import registerNewUserInputValidator from '../../validation/registerNewUser';
import sanitizerRegisterNewUserInput from '../../sanitize/registerNewUser';
import loginValidator from '../../validation/login';
import sanitizerLoginUserInput from '../../sanitize/login';

class AuthController {
  constructor () {
    this._createNewPayload = this._createNewPayload.bind(this);
  }

  static async registerNewUserController (req, res, next) {
    try {
      const createNewUserResult = await AuthService.registerNewUser(req.body);
      res.json(createNewUserResult);
    } catch (error) {
      next(error);
    }
  }

  static validateRegisterNewUserInput (req, res, next) {
    const { errors, isValid } = registerNewUserInputValidator(req.body);
    if (!isValid) {
      res.json({
        Error: errors
      });
    } else {
      next();
    }
  }

  static sanitizeRegisterNewUserInput (req, res, next) {
    sanitizerRegisterNewUserInput(req.body);
    next();
  }

  static validateLoginUserInput (req, res, next) {
    const { errors, isValid } = loginValidator(req.body);
    if (!isValid) {
      res.json({
        Error: errors
      });
    } else {
      next();
    }
  }

  static sanitizeLoginUserInput (req, res, next) {
    sanitizerLoginUserInput(req.body);
    next();
  }

  static loginUser (req, res, next) {
    passport.authenticate('local', { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.json({ Error: 'Wrong Credentials' });
      }
      req.login(user, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const tokenPayload = {
          userID: user.id,
          userEmail: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username
        };

        const token = await AuthApis.generateAuthToken(tokenPayload);
        const refreshtoken = await RefreshTokenService.checkIfRefreshTokenIsValid(user.id);
        return res.json({ token, refreshtoken: refreshtoken.refreshtoken });
      });
    })(req, res);
  }

  static async checkIfEmailAlreadyInUse (req, res, next) {
    const { email } = req.body;
    try {
      const emailFound = await AuthService.checkIfEmailExists(email);
      if (emailFound) {
        res.json({ Error: 'Email Alredy Exists Please Use Another One' });
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }

  static async verifyAuthToken (req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    const verifyRequestResult = await AuthService.verifyTokens(token, req.headers['refreshtoken'], secretForAuthToken);
    if (verifyRequestResult) {
      if (verifyRequestResult.sendAgainToken) {
        return res.json({ newToken: verifyRequestResult.newToken });
      }
      req.decoded = verifyRequestResult.decoded;
      next();
    } else {
      res.json({
        Error: 'Missing Authentication Please Sing In First'
      });
    }
  }
}

export default AuthController;

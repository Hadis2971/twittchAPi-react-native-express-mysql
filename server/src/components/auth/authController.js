import passport from 'passport';
import jwt from 'jsonwebtoken';
import AuthService from './authService';
import AuthApis from './authAPI';
import { secretForAuthToken } from '../../config';
import registerNewUserInputValidator from '../../validation/registerNewUser';
import sanitizerRegisterNewUserInput from '../../sanitize/registerNewUser';
import loginValidator from '../../validation/login';
import sanitizerLoginUserInput from '../../sanitize/login';
class AuthController {
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
          console.log(error);
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
        return res.json({ token });
      });
    })(req, res);
  }

  static async checkIfUserExists (req, res, next) {
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

  static verifyAuthToken (req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    if (token) {
      jwt.verify(token, secretForAuthToken, (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }
  }
}

export default AuthController;

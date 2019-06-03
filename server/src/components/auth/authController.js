import passport from 'passport';
import AuthService from './authService';
import AuthApis from './authAPI';
import registerNewUserInputValidator from '../../validation/registerNewUser';

class AuthController {
  static async registerNewUserController (req, res, next) {
    try {
      const createNewUserResult = await AuthService.registerNewUser(req.body);
      console.log(createNewUserResult);
      res.json(createNewUserResult);
    } catch (error) {
      next(error);
    }
  }

  static validateRegisterNewUserInput (req, res, next) {
    const { errors, isValid } = registerNewUserInputValidator(req.body);
    if (!isValid) {
      res.json(errors);
    } else {
      next();
    }
  }

  static loginUser (req, res, next) {
    passport.authenticate('local', { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user
        });
      }
      req.login(user, { session: false }, async (error) => {
        if (error) {
          console.log(error);
          next(error);
        }

        const tokenPayload = {
          userID: user.id,
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
        res.status(400);
        res.json({ Error: 'Email Alredy Exists Please Use Another One' });
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;

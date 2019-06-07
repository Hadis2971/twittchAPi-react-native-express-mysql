import AuthApis from './authAPI';
import jwt from 'jsonwebtoken';
import RefreshTokenService from './refreshTokenService';
import { createNewPayload } from '../../helpers';
const User = require('../../database/models').User;

class AuthService {
  static async _creteNewUser (user) {
    const hashedPassword = await AuthApis.hashNewUserPassword(user.password);
    user.password = hashedPassword;
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      console.log(`Error Create New User => ${error}`);
    }
  }

  static async checkIfEmailExists (email) {
    try {
      const emailFound = await User.findOne({
        attributes: ['email'],
        where: {
          email: email
        }
      });
      if (emailFound) return true;
      else return false;
    } catch (error) {
      console.log(`Error Check If Email Exists => ${error}`);
    }
  }

  static registerNewUser (user) {
    return this._creteNewUser(user);
  }

  static verifyTokens (token, refreshtoken, secretForAuthToken) {
    if (token) {
      return jwt.verify(token, secretForAuthToken, async (err, decoded) => {
        const payload = await jwt.decode(token);
        const newPayload = createNewPayload(payload);
        if (err) {
          if (refreshtoken) {
            return jwt.verify(token, refreshtoken, async (error) => {
              if (error) {
                const refershtokenDB = await RefreshTokenService.checkIfRefreshTokenIsValid(newPayload.userID);
                if (refershtokenDB.refreshtoken && (refershtokenDB.refreshtoken === refreshtoken)) {
                  const newToken = await jwt.sign(newPayload, refreshtoken, { expiresIn: 3600 });
                  return {
                    newToken,
                    sendAgainToken: true
                  };
                } else {
                  return false;
                }
              } else {
                return {
                  decoded: newPayload
                };
              }
            });
          }
        } else {
          return {
            decoded: newPayload
          };
        }
      });
    } else {
      return false;
    }
  }
}

export default AuthService;

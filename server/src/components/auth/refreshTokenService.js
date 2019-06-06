import moment from 'moment';
import jwt from 'jsonwebtoken';
import { secretForRefreshToken } from '../../config';
const refreshTokens = require('../../database/models').refreshTokens;

class RefreshTokenService {
  static async checkIfTokenExsists (userID) {
    const foundRefreshToken = await refreshTokens.findOne({
      where: {
        user: userID
      }
    });
    if (foundRefreshToken) return foundRefreshToken;
    else return false;
  }

  static checkIfRefreshTokenHasExpired (expires) {
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    if (expires > now) {
      return true;
    } else {
      return false;
    }
  }

  static async generateRefreshToken () {
    const refreshToken = await jwt.sign({}, secretForRefreshToken, { expiresIn: '24h' });
    return refreshToken;
  }

  static async checkIfRefreshTokenIsValid (userID) {
    const refreshTokenFound = await this.checkIfTokenExsists(userID);
    if (refreshTokenFound) {
      const hasTokenExpired = this.checkIfRefreshTokenHasExpired(refreshTokenFound.expires);
      if (!hasTokenExpired) return refreshTokenFound;
      else {
        const newExperation = moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
        const updateExperationRefreshToken = await refreshTokenFound.update(
          { expires: newExperation }
        );
        if (updateExperationRefreshToken) {
          return refreshTokenFound;
        } else {
          return false;
        }
      }
    } else {
      const expiresDate = moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
      const generatedRefreshToken = await this.generateRefreshToken();
      const newRefreshToken = await refreshTokens.create({
        refreshtoken: generatedRefreshToken,
        user: userID,
        expires: expiresDate
      });
      if (newRefreshToken) {
        return newRefreshToken;
      } else {
        return false;
      }
    }
  }
}

export default RefreshTokenService;

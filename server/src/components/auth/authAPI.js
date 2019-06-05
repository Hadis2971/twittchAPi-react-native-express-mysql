import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { secretForAuthToken } from '../../config';
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../database/models').User;

class AuthApis {
  static async hashNewUserPassword (password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  static async _checkUserPasswordForLogin (password, hash) {
    const passwordMatch = await bcrypt.compare(password, hash);
    return passwordMatch;
  }

  static async generateAuthToken (payload) {
    const token = await jwt.sign(payload, secretForAuthToken, { expiresIn: 3600 });
    return token;
  }

  static loginConfig (passport) {
    passport.use(new LocalStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
          return done(null, false);
        }
        const passwordMatch = await this._checkUserPasswordForLogin(password, user.password);
        if (!passwordMatch) {
          return done(null, false);
        }
        return done(null, user);
      }
    ));
  }
}

export default AuthApis;

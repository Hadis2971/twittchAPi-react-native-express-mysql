import AuthApis from './authAPI';
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
}

export default AuthService;

import bcrypt from 'bcryptjs';
const User = require('../../database/models').User;
class AuthService {
  static async _hashNewUserPassword (password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  static async _creteNewUser (user) {
    const hashedPassword = await this._hashNewUserPassword(user.password);
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

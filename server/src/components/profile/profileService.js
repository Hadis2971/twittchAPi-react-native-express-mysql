import AuthService from '../auth/authService';
const User = require('../../database/models').User;

class ProfileService {
  static async updateUserProfile (userID, data) {
    try {
      if (data.email) {
        const emailExists = await AuthService.checkIfEmailExists(data.email);
        if (emailExists) {
          return 'email';
        }
      }
      const updateUserResult = await User.update(
        data,
        { where: { id: userID } }
      );
      if (updateUserResult.length > 0) return true;
      else return false;
    } catch (error) {
      console.log(`Error Inside updateUserProfile => ${error}`);
    }
  }
}

export default ProfileService;

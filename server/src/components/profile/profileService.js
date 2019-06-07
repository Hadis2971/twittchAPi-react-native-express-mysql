const User = require('../../database/models').User;

class ProfileService {
  static async updateUserProfile (userID, data) {
    try {
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

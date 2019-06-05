const User = require('../../database/models').User;

class ProfileService {
  static async updateUserProfile (userID, data) {
    console.log(userID, data);
    try {
      const updateUserResult = await User.update(
        data,
        { where: { id: userID } }
      );
      console.log(`Inside updateUserProfile result of update => ${updateUserResult}`);
      if (updateUserResult.length > 0) return true;
      else return false;
    } catch (error) {
      console.log(`Error Inside updateUserProfile => ${error}`);
    }
  }
}

export default ProfileService;

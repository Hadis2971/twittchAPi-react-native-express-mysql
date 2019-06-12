import ProfileService from './profileService';

class ProfileController {
  static async updateUserProfile (req, res, next) {
    const { userID } = req.decoded;
    const { body } = req;
    try {
      const updateUserSuccess = await ProfileService.updateUserProfile(userID, body);
      if (updateUserSuccess) {
        if (updateUserSuccess === 'email') {
          return res.json({
            Error: 'Email Already in Use!!!'
          });
        }
        res.json(body);
      } else {
        res.json({
          Error: 'Sometnih Went Wrong Please Try Again Latter'
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default ProfileController;

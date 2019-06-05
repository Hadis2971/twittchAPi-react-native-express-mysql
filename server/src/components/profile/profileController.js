import ProfileService from './profileService';

class ProfileController {
  static updateUserProfile (req, res, next) {
    console.log(req.body);
    const { userID } = req.decoded;
    const { body } = req;
    try {
      const updateUserSuccess = ProfileService.updateUserProfile(userID, body);
      if (updateUserSuccess) {
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

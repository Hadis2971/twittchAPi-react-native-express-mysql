import Network from '../network';
import configFactory from './configFactory';
class ProfileApis {
  constructor () {
    this.baseUrl = '/profile';
  }

  async updateUserProfile (data) {
    try {
      const config = await configFactory(this.baseUrl, data);
      const updateUserProfileResult = await Network.post(config);
      console.log(`Inside updateUserProfile result => ${updateUserProfileResult}`);
      return updateUserProfileResult;
    } catch (error) {
      console.log(`Error in updateUserProfile => ${error}`);
    }
  }
}

export default new ProfileApis();

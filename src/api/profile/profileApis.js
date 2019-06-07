import Network from '../network';
import configFactory from './configFactory';
class ProfileApis {
  constructor () {
    this.baseUrl = '/profile';
  }

  async updateUserProfile (data) {
    try {
      const config = await configFactory(this.baseUrl, data);
      console.log(`inside updateUserProfile config => ${config.token} ${config.refreshtoken}`);
      const updateUserProfileResult = await Network.post(config);
      return updateUserProfileResult;
    } catch (error) {
      console.log(`Error in updateUserProfile => ${error}`);
    }
  }
}

export default new ProfileApis();

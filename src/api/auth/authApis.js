import Network from '../network';
import configFactory from './config.factory';

class AuthApis {
  constructor () {
    this.baseUrl = '/auth';
  }

  async registerUser (user) {
    try {
      const config = configFactory(`${this.baseUrl}/register`, user);
      const registerUserResult = await Network.post(config);
      console.log(`registerUser apis registerUserResult ${registerUserResult}`);
      return registerUserResult;
    } catch (error) {
      console.log(`auth apis register user error ${error}`);
    }
  }

  async loginUser (user) {
    try {
      const config = configFactory(`${this.baseUrl}/login`, user);
      console.log(config);
      const loginUserResult = await Network.post(config);
      console.log('auth apis login result', loginUserResult);
      return loginUserResult;
    } catch (error) {
      console.log(`auth apis login user error ${error}`);
    }
  }
}

const authApis = new AuthApis();

export default authApis;

import Network from '../network';
import configFactory from './configFactory';
class ForgotPassApis {
  static async post (data) {
    const config = configFactory('forgotPassword', data);
    try {
      const sendEmailResult = await Network.post(config);
      return sendEmailResult;
    } catch (error) {
      console.log(`inside send email error apis => ${error}`);
    }
  }
}

export default ForgotPassApis;

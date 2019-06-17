import { createStackNavigator } from 'react-navigation';
import RegisterContainer from '../auth/registerContainer';
import LoginContainer from '../auth/loginContainer';
import ForgotPasswordContainer from '../forgotPassword/forgotPassContainer';

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginContainer
  },
  Register: {
    screen: RegisterContainer
  },
  ForgotPassword: {
    screen: ForgotPasswordContainer
  }
}, {
  defaultNavigationOptions: {
    headerTintColor: '#FFF',
    headerTitle: 'Twitch Helper',
    headerStyle: {
      backgroundColor: '#0059b3'
    }
  }
});
export default AuthNavigator;

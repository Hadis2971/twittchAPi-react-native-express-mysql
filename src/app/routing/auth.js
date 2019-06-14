import { createStackNavigator } from 'react-navigation';
import RegisterContainer from '../auth/registerContainer';
import LoginContainer from '../auth/loginContainer';
import ForgotPasswordContainer from '../forgotPassword/forgotPassContainer';

const AuthNavigator = createStackNavigator({
  Login: { screen: LoginContainer },
  Register: { screen: RegisterContainer },
  ForgotPassword: { screen: ForgotPasswordContainer }
},
{
  initialRouteName: 'Login',
  navigationOptions: {
    headerStyle: { backgroundColor: '#E73536' },
    title: 'You are not logged in',
    headerTintColor: 'white'
  }
});

export default AuthNavigator;

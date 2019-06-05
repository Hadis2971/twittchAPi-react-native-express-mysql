import { createStackNavigator } from 'react-navigation';
import RegisterContainer from '../auth/registerContainer';
import LoginContainer from '../auth/loginContainer';

const AuthNavigator = createStackNavigator({
  Login: { screen: LoginContainer },
  Register: { screen: RegisterContainer }
},
{
  initialRouteName: 'Login'
});

export default AuthNavigator;

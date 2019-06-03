import { createStackNavigator, createAppContainer } from 'react-navigation';
import RegisterContainer from '../auth/registerContainer';
import LoginContainer from '../auth/loginContainer';

const MainNavigator = createStackNavigator({
  Login: { screen: LoginContainer },
  Register: { screen: RegisterContainer }
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;

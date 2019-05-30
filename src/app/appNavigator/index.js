import { createStackNavigator, createAppContainer } from 'react-navigation';
import Register from '../auth/register';
import Login from '../auth/login';
const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register }
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;

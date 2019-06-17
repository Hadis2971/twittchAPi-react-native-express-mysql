import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AuthLoading from '../routing/authLoading';
import AuthNavigator from '../routing/auth';
import drawerStackNavigator from '../routing/drawerStack';
const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoading,
  Auth: AuthNavigator,
  App: drawerStackNavigator
},
{
  initialRouteName: 'AuthLoading'
});

const Navigator = createAppContainer(AppNavigator);

export default Navigator;

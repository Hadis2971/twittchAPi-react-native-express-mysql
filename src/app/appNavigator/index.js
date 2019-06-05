import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoading from '../routing/authLoading';
import AuthNavigator from '../routing/auth';
import MainNavigator from '../routing/main';
const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoading,
  Auth: AuthNavigator,
  App: MainNavigator
},
{
  initialRouteName: 'AuthLoading'
});

const Navigator = createAppContainer(AppNavigator);

export default Navigator;

import { createDrawerNavigator } from 'react-navigation';
import TabBottomNavigator from '../routing/tabs';
import Logout from '../auth/logoutComponent';
import ProfileContainer from '../profile/profileContainer';
const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabBottomNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'WhoIsStreaming?!'
    })
  },
  Profile: {
    screen: ProfileContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile'
    })
  },
  Logout: {
    screen: Logout,
    navigationOptions: ({ navigation }) => ({
      title: 'Logout'
    })
  }
},
{
  initialRouteName: 'Home'
});

export default DrawerNavigator;

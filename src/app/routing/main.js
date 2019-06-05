import { createDrawerNavigator } from 'react-navigation';
import HomeContainer from '../home/homeContainer';
import Logout from '../auth/logoutComponent';
import ProfileContainer from '../profile/profileContainer';
const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'WhoIsStreaming?!'
    })
  },
  Logout: {
    screen: Logout,
    navigationOptions: ({ navigation }) => ({
      title: 'Logout'
    })
  },
  Profile: {
    screen: ProfileContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile'
    })
  }
},
{
  initialRouteName: 'Home'
});

export default DrawerNavigator;

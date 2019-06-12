import { createDrawerNavigator } from 'react-navigation';
import TabBottomNavigator from '../routing/tabs';
import Logout from '../auth/logoutComponent';
import ProfileContainer from '../profile/profileContainer';
import FavChannelsContainer from '../favoriteChannels/favChannelsCont';

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
  Favorites: {
    screen: FavChannelsContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Favorite Channels'
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

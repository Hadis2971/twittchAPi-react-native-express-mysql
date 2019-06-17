import { createDrawerNavigator } from 'react-navigation';
import TabBottomNavigator from '../routing/tabs';
import Logout from '../auth/logoutComponent';
import ProfileContainer from '../profile/profileContainer';
import FavChannelsContainer from '../favoriteChannels/favChannelsCont';

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabBottomNavigator
  },
  Profile: {
    screen: ProfileContainer
  },
  Favorites: {
    screen: FavChannelsContainer
  },
  Logout: {
    screen: Logout
  }
},
{
  initialRouteName: 'Home'
});

export default DrawerNavigator;

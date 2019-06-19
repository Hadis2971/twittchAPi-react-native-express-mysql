import { createDrawerNavigator } from 'react-navigation';
import TabBottomNavigator from '../routing/channelsStreamsGames';
import Logout from '../auth/logoutComponent';
import ProfileContainer from '../profile/profileContainer';
import FavChannelsContainer from '../favoriteChannels/favChannelsCont';

const DrawerNavigator = createDrawerNavigator({
  Home: TabBottomNavigator,
  Profile: ProfileContainer,
  Favorites: FavChannelsContainer,
  Logout: Logout
},
{
  initialRouteName: 'Home'
});

export default DrawerNavigator;

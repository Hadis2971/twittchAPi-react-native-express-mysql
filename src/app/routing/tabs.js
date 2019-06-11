import { createBottomTabNavigator } from 'react-navigation';
import StreamsContainer from '../tabs/Streams/streamsContainer';
import GamesContainer from '../tabs/Games/gamesContainer';
import ChannelsContainer from '../tabs/Channels/channelsContainer';
const TabBottomNavigator = createBottomTabNavigator({
  Streams: StreamsContainer,
  Channels: ChannelsContainer,
  Games: GamesContainer
});

export default TabBottomNavigator;

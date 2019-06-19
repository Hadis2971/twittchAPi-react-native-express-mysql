import { createBottomTabNavigator } from 'react-navigation';
import StreamsContainer from '../twitchSearchReference/streams/streamsContainer';
import GamesContainer from '../twitchSearchReference/games/gamesContainer';
import ChannelsContainer from '../twitchSearchReference/channels/channelsContainer';
const TabBottomNavigator = createBottomTabNavigator({
  Streams: StreamsContainer,
  Channels: ChannelsContainer,
  Games: GamesContainer
});

export default TabBottomNavigator;

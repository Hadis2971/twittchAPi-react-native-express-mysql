const initialState = {
  getStreamsStart: false,
  getStreamsSuccess: false,
  getStreamsFail: false,
  getGamesStart: false,
  getGamesSuccess: false,
  getGamesFail: false,
  getChannelsStart: false,
  getChannelsSuccess: false,
  getChannelsFail: false,
  addChannelToFavoritesStart: false,
  addChannelToFavoritesFail: false,
  addChannelToFavoritesSuccess: false,
  channelsError: null,
  streamsErrors: null,
  gamesError: null,
  addChannelError: null,
  newFavoriteChannel: null,
  streams: [],
  games: [],
  channels: []
};

export default initialState;
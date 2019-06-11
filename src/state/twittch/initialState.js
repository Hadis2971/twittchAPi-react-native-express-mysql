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
  channelsError: null,
  streamsErrors: null,
  gamesError: null,
  streams: [],
  games: [],
  channels: []
};

export default initialState;

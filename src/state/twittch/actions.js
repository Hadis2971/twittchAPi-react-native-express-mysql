import * as types from './actionTypes';
import twittchApis from '../../api/twittch/twittchApis';

export const getStreams = (path) => async (dispatch) => {
  dispatch({ type: types.GET_STREAMS_START });
  const searchStremasResult = await twittchApis.get(path);

  if ((!searchStremasResult) || (!searchStremasResult.data.streams.length)) {
    dispatch({
      type: types.GET_STREAMS_FAIL,
      streamsErrors: 'No Streams Found'
    });
  } else {
    dispatch({
      type: types.GET_STREAMS_SUCCESS,
      streams: searchStremasResult.data.streams
    });
  }
};

export const getGames = (path) => async (dispatch) => {
  dispatch({ type: types.GET_GAMES_START });
  const searchGamesResult = await twittchApis.get(path);
  if ((!searchGamesResult) || (!searchGamesResult.data.games)) {
    dispatch({
      type: types.GET_GAMES_FAIL,
      gamesError: 'No Games Found'
    });
  } else {
    dispatch({
      type: types.GET_GAMES_SUCCESS,
      games: searchGamesResult.data.games
    });
  }
};

export const getChannels = (path) => async (dispatch) => {
  dispatch({ type: types.GET_CHANNELS_START });
  const getChannelsResult = await twittchApis.get(path);
  if ((!getChannelsResult) || (!getChannelsResult.data.channels.length)) {
    dispatch({
      type: types.GET_CHANNELS_FAIL,
      channelsError: 'No Channels Found'
    });
  } else {
    dispatch({
      type: types.GET_CHANNELS_SUCCESS,
      channels: getChannelsResult.data.channels
    });
  }
};

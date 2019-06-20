import * as types from './actionTypes';
import twittchApis from '../../api/twittch/twittchApis';
import AsyncStorage from '@react-native-community/async-storage';

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

export const addChannelToFavorites = (body) => async (dispatch) => {
  dispatch({ type: types.ADD_CHANNEL_TO_FAVORITES_START });
  if (!body.userID) {
    body.userID = await AsyncStorage.getItem('userID');
  }
  const addChannelToFavoritesResult = await twittchApis.addChannelToFavorites(body);
  if ((!addChannelToFavoritesResult.data) || (addChannelToFavoritesResult.data.Error)) {
    dispatch({
      type: types.ADD_CHANNEL_TO_FAVORITES_FAIL,
      addChannelError: addChannelToFavoritesResult.data.Error || 'Something Went Wrong Please Try Again Later'
    });
    return false;
  } else {
    dispatch({
      type: types.ADD_CHANNEL_TO_FAVORITES_SUCCESS,
      newFavoriteChannel: addChannelToFavoritesResult.data
    });
    return true;
  }
};

export const getAllFavChannels = (id, offsetForLoadingFavChannels) => async (dispatch) => {
  dispatch({ type: types.GET_FAV_CHANNELS_START });
  if (!id) {
    id = await AsyncStorage.getItem('userID');
  }
  const getAllFavChannelsResult = await twittchApis.getAllFavChannels(id, offsetForLoadingFavChannels);
  if ((!getAllFavChannelsResult) || getAllFavChannelsResult.data.Error) {
    dispatch({
      type: types.GET_FAV_CHANNELS_FAIL,
      favChanneslError: getAllFavChannelsResult.data.Error || 'Something Went Wrong Please Try Again Later'
    });
    return false;
  } else {
    dispatch({
      type: types.GET_FAV_CHANNELS_SUCCESS,
      channels: getAllFavChannelsResult.data
    });
    return getAllFavChannelsResult.data;
  }
};

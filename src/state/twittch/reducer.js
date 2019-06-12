import * as types from './actionTypes';
import initialState from './initialState';
import * as reducerMethods from './reducerMethods';

const twittchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STREAMS_START: {
      return reducerMethods.getStreamsStartUpdate(state);
    }
    case types.GET_STREAMS_SUCCESS: {
      return reducerMethods.getStreamsSuccessUpdate(state, action.streams);
    }
    case types.GET_STREAMS_FAIL: {
      return reducerMethods.getStreamsFailUpdate(state, action.streamsErrors);
    }
    case types.GET_GAMES_START: {
      return reducerMethods.getGamesStartUpdate(state);
    }
    case types.GET_GAMES_SUCCESS: {
      return reducerMethods.getGamesSuccessUpdate(state, action.games);
    }
    case types.GET_GAMES_FAIL: {
      return reducerMethods.getGamesFailUpdate(state, action.gamesError);
    }
    case types.GET_CHANNELS_START: {
      return reducerMethods.getChannelsStartUpdate(state);
    }
    case types.GET_CHANNELS_SUCCESS: {
      return reducerMethods.getChannelssSuccessUpdate(state, action.channels);
    }
    case types.GET_CHANNELS_FAIL: {
      return reducerMethods.getChannelssFailUpdate(state, action.channelsError);
    }
    case types.ADD_CHANNEL_TO_FAVORITES_START: {
      return reducerMethods.addChannelToFavoritesStartUpdate(state);
    }
    case types.ADD_CHANNEL_TO_FAVORITES_SUCCESS: {
      return reducerMethods.addChannelToFavoritesSuccessUpdate(state, action.newFavoriteChannel);
    }
    case types.ADD_CHANNEL_TO_FAVORITES_FAIL: {
      return reducerMethods.addChannelToFavoritesFailUpdate(state, action.addChannelError);
    }
    case types.GET_FAV_CHANNELS_START: {
      return reducerMethods.getAllFavChannelsStartUpdate(state);
    }
    case types.GET_FAV_CHANNELS_SUCCESS: {
      return reducerMethods.getAllFavChannelsSuccessUpdate(state, action.channels);
    }
    case types.GET_FAV_CHANNELS_FAIL: {
      return reducerMethods.getAllFavChannelsFailUpdate(state, action.favChanneslError);
    }
    default: return state;
  }
};

export default twittchReducer;

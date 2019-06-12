import { updateObject } from '../../helpers';

export const getStreamsStartUpdate = (oldState) => {
  return updateObject({ ...oldState }, {
    getStreamsStart: true,
    getStreamsSuccess: false,
    getStreamsFail: false,
    streamsErrors: null
  });
};

export const getStreamsSuccessUpdate = (oldState, streams) => {
  return updateObject({ ...oldState }, {
    getStreamsStart: false,
    getStreamsSuccess: true,
    getStreamsFail: false,
    streams: [...streams],
    streamsErrors: null
  });
};

export const getStreamsFailUpdate = (oldState, errors) => {
  return updateObject({ ...oldState }, {
    getStreamsStart: false,
    getStreamsSuccess: true,
    getStreamsFail: false,
    streamsErrors: errors
  });
};

export const getGamesStartUpdate = (oldState) => {
  return updateObject({ ...oldState }, {
    getGamesStart: true,
    getGamesSuccess: false,
    getGamesFail: false,
    gamesError: null
  });
};

export const getGamesSuccessUpdate = (oldState, games) => {
  return updateObject({ ...oldState }, {
    getGamesStart: false,
    getGamesSuccess: true,
    getGamesFail: false,
    games: [...games],
    gamesError: null
  });
};

export const getGamesFailUpdate = (oldState, errors) => {
  return updateObject({ ...oldState }, {
    getGamesStart: false,
    getGamesSuccess: false,
    getGamesFail: true,
    gamesError: errors
  });
};

export const getChannelsStartUpdate = (oldState) => {
  return updateObject({ ...oldState }, {
    getChannelsStart: true,
    getChannelsSuccess: false,
    getChannelsFail: false,
    channelsError: null
  });
};

export const getChannelssSuccessUpdate = (oldState, channels) => {
  return updateObject({ ...oldState }, {
    getChannelsStart: false,
    getChannelsSuccess: true,
    getChannelsFail: false,
    channels: [...channels],
    channelsError: null
  });
};

export const getChannelssFailUpdate = (oldState, errors) => {
  return updateObject({ ...oldState }, {
    getChannelsStart: false,
    getChannelsSuccess: false,
    getChannelsFail: true,
    channelsError: errors
  });
};

export const addChannelToFavoritesStartUpdate = (oldState) => {
  return updateObject({ ...oldState }, {
    addChannelToFavoritesStart: true,
    addChannelToFavoritesFail: false,
    addChannelToFavoritesSuccess: false,
    addChannelError: null,
    newFavoriteChannel: null
  });
};

export const addChannelToFavoritesFailUpdate = (oldState, error) => {
  return updateObject({ ...oldState }, {
    addChannelToFavoritesStart: false,
    addChannelToFavoritesFail: true,
    addChannelToFavoritesSuccess: false,
    addChannelError: error,
    newFavoriteChannel: null
  });
};

export const addChannelToFavoritesSuccessUpdate = (oldState, newChannel) => {
  return updateObject({ ...oldState }, {
    addChannelToFavoritesStart: false,
    addChannelToFavoritesFail: false,
    addChannelToFavoritesSuccess: true,
    addChannelError: null,
    newFavoriteChannel: newChannel
  });
};

export const getAllFavChannelsStartUpdate = (oldState) => {
  return updateObject({ ...oldState }, {
    getFavChanneslStart: true,
    getFavChannelsFail: false,
    getFavChannelsSuccess: false,
    favChanneslError: null
  });
};

export const getAllFavChannelsFailUpdate = (oldState, favChanneslError) => {
  return updateObject({ ...oldState }, {
    getFavChanneslStart: false,
    getFavChannelsFail: true,
    getFavChannelsSuccess: false,
    favChanneslError: favChanneslError
  });
};

export const getAllFavChannelsSuccessUpdate = (oldState, channels) => {
  return updateObject({ ...oldState }, {
    getFavChanneslStart: false,
    getFavChannelsFail: true,
    getFavChannelsSuccess: false,
    favChanneslError: null,
    channels: [...channels]
  });
};

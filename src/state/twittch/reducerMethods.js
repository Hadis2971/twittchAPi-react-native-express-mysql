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

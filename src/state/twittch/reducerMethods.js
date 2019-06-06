import { updateObject } from '../../helpers';

export const getStreamsStartUpdate = (oldState) => {
  return updateObject({ ...oldState }, {
    getStreamsStart: true,
    getStreamsSuccess: false,
    getStreamsFail: false,
    errors: null
  });
};

export const getStreamsSuccessUpdate = (oldState, streams) => {
  return updateObject({ ...oldState }, {
    getStreamsStart: false,
    getStreamsSuccess: true,
    getStreamsFail: false,
    streams: [...streams],
    errors: null
  });
};

export const getStreamsFailUpdate = (oldState, errors) => {
  return updateObject({ ...oldState }, {
    getStreamsStart: false,
    getStreamsSuccess: true,
    getStreamsFail: false,
    errors: errors
  });
};

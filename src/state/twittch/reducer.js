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
      return reducerMethods.getStreamsFailUpdate(state, action.errors);
    }
    default: return state;
  }
};

export default twittchReducer;

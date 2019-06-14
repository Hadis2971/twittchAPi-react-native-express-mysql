import initialState from './initialState';
import * as types from './actionTypes';
import * as reducerMethods from './reducerMethods';

const forgotPassReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_EMAIL_START: {
      return reducerMethods.emailSentStartUpdate(state);
    }
    case types.SEND_EMAIL_FAIL: {
      return reducerMethods.emailSentFailUpdate(state, action.errors);
    }
    case types.SEND_EMAIL_SUCCESS: {
      return reducerMethods.emailSentSuccessUpdate(state);
    }
    default: return state;
  }
};

export default forgotPassReducer;

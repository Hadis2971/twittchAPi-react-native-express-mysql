import * as types from './action.types';
import initialState from './initialState';
import * as reducerMethods from './reducer.methods';

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.LOGIN_USER_START): {
      return reducerMethods.loginStartUpdate(state);
    }
    case (types.LOGIN_USER_SUCCESS): {
      return reducerMethods.loginSuccessUpdate(state, action.user);
    }
    case (types.LOGIN_USER_FAIL): {
      return reducerMethods.loginFailUpdate(state, action.errors);
    }
    default: return state;
  }
};

export default loginReducer;

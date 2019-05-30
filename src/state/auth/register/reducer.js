import * as types from './action.types';
import initialState from './initialState';
import * as reducerMethods from './reducer.methods';

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.REGISTER_USER_START): {
      return reducerMethods.registerStartUpdate(state);
    }
    case (types.REGISTER_USER_SUCCESS): {
      return reducerMethods.registerSuccessUpdate(state);
    }
    case (types.REGISTER_USER_FAIL): {
      return reducerMethods.registerFailUpdate(state, action);
    }
    default: return state;
  }
};

export default registerReducer;

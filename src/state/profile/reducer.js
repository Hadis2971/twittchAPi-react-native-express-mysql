import * as types from './actionTypes';
import initialState from './initialState';
import * as reducerMethods from './reducerMethods';

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_PROFILE_START: {
      return reducerMethods.updateProfileStart({ ...state });
    }
    case types.UPDATE_USER_PROFILE_SUCCESS: {
      return reducerMethods.updateProfileSuccess({ ...state }, action.data);
    }
    case types.UPDATE_USER_PROFILE_FAIL: {
      return reducerMethods.updateProfileFail({ ...state }, action.errors);
    }
    default: return state;
  }
};

export default profileReducer;

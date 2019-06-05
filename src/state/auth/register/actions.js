import * as types from './action.types';
import authApis from '../../../api/auth/authApis';

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: types.REGISTER_USER_START });
  const registerUserResult = await authApis.registerUser(user);
  console.log(registerUserResult);
  if ((!registerUserResult) || registerUserResult.data.Error) {
    dispatch({
      type: types.REGISTER_USER_FAIL,
      errors: registerUserResult.data.Error || 'Something Went Wrong Try Again Later'
    });
    return false;
  } else {
    dispatch({
      type: types.REGISTER_USER_SUCCESS
    });
    return true;
  }
};

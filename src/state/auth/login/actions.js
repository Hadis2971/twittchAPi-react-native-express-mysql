import * as types from './action.types';
import authApis from '../../../api/auth/authApis';

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: types.LOGIN_USER_START });
  try {
    const loginUserResult = await authApis.loginUser(user);
    if ((!loginUserResult) || loginUserResult.data.Error) {
      dispatch({
        type: types.LOGIN_USER_FAIL,
        errors: loginUserResult.data.Error || 'Login Error Please Try Again Later'
      });
    } else {
      dispatch({
        type: types.LOGIN_USER_SUCCESS,
        token: loginUserResult.data
      });
    }
  } catch (error) {
    console.log(`login user error ${error}`);
  }
};

import * as types from './action.types';
import authApis from '../../../api/auth/authApis';
import { getUserDataFromAuthToken,
  saveUserDataToAsyncStorage,
  removeUserDataFromAsyncStorage } from '../../../helpers';

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: types.LOGIN_USER_START });
  try {
    const loginUserResult = await authApis.loginUser(user);
    if ((!loginUserResult) || loginUserResult.data.Error) {
      dispatch({
        type: types.LOGIN_USER_FAIL,
        errors: loginUserResult.data.Error || 'Something Went Wrong Try Again Later'
      });
      return false;
    } else {
      const userData = await getUserDataFromAuthToken(loginUserResult.data.token);
      userData.refreshtoken = loginUserResult.data.refreshtoken;
      userData.token = loginUserResult.data.token;
      saveUserDataToAsyncStorage(userData);
      dispatch({
        type: types.LOGIN_USER_SUCCESS,
        user: userData
      });
      return true;
    }
  } catch (error) {
    console.log(`login user error ${error}`);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_USER_START });
  removeUserDataFromAsyncStorage();
};

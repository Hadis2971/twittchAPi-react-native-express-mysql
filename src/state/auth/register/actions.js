import * as types from './action.types';
import authApis from '../../../api/auth/authApis';

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: types.REGISTER_USER_START });
  const registerUserResult = await authApis.registerUser(user);
  console.log(`inside register user act cre registerUserResult ${registerUserResult}`);
  if ((!registerUserResult) || registerUserResult.data.Error) {
    dispatch({
      type: types.REGISTER_USER_FAIL,
      errors: registerUserResult.data.Error || 'Register Error Please Try Again Later'
    });
  } else {
    dispatch({
      type: types.REGISTER_USER_SUCCESS
    });
  }
};

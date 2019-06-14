import * as types from './actionTypes';
import forogotPassApis from '../../api/forgotPassword/forgotPassApis';

export const sendForgotPassEmail = (data) => async (dispatch) => {
  dispatch({ type: types.SEND_EMAIL_START });
  const sendEmailResult = await forogotPassApis.post(data);
  if ((!sendEmailResult) || sendEmailResult.data.Error) {
    dispatch({
      type: types.SEND_EMAIL_FAIL,
      errors: 'Email Sent Error Please Try Again Later'
    });
  } else {
    dispatch({
      type: types.SEND_EMAIL_SUCCESS
    });
  }
};

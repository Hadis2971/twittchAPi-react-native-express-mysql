import * as types from './actionTypes';
import profileApis from '../../api/profile/profileApis';

export const updateUserProfile = (data) => async (dispatch) => {
  dispatch({ type: types.UPDATE_USER_PROFILE_START });
  const updateUserProfileResult = await profileApis.updateUserProfile(data);
  if ((!updateUserProfileResult) || updateUserProfileResult.data.Error) {
    dispatch({
      type: types.UPDATE_USER_PROFILE_FAIL,
      errors: updateUserProfileResult.data.Error || 'Something Went Wrong Please Try Again Latter'
    });
    return false;
  } else {
    dispatch({
      type: types.UPDATE_USER_PROFILE_SUCCESS,
      data: updateUserProfileResult.data
    });
    return true;
  }
};

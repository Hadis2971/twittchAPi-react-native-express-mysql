import { updateObject } from '../../helpers';

export const updateProfileStart = (oldState) => {
  return updateObject(oldState, {
    updateUserProfileStart: true,
    updateUserProfileSuccess: false,
    updateUserProfileFail: false,
    data: null,
    errors: null
  });
};

export const updateProfileSuccess = (oldState, data) => {
  return updateObject(oldState, {
    updateUserProfileStart: false,
    updateUserProfileSuccess: true,
    updateUserProfileFail: false,
    data: data,
    errors: null
  });
};

export const updateProfileFail = (oldState, errors) => {
  return updateObject(oldState, {
    updateUserProfileStart: false,
    updateUserProfileSuccess: false,
    updateUserProfileFail: true,
    data: null,
    errors: errors
  });
};

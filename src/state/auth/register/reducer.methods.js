import { updateObject } from '../../../helpers';

export const registerStartUpdate = (oldState) => {
  return updateObject(oldState, {
    registerUserStart: true,
    registerUserSuccess: false,
    registerUserFail: false,
    errors: null
  });
};

export const registerSuccessUpdate = (oldState) => {
  return updateObject(oldState, {
    registerUserStart: false,
    registerUserSuccess: true,
    registerUserFail: false,
    errors: null
  });
};

export const registerFailUpdate = (oldState, action) => {
  return updateObject(oldState, {
    registerUserStart: false,
    registerUserSuccess: false,
    registerUserFail: true,
    errors: action.errors
  });
};

import { updateObject } from '../../../helpers';

export const loginStartUpdate = (oldState) => {
  return updateObject(oldState, {
    loginUserStart: true,
    loginUserSuccess: false,
    loginUserFail: false,
    user: null
  });
};

export const loginSuccessUpdate = (oldState, user) => {
  return updateObject(oldState, {
    loginUserStart: false,
    loginUserSuccess: true,
    loginUserFail: false,
    user: user
  });
};

export const loginFailUpdate = (oldState) => {
  return updateObject(oldState, {
    loginUserStart: false,
    loginUserSuccess: false,
    loginUserFail: true,
    user: null
  });
};

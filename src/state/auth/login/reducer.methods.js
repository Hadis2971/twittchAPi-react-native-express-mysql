import { updateObject } from '../../../helpers';

export const loginStartUpdate = (oldState) => {
  return updateObject(oldState, {
    loginUserStart: true,
    loginUserSuccess: false,
    loginUserFail: false,
    token: null,
    userID: '',
    userEmail: '',
    username: '',
    firstName: '',
    lastName: '',
    errors: null
  });
};

export const loginSuccessUpdate = (oldState, user) => {
  return updateObject(oldState, {
    loginUserStart: false,
    loginUserSuccess: true,
    loginUserFail: false,
    userID: user.userID,
    userEmail: user.userEmail,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    token: user.token

  });
};

export const loginFailUpdate = (oldState, errros) => {
  return updateObject(oldState, {
    loginUserStart: false,
    loginUserSuccess: false,
    loginUserFail: true,
    userID: '',
    userEmail: '',
    username: '',
    firstName: '',
    lastName: '',
    errors: errros
  });
};

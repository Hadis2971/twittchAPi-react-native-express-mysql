import { updateObject } from '../../../helpers';

export const loginStartUpdate = (oldState) => {
  return updateObject(oldState, {
    loginUserStart: true,
    loginUserSuccess: false,
    loginUserFail: false,
    userID: '',
    userEmail: '',
    username: '',
    firstName: '',
    lastName: '',
    token: null,
    refershtoken: null,
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
    token: user.token,
    refershtoken: user.refershtoken,
    errors: null
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
    token: null,
    refershtoken: null,
    errors: errros
  });
};

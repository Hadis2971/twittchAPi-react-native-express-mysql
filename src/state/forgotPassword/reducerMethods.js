import { updateObject } from '../../helpers';

export const emailSentStartUpdate = (oldState) => {
  return updateObject({ ...oldState }, {
    sendEmailStart: true,
    sendEmailSuccess: false,
    sendEmailFail: false,
    errors: null
  });
};

export const emailSentFailUpdate = (oldState, errors) => {
  return updateObject({ ...oldState }, {
    sendEmailStart: false,
    sendEmailSuccess: false,
    sendEmailFail: true,
    errors: errors
  });
};

export const emailSentSuccessUpdate = (oldState) => {
  return updateObject({ ...oldState }, {
    sendEmailStart: false,
    sendEmailSuccess: true,
    sendEmailFail: false,
    errors: null
  });
};

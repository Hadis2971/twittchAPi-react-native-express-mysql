import { combineReducers } from 'redux';
import registerReducer from '../state/auth/register/reducer';
import loginReducer from '../state/auth/login/reducer';
import profileReducer from '../state/profile/reducer';
import twittchReducer from '../state/twittch/reducer';
import forgotPassReducer from '../state/forgotPassword/reducer';

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  profile: profileReducer,
  twittch: twittchReducer,
  forgotPassword: forgotPassReducer
});

export default rootReducer;

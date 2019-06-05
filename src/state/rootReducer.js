import { combineReducers } from 'redux';
import registerReducer from '../state/auth/register/reducer';
import loginReducer from '../state/auth/login/reducer';
import profileReducer from '../state/profile/reducer';
const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  profile: profileReducer
});

export default rootReducer;

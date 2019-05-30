import { combineReducers } from 'redux';
import registerReducer from '../state/auth/register/reducer';

const rootReducer = combineReducers({
  register: registerReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

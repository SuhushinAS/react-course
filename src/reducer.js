import {userModuleName} from 'modules/user/constants/index.js';
import userReducer from 'modules/user/reducers/index.js';
import {combineReducers} from 'redux';

export default combineReducers({
  [userModuleName]: userReducer,
});

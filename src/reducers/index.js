import { combineReducers } from 'redux';
import kegs from './kegs';
import aninterface  from './interface';

export default combineReducers({
  kegs,
  interface:aninterface
});
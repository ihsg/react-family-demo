import { combineReducers } from 'redux';
import banners from './banners';
import user from './user';

export default combineReducers({
  banners,
  user,
});

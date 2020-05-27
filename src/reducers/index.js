import { combineReducers } from 'redux'
import movieReducer from './movieReducer';
import newsReducer from './newsReducer';

export default combineReducers({
  movieReducer,
  newsReducer
})

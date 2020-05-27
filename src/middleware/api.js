import {FETCH_MOVIES} from '../actions/constants/action-types';
import {movieKey} from '../env.js';


export const apiMiddleware = (store) => (next) => (action) => {
  //catch specific action
  console.log(`Redux Log:`, action)
switch(action.type){
  case FETCH_MOVIES:
  next(action)
  //fetch data from api
  fetch(`http://www.omdbapi.com/?s=%27matrix%27&apikey=${movieKey}`).then(res => res.json()).then(result => {
    console.log('api', result)
    store.dispatch({
      type: 'SET_MOVIE_DATA',
      payload: {movies: result.Search}
    })
  })
  .catch(err => {
    // received an error from the API, dispatch a new action with an error
    store.dispatch({
      type: 'SET_MOVIE_DATA_ERROR',
            payload: { error: err },
    })
  })
      break
  default:
  next(action)
}
}

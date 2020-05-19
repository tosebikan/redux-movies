import {FETCH_MOVIES} from '../actions/constants/action-types';
const defaultState = {
  loading: false,
  movies: [],
  error: ''
}

export default function movieReducer ( state = defaultState, action){
  switch(action.type){
    case FETCH_MOVIES:
    return{
      ...state,
      loading: true
    }
    case 'SET_MOVIE_DATA':
    console.log(action.payload.movies)
    return{
      ...state,
      loading: false,
      error: '',
      movies: action.payload.movies
    }


    default:
    return state;
  }
}

export const fetchMovies = () => ({
  type: FETCH_MOVIES
})

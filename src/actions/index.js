import {FETCH_MOVIES, GET_NEWS} from './constants/action-types';

export const fetchMovies = () => ({
  type: FETCH_MOVIES
})

export const getNews = () =>({
  type: GET_NEWS
})

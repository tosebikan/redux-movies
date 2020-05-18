
const defaultState = {
  //loading: false,
  movies: [
    {
  "title": "matrix",
    "year": "2020",
    "Poster":"https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg"
  },
  {
  "title": "Equilibrium",
    "year": "2019",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTkzMzA1OTI3N15BMl5BanBnXkFtZTYwMzUyMDg5._V1_SX300.jpg"
  },
  {
  "title": "Batman",
    "year": "2018",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
  }
],
  //error: ''
}

export default function movieReducer (state={defaultState}, action){
  return state;
}

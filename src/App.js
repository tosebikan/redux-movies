import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movies from './containers/Movies';
//import Search from './containers/Search';
const movies = [
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
},

]
class App extends Component {


  render(){
  return (
    <div className="App">
      <Header text="Redux-Movies" logo={logo}/>
      <p className="App-Intro">Greatest Movies of All Time</p>
      <div className="movies">
      {movies.map((movie) => (
        <Movies title={movie.title} year={movie.year} poster={movie.Poster}/>
      ))}
      </div>
    </div>
  );
}
}

export default App;

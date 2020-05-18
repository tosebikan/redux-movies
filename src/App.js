import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movies from './containers/Movies';
//import Search from './containers/Search';
const movies = [
{
"title": "matrix",
  "year": "2020"
},
{
"title": "Equilibrium",
  "year": "2019"
},
{
"title": "Batman",
  "year": "2018"
},

]
class App extends Component {


  render(){
  return (
    <div className="App">
      <Header text="Redux-Movies"/>
      <p className="App-Intro">Greatest Movies of All Time</p>
      <div className="movies">
      {movies.map((movie) => (
        <Movies title={movie.title} year={movie.year}/>
      ))}
      </div>
    </div>
  );
}
}

export default App;

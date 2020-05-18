import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movies from './containers/Movies';
//import Loading from './components/Loading';




class App extends Component {
  render(){
    const {movies} = this.props
  return (
    <div className="App">
      <Header text="Redux-Movies" logo={logo}/>
      <p className="App-Intro">Greatest Movies of All Time</p>
      <div className="movies">
      {movies.map((movie) => (
        <div key={movie.title}>
        <Movies title={movie.title} year={movie.year} poster={movie.Poster}/>
        </div>
      ))}
      </div>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  console.log(state.movieReducer.defaultState.movies)
return{
  movies: state.movieReducer.defaultState.movies
}
}


export default connect(mapStateToProps)(App);

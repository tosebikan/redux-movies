import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movies from './containers/Movies';
import Loading from './components/Loading';
import {fetchMovies} from './reducers/movieReducer';
import Button from './containers/Button';
import NewsLoading from './containers/NewsLoading';
import NewsItem from './containers/NewsItem';




class App extends Component {

  componentDidMount(){

    this.props.fetchMovies()
    console.log(this.props)
  }
  render(){
    if(this.props.loading){
      return <Loading />
    }
    const {movies} = this.props
    console.log('movies',movies)
  return (
    <div className="App">
      <Header text="Redux-Movies" logo={logo}/>
      <p className="App-Intro">Greatest Movies of All Time</p>

      <Button />
      <NewsLoading />
      <NewsItem />


      <div className="movies">
      {movies.map(movie => (
        <div key={movie.Poster}>
        <Movies title={movie.Title} year={movie.Year} poster={movie.Poster}/>
        </div>
      ))}
      </div>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  //console.log(state.movieReducer.loading)
return{
  loading: state.movieReducer.loading,
  movies: state.movieReducer.movies
}
}

const mapDispatchToProps = {
  fetchMovies
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

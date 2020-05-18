import React, {Component} from 'react';
import './Movies.css';

class Movies extends Component{
  render(){
    const {title, year} = this.props;
    const PLACEHOLDER_IMAGE =  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

    //const poster = movie.Poster === "N/A" ? PLACEHOLDER_IMAGE : movie.Poster
    return(
      <div className="movie">
      <h2>{title}</h2>
      <div>
      <img
      width="200"
      alt="Amazon"
      src={PLACEHOLDER_IMAGE}/>
      </div>
      <p>{year}</p>
      </div>
    )
  }
}

export default Movies;

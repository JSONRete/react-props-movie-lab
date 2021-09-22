import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((mvi, idx) => 
       <MovieCard title={mvi.title} IMDBRating={mvi.IMDBRating} genres={mvi.genres} poster={mvi.poster} key={idx} />

    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

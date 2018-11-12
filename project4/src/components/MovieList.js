import React, { Component } from 'react';
import Movie from './Movie';
import '../MovieList.css';
import {inject, observer} from "mobx-react";

@inject('movieStore')
@observer
class MovieList extends Component {

  //-----RENDER----------
  render() {
    return (
      <div id="movieList">
        <div id="movieListInner">
          {this.props.movieStore.movies.map(movie =>
              <Movie key = {movie._id}
                     id = {movie._id}
                     title = {movie.title}
                     plot = {movie.plot}
                     poster = {movie.poster}
                     genres = {movie.genres.map(genre => genre + ", ")}
                     changeView={() => this.props.changeView()}
                     imdbRating = {movie.imdb.rating}
                     imdbId = {movie.imdb.id}
                     //tomatoRating = {movie.tomato.rating}
              />
          )}
        </div>
      </div>
    );
  }
}

export default MovieList;
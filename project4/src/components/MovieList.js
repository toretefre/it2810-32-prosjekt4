import React, { Component } from 'react';
import Movie from './Movie';
import './styles/MovieList.css';
import {inject, observer} from "mobx-react";
import ReplacementImage from "../assets/images/noimage.png";

@inject('movieStore')
@observer
class MovieList extends Component {


  //-----RENDER----------
  render() {
    return (
      <div id="movieList">

        <div id="movieListInner">
              {this.props.movieStore.movies.map(movie => {
                  return(
                      <Movie key={movie._id}
                             id={movie._id}
                             title={movie.title}
                             plot={movie.plot}
                             poster={(movie.poster === null || movie.poster === undefined) ? ReplacementImage : movie.poster}
                             genres={movie.genres.map(genre => genre + " ")}
                             changeView={() => this.props.changeView()}
                             imdbRating={movie.imdb.rating}
                             imdbId={movie.imdb.id}
                             userRating={movie.ratings !== undefined
                                 ? movie.ratings.reduce(function(a,b){return a+b;}) / movie.ratings.length
                                 : 0}
                             userRatingLength={movie.ratings !== undefined
                                 ? movie.ratings.length
                                 : 0}
                      />);
                  })
              }
        </div>
      </div>
    );
  }
}

export default MovieList;

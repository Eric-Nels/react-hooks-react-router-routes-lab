import React from "react";
import { movies } from "../data";


function Movies() {

  function handleMovies() {
    return movies.map((movie) => {
      return (
        <div key={movie.title}>
          <h2>Title: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, index) => {
             return <li key={index}>{genre}</li>
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {handleMovies()}
    </div>
  );
}

export default Movies;

import React from "react";
import { directors } from "../data";

function handleDirectors() {
  return directors.map((director) => {
    return (
      <div key={director.name}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie, index) => {
             return <li key={index}>{movie}</li>
            })}
        </ul>
    </div>
    )
  })
}

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {handleDirectors()}
  </div>;
}

export default Directors;

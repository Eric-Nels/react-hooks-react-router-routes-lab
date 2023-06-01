import React from "react";
import { actors } from "../data";

function handleActors() {
  return actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie, index) => {
             return <li key={index}>{movie}</li>
            })}
        </ul>
    </div>
    )
  })
}

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {handleActors()}
    </div>
  );
}

export default Actors;

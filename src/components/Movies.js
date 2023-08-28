import React from "react";
import { movies } from "../data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuid } from "uuid"

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
          <div key={uuid()} >
            <h3>Name: {movie.title}</h3>
            <p>Time: {movie.time}</p>
            <ul>Genres: {movie.genres.map((genre) => {
              return (
                <li key={uuid()} >{genre}</li>
              )
            })}</ul>
          </div>
        )
          
        
      })}
    </div>
  )
}

export default Movies;

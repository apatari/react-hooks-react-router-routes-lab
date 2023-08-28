import React from "react";
import { directors } from "../data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuid } from "uuid"

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(dir => {
        return (
          <div key={uuid()}>
            <h3>Name: {dir.name}</h3>
            <ul>
              {dir.movies.map(mov => {
                return ( <li key={uuid()}>{mov}</li> )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Directors;

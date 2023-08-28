import React from "react";
import { actors } from "../data";
import { v4 as uuid } from "uuid"

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div key={uuid()}>
            <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map(mov => {
              return (
                <li key={uuid()}>{mov}</li>
              )
            })}
          </ul>
          </div>
          
          
        )
      })}
    </div>
  )
}

export default Actors;

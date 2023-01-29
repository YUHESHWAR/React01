import { useState } from "react";
import { Counter } from "./Counter";

export function Movie({ movie }) {
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  const [toggle, setToggle] = useState(false);
  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt="Movie Poster" />
      <div className="movie-spec">
        <h2 className="movie-name">{movie.name}</h2>
        <p className="movie-rating" style={styles}>
          ⭐️{movie.rating}
        </p>
      </div>
      <button onClick={() => setToggle(!toggle)}>Toggle Summary</button>
      {toggle ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}

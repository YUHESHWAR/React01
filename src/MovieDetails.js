import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "./Context";

export default function MovieDetails() {
  const consumer = useContext(Context);
  const { id } = useParams();
  const movie = consumer.movieList[id - 1];
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  return (
    <div>
      <div sx={{ heigth: "min-content" }} className="">
        <img className="movie-poster" src={movie.poster} alt="Movie Poster" />

        <div className="movie-spec">
          <h2 className="movie-name">{movie.name} </h2>
          <p className="movie-rating" style={styles}>
            ⭐️ {movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>
    </div>
  );
}

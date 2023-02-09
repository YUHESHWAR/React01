import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Context from "./Context";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`https://63e0de2f65b57fe6064b3ed9.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((movie) => setMovie(movie));
  }, []);
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  return (
    <div>
      <iframe
        className="trailer-container"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-spec">
          <h2 className="movie-name">{movie.name} </h2>
          <p className="movie-rating" style={styles}>
            ⭐️ {movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          sx={{ marginTop: "20px" }}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

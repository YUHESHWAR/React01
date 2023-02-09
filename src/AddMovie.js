import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Context from "./Context";
import { useNavigate } from "react-router-dom";

export function AddMovie() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const addMovie = () => {
    const newMovie = { name, poster, rating, summary, trailer };
    fetch("https://63e0de2f65b57fe6064b3ed9.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-type": "application/json",
      },
    });
    navigate("/movies");
  };
  return (
    <div className="add-movie-form">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />
      <Button variant="contained" onClick={addMovie}>
        Add Movie
      </Button>
    </div>
  );
}

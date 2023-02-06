import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Context from "./Context";

export function AddMovie() {
  const consumer = useContext(Context);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const addMovie = () => {
    const newMovie = { name, poster, rating, summary };
    consumer.setMovieList([...consumer.movieList, newMovie]);
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
      <Button variant="contained" onClick={addMovie}>
        Add Movie
      </Button>
    </div>
  );
}

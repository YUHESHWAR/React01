import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch("https://63e0de2f65b57fe6064b3ed9.mockapi.io/movies")
      .then((data) => data.json())
      .then((movies) => setMovieList(movies));
  };
  useEffect(() => getMovies(), []);
  const deleteMovie = (id) => {
    fetch(`https://63e0de2f65b57fe6064b3ed9.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };
  return (
    <div className="movie-list">
      {movieList.map((mv, index) => (
        <Movie
          key={mv.id}
          movie={mv}
          id={mv.id}
          deleteButton={
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => deleteMovie(mv.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

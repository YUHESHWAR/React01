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
  const validateAdmin = () => {
    const val = prompt("enter the pasword");
    return val === "030303";
  };
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
              onClick={() =>
                validateAdmin()
                  ? deleteMovie(mv.id)
                  : window.alert(
                      "Only the alpha can delete the movies and looks like you aren't one"
                    )
              }
            >
              <DeleteIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

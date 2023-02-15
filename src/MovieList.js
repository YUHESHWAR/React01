import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function MovieList() {
  const navigate = useNavigate();
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
          updateButton={
            <IconButton
              sx={{ color: "#6200ea" }}
              aria-label="update"
              onClick={() =>
                validateAdmin()
                  ? navigate(`/movie/update/${mv.id}`)
                  : window.alert(
                      "Only the alpha can update the movies and looks like you aren't one"
                    )
              }
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

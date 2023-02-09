import { useState } from "react";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export function Movie({ movie, id, deleteButton }) {
  const navigate = useNavigate();
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  const [toggle, setToggle] = useState(true);
  return (
    <Card sx={{ heigth: "min-content" }} className="movie-container">
      <img className="movie-poster" src={movie.poster} alt="Movie Poster" />
      <CardContent>
        <div className="movie-spec">
          <h2 className="movie-name">
            {movie.name}{" "}
            <IconButton
              aria-label="Toggle Movie Description"
              color="primary"
              onClick={() => setToggle(!toggle)}
              sx={{ fontSize: "24px" }}
            >
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              aria-label="Movie Info"
              color="primary"
              onClick={() => navigate(`/movies/${id}`)}
              sx={{ fontSize: "24px" }}
            >
              <InfoIcon />
            </IconButton>
          </h2>
          <p className="movie-rating" style={styles}>
            ⭐️ {movie.rating}
          </p>
        </div>
        {toggle ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
        {deleteButton}
      </CardActions>
    </Card>
  );
}

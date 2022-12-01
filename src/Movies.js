import { useState } from "react";
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Movies({ movie }) {
    const rating_style = {
        color: movie.rating >= 8 ? "green" : "red"
    };
    const [toggle, changeToggle] = useState(false);
    return (
        <Card sx={{ height: "min-content" }} className='movie-container'>
            <img src={movie.poster} alt="" className="movie-poster" />
            <CardContent>
                <div className="movie-spec">
                    <h2 className="movie-name">{movie.name}
                        <IconButton aria-label="like" color="primary" onClick={() => changeToggle(!toggle)}>
                            {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    </h2>
                    <p style={rating_style} className="movie-rating">⭐{movie.rating}</p>
                </div>

                {toggle ? <p className="movie-summary">{movie.summary}</p> : null}
            </CardContent>

            <CardActions>
                <Counter />
            </CardActions>

        </Card>
    )
}

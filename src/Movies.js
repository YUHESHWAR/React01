import { useState } from "react";
import { Counter } from './Counter';

export function Movies({ movie }) {
    const rating_style = {
        color: movie.rating >= 8 ? "green" : "red"
    };
    const [toggle, changeToggle] = useState(false);
    return <div className='movie-container'>
        <img src={movie.poster} alt="" className="movie-poster" />
        <div className="movie-spec">
            <h2 className="movie-name">{movie.name}</h2>
            <p style={rating_style} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <button onClick={() => changeToggle(!toggle)}>toggle Summary</button>
        {toggle ? <p className="movie-summary">{movie.summary}</p> : null}
        <Counter />
    </div>;
}

import { Movie } from "./Movie";

export function MovieList({ movieList }) {
  return (
    <div className="movie-list">
      {movieList.map((mv, index) => (
        <Movie key={index} movie={mv} />
      ))}
    </div>
  );
}

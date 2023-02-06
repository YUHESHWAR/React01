import { useContext } from "react";
import Context from "./Context";
import { Movie } from "./Movie";

export function MovieList() {
  const consumer = useContext(Context);
  return (
    <div className="movie-list">
      {consumer.movieList.map((mv, index) => (
        <Movie key={index} movie={mv} id={mv.id} />
      ))}
    </div>
  );
}

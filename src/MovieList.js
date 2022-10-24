import { Movies } from './Movies';

export function MovieList({ movieList }) {

    return <div className='movie-list'>
        {movieList.map((mv, index) => (
            <Movies key={index} movie={mv} />
        ))}
    </div>;
}

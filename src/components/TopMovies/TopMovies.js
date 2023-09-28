import { useLocation } from 'react-router-dom';
import { MoviesLink, MoviesName } from './TopMovies.styled';

const TopMovies = ({ movies = [] }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ title, id }) => (
        <MoviesName key={id}>
          <MoviesLink to={`movies/${id}`} state={{ from: location }}>
            {title}
          </MoviesLink>
        </MoviesName>
      ))}
    </ul>
  );
};

export default TopMovies;

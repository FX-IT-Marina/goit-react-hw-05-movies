import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import API from 'services/API';
import {
  FormMovie,
  Input,
  Button,
  LinkMovie,
  ListMovie,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('name') ?? '';
  const [movie, setMovie] = useState(query);
  const [searchMovie, setSearchMovie] = useState([]);

  const fetchMovies = async () => {
    try {
      const movies = await API.search(movie);
      setSearchMovie(movies);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    setSearchParams({ name: movie });
    await fetchMovies();
  };

  return (
    <main>
      <FormMovie onSubmit={onSubmit}>
        <Input
          type="text"
          value={movie}
          onChange={e => setMovie(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </FormMovie>
      {searchMovie && searchMovie.length > 0 && (
        <ul>
          {searchMovie.map(({ id, title }) => (
            <ListMovie key={id}>
              <LinkMovie to={`${id}`} state={{ from: location }}>
                {title}
              </LinkMovie>
            </ListMovie>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies;

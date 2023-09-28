import { useEffect, useState, Suspense } from 'react';
import API from 'services/API';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useRef } from 'react';
import {
  Main,
  NameTitle,
  Name,
  OverviewTitle,
  GenresTitle,
  Information,
  LinkInformation,
  LinkBack,
  Wrapper,
  Container,
  Genres,
  InformationList,
} from './MoviesDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [details, setDetails] = useState({});
  const [status, setStatus] = useState('fetch');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await API.details(movieId);
        setDetails(details);
        setStatus('finish');
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = details;
  const score = Math.trunc(vote_average * 10);
  const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    status === 'finish' && (
      <Main>
        <Container>
          <div>
            <LinkBack to={backLinkLocationRef.current}>Go back</LinkBack>
            <div>
              <Wrapper src={img} width="160" alt="" />
            </div>
          </div>
          <div>
            <NameTitle>{title}</NameTitle>
            <Name>User Score: {score}%</Name>
            <OverviewTitle>Overview</OverviewTitle>
            <Name>{overview}</Name>
            <GenresTitle>Genres</GenresTitle>
            <Genres>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </Genres>
          </div>
        </Container>
        <Information>Additional information</Information>
        <InformationList>
          <li>
            <LinkInformation to="cast">Cast</LinkInformation>
          </li>
          <li>
            <LinkInformation to="reviews">Reviews</LinkInformation>
          </li>
        </InformationList>
        <Suspense fallback={<div>Loading.....</div>}>
          <Outlet />
        </Suspense>
      </Main>
    )
  );
};

export default MovieDetails;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/API';
import Character from 'components/Character/Character';
import { CastName } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('fetch');

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castContent = await API.credits(movieId);
        setCast(castContent);
        setStatus('finish');
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);
  console.log(movieId);
  return (
    status === 'finish' && (
      <div>
        {cast.length > 0 ? (
          <CastName>
            {cast.map(({ character, name, id, profile_path }) => (
              <li key={id}>
                <Character
                  name={name}
                  character={character}
                  profile_path={profile_path}
                />
              </li>
            ))}
          </CastName>
        ) : (
          <p>We don't have cast for this movie</p>
        )}
      </div>
    )
  );
};

export default Cast;

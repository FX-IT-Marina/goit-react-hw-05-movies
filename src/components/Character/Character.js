import PropTypes from 'prop-types';

const Character = ({ name = '', character = '', profile_path = '' }) => {
  const img = `https://image.tmdb.org/t/p/w500${profile_path}`;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultImg
        }
        alt={name}
        height="150"
        width="100"
      />

      <p>{name}</p>
      <p>{character}</p>
    </div>
  );
};

export default Character;

Character.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};

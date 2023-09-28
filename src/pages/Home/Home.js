import { useEffect, useState } from 'react';
import API from 'services/API';
import TopMovies from 'components/TopMovies/TopMovies';
import { MainList } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const trendMovies = await API.trand();
        setMovies(trendMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrend();
  }, []);

  return (
    <MainList>
      <h1>Trending today</h1>
      <TopMovies movies={movies} />
    </MainList>
  );
};

export default Home;

import { fetchPopularMovie } from 'services/API';
import { Container } from 'utils/Container';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MoviesItem } from 'pages/MovieItem/MovieItem';
import { MovieTitle } from './Homepage.styled';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');

    fetchPopularMovie()
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch(error => {
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (status === 'idle' || isLoading) {
    return isLoading && <Loader isLoading={isLoading} />;
  }

  if (status === 'error') {
    return <>There was an error</>;
  }

  return (
    <>
      <Container>
        <MovieTitle>Top-movies of this week</MovieTitle>
        <MoviesItem movies={movies} />
      </Container>
    </>
  );
};

export default Homepage;

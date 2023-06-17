import { fetchSearchMovie } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from 'utils/Container';
import { MoviesList } from 'pages/MovieList/MovieList';

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleFormSubmit = inputValue => {
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');

    if (query === null) {
      setIsLoading(false);
      return;
    }
    fetchSearchMovie(query)
      .then(({ data }) => setMovies(data.results))

      .catch(error => {
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  if (status === 'idle' || isLoading) {
    return isLoading && <Loader isLoading={isLoading} />;
  }

  if (status === 'error') {
    return <>There was an error</>;
  }
  return (
    <>
      <Container>
        <div style={{ minHeight: 400 }}>
          <SearchForm onSubmit={handleFormSubmit} />
          <MoviesList movies={movies} />
        </div>
      </Container>
    </>
  );
};

export default Movie;

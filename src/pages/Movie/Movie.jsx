import { fetchSearchMovie } from 'components/API/API';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import {
  MovieImage,
  MovieItem,
  MovieLink,
  MovieList,
  MovieText,
} from 'pages/Homepage/Homepage.styled';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container } from 'utils/Container';

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleFormSubmit = inputValue => {
    setSearchParams({ query: inputValue });
  };

  const location = useLocation();

  const currentPage =
    location.pathname === '/' ? '/movies/:movieId' : location.pathname;

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
          <MovieList>
            {movies.map(film => (
              <MovieItem key={film.id}>
                <MovieLink
                  to={`${currentPage}/${film.id}`}
                  state={{ from: location }}
                >
                  <MovieImage
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`}
                    alt={film.title || film.name}
                    width="180"
                    height="250"
                  />
                  <MovieText>
                    <strong>{film.title || film.name}</strong>
                  </MovieText>
                </MovieLink>
              </MovieItem>
            ))}
          </MovieList>
        </div>
      </Container>
    </>
  );
};

export default Movie;

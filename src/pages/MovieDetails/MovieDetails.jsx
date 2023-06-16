import { fetchMovieDetails } from 'components/API/API';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Container } from 'utils/Container';
import {
  MovieCardWrap,
  MovieCardInfoWrap,
  MovieDetailsList,
  MovieTitle,
  MovieText,
  MovieTextInfo,
  MovieTitleOverview,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { PAGE_NAMES } from 'components/router/paths';
import { MovieImage } from 'pages/Homepage/Homepage.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');

    fetchMovieDetails(movieId)
      .then(({ data }) => {
        setMovie(data);
        setStatus('fulfilled');
      })
      .catch(error => {
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (status === 'idle' || isLoading) {
    return isLoading && <Loader isLoading={isLoading} />;
  }

  if (status === 'error') {
    return <>There was an error</>;
  }

  return (
    <>
      <Container>
        <GoBackBtn path={location?.state?.from ?? '/'} />
        <MovieCardWrap>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt={movie.original_title}
            width="300"
            height="450"
          />
          <MovieCardInfoWrap>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieText>
              User Score:{' '}
              {movie.vote_average
                ? Math.fround(movie.vote_average * 10).toFixed(0)
                : ''}
              %
            </MovieText>
            <MovieTitleOverview>Overview</MovieTitleOverview>
            <MovieText> {movie.overview}</MovieText>
            <MovieTitleOverview>Genres</MovieTitleOverview>
            <MovieText>
              {movie.genres
                ? movie.genres.map(item => item.name).join(' ')
                : ''}
            </MovieText>
            <MovieTextInfo>Additional information</MovieTextInfo>
            <MovieDetailsList>
              <li>
                <Link to={PAGE_NAMES.cast} state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={PAGE_NAMES.reviews} state={location.state}>
                  Reviews
                </Link>
              </li>
            </MovieDetailsList>
          </MovieCardInfoWrap>
        </MovieCardWrap>

        <Outlet />
      </Container>
    </>
  );
};

export default MovieDetails;

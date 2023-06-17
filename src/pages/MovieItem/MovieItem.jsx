import {
  MovieList,
  MovieItem,
  MovieLink,
  MovieText,
  MovieImage,
} from 'pages/Homepage/Homepage.styled';

const defaultImg =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

export const MoviesItem = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(film => (
        <MovieItem key={film.id}>
          <MovieLink to={`movies/${film.id}`}>
            <MovieImage
              src={
                film.poster_path
                  ? 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' +
                    film.poster_path
                  : defaultImg
              }
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
  );
};

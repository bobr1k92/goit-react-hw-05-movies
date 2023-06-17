import { fetchMovieCredits } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastListImg,
  CastListItem,
  CastListText,
} from './Cast.styled';
import PropTypes from 'prop-types';

const defaultImg =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCredits(movieId)
      .then(res => setCast(res.data.cast))
      .catch(error => {
        console.log('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <CastList>
          {cast.map(cast => {
            return (
              <CastListItem key={cast.id}>
                <CastListImg
                  width={100}
                  src={
                    cast.profile_path
                      ? 'https://image.tmdb.org/t/p/w500' + cast.profile_path
                      : defaultImg
                  }
                  alt={cast.name}
                />
                <CastListText>{cast.name}</CastListText>
                <CastListText>Character: {cast.character}</CastListText>
              </CastListItem>
            );
          })}
        </CastList>
      </div>
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;

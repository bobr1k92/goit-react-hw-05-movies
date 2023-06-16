import { fetchMovieCredits } from 'components/API/API';
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
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${cast.profile_path}`}
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

import { fetchMovieReviews } from 'components/API/API';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsText } from './Reviews.styled';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(res => setReviews(res.data.results))
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
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <ReviewsText>
                  <strong>Author: {review.author}</strong>
                </ReviewsText>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;

import { Link } from 'react-router-dom';
import { Button } from './GoBackBtn.styled';
import PropTypes, { oneOfType } from 'prop-types';

export const GoBackBtn = ({ path }) => {
  return (
    <Link to={path}>
      <Button>Go back</Button>
    </Link>
  );
};

GoBackBtn.propTypes = {
  path: oneOfType([PropTypes.string, PropTypes.object]),
};

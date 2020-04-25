import React from 'react';
import PropTypes from 'prop-types';

const MovieFinderCard = ({ name }) => (
  <div>
    {name}
  </div>
);

MovieFinderCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MovieFinderCard;

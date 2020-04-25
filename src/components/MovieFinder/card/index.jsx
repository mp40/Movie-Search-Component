import React from 'react';
import PropTypes from 'prop-types';

import mediaTypeText from './data';

import './styles.css';

const url = 'https://image.tmdb.org/t/p/w200';

const MovieFinderCard = ({
  name, imagePath, mediaType, date, overview,
}) => (
  <div className="movieFinderCard">
    <img src={`${url}${imagePath}`} alt={name} />
    <div>
      <p>{name}</p>
      <p>
        {mediaTypeText[mediaType]}
        {date}
      </p>
      <p>{overview}</p>
    </div>
  </div>
);

MovieFinderCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  overview: PropTypes.string.isRequired,
};

MovieFinderCard.defaultProps = {
  date: false,
};

export default MovieFinderCard;

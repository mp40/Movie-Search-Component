import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../Image';

import mediaTypeText from './data';

import './styles.css';

const url = 'https://image.tmdb.org/t/p/w200';


const MovieFinderCard = ({
  name, imagePath, mediaType, date, overview, gender, voteAverage,
}) => {
  const getYear = () => date.substring(0, 4);

  const getTypeDetails = () => {
    if (gender) {
      return gender === 1 ? 'Gender: Female' : 'Gender: Male';
    }
    return date.replace(/-/g, '/');
  };

  return (
    <div className="movieFinderCard">
      <Image alt={name} path={`${url}${imagePath}`} />
      <div>
        <p>
          {name}
          {date && `(${getYear()})`}
        </p>
        <p>
          {mediaTypeText[mediaType]}
          {getTypeDetails()}
        </p>
        <p>{overview}</p>
        <p>{voteAverage && `User Score: ${voteAverage * 10}%`}</p>
      </div>
    </div>
  );
};

MovieFinderCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  overview: PropTypes.string.isRequired,
  gender: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  voteAverage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
};

MovieFinderCard.defaultProps = {
  date: false,
  gender: false,
  voteAverage: false,
};

export default MovieFinderCard;

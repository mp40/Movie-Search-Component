import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../Image';

import { mediaTypeText, mediaTypeDateText } from './data';

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
    return `${mediaTypeDateText[mediaType]} ${date.replace(/-/g, '/')}`;
  };

  return (
    <div className="movieFinderCardContainer">
      <Image alt={name} path={`${url}${imagePath}`} />
      <div className="movieFinderCardDetails">
        <h1>
          <span>{name}</span>
          <span className="fade midWeight">
            {date && ` (${getYear()})`}
          </span>
        </h1>
        <h2 className="midWeight">
          <span>{mediaTypeText[mediaType]}</span>
          <span className="fade">{getTypeDetails()}</span>
        </h2>
        <p className="clamp">{overview}</p>
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

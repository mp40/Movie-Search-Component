import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';
import Rating from '../Rating';
import Trailer from '../Trailer';

import { mediaTypeText, mediaTypeDateText } from './data';

import { API_IMAGE_URL } from '../../constants';

import './styles.css';

const MovieFinderCard = ({
  name,
  imagePath,
  mediaType,
  date,
  overview,
  gender,
  voteAverage,
  trailers,
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
      <Image alt={name} path={`${API_IMAGE_URL}${imagePath}`} thumbnail />
      <div className="movieFinderCardDetails">
        <h1>
          <span>{name}</span>
          <span>{date && ` (${getYear()})`}</span>
        </h1>
        <h2>
          <span>{mediaTypeText[mediaType]}</span>
          <span>{getTypeDetails()}</span>
        </h2>
        <p className="clamp">{overview}</p>
        {mediaType !== 'person' && (
          <>
            <Rating ratingText="User Score" rating={voteAverage * 10} />
            <Trailer trailer={trailers[0]} />
          </>
        )}
      </div>
    </div>
  );
};

MovieFinderCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  overview: PropTypes.string.isRequired,
  gender: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  voteAverage: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  trailers: PropTypes.arrayOf(PropTypes.object),
};

MovieFinderCard.defaultProps = {
  date: false,
  gender: false,
  voteAverage: false,
  trailers: [],
};

export default MovieFinderCard;

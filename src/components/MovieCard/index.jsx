import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from '../Thumbnail';
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

    if (!date) {
      return '';
    }

    return `${mediaTypeDateText[mediaType]} ${date.replace(/-/g, '/')}`;
  };

  return (
    <div className="movieFinderCardContainer">
      <Thumbnail
        alt={name}
        path={imagePath ? `${API_IMAGE_URL}${imagePath}` : false}
      />
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
  imagePath: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mediaType: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  overview: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  gender: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  voteAverage: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  trailers: PropTypes.arrayOf(PropTypes.object),
};

MovieFinderCard.defaultProps = {
  imagePath: false,
  date: false,
  overview: false,
  gender: false,
  voteAverage: false,
  trailers: [],
};

export default MovieFinderCard;

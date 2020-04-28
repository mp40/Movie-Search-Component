import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import Image from '../../Image';
import UserScore from './UserScore';
import Trailer from './Trailer';

import { mediaTypeText, mediaTypeDateText } from './data';

import './styles.css';

const url = 'https://image.tmdb.org/t/p/w200';

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
      <Image alt={name} path={`${url}${imagePath}`} thumbnail />
      <div className="movieFinderCardDetails">
        <h1>
          <span>{name}</span>
          <span>{date && ` (${getYear()})`}</span>
        </h1>
        <h2>
          <span>{mediaTypeText[mediaType]}</span>
          <span>{getTypeDetails()}</span>
        </h2>
        <p className="cardText clamp">{overview}</p>
        {mediaType !== 'person' && (
          <>
            <UserScore voteAverage={voteAverage} />
            <Trailer trailers={trailers} />
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
};

MovieFinderCard.defaultProps = {
  date: false,
  gender: false,
  voteAverage: false,
};

export default MovieFinderCard;

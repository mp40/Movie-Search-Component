import React from 'react';
import PropTypes from 'prop-types';

import PercentBar from '../PercentBar';

import './styles.css';

const Rating = ({ ratingText, rating }) => {
  const getScore = () => {
    if (rating) {
      return (
        <span>{`${rating} %`}</span>
      );
    }
    return (
      <span>Not rated</span>
    );
  };

  return (
    <div className="rating">
      <p>
        <span>{`${ratingText}:`}</span>
        <span>{getScore()}</span>
      </p>
      <PercentBar percent={rating} />
    </div>
  );
};

Rating.propTypes = {
  ratingText: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

export default Rating;

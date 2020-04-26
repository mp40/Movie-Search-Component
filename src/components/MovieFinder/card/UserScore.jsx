import React from 'react';
import PropTypes from 'prop-types';

import PercentBar from '../../PercentBar';

import './styles.css';

const UserScore = ({ voteAverage }) => {
  const getScore = () => {
    if (voteAverage) {
      return (
        <span>{`${voteAverage * 10} %`}</span>
      );
    }
    return (
      <span>Not rated</span>
    );
  };

  return (
    <div className="userScore">
      <p>
        <span className="cardText">User Score:</span>
        <span>{getScore()}</span>
      </p>
      <PercentBar percent={voteAverage * 10} />
    </div>
  );
};

UserScore.propTypes = {
  voteAverage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

export default UserScore;

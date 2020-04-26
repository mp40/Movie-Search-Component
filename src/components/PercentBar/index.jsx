import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const PercentBar = ({ percent }) => {
  const getClassName = () => {
    if (percent < 40) {
      return 'red';
    }
    if (percent < 70) {
      return 'yellow';
    }
    return 'green';
  };

  return (
    <div className="percentContainer">
      <div className="percentBar" />
      <div className={`percentage ${getClassName()}`} style={{ width: `${percent / 10}em` }} />
    </div>
  );
};

PercentBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default PercentBar;

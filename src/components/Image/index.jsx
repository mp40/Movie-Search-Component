import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Image = ({ alt, path }) => (
  <div className="image">
    <img src={path} alt={alt} />
  </div>
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};


export default Image;

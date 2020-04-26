import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Image = ({ alt, path }) => (
  <img src={path} alt={alt} className="image" />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};


export default Image;

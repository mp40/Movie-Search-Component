import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Image = ({ alt, path, thumbnail }) => (
  <img src={path} alt={alt} className={thumbnail ? 'thumbnail' : 'image'} />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  thumbnail: PropTypes.bool,
};

Image.defaultProps = {
  thumbnail: false,
};

export default Image;

import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Image = ({ alt, path, thumbnail }) => {
  const styles = thumbnail ? 'thumbnail' : 'image';

  if (path === false) {
    return (
      <div className={`${styles}  placeholder`} />
    );
  }

  return (
    <img src={path} alt={alt} className={styles} />
  );
};


Image.propTypes = {
  alt: PropTypes.string.isRequired,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  thumbnail: PropTypes.bool,
};

Image.defaultProps = {
  thumbnail: false,
};

export default Image;

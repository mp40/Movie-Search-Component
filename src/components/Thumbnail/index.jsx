import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Thumbnail = ({ alt, path }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {(!loaded || !path) && (
      <div className="thumbnail  placeholder" />
      )}
      {path && (
      <img
        src={path}
        alt={alt}
        className={`thumbnail ${loaded ? 'loaded' : 'loading'}`}
        onLoad={() => setLoaded(true)}
      />
      )}
    </>
  );
};


Thumbnail.propTypes = {
  alt: PropTypes.string.isRequired,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default Thumbnail;

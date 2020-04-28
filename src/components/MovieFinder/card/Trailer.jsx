import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Play } from '../../../assets/Play.svg';

import './styles.css';

const Trailer = ({ trailers }) => {
  const [showTrailer, toggleTrailer] = useState(false);

  return (
    <div className="trailer">
      <button type="button" onClick={() => toggleTrailer(true)}>
        <Play />
        <span>Play Trailer</span>
      </button>
      {showTrailer && (
      <iframe
        title={trailers[0].key}
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
      />
      )}

    </div>
  );
};

Trailer.propTypes = {
  trailers: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]).isRequired,
};

export default Trailer;

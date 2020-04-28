import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import { ReactComponent as Play } from '../../../assets/Play.svg';

import './styles.css';

const Trailer = ({ trailer }) => {
  const [showTrailer, toggleTrailer] = useState(false);

  const handleToggleOn = () => {
    if (!trailer) {
      return;
    }
    toggleTrailer(true);
  };

  const getButtonText = () => {
    if (!trailer) {
      return 'Trailer Unavailable';
    }
    return 'Play Trailer';
  };

  return (
    <div className="trailer">
      <button
        type="button"
        className={`${trailer ? 'trailerAvailable' : 'trailerUnavailable'}`}
        onClick={() => handleToggleOn()}
      >
        <Play />
        <span>{getButtonText()}</span>
      </button>
      {showTrailer && (
        <YouTube
          videoId={trailer.key}
          opts={{ playerVars: { autoplay: 1 } }}
          onEnd={() => toggleTrailer(false)}
        />
      )}
    </div>
  );
};

Trailer.propTypes = {
  trailer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]),
};

Trailer.defaultProps = {
  trailer: false,
};

export default Trailer;

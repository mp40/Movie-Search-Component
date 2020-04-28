import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import { ReactComponent as Play } from '../../../assets/Play.svg';

import './styles.css';

const Trailer = ({ trailers }) => {
  const [showTrailer, toggleTrailer] = useState(false);
  const trailer = trailers[0];

  return (
    <div className="trailer">
      <button type="button" onClick={() => toggleTrailer(true)}>
        <Play />
        <span>Play Trailer</span>
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
  trailers: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]).isRequired,
};

export default Trailer;

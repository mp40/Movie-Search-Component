import React from 'react';

import MovieFinderSearch from './search';

const MovieFinder = () => (
  <div>
    <h1>The Movie Finder Widget</h1>
    <MovieFinderSearch handleSearch={() => {}} handleFilterChange={() => {}} />
  </div>
);

export default MovieFinder;

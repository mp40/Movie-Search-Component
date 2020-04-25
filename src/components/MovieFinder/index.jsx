import React, { useState } from 'react';

import MovieFinderSearch from './search';
import MovieFinderCard from './card';

import output from '../../fixtures/output.json';

const MovieFinder = () => {
  const [searchResults, updateSearchResults] = useState(output);
  const [filteredResults, updateFilteredResults] = useState(output);

  const handleFilterChange = (filterCategory) => {
    if (filterCategory === 'all') {
      updateFilteredResults(searchResults);
    } else {
      updateFilteredResults(() => searchResults
        .filter((item) => item.mediaType === filterCategory));
    }
  };


  return (
    <div>
      <h1>The Movie Finder Widget</h1>
      <MovieFinderSearch
        handleSearch={() => {}}
        handleFilterChange={handleFilterChange}
      />
      {filteredResults.map((item) => (
        <MovieFinderCard
          key={item.id}
          name={item.name}
          imagePath={item.imagePath}
          mediaType={item.mediaType}
          date={item.date}
          overview={item.overview}
        />
      ))}
    </div>
  );
};

export default MovieFinder;

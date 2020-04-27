import React, { useState } from 'react';

import MovieFinderSearch from './search';
import MovieFinderCard from './card';

import { ReactComponent as Logo } from '../../assets/Logo.svg';

import staticResults from '../../fixtures/staticResults.json';

import './styles.css';

const MovieFinder = () => {
  const [searchResults, updateSearchResults] = useState(staticResults);
  const [filteredResults, updateFilteredResults] = useState(staticResults);

  const handleFilterChange = (filterCategory) => {
    if (filterCategory === 'all') {
      updateFilteredResults(searchResults);
    } else {
      updateFilteredResults(() => searchResults
        .filter((item) => item.mediaType === filterCategory));
    }
  };


  return (
    <div className="movieFinderContainer">
      <div className="movieFinderHeader">
        <Logo />
      </div>
      <div className="movieFinderBody">


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
            gender={item.gender}
            voteAverage={item.voteAverage}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieFinder;

import React, { useState } from 'react';

import MovieFinderSearch from './search';
import MovieFinderCard from './card';

import Image from '../Image';

import Logo from '../../assets/Logo.svg';

import output from '../../fixtures/output.json';

import './styles.css';

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
    <div className="movieFinderContainer">
      <div className="movieFinderHeader">
        <Image alt="logo" path={Logo} />
        {/* <img src={Logo} alt="Logo" /> */}
      </div>
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
  );
};

export default MovieFinder;

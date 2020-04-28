import React, { useState, useEffect } from 'react';

import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import ToggleButtons from '../ToggleButtons';

import { ReactComponent as Logo } from '../../assets/Logo.svg';

import { getFilteredTrending, fetchTrending } from '../../fetch';

import { defaultSearchText, filterCategories } from './data';

import staticResults from '../../fixtures/staticResults.json';

import './styles.css';

const MovieFinder = () => {
  const [trendingResults, updateTrendingResults] = useState(null);
  const [searchResults, updateSearchResults] = useState(null);
  const [media, updateMedia] = useState(null);

  useEffect(() => {
    // getFilteredTrending().then((data) => {
    //   if (trendingResults) {
    //     return;
    //   }
    //   updateTrendingResults(data);
    //   updateMedia(data);
    // });
    if (trendingResults) {
      return;
    }
    updateTrendingResults(staticResults);
    updateSearchResults(staticResults);
    updateMedia(staticResults);
  }, [trendingResults]);

  const handleCategoryToggle = (filterCategory) => {
    if (filterCategory === 'all') {
      updateMedia(searchResults);
    } else {
      updateMedia(() =>
        searchResults.filter((item) => item.mediaType === filterCategory)
      );
    }
  };

  return (
    <div className="movieFinderContainer">
      <div className="movieFinderHeader">
        <Logo />
      </div>
      <div className="movieFinderBody">
        <SearchBar defaultText={defaultSearchText} handleSearch={() => {}} />
        <ToggleButtons
          categories={filterCategories}
          handleCategoryToggle={handleCategoryToggle}
        />
        {media &&
          media.map((item) => (
            <MovieCard
              key={item.id}
              name={item.name}
              imagePath={item.imagePath}
              mediaType={item.mediaType}
              date={item.date}
              overview={item.overview}
              gender={item.gender}
              voteAverage={item.voteAverage}
              trailers={item.trailers}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieFinder;

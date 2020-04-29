import React, { useState, useEffect } from 'react';

import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import ToggleButtons from '../ToggleButtons';

import { ReactComponent as Logo } from '../../assets/Logo.svg';

import {
  getFilteredTrending,
  fetchTrending,
  getFilteredResults,
} from '../../fetch';

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
    updateMedia(staticResults);
  }, [trendingResults]);

  const handleSearch = (query) => {
    getFilteredResults(query).then((data) => {
      updateSearchResults(data);
      updateMedia(data);
    });
  };

  const handleCategoryToggle = (filterCategory) => {
    const data = searchResults || trendingResults;
    if (filterCategory === 'all') {
      updateMedia(data);
    } else {
      updateMedia(() =>
        data.filter((item) => item.mediaType === filterCategory)
      );
    }
  };

  const getResultsText = () => {
    const { length } = media;
    const suffix = length === 1 ? '' : 's';
    return `${length} result${suffix} found`;
  };

  return (
    <div className="movieFinderContainer">
      <div className="movieFinderHeader">
        <Logo />
      </div>
      <div className="movieFinderBody">
        <SearchBar
          defaultText={defaultSearchText}
          handleSearch={handleSearch}
        />
        <ToggleButtons
          categories={filterCategories}
          handleCategoryToggle={handleCategoryToggle}
        />
        {searchResults && <p>{getResultsText()}</p>}
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

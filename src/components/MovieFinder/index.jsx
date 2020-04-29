import React, { useState, useEffect } from 'react';

import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import ToggleButtons from '../ToggleButtons';

import { ReactComponent as Logo } from '../../assets/Logo.svg';

import { getFilteredTrending, getFilteredResults } from '../../fetch';

import { defaultSearchText, filterCategories } from './data';

import './styles.css';

const MovieFinder = () => {
  const [trendingResults, setTrendingResults] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [filter, setFilter] = useState('all');
  const [media, setMedia] = useState(null);

  useEffect(() => {
    if (trendingResults) {
      return;
    }

    getFilteredTrending().then((data) => {
      setTrendingResults(data);
      setMedia(data);
    });
  }, [trendingResults]);

  const handleSearch = (query) => {
    getFilteredResults(query).then((data) => {
      setSearchResults(data);
      setMedia(data);
    });
  };

  const handleReset = () => {
    setSearchResults(null);
    setMedia(trendingResults);
  };

  const handleCategoryToggle = (filterCategory) => {
    setFilter(filterCategory);
  };

  const filterMediaByCategory = (data) => {
    if (filter === 'all') {
      return data;
    }
    return data.filter((item) => item.mediaType === filter);
  };

  const filteredMedia = filterMediaByCategory(media);

  const getResultsText = () => {
    const { length } = filteredMedia;
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
          handleReset={handleReset}
        />
        <ToggleButtons
          value={filter}
          categories={filterCategories}
          handleCategoryToggle={handleCategoryToggle}
        />
        {searchResults && <p>{getResultsText()}</p>}
        {media &&
          filteredMedia.map((item) => (
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

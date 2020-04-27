import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterButtons from './FilterButtons';
import Image from '../../Image';

import searchIcon from '../../../assets/searchIcon.svg';

import './styles.css';

const defaultText = 'Search for movies, tv shows or peoples...';

const MovieFinderSearch = ({ handleSearch, handleFilterChange }) => {
  const [value, updateValue] = useState('');

  return (
    <div className="formContainer">
      <form onSubmit={() => handleSearch()}>
        <div className="searchBar">
          <div className={`inputContainer ${value ? 'hasValue' : 'noValue'}`}>
            <Image path={searchIcon} alt="search" />
            <input
              type="text"
              value={value}
              placeholder={defaultText}
              onChange={(event) => updateValue(event.target.value)}
            />
            {value && <button type="button" onClick={() => updateValue('')}>Clear</button>}
          </div>
          <input type="submit" value="Search" />
        </div>
      </form>
      <FilterButtons handleFilterChange={handleFilterChange} />
    </div>
  );
};

MovieFinderSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default MovieFinderSearch;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../../assets/searchIcon.svg';

import './styles.css';

const SearchBar = ({ defaultText, handleSearch, handleReset }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (value) => {
    setQuery(value);

    if (value === '') {
      return;
    }

    handleSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    handleReset();
  };

  return (
    <form className="searchBarForm">
      <div className="searchBar">
        <div className={`inputContainer ${query ? 'hasValue' : 'noValue'}`}>
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            value={query}
            placeholder={defaultText}
            onChange={(event) => handleSubmit(event.target.value)}
          />
          {query && (
            <button type="button" onClick={() => handleClear()}>
              Clear
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  defaultText: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  defaultText: 'Search...',
};

export default SearchBar;

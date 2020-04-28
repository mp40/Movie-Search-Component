import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

import searchIcon from '../../assets/searchIcon.svg';

import './styles.css';

const SearchBar = ({ defaultText, handleSearch }) => {
  const [value, updateValue] = useState('');

  return (
    <form className="searchBarForm" onSubmit={() => handleSearch()}>
      <div className="searchBar">
        <div className={`inputContainer ${value ? 'hasValue' : 'noValue'}`}>
          <Image path={searchIcon} alt="search" />
          <input
            type="text"
            value={value}
            placeholder={defaultText}
            onChange={(event) => updateValue(event.target.value)}
          />
          {value && (
          <button type="button" onClick={() => updateValue('')}>
            Clear
          </button>
          )}
        </div>
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  defaultText: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  defaultText: 'Search...',
};

export default SearchBar;

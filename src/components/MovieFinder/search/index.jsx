import React, { useState } from 'react';
import PropTypes from 'prop-types';

import filterCategories from './data';

const MovieFinderSearch = ({ handleSearch, handleFilterChange }) => {
  const [value, updateValue] = useState('');

  return (
    <div>
      <form onSubmit={() => handleSearch()}>
        <input
          type="text"
          value={value}
          onChange={(event) => updateValue(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {filterCategories.map((category) => (
        <button
          type="button"
          key={category.key}
          onClick={() => handleFilterChange(category.key)}
        >
          {category.value}
        </button>
      ))}
    </div>
  );
};

MovieFinderSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default MovieFinderSearch;

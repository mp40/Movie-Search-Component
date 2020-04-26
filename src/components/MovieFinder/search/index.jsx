import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterButtons from './FilterButtons';

import './styles.css';

const MovieFinderSearch = ({ handleSearch, handleFilterChange }) => {
  const [value, updateValue] = useState('');

  return (
    <div className="formContainer">
      <form onSubmit={() => handleSearch()}>
        <input
          type="text"
          value={value}
          onChange={(event) => updateValue(event.target.value)}
        />
        <input type="submit" value="Search" />
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

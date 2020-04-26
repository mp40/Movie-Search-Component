import React, { useState } from 'react';
import PropTypes from 'prop-types';

import filterCategories from './data';

import './styles.css';

const FilterButtons = ({ handleFilterChange }) => {
  const [activeFilter, updateActiveFilter] = useState('all');

  const handleOnClick = (category) => {
    updateActiveFilter(category);
    handleFilterChange(category);
  };

  return (
    <>
      {filterCategories.map((category) => (
        <button
          type="button"
          key={category.key}
          className={`filterButton ${category.key === activeFilter ? 'selected' : 'unselected'}`}
          onClick={() => handleOnClick(category.key)}
        >
          {category.value}
        </button>
      ))}
    </>
  );
};

FilterButtons.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default FilterButtons;

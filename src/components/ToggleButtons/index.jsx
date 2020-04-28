import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ToggleButtons = ({ categories, handleCategoryToggle }) => {
  const [activeCategory, updateActiveCategory] = useState('all');

  const handleOnClick = (category) => {
    updateActiveCategory(category);
    handleCategoryToggle(category);
  };

  return (
    <>
      {categories.map((category) => (
        <button
          type="button"
          key={category.key}
          className={`toggleButton ${
            category.key === activeCategory ? 'selected' : 'unselected'
          }`}
          onClick={() => handleOnClick(category.key)}
        >
          <span>{category.value}</span>
        </button>
      ))}
    </>
  );
};

ToggleButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCategoryToggle: PropTypes.func.isRequired,
};

export default ToggleButtons;

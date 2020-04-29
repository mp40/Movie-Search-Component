import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ToggleButtons = ({ value, categories, handleCategoryToggle }) => {
  const handleOnClick = (category) => {
    handleCategoryToggle(category);
  };

  return (
    <div className="toggleButtons">
      {categories.map((category) => (
        <button
          type="button"
          key={category.key}
          className={`toggleButton ${
            category.key === value ? 'selected' : 'unselected'
          }`}
          onClick={() => handleOnClick(category.key)}
        >
          <span>{category.value}</span>
        </button>
      ))}
    </div>
  );
};

ToggleButtons.propTypes = {
  value: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCategoryToggle: PropTypes.func.isRequired,
};

export default ToggleButtons;

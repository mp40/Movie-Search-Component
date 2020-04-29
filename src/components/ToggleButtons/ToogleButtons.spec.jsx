import React from 'react';
import { shallow } from 'enzyme';

import ToggleButtons from './index';

describe('filtering search results list', () => {
  const categories = [
    { key: 'all', value: 'All' },
    { key: 'movie', value: 'Movies' },
    { key: 'tv', value: 'TV Shows' },
    { key: 'person', value: 'People' },
  ];

  const handleCategoryToggle = jest.fn();

  const wrapper = shallow(
    <ToggleButtons
      value="all"
      categories={categories}
      handleCategoryToggle={handleCategoryToggle}
    />
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return toggle value for first button', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(handleCategoryToggle).toHaveBeenCalledWith(categories[0].key);
  });

  it('should return toggle value for second button', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(handleCategoryToggle).toHaveBeenCalledWith(categories[1].key);
  });

  it('should return toggle value for third button', () => {
    wrapper.find('button').at(2).simulate('click');
    expect(handleCategoryToggle).toHaveBeenCalledWith(categories[2].key);
  });

  it('should return toggle value for forth button', () => {
    wrapper.find('button').at(3).simulate('click');
    expect(handleCategoryToggle).toHaveBeenCalledWith(categories[3].key);
  });
});

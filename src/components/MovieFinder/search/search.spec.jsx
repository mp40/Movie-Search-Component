import React from 'react';
import { shallow } from 'enzyme';
import MovieFinderSearch from './index';

describe('MovieFinder search input', () => {
  const handleSearch = jest.fn();
  const handleFilterChange = jest.fn();
  const wrapper = shallow(
    <MovieFinderSearch
      handleSearch={handleSearch}
      handleFilterChange={handleFilterChange}
    />,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should accept text', () => {
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'Biggles' } });
    expect(wrapper.html()).toContain('<input type="text" value="Biggles"/>');
  });
  it('should submit query when search button clicked', () => {
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(handleSearch).toHaveBeenCalled();
  });
  it('should be possible to set filter to all', () => {
    const button = wrapper.find('button').at(0);
    button.simulate('click');
    expect(handleFilterChange).toHaveBeenCalledWith('all');
  });
  it('should be possible to set filter to movies', () => {
    const button = wrapper.find('button').at(1);
    button.simulate('click');
    expect(handleFilterChange).toHaveBeenCalledWith('movie');
  });
  it('should be possible to set filter to tv shows', () => {
    const button = wrapper.find('button').at(2);
    button.simulate('click');
    expect(handleFilterChange).toHaveBeenCalledWith('tv');
  });
  it('should be possible to set filter to people', () => {
    const button = wrapper.find('button').at(3);
    button.simulate('click');
    expect(handleFilterChange).toHaveBeenCalledWith('person');
  });
});

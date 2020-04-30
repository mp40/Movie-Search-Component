import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './index';

describe('MovieFinder search input', () => {
  const handleSearch = jest.fn();
  const handleReset = jest.fn();

  const wrapper = shallow(
    <SearchBar handleSearch={handleSearch} handleReset={handleReset} />,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should submit query as text is entered', () => {
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'Biggles' } });
    expect(handleSearch).toHaveBeenCalledWith('Biggles');
  });
  it('should clear query when clear button clicked', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('input').at(0).props().value).toBe('');
    expect(handleReset).toHaveBeenCalled();
  });
  it('should not send empty query', () => {
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: '' } });
    expect(handleSearch).not.toHaveBeenCalled();
  });
});

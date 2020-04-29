import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './index';

describe('MovieFinder search input', () => {
  const handleSearch = jest.fn();
  const handleReset = jest.fn();
  const event = { preventDefault: () => {} };

  const wrapper = shallow(
    <SearchBar handleSearch={handleSearch} handleReset={handleReset} />
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should accept text', () => {
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'Biggles' } });
    expect(wrapper.find('input').at(0).props().value).toBe('Biggles');
  });
  it('should submit query when search button clicked', () => {
    const form = wrapper.find('form');
    form.simulate('submit', event);
    expect(handleSearch).toHaveBeenCalledWith('Biggles');
  });
  it('should clear query when clear button clicked', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('input').at(0).props().value).toBe('');
    expect(handleReset).toHaveBeenCalled();
  });
  it('should not send empty query', () => {
    const form = wrapper.find('form');
    form.simulate('submit', event);
    expect(handleSearch).not.toHaveBeenCalled();
  });
});

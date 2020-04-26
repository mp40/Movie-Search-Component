import React from 'react';
import { shallow } from 'enzyme';

import MovieFinder from './index';

import output from '../../fixtures/output.json';

describe('filtering search results list', () => {
  const wrapper = shallow(<MovieFinder />);

  it('should render full list is all selected', () => {
    wrapper.find('MovieFinderSearch').dive()
      .find('button').at(0)
      .simulate('click');
    expect(wrapper.find('MovieFinderCard').length).toBe(output.length);
  });

  it('should filter list by movie', () => {
    wrapper.find('MovieFinderSearch').dive()
      .find('button').at(1)
      .simulate('click');
    expect(wrapper.find('MovieFinderCard').length).toBe(16);
  });

  it('should filter list by tv shows', () => {
    wrapper.find('MovieFinderSearch').dive()
      .find('button').at(2)
      .simulate('click');
    expect(wrapper.find('MovieFinderCard').length).toBe(2);
  });

  it('should filter list by people', () => {
    wrapper.find('MovieFinderSearch').dive()
      .find('button').at(3)
      .simulate('click');
    expect(wrapper.find('MovieFinderCard').length).toBe(2);
  });
});

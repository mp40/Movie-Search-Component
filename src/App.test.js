import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('widget review app', () => {
  const wrapper = shallow(<App />);
  it('should render the movie finder widget', () => {
    expect(wrapper.find('MovieFinder').exists()).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('wiring test', () => {
const wrapper = shallow(<App/>)
  it('should work',() => {
    expect(wrapper.text()).toContain('Movie Search App');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import ProductItem from '../src/ProductItem';
describe('ProductItem', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ProductItem debug />);
  
    expect(component).toMatchSnapshot();
  });
});
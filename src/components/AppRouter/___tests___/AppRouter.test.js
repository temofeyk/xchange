import React from 'react';
import {AppRouter} from '../../AppRouter/AppRouter';
import {PrivateRoute} from '../../PrivateRoute';
import {Switch, Route, Redirect} from 'react-router-dom';
import {shallow} from 'enzyme';

describe('component AppRouter', () => {
  const wrapper = shallow(<AppRouter />);
  let num = 1;

  it(num++ + '. should exists Switch component', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it(num++ + '. should exists component with path="/trade/:selected"', () => {
    expect(wrapper.find('[path="/trade/:selected"]')).toHaveLength(1);
  });

  it(num++ + '. should exists Route with path="/"', () => {
    expect(
      wrapper
        .find(Route)
        .at(0)
        .props().path,
    ).toEqual('/');
  });

  it(num++ + '. should exists Redirect with to="/trade/btc"', () => {
    expect(
      wrapper
        .find(Redirect)
        .at(0)
        .props().to,
    ).toEqual('/trade/btc');
  });
});

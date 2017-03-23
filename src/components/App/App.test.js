import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('testing App component', () => {

  it('App should render', () => {
    const wrapper = shallow ( <App />)

    expect(wrapper.contains(
      <h2 className="swapi-header">SWAPI  BOX</h2>))
      .toEqual(true);

    expect(wrapper.find('SwapiBox').length).toEqual(1)
  })

  it('App should render a component called SwapiBox', () => {
    const wrapper = shallow ( <App />)
    expect(wrapper.find('SwapiBox').length).toEqual(1)
  })

})




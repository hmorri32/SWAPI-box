import React              from 'react';
import { shallow, mount } from 'enzyme';
import RandomQuote             from './RandomQuote';

describe('testing our randomquote generator', () => {
  it('should render', () => {
    const wrapper = shallow( <RandomQuote /> )
    console.log(wrapper.debug());
    expect(wrapper.find('#wrapper').length).toBe(1)
  })

  it('should render given a cool quote', () => {
    const coolQuote = 'bloody hell m8'
    const wrapper   = mount( <RandomQuote quote={ coolQuote } /> )
    
    expect(wrapper.find('RandomQuote').length).toBe(1)
    expect(wrapper.find('#wrapper').length).toBe(1)
    expect(wrapper.contains(<p>bloody hell m8</p>)).toEqual(true);
  })
})
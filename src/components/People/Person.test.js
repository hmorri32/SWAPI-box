import React              from 'react';
import { shallow, mount } from 'enzyme';
import Person             from './Person';

describe('testing Person component', () => {
  it('Person should have a default state homeworld that is an empty string, ', () => {
    const wrapper = shallow( <Person /> )
    const state   = wrapper.state();

    expect(state.homeworld).toBe('')
  })

  it('Person should have a default state species that is an empty string, ', () => {
    const wrapper = shallow( <Person /> )
    const state   = wrapper.state();

    expect(state.species).toBe('')
  })

  it('Person should have a default state homeworld that is an empty string, ', () => {
    const wrapper = shallow( <Person /> )
    const state   = wrapper.state();

    expect(state.category).toBe('')
  })

  it('Person should have a default state homeworld that is an empty string, ', () => {
    const wrapper = shallow( <Person /> )
    const state   = wrapper.state();

    expect(state.category).toBe('')
  })

  it('Person should have a default state homeworld that is an empty string, ', () => {
    const wrapper = shallow( <Person /> )
    const state   = wrapper.state();

    expect(state.category).toBe('')
  })
})
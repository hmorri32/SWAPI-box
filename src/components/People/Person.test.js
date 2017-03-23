import React              from 'react';
import { shallow, mount } from 'enzyme';
import Person             from './Person';

describe('testing Person component', () => {

  const mockPeople = [
    { name: 'planet town',
      species: 'Pineapples',
      population: 10,
      climate: 'hot!',
      language: 'english',
      homeworld: []
    }
  ];

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

  it('Person should have a default state population that is an empty string, ', () => {
    const wrapper = shallow( <Person /> )
    const state   = wrapper.state();

    expect(state.population).toBe('')
  })

  it('Person should have a default state language that is an empty string, ', () => {
    const wrapper = mount( <Person
                                name='planet'
                                homeworld='suhh'
                                species='dude'
                                population='alot'
                                language='english'/>
                            )
    const state   = wrapper.state();
    expect(state.language).toBe('')
  })

  it('Person should receive props and render ', () => {
    const wrapper = mount(  <Person
                                name='chad'
                                homeworld='suhh'
                                species='dude'
                                population='alot'
                                language='english'/>
                            )
    expect(wrapper.props().name).toBe('chad')
    expect(wrapper.props().homeworld).toBe('suhh')
    expect(wrapper.props().species).toBe('dude')
    expect(wrapper.props().population).toBe('alot')
    expect(wrapper.props().language).toBe('english')
    expect(wrapper.find('Person').length).toBe(1)
    expect(wrapper.find('.cards-wrapper').length).toBe(1)
  })

  it('Person should receive props, update state, and render ', () => {
    const wrapper = mount(  <Person
                                name='chad'
                                homeworld='suhh'
                                species='dude'
                                population='alot'
                                language='english'/>
                            )
    const mockPeople = {
        name: 'planet town',
        species: 'Pineapples',
        population: 10,
        climate: 'hot!',
        language: 'english',
        homeworld: 'naboo',
      }

    expect(wrapper.props().name).toBe('chad')
    expect(wrapper.find('Person').length).toBe(1)
    expect(wrapper.find('.cards-wrapper').length).toBe(1)

    wrapper.setState({
      homeworld: mockPeople.homeworld,
      species: mockPeople.species,
      population: mockPeople.population,
      language: mockPeople.language
     })

    expect(wrapper.contains(<h2>chad</h2>)).toEqual(true);
    expect(wrapper.state().homeworld).toEqual('naboo')
    expect(wrapper.state().species).toEqual('Pineapples')
    expect(wrapper.state().population).toEqual(10)
  })

})
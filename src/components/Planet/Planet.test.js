import React              from 'react';
import { shallow, mount } from 'enzyme';
import Planet             from './Planet';

describe('testing Planet component', () => {
  const mockPlanet =
    { name: 'toby',
      terrain: 'pineapples',
      climate: 'hot!',
      population: '200',
      residents: []
    }

  it('planet should have a default state residents that is an empty array, ', () => {
    const wrapper = shallow( <Planet /> )
    const state   = wrapper.state();
    expect(state.residents).toEqual([])
  })

  it('planet should render stuff given the proper props ', () => {
    const wrapper = mount( <Planet
                                name={ mockPlanet.name }
                                terrain={ mockPlanet.terrain }
                                climate={ mockPlanet.climate }
                                population={ mockPlanet.population }
                                residents= {[]}
                                /> )
                                
    const state   = wrapper.state();
    expect(state.residents).toEqual([])
    expect(wrapper.props().name).toBe('toby')
    expect(wrapper.props().terrain).toBe('pineapples')
    expect(wrapper.props().climate).toBe('hot!')
    expect(wrapper.props().population).toBe('200')
    expect(wrapper.props().residents).toBeDefined()
    expect(wrapper.find('Planet').length).toBe(1)
    expect(wrapper.find('Planet').length).toBe(1)
  })


})
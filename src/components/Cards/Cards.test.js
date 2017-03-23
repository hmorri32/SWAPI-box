import React              from 'react';
import { shallow, mount } from 'enzyme';
import Cards              from './Cards';

describe('testing Cards component', () => {
  const mockPeople = [
    { name: 'planet town',
      species: 'Pineapples',
      population: 10,
      climate: 'hot!',
      language: 'english',
      homeworld: []
    }];
    
  const mockPlanet = [
    { name: 'toby',
      terrain: 'pineapples',
      climate: 'hot!',
      population: '200',
      residents: []
    }
  ]

  it('should not render if passed not passed props ', () => {
    const wrapper = shallow( <Cards />)
    expect(wrapper.find('.card').length).toBe(0)
  })

  it('should render Person cards if passed People props ', () => {
    const wrapper = mount( <Cards
                              selectedContent={ mockPeople }
                              category='people'
                              />)
    expect(wrapper.find('.card').length).toBe(1)
    expect(wrapper.find('Person').length).toBe(1)
  })

  it('rendered person cards should contain proper props', () => {
    const wrapper = mount( <Cards
                              selectedContent={ mockPeople }
                              category='people'
                              />)
    expect(wrapper.find('.card').length).toBe(1)
    expect(wrapper.find('Person').length).toBe(1)
    expect(wrapper.find('Person').props().name).toBe('planet town')
    expect(wrapper.find('Person').props().species).toBe('Pineapples')
    expect(wrapper.find('Person').props().population).toBe(10)
    expect(wrapper.find('Person').props().language).toBe('english')
    expect(wrapper.find('Person').props().homeworld).toBeDefined()
  })

  it('should render Person cards if passed Planet props ', () => {
    const wrapper = shallow( <Cards
                                selectedContent={ mockPeople }
                                category='planet'
                                />)
    expect(wrapper.find('.card').length).toBe(1)
    expect(wrapper.find('Planet').length).toBe(1)
  })

  it('should render Ship cards if passed Ship props ', () => {
    const wrapper = shallow( <Cards
                                selectedContent={ mockPeople }
                                category='ship'
                                />)
    expect(wrapper.find('.card').length).toBe(1)
    expect(wrapper.find('Ship').length).toBe(1)
  })


})
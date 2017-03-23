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
      homeworld: [],
      skin_color: 'yar'
    }];

  const mockPlanet = [
    { name: 'toby',
      terrain: 'pineapples',
      climate: 'hot!',
      population: '200',
      residents: []
    }
  ]

  const mockShip = [
    { name: 'shippy mcShipFace',
      model: 'shipz',
      crew: 'derelicte!',
      passengers: 'more than you.',
      hyperdrive: [],
      hyperdrive_rating: 'neat'
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

  it('should render Planet cards if passed Planet props ', () => {
    const wrapper = shallow( <Cards
                                selectedContent={ mockPlanet }
                                category='planet'
                                />)
    expect(wrapper.find('.card').length).toBe(1)
    expect(wrapper.find('Planet').length).toBe(1)
  })

  it('Planet cards should receive the proper props ', () => {
    const wrapper = shallow( <Cards
                                selectedContent={ mockPlanet }
                                category='planet'
                                />)
    expect(wrapper.find('.card').length).toBe(1)
    expect(wrapper.find('Planet').length).toBe(1)
    expect(wrapper.find('Planet').props().name).toBe('toby')
    expect(wrapper.find('Planet').props().terrain).toBe('pineapples')
    expect(wrapper.find('Planet').props().climate).toBe('hot!')
    expect(wrapper.find('Planet').props().population).toBe('200')
    expect(wrapper.find('Planet').props().residents).toBeDefined()
  })

  it('should render Ship cards if passed Ship props ', () => {
    const wrapper = shallow( <Cards
                                selectedContent={ mockShip }
                                category='ship'
                                />)
    expect(wrapper.find('.card').length).toBe(1)
    expect(wrapper.find('Ship').length).toBe(1)
  })

  it('ship cards should receive the proper props', () => {
    const wrapper = shallow( <Cards
                                selectedContent={ mockShip }
                                category='ship'
                                />)
    expect(wrapper.find('.card').length).toBe(1)
    expect(wrapper.find('Ship').length).toBe(1)
    expect(wrapper.find('Ship').props().name).toBe('shippy mcShipFace')
    expect(wrapper.find('Ship').props().model).toBe('shipz')
    expect(wrapper.find('Ship').props().crew).toBe('derelicte!')
    expect(wrapper.find('Ship').props().passengers).toBe('more than you.')
  })

  it('favorites should render Person card given Person data', () => {
    const wrapper = shallow( <Cards
                                selectedContent={ mockPeople }
                                category='favorites'
                                favorites={ mockPeople }
                                />)

    expect(wrapper.find('Person').length).toBe(1)
    expect(wrapper.find('Ship').length).toBe(0)
    expect(wrapper.find('Planet').length).toBe(0)
  })

  it('favorites should render planet card given planet data', () => {
    const wrapper = shallow( <Cards
                                selectedContent={ mockPlanet }
                                category='favorites'
                                favorites={ mockPlanet }
                                />)
    expect(wrapper.find('Planet').length).toBe(1)
    expect(wrapper.find('Ship').length).toBe(0)
    expect(wrapper.find('Person').length).toBe(0)
  })

  it('favorites should render Ship card given Ship data', () => {
    const wrapper = shallow( <Cards
                                selectedContent={ mockShip }
                                category='favorites'
                                favorites={ mockShip }
                                />)
    expect(wrapper.find('Planet').length).toBe(0)
    expect(wrapper.find('Ship').length).toBe(1)
    expect(wrapper.find('Person').length).toBe(0)
  })


})
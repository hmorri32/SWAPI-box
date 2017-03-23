import React              from 'react';
import { shallow, mount } from 'enzyme';
import Ship               from './Ship';

describe('testing ship component', () => {
  const mockShip = {
      name: 'shippy mcShipFace',
      model: 'shipz',
      crew: 'derelicte!',
      passengers: 'more than you.',
      hyperdrive: 1
    }

  it('should bloody work & render', () => {
    const wrapper = mount( <Ship />)
    expect(wrapper.find('Ship').length).toBe(1)
  })

  it('should be able to accept props', () => {
    const wrapper = mount( <Ship
                              name={ mockShip.name }
                              model={ mockShip.model }
                              crew={ mockShip.crew }
                              passengers={ mockShip.passengers }
                              hyperdrive={ mockShip.hyperdrive }
                              /> )
  
    expect(wrapper.props().name).toBe('shippy mcShipFace')
    expect(wrapper.props().model).toBe('shipz')
    expect(wrapper.props().crew).toBe('derelicte!')
    expect(wrapper.props().passengers).toBe('more than you.')
    expect(wrapper.props().hyperdrive).toBe(1)
    expect(wrapper.find('Ship').length).toBe(1)
   })

  it('should be able to accept props and render accordingly', () => {
    const wrapper = mount( <Ship
                              name={ mockShip.name }
                              model={ mockShip.model }
                              crew={ mockShip.crew }
                              passengers={ mockShip.passengers }
                              hyperdrive={ mockShip.hyperdrive }
                              /> )

    expect(wrapper.props().name).toBe('shippy mcShipFace')
    expect(wrapper.props().model).toBe('shipz')
    expect(wrapper.props().crew).toBe('derelicte!')
    expect(wrapper.props().passengers).toBe('more than you.')
    expect(wrapper.props().hyperdrive).toBe(1)
    expect(wrapper.find('Ship').length).toBe(1)
    expect(wrapper.contains(<h2>shippy mcShipFace</h2>)).toBe(true)
   })

})
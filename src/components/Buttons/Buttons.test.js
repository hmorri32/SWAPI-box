import React              from 'react';
import { shallow, mount } from 'enzyme';
import Buttons            from './Buttons';

describe('testing Button component', () => {
  it('Buttons should render', () => {
    const wrapper = shallow ( <Buttons />)

    expect(wrapper.find('button').length).toEqual(4)
  })

  it('onclick function should fire on last button click', () => {

    const mock    = jest.fn()
    const wrapper = mount( <Buttons
                                peopleData={ mock }
                                shipData={ mock }
                                planetData={ mock }
                                favorites={ mock }
                                 />)

    const btn1  = wrapper.find('.button').first()
    const btn2  = wrapper.find('.button').at(1)
    const btn3  = wrapper.find('.button').at(2)
    const btn4  = wrapper.find('.button').last()

    btn1.simulate('click')
    btn2.simulate('click')
    btn3.simulate('click')
    btn4.simulate('click')

    expect(mock).toHaveBeenCalledTimes(4)
  })

  it('Button should receive three functions as props', () => {

    const mock    = jest.fn()
    const wrapper = mount( <Buttons
                                peopleData={ mock }
                                shipData={ mock }
                                planetData={ mock }
                                favorites={ mock }
                                />)

    expect(wrapper.props().peopleData).toBeDefined()
    expect(wrapper.props().shipData).toBeDefined()
    expect(wrapper.props().planetData).toBeDefined()
    expect(wrapper.props().favorites).toBeDefined()
  })
})

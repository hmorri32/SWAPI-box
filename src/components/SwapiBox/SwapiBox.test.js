import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import SwapiBox from './SwapiBox';
import Buttons from '../Buttons/Buttons'

describe('testing SwapiBox component', () => {
  const mockPeople = [
    { name: 'planet town',
      terrain: 'Pineapples',
      population: 10,
      climate: 'hot!'
    }];

  it('SwapiBox should have a default state category that is an empty string, ', () => {
    const wrapper = shallow( <SwapiBox /> )
    const state   = wrapper.state();

    expect(state.category).toBe('')
  })

  it('SwapiBox should have a default state selectedContent that is an empty string', () => {
    const wrapper = shallow( <SwapiBox /> )
    const state   = wrapper.state();
    expect(state.selectedContent).toBe('')
  })

  it('SwapiBox should have a default state randomQuote that is an empty string', () => {
    const wrapper = shallow( <SwapiBox /> )
    const state   = wrapper.state();
    expect(state.randomQuote).toBe('')
  })

  it('SwapiBox should have a default state favorites that is an empty array', () => {
    const wrapper = shallow( <SwapiBox /> )
    const state   = wrapper.state();
    expect(state.favorites).toEqual([])
  })

  it('SwapiBox should render a randomQuote component', () => {
    const wrapper = shallow(<SwapiBox />)
    const random  = wrapper.find('RandomQuote')

    expect(random.length).toBe(1)
  })

  it('RandomQuote should receive props of quote ', () => {
    const wrapper = shallow(<SwapiBox />)
    const quote   = wrapper.find('RandomQuote')

    expect(quote.props().quote).toBe('')
  })

  it('swapiBox should render button component', () => {
    const wrapper = shallow(<SwapiBox />)
    const buttons = wrapper.find('Buttons')
    expect(buttons.length).toBe(1)
  })

  it('Button component should receive 4 functions as props', () => {
    const wrapper = shallow(<SwapiBox />)
    const buttons = wrapper.find('Buttons').first()

    expect(buttons.props().peopleData).toBeDefined()
    expect(buttons.props().planetData).toBeDefined()
    expect(buttons.props().shipData).toBeDefined()
    expect(buttons.props().favorites).toBeDefined()
  })

  it('swapiBox should render Cards component', () => {
    const wrapper = shallow(<SwapiBox />)
    const card    = wrapper.find('Cards')
    expect(card.length).toBe(1)
  })

  it('Cards component should receive props of selectedContentand category ', () => {
    const wrapper = shallow(<SwapiBox />)
    const card    = wrapper.find('Cards')
    expect(card.props().selectedContent).toBeDefined()
    expect(card.props().category).toBeDefined()
  })

  it('mock function should fire on first click', () => {
    // fetchMock.post('https://swapi.co/api/people/', {status:200})

    const mock    = jest.fn()
    const wrapper = mount( <Buttons peopleData={ mock } />)
    const btn     = wrapper.find('.button').first()

    btn.simulate('click')

    expect(mock).toHaveBeenCalled()
  })

  it('mock function should fire on second button click', () => {

    const mock    = jest.fn()
    const wrapper = mount( <Buttons planetData={ mock } />)
    const btn     = wrapper.find('.button').at(1)

    btn.simulate('click')

    expect(mock).toHaveBeenCalled()
  })

  it('onclick function should fire on third button click', () => {

    const mock    = jest.fn()
    const wrapper = mount( <Buttons shipData={ mock } />)
    const btn     = wrapper.find('.button').at(2)

    btn.simulate('click')

    expect(mock).toHaveBeenCalled()
  })

  it('onclick function should fire on last button click', () => {

    const mock    = jest.fn()
    const wrapper = mount( <Buttons favorites={ mock } />)
    const btn     = wrapper.find('.button').last()

    btn.simulate('click')

    expect(mock).toHaveBeenCalled()
  })

})










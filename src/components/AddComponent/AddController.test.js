import React from 'react'
import AddController from './AddController'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import faker from 'faker'

Enzyme.configure({ adapter: new Adapter() })

describe('<AddController />', () => {
    let wrapper = Enzyme.mount(<AddController/>)
    let randNumber = faker.random.number({ min: 0, max: 1}) 
    const originalConsoleError = console.error;

    beforeEach(() => {
      console.error = jest.fn((msg) => {
        if (msg.includes('Warning: useLayoutEffect does nothing on the server')) {
          return null;
        } else {
          originalConsoleError(msg);
        }
      });
      global.Math.random = jest.fn().mockImplementation(() => randNumber)
      global.Math.ceil = jest.fn().mockImplementation(n => n)
    });

    afterEach(() => {
      jest.resetAllMocks()
    }) 

    it('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

    it('should randomize images when click',() =>{
      wrapper.find('button[type="randomize"]').simulate('click')
      expect(wrapper.find('img').prop('alt')).toBe(`${randNumber*10}.gif`)
    })

})
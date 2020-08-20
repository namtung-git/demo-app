import React from 'react'
import EditController from './EditController'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<EditController />', () => {
    let wrapper = Enzyme.mount(<EditController/>)

    const originalConsoleError = console.error;

    beforeEach(() => {
      console.error = jest.fn((msg) => {
        if (msg.includes('Warning: useLayoutEffect does nothing on the server')) {
          return null;
        } else {
          originalConsoleError(msg);
        }
      });
    });

    it('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });
})
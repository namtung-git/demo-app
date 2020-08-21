import React from 'react'
import EditController from './EditController'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<EditController />', () => {
    let wrapper = Enzyme.shallow(<EditController/>)

    it('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });
})
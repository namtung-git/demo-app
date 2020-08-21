import React from 'react'
import AddIcons from './AddIcons'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('<AddIcons />', () => {
    const wrapper =  Enzyme.shallow(<AddIcons/>)
    it('should randomize the image', () => {
        wrapper.find('button').simulate('click')
        expect(wrapper.prop('image').value).toBe(`1.gif`)
    })

})

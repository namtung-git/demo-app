import React from 'react'
import Enzyme from 'enzyme'
import AddIcons from './AddIcons'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<AddIcons />', () => {
    let wrapper = null
    let mockFn= jest.fn()
    beforeEach(()=> {
        wrapper = Enzyme.shallow(<AddIcons randomize={mockFn}/>)
    })

    it('should call randomize when click',() =>{
        wrapper.find('button').simulate('click')
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})
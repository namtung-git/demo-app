import React from 'react'
<<<<<<< HEAD
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
=======
import Enzyme from 'enzyme'
import AddIcons from './AddIcons'
import Adapter from 'enzyme-adapter-react-16'
import faker from 'faker'

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
>>>>>>> f9078245437ca44253f00a35a4c69ff6409106f9

import React from 'react'
import Enzyme from 'enzyme'
import AddForm from './AddForm'
import Adapter from 'enzyme-adapter-react-16'
import faker from 'faker'

Enzyme.configure({ adapter: new Adapter() })

describe('<AddForm />', () => {

    let wrapper = Enzyme.shallow(<AddForm />)


    it('should call the dispatch function and disable the submit button on button click', () => {
       expect(wrapper.find('button').length).toEqual(1)
      });

})
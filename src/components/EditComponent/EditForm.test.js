import React from 'react'
import Enzyme from 'enzyme'
import EditForm from './EditForm'
import Adapter from 'enzyme-adapter-react-16'
import faker from 'faker'

Enzyme.configure({ adapter: new Adapter() })

describe('<EditForm />', () => {

    let mockInitial = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        job: faker.name.jobTitle()
    }

    let mockUpdate = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        job: faker.name.jobTitle()
    }

    let mockDispatch = jest.fn()

    let wrapper = Enzyme.shallow(<EditForm editVillager={mockInitial} closeEditor={mockDispatch}/>)

    it('should set the firstName value on change event with trim', () => {
      wrapper.find('input[name="firstName"]').simulate('change', {
          target: {
          name: "firstName",
          value: mockUpdate.firstName,
        },
      });
      expect(wrapper.find('input[name="firstName"]').prop('values')).toEqual(
        mockUpdate.firstName,
      );
  });

    it('should set the lastName value on change event with trim', () => {
        wrapper.find('input[name="lastName"]').simulate('change', {
            target: {
            name: "lastName",
            value: mockUpdate.lastName,
          },
        });
        expect(wrapper.find('input[name="lastName"]').prop('values')).toEqual(
            mockUpdate.lastName,
        );
    });

    it('should set the jobTitle value on change dropdown', () => {
        wrapper.find('select[name="job"]').simulate('change', {
            target: {
            name: "job",
            value: mockUpdate.job,
          },
        });
        expect(wrapper.find('select[name="job"]').prop('value')).toEqual(
          mockUpdate.job,
        );
    });

    it('should close Editor value', () => {
        wrapper.find('button[type="close"]').simulate('click')
        expect(mockDispatch).toHaveBeenCalled();
    })

})
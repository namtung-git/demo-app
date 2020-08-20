import React from 'react'
import Enzyme from 'enzyme'
import AddForm from './AddForm'
import Adapter from 'enzyme-adapter-react-16'
import faker from 'faker'

Enzyme.configure({ adapter: new Adapter() })

describe('<AddForm />', () => {

    let wrapper = Enzyme.shallow(<AddForm />)
    let mock = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        job: faker.name.jobTitle()
    }

    it('should set the firstName value on change event with trim', () => {
      wrapper.find('input[name="firstName"]').simulate('change', {
          target: {
          name: "firstName",
          value: mock.firstName,
        },
      });
      expect(wrapper.find('input[name="firstName"]').prop('values')).toEqual(
        mock.firstName,
      );
  });

    it('should set the firstName value on change event with trim', () => {
        wrapper.find('input[name="lastName"]').simulate('change', {
            target: {
            name: "lastName",
            value: mock.lastName,
          },
        });
        expect(wrapper.find('input[name="lastName"]').prop('values')).toEqual(
          mock.lastName,
        );
    });

    it('should set the lastName value on change event with trim', () => {
        wrapper.find('select[name="job"]').simulate('change', {
            target: {
            name: "job",
            value: mock.job,
          },
        });
        expect(wrapper.find('select[name="job"]').prop('value')).toEqual(
          mock.job,
        );
    });

})
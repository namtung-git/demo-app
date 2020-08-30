import React from 'react'
import {render, cleanup, fireEvent } from '@testing-library/react'
import AddController from './AddController'
import faker from 'faker'

afterEach(cleanup)
 
it('should take a snapshot', () => {
   const { asFragment } = render(<AddController />)
   expect(asFragment(<AddController />)).toMatchSnapshot()
  })

it('should randomize when hit the button', () => {
  const { getByTestId  } = render(<AddController />)
  fireEvent.click(getByTestId ('btn-randomize'))
  expect(getByTestId('icon').textContent).toBe('-1')
})
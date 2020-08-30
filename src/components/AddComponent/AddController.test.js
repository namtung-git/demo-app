import React from 'react'
import {render, cleanup, fireEvent } from '@testing-library/react'
import AddController from './AddController'
// import faker from 'faker'

afterEach(cleanup)
 
it('should take a snapshot', () => {
   const { asFragment } = render(<AddController />)
   expect(asFragment(<AddController />)).toMatchSnapshot()
  })
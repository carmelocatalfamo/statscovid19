import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Home from '../../pages'

test('Homepage render welcome message', () => {
  render(<Home />)
  expect(screen.getByTestId('welcome_message')).toHaveTextContent('Hello world')
})

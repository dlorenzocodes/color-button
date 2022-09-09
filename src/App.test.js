import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});


test('turns blue when clicked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})

  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton.textContent).toBe('Change to red')
});

test('check if button is intially enabled and checkbox is unchecked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  expect(colorButton).toBeEnabled()
  expect(checkbox).not.toBeChecked()
})


test('check if button is disabled when checkbox is clicked and enabled when clicked again', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  expect(checkbox).toBeChecked()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  expect(checkbox).not.toBeChecked()
})

test('check is button is gray when disabled and reverts to red', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})

test('check is button is gray when disabled and reverts to blue', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})

  fireEvent.click(colorButton)

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})

















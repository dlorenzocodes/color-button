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
  const checkbox = screen.getByRole('checkbox')

  expect(colorButton).toBeEnabled()
  expect(checkbox).not.toBeChecked()
})


test('check if button is disabled when checkbox is clicked and enabled when clicked again', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  expect(checkbox).toBeChecked()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  expect(checkbox).not.toBeChecked()
})

















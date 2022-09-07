import { getByText, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// React Testing Library Notes

render()
// creates a virtual DOM from argument JSX
// Access virtual DOM via screen global

getByText()
// method that finds elements by text
// pass a regular expression to find the text or string


// Jest Assertions
expect()

.toBeInTheDocument()
// matcher comes from Jest-DOM
.toBe()
.toHaveLength()

// Jest-DOM
.toBeVisible()
.toBeChecked()


// React Testing Library with
// rendering components into virtual DOM
// searching virtual DOM
// interacting with virtual DOM

// Jest 
// it's a test runner
// finds tests, run them, make assertions

// TDD
// writing test before writing code

// React Testing Library
// creates virtual DOM and provides
// utilities to interact with the DOM









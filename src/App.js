import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed')
  const newButtonColor =  buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  const [isDisabled, setIsDisabled] = useState(false)
  const handleCheckbox = () => {
    setIsDisabled( prevState => !prevState)
  }

  return (
    <div className="App">
      <button 
        style={{ background: isDisabled ? 'grey' : buttonColor }} 
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input 
        type='checkbox'
        aria-checked={isDisabled}
        onChange={handleCheckbox}
        id='disable-button-checkbox'
      />
      <label htmlFor='disable-button-checkbox'>
        Disable button
      </label>
    </div>
  );
}

export default App;

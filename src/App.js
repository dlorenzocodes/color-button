import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [ buttonColor, setButtonColor ] = useState('red')
  const newButtonColor =  buttonColor === 'red' ? 'blue' : 'red'

  const [isDisabled, setIsDisabled] = useState(false)
  const handleCheckbox = () => {
    setIsDisabled( prevState => !prevState)
  }

  return (
    <div className="App">
      <button 
        style={{ background: buttonColor }} 
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input 
        type='checkbox'
        aria-checked={isDisabled}
        onChange={handleCheckbox}
      />
    </div>
  );
}

export default App;

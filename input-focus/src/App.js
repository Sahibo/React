import React, {useEffect, useRef} from 'react'
import './App.css';

function App() {

  return (
    <div className="App">
      <FocusInput/>
    </div>
  );
}

export function FocusInput()
{
  let inputValue = useRef(null)
  useEffect(() =>
  {
    inputValue.current.focus()
  }, [])
  
  const handleSetFocus = () =>
  {
    inputValue.current.focus();
  }

  return (
    <div>
      <input ref={inputValue}></input>
      <button onClick={handleSetFocus}>FocusPokus</button>
    </div>
  )
}

export default App;

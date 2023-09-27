import './App.css';
import React, { useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function App() {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const toggleComponentA = () => {
    setShowA(!showA);
    setShowB(false);
  };

  const toggleComponentB = () => {
    setShowB(!showB);
    setShowA(false);
  };

  return (
    <div className="App">
      <h1>Show components</h1>
      
      <button onClick={toggleComponentA}>Show A</button>
      <button onClick={toggleComponentB}>Show B</button>

      {showA && <ComponentA/>}
      {showB && <ComponentB/>}
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import TaskList from './TaskList';

function App() {
  const tasks = [
    { id: 1, name: 'Make a breakfast' },
    { id: 2, name: 'Go to the gym' },
    { id: 3, name: 'Do homeworks' },
    { id: 4, name: 'Go to sleep' },
  ];
  return (
    <div className="App">
      <h1>Task list</h1>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;

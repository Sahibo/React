import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import React, { useState } from 'react';

function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskText !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
      console.log(tasks);
    }
  };

  const handleDeleteTask = (index) => {
    const deletedTasks = [...tasks]
    deletedTasks.splice(index, 1)
    setTasks(deletedTasks)
  };

    const handleDeleteAllTasks = () => {
      setTasks([]);
    };

  return (
    <div className="container">
      <div className="todo-container">
        <div className="todo-logo">
          <span>To-Do List</span>
          <i className="fa-solid fa-list" style={{ color: '#eb5e28', fontSize: '30px' }}></i>
        </div>
        <Header taskText={taskText} setTaskText={setTaskText} handleAddTask={handleAddTask}/>
        <Main tasks={tasks} handleDeleteTask={handleDeleteTask}/>
        <div className="buttons">
          <button onClick={handleDeleteAllTasks}>Delete all</button>
        </div>
      </div>
    </div>
  );
}

export default App;
import './App.css';
import React, { useState } from 'react';

function Header({ taskText, setTaskText, handleAddTask }) { 

  return (
    <div className="row">
        <input
          type="text"
          placeholder="Add your task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}/>

        <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default Header;

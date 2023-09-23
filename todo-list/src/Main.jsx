import './App.css';
import React, { useState } from 'react';

function Main({ tasks, handleDeleteTask }) {
  return (
    <div className="main-container">
      <ul className="list-container">
        {tasks.map((entry, index) => (
          <div className="list-div" key={index}>
            <li>{entry}</li>
            <i className="fa-solid fa-trash" onClick={() => { handleDeleteTask(index); }}></i>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Main;

